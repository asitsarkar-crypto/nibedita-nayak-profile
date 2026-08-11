import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { content, type Locale } from './content'

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (typeof content)['en']
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'nn-locale'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Locale | null
    if (saved === 'en' || saved === 'bn' || saved === 'hi') return saved
    return 'en'
  })

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    localStorage.setItem(STORAGE_KEY, next)
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale === 'bn' ? 'bn' : locale === 'hi' ? 'hi' : 'en'
    document.title = content[locale].meta.title
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', content[locale].meta.description)
  }, [locale])

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: content[locale],
    }),
    [locale, setLocale],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
