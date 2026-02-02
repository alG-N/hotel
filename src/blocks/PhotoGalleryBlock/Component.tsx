'use client'

import React, { useState } from 'react'
import type { Media } from '@/payload-types'
import Image from 'next/image'
import { getBlockStyles, type BlockStyleSettings } from '@/fields/blockBackground'

interface TypographySettings {
  font?: string
  size?: string
  weight?: string
  lh?: string
  ls?: string
  color?: string
}

interface ImageItem {
  image?: Media | number
}

interface PhotoGalleryBlockProps {
  blockType: 'photo-gallery'
  title?: string
  images?: ImageItem[]
  layout?: 'bento' | 'magazine' | 'masonry' | 'rows'
  loadMoreText?: string
  // Style fields
  bgStyle?: string
  bgCustom?: string
  txtStyle?: 'auto' | 'dark' | 'light'
  tTitle?: TypographySettings
  tBody?: TypographySettings
}

/**
 * PHOTO GALLERY COMPONENT
 * 
 * Layouts:
 * - bento: Grid 7 ảnh cố định
 * - magazine: Grid động với Load more
 * - masonry/rows: Legacy - fallback to bento
 */
export function PhotoGalleryBlockComponent({
  title,
  images,
  layout: rawLayout = 'bento',
  loadMoreText = 'Load more',
  bgStyle,
  bgCustom,
  txtStyle,
  tTitle,
}: PhotoGalleryBlockProps) {
  // Normalize legacy layouts
  const layout = (rawLayout === 'masonry' || rawLayout === 'rows') ? 'bento' : rawLayout
  // Style system
  const blockSettings: BlockStyleSettings = { bgStyle, bgCustom, txtStyle }
  const hasNewStyles = !!bgStyle && bgStyle !== 'default'
  const styles = hasNewStyles 
    ? getBlockStyles(blockSettings)
    : { backgroundColor: '#e8e4df', color: '#1a1a1a' }

  const textColor = styles.color || '#1a1a1a'

  // Title typography
  const titleStyles: React.CSSProperties = {
    fontFamily: tTitle?.font || 'Georgia, serif',
    fontSize: tTitle?.size || undefined,
    fontWeight: tTitle?.weight || '400',
    fontStyle: 'italic',
    lineHeight: tTitle?.lh || '1.3',
    letterSpacing: tTitle?.ls || '0.02em',
    color: tTitle?.color || textColor,
  }

  // Parse images
  const parsedImages = images
    ?.map(item => typeof item.image === 'object' ? item.image as Media : null)
    .filter((img): img is Media => img !== null && !!img?.url) || []

  // Magazine layout: show 8 images per page (1 full group)
  const IMAGES_PER_PAGE = 8
  const [visibleCount, setVisibleCount] = useState(IMAGES_PER_PAGE)
  const hasMoreImages = layout === 'magazine' && parsedImages.length > visibleCount
  const visibleImages = layout === 'magazine' ? parsedImages.slice(0, visibleCount) : parsedImages

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + IMAGES_PER_PAGE)
  }

  // Render single image
  const renderImage = (img: Media, className: string = '') => (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={img.url!}
        alt={img.alt || 'Gallery image'}
        fill
        className="object-cover"
      />
    </div>
  )

  return (
    <section 
      className="py-16 md:py-24 px-4"
      style={{ 
        backgroundColor: styles.backgroundColor,
        color: textColor,
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        {title && (
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl text-center mb-12"
            style={titleStyles}
          >
            {title.split('\n').map((line, idx) => (
              <span key={idx}>
                {line}
                {idx < title.split('\n').length - 1 && <br />}
              </span>
            ))}
          </h2>
        )}

        {/* ========== BENTO LAYOUT ========== */}
        {layout === 'bento' && parsedImages.length >= 6 && (
          <div className="flex flex-col gap-3 md:gap-4">
            {/* Row 1: landscape dài | square | portrait nhỏ */}
            <div className="grid grid-cols-12 gap-3 md:gap-4" style={{ height: '280px' }}>
              {renderImage(parsedImages[0], 'col-span-5')}
              {renderImage(parsedImages[1], 'col-span-4')}
              {renderImage(parsedImages[2], 'col-span-3')}
            </div>
            
            {/* Row 2: square | landscape | nhỏ nhất | landscape */}
            <div className="grid grid-cols-12 gap-3 md:gap-4" style={{ height: '220px' }}>
              {renderImage(parsedImages[3], 'col-span-3')}
              {renderImage(parsedImages[4], 'col-span-4')}
              {parsedImages[5] && renderImage(parsedImages[5], 'col-span-2')}
              {parsedImages[6] && renderImage(parsedImages[6], 'col-span-3')}
            </div>
          </div>
        )}

        {/* Bento fallback cho ít hơn 6 ảnh */}
        {layout === 'bento' && parsedImages.length > 0 && parsedImages.length < 6 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {parsedImages.map((img, idx) => (
              <div key={idx} className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={img.url!}
                  alt={img.alt || `Gallery image ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {/* ========== MAGAZINE LAYOUT ========== */}
        {layout === 'magazine' && visibleImages.length > 0 && (
          <>
            <div className="flex flex-col gap-3 md:gap-4">
              {/* Chia thành các group 8 ảnh */}
              {Array.from({ length: Math.ceil(visibleImages.length / 8) }).map((_, groupIndex) => {
                const startIdx = groupIndex * 8
                const groupImages = visibleImages.slice(startIdx, startIdx + 8)
                
                return (
                  <div key={groupIndex} className="flex flex-col gap-3 md:gap-4">
                    {/* Row 1: portrait | 2 ảnh xếp dọc | 2 ảnh xếp dọc */}
                    {groupImages.length >= 1 && (
                      <div className="grid grid-cols-12 gap-3 md:gap-4" style={{ height: '380px' }}>
                        {/* Ảnh 1: portrait lớn */}
                        {renderImage(groupImages[0], 'col-span-4')}
                        
                        {/* 2 ảnh xếp dọc (ảnh 2+3) - ảnh 2 nhỏ, ảnh 3 lớn */}
                        {groupImages[1] && (
                          <div className="col-span-4 flex flex-col gap-3 md:gap-4">
                            <div className="relative overflow-hidden" style={{ height: '40%' }}>
                              <Image
                                src={groupImages[1].url!}
                                alt={groupImages[1].alt || 'Gallery image'}
                                fill
                                className="object-cover"
                              />
                            </div>
                            {groupImages[2] && (
                              <div className="relative overflow-hidden" style={{ height: '60%' }}>
                                <Image
                                  src={groupImages[2].url!}
                                  alt={groupImages[2].alt || 'Gallery image'}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            )}
                          </div>
                        )}
                        
                        {/* 2 ảnh xếp dọc (ảnh 4+5) - ảnh 4 lớn, ảnh 5 nhỏ (ngược lại) */}
                        {groupImages[3] && (
                          <div className="col-span-4 flex flex-col gap-3 md:gap-4">
                            <div className="relative overflow-hidden" style={{ height: '55%' }}>
                              <Image
                                src={groupImages[3].url!}
                                alt={groupImages[3].alt || 'Gallery image'}
                                fill
                                className="object-cover"
                              />
                            </div>
                            {groupImages[4] && (
                              <div className="relative overflow-hidden" style={{ height: '45%' }}>
                                <Image
                                  src={groupImages[4].url!}
                                  alt={groupImages[4].alt || 'Gallery image'}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                    
                    {/* Row 2: 2 ảnh portrait xếp dọc | landscape lớn */}
                    {groupImages.length >= 6 && (
                      <div className="grid grid-cols-12 gap-3 md:gap-4" style={{ height: '420px' }}>
                        {/* 2 ảnh portrait xếp dọc (ảnh 6+7) - bằng ảnh 1 của row 1 */}
                        <div className="col-span-4 flex flex-col gap-3 md:gap-4">
                          {renderImage(groupImages[5], 'flex-1')}
                          {groupImages[6] && renderImage(groupImages[6], 'flex-1')}
                        </div>
                        
                        {/* Ảnh 8: landscape lớn */}
                        {groupImages[7] && renderImage(groupImages[7], 'col-span-8')}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
            
            {/* Load More Button - hiện khi có nhiều hơn 8 ảnh */}
            <div className="flex justify-center mt-8">
              <button
                onClick={handleLoadMore}
                className="px-6 py-3 border border-current text-sm tracking-wider hover:bg-black hover:text-white transition-colors"
                style={{ display: hasMoreImages ? 'block' : 'none' }}
              >
                {loadMoreText}
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default PhotoGalleryBlockComponent
