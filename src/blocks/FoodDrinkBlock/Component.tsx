'use client'

import React, { useState } from 'react'
import type { Media } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'
import { getBlockStyles, type BlockStyleSettings } from '@/fields/blockBackground'
import { Utensils, Calendar, Coffee, ChevronDown } from 'lucide-react'

interface TypographySettings {
  font?: string
  size?: string
  weight?: string
  lh?: string
  ls?: string
  color?: string
}

interface FilterOption {
  label?: string
  value?: string
}

interface SideItem {
  image?: Media | number
  title?: string
  description?: string
  link?: string
}

interface FoodDrinkBlockProps {
  blockType: 'food-drink'
  title?: string
  cuisineOptions?: FilterOption[]
  occasionOptions?: FilterOption[]
  foodTypeOptions?: FilterOption[]
  featuredImage?: Media | number
  featuredTitle?: string
  featuredDescription?: string
  featuredLink?: string
  sideItems?: SideItem[]
  // Style fields
  bgStyle?: string
  bgCustom?: string
  txtStyle?: 'auto' | 'dark' | 'light'
  tTitle?: TypographySettings
  tBody?: TypographySettings
}

/**
 * FOOD & DRINKS BLOCK COMPONENT
 * 
 * Layout:
 * - Title + 3 filter dropdowns
 * - Left: Large featured card with overlay text
 * - Right: 3 horizontal cards (image left, text right)
 */
export function FoodDrinkBlockComponent({
  title = 'Foods & Drinks',
  cuisineOptions = [],
  occasionOptions = [],
  foodTypeOptions = [],
  featuredImage,
  featuredTitle,
  featuredDescription,
  featuredLink,
  sideItems = [],
  bgStyle,
  bgCustom,
  txtStyle,
  tTitle,
  tBody,
}: FoodDrinkBlockProps) {
  const [selectedCuisine, setSelectedCuisine] = useState('')
  const [selectedOccasion, setSelectedOccasion] = useState('')
  const [selectedFoodType, setSelectedFoodType] = useState('')

  // Style system
  const blockSettings: BlockStyleSettings = { bgStyle, bgCustom, txtStyle }
  const hasNewStyles = !!bgStyle && bgStyle !== 'default'
  const styles = hasNewStyles 
    ? getBlockStyles(blockSettings)
    : { backgroundColor: '#ffffff', color: '#1a1a1a' }

  const textColor = styles.color || '#1a1a1a'
  const mutedColor = txtStyle === 'light' ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.6)'
  const borderColor = txtStyle === 'light' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'

  // Title typography
  const titleStyles: React.CSSProperties = {
    fontFamily: tTitle?.font || 'Georgia, serif',
    fontSize: tTitle?.size || undefined,
    fontWeight: tTitle?.weight || '400',
    fontStyle: 'italic',
    lineHeight: tTitle?.lh || '1.2',
    letterSpacing: tTitle?.ls || '0',
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

  // Parse featured image
  const featImg = typeof featuredImage === 'object' ? featuredImage as Media : null

  // Filter dropdown component
  const FilterDropdown = ({ 
    icon: Icon, 
    label, 
    options, 
    value, 
    onChange 
  }: { 
    icon: React.ElementType
    label: string
    options: FilterOption[]
    value: string
    onChange: (val: string) => void 
  }) => (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2 text-xs" style={{ color: mutedColor }}>
        <Icon className="w-3.5 h-3.5" />
        <span>{label}</span>
      </div>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="appearance-none bg-transparent text-base pr-6 cursor-pointer focus:outline-none"
          style={{ color: textColor, fontFamily: titleStyles.fontFamily }}
        >
          <option value="">Select {label.toLowerCase()}</option>
          {options.map((opt, idx) => (
            <option key={idx} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        <ChevronDown 
          className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" 
          style={{ color: textColor }}
        />
      </div>
    </div>
  )

  return (
    <section 
      className="py-16 md:py-24 px-4"
      style={{ backgroundColor: styles.backgroundColor }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        {title && (
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl mb-8"
            style={titleStyles}
          >
            {title}
          </h2>
        )}

        {/* Filters */}
        <div className="flex flex-wrap gap-8 md:gap-16 mb-10 pb-6 border-b" style={{ borderColor }}>
          <FilterDropdown
            icon={Utensils}
            label="Cuisine"
            options={cuisineOptions}
            value={selectedCuisine}
            onChange={setSelectedCuisine}
          />
          <FilterDropdown
            icon={Calendar}
            label="Occasion"
            options={occasionOptions}
            value={selectedOccasion}
            onChange={setSelectedOccasion}
          />
          <FilterDropdown
            icon={Coffee}
            label="Food type"
            options={foodTypeOptions}
            value={selectedFoodType}
            onChange={setSelectedFoodType}
          />
        </div>

        {/* Main Grid: Featured + Side Items */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Left: Featured Large Card */}
          <div className="relative aspect-[4/5] lg:aspect-auto lg:row-span-3 overflow-hidden group">
            {featImg?.url && (
              <Image
                src={featImg.url}
                alt={featuredTitle || 'Featured dish'}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            )}
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            
            {/* Content overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              {featuredTitle && (
                <h3 
                  className="text-2xl md:text-3xl mb-3"
                  style={{ fontFamily: titleStyles.fontFamily }}
                >
                  {featuredTitle}
                </h3>
              )}
              {featuredDescription && (
                <p className="text-sm leading-relaxed text-white/90">
                  {featuredDescription}
                </p>
              )}
            </div>

            {/* Link wrapper */}
            {featuredLink && (
              <Link href={featuredLink} className="absolute inset-0 z-10" />
            )}
          </div>

          {/* Right: 3 Side Items */}
          {sideItems.slice(0, 3).map((item, idx) => {
            const img = typeof item.image === 'object' ? item.image as Media : null
            
            return (
              <div 
                key={idx} 
                className="flex gap-4 group"
              >
                {/* Image */}
                <div className="relative w-1/3 aspect-[4/3] flex-shrink-0 overflow-hidden">
                  {img?.url && (
                    <Image
                      src={img.url}
                      alt={item.title || 'Dish'}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-center py-2">
                  {item.title && (
                    <h4 
                      className="text-lg md:text-xl mb-2"
                      style={{ color: textColor, fontFamily: titleStyles.fontFamily }}
                    >
                      {item.title}
                    </h4>
                  )}
                  {item.description && (
                    <p 
                      className="text-sm leading-relaxed"
                      style={bodyStyles}
                    >
                      {item.description}
                    </p>
                  )}
                </div>

                {/* Link wrapper */}
                {item.link && (
                  <Link href={item.link} className="absolute inset-0" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FoodDrinkBlockComponent
