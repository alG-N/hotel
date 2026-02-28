'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import React, { useState } from 'react'
import { useLanguage } from '@/providers/Language'

import type { Theme } from './types'

import { useTheme } from '..'
import { themeLocalStorageKey } from './types'

export const ThemeSelector: React.FC = () => {
  const { setTheme } = useTheme()
  const [value, setValue] = useState('')

  const onThemeChange = (themeToSet: Theme & 'auto') => {
    if (themeToSet === 'auto') {
      setTheme(null)
      setValue('auto')
    } else {
      setTheme(themeToSet)
      setValue(themeToSet)
    }
  }

  const { t } = useLanguage()

  React.useEffect(() => {
    const preference = window.localStorage.getItem(themeLocalStorageKey)
    setValue(preference ?? 'auto')
  }, [])

  return (
    <Select onValueChange={onThemeChange} value={value}>
      <SelectTrigger
        aria-label={t('Chọn giao diện', 'Select a theme')}
        className="w-auto bg-transparent gap-2 pl-0 md:pl-3 border-none"
      >
        <SelectValue placeholder={t('Giao diện', 'Theme')} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="auto">{t('Tự động', 'Auto')}</SelectItem>
        <SelectItem value="light">{t('Sáng', 'Light')}</SelectItem>
        <SelectItem value="dark">{t('Tối', 'Dark')}</SelectItem>
      </SelectContent>
    </Select>
  )
}
