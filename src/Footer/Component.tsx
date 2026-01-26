import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import type { Footer, ThemeSetting } from '@/payload-types'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import { Media } from '@/components/Media'

// Social media icons
const SocialIcon = ({ platform }: { platform: string }) => {
  const icons: Record<string, React.ReactNode> = {
    facebook: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    youtube: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    instagram: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
    linkedin: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    pinterest: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
      </svg>
    ),
  }
  return icons[platform] || null
}

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  // Get theme settings for footer colors
  let themeSettings: ThemeSetting | null = null
  try {
    themeSettings = await getCachedGlobal('theme-settings', 1)()
  } catch {
    // Theme settings not configured yet
  }

  const socialLinks = footerData?.socialLinks || []
  const subscribeSection = footerData?.subscribeSection
  const helpSection = footerData?.helpSection
  const columns = footerData?.columns || []
  const copyrightText = footerData?.copyrightText || '© 2026 Sapa Hotel. All rights reserved.'

  // Use theme settings first, fallback to footer config, then defaults
  const backgroundColor = themeSettings?.footerBackgroundColor || footerData?.backgroundColor || '#1a1a1a'
  const textColor = themeSettings?.footerTextColor || footerData?.textColor || '#ffffff'
  const accentColor = themeSettings?.footerAccentColor || footerData?.accentColor || '#8b6f47'
  const borderColor = themeSettings?.footerBorderColor || '#333333'

  return (
    <footer
      className="mt-auto"
      style={{
        backgroundColor,
        color: textColor,
      }}
    >
      {/* Top Section: Logo + Social Icons */}
      <div className="container py-8" style={{ borderBottom: `1px solid ${borderColor}` }}>
        <div className="flex flex-col items-center gap-6">
          <Link href="/" className="block max-h-16">
            {footerData?.logo && typeof footerData.logo === 'object' ? (
              <Media resource={footerData.logo} imgClassName="max-h-16 w-auto object-contain" />
            ) : (
              <Logo />
            )}
          </Link>

          {/* Social Media Icons */}
          {socialLinks.length > 0 && (
            <div className="flex gap-6">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:opacity-100"
                  style={{
                    color: textColor,
                    opacity: 0.8,
                    ['--hover-color' as string]: accentColor,
                  }}
                >
                  <SocialIcon platform={social.platform || ''} />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Middle Section: Subscribe + Need Help */}
      <div className="container py-8" style={{ borderBottom: `1px solid ${borderColor}` }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Exclusive Offers */}
          {subscribeSection && (
            <div>
              <h3 className="text-lg font-semibold mb-4">{subscribeSection.title}</h3>
              {subscribeSection.buttonLink ? (
                <Link
                  href={subscribeSection.buttonLink}
                  className="inline-block px-6 py-2 text-sm uppercase tracking-wider transition-colors"
                  style={{
                    border: `1px solid ${textColor}`,
                    color: textColor,
                  }}
                >
                  {subscribeSection.buttonText}
                </Link>
              ) : (
                <button
                  className="px-6 py-2 text-sm uppercase tracking-wider transition-colors"
                  style={{
                    border: `1px solid ${textColor}`,
                    color: textColor,
                  }}
                >
                  {subscribeSection.buttonText}
                </button>
              )}
            </div>
          )}

          {/* Need Help */}
          {helpSection && (
            <div>
              <h3 className="text-lg font-semibold mb-4">{helpSection.title}</h3>
              <nav className="flex flex-col gap-2">
                {helpSection.links?.map(({ link }, i) => (
                  <CMSLink
                    key={i}
                    {...link}
                    className="hover:underline"
                    style={{ color: textColor }}
                  />
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Section: Footer Columns */}
      {columns.length > 0 && (
        <div className="container py-8" style={{ borderBottom: `1px solid ${borderColor}` }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {columns.map((column, i) => (
              <div key={i}>
                <h4 className="text-sm font-semibold mb-4">{column.title}</h4>
                <nav className="flex flex-col gap-2">
                  {column.links?.map(({ link }, j) => (
                    <CMSLink
                      key={j}
                      {...link}
                      className="text-sm hover:opacity-100"
                      style={{ color: textColor, opacity: 0.6 }}
                    />
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Copyright */}
      <div className="container py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm" style={{ color: textColor, opacity: 0.6 }}>{copyrightText}</p>
          <ThemeSelector />
        </div>
      </div>
    </footer>
  )
}
