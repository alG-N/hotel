'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

interface FloatingBarAdProps {
  text?: string
  ctaText?: string
  ctaLink?: string
  bgColor?: string
  textColor?: string
  dismissible?: boolean
}

export function FloatingBarAd({
  text,
  ctaText = 'Book Now',
  ctaLink = '/booking',
  bgColor = '#2a2a28',
  textColor = '#ffffff',
  dismissible = true,
}: FloatingBarAdProps) {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed || !text) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 py-3 px-4 shadow-[0_-2px_10px_rgba(0,0,0,0.1)] animate-in slide-in-from-bottom duration-500"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <p className="text-sm tracking-wide flex-1">{text}</p>
        <div className="flex items-center gap-3 flex-shrink-0">
          {ctaText && ctaLink && (
            <Link
              href={ctaLink}
              className="inline-block px-6 py-2 text-xs tracking-widest uppercase font-medium border transition-opacity hover:opacity-80"
              style={{ borderColor: textColor, color: textColor }}
            >
              {ctaText}
            </Link>
          )}
          {dismissible && (
            <button
              onClick={() => setDismissed(true)}
              className="p-1 hover:opacity-70 transition-opacity"
              aria-label="Đóng"
              style={{ color: textColor }}
            >
              <X size={18} />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
