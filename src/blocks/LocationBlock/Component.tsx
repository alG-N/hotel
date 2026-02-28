import React from 'react'
import type { Media } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getBlockStyles, type BlockStyleSettings } from '@/fields/blockBackground'
import { T } from '@/providers/Language/T'
import { GoogleMapEmbed } from './GoogleMap'
import { GettingThereAccordion } from './GettingThereAccordion'

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
  // New fields
  sectionTitle?: string
  locationLabel?: string
  fullAddress?: string
  getDirectionsUrl?: string
  reservationLabel?: string
  parkingLabel?: string
  parkingItems?: Array<{ text: string; id?: string }>
  mapAddress?: string
  mapLatitude?: number
  mapLongitude?: number
  mapZoom?: number
  gettingThereTitle?: string
  gettingThereItems?: Array<{ title: string; content?: string; id?: string }>
  // Legacy fields (kept for backward compat)
  address1Label?: string
  address1?: string
  address2Label?: string
  address2?: string
  hotlineLabel?: string
  hotline?: string
  emailLabel?: string
  email?: string
  ctaText?: string
  ctaLink?: string
  mapImage?: Media | number
  // Style fields
  bgStyle?: string
  bgCustom?: string
  txtStyle?: 'auto' | 'dark' | 'light'
  tTitle?: TypographySettings
  tBody?: TypographySettings
}

/**
 * LOCATION BLOCK COMPONENT (Upgraded)
 *
 * Layout:
 * ┌──────────────────────────────────────────────────────────────┐
 * │         Location & Contact                                    │
 * │  LOCATION          │  RESERVATION      │  PARKING             │
 * │  Full address       │  Tel: ...         │  Parking included    │
 * │  Get directions →   │  Mail: ...        │  Indoor parking      │
 * ├──────────────────────────────────────────────────────────────┤
 * │                  Google Map (embedded)                         │
 * ├──────────────────────────────────────────────────────────────┤
 * │         Getting there                                         │
 * │  ▸ Parking / Road direction / Train / etc.                    │
 * └──────────────────────────────────────────────────────────────┘
 */
export function LocationBlockComponent({
  // New fields
  sectionTitle,
  locationLabel,
  fullAddress,
  getDirectionsUrl,
  reservationLabel,
  parkingLabel,
  parkingItems,
  mapAddress,
  mapLatitude,
  mapLongitude,
  mapZoom = 13,
  gettingThereTitle,
  gettingThereItems,
  // Legacy fields
  address1,
  address2,
  hotline,
  email,
  ctaText,
  ctaLink,
  mapImage,
  // Styles
  bgStyle,
  bgCustom,
  txtStyle,
  tTitle,
  tBody,
}: LocationBlockProps) {
  // Parse map image for fallback
  const mapImg = typeof mapImage === 'object' ? (mapImage as Media) : null

  // Defaults handled below after rendering via <T> for translation
  const displaySectionTitle = sectionTitle
  const displayLocationLabel = locationLabel
  const displayReservationLabel = reservationLabel
  const displayParkingLabel = parkingLabel
  const displayGettingThereTitle = gettingThereTitle

  // Style system
  const blockSettings: BlockStyleSettings = { bgStyle, bgCustom, txtStyle }
  const hasNewStyles = !!bgStyle && bgStyle !== 'default'
  const styles = hasNewStyles
    ? getBlockStyles(blockSettings)
    : { backgroundColor: '#f0e0d4', color: '#1a1a1a' }

  const textColor = styles.color || '#1a1a1a'

  // Title typography
  const titleStyles: React.CSSProperties = {
    fontFamily: tTitle?.font || "'Playfair Display', Georgia, serif",
    fontSize: tTitle?.size || undefined,
    fontWeight: tTitle?.weight || '400',
    lineHeight: tTitle?.lh || '1.2',
    letterSpacing: tTitle?.ls || '0.01em',
    color: tTitle?.color || textColor,
  }

  // Body typography
  const bodyStyles: React.CSSProperties = {
    fontFamily: tBody?.font || 'system-ui, -apple-system, sans-serif',
    fontWeight: tBody?.weight || '400',
    lineHeight: tBody?.lh || '1.6',
    letterSpacing: tBody?.ls || '0',
    color: tBody?.color || textColor,
  }

  // Build display address from fullAddress or legacy fields
  const displayAddress = fullAddress || [address1, address2].filter(Boolean).join('\n')

  // Build map query from mapAddress or fullAddress
  const mapQuery = mapAddress || displayAddress?.replace(/\n/g, ', ')

  // Has Google Maps data?
  const hasMapData = !!(mapLatitude && mapLongitude) || !!mapQuery

  // Has getting there items?
  const hasGettingThere = gettingThereItems && gettingThereItems.length > 0

  // Has parking items?
  const hasParkingItems = parkingItems && parkingItems.length > 0

  return (
    <section
      className="py-16 md:py-24 px-4"
      style={{
        backgroundColor: styles.backgroundColor,
        color: textColor,
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* ========== TOP: Title + Info Grid ========== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Section Title */}
          <div className="lg:col-span-4">
            {displaySectionTitle ? (
              <h2
                className="text-3xl md:text-4xl lg:text-[42px]"
                style={titleStyles}
              >
                {displaySectionTitle}
              </h2>
            ) : (
              <h2
                className="text-3xl md:text-4xl lg:text-[42px]"
                style={titleStyles}
              >
                <T vi="Vị trí & Liên hệ" en="Location & Contact" />
              </h2>
            )}
          </div>

          {/* Info Columns */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* LOCATION Column */}
              <div>
                <div
                  className="text-xs font-medium tracking-[0.2em] uppercase mb-4"
                  style={{ ...bodyStyles, opacity: 0.6 }}
                >
                  {displayLocationLabel || <T vi="VỊ TRÍ" en="LOCATION" />}
                </div>
                {displayAddress && (
                  <div className="mb-4">
                    {displayAddress.split('\n').map((line, i) => (
                      <p key={i} className="text-sm leading-relaxed" style={bodyStyles}>
                        {line}
                      </p>
                    ))}
                  </div>
                )}
                {getDirectionsUrl && (
                  <a
                    href={getDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm hover:opacity-70 transition-opacity"
                    style={bodyStyles}
                  >
                    <span><T vi="Chỉ đường" en="Get directions" /></span>
                    <ArrowRight size={14} />
                  </a>
                )}
              </div>

              {/* RESERVATION Column */}
              <div>
                <div
                  className="text-xs font-medium tracking-[0.2em] uppercase mb-4"
                  style={{ ...bodyStyles, opacity: 0.6 }}
                >
                  {displayReservationLabel || <T vi="ĐẶT PHÒNG" en="RESERVATION" />}
                </div>
                {hotline && (
                  <p className="text-sm mb-1" style={bodyStyles}>
                    <span><T vi="ĐT : " en="Tel : " /></span>
                    <a
                      href={`tel:${hotline.replace(/[^\d+]/g, '')}`}
                      className="hover:underline"
                    >
                      {hotline}
                    </a>
                  </p>
                )}
                {email && (
                  <p className="text-sm" style={bodyStyles}>
                    <span><T vi="Email : " en="Mail : " /></span>
                    <a
                      href={`mailto:${email}`}
                      className="hover:underline"
                    >
                      {email}
                    </a>
                  </p>
                )}
              </div>

              {/* PARKING Column */}
              {hasParkingItems && (
                <div>
                  <div
                    className="text-xs font-medium tracking-[0.2em] uppercase mb-4"
                    style={{ ...bodyStyles, opacity: 0.6 }}
                  >
                    {displayParkingLabel || <T vi="BÃI ĐỖ XE" en="PARKING" />}
                  </div>
                  {parkingItems!.map((item, i) => (
                    <p key={item.id || i} className="text-sm mb-1" style={bodyStyles}>
                      {item.text}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ========== MIDDLE: Google Map ========== */}
        {hasMapData && (
          <div className="relative w-full aspect-[16/7] overflow-hidden mb-16">
            <GoogleMapEmbed
              address={mapQuery || undefined}
              latitude={mapLatitude}
              longitude={mapLongitude}
              zoom={mapZoom}
              className="w-full h-full"
            />
          </div>
        )}

        {/* Map Image Fallback (if no Google Maps data but has static image) */}
        {!hasMapData && mapImg?.url && (
          <div className="relative w-full aspect-[16/7] overflow-hidden mb-16">
            <Image
              src={mapImg.url}
              alt="Location Map / Bản đồ vị trí"
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* ========== BOTTOM: Getting There Accordion ========== */}
        {hasGettingThere && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Title */}
            <div className="lg:col-span-4">
              {displayGettingThereTitle ? (
                <h3
                  className="text-2xl md:text-3xl lg:text-[36px]"
                  style={titleStyles}
                >
                  {displayGettingThereTitle}
                </h3>
              ) : (
                <h3
                  className="text-2xl md:text-3xl lg:text-[36px]"
                  style={titleStyles}
                >
                  <T vi="Cách đến" en="Getting there" />
                </h3>
              )}
            </div>

            {/* Accordion */}
            <div className="lg:col-span-8">
              <GettingThereAccordion
                items={gettingThereItems!.map((item) => ({
                  title: item.title,
                  content: item.content,
                }))}
                textColor={textColor}
                borderColor={`${textColor}20`}
              />
            </div>
          </div>
        )}

        {/* Hidden CTA (if still configured - backward compat) */}
        {ctaText && ctaLink && !hasGettingThere && (
          <div className="mt-8 text-center">
            <Link
              href={ctaLink}
              className="inline-block px-8 py-3 bg-[#2a2a28] text-white text-sm tracking-wider hover:bg-[#1a1a18] transition-colors"
            >
              {ctaText}
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default LocationBlockComponent
