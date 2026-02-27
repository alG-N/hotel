'use client'

import { useLanguage } from '@/providers/Language'

/**
 * Translatable text component for use in server components.
 * Renders the Vietnamese or English text based on the current language.
 * 
 * Usage in server components:
 *   <T vi="Đặt ngay" en="Book Now" />
 * 
 * For client components, prefer using the `useLanguage()` hook directly:
 *   const { t } = useLanguage()
 *   return <span>{t('Đặt ngay', 'Book Now')}</span>
 */
export function T({ vi, en }: { vi: string; en: string }) {
  const { t } = useLanguage()
  return <>{t(vi, en)}</>
}
