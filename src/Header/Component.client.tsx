'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState, useCallback } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { Media } from '@/components/Media'
import { HeaderNav } from './Nav'
import { getClientSideURL } from '@/utilities/getURL'

interface ThemeColors {
  backgroundColor: string
  textColor: 'light' | 'dark'
  scrolledBackgroundColor: string
}

interface HeaderClientProps {
  data: Header
  themeColors?: ThemeColors | null
}

interface UserData {
  id: string
  email: string
}

const paddingMap = {
  small: 'py-3',
  medium: 'py-5',
  large: 'py-8',
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data, themeColors }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [user, setUser] = useState<UserData | null>(null)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Check if user is logged in
  useEffect(() => {
    const checkUser = async () => {
      try {
        const res = await fetch(`${getClientSideURL()}/api/users/me`, {
          credentials: 'include',
        })
        if (res.ok) {
          const data = await res.json()
          if (data?.user?.id) {
            setUser({ id: data.user.id, email: data.user.email })
          }
        }
      } catch {
        // Not logged in
      }
    }
    checkUser()
  }, [])

  const handleLogout = useCallback(async () => {
    try {
      await fetch(`${getClientSideURL()}/api/users/logout`, {
        method: 'POST',
        credentials: 'include',
      })
      setUser(null)
      setShowUserMenu(false)
      window.location.reload()
    } catch (error) {
      console.error('Logout error:', error)
    }
  }, [])

  const logoWidth = data?.logoWidth || 120
  const logoHeight = data?.logoHeight || 40
  const logoLink = data?.logoLink || '/'
  
  // Use theme colors from ThemeSettings with proper defaults
  const bgColor = themeColors?.backgroundColor || 'transparent'
  const scrolledBgColor = themeColors?.scrolledBackgroundColor || '#000000'
  const textColorSetting = themeColors?.textColor || 'light'
  
  // Determine colors based on scroll state
  const currentBgColor = isScrolled ? scrolledBgColor : bgColor
  
  // Text color logic: check if scrolled background is light or dark
  const isScrolledBgLight = scrolledBgColor.toLowerCase() === '#ffffff' || 
                            scrolledBgColor.toLowerCase() === '#fff' ||
                            scrolledBgColor.toLowerCase() === 'white'
  
  const textColorClass = isScrolled 
    ? (isScrolledBgLight ? 'text-gray-900' : 'text-white')
    : (textColorSetting === 'dark' ? 'text-gray-900' : 'text-white')
  
  const paddingClass = paddingMap[data?.paddingSize || 'small'] || 'py-3'

  // Auth button styles based on scroll
  const authLinkStyle = isScrolled && isScrolledBgLight 
    ? 'text-gray-900 hover:text-gray-600' 
    : 'text-white hover:text-gray-200'
  
  const authButtonStyle = isScrolled && isScrolledBgLight
    ? 'bg-gray-900/10 hover:bg-gray-900/20 border-gray-900/30 text-gray-900'
    : 'bg-white/10 hover:bg-white/20 border-white/30 text-white'

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${textColorClass}`} 
      style={{ 
        backgroundColor: currentBgColor === 'transparent' ? 'transparent' : currentBgColor,
        boxShadow: isScrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
      }}
      {...(theme ? { 'data-theme': theme } : {})}
    >
      <div className={`container mx-auto ${paddingClass} flex justify-between items-center`}>
        <Link href={logoLink} className="block flex-shrink-0">
          {data?.logo && typeof data.logo === 'object' ? (
            <div style={{ maxWidth: `${logoWidth}px`, maxHeight: `${logoHeight}px` }}>
              <Media 
                resource={data.logo} 
                imgClassName="object-contain w-auto h-auto"
              />
            </div>
          ) : (
            <Logo loading="eager" priority="high" className="invert dark:invert-0" />
          )}
        </Link>
        
        <div className="flex items-center gap-6">
          <HeaderNav data={data} />
          
          {/* Auth Section */}
          {data?.showAuth && (
            <div className="flex items-center gap-4">
              {user ? (
                // User is logged in - show Dashboard link and email with dropdown
                <>
                  <Link
                    href="/admin"
                    className={`text-sm font-medium transition-all ${authLinkStyle}`}
                  >
                    Dashboard
                  </Link>
                  <div className="relative">
                    <button
                      onClick={() => setShowUserMenu(!showUserMenu)}
                      className={`text-sm transition-all flex items-center gap-2 ${authLinkStyle}`}
                    >
                      {user.email}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {showUserMenu && (
                      <div 
                        className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-50"
                        onMouseLeave={() => setShowUserMenu(false)}
                      >
                        <button
                          onClick={handleLogout}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                // User is not logged in - show Sign In/Sign Up
                <>
                  {data?.signInLink && (
                    <Link
                      href={data.signInLink}
                      className={`text-sm transition-all ${authLinkStyle}`}
                    >
                      {data?.signInText || 'Sign In'}
                    </Link>
                  )}
                  {data?.signUpLink && (
                    <Link
                      href={data.signUpLink}
                      className={`text-sm px-4 py-2 rounded transition-all border ${authButtonStyle}`}
                    >
                      {data?.signUpText || 'Sign Up'}
                    </Link>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
