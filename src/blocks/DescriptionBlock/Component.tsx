import React from 'react'
import type { Media } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'
import { getBlockStyles, type BlockStyleSettings } from '@/fields/blockBackground'
import { ArrowUpRight } from 'lucide-react'

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
  leftText?: string
  ctaText?: string
  ctaLink?: string
  image1?: Media | number
  image2?: Media | number
  rightText?: string
  // New style fields
  bgStyle?: string
  bgCustom?: string
  txtStyle?: 'auto' | 'dark' | 'light'
  // Typography (short names)
  tTitle?: TypographySettings
  tBody?: TypographySettings
}

/**
 * DESCRIPTION BLOCK COMPONENT (Type 1)
 * 
 * Layout theo design reference (Pasted Image 2):
 * - Title ở trên full width
 * - 4 columns: [Text+CTA nhỏ] [Image portrait nhỏ] [Image landscape lớn] [Text bên dưới image 2]
 */
export function DescriptionBlockComponent({
  title,
  leftText,
  ctaText = 'More About Us',
  ctaLink = '/about',
  image1,
  image2,
  rightText,
  // New fields
  bgStyle,
  bgCustom,
  txtStyle,
  tTitle,
  tBody,
}: DescriptionBlockProps) {
  // Use new style system
  const blockSettings: BlockStyleSettings = { bgStyle, bgCustom, txtStyle }
  const hasNewStyles = !!bgStyle && bgStyle !== 'default'
  const styles = hasNewStyles 
    ? getBlockStyles(blockSettings)
    : { backgroundColor: '#f5f5f0', color: '#1a1a1a' }

  const textColor = styles.color || '#1a1a1a'
  const mutedColor = txtStyle === 'light' ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.6)'

  // Title typography
  const titleStyles: React.CSSProperties = {
    fontFamily: tTitle?.font || 'Georgia, serif',
    fontSize: tTitle?.size || undefined,
    fontWeight: tTitle?.weight || '300',
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
    lineHeight: tBody?.lh || '1.75',
    letterSpacing: tBody?.ls || '0',
    color: tBody?.color || mutedColor,
  }

  const img1 = typeof image1 === 'object' ? image1 as Media : null
  const img2 = typeof image2 === 'object' ? image2 as Media : null

  return (
    <section 
      className="py-16 md:py-24 px-4"
      style={{ 
        backgroundColor: styles.backgroundColor,
        color: textColor,
      }}
    >
      <div className="max-w-5xl mx-auto">
        {/* 2 Column Layout - closer together */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4">
          
          {/* LEFT SIDE: Title + Text + CTA + Image */}
          <div className="flex flex-col">
            {/* Title - split into 2 lines */}
            {title && (
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl mb-8 lg:mb-10"
                style={titleStyles}
              >
                {title.split(',').map((part, idx) => (
                  <span key={idx}>
                    {part.trim()}{idx === 0 ? ',' : ''}
                    {idx === 0 && <br />}
                  </span>
                ))}
              </h2>
            )}
            
            {/* Text + CTA + Image in a row */}
            <div className="flex gap-4 items-start">
              {/* Text + CTA - narrower width, 4 lines */}
              <div className="w-36 md:w-44 flex-shrink-0">
                {leftText && (
                  <p className="text-sm leading-relaxed mb-4 line-clamp-4" style={bodyStyles}>
                    {leftText}
                  </p>
                )}
                {ctaText && ctaLink && (
                  <Link 
                    href={ctaLink}
                    className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
                    style={{ color: textColor }}
                  >
                    {ctaText}
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
              
              {/* Portrait image - larger */}
              {img1?.url && (
                <div className="flex-1">
                  <div className="relative aspect-[3/4] w-full max-w-[220px]">
                    <Image
                      src={img1.url}
                      alt={img1.alt || 'Image 1'}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT SIDE: Large Image on TOP, Text BELOW */}
          <div className="flex flex-col">
            {/* Large landscape image - smaller aspect ratio */}
            {img2?.url && (
              <div className="relative aspect-[16/9] w-full max-w-lg ml-auto mb-6">
                <Image
                  src={img2.url}
                  alt={img2.alt || 'Image 2'}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            
            {/* Text below image - max width to match image */}
            {rightText && (
              <div className="text-sm leading-relaxed max-w-lg ml-auto" style={bodyStyles}>
                {rightText.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-3 last:mb-0">{paragraph}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default DescriptionBlockComponent
