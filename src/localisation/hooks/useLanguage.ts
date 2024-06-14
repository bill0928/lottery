import { useContext, useEffect } from 'react'
import { LanguageContext } from '@/localisation/contexts/LanguageContext'
import i18n from '../i18n'

export type I18n = {
  set: (languange: string) => void
  language: string | undefined
} & Pick<typeof i18n, 't' | 'st'>

const useLanguage = (): I18n => {
  const { setLanguage, selectedLanguage } = useContext(LanguageContext)
  
  return {
    set: setLanguage,
    language: selectedLanguage,
    t: i18n.t,
    st: i18n.st,
  }
}

export default useLanguage
