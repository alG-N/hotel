import { HeaderClient } from './Component.client'
import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

import type { Header, ThemeSetting } from '@/payload-types'

export async function Header() {
  const headerData: Header = await getCachedGlobal('header', 1)()
  
  // Get theme colors - uses cache with tag that gets invalidated on save
  let themeColors = null
  try {
    const themeSettings: ThemeSetting = await getCachedGlobal('theme-settings', 1)()
    if (themeSettings) {
      themeColors = {
        backgroundColor: themeSettings.headerBackgroundColor || 'transparent',
        textColor: (themeSettings.headerTextColor as 'light' | 'dark') || 'light',
        scrolledBackgroundColor: themeSettings.headerScrolledBackgroundColor || '#000000',
      }
    }
  } catch {
    // Theme settings not configured yet, use defaults
  }

  return <HeaderClient data={headerData} themeColors={themeColors} />
}
