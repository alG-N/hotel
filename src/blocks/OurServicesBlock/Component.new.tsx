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

interface ServiceItem {
  serviceName?: string
  serviceDescription?: string
  serviceImage?: Media | number
}

interface OurServicesBlockProps {
  blockType: 'our-services'
  sectionTitle?: string
  sectionDescription?: string
  services?: ServiceItem[]
  // Settings
  columns?: '2' | '3' | '4'
  // New style fields
  bgStyle?: string
  bgCustom?: string
  txtStyle?: 'auto' | 'dark' | 'light'
  tTitle?: TypographySettings
  tBody?: TypographySettings
}

/**
 * SERVICES BLOCK COMPONENT
 * 
 * Dining-style layout:
 * - Header: Title left, description right
 * - Cards: Portrait images with title + description overlay at bottom
 */
export function OurServicesBlockComponent({
  sectionTitle = 'Dining That Complements Your Stay',
  sectionDescription,
  services = [],
  columns = '3',
  // New style fields
  bgStyle,
  bgCustom,
  txtStyle,
  tTitle,
  tBody,
}: OurServicesBlockProps) {
  // Get colors from new style system
  const blockSettings: BlockStyleSettings = { bgStyle, bgCustom, txtStyle }
  const hasNewStyles = !!bgStyle && bgStyle !== 'default'
  const styles = hasNewStyles 
    ? getBlockStyles(blockSettings)
    : { backgroundColor: '#f5f5f0', color: '#1a1a1a' }

  const textColor = styles.color || '#1a1a1a'
  const mutedColor = txtStyle === 'light' ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.6)'

  // Title styles
  const titleStyles: React.CSSProperties = {
    fontFamily: tTitle?.font || 'Georgia, serif',
    fontSize: tTitle?.size || undefined,
    fontWeight: tTitle?.weight || '400',
    lineHeight: tTitle?.lh || '1.2',
    letterSpacing: tTitle?.ls || '0.02em',
    color: tTitle?.color || textColor,
  }

  // Body styles
  const bodyStyles: React.CSSProperties = {
    fontFamily: tBody?.font || 'system-ui, -apple-system, sans-serif',
    fontSize: tBody?.size || undefined,
    fontWeight: tBody?.weight || '400',
    lineHeight: tBody?.lh || '1.6',
    letterSpacing: tBody?.ls || '0',
    color: tBody?.color || mutedColor,
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
      <div className="max-w-6xl mx-auto px-4">
        {/* Header: Title left, Description right */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 mb-12">
          {/* Title */}
          {sectionTitle && (
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl max-w-md"
              style={titleStyles}
            >
              {sectionTitle}
            </h2>
          )}

          {/* Description */}
          {sectionDescription && (
            <p 
              className="text-sm leading-relaxed max-w-xs lg:text-right"
              style={bodyStyles}
            >
              {sectionDescription}
            </p>
          )}
        </div>

        {/* Service Cards Grid */}
        <div className={`grid grid-cols-1 ${getGridCols()} gap-4`}>
          {services?.map((service, index) => {
            const img = typeof service.serviceImage === 'object' ? service.serviceImage as Media : null

            return (
              <div key={index} className="group relative">
                {/* Card with image and overlay */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  {/* Image */}
                  {img?.url && (
                    <Image
                      src={img.url}
                      alt={service.serviceName || 'Service'}
                      fill
                      className="object-cover"
                    />
                  )}

                  {/* Dark gradient overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Content overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    {/* Service Name */}
                    {service.serviceName && (
                      <h3 
                        className="text-xl md:text-2xl font-normal italic mb-3"
                        style={{ fontFamily: titleStyles.fontFamily }}
                      >
                        {service.serviceName}
                      </h3>
                    )}

                    {/* Service Description */}
                    {service.serviceDescription && (
                      <p className="text-sm leading-relaxed text-white/90">
                        {service.serviceDescription}
                      </p>
                    )}
                  </div>
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
