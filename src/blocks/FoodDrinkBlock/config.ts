import type { Block } from 'payload'
import { typographyFields } from '@/fields/typography'
import { blockStyleFields } from '@/fields/blockBackground'

/**
 * FOOD & DRINKS BLOCK
 * 
 * Layout:
 * - Title + 3 filter dropdowns (Cuisine, Occasion, Food type)
 * - Left: 1 large featured card
 * - Right: 3 horizontal cards stacked
 */
export const FoodDrinkBlock: Block = {
  slug: 'food-drink',
  
  labels: {
    singular: 'Food & Drinks',
    plural: 'Food & Drinks',
  },

  interfaceName: 'FoodDrinkBlockType',
  
  fields: [
    // Header
    {
      name: 'title',
      type: 'text',
      label: 'Tiêu đề',
      defaultValue: 'Foods & Drinks',
    },

    // Filters
    {
      type: 'collapsible',
      label: 'Bộ lọc',
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'cuisineOptions',
          type: 'array',
          label: 'Cuisine Options',
          fields: [
            { name: 'label', type: 'text', required: true },
            { name: 'value', type: 'text', required: true },
          ],
        },
        {
          name: 'occasionOptions',
          type: 'array',
          label: 'Occasion Options',
          fields: [
            { name: 'label', type: 'text', required: true },
            { name: 'value', type: 'text', required: true },
          ],
        },
        {
          name: 'foodTypeOptions',
          type: 'array',
          label: 'Food Type Options',
          fields: [
            { name: 'label', type: 'text', required: true },
            { name: 'value', type: 'text', required: true },
          ],
        },
      ],
    },

    // Featured Item (Large left card)
    {
      type: 'collapsible',
      label: 'Featured Item (Thẻ lớn bên trái)',
      admin: { initCollapsed: false },
      fields: [
        {
          name: 'featuredImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Ảnh',
          required: true,
        },
        {
          name: 'featuredTitle',
          type: 'text',
          label: 'Tiêu đề',
          required: true,
        },
        {
          name: 'featuredDescription',
          type: 'textarea',
          label: 'Mô tả',
        },
        {
          name: 'featuredLink',
          type: 'text',
          label: 'Link',
        },
      ],
    },

    // Side Items (3 horizontal cards on right)
    {
      name: 'sideItems',
      type: 'array',
      label: 'Side Items (3 thẻ ngang bên phải)',
      minRows: 3,
      maxRows: 3,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Ảnh',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          label: 'Tiêu đề',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Mô tả',
        },
        {
          name: 'link',
          type: 'text',
          label: 'Link',
        },
      ],
    },

    // Typography
    ...typographyFields,
    // Background Styles
    ...blockStyleFields,
  ],
}
