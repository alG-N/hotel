'use client'

import React, { useState, useEffect } from 'react'
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

interface HeroBlockProps {
  blockType: 'hero'
  name?: string
  tagline?: string
  heroImage?: Array<{ image: Media | number }> | Media | number
  ctaText?: string
  ctaLink?: string
  // Settings
  height?: 'full' | 'large' | 'medium' | 'small'
  textPosition?: 'left' | 'center' | 'right'
  verticalAlign?: 'top' | 'center' | 'bottom'
  overlayOpacity?: 'none' | 'light' | 'medium' | 'dark'
  enableSlideshow?: boolean
  slideshowSpeed?: '3000' | '5000' | '7000'
  // New style fields
  bgStyle?: string
  bgCustom?: string
  txtStyle?: 'auto' | 'dark' | 'light'
  // Typography (new)
  tTitle?: TypographySettings
  tBody?: TypographySettings
  // Legacy fields (backward compatibility)
  titleFont?: string
  bodyFont?: string
  textAlign?: 'left' | 'center' | 'right' // legacy support
}

// Maps settings to CSS values
const heightMap = { 
  full: '100vh', 
  large: '80vh', 
  medium: '60vh', 
  small: '40vh' 
}

const overlayMap = {
  none: 'transparent',
  light: 'rgba(0, 0, 0, 0.3)',
  medium: 'rgba(0, 0, 0, 0.5)',
  dark: 'rgba(0, 0, 0, 0.7)',
}

// Text position classes
const getPositionClasses = (
  horizontal: 'left' | 'center' | 'right',
  vertical: 'top' | 'center' | 'bottom'
) => {
  const horizontalMap = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right',
  }
  const verticalMap = {
    top: 'justify-start pt-24',
    center: 'justify-center',
    bottom: 'justify-end pb-24',
  }
  return `${horizontalMap[horizontal]} ${verticalMap[vertical]}`
}

/**
 * Hero Slideshow Component
 */
function HeroSlideshow({ 
  images, 
  interval = 5000 
}: { 
  images: Media[]
  interval?: number 
}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images.length, interval])

  return (
    <>
      {images.map((img, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            opacity: index === currentIndex ? 1 : 0,
          }}
        >
          {img?.url && (
            <Image
              src={img.url}
              alt={img.alt || 'Hero image'}
              fill
              className="object-cover"
              priority={index === 0}
            />
          )}
        </div>
      ))}
    </>
  )
}

/**
 * HERO BLOCK COMPONENT
 * 
 * Full-width hero with flexible text positioning and optional slideshow
 */
export function HeroBlockComponent({
  name,
  tagline,
  heroImage,
  ctaText,
  ctaLink,
  // Settings with defaults
  height = 'full',
  textPosition = 'center',
  verticalAlign = 'center',
  overlayOpacity = 'medium',
  enableSlideshow = true,
  slideshowSpeed = '5000',
  // New style fields
  bgStyle,
  bgCustom,
  txtStyle,
  tTitle,
  tBody,
  // Legacy
  titleFont = 'Georgia, serif',
  bodyFont = 'system-ui, -apple-system, sans-serif',
  textAlign, // legacy support
}: HeroBlockProps) {
  // Handle legacy textAlign prop
  const position = textPosition || textAlign || 'center'
  
  // Get colors from new style system, fallback to legacy
  const blockSettings: BlockStyleSettings = { bgStyle, bgCustom, txtStyle }
  const hasNewStyles = !!bgStyle && bgStyle !== 'transparent'
  const styles = hasNewStyles 
    ? getBlockStyles(blockSettings)
    : { backgroundColor: 'transparent', color: '#ffffff' }

  // Title styles
  const titleStyles: React.CSSProperties = {
    fontFamily: tTitle?.font || titleFont,
    fontSize: tTitle?.size || undefined,
    fontWeight: tTitle?.weight || '300',
    lineHeight: tTitle?.lh || '1.2',
    letterSpacing: tTitle?.ls || '0.05em',
    color: tTitle?.color || '#ffffff',
  }

  // Body styles
  const bodyStyles: React.CSSProperties = {
    fontFamily: tBody?.font || bodyFont,
    fontSize: tBody?.size || undefined,
    fontWeight: tBody?.weight || '300',
    lineHeight: tBody?.lh || '1.6',
    letterSpacing: tBody?.ls || '0.05em',
    color: tBody?.color || 'rgba(255,255,255,0.9)',
  }

  // Parse heroImage - can be array (slideshow) or single image
  let images: Media[] = []
  
  if (Array.isArray(heroImage)) {
    images = heroImage
      .map(item => typeof item.image === 'object' ? item.image as Media : null)
      .filter((img): img is Media => img !== null && !!img?.url)
  } else if (typeof heroImage === 'object' && heroImage !== null) {
    const singleImage = heroImage as Media
    if (singleImage?.url) {
      images = [singleImage]
    }
  }
  
  const hasMultipleImages = images.length > 1
  const firstImage = images[0]
  const showSlideshow = enableSlideshow && hasMultipleImages

  const positionClasses = getPositionClasses(position, verticalAlign)

  return (
    <section 
      className="relative overflow-hidden"
      style={{ 
        height: heightMap[height],
        minHeight: height === 'full' ? '700px' : '400px',
      }}
    >
      {/* Background: Single image or Slideshow */}
      {showSlideshow ? (
        <HeroSlideshow 
          images={images} 
          interval={parseInt(slideshowSpeed)} 
        />
      ) : firstImage?.url ? (
        <Image
          src={firstImage.url}
          alt={name || 'Hero'}
          fill
          className="object-cover"
          priority
        />
      ) : null}

      {/* Overlay */}
      <div 
        className="absolute inset-0"
        style={{ background: overlayMap[overlayOpacity] }}
      />

      {/* Content */}
      <div 
        className={`relative z-10 h-full flex flex-col px-8 md:px-16 lg:px-24 ${positionClasses}`}
      >
        <div className={`max-w-4xl ${position === 'center' ? 'mx-auto' : ''}`}>
          {name && (
            <h1 
              className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-4 tracking-wide"
              style={titleStyles}
            >
              {name}
            </h1>
          )}
          
          {tagline && (
            <p 
              className="text-lg md:text-xl text-white/90 mb-8 font-light tracking-wider"
              style={bodyStyles}
            >
              {tagline}
            </p>
          )}
          
          {ctaText && ctaLink && (
            <a 
              href={ctaLink}
              className="inline-block px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm"
            >
              {ctaText}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

export default HeroBlockComponent
