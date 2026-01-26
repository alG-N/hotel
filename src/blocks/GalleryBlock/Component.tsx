'use client'

import React, { useState } from 'react'
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

interface GalleryBlockProps {
  blockType: 'gallery'
  gallery?: Array<{
    image?: Media | number
  }>
  seeAllText?: string
  seeAllLink?: string
  // Settings
  height?: 'medium' | 'large' | 'full'
  showCounter?: boolean
  showSeeAll?: boolean
  // New style fields
  bgStyle?: string
  bgCustom?: string
  txtStyle?: 'auto' | 'dark' | 'light'
  tTitle?: TypographySettings
  tBody?: TypographySettings
}

const heightMap = { 
  medium: '60vh', 
  large: '80vh', 
  full: '100vh' 
}

/**
 * PHOTO GALLERY BLOCK COMPONENT
 * 
 * Full-width gallery với navigation arrows
 */
export function GalleryBlockComponent({
  gallery,
  seeAllText = 'See all photos',
  seeAllLink = '/gallery',
  height = 'large',
  showCounter = true,
  showSeeAll = true,
  // New style fields
  bgStyle,
  bgCustom,
  txtStyle,
  tTitle,
  tBody,
}: GalleryBlockProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Get colors from new style system
  const blockSettings: BlockStyleSettings = { bgStyle, bgCustom, txtStyle }
  const hasNewStyles = !!bgStyle && bgStyle !== 'default'
  const styles = hasNewStyles 
    ? getBlockStyles(blockSettings)
    : { backgroundColor: 'transparent', color: '#ffffff' }

  // Body/text styles for buttons
  const textStyles: React.CSSProperties = {
    fontFamily: tBody?.font || 'system-ui, -apple-system, sans-serif',
    fontSize: tBody?.size || undefined,
    fontWeight: tBody?.weight || '400',
    letterSpacing: tBody?.ls || '0',
    color: tBody?.color || styles.color,
  }

  // Filter valid images
  const images = gallery
    ?.map(item => typeof item.image === 'object' ? item.image as Media : null)
    .filter((img): img is Media => img !== null && !!img?.url) || []

  const totalImages = images.length
  const currentImage = images[currentIndex]

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev === 0 ? totalImages - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex(prev => (prev === totalImages - 1 ? 0 : prev + 1))
  }

  if (totalImages === 0) return null

  return (
    <section 
      className="relative overflow-hidden"
      style={{ 
        height: heightMap[height],
        minHeight: '400px',
      }}
    >
      {/* Current Image */}
      {currentImage?.url && (
        <Image
          src={currentImage.url}
          alt={currentImage.alt || `Photo ${currentIndex + 1}`}
          fill
          className="object-cover transition-opacity duration-500"
          priority
        />
      )}

      {/* Navigation Arrows */}
      {totalImages > 1 && (
        <>
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all shadow-lg"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all shadow-lg"
            aria-label="Next image"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* See All Photos Button */}
      {showSeeAll && (
        <a
          href={seeAllLink}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 px-6 py-3 bg-black/70 hover:bg-black/90 text-white text-sm rounded-full transition-all flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
          {seeAllText}
        </a>
      )}

      {/* Image Counter */}
      {showCounter && totalImages > 1 && (
        <div className="absolute bottom-8 right-8 z-10 px-4 py-2 bg-black/50 text-white text-sm rounded-full">
          {currentIndex + 1} / {totalImages}
        </div>
      )}
    </section>
  )
}

export default GalleryBlockComponent
