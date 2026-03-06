import { getCachedGlobal } from '@/utilities/getGlobals'
import { getLocale } from '@/utilities/getLocale'
import React from 'react'

import type { Footer as FooterType } from '@/payload-types'

import { FooterClient } from './Component.client'

export async function Footer() {
  const locale = await getLocale()
  let footerData: FooterType | null = null

  try {
    footerData = await getCachedGlobal('footer', 1, locale)()
  } catch {
    return null
  }

  return <FooterClient data={footerData} />
}
