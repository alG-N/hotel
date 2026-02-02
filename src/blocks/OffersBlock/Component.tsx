import React from 'react'
import type { Media } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'
import { getBlockStyles, type BlockStyleSettings } from '@/fields/blockBackground'
import { Check } from 'lucide-react'

interface TypographySettings {
  font?: string
  size?: string
  weight?: string
  lh?: string
  ls?: string
  color?: string
}

interface OffersBlockProps {
  blockType: 'offers'
  image?: Media | number
  title?: string
  description?: string
  priceHighlight?: string
  featuresTitle?: string
  features?: Array<{ feature?: string }>
  ctaText?: string
  ctaLink?: string
  // Settings
  sectionStyle?: 'dark' | 'light'
  imagePosition?: 'left' | 'right'
  textAlign?: 'left' | 'center' | 'right'
  imageWidth?: string
  imageHeight?: string
  imageAspectRatio?: 'auto' | '1/1' | '4/3' | '3/4' | '16/9' | '9/16'
  // New style fields
  bgStyle?: string
  bgCustom?: string
  txtStyle?: 'auto' | 'dark' | 'light'
  tTitle?: TypographySettings
  tBody?: TypographySettings
}

/**
 * OFFERS BLOCK COMPONENT
 * 
 * Layout: Image on one side, content on the other
 * Content: Title, description with price highlight, features list, CTA button
 */
export function OffersBlockComponent({
  image,
  title = 'Exclusive Offers, Thoughtfully Curated',
  description,
  priceHighlight = '$89 per night',
  featuresTitle = "What's Included:",
  features,
  ctaText = 'Book Now',
  ctaLink = '/booking',
  sectionStyle = 'dark',
  imagePosition = 'left',
  textAlign = 'center',
  imageWidth = '100%',
  imageHeight = 'auto',
  imageAspectRatio = 'auto',
  // New style fields
  bgStyle,
  bgCustom,
  txtStyle,
  tTitle,
  tBody,
}: OffersBlockProps) {
  // Determine colors based on sectionStyle
  const isDark = sectionStyle === 'dark'
  const bgColor = isDark ? '#0d0d0d' : '#f5f5f0'
  const textColor = isDark ? '#ffffff' : '#1a1a1a'
  const mutedColor = isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.6)'
  const dividerColor = isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'
  const checkColor = isDark ? '#c9a55a' : '#8b7355'  // Gold for dark, brown for light

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
  const bodyStylesCSS: React.CSSProperties = {
    fontFamily: tBody?.font || 'system-ui, -apple-system, sans-serif',
    fontSize: tBody?.size || undefined,
    fontWeight: tBody?.weight || '400',
    lineHeight: tBody?.lh || '1.6',
    letterSpacing: tBody?.ls || '0',
    color: tBody?.color || mutedColor,
  }

  const img = typeof image === 'object' ? image as Media : null

  // Text alignment classes
  const textAlignClass = textAlign === 'center' ? 'text-center' : textAlign === 'right' ? 'text-right' : 'text-left'
  const itemsAlignClass = textAlign === 'center' ? 'items-center' : textAlign === 'right' ? 'items-end' : 'items-start'

  // Image styles
  const getImageContainerStyle = (): React.CSSProperties => {
    const style: React.CSSProperties = {
      width: imageWidth,
      height: imageHeight === 'auto' ? undefined : imageHeight,
      position: 'relative',
      overflow: 'hidden',
    }
    
    if (imageAspectRatio !== 'auto') {
      style.aspectRatio = imageAspectRatio
    }
    
    return style
  }

  return (
    <section 
      className="py-16 md:py-24"
      style={{ backgroundColor: bgColor }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${imagePosition === 'right' ? 'lg:flex-row-reverse' : ''}`}>
          {/* Image */}
          {img?.url && (
            <div 
              className={`relative ${imagePosition === 'right' ? 'lg:order-2' : ''}`}
              style={getImageContainerStyle()}
            >
              <Image
                src={img.url}
                alt={title || 'Offer'}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div className={`flex flex-col ${itemsAlignClass} ${imagePosition === 'right' ? 'lg:order-1' : ''}`}>
            {/* Title */}
            {title && (
              <h2 
                className={`text-3xl md:text-4xl lg:text-5xl mb-6 italic ${textAlignClass}`}
                style={titleStyles}
              >
                {title}
              </h2>
            )}

            {/* Description with price highlight inline */}
            <p className={`text-sm md:text-base mb-8 max-w-lg ${textAlignClass}`} style={bodyStylesCSS}>
              {description ? (
                <>
                  {description.split(priceHighlight || '')[0]}
                  {priceHighlight && (
                    <span className="font-semibold italic text-lg md:text-xl" style={{ color: textColor }}>
                      {priceHighlight}
                    </span>
                  )}
                  {description.split(priceHighlight || '')[1]}
                </>
              ) : (
                <>
                  Enjoy an exclusive special price from{' '}
                  <span className="font-semibold italic text-lg md:text-xl" style={{ color: textColor }}>
                    {priceHighlight}
                  </span>{' '}
                  when you book directly with The Calanthe. Thoughtfully curated for guests who appreciate comfort, calm, and exceptional value.
                </>
              )}
            </p>

            {/* Divider line */}
            <div className="w-full max-w-md border-t mb-8" style={{ borderColor: dividerColor }}></div>

            {/* Features */}
            {features && features.length > 0 && (
              <div className={`mb-8 ${textAlignClass}`}>
                {featuresTitle && (
                  <p className="text-sm mb-4" style={{ color: mutedColor }}>
                    {featuresTitle}
                  </p>
                )}
                <ul className={`space-y-2 ${textAlign === 'center' ? 'inline-block' : ''}`}>
                  {features.map((item, index) => (
                    <li 
                      key={index} 
                      className={`flex items-center gap-3 text-sm ${textAlign === 'center' ? 'justify-center' : ''}`} 
                      style={bodyStylesCSS}
                    >
                      <Check className="w-4 h-4 flex-shrink-0" style={{ color: checkColor }} />
                      <span>{item.feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA Button */}
            {ctaText && ctaLink && (
              <Link
                href={ctaLink}
                className="inline-block px-8 py-3 text-sm tracking-wider transition-all duration-300"
                style={{
                  backgroundColor: isDark ? '#ffffff' : '#1a1a1a',
                  color: isDark ? '#000000' : '#ffffff',
                }}
              >
                {ctaText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OffersBlockComponent
