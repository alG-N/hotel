'use client'

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

interface MomentBlockProps {
  blockType: 'moment'
  sectionTitle?: string
  hotelName?: string
  momentTitle?: string
  momentDescription?: string
  momentImage?: Media | number
  ctaText?: string
  ctaLink?: string
  // Legacy Settings
  backgroundColor?: string
  layout?: 'image-left' | 'image-right'
  // New fields
  bgStyle?: string
  bgCustom?: string
  txtStyle?: 'auto' | 'dark' | 'light'
  tTitle?: TypographySettings
  tBody?: TypographySettings
}

/**
 * MOMENT BLOCK COMPONENT
 * 
 * Featured story/highlight section with large image and text overlay
 */
export function MomentBlockComponent({
  sectionTitle = 'Our Moment',
  hotelName,
  momentTitle,
  momentDescription,
  momentImage,
  ctaText = 'Discover this Moment',
  ctaLink = '#',
  backgroundColor = '#f5e6e0',
  layout = 'image-left',
  // New fields
  bgStyle,
  bgCustom,
  txtStyle,
  tTitle,
  tBody,
}: MomentBlockProps) {
  const img = typeof momentImage === 'object' ? momentImage as Media : null
  const isImageLeft = layout === 'image-left'

  // Use new style system if available
  const blockSettings: BlockStyleSettings = { bgStyle, bgCustom, txtStyle }
  const hasNewStyles = !!bgStyle && bgStyle !== 'default'
  const styles = hasNewStyles 
    ? getBlockStyles(blockSettings)
    : { backgroundColor, color: '#333' }

  // Title typography
  const titleStyles: React.CSSProperties = {
    fontFamily: tTitle?.font || 'Georgia, serif',
    fontSize: tTitle?.size || undefined,
    fontWeight: tTitle?.weight || '300',
    lineHeight: tTitle?.lh || '1.2',
    letterSpacing: tTitle?.ls || '0.02em',
    color: tTitle?.color || styles.color,
  }

  // Body typography
  const bodyStyles: React.CSSProperties = {
    fontFamily: tBody?.font || 'system-ui, -apple-system, sans-serif',
    fontSize: tBody?.size || undefined,
    fontWeight: tBody?.weight || '400',
    lineHeight: tBody?.lh || '1.75',
    letterSpacing: tBody?.ls || '0',
    color: tBody?.color || (styles.color === '#ffffff' ? 'rgba(255,255,255,0.8)' : '#666'),
  }

  return (
    <section 
      className="py-16 md:py-24"
      style={{ backgroundColor: styles.backgroundColor }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        {sectionTitle && (
          <div className="text-center mb-12">
            <h2 
              className="text-3xl md:text-4xl tracking-wide"
              style={titleStyles}
            >
              {sectionTitle}
            </h2>
          </div>
        )}

        {/* Content */}
        <div className={`flex flex-col ${isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-0`}>
          {/* Image */}
          <div className="relative w-full lg:w-3/5 aspect-[4/3] lg:aspect-auto lg:min-h-[500px] bg-gray-100">
            {img?.url ? (
              <Image
                src={img.url}
                alt={momentTitle || 'Our Moment'}
                fill
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            )}
          </div>

          {/* Text Content */}
          <div 
            className={`w-full lg:w-2/5 bg-white p-8 lg:p-12 flex flex-col justify-center ${
              isImageLeft ? 'lg:-ml-20 lg:mt-20' : 'lg:-mr-20 lg:mt-20'
            } relative z-10 shadow-xl`}
          >
            {hotelName && (
              <p 
                className="text-xs tracking-[0.2em] uppercase mb-4"
                style={{ color: '#8b6f47' }}
              >
                {hotelName}
              </p>
            )}

            {momentTitle && (
              <h3 
                className="text-2xl md:text-3xl mb-4 tracking-wide"
                style={{ ...titleStyles, color: '#333' }}
              >
                {momentTitle}
              </h3>
            )}

            {momentDescription && (
              <p 
                className="mb-6 leading-relaxed"
                style={{ ...bodyStyles, color: '#666' }}
              >
                {momentDescription}
              </p>
            )}

            {ctaLink && (
              <a 
                href={ctaLink}
                className="inline-block self-start px-6 py-3 border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300 uppercase tracking-widest text-xs"
              >
                {ctaText}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MomentBlockComponent
