import type { Block } from 'payload'
import { typographyFields } from '@/fields/typography'
import { blockStyleFields } from '@/fields/blockBackground'

/**
 * ACCOMMODATIONS BLOCK (Type 1)
 * 
 * List layout với:
 * - Filter tabs (All, Regular, Deluxe, Family, Suites)
 * - Mỗi phòng: Image slider trái, info phải (title, subtitle, amenities list, book button)
 */
export const RoomsGridBlock: Block = {
  slug: 'rooms-grid',
  
  labels: {
    singular: 'Accommodations (Type 1)',
    plural: 'Accommodations (Type 1)',
  },

  interfaceName: 'RoomsGridBlockType',
  
  fields: [
    // Filter Categories - predefined options
    {
      name: 'enabledCategories',
      type: 'select',
      label: 'Loại phòng hiển thị',
      hasMany: true,
      options: [
        { label: 'Regular', value: 'regular' },
        { label: 'Deluxe', value: 'deluxe' },
        { label: 'Family', value: 'family' },
        { label: 'Suites', value: 'suites' },
      ],
      defaultValue: ['regular', 'deluxe', 'family', 'suites'],
      admin: {
        description: 'Chọn các loại phòng muốn hiển thị trong filter',
      },
    },
    // Custom categories (optional)
    {
      name: 'customCategories',
      type: 'array',
      label: 'Loại phòng tùy chỉnh',
      admin: {
        description: 'Thêm loại phòng khác ngoài các loại mặc định',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Tên loại',
          required: true,
        },
      ],
    },

    // Rooms List
    {
      name: 'rooms',
      type: 'array',
      label: 'Danh sách phòng',
      fields: [
        {
          name: 'category',
          type: 'select',
          label: 'Loại phòng',
          options: [
            { label: 'Regular', value: 'regular' },
            { label: 'Deluxe', value: 'deluxe' },
            { label: 'Family', value: 'family' },
            { label: 'Suites', value: 'suites' },
          ],
          defaultValue: 'regular',
        },
        {
          name: 'name',
          type: 'text',
          label: 'Tên phòng',
          required: true,
        },
        {
          name: 'subtitle',
          type: 'text',
          label: 'Mô tả ngắn',
          admin: {
            description: 'Ví dụ: Ideal for short stays and business travelers...',
          },
        },
        // Images for slider
        {
          name: 'images',
          type: 'array',
          label: 'Ảnh phòng (slider)',
          minRows: 1,
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
          ],
        },
        // Amenities
        {
          name: 'amenities',
          type: 'array',
          label: 'Tiện nghi',
          fields: [
            {
              name: 'icon',
              type: 'select',
              label: 'Icon',
              options: [
                { label: 'Giường (Bed)', value: 'bed' },
                { label: 'Bàn làm việc (Desk)', value: 'desk' },
                { label: 'Phòng tắm (Bath)', value: 'bath' },
                { label: 'Wifi', value: 'wifi' },
                { label: 'TV', value: 'tv' },
                { label: 'Điều hòa (AC)', value: 'ac' },
                { label: 'Sofa', value: 'sofa' },
                { label: 'Cửa sổ (Window)', value: 'window' },
              ],
              defaultValue: 'bed',
            },
            {
              name: 'text',
              type: 'text',
              label: 'Mô tả',
              required: true,
            },
          ],
        },
        {
          name: 'bookLink',
          type: 'text',
          label: 'Link đặt phòng',
          defaultValue: '/booking',
        },
      ],
    },

    // Typography
    ...typographyFields,
    // Background Styles
    ...blockStyleFields,
  ],
}
