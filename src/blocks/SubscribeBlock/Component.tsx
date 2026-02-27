'use client'

import React, { useState } from 'react'
import type { Media } from '@/payload-types'
import Image from 'next/image'
import { getBlockStyles, type BlockStyleSettings } from '@/fields/blockBackground'
import { useLanguage } from '@/providers/Language'
import { Check, Loader2 } from 'lucide-react'

interface TypographySettings {
  font?: string
  size?: string
  weight?: string
  lh?: string
  ls?: string
  color?: string
}

interface Benefit {
  text?: string
}

interface SubscribeBlockProps {
  blockType: 'subscribe'
  title?: string
  subtitle?: string
  placeholderText?: string
  buttonText?: string
  formAction?: string
  successMessage?: string
  benefits?: Benefit[]
  layout?: 'centered' | 'horizontal' | 'split'
  sideImage?: Media | number
  privacyText?: string
  // Style fields
  bgStyle?: string
  bgCustom?: string
  txtStyle?: 'auto' | 'dark' | 'light'
  tTitle?: TypographySettings
  tBody?: TypographySettings
}

export function SubscribeBlockComponent({
  title: titleProp = 'Get the latest news & discounts',
  subtitle,
  placeholderText: placeholderProp = 'Enter your email address',
  buttonText: buttonTextProp = 'Subscribe',
  formAction,
  successMessage: successMessageProp = 'Thank you for subscribing!',
  benefits = [],
  layout = 'centered',
  sideImage,
  privacyText,
  bgStyle,
  bgCustom,
  txtStyle,
  tTitle,
  tBody,
}: SubscribeBlockProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const { t } = useLanguage()

  const title = t('Nhận tin tức & ưu đãi mới nhất', titleProp)
  const placeholderText = t('Nhập địa chỉ email của bạn', placeholderProp)
  const buttonText = t('Đăng ký', buttonTextProp)
  const successMessage = t('Cảm ơn bạn đã đăng ký!', successMessageProp)
  const [errorMsg, setErrorMsg] = useState('')

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes('@')) {
      setErrorMsg(t('Vui lòng nhập địa chỉ email hợp lệ.', 'Please enter a valid email address.'))
      setStatus('error')
      return
    }

    // If no form action, just show success
    if (!formAction) {
      setStatus('success')
      return
    }

    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch(formAction, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
        setErrorMsg(t('Đã xảy ra lỗi. Vui lòng thử lại.', 'Something went wrong. Please try again.'))
      }
    } catch {
      setStatus('error')
      setErrorMsg(t('Đã xảy ra lỗi. Vui lòng thử lại.', 'Something went wrong. Please try again.'))
    }
  }

  const sideImg = typeof sideImage === 'object' ? (sideImage as Media) : null

  // Email form
  const emailForm = (
    <div>
      {status === 'success' ? (
        <div className="flex items-center gap-3 py-4">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
            style={{
              backgroundColor: txtStyle === 'light' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.05)',
            }}
          >
            <Check className="w-5 h-5" style={{ color: textColor }} />
          </div>
          <p className="text-base font-medium" style={{ color: textColor }}>
            {successMessage}
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (status === 'error') setStatus('idle')
              }}
              placeholder={placeholderText}
              className="flex-1 px-4 py-3.5 text-sm outline-none transition-colors"
              style={{
                backgroundColor: inputBg,
                border: `1px solid ${status === 'error' ? '#ef4444' : borderColor}`,
                color: textColor,
                fontFamily: bodyStyles.fontFamily,
              }}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-8 py-3.5 text-sm font-medium uppercase tracking-widest transition-all duration-300 hover:opacity-90 disabled:opacity-60 flex items-center justify-center gap-2 whitespace-nowrap"
              style={{
                backgroundColor: txtStyle === 'light' ? '#ffffff' : '#1a1a1a',
                color: txtStyle === 'light' ? '#1a1a1a' : '#ffffff',
              }}
            >
              {status === 'loading' ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                buttonText
              )}
            </button>
          </div>

          {/* Error message */}
          {status === 'error' && errorMsg && (
            <p className="text-xs" style={{ color: '#ef4444' }}>
              {errorMsg}
            </p>
          )}

          {/* Privacy note */}
          {privacyText && (
            <p className="text-xs" style={{ color: mutedColor }}>
              {privacyText}
            </p>
          )}
        </form>
      )}
    </div>
  )

  // Benefits list
  const benefitsList = benefits && benefits.length > 0 && (
    <div className={`flex flex-wrap gap-x-6 gap-y-2 ${layout === 'centered' ? 'justify-center' : ''} mt-6`}>
      {benefits.map((b, idx) => (
        <div key={idx} className="flex items-center gap-2">
          <Check className="w-4 h-4 flex-shrink-0" style={{ color: mutedColor }} />
          <span className="text-sm" style={{ color: mutedColor }}>
            {b.text}
          </span>
        </div>
      ))}
    </div>
  )

  // === Layout: Horizontal (title left, form right) ===
  if (layout === 'horizontal') {
    return (
      <section
        className="py-12 md:py-16 px-4"
        style={{ backgroundColor: styles.backgroundColor }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            {/* Left: Title */}
            <div className="flex-shrink-0 md:max-w-md">
              {title && (
                <h2 className="text-2xl md:text-3xl italic mb-2" style={titleStyles}>
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className="text-sm" style={bodyStyles}>
                  {subtitle}
                </p>
              )}
            </div>

            {/* Right: Form */}
            <div className="flex-1 max-w-lg">{emailForm}</div>
          </div>
          {benefitsList}
        </div>
      </section>
    )
  }

  // === Layout: Split (form + image) ===
  if (layout === 'split') {
    return (
      <section
        className="py-16 md:py-24 px-4"
        style={{ backgroundColor: styles.backgroundColor }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Form side */}
            <div>
              {title && (
                <h2 className="text-3xl md:text-4xl mb-4" style={titleStyles}>
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className="text-base mb-8" style={bodyStyles}>
                  {subtitle}
                </p>
              )}
              {emailForm}
              {benefitsList}
            </div>

            {/* Image side */}
            {sideImg?.url && (
              <div className="relative aspect-[4/3] overflow-hidden hidden lg:block">
                <Image
                  src={sideImg.url}
                  alt={sideImg.alt || title || 'Subscribe'}
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

  // === Layout: Centered (default) ===
  return (
    <section
      className="py-16 md:py-24 px-4"
      style={{ backgroundColor: styles.backgroundColor }}
    >
      <div className="max-w-2xl mx-auto text-center">
        {title && (
          <h2 className="text-3xl md:text-4xl mb-4" style={titleStyles}>
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-base mb-8 mx-auto max-w-lg" style={bodyStyles}>
            {subtitle}
          </p>
        )}
        {emailForm}
        {benefitsList}
      </div>
    </section>
  )
}

export default SubscribeBlockComponent
