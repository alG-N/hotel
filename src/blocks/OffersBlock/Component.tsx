import React from 'react'
import type { Media } from '@/payload-types'
import Image from 'next/image'
import { getBlockStyles, type BlockStyleSettings } from '@/fields/blockBackground'

interface TypographySettings {
  font?: string
  size?: string
  weight?: string
  lh?: string
  ls?: string
  color?: string
}

interface OffersBlockProps {
  blockType: 'offers'
  sectionTitle?: string
  offers?: Array<{
    offerTitle?: string
    offerDescription?: string
    offerImage?: Media | number
    offerLink?: string
  }>
  // Settings
  columns?: '1' | '2' | '3'
  gap?: 'small' | 'medium' | 'large'
  layout?: 'horizontal' | 'vertical'
  // New style fields
  bgStyle?: string
  bgCustom?: string
  txtStyle?: 'auto' | 'dark' | 'light'
  tTitle?: TypographySettings
  tBody?: TypographySettings
  // Legacy
  backgroundColor?: 'dark' | 'darker' | 'transparent'
  titleFont?: string
  bodyFont?: string
}

// Maps
const gapMap = { small: '1rem', medium: '2rem', large: '3rem' }
const bgMap = { 
  dark: '#1a1a1a', 
  darker: '#0d0d0d', 
  transparent: 'transparent' 
}

/**
 * OFFERS BLOCK COMPONENT
 */
export function OffersBlockComponent({
  sectionTitle,
  offers,
  columns = '2',
  gap = 'medium',
  layout = 'horizontal',
  // New style fields
  bgStyle,
  bgCustom,
  txtStyle,
  tTitle,
  tBody,
  // Legacy
  backgroundColor = 'dark',
  titleFont = 'Georgia, serif',
  bodyFont = 'system-ui, -apple-system, sans-serif',
}: OffersBlockProps) {
  // Get colors from new style system, fallback to legacy
  const blockSettings: BlockStyleSettings = { bgStyle, bgCustom, txtStyle }
  const hasNewStyles = !!bgStyle && bgStyle !== 'default'
  const styles = hasNewStyles 
    ? getBlockStyles(blockSettings)
    : { backgroundColor: bgMap[backgroundColor], color: '#ffffff' }

  // Title styles
  const titleStyles: React.CSSProperties = {
    fontFamily: tTitle?.font || titleFont,
    fontSize: tTitle?.size || undefined,
    fontWeight: tTitle?.weight || '500',
    lineHeight: tTitle?.lh || '1.2',
    letterSpacing: tTitle?.ls || '0.02em',
    color: tTitle?.color || '#ffffff',
  }

  // Body styles
  const bodyStylesCSS: React.CSSProperties = {
    fontFamily: tBody?.font || bodyFont,
    fontSize: tBody?.size || undefined,
    fontWeight: tBody?.weight || '400',
    lineHeight: tBody?.lh || '1.6',
    letterSpacing: tBody?.ls || '0',
    color: tBody?.color || 'rgba(255,255,255,0.7)',
  }
  return (
    <section 
      className="py-20 px-4"
      style={{ backgroundColor: styles.backgroundColor }}
    >
      <div className="max-w-7xl mx-auto">
        {sectionTitle && (
          <h2 
            className="text-3xl md:text-4xl font-light text-white mb-12 text-center tracking-wide"
            style={titleStyles}
          >
            {sectionTitle}
          </h2>
        )}
        
        <div 
          className="grid"
          style={{
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gap: gapMap[gap],
          }}
        >
          {offers?.map((offer, index) => {
            const img = typeof offer.offerImage === 'object' ? offer.offerImage as Media : null

            // Layout: vertical (image on top)
            if (layout === 'vertical') {
              return (
                <div 
                  key={index}
                  className="bg-white/5 rounded-lg overflow-hidden group cursor-pointer"
                >
                  {img?.url && (
                    <div className="relative w-full aspect-video overflow-hidden">
                      <Image
                        src={img.url}
                        alt={offer.offerTitle || 'Offer'}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    {offer.offerTitle && (
                      <h3 style={titleStyles}>
                        {offer.offerTitle}
                      </h3>
                    )}
                    {offer.offerDescription && (
                      <p className="text-sm line-clamp-3 mb-3" style={bodyStylesCSS}>
                        {offer.offerDescription}
                      </p>
                    )}
                    {offer.offerLink && (
                      <a
                        href={offer.offerLink}
                        className="inline-flex items-center gap-2 text-sm text-[#8b6f47] hover:gap-3 transition-all"
                      >
                        View details
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              )
            }

            // Layout: horizontal (image on left)
            return (
              <div 
                key={index}
                className="flex bg-white/5 rounded-lg overflow-hidden group cursor-pointer"
                style={{ minHeight: '200px' }}
              >
                {img?.url && (
                  <div className="relative w-48 flex-shrink-0 overflow-hidden">
                    <Image
                      src={img.url}
                      alt={offer.offerTitle || 'Offer'}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col justify-center">
                  {offer.offerTitle && (
                    <h3 style={titleStyles}>
                      {offer.offerTitle}
                    </h3>
                  )}
                  {offer.offerDescription && (
                    <p className="text-sm line-clamp-3 mb-3" style={bodyStylesCSS}>
                      {offer.offerDescription}
                    </p>
                  )}
                  {offer.offerLink && (
                    <a
                      href={offer.offerLink}
                      className="inline-flex items-center gap-2 text-sm text-[#8b6f47] hover:gap-3 transition-all mt-auto"
                    >
                      View details
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default OffersBlockComponent
