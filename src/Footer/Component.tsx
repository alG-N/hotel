import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import type { Footer } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react'

// Social media icons
const SocialIcon = ({ platform }: { platform: string }) => {
  const icons: Record<string, React.ReactNode> = {
    facebook: <Facebook className="w-5 h-5" />,
    twitter: <Twitter className="w-5 h-5" />,
    instagram: <Instagram className="w-5 h-5" />,
    youtube: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    pinterest: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
      </svg>
    ),
  }
  return icons[platform] || null
}

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  // Extract data with defaults
  const subscribeTitle = footerData?.subscribeTitle || 'Get the latest news & discounts'
  const subscribeSubtitle = footerData?.subscribeSubtitle || 'Subscribe to our newsletter to stay on updated'
  const subscribeButtonText = footerData?.subscribeButtonText || 'Subscribe'
  const subscribeButtonLink = footerData?.subscribeButtonLink || '/subscribe'
  const addresses = footerData?.addresses || []
  const phone = footerData?.phone || '+84 777 4340'
  const email = footerData?.email || 'Calanthehotel@gmail.com'
  const findUsText = footerData?.findUsText || 'Find us'
  const socialLinks = footerData?.socialLinks || []
  const navLinks = footerData?.navLinks || []
  const copyrightText = footerData?.copyrightText || '@2025 Calanthe hotel All rights Reserves'

  // Style settings
  const backgroundColor = footerData?.backgroundColor || '#ffffff'
  const textColor = footerData?.textColor || '#1a1a1a'
  const borderColor = footerData?.borderColor || '#e5e5e5'
  const subscribeBackgroundColor = footerData?.subscribeBackgroundColor || '#f5f5f5'
  const titleFont = footerData?.titleFont || 'Georgia, serif'
  const bodyFont = footerData?.bodyFont || 'system-ui, -apple-system, sans-serif'
  const titleFontWeight = footerData?.titleFontWeight || '400'

  return (
    <footer className="mt-auto" style={{ backgroundColor, color: textColor, fontFamily: bodyFont }}>
      {/* Subscribe Section */}
      <div 
        className="py-12 px-4"
        style={{ 
          backgroundColor: subscribeBackgroundColor,
          borderTop: `1px dashed ${borderColor}`,
          borderBottom: `1px dashed ${borderColor}`,
        }}
      >
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 
              className="text-2xl md:text-3xl italic mb-2"
              style={{ fontFamily: titleFont, fontWeight: titleFontWeight }}
            >
              {subscribeTitle}
            </h2>
            <p className="text-sm opacity-70">{subscribeSubtitle}</p>
          </div>
          <Link
            href={subscribeButtonLink}
            className="px-8 py-3 text-sm uppercase tracking-wider transition-colors"
            style={{
              backgroundColor: textColor,
              color: backgroundColor,
            }}
          >
            {subscribeButtonText}
          </Link>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="py-8" style={{ borderBottom: `1px solid ${borderColor}` }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Logo - only show if there's an actual logo */}
            {footerData?.logo && typeof footerData.logo === 'object' && (
              <div className="flex-shrink-0">
                <Link href="/">
                  <Media resource={footerData.logo} imgClassName="w-16 h-16 object-contain" />
                </Link>
              </div>
            )}

            {/* Addresses */}
            <div className="flex flex-col gap-2 text-sm">
              {addresses.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span>{item.address}</span>
                </div>
              ))}
            </div>

            {/* Phone & Email */}
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:underline">
                  {phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href={`mailto:${email}`} className="hover:underline">
                  {email}
                </a>
              </div>
            </div>

            {/* Find Us & Social Links */}
            <div className="flex flex-col items-center gap-3">
              <span className="text-sm">{findUsText}</span>
              <div className="flex items-center gap-3">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.url || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-70 transition-opacity"
                  >
                    <SocialIcon platform={social.platform || ''} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Navigation & Copyright */}
      <div className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              {navLinks.map(({ link }, i) => (
                <CMSLink
                  key={i}
                  {...link}
                  className="hover:underline"
                />
              ))}
            </nav>

            {/* Copyright */}
            <p className="text-sm opacity-70">{copyrightText}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
