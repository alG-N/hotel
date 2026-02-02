import { HeaderClient } from './Component.client'
import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

export async function Header() {
  const headerData = await getCachedGlobal('header', 1)() as HeaderType
  
  // Get style settings directly from header config
  const styleSettings = {
    backgroundColor: headerData.backgroundColor || '#ffffff',
    textColor: (headerData.textColor as 'light' | 'dark') || 'dark',
    scrolledBackgroundColor: headerData.scrolledBackgroundColor || '#ffffff',
    font: headerData.fontFamily || 'system-ui, -apple-system, sans-serif',
    fontWeight: headerData.fontWeight || '500',
    fontSize: headerData.fontSize || '14px',
    letterSpacing: headerData.letterSpacing || '1px',
  }

  return <HeaderClient data={headerData} themeColors={styleSettings} />
}
