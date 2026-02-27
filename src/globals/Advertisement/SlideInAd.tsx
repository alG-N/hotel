'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { X } from 'lucide-react'
import { useLanguage } from '@/providers/Language'
import type { Media } from '@/payload-types'

interface SlideInAdProps {
  image?: Media | number | null
  title?: string
  description?: string
  ctaText?: string
  ctaLink?: string
  scrollTrigger?: number
  bgColor?: string
  textColor?: string
}

export function SlideInAd({
  image,
  title,
  description,
  ctaText: ctaTextProp = 'Learn More',
  ctaLink = '/offers',
  scrollTrigger = 50,
  bgColor = '#ffffff',
  textColor = '#1a1a1a',
}: SlideInAdProps) {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const { t } = useLanguage()

  const ctaText = t('Tìm hiểu thêm', ctaTextProp)

  const img = typeof image === 'object' && image ? image : null

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent =
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      if (scrollPercent >= scrollTrigger && !dismissed) {
        setVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollTrigger, dismissed])

  const handleClose = () => {
    setDismissed(true)
    setVisible(false)
  }

  if (!visible || dismissed || (!title && !description)) return null

  return (
    <div
      className="fixed bottom-6 right-6 z-50 w-[320px] shadow-2xl overflow-hidden animate-in slide-in-from-right duration-500"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {/* Close */}
      <button
        onClick={handleClose}
        className="absolute top-2 right-2 z-10 p-1 rounded-full bg-black/10 hover:bg-black/20 transition-colors"
        aria-label="Đóng"
      >
        <X size={16} />
      </button>

      {/* Image */}
      {img?.url && (
        <div className="relative w-full aspect-[16/9]">
          <Image
            src={img.url}
            alt={img.alt || title || 'Offer'}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-4">
        {title && (
          <h4
            className="text-lg mb-1"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {title}
          </h4>
        )}
        {description && (
          <p className="text-xs leading-relaxed opacity-70 mb-3">{description}</p>
        )}
        {ctaText && ctaLink && (
          <Link
            href={ctaLink}
            className="inline-block text-xs tracking-widest uppercase font-medium underline underline-offset-4 hover:opacity-70 transition-opacity"
            style={{ color: textColor }}
          >
            {ctaText} →
          </Link>
        )}
      </div>
    </div>
  )
}
