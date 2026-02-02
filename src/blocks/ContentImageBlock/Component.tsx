import React from 'react'
import type { Media } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { getBlockStyles, type BlockStyleSettings } from '@/fields/blockBackground'

interface TypographySettings {
  font?: string
  size?: string
  weight?: string
  lh?: string
  ls?: string
  color?: string
}

interface HighlightItem {
  text?: string
}

interface HighlightSection {
  title?: string
  items?: HighlightItem[]
}

interface ContentImageBlockProps {
  blockType: 'content-image'
  title?: string
  description?: string
  highlightSection?: HighlightSection
  image?: Media | number
  imagePosition?: 'left' | 'right'
  showBorder?: boolean
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
 * CONTENT & IMAGE BLOCK COMPONENT
 * 
 * Flexible content block with image, optional highlight section with checklist
 */
export function ContentImageBlockComponent({
  title,
  description,
  highlightSection,
  image,
  imagePosition = 'right',
  showBorder = true,
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
  
  // Debug - xem dữ liệu image
  console.log('ContentImageBlock DEBUG:', { 
    imageType: typeof image,
    imageValue: image,
    imgResult: img,
    imgUrl: img?.url 
  })

  // Get colors from new style system, fallback to legacy
  const blockSettings: BlockStyleSettings = {
    bgStyle,
    bgCustom,
    txtStyle,
  }
  const styles = bgStyle 
    ? getBlockStyles(blockSettings) 
    : { backgroundColor: backgroundColor || '#f8f7f5', color: textColor || '#1a1a1a' }

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
    opacity: 0.8,
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
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center`}
        >
          {/* Content Section */}
          <div 
            className={`space-y-5 ${
              imagePosition === 'left' ? 'lg:order-2' : 'lg:order-1'
            }`}
            style={{ textAlign }}
          >
            {/* Title */}
            {title && (
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl leading-tight"
                style={titleStyles}
              >
                {title}
              </h2>
            )}

            {/* Description with line above */}
            {description && (
              <div className="pt-4 border-t border-[#e0ddd8]">
                <p 
                  className="text-sm md:text-base leading-relaxed"
                  style={bodyStyles}
                >
                  {description}
                </p>
              </div>
            )}

            {/* Highlight Section with Checklist */}
            {highlightSection?.title && (
              <div className="pt-4 space-y-4">
                <h3 
                  className="text-sm font-semibold"
                  style={{ color: styles.color }}
                >
                  {highlightSection.title}
                </h3>
                
                {highlightSection.items && highlightSection.items.length > 0 && (
                  <ul className="space-y-2">
                    {highlightSection.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check 
                          className="w-4 h-4 mt-0.5 flex-shrink-0" 
                          strokeWidth={2}
                          style={{ color: styles.color, opacity: 0.6 }}
                        />
                        <span 
                          className="text-sm"
                          style={{ ...bodyStyles, opacity: 0.85 }}
                        >
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
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

          {/* Image Section */}
          <div 
            className={`relative aspect-[5/4] lg:aspect-[4/3] overflow-hidden max-w-md lg:max-w-none mx-auto min-h-[300px] lg:min-h-[400px] ${
              imagePosition === 'left' ? 'lg:order-1' : 'lg:order-2'
            }`}
          >
            {img?.url ? (
              <Image
                src={img.url}
                alt={img.alt || title || 'Content image'}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                No image
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContentImageBlockComponent
