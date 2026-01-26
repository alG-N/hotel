'use client'

import React from 'react'

interface ThemeStylesProps {
  adminPrimaryColor?: string | null
  adminAccentColor?: string | null
}

export const AdminThemeStyles: React.FC<ThemeStylesProps> = ({
  adminPrimaryColor,
  adminAccentColor,
}) => {
  if (!adminPrimaryColor && !adminAccentColor) return null

  const cssVariables = `
    :root {
      ${adminPrimaryColor ? `--theme-elevation-0: ${adminPrimaryColor};` : ''}
      ${adminAccentColor ? `--theme-success-500: ${adminAccentColor};` : ''}
    }
  `

  return <style dangerouslySetInnerHTML={{ __html: cssVariables }} />
}
