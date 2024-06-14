import { fetchTranslation, replace } from './utils';

export const settings = {
  availableLocales: {},
  localeKey: 'en',
  translationsObject: {},
  getTranslations: null,
  getLocale: null,
  localeSpace: null,
  handleMissingTranslation: (text) => text.split('.').pop(),

  get translations() {
    return this.getTranslations ? this.getTranslations() : this.translationsObject;
  },

  set translations(translations) {
    this.translationsObject = translations;
  },

  get locale() {
    return this.getLocale ? this.getLocale() : this.localeKey;
  },

  getLocaleObject(locale) {
    const l = locale || this.locale;
    return this.availableLocales[l] || this.availableLocales[l.split('-')[0]];
  },

  set locale(locale) {
    this.localeKey = locale;
  },
};

export const getLocale = () => settings.locale;

export const setLocale = (locale) => {
  settings.locale = locale;
  settings.getLocale = null;
  settings.localeSpace = null;
};

export const addLocale = (name, locale) => {
  settings.availableLocales[name] = locale;
};

export const addLocales = (locales) => {
  settings.availableLocales = {
    ...settings.availableLocales,
    ...locales,
  };
};

export const getTranslations = () => settings.translations;

export const setTranslations = (translations) => {
  settings.translations = translations;
  settings.getTranslations = null;
};

export const setLocaleGetter = (fn) => {
  if (typeof fn !== 'function') {
    throw new Error('Locale getter must be a function');
  }
  settings.getLocale = fn;
};

export const setTranslationsGetter = (fn) => {
  if (typeof fn !== 'function') {
    throw new Error('Translations getter must be a function');
  }
  settings.getTranslations = fn;
};

export const setHandleMissingTranslation = (fn) => {
  if (typeof fn !== 'function') {
    throw new Error('Handle missing translation must be a function');
  }
  settings.handleMissingTranslation = fn;
};



const _translate = (key, replacements = {}, options = {}) => {
  const locale = options.locale || settings.locale;
  let translation = '';
  let help = ''
  try {
    const translationLocale = settings.translations[locale]
      ? locale
      : locale.split('-')[0];
    translation = fetchTranslation(settings.translations, `${translationLocale}.${key}`, replacements.count);
  } catch (err) {
    console.log(`_translate err key:${key}`)
    if (options.returnNullOnError) return null;
    if (options.returnKeyOnError) return key;
    help = _translateHelp(key)
    if (help) return help

    return settings.handleMissingTranslation(key, replacements);
  }
  return replace(translation, replacements);
};
const _translateHelp = (key, replacements = {}) => {
  let translation = '';
  try {
    translation = fetchTranslation(settings.translations, `en-us.${key}`, replacements.count);
  } catch (err) {
    return settings.handleMissingTranslation(key, replacements);
  }
  return replace(translation, replacements);
};

export const translate = (key, replacement = {}) => {
  if (!key) return ''
  if (settings.localeSpace === null) settings.localeSpace = _translate('')
  const space = settings.localeSpace
  const arr = key.split('+')

  if (arr.length === 1) return _translate(key, replacement)
  return arr.map(k => _translate(k.trim(), replacement)).join(space)
}
