'use client'

import React, { createContext, useCallback, useContext, useState, useEffect } from 'react'

export type LanguageCode = 'vi' | 'en'

export interface LanguageContextType {
  language: LanguageCode
  setLanguage: (lang: LanguageCode) => void
  t: (vi: string, en: string) => string
}

const STORAGE_KEY = 'preferred_language'

const initialContext: LanguageContextType = {
  language: 'vi',
  setLanguage: () => {},
  t: (vi: string) => vi,
}

const LanguageContext = createContext<LanguageContextType>(initialContext)

export const useLanguage = () => useContext(LanguageContext)

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored === 'en' || stored === 'vi') return stored
      } catch {
        // ignore
      }
    }
    return 'vi'
  })

  const setLanguage = useCallback((lang: LanguageCode) => {
    setLanguageState(lang)
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // ignore
    }
    // Update html lang attribute
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang
    }
  }, [])

  // Set initial html lang
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language
    }
  }, [language])

  // Translation helper: returns Vietnamese or English string based on current language
  const t = useCallback(
    (vi: string, en: string) => {
      return language === 'vi' ? vi : en
    },
    [language],
  )

  return (
    <LanguageContext value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext>
  )
}
