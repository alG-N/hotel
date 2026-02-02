'use client'

import React, { useState, useMemo } from 'react'
import type { Media } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'
import { getBlockStyles, type BlockStyleSettings } from '@/fields/blockBackground'
import { Bed, Monitor, Bath, Wifi, Tv, Wind, Sofa, Sun, ChevronLeft, ChevronRight } from 'lucide-react'

interface TypographySettings {
  font?: string
  size?: string
  weight?: string
  lh?: string
  ls?: string
  color?: string
}

interface AmenityItem {
  icon?: 'bed' | 'desk' | 'bath' | 'wifi' | 'tv' | 'ac' | 'sofa' | 'window'
  text?: string
}

interface ImageItem {
  image?: Media | number
}

interface CustomCategory {
  name?: string
}

interface RoomItem {
  category?: 'regular' | 'deluxe' | 'family' | 'suites' | string
  name?: string
  subtitle?: string
  images?: ImageItem[]
  amenities?: AmenityItem[]
  bookLink?: string
}

interface RoomsGridBlockProps {
  blockType: 'rooms-grid'
  enabledCategories?: ('regular' | 'deluxe' | 'family' | 'suites')[]
  customCategories?: CustomCategory[]
  rooms?: RoomItem[]
  // Style fields
  bgStyle?: string
  bgCustom?: string
  txtStyle?: 'auto' | 'dark' | 'light'
  tTitle?: TypographySettings
  tBody?: TypographySettings
}

/**
 * ACCOMMODATIONS BLOCK (Type 1) COMPONENT
 * 
 * List layout with line dividers between rooms
 */
export function RoomsGridBlockComponent({
  enabledCategories = ['regular', 'deluxe', 'family', 'suites'],
  customCategories = [],
  rooms = [],
  bgStyle,
  bgCustom,
  txtStyle,
  tTitle,
  tBody,
}: RoomsGridBlockProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [imageIndexes, setImageIndexes] = useState<Record<number, number>>({})

  // Style system
  const blockSettings: BlockStyleSettings = { bgStyle, bgCustom, txtStyle }
  const hasNewStyles = !!bgStyle && bgStyle !== 'default'
  const styles = hasNewStyles 
    ? getBlockStyles(blockSettings)
    : { backgroundColor: '#ffffff', color: '#1a1a1a' }

  const textColor = styles.color || '#1a1a1a'
  const mutedColor = txtStyle === 'light' ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)'
  const borderColor = txtStyle === 'light' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)'

  // Title typography
  const titleStyles: React.CSSProperties = {
    fontFamily: tTitle?.font || 'Georgia, serif',
    fontSize: tTitle?.size || undefined,
    fontWeight: tTitle?.weight || '400',
    lineHeight: tTitle?.lh || '1.3',
    letterSpacing: tTitle?.ls || '0',
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

  // Build categories with auto count
  const categoryLabels: Record<string, string> = {
    regular: 'Regular',
    deluxe: 'Deluxe',
    family: 'Family',
    suites: 'Suites',
  }

  const categoriesWithCount = useMemo(() => {
    // Count rooms per category
    const counts: Record<string, number> = {}
    rooms.forEach(room => {
      const cat = room.category?.toLowerCase() || 'regular'
      counts[cat] = (counts[cat] || 0) + 1
    })

    // Build enabled categories
    const cats: { value: string; label: string; count: number }[] = enabledCategories.map(cat => ({
      value: cat,
      label: categoryLabels[cat] || cat,
      count: counts[cat] || 0,
    }))

    // Add custom categories
    customCategories.forEach(custom => {
      if (custom.name) {
        const val = custom.name.toLowerCase()
        cats.push({
          value: val,
          label: custom.name,
          count: counts[val] || 0,
        })
      }
    })

    return cats
  }, [enabledCategories, customCategories, rooms])

  // Filter rooms by category
  const filteredRooms = activeCategory 
    ? rooms.filter(room => room.category?.toLowerCase() === activeCategory.toLowerCase())
    : rooms

  // Icon renderer
  const renderIcon = (iconType?: string) => {
    const iconProps = { className: 'w-4 h-4 flex-shrink-0', strokeWidth: 1.5 }
    switch (iconType) {
      case 'bed': return <Bed {...iconProps} />
      case 'desk': return <Monitor {...iconProps} />
      case 'bath': return <Bath {...iconProps} />
      case 'wifi': return <Wifi {...iconProps} />
      case 'tv': return <Tv {...iconProps} />
      case 'ac': return <Wind {...iconProps} />
      case 'sofa': return <Sofa {...iconProps} />
      case 'window': return <Sun {...iconProps} />
      default: return <Bed {...iconProps} />
    }
  }

  // Image slider handlers
  const prevImage = (roomIndex: number, totalImages: number) => {
    setImageIndexes(prev => ({
      ...prev,
      [roomIndex]: ((prev[roomIndex] || 0) - 1 + totalImages) % totalImages
    }))
  }

  const nextImage = (roomIndex: number, totalImages: number) => {
    setImageIndexes(prev => ({
      ...prev,
      [roomIndex]: ((prev[roomIndex] || 0) + 1) % totalImages
    }))
  }

  return (
    <section 
      className="py-16 md:py-24 px-4"
      style={{ backgroundColor: styles.backgroundColor }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Filter Tabs - rectangular buttons, not too rounded */}
        <div className="flex flex-wrap gap-2 mb-10">
          {/* All button */}
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 text-sm border transition-colors rounded ${
              activeCategory === null 
                ? 'bg-neutral-900 text-white border-neutral-900' 
                : 'bg-transparent border-neutral-300 hover:border-neutral-500'
            }`}
            style={{ color: activeCategory === null ? '#fff' : textColor }}
          >
            All ({rooms.length})
          </button>
          
          {categoriesWithCount.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 text-sm border transition-colors rounded ${
                activeCategory === cat.value 
                  ? 'bg-neutral-900 text-white border-neutral-900' 
                  : 'bg-transparent border-neutral-300 hover:border-neutral-500'
              }`}
              style={{ color: activeCategory === cat.value ? '#fff' : textColor }}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>

        {/* Rooms List with line dividers */}
        <div className="flex flex-col">
          {filteredRooms.map((room, roomIndex) => {
            // Parse images
            const images = room.images
              ?.map(item => typeof item.image === 'object' ? item.image as Media : null)
              .filter((img): img is Media => img !== null && !!img?.url) || []
            
            const currentImageIndex = imageIndexes[roomIndex] || 0
            const currentImage = images[currentImageIndex]

            return (
              <div key={roomIndex}>
                {/* Line divider - top border for each item */}
                <div 
                  className="border-t py-6"
                  style={{ borderColor }}
                >
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Image Slider */}
                    <div className="relative w-full md:w-[400px] flex-shrink-0">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                        {currentImage?.url && (
                          <Image
                            src={currentImage.url}
                            alt={room.name || 'Room'}
                            fill
                            className="object-cover"
                          />
                        )}

                        {/* Slider Navigation */}
                        {images.length > 1 && (
                          <div className="absolute bottom-3 left-3 flex gap-1">
                            <button
                              onClick={() => prevImage(roomIndex, images.length)}
                              className="w-7 h-7 bg-white/90 rounded flex items-center justify-center hover:bg-white transition-colors"
                            >
                              <ChevronLeft className="w-4 h-4 text-neutral-700" />
                            </button>
                            <button
                              onClick={() => nextImage(roomIndex, images.length)}
                              className="w-7 h-7 bg-white/90 rounded flex items-center justify-center hover:bg-white transition-colors"
                            >
                              <ChevronRight className="w-4 h-4 text-neutral-700" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Room Info */}
                    <div className="flex flex-col flex-grow">
                      {/* Title */}
                      {room.name && (
                        <h3 
                          className="text-xl md:text-2xl mb-2"
                          style={titleStyles}
                        >
                          {room.name}
                        </h3>
                      )}

                      {/* Subtitle */}
                      {room.subtitle && (
                        <p 
                          className="text-sm mb-4"
                          style={bodyStyles}
                        >
                          {room.subtitle}
                        </p>
                      )}

                      {/* Amenities */}
                      {room.amenities && room.amenities.length > 0 && (
                        <div className="flex flex-col gap-2 mb-5">
                          {room.amenities.map((amenity, amenityIdx) => (
                            <div 
                              key={amenityIdx}
                              className="flex items-center gap-3 text-sm"
                              style={{ color: mutedColor }}
                            >
                              {renderIcon(amenity.icon)}
                              <span>{amenity.text}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Book Button */}
                      {room.bookLink && (
                        <Link
                          href={room.bookLink}
                          className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-800 transition-colors w-fit mt-auto"
                        >
                          Book now
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
          {/* Bottom border */}
          <div className="border-t" style={{ borderColor }} />
        </div>
      </div>
    </section>
  )
}

export default RoomsGridBlockComponent
