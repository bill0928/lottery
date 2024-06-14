import { createElement } from 'react'


import { setTranslations, setLocale, getLocale, translate } from './lib/core'
import { allLanguages, EN as DEFAULT } from '../languageCodes'

type Replacement = Record<string, string | number>

const isomorphicTranslate = (key: string, replacement?: Replacement) => {
  // if (!process.browser) return ''
  return translate(key, replacement)
}

const i18n = {
  getLocale,
  setLocale(locale: string) {
    // moment.locale(locale)
    // dayjs.locale(locale)
    setLocale(locale)
  },
  t: isomorphicTranslate,
  st(
    tag: string,
    className: string,
    key: string,
    replacement?: Replacement
  ): React.ReactElement {
    const str = isomorphicTranslate(key, replacement)
    return createElement(tag, { className }, str)
  },
}

export const init = (): void => {
  const translations: Record<string, Record<string, any>> = {}
  allLanguages.forEach(
    item => {
      translations[item.code] = item.locale!
      delete item.locale
    }
  )
  setTranslations(translations)

  i18n.setLocale(DEFAULT.code)
}

export default i18n