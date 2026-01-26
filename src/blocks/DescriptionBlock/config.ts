import type { Block } from 'payload'
import { typographyFields } from '@/fields/typography'
import { blockStyleFields } from '@/fields/blockBackground'

/**
 * DESCRIPTION BLOCK
 * 
 * Block giới thiệu tổng quan về hotel
 * - Tiêu đề chính (italic style)
 * - Mô tả chi tiết
 * - Địa chỉ với icon
 * - Số điện thoại với icon
 */
export const DescriptionBlock: Block = {
  slug: 'description',
  
  labels: {
    singular: 'Description Section',
    plural: 'Description Sections',
  },

  interfaceName: 'DescriptionBlockType',
  
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Tiêu đề',
      required: true,
      admin: {
        description: 'Ví dụ: "Haute Couture Meets Hill Tribe Artistry"',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Mô tả chi tiết',
      required: true,
    },
    {
      name: 'address',
      type: 'text',
      label: 'Địa chỉ',
      admin: {
        description: 'Địa chỉ đầy đủ của hotel',
      },
    },
    {
      name: 'addressLink',
      type: 'text',
      label: 'Link Google Maps',
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Số điện thoại',
    },
    {
      name: 'phoneLink',
      type: 'text',
      label: 'Link gọi điện',
      admin: {
        description: 'Ví dụ: tel:+84214363999',
      },
    },

    // SETTINGS
    {
      name: 'backgroundColor',
      type: 'select',
      label: 'Màu nền',
      defaultValue: 'light',
      options: [
        { label: 'Sáng', value: 'light' },
        { label: 'Tối', value: 'dark' },
        { label: 'Trong suốt', value: 'transparent' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'textAlign',
      type: 'select',
      label: 'Căn chỉnh',
      defaultValue: 'center',
      options: [
        { label: 'Trái', value: 'left' },
        { label: 'Giữa', value: 'center' },
        { label: 'Phải', value: 'right' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'titleStyle',
      type: 'select',
      label: 'Kiểu tiêu đề',
      defaultValue: 'italic',
      options: [
        { label: 'Italic', value: 'italic' },
        { label: 'Normal', value: 'normal' },
        { label: 'Bold', value: 'bold' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    // Typography
    ...typographyFields,
    // Background Styles
    ...blockStyleFields,
  ],
}
