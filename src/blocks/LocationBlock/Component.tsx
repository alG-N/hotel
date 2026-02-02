import React from 'react'
import type { Media } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'
import { getBlockStyles, type BlockStyleSettings } from '@/fields/blockBackground'

interface TypographySettings {
  font?: string
  size?: string
  weight?: string
  lh?: string
  ls?: string
  color?: string
}

interface LocationBlockProps {
  blockType: 'location'
  // Addresses
  address1Label?: string
  address1?: string
  address2Label?: string
  address2?: string
  // Contact
  hotlineLabel?: string
  hotline?: string
  emailLabel?: string
  email?: string
  // CTA
  ctaText?: string
  ctaLink?: string
  // Map
  mapImage?: Media | number
  // Style fields
  bgStyle?: string
  bgCustom?: string
  txtStyle?: 'auto' | 'dark' | 'light'
  tTitle?: TypographySettings
  tBody?: TypographySettings
}

/**
 * LOCATION BLOCK COMPONENT
 * 
 * Layout:
 * ┌─────────────────────────────────────────────────────┐
 * │  Address 1  │  Hotline    │                         │
 * │  Address 2  │  Email      │  [Contact Us]           │
 * ├─────────────────────────────────────────────────────┤
 * │                   Map Image                          │
 * └─────────────────────────────────────────────────────┘
 */
export function LocationBlockComponent({
  address1Label = 'Address 1',
  address1,
  address2Label = 'Address 2',
  address2,
  hotlineLabel = 'Hotline',
  hotline,
  emailLabel = 'Email',
  email,
  ctaText = 'Contact Us',
  ctaLink = '/contact',
  mapImage,
  bgStyle,
  bgCustom,
  txtStyle,
  tTitle,
  tBody,
}: LocationBlockProps) {
  // Parse map image
  const mapImg = typeof mapImage === 'object' ? mapImage as Media : null

  // Style system
  const blockSettings: BlockStyleSettings = { bgStyle, bgCustom, txtStyle }
  const hasNewStyles = !!bgStyle && bgStyle !== 'default'
  const styles = hasNewStyles 
    ? getBlockStyles(blockSettings)
    : { backgroundColor: '#f5f3f0', color: '#1a1a1a' }

  const textColor = styles.color || '#1a1a1a'

  // Body typography
  const bodyStyles: React.CSSProperties = {
    fontFamily: tBody?.font || 'system-ui, -apple-system, sans-serif',
    fontWeight: tBody?.weight || '400',
    lineHeight: tBody?.lh || '1.6',
    letterSpacing: tBody?.ls || '0',
    color: tBody?.color || textColor,
  }

  return (
    <section 
      className="py-12 md:py-16 px-4"
      style={{ 
        backgroundColor: styles.backgroundColor,
        color: textColor,
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Contact Info - 2 rows layout */}
        <div className="space-y-4 mb-10">
          
          {/* Row 1: Address1 (with label) | Hotline (with label) | (empty) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12 items-start">
            {/* Address 1 - with label */}
            <div>
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-1" style={bodyStyles}>
                <MapPin size={14} />
                <span>{address1Label || 'Address 1'}</span>
              </div>
              {address1 && (
                <p className="text-base font-medium" style={{ ...bodyStyles, color: '#2c5545' }}>
                  {address1}
                </p>
              )}
            </div>

            {/* Hotline - with label */}
            <div>
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-1" style={bodyStyles}>
                <Phone size={14} />
                <span>{hotlineLabel || 'Hotline'}</span>
              </div>
              {hotline && (
                <a 
                  href={`tel:${hotline.replace(/\s/g, '')}`}
                  className="text-base font-medium hover:underline block"
                  style={bodyStyles}
                >
                  {hotline}
                </a>
              )}
            </div>

            {/* Empty - button is in row 2 */}
            <div></div>
          </div>

          {/* Row 2: Address2 (with label) | Email (with label) | Button */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12 items-start">
            {/* Address 2 - with label */}
            <div>
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-1" style={bodyStyles}>
                <MapPin size={14} />
                <span>{address2Label || 'Address 2'}</span>
              </div>
              {address2 && (
                <p className="text-base font-medium" style={{ ...bodyStyles, color: '#2c5545' }}>
                  {address2}
                </p>
              )}
            </div>

            {/* Email - with label */}
            <div>
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-1" style={bodyStyles}>
                <Mail size={14} />
                <span>{emailLabel || 'Email'}</span>
              </div>
              {email && (
                <a 
                  href={`mailto:${email}`}
                  className="text-base font-medium hover:underline block"
                  style={bodyStyles}
                >
                  {email}
                </a>
              )}
            </div>

            {/* CTA Button - in row 2 */}
            <div className="flex items-start justify-start md:justify-end">
              {ctaText && ctaLink && (
                <Link
                  href={ctaLink}
                  className="inline-block px-8 py-3 bg-[#2a2a28] text-white text-sm tracking-wider hover:bg-[#1a1a18] transition-colors"
                >
                  {ctaText}
                </Link>
              )}
            </div>
          </div>

        </div>

        {/* Map Image */}
        {mapImg?.url && (
          <div className="relative w-full aspect-[16/7] overflow-hidden">
            <Image
              src={mapImg.url}
              alt="Location Map"
              fill
              className="object-cover"
            />
          </div>
        )}
      </div>
    </section>
  )
}

export default LocationBlockComponent
