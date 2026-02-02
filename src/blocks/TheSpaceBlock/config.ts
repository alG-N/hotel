import type { Block } from 'payload'
import { typographyFields } from '@/fields/typography'
import { blockStyleFields } from '@/fields/blockBackground'

/**
 * THE SPACE BLOCK
 * 
 * Bento grid layout với:
 * - Header: Title trái, description phải
 * - Grid với 3 stat cards và 3 ảnh theo layout đặc biệt
 */
export const TheSpaceBlock: Block = {
  slug: 'the-space',
  
  labels: {
    singular: 'The Space',
    plural: 'The Space Blocks',
  },

  interfaceName: 'TheSpaceBlockType',
  
  fields: [
    // Header
    {
      name: 'sectionTitle',
      type: 'text',
      label: 'Tiêu đề',
      defaultValue: 'The Space',
    },
    {
      name: 'sectionDescription',
      type: 'textarea',
      label: 'Mô tả ngắn',
      defaultValue: 'Dining at The Calanthe is designed to complement your stay.',
    },

    // Stats - 3 items
    {
      name: 'stats',
      type: 'array',
      label: 'Thống kê (3 items)',
      minRows: 3,
      maxRows: 3,
      fields: [
        {
          name: 'icon',
          type: 'select',
          label: 'Icon',
          options: [
            { label: 'Grid/Layout', value: 'grid' },
            { label: 'Seats/Chair', value: 'seats' },
            { label: 'Zones/Layers', value: 'zones' },
            { label: 'Square', value: 'square' },
            { label: 'Users', value: 'users' },
            { label: 'Clock', value: 'clock' },
          ],
          defaultValue: 'grid',
        },
        {
          name: 'value',
          type: 'text',
          label: 'Giá trị',
          required: true,
          admin: {
            description: 'Ví dụ: 120 m², 48 Seats, 3 Distinct Zones',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Mô tả',
        },
      ],
    },

    // Images - 3 images
    {
      name: 'images',
      type: 'array',
      label: 'Hình ảnh (3 ảnh)',
      minRows: 3,
      maxRows: 3,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },

    // Typography
    ...typographyFields,
    // Background Styles
    ...blockStyleFields,
  ],
}
