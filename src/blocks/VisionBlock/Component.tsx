'use client'

import React from 'react'
import { Eye, Target, Compass, Heart, Star, Lightbulb, Award, Gem } from 'lucide-react'
import { getBlockStyles, type BlockStyleSettings } from '@/fields/blockBackground'

interface TypographySettings {
  font?: string
  size?: string
  weight?: string
  lh?: string
  ls?: string
  color?: string
}

interface VisionCard {
  icon?: string
  style?: 'dark' | 'light'
  title?: string
  description?: string
}

interface VisionBlockProps {
  blockType: 'vision'
  mainTitle?: string
  mainDescription?: string
  cards?: VisionCard[]
  // Style fields
  bgStyle?: string
  bgCustom?: string
  txtStyle?: 'auto' | 'dark' | 'light'
  // Typography
  tTitle?: TypographySettings
  tBody?: TypographySettings
}

const iconMap: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  eye: Eye,
  target: Target,
  compass: Compass,
  heart: Heart,
  star: Star,
  lightbulb: Lightbulb,
  award: Award,
  gem: Gem,
}

export function VisionBlockComponent({
  mainTitle,
  mainDescription,
  cards,
  bgStyle,
  bgCustom,
  txtStyle,
  tTitle,
  tBody,
}: VisionBlockProps) {
  const blockSettings: BlockStyleSettings = { bgStyle, bgCustom, txtStyle }
  const styles = bgStyle 
    ? getBlockStyles(blockSettings) 
    : { backgroundColor: '#e8e4df', color: '#1a1a1a' }

  const titleStyles: React.CSSProperties = {
    fontFamily: tTitle?.font || 'Georgia, serif',
    fontWeight: tTitle?.weight || '400',
    lineHeight: tTitle?.lh || '1.2',
    letterSpacing: tTitle?.ls || '0',
  }

  const bodyStyles: React.CSSProperties = {
    fontFamily: tBody?.font || 'system-ui, -apple-system, sans-serif',
    fontWeight: tBody?.weight || '400',
    lineHeight: tBody?.lh || '1.6',
    letterSpacing: tBody?.ls || '0',
  }

  // Diamond card size
  const cardSize = 550 // px

  return (
    <section 
      className="py-16 md:py-24"
      style={{ backgroundColor: styles.backgroundColor, color: styles.color }}
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Header Section - 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-16 md:mb-20">
          {/* Main Title - Left */}
          {mainTitle && (
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl"
              style={titleStyles}
            >
              {mainTitle}
            </h2>
          )}

          {/* Main Description - Right, aligned to top */}
          {mainDescription && (
            <p 
              className="text-sm md:text-base leading-relaxed lg:pt-2"
              style={{ ...bodyStyles, opacity: 0.8 }}
            >
              {mainDescription}
            </p>
          )}
        </div>

        {/* Diamond Cards - corners touching */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:-space-x-16 lg:-space-x-20 py-8">
          {cards?.map((card, idx) => {
            const IconComponent = iconMap[card.icon || 'eye'] || Eye
            const isDark = card.style === 'dark'

            // Pattern texture for cards
            const patternStyle = {
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='${isDark ? '%23ffffff' : '%23000000'}' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }

            return (
              <div 
                key={idx}
                className="relative flex-shrink-0"
                style={{ 
                  width: cardSize, 
                  height: cardSize,
                }}
              >
                {/* Diamond shape - rotated square */}
                <div
                  className={`absolute rotate-45 ${
                    isDark 
                      ? 'bg-[#2a2a28]' 
                      : 'bg-[#e0dcd7] border border-[#c8c4bf]'
                  }`}
                  style={{
                    ...patternStyle,
                    width: cardSize * 0.72,
                    height: cardSize * 0.72,
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%) rotate(45deg)',
                  }}
                />

                {/* Content - centered, not rotated */}
                <div 
                  className="absolute inset-0 flex flex-col items-center justify-center text-center px-8"
                  style={{ zIndex: 1 }}
                >
                  {/* Icon */}
                  <div className={`mb-4 ${isDark ? 'text-white/70' : 'text-[#2a2a28]/50'}`}>
                    <IconComponent className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1} />
                  </div>

                  {/* Title */}
                  {card.title && (
                    <h3 
                      className={`text-xl md:text-2xl mb-3 ${
                        isDark ? 'text-white' : 'text-[#2a2a28]'
                      }`}
                      style={titleStyles}
                    >
                      {card.title}
                    </h3>
                  )}

                  {/* Description */}
                  {card.description && (
                    <p 
                      className={`text-xs md:text-sm leading-relaxed max-w-[180px] ${
                        isDark ? 'text-white/70' : 'text-[#2a2a28]/70'
                      }`}
                      style={bodyStyles}
                    >
                      {card.description}
                    </p>
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

export default VisionBlockComponent
