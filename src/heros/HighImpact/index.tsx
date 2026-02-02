'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

// Height mapping
const heightClasses: Record<string, string> = {
  full: 'min-h-screen',
  large: 'min-h-[85vh]',
  medium: 'min-h-[70vh]',
  small: 'min-h-[50vh]',
  compact: 'min-h-[40vh]',
}

export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText, height = 'full' }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  })

  // Don't render if no media - this prevents black blocks
  const hasMedia = media && typeof media === 'object'
  
  if (!hasMedia) {
    return null
  }

  const heightClass = heightClasses[height || 'full'] || heightClasses.full

  return (
    <div
      className={`relative -mt-[10.4rem] flex items-center justify-center text-white ${heightClass}`}
      data-theme="dark"
    >
      <div className="container mb-8 z-10 relative flex items-center justify-center">
        <div className="max-w-[36.5rem] md:text-center">
          {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}
          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex md:justify-center gap-4">
              {links.map(({ link }, i) => {
                return (
                  <li key={i}>
                    <CMSLink {...link} />
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
      <div className="absolute inset-0 select-none">
        {media && typeof media === 'object' && (
          <Media fill imgClassName="-z-10 object-cover" priority resource={media} />
        )}
      </div>
    </div>
  )
}
