'use client'

import * as React from 'react'
import { useFormContext } from 'react-hook-form'
import { useLanguage } from '@/providers/Language'

export const Error = ({ name }: { name: string }) => {
  const {
    formState: { errors },
  } = useFormContext()
  const { t } = useLanguage()
  return (
    <div className="mt-2 text-red-500 text-sm">
      {(errors[name]?.message as string) || t('Trường này là bắt buộc', 'This field is required')}
    </div>
  )
}
