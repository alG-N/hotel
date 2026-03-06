import { HeaderClient } from './Component.client'
import { getCachedGlobal } from '@/utilities/getGlobals'
import { getLocale } from '@/utilities/getLocale'
import React from 'react'

import type { Header as HeaderType, Advertisement } from '@/payload-types'

export async function Header() {
  const locale = await getLocale()
  let headerData: HeaderType | null = null

  try {
    headerData = await getCachedGlobal('header', 1, locale)() as HeaderType
  } catch {
    return null
  }

  let adData: Advertisement | null = null
  try {
    adData = await getCachedGlobal('advertisement', 1, locale)() as Advertisement
  } catch {
    // ads may not be configured
  }
  
  // Get style settings directly from header config
  const styleSettings = {
    backgroundColor: headerData?.backgroundColor || '#ffffff',
    textColor: (headerData?.textColor as 'light' | 'dark') || 'dark',
    scrolledBackgroundColor: headerData?.scrolledBackgroundColor || '#ffffff',
    font: headerData?.fontFamily || 'system-ui, -apple-system, sans-serif',
    fontWeight: headerData?.fontWeight || '500',
    fontSize: headerData?.fontSize || '14px',
    letterSpacing: headerData?.letterSpacing || '1px',
  }

  return <HeaderClient data={headerData} themeColors={styleSettings} adData={adData} />
}
