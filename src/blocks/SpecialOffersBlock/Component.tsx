'use client'

import React, { useRef } from 'react'
import type { Media } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'
import { getBlockStyles, type BlockStyleSettings } from '@/fields/blockBackground'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface TypographySettings {
  font?: string
  size?: string
  weight?: string
  lh?: string
  ls?: string
  color?: string
}

interface OfferItem {
  image?: Media | number
  title?: string
  description?: string
  ctaText?: string
  ctaLink?: string
}

interface SpecialOffersBlockProps {
  blockType: 'special-offers'
  sectionTitle?: string
  offers?: OfferItem[]
  columns?: '2' | '3' | '4'
  showNavigation?: boolean
  // Style fields
  bgStyle?: string
  bgCustom?: string
  txtStyle?: 'auto' | 'dark' | 'light'
  tTitle?: TypographySettings
  tBody?: TypographySettings
}

/**
 * SPECIAL OFFERS BLOCK COMPONENT
 * 
 * Layout:
 * ┌─────────────────────────────────────────────┐
 * │  Special Offers                    [←] [→] │
 * ├─────────────┬─────────────┬─────────────────┤
 * │   [Image]   │   [Image]   │    [Image]      │
 * │   Title     │   Title     │    Title        │
 * │   Desc      │   Desc      │    Desc         │
 * │   [CTA]     │   [CTA]     │    [CTA]        │
 * └─────────────┴─────────────┴─────────────────┘
 */
export function SpecialOffersBlockComponent({
  sectionTitle = 'Special Offers',
  offers = [],
  columns = '3',
  showNavigation = true,
  bgStyle,
  bgCustom,
  txtStyle,
  tTitle,
  tBody,
}: SpecialOffersBlockProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  // Style system
  const blockSettings: BlockStyleSettings = { bgStyle, bgCustom, txtStyle }
  const hasNewStyles = !!bgStyle && bgStyle !== 'default'
  const styles = hasNewStyles 
    ? getBlockStyles(blockSettings)
    : { backgroundColor: '#e8e4df', color: '#1a1a1a' }

  const textColor = styles.color || '#1a1a1a'
  const mutedColor = txtStyle === 'light' ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.6)'

  // Title typography
  const titleStyles: React.CSSProperties = {
    fontFamily: tTitle?.font || 'Georgia, serif',
    fontSize: tTitle?.size || undefined,
    fontWeight: tTitle?.weight || '400',
    lineHeight: tTitle?.lh || '1.2',
    letterSpacing: tTitle?.ls || '0.02em',
    color: tTitle?.color || textColor,
  }

  // Body typography
  const bodyStyles: React.CSSProperties = {
    fontFamily: tBody?.font || 'system-ui, -apple-system, sans-serif',
    fontSize: tBody?.size || undefined,
    fontWeight: tBody?.weight || '400',
    lineHeight: tBody?.lh || '1.6',
    letterSpacing: tBody?.ls || '0',
    color: tBody?.color || mutedColor,
  }

  // Grid columns
  const getGridCols = () => {
    switch (columns) {
      case '2': return 'md:grid-cols-2'
      case '3': return 'md:grid-cols-3'
      case '4': return 'md:grid-cols-2 lg:grid-cols-4'
      default: return 'md:grid-cols-3'
    }
  }

  // Scroll handlers
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' })
    }
  }

  return (
    <section 
      className="py-16 md:py-24 px-4"
      style={{ backgroundColor: styles.backgroundColor }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          {sectionTitle && (
            <h2 
              className="text-3xl md:text-4xl"
              style={titleStyles}
            >
              {sectionTitle}
            </h2>
          )}

          {/* Navigation arrows */}
          {showNavigation && (
            <div className="flex gap-2">
              <button
                onClick={scrollLeft}
                className="w-10 h-10 border flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                style={{ borderColor: textColor, color: textColor }}
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={scrollRight}
                className="w-10 h-10 border flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                style={{ borderColor: textColor, color: textColor }}
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {/* Offers Grid */}
        <div 
          ref={scrollRef}
          className={`grid grid-cols-1 ${getGridCols()} gap-6`}
        >
          {offers?.map((offer, idx) => {
            const img = typeof offer.image === 'object' ? offer.image as Media : null

            return (
              <div key={idx} className="flex flex-col">
                {/* Image */}
                {img?.url && (
                  <div className="relative aspect-[4/3] overflow-hidden mb-4">
                    <Image
                      src={img.url}
                      alt={offer.title || 'Offer'}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="flex flex-col flex-grow">
                  {offer.title && (
                    <h3 
                      className="text-xl font-medium mb-2"
                      style={{ color: textColor, fontFamily: titleStyles.fontFamily }}
                    >
                      {offer.title}
                    </h3>
                  )}

                  {offer.description && (
                    <p 
                      className="text-sm mb-4 flex-grow"
                      style={bodyStyles}
                    >
                      {offer.description}
                    </p>
                  )}

                  {/* CTA Button */}
                  {offer.ctaLink && (
                    <Link
                      href={offer.ctaLink}
                      className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-800 transition-colors w-fit"
                    >
                      {offer.ctaText || 'Get The Offer'}
                    </Link>
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

export default SpecialOffersBlockComponent
