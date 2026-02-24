'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

interface TopBannerAdProps {
  text?: string
  link?: string
  ctaText?: string
  bgColor?: string
  textColor?: string
  dismissible?: boolean
}

export function TopBannerAd({
  text,
  link,
  ctaText,
  bgColor = '#1a1a1a',
  textColor = '#ffffff',
  dismissible = true,
}: TopBannerAdProps) {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed || !text) return null

  return (
    <div
      className="relative w-full py-2.5 px-4 text-center text-sm z-[60]"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3">
        <span className="tracking-wide">{text}</span>
        {ctaText && link && (
          <Link
            href={link}
            className="inline-flex items-center gap-1 font-medium underline underline-offset-4 hover:opacity-80 transition-opacity"
            style={{ color: textColor }}
          >
            {ctaText}
            <span aria-hidden>→</span>
          </Link>
        )}
      </div>
      {dismissible && (
        <button
          onClick={() => setDismissed(true)}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:opacity-70 transition-opacity"
          aria-label="Đóng banner"
          style={{ color: textColor }}
        >
          <X size={16} />
        </button>
      )}
    </div>
  )
}
