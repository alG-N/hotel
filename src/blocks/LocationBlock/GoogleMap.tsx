'use client'

import React from 'react'

interface GoogleMapEmbedProps {
  address?: string
  latitude?: number
  longitude?: number
  zoom?: number
  className?: string
}

/**
 * Google Maps embed using iframe (Google Maps Embed API).
 * Requires NEXT_PUBLIC_GOOGLE_MAPS_API_KEY env var.
 * Falls back to a plain address display if no API key is set.
 */
export function GoogleMapEmbed({
  address,
  latitude,
  longitude,
  zoom = 13,
  className = '',
}: GoogleMapEmbedProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

  if (!apiKey) {
    // No API key - show a link to Google Maps instead
    const query = latitude && longitude
      ? `${latitude},${longitude}`
      : address || ''
    
    if (!query) return null

    return (
      <div className={`relative w-full bg-gray-200 flex items-center justify-center ${className}`}>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center p-8"
        >
          <div className="text-gray-500 mb-2">📍</div>
          <div className="text-sm text-gray-600 underline">Xem trên Google Maps</div>
        </a>
      </div>
    )
  }

  // Build the embed URL
  let src: string

  if (latitude && longitude) {
    // Use coordinates for precise location
    src = `https://www.google.com/maps/embed/v1/view?key=${apiKey}&center=${latitude},${longitude}&zoom=${zoom}&maptype=roadmap`
  } else if (address) {
    // Use address search
    src = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(address)}&zoom=${zoom}`
  } else {
    return null
  }

  return (
    <iframe
      className={className}
      src={src}
      style={{ border: 0, width: '100%', height: '100%' }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Maps"
    />
  )
}
