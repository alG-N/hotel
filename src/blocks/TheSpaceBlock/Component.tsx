'use client'

import React from 'react'
import type { Media } from '@/payload-types'
import Image from 'next/image'
import { getBlockStyles, type BlockStyleSettings } from '@/fields/blockBackground'
import { LayoutGrid, Users, Layers, Square, Clock } from 'lucide-react'

interface TypographySettings {
  font?: string
  size?: string
  weight?: string
  lh?: string
  ls?: string
  color?: string
}

interface StatItem {
  icon?: 'grid' | 'seats' | 'zones' | 'square' | 'users' | 'clock'
  value?: string
  description?: string
}

interface ImageItem {
  image?: Media | number
}

interface TheSpaceBlockProps {
  blockType: 'the-space'
  sectionTitle?: string
  sectionDescription?: string
  stats?: StatItem[]
  images?: ImageItem[]
  // Style fields
  bgStyle?: string
  bgCustom?: string
  txtStyle?: 'auto' | 'dark' | 'light'
  tTitle?: TypographySettings
  tBody?: TypographySettings
}

/**
 * THE SPACE BLOCK COMPONENT
 * 
 * Bento grid layout - alternating pattern:
 * Row 1: Stat | Image | Stat
 * Row 2: Image | Stat | Image
 */
export function TheSpaceBlockComponent({
  sectionTitle = 'The Space',
  sectionDescription,
  stats = [],
  images = [],
  bgStyle,
  bgCustom,
  txtStyle,
  tTitle,
  tBody,
}: TheSpaceBlockProps) {
  // Style system
  const blockSettings: BlockStyleSettings = { bgStyle, bgCustom, txtStyle }
  const hasNewStyles = !!bgStyle && bgStyle !== 'default'
  const styles = hasNewStyles 
    ? getBlockStyles(blockSettings)
    : { backgroundColor: '#f5f3f0', color: '#1a1a1a' }

  const textColor = styles.color || '#1a1a1a'
  const mutedColor = txtStyle === 'light' ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.6)'
  const borderColor = txtStyle === 'light' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)'

  // Title typography
  const titleStyles: React.CSSProperties = {
    fontFamily: tTitle?.font || 'Georgia, serif',
    fontSize: tTitle?.size || undefined,
    fontWeight: tTitle?.weight || '400',
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
    lineHeight: tBody?.lh || '1.6',
    letterSpacing: tBody?.ls || '0',
    color: tBody?.color || mutedColor,
  }

  // Parse images
  const parsedImages = images
    ?.map(item => typeof item.image === 'object' ? item.image as Media : null)
    .filter((img): img is Media => img !== null && !!img?.url) || []

  const img1 = parsedImages[0]
  const img2 = parsedImages[1]
  const img3 = parsedImages[2]

  // Stats
  const stat1 = stats[0]
  const stat2 = stats[1]
  const stat3 = stats[2]

  // Icon renderer
  const renderIcon = (iconType?: string) => {
    const iconProps = { className: 'w-5 h-5 md:w-6 md:h-6', strokeWidth: 1.5 }
    switch (iconType) {
      case 'grid': return <LayoutGrid {...iconProps} />
      case 'seats': 
      case 'users': return <Users {...iconProps} />
      case 'zones': 
      case 'layers': return <Layers {...iconProps} />
      case 'square': return <Square {...iconProps} />
      case 'clock': return <Clock {...iconProps} />
      default: return <LayoutGrid {...iconProps} />
    }
  }

  // Stat card component
  const StatCard = ({ stat }: { stat?: StatItem }) => {
    if (!stat) return null
    return (
      <div className="p-4 md:p-6 flex flex-col justify-center h-full">
        <div className="mb-2 md:mb-3" style={{ color: textColor }}>
          {renderIcon(stat.icon)}
        </div>
        <div 
          className="text-xl md:text-2xl lg:text-3xl font-light mb-1 md:mb-2"
          style={{ color: textColor, fontFamily: titleStyles.fontFamily }}
        >
          {stat.value}
        </div>
        {stat.description && (
          <p className="text-xs md:text-sm leading-relaxed" style={bodyStyles}>
            {stat.description}
          </p>
        )}
      </div>
    )
  }

  // Image cell component
  const ImageCell = ({ img }: { img?: Media | null }) => {
    if (!img?.url) return <div className="bg-gray-200 h-full min-h-[150px] md:min-h-[180px]" />
    return (
      <div className="relative h-full min-h-[150px] md:min-h-[180px]">
        <Image
          src={img.url}
          alt={img.alt || 'Space image'}
          fill
          className="object-cover"
        />
      </div>
    )
  }

  return (
    <section 
      className="py-16 md:py-24 px-4"
      style={{ backgroundColor: styles.backgroundColor }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-8 md:mb-10">
          {sectionTitle && (
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl"
              style={titleStyles}
            >
              {sectionTitle}
            </h2>
          )}
          {sectionDescription && (
            <p 
              className="text-sm max-w-xs md:text-right"
              style={bodyStyles}
            >
              {sectionDescription}
            </p>
          )}
        </div>

        {/* Bento Grid - 3 columns */}
        <div 
          className="border"
          style={{ borderColor }}
        >
          {/* Row 1: Stat | Image | Stat */}
          <div 
            className="grid grid-cols-3 border-b"
            style={{ borderColor }}
          >
            {/* Stat 1 */}
            <div className="border-r" style={{ borderColor }}>
              <StatCard stat={stat1} />
            </div>
            
            {/* Image 1 */}
            <div className="border-r" style={{ borderColor }}>
              <ImageCell img={img1} />
            </div>

            {/* Stat 2 */}
            <div>
              <StatCard stat={stat2} />
            </div>
          </div>

          {/* Row 2: Image | Stat | Image */}
          <div className="grid grid-cols-3">
            {/* Image 2 */}
            <div className="border-r" style={{ borderColor }}>
              <ImageCell img={img2} />
            </div>

            {/* Stat 3 */}
            <div className="border-r" style={{ borderColor }}>
              <StatCard stat={stat3} />
            </div>

            {/* Image 3 */}
            <div>
              <ImageCell img={img3} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TheSpaceBlockComponent
