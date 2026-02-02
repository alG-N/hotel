'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { Media } from '@/components/Media'
import { CMSLink } from '@/components/Link'
import { Phone, ChevronDown } from 'lucide-react'

interface ThemeColors {
  backgroundColor: string
  textColor: 'light' | 'dark'
  scrolledBackgroundColor: string
  font?: string
  fontWeight?: string
  fontSize?: string
  letterSpacing?: string
}

interface HeaderClientProps {
  data: Header
  themeColors?: ThemeColors | null
}

const paddingMap = {
  small: 'py-2',
  medium: 'py-4',
  large: 'py-6',
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data, themeColors }) => {
  const [theme, setTheme] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showLangMenu, setShowLangMenu] = useState(false)
  const [showCurrencyMenu, setShowCurrencyMenu] = useState(false)
  const [selectedLang, setSelectedLang] = useState('ENG')
  const [selectedCurrency, setSelectedCurrency] = useState('USD')
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
  }, [pathname, setHeaderTheme])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
  }, [headerTheme, theme])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Data extraction with defaults
  const logoWidth = data?.logoWidth || 80
  const logoHeight = data?.logoHeight || 80
  const logoLink = data?.logoLink || '/'
  const showTopBar = data?.showTopBar ?? true
  const contactPhone = data?.contactPhone || '+84 777 4340'
  const showLanguageSelector = data?.showLanguageSelector ?? true
  const showCurrencySelector = data?.showCurrencySelector ?? true
  const languages = data?.languages || [{ code: 'en', label: 'ENG' }, { code: 'vi', label: 'VIE' }]
  const currencies = data?.currencies || [{ code: 'usd', label: 'USD' }, { code: 'vnd', label: 'VND' }]
  const navItemsLeft = data?.navItemsLeft || []
  const navItemsRight = data?.navItemsRight || []
  const showCTA = data?.showCTA ?? true
  const ctaText = data?.ctaText || 'Book Your Stay'
  const ctaLink = data?.ctaLink || '/booking'

  // Use theme colors
  const bgColor = themeColors?.backgroundColor || data?.backgroundColor || '#ffffff'
  const scrolledBgColor = themeColors?.scrolledBackgroundColor || '#ffffff'
  const textColorSetting = themeColors?.textColor || data?.textColor || 'dark'

  // Typography settings from theme
  const fontFamily = themeColors?.font || 'system-ui, -apple-system, sans-serif'
  const fontWeight = themeColors?.fontWeight || '500'
  const fontSize = themeColors?.fontSize || '14px'
  const letterSpacing = themeColors?.letterSpacing || '1px'

  const currentBgColor = isScrolled ? scrolledBgColor : bgColor
  
  // Force dark text for white/light backgrounds
  const isLightBg = currentBgColor.toLowerCase() === '#ffffff' ||
    currentBgColor.toLowerCase() === '#fff' ||
    currentBgColor.toLowerCase() === 'white' ||
    currentBgColor === 'transparent' ||
    textColorSetting === 'dark'

  const textColorClass = isLightBg ? 'text-gray-800' : 'text-white'
  const textColorValue = isLightBg ? '#1f2937' : '#ffffff'
  const borderColorClass = isLightBg ? 'border-gray-200' : 'border-white/20'
  const hoverColorClass = isLightBg ? 'hover:text-gray-600' : 'hover:text-gray-300'
  const paddingClass = paddingMap[data?.paddingSize || 'small'] || 'py-2'

  // Typography style object
  const navTextStyle: React.CSSProperties = {
    fontFamily,
    fontWeight,
    fontSize,
    letterSpacing,
    color: textColorValue,
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
      style={{
        backgroundColor: currentBgColor === 'transparent' ? 'transparent' : currentBgColor,
        boxShadow: isScrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
        color: textColorValue,
      }}
      {...(theme ? { 'data-theme': theme } : {})}
    >
      {/* Top Bar */}
      {showTopBar && (
        <div className={`border-b ${borderColorClass}`}>
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-2 text-sm" style={{ fontFamily }}>
              {/* Contact Phone */}
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>Contact us at {contactPhone}</span>
              </div>

              {/* Language & Currency Selectors */}
              <div className="flex items-center gap-4">
                {/* Language Selector */}
                {showLanguageSelector && languages && languages.length > 0 && (
                  <div className="relative">
                    <button
                      onClick={() => {
                        setShowLangMenu(!showLangMenu)
                        setShowCurrencyMenu(false)
                      }}
                      className={`flex items-center gap-1 ${hoverColorClass} transition-colors`}
                    >
                      {selectedLang}
                      <ChevronDown className="w-3 h-3" />
                    </button>
                    {showLangMenu && (
                      <div
                        className="absolute right-0 mt-2 py-1 w-24 bg-white rounded shadow-lg z-50 border border-gray-100"
                        onMouseLeave={() => setShowLangMenu(false)}
                      >
                        {languages.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => {
                              setSelectedLang(lang.label || lang.code || 'EN')
                              setShowLangMenu(false)
                            }}
                            className="block w-full text-left px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50"
                          >
                            {lang.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Divider */}
                {showLanguageSelector && showCurrencySelector && (
                  <span className={`${isLightBg ? 'text-gray-300' : 'text-white/30'}`}>|</span>
                )}

                {/* Currency Selector */}
                {showCurrencySelector && currencies && currencies.length > 0 && (
                  <div className="relative">
                    <button
                      onClick={() => {
                        setShowCurrencyMenu(!showCurrencyMenu)
                        setShowLangMenu(false)
                      }}
                      className={`flex items-center gap-1 ${hoverColorClass} transition-colors`}
                    >
                      {selectedCurrency}
                      <ChevronDown className="w-3 h-3" />
                    </button>
                    {showCurrencyMenu && (
                      <div
                        className="absolute right-0 mt-2 py-1 w-24 bg-white rounded shadow-lg z-50 border border-gray-100"
                        onMouseLeave={() => setShowCurrencyMenu(false)}
                      >
                        {currencies.map((currency) => (
                          <button
                            key={currency.code}
                            onClick={() => {
                              setSelectedCurrency(currency.label || currency.code || 'USD')
                              setShowCurrencyMenu(false)
                            }}
                            className="block w-full text-left px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50"
                          >
                            {currency.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Header */}
      <div className={`border-b ${borderColorClass}`}>
        <div className={`container mx-auto px-4 ${paddingClass}`}>
          <div className="flex justify-between items-center">
            {/* Left Navigation */}
            <nav className="flex-1 flex justify-start">
              <ul className="flex items-center gap-6 lg:gap-8">
                {navItemsLeft.map(({ link }, i) => (
                  <li key={i}>
                    <CMSLink
                      {...link}
                      appearance="inline"
                      className="tracking-wide uppercase transition-colors hover:opacity-70"
                      style={navTextStyle}
                    />
                  </li>
                ))}
              </ul>
            </nav>

            {/* Center Logo */}
            <Link href={logoLink} className="flex-shrink-0 mx-8">
              {data?.logo && typeof data.logo === 'object' ? (
                <div style={{ width: `${logoWidth}px`, height: `${logoHeight}px` }}>
                  <Media
                    resource={data.logo}
                    imgClassName="object-contain w-full h-full"
                  />
                </div>
              ) : (
                <Logo loading="eager" priority="high" className={isLightBg ? '' : 'invert'} />
              )}
            </Link>

            {/* Right Navigation + CTA */}
            <nav className="flex-1 flex justify-end items-center">
              <ul className="flex items-center gap-6 lg:gap-8">
                {navItemsRight.map(({ link }, i) => (
                  <li key={i}>
                    <CMSLink
                      {...link}
                      appearance="inline"
                      className="tracking-wide uppercase transition-colors hover:opacity-70"
                      style={navTextStyle}
                    />
                  </li>
                ))}

                {/* CTA Button */}
                {showCTA && (
                  <li>
                    <Link
                      href={ctaLink}
                      className={`tracking-wide uppercase px-4 py-2 border transition-colors ${
                        isLightBg
                          ? 'border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white'
                          : 'border-white text-white hover:bg-white hover:text-gray-800'
                      }`}
                      style={navTextStyle}
                    >
                      {ctaText}
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
