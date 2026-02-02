'use client'

import React, { useState } from 'react'
import type { Media } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'
import { getBlockStyles, type BlockStyleSettings } from '@/fields/blockBackground'
import { ArrowUpRight, ChevronLeft, ChevronRight, Bed, Monitor, Bath, Sun, Sofa, Star } from 'lucide-react'

interface TypographySettings {
  font?: string
  size?: string
  weight?: string
  lh?: string
  ls?: string
  color?: string
}

interface RoomFeature {
  icon?: 'bed' | 'desk' | 'bath' | 'window' | 'sofa' | 'star'
  text?: string
}

interface RoomImage {
  image?: Media | number
}

interface Room {
  name?: string
  description?: string
  images?: RoomImage[]
  features?: RoomFeature[]
  buttonText?: string
  buttonLink?: string
}

interface AccommodationsType2Props {
  blockType: 'accommodations-type2'
  title?: string
  ctaText?: string
  ctaLink?: string
  rooms?: Room[]
  // Style fields
  bgStyle?: string
  bgCustom?: string
  txtStyle?: 'auto' | 'dark' | 'light'
  tTitle?: TypographySettings
  tBody?: TypographySettings
}

// Icon mapping
const iconMap = {
  bed: Bed,
  desk: Monitor,
  bath: Bath,
  window: Sun,
  sofa: Sofa,
  star: Star,
}

/**
 * Room Card with Image Slider
 */
function RoomCard({ 
  room, 
  titleStyles, 
  bodyStyles, 
  textColor,
  mutedColor,
}: { 
  room: Room
  titleStyles: React.CSSProperties
  bodyStyles: React.CSSProperties
  textColor: string
  mutedColor: string
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  // Parse images
  const images = room.images
    ?.map(item => typeof item.image === 'object' ? item.image as Media : null)
    .filter((img): img is Media => img !== null && !!img?.url) || []

  const hasMultipleImages = images.length > 1

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="flex flex-col md:flex-row gap-6 py-8 border-t border-gray-200 first:border-t-0">
      {/* Image with arrows */}
      <div className="relative w-full md:w-2/5 aspect-[4/3] flex-shrink-0">
        {images.length > 0 && (
          <>
            <Image
              src={images[currentImageIndex]?.url || ''}
              alt={images[currentImageIndex]?.alt || room.name || 'Room'}
              fill
              className="object-cover"
            />
            
            {/* Navigation arrows */}
            {hasMultipleImages && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-sm flex items-center justify-center transition-all"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute left-3 top-1/2 translate-y-4 w-8 h-8 bg-white/80 hover:bg-white rounded-sm flex items-center justify-center transition-all"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>
              </>
            )}
          </>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center">
        {/* Room name */}
        {room.name && (
          <h3 
            className="text-2xl md:text-3xl mb-3"
            style={{
              ...titleStyles,
              fontStyle: 'normal',
              fontWeight: '400',
            }}
          >
            {room.name}
          </h3>
        )}

        {/* Description */}
        {room.description && (
          <p 
            className="text-sm mb-6"
            style={bodyStyles}
          >
            {room.description}
          </p>
        )}

        {/* Features list */}
        {room.features && room.features.length > 0 && (
          <ul className="space-y-2 mb-6">
            {room.features.map((feature, idx) => {
              const IconComponent = feature.icon ? iconMap[feature.icon] : Bed
              return (
                <li key={idx} className="flex items-center gap-3 text-sm" style={{ color: mutedColor }}>
                  <IconComponent className="w-4 h-4 flex-shrink-0" />
                  <span>{feature.text}</span>
                </li>
              )
            })}
          </ul>
        )}

        {/* Book now button */}
        {room.buttonText && room.buttonLink && (
          <Link
            href={room.buttonLink}
            className="inline-block px-6 py-2.5 text-sm font-medium transition-colors w-fit"
            style={{
              backgroundColor: textColor,
              color: textColor === '#ffffff' ? '#1a1a1a' : '#ffffff',
            }}
          >
            {room.buttonText}
          </Link>
        )}
      </div>
    </div>
  )
}

/**
 * ACCOMMODATIONS TYPE 2 COMPONENT
 */
export function AccommodationsType2Component({
  title,
  ctaText,
  ctaLink,
  rooms,
  bgStyle,
  bgCustom,
  txtStyle,
  tTitle,
  tBody,
}: AccommodationsType2Props) {
  // Style system
  const blockSettings: BlockStyleSettings = { bgStyle, bgCustom, txtStyle }
  const hasNewStyles = !!bgStyle && bgStyle !== 'default'
  const styles = hasNewStyles 
    ? getBlockStyles(blockSettings)
    : { backgroundColor: '#f5f5f0', color: '#1a1a1a' }

  const textColor = styles.color || '#1a1a1a'
  const mutedColor = txtStyle === 'light' ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.6)'

  // Title typography
  const titleStyles: React.CSSProperties = {
    fontFamily: tTitle?.font || 'Georgia, serif',
    fontSize: tTitle?.size || undefined,
    fontWeight: tTitle?.weight || '300',
    fontStyle: 'italic',
    lineHeight: tTitle?.lh || '1.2',
    letterSpacing: tTitle?.ls || '0.02em',
    color: tTitle?.color || textColor,
  }

  // Body typography
  const bodyStyles: React.CSSProperties = {
    fontFamily: tBody?.font || 'system-ui, -apple-system, sans-serif',
    fontSize: tBody?.size || undefined,
    fontWeight: tBody?.weight || '400',
    lineHeight: tBody?.lh || '1.75',
    letterSpacing: tBody?.ls || '0',
    color: tBody?.color || mutedColor,
  }

  return (
    <section 
      className="py-16 md:py-24 px-4"
      style={{ 
        backgroundColor: styles.backgroundColor,
        color: textColor,
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header: Title + CTA */}
        <div className="flex items-end justify-between border-b border-gray-300 pb-6 mb-8">
          {title && (
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl"
              style={titleStyles}
            >
              {title}
            </h2>
          )}
          
          {ctaText && ctaLink && (
            <Link 
              href={ctaLink}
              className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all flex-shrink-0"
              style={{ color: textColor }}
            >
              {ctaText}
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          )}
        </div>

        {/* Rooms list */}
        {rooms && rooms.length > 0 && (
          <div className="divide-y divide-gray-200">
            {rooms.map((room, index) => (
              <RoomCard
                key={index}
                room={room}
                titleStyles={titleStyles}
                bodyStyles={bodyStyles}
                textColor={textColor}
                mutedColor={mutedColor}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default AccommodationsType2Component
