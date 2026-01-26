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

interface ContentImageBlockProps {
  blockType: 'content-image'
  title?: string
  subtitle?: string
  description?: string
  image?: Media | number
  imagePosition?: 'left' | 'right'
  ctaText?: string
  ctaLink?: string
  // New style fields (short names)
  bgStyle?: string
  bgCustom?: string
  txtStyle?: 'auto' | 'dark' | 'light'
  // Typography (short names)
  tTitle?: TypographySettings
  tBody?: TypographySettings
  textAlign?: 'left' | 'center' | 'right'
  // Legacy fields (for backward compatibility)
  backgroundColor?: string
  textColor?: string
}

/**
 * CONTENT + IMAGE BLOCK COMPONENT
 * 
 * Flexible content block with image that can be positioned on left or right
 */
export function ContentImageBlockComponent({
  title,
  subtitle,
  description,
  image,
  imagePosition = 'right',
  ctaText,
  ctaLink,
  bgStyle,
  bgCustom,
  txtStyle,
  tTitle,
  tBody,
  textAlign = 'left',
  // Legacy
  backgroundColor,
  textColor,
}: ContentImageBlockProps) {
  const img = typeof image === 'object' ? image as Media : null

  // Get colors from new style system, fallback to legacy
  const blockSettings: BlockStyleSettings = {
    bgStyle,
    bgCustom,
    txtStyle,
  }
  const styles = bgStyle 
    ? getBlockStyles(blockSettings) 
    : { backgroundColor: backgroundColor || 'transparent', color: textColor || '#1a1a1a' }

  // Title styles
  const titleStyles: React.CSSProperties = {
    fontFamily: tTitle?.font || 'Georgia, serif',
    fontSize: tTitle?.size || undefined,
    fontWeight: tTitle?.weight || '400',
    lineHeight: tTitle?.lh || '1.2',
    letterSpacing: tTitle?.ls || '0',
    color: tTitle?.color || styles.color,
  }

  // Body styles
  const bodyStyles: React.CSSProperties = {
    fontFamily: tBody?.font || 'system-ui, -apple-system, sans-serif',
    fontSize: tBody?.size || undefined,
    fontWeight: tBody?.weight || '400',
    lineHeight: tBody?.lh || '1.75',
    letterSpacing: tBody?.ls || '0',
    color: tBody?.color || styles.color,
    opacity: 0.9,
  }

  return (
    <section 
      className="py-16 md:py-24"
      style={{ 
        backgroundColor: styles.backgroundColor,
        color: styles.color,
      }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div 
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center ${
            imagePosition === 'left' ? 'lg:flex-row-reverse' : ''
          }`}
        >
          {/* Image Section */}
          <div 
            className={`relative aspect-[4/3] overflow-hidden ${
              imagePosition === 'left' ? 'lg:order-1' : 'lg:order-2'
            }`}
          >
            {img?.url && (
              <Image
                src={img.url}
                alt={title || 'Content image'}
                fill
                className="object-cover"
              />
            )}
          </div>

          {/* Content Section */}
          <div 
            className={`space-y-6 ${
              imagePosition === 'left' ? 'lg:order-2' : 'lg:order-1'
            }`}
            style={{ textAlign }}
          >
            {/* Subtitle */}
            {subtitle && (
              <p 
                className="text-sm uppercase tracking-widest"
                style={{ color: styles.color, opacity: 0.7 }}
              >
                {subtitle}
              </p>
            )}

            {/* Title */}
            {title && (
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl leading-tight"
                style={titleStyles}
              >
                {title}
              </h2>
            )}

            {/* Description */}
            {description && (
              <p 
                className="text-base md:text-lg leading-relaxed"
                style={bodyStyles}
              >
                {description}
              </p>
            )}

            {/* CTA Button */}
            {ctaLink && ctaText && (
              <div className="pt-4">
                <Link 
                  href={ctaLink}
                  className="inline-flex items-center gap-2 text-sm uppercase tracking-widest hover:gap-4 transition-all duration-300"
                >
                  {ctaText}
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 20 20" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <path d="M5 10h10M10 5l5 5-5 5" />
                  </svg>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContentImageBlockComponent
