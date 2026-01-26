import React from 'react'
import { getBlockStyles, type BlockStyleSettings } from '@/fields/blockBackground'

interface TypographySettings {
  font?: string
  size?: string
  weight?: string
  lh?: string
  ls?: string
  color?: string
}

interface DescriptionBlockProps {
  blockType: 'description'
  title?: string
  description?: string
  address?: string
  addressLink?: string
  phone?: string
  phoneLink?: string
  // Settings
  textAlign?: 'left' | 'center' | 'right'
  titleStyle?: 'italic' | 'normal' | 'bold'
  // New style fields
  bgStyle?: string
  bgCustom?: string
  txtStyle?: 'auto' | 'dark' | 'light'
  // Typography (short names)
  tTitle?: TypographySettings
  tBody?: TypographySettings
}

/**
 * DESCRIPTION BLOCK COMPONENT
 * 
 * Hiển thị thông tin tổng quan về hotel
 */
export function DescriptionBlockComponent({
  title,
  description,
  address,
  addressLink,
  phone,
  phoneLink,
  textAlign = 'center',
  titleStyle = 'italic',
  // New fields
  bgStyle,
  bgCustom,
  txtStyle,
  tTitle,
  tBody,
}: DescriptionBlockProps) {
  // Use new style system
  const blockSettings: BlockStyleSettings = { bgStyle, bgCustom, txtStyle }
  const styles = getBlockStyles(blockSettings)
  
  const mutedColor = styles.color === '#ffffff' || styles.color === '#fff' 
    ? 'rgba(255,255,255,0.7)' 
    : 'rgba(0,0,0,0.7)'

  // Title typography
  const titleStyles: React.CSSProperties = {
    fontFamily: tTitle?.font || 'Georgia, serif',
    fontSize: tTitle?.size || undefined,
    fontWeight: tTitle?.weight || (titleStyle === 'bold' ? '700' : '300'),
    fontStyle: tTitle?.font ? 'normal' : (titleStyle === 'italic' ? 'italic' : 'normal'),
    lineHeight: tTitle?.lh || '1.2',
    letterSpacing: tTitle?.ls || '0.02em',
    color: tTitle?.color || styles.color,
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
        color: styles.color,
      }}
    >
      <div 
        className="max-w-4xl mx-auto"
        style={{ textAlign }}
      >
        {/* Title */}
        {title && (
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl mb-8 tracking-wide"
            style={titleStyles}
          >
            {title}
          </h2>
        )}

        {/* Description */}
        {description && (
          <p 
            className="text-base md:text-lg leading-relaxed mb-10"
            style={bodyStyles}
          >
            {description}
          </p>
        )}

        {/* Contact Info */}
        {(address || phone) && (
          <div className="flex flex-wrap items-center justify-center gap-8 pt-4">
            {/* Address */}
            {address && (
              <a 
                href={addressLink || '#'}
                target={addressLink ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                style={{ color: '#8b7355' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="underline underline-offset-4">{address}</span>
              </a>
            )}

            {/* Phone */}
            {phone && (
              <a 
                href={phoneLink || `tel:${phone}`}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                style={{ color: '#8b7355' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{phone}</span>
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default DescriptionBlockComponent
