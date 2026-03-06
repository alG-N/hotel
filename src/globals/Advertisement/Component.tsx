import React from 'react'
import { getCachedGlobal } from '@/utilities/getGlobals'
import { getLocale } from '@/utilities/getLocale'
import type { Advertisement } from '@/payload-types'
import { AdvertisementClient } from './Component.client'

export async function AdvertisementProvider() {
  const locale = await getLocale()
  let adData: Advertisement | null = null

  try {
    adData = await getCachedGlobal('advertisement', 1, locale)()
  } catch {
    return null
  }

  // If nothing is enabled, render nothing
  const anyEnabled =
    adData?.topBannerEnabled ||
    adData?.popupEnabled ||
    adData?.floatingBarEnabled ||
    adData?.slideInEnabled

  if (!anyEnabled) return null

  return <AdvertisementClient data={adData} />
}
