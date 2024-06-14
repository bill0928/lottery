import { ImageProps } from "next/image"
import { ReactNode } from "react"

type TranslationItem = string | Translation
interface Translation {
  [key: string]: TranslationItem
}

export type LangType = {
  code: string
  language: string
  locale?: Translation
}
