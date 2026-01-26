'use client'

import React from 'react'
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

interface ServiceItem {
  category?: string
  serviceName?: string
  serviceDescription?: string
  serviceImage?: Media | number
  serviceLink?: string
}

interface OurServicesBlockProps {
  blockType: 'our-services'
  sectionTitle?: string
  services?: ServiceItem[]
  // Settings
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
 * OUR SERVICES BLOCK COMPONENT
 * 
 * Grid of services (Wellness, Breakfast, Occasions, etc.)
 */
export function OurServicesBlockComponent({
  sectionTitle = 'Our Services',
  services = [],
  columns = '3',
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
}: OurServicesBlockProps) {
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

  const getGridCols = () => {
    switch (columns) {
      case '2': return 'md:grid-cols-2'
      case '3': return 'md:grid-cols-3'
      case '4': return 'md:grid-cols-2 lg:grid-cols-4'
      default: return 'md:grid-cols-3'
    }
  }

  return (
    <section 
      className="py-16 md:py-24"
      style={{ backgroundColor: styles.backgroundColor }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        {sectionTitle && (
          <h2 
            className="text-3xl md:text-4xl font-light tracking-wide mb-12"
            style={titleStyles}
          >
            {sectionTitle}
          </h2>
        )}

        {/* Services Grid */}
        <div className={`grid grid-cols-1 ${getGridCols()} gap-8`}>
          {services?.map((service, index) => {
            const img = typeof service.serviceImage === 'object' ? service.serviceImage as Media : null

            return (
              <div key={index} className="group">
                {/* Image */}
                {img?.url && (
                  <div className="relative aspect-[4/3] overflow-hidden mb-4">
                    <Image
                      src={img.url}
                      alt={service.serviceName || 'Service'}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                )}

                {/* Content */}
                <div>
                  {service.category && (
                    <p 
                      className="text-xs tracking-[0.15em] uppercase mb-2"
                      style={{ color: accentColor }}
                    >
                      {service.category}
                    </p>
                  )}

                  {service.serviceName && (
                    <h3 
                      className="text-xl font-light mb-2"
                      style={titleStyles}
                    >
                      {service.serviceName}
                    </h3>
                  )}

                  {service.serviceDescription && (
                    <p 
                      className="text-sm leading-relaxed"
                      style={bodyStyles}
                    >
                      {service.serviceDescription}
                    </p>
                  )}

                  {service.serviceLink && (
                    <Link
                      href={service.serviceLink}
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
      </div>
    </section>
  )
}

export default OurServicesBlockComponent
