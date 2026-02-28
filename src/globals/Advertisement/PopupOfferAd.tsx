'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { X } from 'lucide-react'
import { useLanguage } from '@/providers/Language'
import type { Media } from '@/payload-types'

interface PopupOfferAdProps {
  image?: Media | number | null
  title?: string
  description?: string
  ctaText?: string
  ctaLink?: string
  delay?: number
  bgColor?: string
  textColor?: string
  showOnce?: boolean
}

const STORAGE_KEY = 'ad_popup_dismissed'

export function PopupOfferAd({
  image,
  title,
  description,
  ctaText: ctaTextProp = 'View Offer',
  ctaLink = '/offers',
  delay = 3,
  bgColor = '#ffffff',
  textColor = '#1a1a1a',
  showOnce = true,
}: PopupOfferAdProps) {
  const [visible, setVisible] = useState(false)
  const [closing, setClosing] = useState(false)
  const { t } = useLanguage()

  const ctaText = t('Xem ưu đãi', ctaTextProp)

  const img = typeof image === 'object' && image ? image : null

  useEffect(() => {
    // Check if already dismissed this session
    if (showOnce) {
      try {
        if (sessionStorage.getItem(STORAGE_KEY)) return
      } catch {
        // sessionStorage not available
      }
    }

    const timer = setTimeout(() => {
      setVisible(true)
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [delay, showOnce])

  const handleClose = () => {
    setClosing(true)
    setTimeout(() => {
      setVisible(false)
      setClosing(false)
      if (showOnce) {
        try {
          sessionStorage.setItem(STORAGE_KEY, '1')
        } catch {
          // ignore
        }
      }
    }, 300)
  }

  if (!visible || (!title && !description)) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-[100] transition-opacity duration-300 ${
          closing ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={handleClose}
      />
      {/* Modal */}
      <div
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-[90vw] max-w-lg shadow-2xl overflow-hidden transition-all duration-300 ${
          closing ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-black/10 hover:bg-black/20 transition-colors"
          aria-label={t('Đóng popup', 'Close popup')}
        >
          <X size={18} />
        </button>

        {/* Image */}
        {img?.url && (
          <div className="relative w-full aspect-[16/9]">
            <Image
              src={img.url}
              alt={img.alt || title || t('Ưu đãi', 'Offer')}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="p-6 md:p-8 text-center">
          {title && (
            <h3
              className="text-2xl md:text-3xl mb-3"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {title}
            </h3>
          )}
          {description && (
            <p className="text-sm leading-relaxed opacity-75 mb-6 whitespace-pre-line">
              {description}
            </p>
          )}
          {ctaText && ctaLink && (
            <Link
              href={ctaLink}
              onClick={handleClose}
              className="inline-block px-8 py-3 text-sm tracking-widest uppercase transition-colors"
              style={{
                backgroundColor: textColor,
                color: bgColor,
              }}
            >
              {ctaText}
            </Link>
          )}
        </div>
      </div>
    </>
  )
}
