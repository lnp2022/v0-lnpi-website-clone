"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type LocaleContextType = {
  locale: string
  setLocale: (locale: string) => void
}

const LocaleContext = createContext<LocaleContextType>({
  locale: "ko",
  setLocale: () => {},
})

export function LocaleProvider({
  children,
  locale: initialLocale,
}: {
  children: ReactNode
  locale: string
}) {
  const [locale, setLocale] = useState(initialLocale)

  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  return useContext(LocaleContext)
}
