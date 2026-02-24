import React from 'react'
import { getCachedGlobal } from '@/utilities/getGlobals'
import type { Advertisement } from '@/payload-types'
import { AdvertisementClient } from './Component.client'

export async function AdvertisementProvider() {
  const adData: Advertisement = await getCachedGlobal('advertisement', 1)()

  // If nothing is enabled, render nothing
  const anyEnabled =
    adData?.topBannerEnabled ||
    adData?.popupEnabled ||
    adData?.floatingBarEnabled ||
    adData?.slideInEnabled

  if (!anyEnabled) return null

  return <AdvertisementClient data={adData} />
}
