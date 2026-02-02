'use client'

import React from 'react'
import {
  BookOpen,
  Smile,
  VolumeX,
  Utensils,
  Palette,
  Accessibility,
  Bed,
  Coffee,
  Wifi,
  Sun,
  Moon,
  Leaf,
  Shield,
  Clock,
  Sparkles,
} from 'lucide-react'
import { getBlockStyles, type BlockStyleSettings } from '@/fields/blockBackground'

interface TypographySettings {
  font?: string
  size?: string
  weight?: string
  lh?: string
  ls?: string
  color?: string
}

interface Feature {
  icon?: string
  title?: string
  description?: string
}

interface DesignedBlockProps {
  blockType: 'designed'
  title?: string
  description?: string
  features?: Feature[]
  // Style fields
  bgStyle?: string
  bgCustom?: string
  txtStyle?: 'auto' | 'dark' | 'light'
  // Typography
  tTitle?: TypographySettings
  tBody?: TypographySettings
}

const iconMap: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  book: BookOpen,
  smile: Smile,
  'volume-off': VolumeX,
  utensils: Utensils,
  palette: Palette,
  accessibility: Accessibility,
  bed: Bed,
  coffee: Coffee,
  wifi: Wifi,
  sun: Sun,
  moon: Moon,
  leaf: Leaf,
  shield: Shield,
  clock: Clock,
  sparkles: Sparkles,
}

export function DesignedBlockComponent({
  title,
  description,
  features,
  bgStyle,
  bgCustom,
  txtStyle,
  tTitle,
  tBody,
}: DesignedBlockProps) {
  const blockSettings: BlockStyleSettings = { bgStyle, bgCustom, txtStyle }
  const styles = bgStyle 
    ? getBlockStyles(blockSettings) 
    : { backgroundColor: '#f8f7f5', color: '#1a1a1a' }

  const titleStyles: React.CSSProperties = {
    fontFamily: tTitle?.font || 'Georgia, serif',
    fontWeight: tTitle?.weight || '400',
    lineHeight: tTitle?.lh || '1.2',
    letterSpacing: tTitle?.ls || '0',
    color: tTitle?.color || styles.color,
  }

  const bodyStyles: React.CSSProperties = {
    fontFamily: tBody?.font || 'system-ui, -apple-system, sans-serif',
    fontWeight: tBody?.weight || '400',
    lineHeight: tBody?.lh || '1.6',
    letterSpacing: tBody?.ls || '0',
    color: tBody?.color || styles.color,
  }

  return (
    <section 
      className="py-16 md:py-24"
      style={{ backgroundColor: styles.backgroundColor, color: styles.color }}
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Header - Centered */}
        <div className="text-center mb-12 md:mb-16">
          {title && (
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl mb-4"
              style={titleStyles}
            >
              {title}
            </h2>
          )}
          {description && (
            <p 
              className="text-sm md:text-base max-w-xl mx-auto"
              style={{ ...bodyStyles, opacity: 0.7 }}
            >
              {description}
            </p>
          )}
        </div>

        {/* Features Grid - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {features?.map((feature, idx) => {
            const IconComponent = iconMap[feature.icon || 'book'] || BookOpen

            return (
              <div
                key={idx}
                className="flex items-start gap-4 p-5 md:p-6 border border-[#e0ddd8] rounded-lg bg-white/50"
              >
                {/* Icon */}
                <div className="flex-shrink-0 text-[#5a5a58] mt-0.5">
                  <IconComponent className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div>
                  {feature.title && (
                    <h3 
                      className="text-base md:text-lg font-medium mb-1"
                      style={{ color: styles.color }}
                    >
                      {feature.title}
                    </h3>
                  )}
                  {feature.description && (
                    <p 
                      className="text-sm"
                      style={{ ...bodyStyles, opacity: 0.65 }}
                    >
                      {feature.description}
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

export default DesignedBlockComponent
