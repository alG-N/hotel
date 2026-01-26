import type { Field } from 'payload'

/**
 * Extended color palette for blocks
 * Includes hotel/luxury theme colors
 */
export const backgroundColorOptions = [
  // Cơ bản
  { label: 'Trong suốt', value: 'transparent' },
  { label: 'Trắng', value: 'white' },
  { label: 'Đen', value: 'black' },
  
  // Trung tính
  { label: 'Xám nhạt (50)', value: 'gray-50' },
  { label: 'Xám (100)', value: 'gray-100' },
  { label: 'Xám (200)', value: 'gray-200' },
  { label: 'Xám (300)', value: 'gray-300' },
  { label: 'Xám (800)', value: 'gray-800' },
  { label: 'Xám (900)', value: 'gray-900' },
  
  // Kem / Beige
  { label: 'Kem nhạt', value: 'cream-light' },
  { label: 'Kem', value: 'cream' },
  { label: 'Beige', value: 'beige' },
  { label: 'Ivory', value: 'ivory' },
  
  // Nâu / Brand
  { label: 'Nâu vàng (Brand)', value: 'brand' },
  { label: 'Nâu đậm', value: 'brown-dark' },
  { label: 'Nâu chocolate', value: 'chocolate' },
  { label: 'Nâu espresso', value: 'espresso' },
  
  // Xanh dương
  { label: 'Xanh navy', value: 'navy' },
  { label: 'Xanh slate', value: 'slate' },
  { label: 'Xanh teal', value: 'teal' },
  
  // Xanh lá
  { label: 'Xanh olive', value: 'olive' },
  { label: 'Xanh sage', value: 'sage' },
  { label: 'Xanh forest', value: 'forest' },
  
  // Ấm
  { label: 'Vàng gold', value: 'gold' },
  { label: 'Đỏ burgundy', value: 'burgundy' },
  { label: 'Cam terracotta', value: 'terracotta' },
  { label: 'Hồng blush', value: 'blush' },
  
  // Tùy chỉnh
  { label: 'Tùy chỉnh...', value: 'custom' },
]

/**
 * Block background styling field - using short names
 * bgStyle, bgCustom, txtStyle
 */
export const blockStyleFields: Field[] = [
  {
    type: 'collapsible',
    label: 'Cài đặt màu nền',
    admin: {
      initCollapsed: true,
    },
    fields: [
      {
        type: 'row',
        fields: [
          {
            name: 'bgStyle',
            type: 'select',
            label: 'Màu nền',
            defaultValue: 'transparent',
            options: backgroundColorOptions,
            admin: { width: '50%' },
          },
          {
            name: 'bgCustom',
            type: 'text',
            label: 'Màu tùy chỉnh (hex)',
            admin: {
              width: '50%',
              placeholder: '#ffffff',
              condition: (_, siblingData) => siblingData?.bgStyle === 'custom',
            },
          },
        ],
      },
      {
        name: 'txtStyle',
        type: 'select',
        label: 'Màu chữ',
        defaultValue: 'auto',
        options: [
          { label: 'Tự động (theo màu nền)', value: 'auto' },
          { label: 'Tối (đen)', value: 'dark' },
          { label: 'Sáng (trắng)', value: 'light' },
        ],
        admin: {
          description: 'Chọn "Tự động" để màu chữ tự điều chỉnh theo màu nền',
        },
      },
    ],
  },
]

/**
 * Extended color value mappings
 */
const colorMap: Record<string, { bg: string; text: string }> = {
  // Basic
  transparent: { bg: 'transparent', text: '#1a1a1a' },
  white: { bg: '#ffffff', text: '#1a1a1a' },
  black: { bg: '#000000', text: '#ffffff' },
  
  // Grays
  'gray-50': { bg: '#f9fafb', text: '#1a1a1a' },
  'gray-100': { bg: '#f3f4f6', text: '#1a1a1a' },
  'gray-200': { bg: '#e5e7eb', text: '#1a1a1a' },
  'gray-300': { bg: '#d1d5db', text: '#1a1a1a' },
  'gray-800': { bg: '#1f2937', text: '#ffffff' },
  'gray-900': { bg: '#111827', text: '#ffffff' },
  
  // Cream / Beige
  'cream-light': { bg: '#faf9f7', text: '#1a1a1a' },
  cream: { bg: '#f5f5dc', text: '#1a1a1a' },
  beige: { bg: '#f5e6d3', text: '#1a1a1a' },
  ivory: { bg: '#fffff0', text: '#1a1a1a' },
  
  // Brown / Brand
  brand: { bg: '#8b6f47', text: '#ffffff' },
  'brown-dark': { bg: '#5c4033', text: '#ffffff' },
  chocolate: { bg: '#3c2415', text: '#ffffff' },
  espresso: { bg: '#2c1810', text: '#ffffff' },
  
  // Blues
  navy: { bg: '#1e3a5f', text: '#ffffff' },
  slate: { bg: '#475569', text: '#ffffff' },
  teal: { bg: '#0d9488', text: '#ffffff' },
  
  // Greens
  olive: { bg: '#6b7c3f', text: '#ffffff' },
  sage: { bg: '#9caf88', text: '#1a1a1a' },
  forest: { bg: '#228b22', text: '#ffffff' },
  
  // Warm colors
  gold: { bg: '#d4af37', text: '#1a1a1a' },
  burgundy: { bg: '#722f37', text: '#ffffff' },
  terracotta: { bg: '#cc5c4a', text: '#ffffff' },
  blush: { bg: '#f5c6c6', text: '#1a1a1a' },
  
  // Legacy support
  default: { bg: 'transparent', text: '#1a1a1a' },
  gray: { bg: '#f3f4f6', text: '#1a1a1a' },
}

export interface BlockStyleSettings {
  bgStyle?: string | null
  bgCustom?: string | null
  txtStyle?: 'auto' | 'dark' | 'light' | null
}

/**
 * Get background and text colors from block settings
 */
export function getBlockStyles(settings?: BlockStyleSettings | null): {
  backgroundColor: string
  color: string
} {
  const defaultStyles = { backgroundColor: 'transparent', color: '#1a1a1a' }

  if (!settings?.bgStyle || settings.bgStyle === 'transparent') {
    return defaultStyles
  }

  // Custom color
  if (settings.bgStyle === 'custom' && settings.bgCustom) {
    const textColor =
      settings.txtStyle === 'light'
        ? '#ffffff'
        : settings.txtStyle === 'dark'
          ? '#1a1a1a'
          : '#1a1a1a' // auto defaults to dark for custom
    return {
      backgroundColor: settings.bgCustom,
      color: textColor,
    }
  }

  // Preset color
  const preset = colorMap[settings.bgStyle]
  if (preset) {
    // Override text color if specified
    if (settings.txtStyle && settings.txtStyle !== 'auto') {
      return {
        backgroundColor: preset.bg,
        color: settings.txtStyle === 'light' ? '#ffffff' : '#1a1a1a',
      }
    }
    return { backgroundColor: preset.bg, color: preset.text }
  }

  return defaultStyles
}
