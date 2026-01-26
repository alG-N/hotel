'use client'

import React, { useState, useRef } from 'react'
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

interface Room {
  roomName?: string
  roomSubtitle?: string
  bedType?: string
  roomSize?: string
  maxPersons?: string
  roomDescription?: string
  roomImage?: Media | number
  ratesLink?: string
  detailsLink?: string
}

interface Tab {
  tabName?: string
  rooms?: Room[]
}

interface RoomsGridBlockProps {
  blockType: 'rooms-grid'
  sectionTitle?: string
  viewAllText?: string
  viewAllLink?: string
  tabs?: Tab[]
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
 * ACCOMMODATIONS BLOCK COMPONENT
 * 
 * Hiển thị phòng với tabs và horizontal scroll
 */
export function RoomsGridBlockComponent({
  sectionTitle = 'Accommodations',
  viewAllText = 'View all accommodations',
  viewAllLink = '/accommodations',
  tabs = [],
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
}: RoomsGridBlockProps) {
  const [activeTab, setActiveTab] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  // Get colors from new style system, fallback to legacy
  const blockSettings: BlockStyleSettings = { bgStyle, bgCustom, txtStyle }
  const hasNewStyles = !!bgStyle && bgStyle !== 'default'
  const legacyIsDark = backgroundColor === 'dark'
  const styles = hasNewStyles 
    ? getBlockStyles(blockSettings)
    : { 
        backgroundColor: legacyIsDark ? '#1a1a1a' : 'transparent', 
        color: legacyIsDark ? '#ffffff' : '#333333' 
      }
  const isDark = hasNewStyles 
    ? (styles.color === '#ffffff') 
    : legacyIsDark
  
  const textColor = styles.color
  const mutedColor = isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)'
  const bgColor = styles.backgroundColor

  // Title styles
  const titleStyles: React.CSSProperties = {
    fontFamily: tTitle?.font || titleFont,
    fontSize: tTitle?.size || undefined,
    fontWeight: tTitle?.weight || '300',
    lineHeight: tTitle?.lh || '1.2',
    letterSpacing: tTitle?.ls || '0.02em',
    color: tTitle?.color || textColor,
  }

  // Body styles
  const bodyStylesCSS: React.CSSProperties = {
    fontFamily: tBody?.font || bodyFont,
    fontSize: tBody?.size || undefined,
    fontWeight: tBody?.weight || '400',
    lineHeight: tBody?.lh || '1.6',
    letterSpacing: tBody?.ls || '0',
    color: tBody?.color || mutedColor,
  }

  const currentRooms = tabs[activeTab]?.rooms || []

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
      className="py-16 md:py-24"
      style={{ backgroundColor: bgColor }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 
            className="text-3xl md:text-4xl font-light tracking-wide"
            style={titleStyles}
          >
            {sectionTitle}
          </h2>
          
          {viewAllLink && (
            <a 
              href={viewAllLink}
              className="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
              style={{ color: accentColor }}
            >
              {viewAllText}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          )}
        </div>

        {/* Tabs */}
        {tabs.length > 1 && (
          <div className="flex gap-8 mb-8 border-b" style={{ borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }}>
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className="pb-3 text-sm font-medium transition-all relative"
                style={{ 
                  color: activeTab === index ? textColor : mutedColor,
                }}
              >
                {tab.tabName}
                {activeTab === index && (
                  <span 
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ backgroundColor: accentColor }}
                  />
                )}
              </button>
            ))}
          </div>
        )}

        {/* Rooms Carousel */}
        <div className="relative">
          {/* Scroll Buttons */}
          {currentRooms.length > 3 && (
            <>
              <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Rooms Grid - Horizontal Scroll */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {currentRooms.map((room, index) => {
              const image = typeof room.roomImage === 'object' ? room.roomImage as Media : null

              return (
                <div 
                  key={index}
                  className="flex-shrink-0 w-[350px] flex flex-col"
                >
                  {/* Room Image */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
                    {image?.url && (
                      <Image
                        src={image.url}
                        alt={room.roomName || 'Room'}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>

                  {/* Room Info */}
                  <div className="flex flex-col flex-1">
                    <h3 
                      className="text-lg font-medium mb-1"
                      style={titleStyles}
                    >
                      {room.roomName}
                      {room.roomSubtitle && <span className="font-normal">, {room.roomSubtitle}</span>}
                    </h3>

                    {/* Room Details */}
                    <div 
                      className="flex flex-wrap items-center gap-2 text-xs mb-3"
                      style={{ color: accentColor }}
                    >
                      {room.bedType && <span>{room.bedType}</span>}
                      {room.bedType && room.roomSize && <span>•</span>}
                      {room.roomSize && <span>{room.roomSize}</span>}
                      {room.roomSize && room.maxPersons && <span>•</span>}
                      {room.maxPersons && <span>{room.maxPersons}</span>}
                    </div>

                    {/* Description */}
                    <p 
                      className="text-sm line-clamp-2 mb-4 flex-1"
                      style={{ ...bodyStylesCSS, minHeight: '2.5rem' }}
                    >
                      {room.roomDescription || ''}
                    </p>

                    {/* Buttons */}
                    <div className="flex items-center gap-4 mt-auto">
                      {room.ratesLink && (
                        <a
                          href={room.ratesLink}
                          className="px-6 py-2 text-xs font-medium text-white uppercase tracking-wider transition-opacity hover:opacity-90"
                          style={{ backgroundColor: accentColor }}
                        >
                          See Rates
                        </a>
                      )}
                      {room.detailsLink && (
                        <a
                          href={room.detailsLink}
                          className="flex items-center gap-1 text-sm hover:opacity-80 transition-opacity"
                          style={{ color: textColor }}
                        >
                          View details
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoomsGridBlockComponent
