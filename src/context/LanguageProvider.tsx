import { useEffect, useState, type ReactNode } from 'react'
import { LangContext } from './LanguageContext'
import type { Lang } from '../i18n/i18n'

type Props = {
  initialLang?: Lang
  children: ReactNode
}

export function LangProvider({ initialLang = 'fr', children }: Props) {
  const [lang, setLang] = useState<Lang>(initialLang)

  useEffect(() => {
    document.documentElement.setAttribute('data-lang', lang)
  }, [lang])

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  )
}

export default LangProvider