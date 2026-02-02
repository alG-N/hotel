import React from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

// Height mapping for image container
const heightClasses: Record<string, string> = {
  full: 'h-[80vh]',
  large: 'h-[65vh]',
  medium: 'h-[50vh]',
  small: 'h-[40vh]',
  compact: 'h-[30vh]',
}

export const MediumImpactHero: React.FC<Page['hero']> = ({ links, media, richText, height = 'medium' }) => {
  // Don't render if no content
  const hasMedia = media && typeof media === 'object'
  const hasContent = richText || (Array.isArray(links) && links.length > 0)
  
  if (!hasMedia && !hasContent) {
    return null
  }

  const heightClass = heightClasses[height || 'medium'] || heightClasses.medium

  return (
    <div className="">
      <div className="container mb-8">
        {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}

        {Array.isArray(links) && links.length > 0 && (
          <ul className="flex gap-4">
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
      <div className="container ">
        {media && typeof media === 'object' && (
          <div className={`relative ${heightClass} overflow-hidden -mx-4 md:-mx-8 2xl:-mx-16`}>
            <Media
              className="absolute inset-0"
              imgClassName="object-cover w-full h-full"
              priority
              resource={media}
            />
            {media?.caption && (
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
                <RichText data={media.caption} enableGutter={false} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
