import { createContext, type Dispatch, type SetStateAction } from 'react'
import type { Lang } from '../i18n/i18n'

export type LangContextType = {
  lang: Lang
  setLang: Dispatch<SetStateAction<Lang>>
}

export const LangContext = createContext<LangContextType | undefined>(undefined)