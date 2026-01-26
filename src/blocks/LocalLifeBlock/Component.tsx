'use client'

import React, { useRef } from 'react'
import type { Media } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'
import { getBlockStyles, type BlockStyleSettings } from '@/fields/blockBackground'

interface TypographySettings {
  font?: string
  size?: string
  weight?: string
  lh?: string
  ls?: string
  color?: string
}

interface LocalItem {
  itemTitle?: string
  itemDescription?: string
  itemImage?: Media | number
  itemLink?: string
}

interface LocalLifeBlockProps {
  blockType: 'local-life'
  sectionTitle?: string
  sectionDescription?: string
  items?: LocalItem[]
  // New style fields
  bgStyle?: string
  bgCustom?: string
  txtStyle?: 'auto' | 'dark' | 'light'
  tTitle?: TypographySettings
  tBody?: TypographySettings
  // Legacy settings
  backgroundColor?: 'light' | 'dark'
  accentColor?: string
  titleFont?: string
  bodyFont?: string
}

/**
 * LOCAL LIFE BLOCK COMPONENT
 * 
 * Carousel of local experiences/activities
 */
export function LocalLifeBlockComponent({
  sectionTitle = 'Local Life',
  sectionDescription,
  items = [],
  // New style fields
  bgStyle,
  bgCustom,
  txtStyle,
  tTitle,
  tBody,
  // Legacy
  backgroundColor = 'light',
  accentColor = '#8b6f47',
  titleFont = 'Georgia, serif',
  bodyFont = 'system-ui, -apple-system, sans-serif',
}: LocalLifeBlockProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [currentPage, setCurrentPage] = React.useState(0)
  
  // Get colors from new style system, fallback to legacy
  const blockSettings: BlockStyleSettings = { bgStyle, bgCustom, txtStyle }
  const hasNewStyles = !!bgStyle && bgStyle !== 'default'
  const legacyIsDark = backgroundColor === 'dark'
  const styles = hasNewStyles 
    ? getBlockStyles(blockSettings)
    : { 
        backgroundColor: legacyIsDark ? '#1a1a1a' : 'transparent', 
        color: legacyIsDark ? '#ffffff' : '#1a1a1a' 
      }
  const isDark = hasNewStyles 
    ? (styles.color === '#ffffff') 
    : legacyIsDark

  // Title styles
  const titleStyles: React.CSSProperties = {
    fontFamily: tTitle?.font || titleFont,
    fontSize: tTitle?.size || undefined,
    fontWeight: tTitle?.weight || '300',
    lineHeight: tTitle?.lh || '1.2',
    letterSpacing: tTitle?.ls || '0.02em',
    color: tTitle?.color || styles.color,
  }

  // Body styles
  const bodyStyles: React.CSSProperties = {
    fontFamily: tBody?.font || bodyFont,
    fontSize: tBody?.size || undefined,
    fontWeight: tBody?.weight || '400',
    lineHeight: tBody?.lh || '1.6',
    letterSpacing: tBody?.ls || '0',
    color: tBody?.color || (isDark ? 'rgba(255,255,255,0.7)' : '#4b5563'),
  }
  
  const itemsPerPage = 2
  const totalPages = Math.ceil(items.length / itemsPerPage)

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    const container = scrollRef.current
    const scrollAmount = container.clientWidth
    
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
      setCurrentPage(prev => Math.max(0, prev - 1))
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      setCurrentPage(prev => Math.min(totalPages - 1, prev + 1))
    }
  }

  return (
    <section 
      className="py-16 md:py-24"
      style={{ backgroundColor: styles.backgroundColor }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          {sectionTitle && (
            <h2 
              className="text-3xl md:text-4xl font-light tracking-wide mb-4"
              style={titleStyles}
            >
              {sectionTitle}
            </h2>
          )}

          {sectionDescription && (
            <p 
              className="text-base max-w-4xl"
              style={bodyStyles}
            >
              {sectionDescription}
            </p>
          )}
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Items Container */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style jsx>{`
              div::-webkit-scrollbar { display: none; }
            `}</style>

            {items?.map((item, index) => {
              const img = typeof item.itemImage === 'object' ? item.itemImage as Media : null

              return (
                <div 
                  key={index}
                  className="flex-shrink-0 w-[calc(50%-12px)] min-w-[300px]"
                >
                  {/* Image */}
                  {img?.url && (
                    <div className="relative aspect-[16/10] overflow-hidden mb-4">
                      <Image
                        src={img.url}
                        alt={item.itemTitle || 'Local life'}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div>
                    {item.itemTitle && (
                      <h3 
                        className="text-xl font-light mb-2"
                        style={titleStyles}
                      >
                        {item.itemTitle}
                      </h3>
                    )}

                    {item.itemDescription && (
                      <p 
                        className="text-sm leading-relaxed line-clamp-3"
                        style={bodyStyles}
                      >
                        {item.itemDescription}
                      </p>
                    )}

                    {item.itemLink && (
                      <Link
                        href={item.itemLink}
                        className="inline-flex items-center gap-2 text-sm mt-3 hover:gap-3 transition-all"
                        style={{ color: accentColor }}
                      >
                        Learn more
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Navigation */}
          {items.length > 2 && (
            <div className="flex items-center justify-end gap-4 mt-6">
              <span className={`text-sm ${isDark ? 'text-white/60' : 'text-gray-500'}`}>
                {currentPage + 1}/{totalPages}
              </span>
              
              <button
                onClick={() => scroll('left')}
                disabled={currentPage === 0}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  currentPage === 0
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : isDark 
                      ? 'bg-white/10 text-white hover:bg-white/20' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={() => scroll('right')}
                disabled={currentPage === totalPages - 1}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all border ${
                  currentPage === totalPages - 1
                    ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                    : isDark 
                      ? 'border-white/30 text-white hover:bg-white/10' 
                      : 'border-gray-300 text-gray-800 hover:bg-gray-100'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default LocalLifeBlockComponent
