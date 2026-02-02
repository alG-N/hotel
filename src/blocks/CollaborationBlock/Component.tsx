'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Media } from '@/payload-types'
import { getBlockStyles, type BlockStyleSettings } from '@/fields/blockBackground'

interface TypographySettings {
  font?: string
  size?: string
  weight?: string
  lh?: string
  ls?: string
  color?: string
}

interface Partner {
  name?: string
  logo?: Media | number
  link?: string
}

interface CollaborationBlockProps {
  blockType: 'collaboration'
  title?: string
  description?: string
  partners?: Partner[]
  // Style fields
  bgStyle?: string
  bgCustom?: string
  txtStyle?: 'auto' | 'dark' | 'light'
  // Typography
  tTitle?: TypographySettings
  tBody?: TypographySettings
}

export function CollaborationBlockComponent({
  title,
  description,
  partners,
  bgStyle,
  bgCustom,
  txtStyle,
  tTitle,
  tBody,
}: CollaborationBlockProps) {
  // DEBUG: Log toàn bộ partners data
  console.log('CollaborationBlock DEBUG:', { 
    title, 
    partnersCount: partners?.length,
    partners: partners?.map(p => ({
      name: p.name,
      logoType: typeof p.logo,
      logoIsObject: typeof p.logo === 'object',
      logoUrl: typeof p.logo === 'object' ? (p.logo as Media)?.url : 'IS_NUMBER_ID',
      logoFull: p.logo
    }))
  })

  const blockSettings: BlockStyleSettings = { bgStyle, bgCustom, txtStyle }
  const styles = bgStyle 
    ? getBlockStyles(blockSettings) 
    : { backgroundColor: '#1a1a18', color: '#ffffff' }

  const titleStyles: React.CSSProperties = {
    fontFamily: tTitle?.font || 'Georgia, serif',
    fontWeight: tTitle?.weight || '400',
    lineHeight: tTitle?.lh || '1.2',
    letterSpacing: tTitle?.ls || '0',
    fontStyle: 'italic',
    color: tTitle?.color || styles.color,
  }

  const bodyStyles: React.CSSProperties = {
    fontFamily: tBody?.font || 'system-ui, -apple-system, sans-serif',
    fontWeight: tBody?.weight || '400',
    lineHeight: tBody?.lh || '1.6',
    letterSpacing: tBody?.ls || '0',
    color: tBody?.color || styles.color,
  }

  return (
    <section 
      className="py-16 md:py-24 relative overflow-hidden"
      style={{ backgroundColor: styles.backgroundColor, color: styles.color }}
    >
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header - Centered */}
        <div className="text-center mb-12 md:mb-16">
          {title && (
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl mb-4"
              style={titleStyles}
            >
              {title}
            </h2>
          )}
          {description && (
            <p 
              className="text-sm md:text-base max-w-xl mx-auto"
              style={{ ...bodyStyles, opacity: 0.7 }}
            >
              {description}
            </p>
          )}
        </div>

        {/* Partners Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {partners?.map((partner, idx) => {
            const logo = typeof partner.logo === 'object' ? partner.logo as Media : null
            const Wrapper = partner.link ? Link : 'div'
            const wrapperProps = partner.link 
              ? { href: partner.link, target: '_blank', rel: 'noopener noreferrer' } 
              : {}

            // Debug: log nếu không có logo
            if (!logo?.url) {
              console.log('Partner logo missing URL:', partner.name, partner.logo)
              return (
                <div 
                  key={idx}
                  className="h-10 w-32 bg-gray-500 flex items-center justify-center text-xs"
                >
                  {partner.name || 'No logo'}
                </div>
              )
            }

            return (
              <Wrapper
                key={idx}
                {...wrapperProps as any}
                className="relative opacity-90 hover:opacity-100 transition-opacity duration-300"
              >
                <Image
                  src={logo.url}
                  alt={partner.name || 'Partner logo'}
                  width={logo.width || 150}
                  height={logo.height || 60}
                  className="h-12 md:h-16 w-auto object-contain"
                />
              </Wrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CollaborationBlockComponent
