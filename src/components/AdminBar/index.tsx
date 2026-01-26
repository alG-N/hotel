'use client'

import type { PayloadMeUser } from '@payloadcms/admin-bar'

import { cn } from '@/utilities/ui'
import React, { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

import './index.scss'

import { getClientSideURL } from '@/utilities/getURL'

const baseClass = 'admin-bar'

export const AdminBar: React.FC = () => {
  const [show, setShow] = useState(false)
  const [user, setUser] = useState<PayloadMeUser | null>(null)
  const router = useRouter()

  // Check user on mount
  React.useEffect(() => {
    const checkUser = async () => {
      try {
        const res = await fetch(`${getClientSideURL()}/api/users/me`, {
          credentials: 'include',
        })
        if (res.ok) {
          const data = await res.json()
          if (data?.user?.id) {
            setUser(data.user)
            setShow(true)
          } else {
            setShow(false)
          }
        }
      } catch {
        setShow(false)
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
      setShow(false)
      router.refresh()
    } catch (error) {
      console.error('Logout error:', error)
    }
  }, [router])

  if (!show) return null

  return (
    <div
      className={cn(baseClass, 'fixed top-0 left-0 right-0 py-2 bg-black text-white z-50')}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Left side: Logo + Dashboard */}
        <div className="flex items-center gap-4">
          <Link href="/admin" className="text-white hover:text-gray-300 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </Link>
          <Link 
            href="/admin" 
            className="text-sm font-medium text-white hover:text-gray-300 transition-colors"
          >
            Dashboard
          </Link>
          {user?.email && (
            <span className="text-sm text-gray-400">{user.email}</span>
          )}
        </div>

        {/* Right side: Logout only */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleLogout}
            className="text-sm text-white hover:text-gray-300 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}
