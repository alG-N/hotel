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

interface DescriptionType2BlockProps {
  blockType: 'description-type2'
  title?: string
  imageLeft?: Media | number
  paragraph1?: string
  paragraph2?: string
  imageRight1?: Media | number
  imageRight2?: Media | number
  // Style fields
  bgStyle?: string
  bgCustom?: string
  txtStyle?: 'auto' | 'dark' | 'light'
  tTitle?: TypographySettings
  tBody?: TypographySettings
}

/**
 * DESCRIPTION TYPE 2 COMPONENT
 * 
 * Layout như design reference:
 * ┌────────────┬────────────────────┬────────────┐
 * │   Title    │                    │  Image 1   │
 * │            │    Paragraph 1     │  (portrait)│
 * │            │                    ├────────────┤
 * │            │    Paragraph 2     │  Image 2   │
 * │  Image     │                    │  (portrait)│
 * │  (small)   │                    │            │
 * └────────────┴────────────────────┴────────────┘
 */

// === SUB-COMPONENTS ===

// Title Component
function TitleSection({ 
  title, 
  styles 
}: { 
  title?: string
  styles: React.CSSProperties 
}) {
  if (!title) return null
  
  return (
    <h2 
      className="text-3xl md:text-4xl lg:text-5xl"
      style={styles}
    >
      {title.split('\n').map((line, idx) => (
        <span key={idx}>
          {line}
          {idx < title.split('\n').length - 1 && <br />}
        </span>
      ))}
    </h2>
  )
}

// Small Image Component (bottom left)
function SmallImage({ 
  image 
}: { 
  image: Media | null 
}) {
  if (!image?.url) return null
  
  return (
    <div className="relative w-28 md:w-36 lg:w-40 aspect-[16/10] overflow-hidden">
      <Image
        src={image.url}
        alt={image.alt || 'Decorative image'}
        fill
        className="object-cover"
      />
    </div>
  )
}

// Text Content Component
function TextContent({ 
  paragraph1, 
  paragraph2, 
  styles 
}: { 
  paragraph1?: string
  paragraph2?: string
  styles: React.CSSProperties 
}) {
  return (
    <div className="flex flex-col justify-center h-full">
      {paragraph1 && (
        <p 
          className="text-sm md:text-base mb-6 leading-relaxed"
          style={{ ...styles, opacity: 0.9 }}
        >
          {paragraph1}
        </p>
      )}
      
      {paragraph2 && (
        <p 
          className="text-sm md:text-base leading-relaxed"
          style={{ ...styles, opacity: 0.9 }}
        >
          {paragraph2}
        </p>
      )}
    </div>
  )
}

// Portrait Image Component
function PortraitImage({ 
  image,
  aspectRatio = '3/4'
}: { 
  image: Media | null
  aspectRatio?: string
}) {
  if (!image?.url) return null
  
  return (
    <div 
      className="relative overflow-hidden"
      style={{ aspectRatio }}
    >
      <Image
        src={image.url}
        alt={image.alt || 'Gallery image'}
        fill
        className="object-cover"
      />
    </div>
  )
}

// === MAIN COMPONENT ===

export function DescriptionType2BlockComponent({
  title,
  imageLeft,
  paragraph1,
  paragraph2,
  imageRight1,
  imageRight2,
  bgStyle,
  bgCustom,
  txtStyle,
  tTitle,
  tBody,
}: DescriptionType2BlockProps) {
  // Style system
  const blockSettings: BlockStyleSettings = { bgStyle, bgCustom, txtStyle }
  const hasNewStyles = !!bgStyle && bgStyle !== 'default'
  const styles = hasNewStyles 
    ? getBlockStyles(blockSettings)
    : { backgroundColor: '#f5f3f0', color: '#1a1a1a' }

  const textColor = styles.color || '#1a1a1a'

  // Title typography
  const titleStyles: React.CSSProperties = {
    fontFamily: tTitle?.font || 'Georgia, serif',
    fontSize: tTitle?.size || undefined,
    fontWeight: tTitle?.weight || '400',
    lineHeight: tTitle?.lh || '1.2',
    letterSpacing: tTitle?.ls || '0',
    color: tTitle?.color || textColor,
  }

  // Body typography
  const bodyStyles: React.CSSProperties = {
    fontFamily: tBody?.font || 'system-ui, -apple-system, sans-serif',
    fontSize: tBody?.size || undefined,
    fontWeight: tBody?.weight || '400',
    lineHeight: tBody?.lh || '1.7',
    letterSpacing: tBody?.ls || '0',
    color: tBody?.color || textColor,
  }

  // Parse images
  const leftImage = typeof imageLeft === 'object' ? imageLeft as Media : null
  const rightImage1 = typeof imageRight1 === 'object' ? imageRight1 as Media : null
  const rightImage2 = typeof imageRight2 === 'object' ? imageRight2 as Media : null

  return (
    <section 
      className="py-16 md:py-24 px-4"
      style={{ 
        backgroundColor: styles.backgroundColor,
        color: textColor,
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Grid 3 cột x 2 rows */}
        <div 
          className="hidden md:grid gap-4"
          style={{
            gridTemplateColumns: '18% 42% 35%',
            gridTemplateRows: '1fr 1fr',
            minHeight: '450px',
            columnGap: '1rem',
          }}
        >
          {/* Row 1, Cột 1: Title */}
          <div className="self-start pr-2">
            <TitleSection title={title} styles={titleStyles} />
          </div>
          
          {/* Row 1, Cột 2: Text - spans 2 rows */}
          <div className="row-span-2 flex items-center">
            <TextContent 
              paragraph1={paragraph1} 
              paragraph2={paragraph2} 
              styles={bodyStyles} 
            />
          </div>
          
          {/* Row 1, Cột 3: Ảnh 1 (dài ngang - landscape) */}
          <div className="self-start">
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
              {rightImage1?.url && (
                <Image
                  src={rightImage1.url}
                  alt={rightImage1.alt || 'Gallery image'}
                  fill
                  className="object-cover"
                />
              )}
            </div>
          </div>
          
          {/* Row 2, Cột 1: Ảnh nhỏ */}
          <div className="self-end">
            <div className="relative w-28 overflow-hidden" style={{ aspectRatio: '16/10' }}>
              {leftImage?.url && (
                <Image
                  src={leftImage.url}
                  alt={leftImage.alt || 'Decorative image'}
                  fill
                  className="object-cover"
                />
              )}
            </div>
          </div>
          
          {/* Row 2, Cột 2: Text đã span ở trên */}
          
          {/* Row 2, Cột 3: Ảnh 2 (hình chữ nhật nhỏ ngang, nằm giữa) */}
          <div className="self-end flex justify-center">
            <div className="relative w-3/4 overflow-hidden" style={{ aspectRatio: '4/3' }}>
              {rightImage2?.url && (
                <Image
                  src={rightImage2.url}
                  alt={rightImage2.alt || 'Gallery image'}
                  fill
                  className="object-cover"
                />
              )}
            </div>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden flex flex-col gap-6">
          <TitleSection title={title} styles={titleStyles} />
          <TextContent paragraph1={paragraph1} paragraph2={paragraph2} styles={bodyStyles} />
          <div className="flex gap-4 items-end">
            <div className="w-1/2">
              <PortraitImage image={rightImage1} aspectRatio="3/4" />
            </div>
            <div className="w-1/2">
              <PortraitImage image={rightImage2} aspectRatio="4/5" />
            </div>
          </div>
          <div className="relative w-28 overflow-hidden" style={{ aspectRatio: '16/10' }}>
            {leftImage?.url && (
              <Image
                src={leftImage.url}
                alt={leftImage.alt || 'Decorative image'}
                fill
                className="object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default DescriptionType2BlockComponent
