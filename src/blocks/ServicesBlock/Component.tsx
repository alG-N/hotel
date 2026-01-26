'use client'
import React, { useState, useRef } from 'react'
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

interface TabItem {
  itemName?: string
  itemCategory?: string
  itemDescription?: string
  itemImage?: Media | number
  itemLink?: string
}

interface Tab {
  tabName?: string
  items?: TabItem[]
}

interface ServicesBlockProps {
  blockType: 'services'
  sectionTitle?: string
  viewAllText?: string
  viewAllLink?: string
  tabs?: Tab[]
  columns?: '2' | '3' | '4'
  // New style fields
  bgStyle?: string
  bgCustom?: string
  txtStyle?: 'auto' | 'dark' | 'light'
  tTitle?: TypographySettings
  tBody?: TypographySettings
  // Legacy
  backgroundColor?: 'light' | 'dark'
  accentColor?: string
  titleFont?: string
  bodyFont?: string
}

/**
 * EAT & DRINK BLOCK COMPONENT
 * 
 * Hiển thị nhà hàng và bar với tabs (Restaurants, Bars, Breakfasts)
 */
export function ServicesBlockComponent({
  sectionTitle = 'Eat and drink',
  viewAllText = 'View all options',
  viewAllLink = '/dining',
  tabs = [],
  columns = '2',
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
}: ServicesBlockProps) {
  const [activeTab, setActiveTab] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const currentItems = tabs[activeTab]?.items || []
  
  // Get colors from new style system, fallback to legacy
  const blockSettings: BlockStyleSettings = { bgStyle, bgCustom, txtStyle }
  const hasNewStyles = !!bgStyle && bgStyle !== 'default'
  const legacyIsDark = backgroundColor === 'dark'
  const styles = hasNewStyles 
    ? getBlockStyles(blockSettings)
    : { 
        backgroundColor: legacyIsDark ? '#1a1a1a' : '#f8f6f3', 
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
  const bodyStylesCSS: React.CSSProperties = {
    fontFamily: tBody?.font || bodyFont,
    fontSize: tBody?.size || undefined,
    fontWeight: tBody?.weight || '400',
    lineHeight: tBody?.lh || '1.6',
    letterSpacing: tBody?.ls || '0',
    color: tBody?.color || (isDark ? 'rgba(255,255,255,0.7)' : '#4b5563'),
  }

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    const scrollAmount = 400
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <section 
      className="py-20"
      style={{ backgroundColor: styles.backgroundColor }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h2 
            className="text-3xl md:text-4xl font-light tracking-wide mb-4 md:mb-0"
            style={titleStyles}
          >
            {sectionTitle}
          </h2>
          
          {viewAllLink && (
            <Link 
              href={viewAllLink}
              className="flex items-center gap-2 text-sm tracking-wider hover:opacity-70 transition-opacity"
              style={{ color: accentColor }}
            >
              {viewAllText}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>

        {/* Tabs */}
        {tabs.length > 0 && (
          <div className="flex gap-8 mb-10 border-b" style={{ borderColor: isDark ? '#333' : '#e5e5e5' }}>
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`pb-4 text-sm tracking-wider font-medium transition-all relative ${
                  activeTab === index 
                    ? '' 
                    : isDark ? 'text-white/60 hover:text-white' : 'text-gray-500 hover:text-gray-900'
                }`}
                style={{
                  color: activeTab === index ? accentColor : undefined,
                }}
              >
                {tab.tabName}
                {activeTab === index && (
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ backgroundColor: accentColor }}
                  />
                )}
              </button>
            ))}
          </div>
        )}

        {/* Items Grid/Scroll Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all -ml-6 ${
              isDark ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-white shadow-lg hover:shadow-xl text-gray-800'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => scroll('right')}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all -mr-6 ${
              isDark ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-white shadow-lg hover:shadow-xl text-gray-800'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scrollable Items */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style jsx>{`
              div::-webkit-scrollbar { display: none; }
            `}</style>
            
            {currentItems.map((item, index) => {
              const img = typeof item.itemImage === 'object' ? item.itemImage as Media : null
              
              return (
                <div 
                  key={index}
                  className={`flex-shrink-0 rounded-lg overflow-hidden group ${
                    isDark ? 'bg-[#2a2a2a]' : 'bg-white shadow-sm'
                  }`}
                  style={{ width: columns === '2' ? '45%' : columns === '3' ? '30%' : '22%', minWidth: '300px' }}
                >
                  {/* Image */}
                  {img?.url && (
                    <div className="relative w-full aspect-[16/10] overflow-hidden">
                      <Image
                        src={img.url}
                        alt={item.itemName || 'Dining'}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className="p-6">
                    {item.itemCategory && (
                      <p 
                        className="text-xs tracking-widest mb-2 uppercase"
                        style={{ color: accentColor }}
                      >
                        {item.itemCategory}
                      </p>
                    )}
                    
                    {item.itemName && (
                      <h3 
                        className="text-xl font-light mb-3"
                        style={titleStyles}
                      >
                        {item.itemName}
                      </h3>
                    )}
                    
                    {item.itemDescription && (
                      <p 
                        className="text-sm leading-relaxed mb-4"
                        style={bodyStylesCSS}
                      >
                        {item.itemDescription}
                      </p>
                    )}
                    
                    {item.itemLink && (
                      <Link
                        href={item.itemLink}
                        className="inline-flex items-center gap-2 text-sm tracking-wider hover:gap-3 transition-all"
                        style={{ color: accentColor }}
                      >
                        View details
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
        </div>
      </div>
    </section>
  )
}

export default ServicesBlockComponent
