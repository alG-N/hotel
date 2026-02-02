import type { Block } from 'payload'
import { typographyFields } from '@/fields/typography'
import { blockStyleFields } from '@/fields/blockBackground'

/**
 * SPECIAL OFFERS BLOCK
 * 
 * Carousel/grid với offers:
 * - Title + navigation arrows
 * - Cards: Image + Title + Description + CTA button
 */
export const SpecialOffersBlock: Block = {
  slug: 'special-offers',
  
  labels: {
    singular: 'Special Offers',
    plural: 'Special Offers',
  },

  interfaceName: 'SpecialOffersBlockType',
  
  fields: [
    // Header
    {
      name: 'sectionTitle',
      type: 'text',
      label: 'Tiêu đề',
      defaultValue: 'Special Offers',
    },

    // Offers
    {
      name: 'offers',
      type: 'array',
      label: 'Danh sách Offers',
      minRows: 1,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
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
          name: 'ctaText',
          type: 'text',
          label: 'Text nút CTA',
          defaultValue: 'Get The Offer',
        },
        {
          name: 'ctaLink',
          type: 'text',
          label: 'Link CTA',
          defaultValue: '/offers',
        },
      ],
    },

    // Display settings
    {
      name: 'columns',
      type: 'select',
      label: 'Số cột',
      defaultValue: '3',
      options: [
        { label: '2 cột', value: '2' },
        { label: '3 cột', value: '3' },
        { label: '4 cột', value: '4' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'showNavigation',
      type: 'checkbox',
      label: 'Hiển thị nút điều hướng',
      defaultValue: true,
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
