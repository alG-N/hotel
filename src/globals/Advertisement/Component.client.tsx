'use client'

import React from 'react'
import type { Advertisement } from '@/payload-types'
import { TopBannerAd } from './TopBannerAd'
import { PopupOfferAd } from './PopupOfferAd'
import { FloatingBarAd } from './FloatingBarAd'
import { SlideInAd } from './SlideInAd'

interface AdvertisementClientProps {
  data: Advertisement
}

export function AdvertisementClient({ data }: AdvertisementClientProps) {
  return (
    <>
      {/* Top Banner - rendered in place (above header) */}
      {data.topBannerEnabled && (
        <TopBannerAd
          text={data.topBannerText || undefined}
          link={data.topBannerLink || undefined}
          ctaText={data.topBannerCtaText || undefined}
          bgColor={data.topBannerBgColor || undefined}
          textColor={data.topBannerTextColor || undefined}
          dismissible={data.topBannerDismissible ?? true}
        />
      )}

      {/* Popup Offer - fixed overlay */}
      {data.popupEnabled && (
        <PopupOfferAd
          image={data.popupImage}
          title={data.popupTitle || undefined}
          description={data.popupDescription || undefined}
          ctaText={data.popupCtaText || undefined}
          ctaLink={data.popupCtaLink || undefined}
          delay={data.popupDelay ?? 3}
          bgColor={data.popupBgColor || undefined}
          textColor={data.popupTextColor || undefined}
          showOnce={data.popupShowOnce ?? true}
        />
      )}

      {/* Floating Bar - fixed at bottom */}
      {data.floatingBarEnabled && (
        <FloatingBarAd
          text={data.floatingBarText || undefined}
          ctaText={data.floatingBarCtaText || undefined}
          ctaLink={data.floatingBarCtaLink || undefined}
          bgColor={data.floatingBarBgColor || undefined}
          textColor={data.floatingBarTextColor || undefined}
          dismissible={data.floatingBarDismissible ?? true}
        />
      )}

      {/* Slide-in CTA - fixed bottom right */}
      {data.slideInEnabled && (
        <SlideInAd
          image={data.slideInImage}
          title={data.slideInTitle || undefined}
          description={data.slideInDescription || undefined}
          ctaText={data.slideInCtaText || undefined}
          ctaLink={data.slideInCtaLink || undefined}
          scrollTrigger={data.slideInScrollTrigger ?? 50}
          bgColor={data.slideInBgColor || undefined}
          textColor={data.slideInTextColor || undefined}
        />
      )}
    </>
  )
}
