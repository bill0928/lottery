/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState, useCallback, useEffect } from 'react'
// import { useLayoutEffect } from '@react-spring/shared'
import { allLanguages, EN as DEFAULT } from '../languageCodes'
import i18n, { init } from '../i18n'

init()

const CACHE_KEY = 'language'

const LanguageContext = createContext<{
  selectedLanguage?: string;
  setLanguage: (lang: string) => void;
}>({
  selectedLanguage: DEFAULT.code,
  setLanguage: () => null
})
type Prop ={
  children: React.ReactNode

}

const LanguageContextProvider: React.FC<Prop> = ({ children }) => {
  const [language, setLanguage] = useState<string>(DEFAULT.code)

  const switchLanguage = useCallback(
    (language: string) => {
      i18n.setLocale(language)
      setLanguage(language)
    },
    []
  )

  const getStoredLang = useCallback(
    (storedLangCode: string | null) => {
      if (!storedLangCode) return undefined
      return allLanguages.find((language) => {
        return language.code === storedLangCode
      })
    },
    []
  )

  useEffect(
    () => {
      const storedLangCode = localStorage.getItem(CACHE_KEY)
      const storedLang = getStoredLang(storedLangCode)
      switchLanguage(storedLang?.code || DEFAULT.code)
    },
    [getStoredLang, switchLanguage]
  )

  const handleLanguageSelect = useCallback(
    (language: string) => {
      const lang = getStoredLang(language)
      if (lang) {
        switchLanguage(lang.code)
        localStorage.setItem(CACHE_KEY, lang.code)
      }
    },
    [getStoredLang, switchLanguage]
  )

  return (
    <LanguageContext.Provider
      value={{ selectedLanguage: language, setLanguage: handleLanguageSelect }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export { LanguageContext, LanguageContextProvider }
