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

interface LocationBlockProps {
  blockType: 'location'
  sectionTitle?: string
  description?: string
  locationImage?: Media | number
  address?: string
  googleMapUrl?: string
  // Settings
  height?: 'small' | 'medium' | 'large' | 'full'
  textPosition?: 'top-left' | 'top-center' | 'top-right' | 'center-left' | 'center' | 'center-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'
  overlayOpacity?: 'none' | 'light' | 'medium' | 'dark'
  showButton?: boolean
  // New style fields
  bgStyle?: string
  bgCustom?: string
  txtStyle?: 'auto' | 'dark' | 'light'
  tTitle?: TypographySettings
  tBody?: TypographySettings
  // Legacy
  titleFont?: string
  bodyFont?: string
}

// Maps
const heightMap = { small: '40vh', medium: '60vh', large: '80vh', full: '100vh' }
const overlayMap = {
  none: 'transparent',
  light: 'rgba(0, 0, 0, 0.3)',
  medium: 'rgba(0, 0, 0, 0.5)',
  dark: 'rgba(0, 0, 0, 0.7)',
}

// Position mapping
const getPositionClasses = (position: string) => {
  const positionMap: Record<string, string> = {
    'top-left': 'items-start justify-start text-left',
    'top-center': 'items-start justify-center text-center',
    'top-right': 'items-start justify-end text-right',
    'center-left': 'items-center justify-start text-left',
    'center': 'items-center justify-center text-center',
    'center-right': 'items-center justify-end text-right',
    'bottom-left': 'items-end justify-start text-left',
    'bottom-center': 'items-end justify-center text-center',
    'bottom-right': 'items-end justify-end text-right',
  }
  return positionMap[position] || positionMap['center']
}

/**
 * LOCATION BLOCK COMPONENT
 */
export function LocationBlockComponent({
  sectionTitle,
  description,
  locationImage,
  address,
  googleMapUrl,
  height = 'large',
  textPosition = 'center',
  overlayOpacity = 'medium',
  showButton = true,
  // New style fields
  bgStyle,
  bgCustom,
  txtStyle,
  tTitle,
  tBody,
  // Legacy
  titleFont = 'Georgia, serif',
  bodyFont = 'system-ui, -apple-system, sans-serif',
}: LocationBlockProps) {
  const img = typeof locationImage === 'object' ? locationImage as Media : null
  const positionClasses = getPositionClasses(textPosition)

  // Get colors from new style system, fallback to legacy
  const blockSettings: BlockStyleSettings = { bgStyle, bgCustom, txtStyle }
  const hasNewStyles = !!bgStyle && bgStyle !== 'default'
  const styles = hasNewStyles 
    ? getBlockStyles(blockSettings)
    : { backgroundColor: 'transparent', color: '#ffffff' }

  // Title styles
  const titleStyles: React.CSSProperties = {
    fontFamily: tTitle?.font || titleFont,
    fontSize: tTitle?.size || undefined,
    fontWeight: tTitle?.weight || '300',
    lineHeight: tTitle?.lh || '1.2',
    letterSpacing: tTitle?.ls || '0.02em',
    color: tTitle?.color || '#ffffff',
  }

  // Body styles
  const bodyStyles: React.CSSProperties = {
    fontFamily: tBody?.font || bodyFont,
    fontSize: tBody?.size || undefined,
    fontWeight: tBody?.weight || '300',
    lineHeight: tBody?.lh || '1.6',
    letterSpacing: tBody?.ls || '0',
    color: tBody?.color || 'rgba(255,255,255,0.8)',
  }

  return (
    <section 
      className="relative overflow-hidden"
      style={{ 
        height: heightMap[height],
        minHeight: '400px',
      }}
    >
      {/* Background Image */}
      {img?.url && (
        <Image
          src={img.url}
          alt={sectionTitle || 'Location'}
          fill
          className="object-cover"
        />
      )}

      {/* Overlay */}
      <div 
        className="absolute inset-0"
        style={{ background: overlayMap[overlayOpacity] }}
      />

      {/* Content */}
      <div 
        className={`relative z-10 h-full flex flex-col p-8 ${positionClasses}`}
      >
        <div className="max-w-2xl">
          {sectionTitle && (
            <h2 
              className="text-3xl md:text-5xl font-light text-white mb-4 tracking-wide"
              style={titleStyles}
            >
              {sectionTitle}
            </h2>
          )}
          
          {description && (
            <p 
              className="text-lg text-white/80 mb-4 font-light"
              style={bodyStyles}
            >
              {description}
            </p>
          )}

          {address && (
            <p className="text-amber-400 mb-6 text-lg">
              📍 {address}
            </p>
          )}

          {showButton && googleMapUrl && (
            <a 
              href={googleMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm"
            >
              Xem bản đồ
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

export default LocationBlockComponent
