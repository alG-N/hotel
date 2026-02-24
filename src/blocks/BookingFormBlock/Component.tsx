'use client'

import React, { useState } from 'react'
import type { Media } from '@/payload-types'
import Image from 'next/image'
import { getBlockStyles, type BlockStyleSettings } from '@/fields/blockBackground'
import {
  CalendarDays,
  Users,
  BedDouble,
  Clock,
  Shield,
  Star,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
} from 'lucide-react'

interface TypographySettings {
  font?: string
  size?: string
  weight?: string
  lh?: string
  ls?: string
  color?: string
}

interface RoomType {
  label?: string
  value?: string
}

interface InfoCard {
  icon?: 'clock' | 'shield' | 'star' | 'phone' | 'mail' | 'map'
  title?: string
  description?: string
}

interface BookingFormBlockProps {
  blockType: 'booking-form'
  title?: string
  subtitle?: string
  bookingUrl?: string
  buttonText?: string
  roomTypes?: RoomType[]
  infoCards?: InfoCard[]
  layout?: 'centered' | 'split'
  sideImage?: Media | number
  maxGuests?: number
  maxRooms?: number
  // Style fields
  bgStyle?: string
  bgCustom?: string
  txtStyle?: 'auto' | 'dark' | 'light'
  tTitle?: TypographySettings
  tBody?: TypographySettings
}

const iconMap = {
  clock: Clock,
  shield: Shield,
  star: Star,
  phone: Phone,
  mail: Mail,
  map: MapPin,
}

export function BookingFormBlockComponent({
  title = 'Book Your Stay',
  subtitle,
  bookingUrl = '#',
  buttonText = 'Check Availability',
  roomTypes = [],
  infoCards = [],
  layout = 'centered',
  sideImage,
  maxGuests = 10,
  maxRooms = 5,
  bgStyle,
  bgCustom,
  txtStyle,
  tTitle,
  tBody,
}: BookingFormBlockProps) {
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState(2)
  const [rooms, setRooms] = useState(1)
  const [roomType, setRoomType] = useState(roomTypes?.[0]?.value || '')

  // Style system
  const blockSettings: BlockStyleSettings = { bgStyle, bgCustom, txtStyle }
  const hasNewStyles = !!bgStyle && bgStyle !== 'transparent' && bgStyle !== 'default'
  const styles = hasNewStyles
    ? getBlockStyles(blockSettings)
    : { backgroundColor: '#ffffff', color: '#1a1a1a' }

  const textColor = styles.color || '#1a1a1a'
  const mutedColor = txtStyle === 'light' ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.5)'
  const borderColor = txtStyle === 'light' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)'
  const inputBg = txtStyle === 'light' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.02)'
  const cardBg = txtStyle === 'light' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)'

  // Title typography
  const titleStyles: React.CSSProperties = {
    fontFamily: tTitle?.font || 'Georgia, serif',
    fontSize: tTitle?.size || undefined,
    fontWeight: tTitle?.weight || '400',
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Build URL with query params
    const params = new URLSearchParams()
    if (checkIn) params.set('checkin', checkIn)
    if (checkOut) params.set('checkout', checkOut)
    params.set('guests', String(guests))
    params.set('rooms', String(rooms))
    if (roomType) params.set('room_type', roomType)

    const separator = bookingUrl?.includes('?') ? '&' : '?'
    const targetUrl = `${bookingUrl}${separator}${params.toString()}`

    window.open(targetUrl, '_blank', 'noopener,noreferrer')
  }

  const sideImg = typeof sideImage === 'object' ? (sideImage as Media) : null

  const formContent = (
    <div className={layout === 'split' ? '' : 'max-w-3xl mx-auto'}>
      {/* Header */}
      <div className={`mb-8 ${layout === 'centered' ? 'text-center' : ''}`}>
        {title && (
          <h2 className="text-3xl md:text-4xl mb-4" style={titleStyles}>
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="max-w-xl text-base" style={{ ...bodyStyles, ...(layout === 'centered' ? { margin: '0 auto' } : {}) }}>
            {subtitle}
          </p>
        )}
      </div>

      {/* Booking Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Date Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Check-in */}
          <div>
            <label
              className="flex items-center gap-2 text-xs uppercase tracking-wider mb-2 font-medium"
              style={{ color: textColor }}
            >
              <CalendarDays className="w-4 h-4" style={{ color: mutedColor }} />
              Check-in
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full px-4 py-3 text-sm outline-none transition-colors"
              style={{
                backgroundColor: inputBg,
                border: `1px solid ${borderColor}`,
                color: textColor,
                fontFamily: bodyStyles.fontFamily,
              }}
            />
          </div>

          {/* Check-out */}
          <div>
            <label
              className="flex items-center gap-2 text-xs uppercase tracking-wider mb-2 font-medium"
              style={{ color: textColor }}
            >
              <CalendarDays className="w-4 h-4" style={{ color: mutedColor }} />
              Check-out
            </label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full px-4 py-3 text-sm outline-none transition-colors"
              style={{
                backgroundColor: inputBg,
                border: `1px solid ${borderColor}`,
                color: textColor,
                fontFamily: bodyStyles.fontFamily,
              }}
            />
          </div>
        </div>

        {/* Guests & Rooms Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Guests */}
          <div>
            <label
              className="flex items-center gap-2 text-xs uppercase tracking-wider mb-2 font-medium"
              style={{ color: textColor }}
            >
              <Users className="w-4 h-4" style={{ color: mutedColor }} />
              Guests
            </label>
            <div className="relative">
              <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full px-4 py-3 text-sm outline-none appearance-none cursor-pointer transition-colors"
                style={{
                  backgroundColor: inputBg,
                  border: `1px solid ${borderColor}`,
                  color: textColor,
                  fontFamily: bodyStyles.fontFamily,
                }}
              >
                {Array.from({ length: maxGuests }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
                style={{ color: mutedColor }}
              />
            </div>
          </div>

          {/* Rooms */}
          <div>
            <label
              className="flex items-center gap-2 text-xs uppercase tracking-wider mb-2 font-medium"
              style={{ color: textColor }}
            >
              <BedDouble className="w-4 h-4" style={{ color: mutedColor }} />
              Rooms
            </label>
            <div className="relative">
              <select
                value={rooms}
                onChange={(e) => setRooms(Number(e.target.value))}
                className="w-full px-4 py-3 text-sm outline-none appearance-none cursor-pointer transition-colors"
                style={{
                  backgroundColor: inputBg,
                  border: `1px solid ${borderColor}`,
                  color: textColor,
                  fontFamily: bodyStyles.fontFamily,
                }}
              >
                {Array.from({ length: maxRooms }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? 'Room' : 'Rooms'}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
                style={{ color: mutedColor }}
              />
            </div>
          </div>
        </div>

        {/* Room Type (if available) */}
        {roomTypes && roomTypes.length > 0 && (
          <div>
            <label
              className="flex items-center gap-2 text-xs uppercase tracking-wider mb-2 font-medium"
              style={{ color: textColor }}
            >
              <BedDouble className="w-4 h-4" style={{ color: mutedColor }} />
              Room Type
            </label>
            <div className="relative">
              <select
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                className="w-full px-4 py-3 text-sm outline-none appearance-none cursor-pointer transition-colors"
                style={{
                  backgroundColor: inputBg,
                  border: `1px solid ${borderColor}`,
                  color: textColor,
                  fontFamily: bodyStyles.fontFamily,
                }}
              >
                <option value="">All Room Types</option>
                {roomTypes.map((rt, idx) => (
                  <option key={idx} value={rt.value || ''}>
                    {rt.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
                style={{ color: mutedColor }}
              />
            </div>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-4 text-sm font-medium uppercase tracking-widest transition-all duration-300 hover:opacity-90"
          style={{
            backgroundColor: txtStyle === 'light' ? '#ffffff' : '#1a1a1a',
            color: txtStyle === 'light' ? '#1a1a1a' : '#ffffff',
          }}
        >
          {buttonText}
        </button>
      </form>

      {/* Info Cards */}
      {infoCards && infoCards.length > 0 && (
        <div className={`grid grid-cols-1 ${infoCards.length >= 3 ? 'md:grid-cols-3' : infoCards.length === 2 ? 'md:grid-cols-2' : ''} gap-4 mt-10`}>
          {infoCards.map((card, idx) => {
            const IconComp = card.icon ? iconMap[card.icon] : null
            return (
              <div
                key={idx}
                className="flex items-start gap-3 p-4"
                style={{
                  backgroundColor: cardBg,
                  border: `1px solid ${borderColor}`,
                }}
              >
                {IconComp && (
                  <IconComp className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: mutedColor }} />
                )}
                <div>
                  {card.title && (
                    <p className="text-sm font-medium mb-0.5" style={{ color: textColor }}>
                      {card.title}
                    </p>
                  )}
                  {card.description && (
                    <p className="text-xs" style={{ color: mutedColor }}>
                      {card.description}
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )

  // Layout: Centered
  if (layout === 'centered') {
    return (
      <section
        className="py-16 md:py-24 px-4"
        style={{ backgroundColor: styles.backgroundColor }}
      >
        <div className="max-w-4xl mx-auto">{formContent}</div>
      </section>
    )
  }

  // Layout: Split (form + image)
  return (
    <section
      className="py-16 md:py-24 px-4"
      style={{ backgroundColor: styles.backgroundColor }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Form side */}
          <div>{formContent}</div>

          {/* Image side */}
          {sideImg?.url && (
            <div className="relative aspect-[3/4] overflow-hidden hidden lg:block">
              <Image
                src={sideImg.url}
                alt={sideImg.alt || title || 'Booking'}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default BookingFormBlockComponent
