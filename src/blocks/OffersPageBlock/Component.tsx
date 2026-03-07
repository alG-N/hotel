import React from 'react'
import type { Media } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'
import { getBlockStyles, type BlockStyleSettings } from '@/fields/blockBackground'
import { T } from '@/providers/Language/T'
import { Check } from 'lucide-react'

interface TypographySettings {
  font?: string
  size?: string
  weight?: string
  lh?: string
  ls?: string
  color?: string
}

interface OfferItem {
  image?: Media | number
  badge?: string
  title?: string
  subtitle?: string
  description?: string
  features?: Array<{ text?: string }>
  ctaText?: string
  ctaLink?: string
}

interface OffersPageBlockProps {
  blockType: 'offers-page'
  sectionTitle?: string
  sectionDescription?: string
  offers?: OfferItem[]
  columns?: '1' | '2' | '3'
  layout?: 'cards' | 'alternating'
  bgStyle?: string
  bgCustom?: string
  txtStyle?: 'auto' | 'dark' | 'light'
  tTitle?: TypographySettings
  tBody?: TypographySettings
}

export function OffersPageBlockComponent({
  sectionTitle,
  sectionDescription,
  offers = [],
  columns = '2',
  layout = 'cards',
  bgStyle,
  bgCustom,
  txtStyle,
  tTitle,
  tBody,
}: OffersPageBlockProps) {
  const blockSettings: BlockStyleSettings = { bgStyle, bgCustom, txtStyle }
  const hasNewStyles = !!bgStyle && bgStyle !== 'default'
  const styles = hasNewStyles ? getBlockStyles(blockSettings) : { backgroundColor: '#ffffff', color: '#1a1a1a' }
  const textColor = styles.color || '#1a1a1a'
  const mutedColor = txtStyle === 'light' ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.6)'

  const titleStyles: React.CSSProperties = {
    fontFamily: tTitle?.font || 'Georgia, serif',
    fontSize: tTitle?.size || undefined,
    fontWeight: tTitle?.weight || '400',
    lineHeight: tTitle?.lh || '1.2',
    letterSpacing: tTitle?.ls || '0.02em',
    color: tTitle?.color || textColor,
  }

  const bodyStyles: React.CSSProperties = {
    fontFamily: tBody?.font || 'system-ui, -apple-system, sans-serif',
    fontSize: tBody?.size || undefined,
    fontWeight: tBody?.weight || '400',
    lineHeight: tBody?.lh || '1.6',
    letterSpacing: tBody?.ls || '0',
    color: tBody?.color || mutedColor,
  }

  const getGridCols = () => {
    switch (columns) {
      case '1': return ''
      case '3': return 'md:grid-cols-3'
      default: return 'md:grid-cols-2'
    }
  }

  if (layout === 'alternating') {
    return (
      <section className="py-16 md:py-24 px-4" style={{ backgroundColor: styles.backgroundColor }}>
        <div className="max-w-6xl mx-auto">
          {sectionTitle && (
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl italic mb-4" style={titleStyles}>{sectionTitle}</h2>
              {sectionDescription && <p className="max-w-2xl mx-auto" style={bodyStyles}>{sectionDescription}</p>}
            </div>
          )}
          <div className="flex flex-col gap-16">
            {offers.map((offer, idx) => {
              const img = typeof offer.image === 'object' ? offer.image as Media : null
              const imageOnLeft = idx % 2 === 0
              return (
                <div key={idx} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center`}>
                  {img?.url && (
                    <div className={`relative aspect-[4/3] overflow-hidden ${imageOnLeft ? '' : 'lg:order-2'}`}>
                      <Image src={img.url} alt={offer.title || ''} fill className="object-cover" />
                      {offer.badge && (
                        <span className="absolute top-4 left-4 px-3 py-1 text-xs uppercase tracking-wider bg-white text-gray-900 font-medium">
                          {offer.badge}
                        </span>
                      )}
                    </div>
                  )}
                  <div className={`flex flex-col ${imageOnLeft ? '' : 'lg:order-1'}`}>
                    {offer.title && (
                      <h3 className="text-2xl md:text-3xl mb-3 italic" style={{ ...titleStyles, fontSize: tTitle?.size || undefined }}>{offer.title}</h3>
                    )}
                    {offer.subtitle && (
                      <p className="text-lg font-semibold mb-4" style={{ color: textColor }}>{offer.subtitle}</p>
                    )}
                    {offer.description && (
                      <p className="mb-6" style={bodyStyles}>{offer.description}</p>
                    )}
                    {offer.features && offer.features.length > 0 && (
                      <ul className="space-y-2 mb-6">
                        {offer.features.map((f, fi) => (
                          <li key={fi} className="flex items-center gap-3 text-sm" style={bodyStyles}>
                            <Check className="w-4 h-4 flex-shrink-0" style={{ color: '#8b7355' }} />
                            <span>{f.text}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {offer.ctaLink && (
                      <Link
                        href={offer.ctaLink}
                        className="inline-block px-6 py-3 text-sm tracking-wider uppercase transition-colors w-fit bg-neutral-900 text-white hover:bg-neutral-800"
                      >
                        {offer.ctaText || <T vi="Đặt Ngay" en="Book Now" />}
                      </Link>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }

  // Cards layout
  return (
    <section className="py-16 md:py-24 px-4" style={{ backgroundColor: styles.backgroundColor }}>
      <div className="max-w-6xl mx-auto">
        {sectionTitle && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl italic mb-4" style={titleStyles}>{sectionTitle}</h2>
            {sectionDescription && <p className="max-w-2xl mx-auto" style={bodyStyles}>{sectionDescription}</p>}
          </div>
        )}
        <div className={`grid grid-cols-1 ${getGridCols()} gap-8`}>
          {offers.map((offer, idx) => {
            const img = typeof offer.image === 'object' ? offer.image as Media : null
            return (
              <div key={idx} className="flex flex-col border" style={{ borderColor: txtStyle === 'light' ? 'rgba(255,255,255,0.15)' : '#e5e5e5' }}>
                {img?.url && (
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={img.url} alt={offer.title || ''} fill className="object-cover" />
                    {offer.badge && (
                      <span className="absolute top-4 left-4 px-3 py-1 text-xs uppercase tracking-wider bg-white text-gray-900 font-medium">
                        {offer.badge}
                      </span>
                    )}
                  </div>
                )}
                <div className="flex flex-col flex-grow p-6">
                  {offer.title && (
                    <h3 className="text-xl md:text-2xl mb-2" style={{ color: textColor, fontFamily: titleStyles.fontFamily }}>{offer.title}</h3>
                  )}
                  {offer.subtitle && (
                    <p className="text-base font-semibold mb-3" style={{ color: textColor }}>{offer.subtitle}</p>
                  )}
                  {offer.description && (
                    <p className="text-sm mb-4 flex-grow" style={bodyStyles}>{offer.description}</p>
                  )}
                  {offer.features && offer.features.length > 0 && (
                    <ul className="space-y-1.5 mb-5">
                      {offer.features.map((f, fi) => (
                        <li key={fi} className="flex items-center gap-2 text-sm" style={bodyStyles}>
                          <Check className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#8b7355' }} />
                          <span>{f.text}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {offer.ctaLink && (
                    <Link
                      href={offer.ctaLink}
                      className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-800 transition-colors w-fit"
                    >
                      {offer.ctaText || <T vi="Đặt Ngay" en="Book Now" />}
                    </Link>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default OffersPageBlockComponent
