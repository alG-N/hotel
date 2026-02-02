import type { Block } from 'payload'
import { typographyFields } from '@/fields/typography'
import { blockStyleFields } from '@/fields/blockBackground'

/**
 * DESCRIPTION BLOCK (Type 1)
 * 
 * Block giới thiệu với layout 2 cột:
 * - Cột trái: Text + CTA + Image nhỏ
 * - Cột phải: Image lớn + Text
 */
export const DescriptionBlock: Block = {
  slug: 'description',
  
  labels: {
    singular: 'Description (Type 1)',
    plural: 'Description (Type 1)',
  },

  interfaceName: 'DescriptionBlockType',
  
  fields: [
    // Title - full width
    {
      name: 'title',
      type: 'text',
      label: 'Tiêu đề',
      required: true,
      admin: {
        description: 'Ví dụ: "A Refined Stay, Thoughtfully Designed"',
      },
    },

    // === LEFT COLUMN ===
    {
      type: 'collapsible',
      label: 'Cột trái (Text + CTA + Ảnh nhỏ)',
      admin: {
        initCollapsed: false,
      },
      fields: [
        {
          name: 'leftText',
          type: 'textarea',
          label: 'Text',
          admin: {
            description: 'Mô tả ngắn về khách sạn',
          },
        },
        {
          name: 'ctaText',
          type: 'text',
          label: 'CTA Text',
          defaultValue: 'More About Us',
        },
        {
          name: 'ctaLink',
          type: 'text',
          label: 'CTA Link',
          defaultValue: '/about',
        },
        {
          name: 'image1',
          type: 'upload',
          relationTo: 'media',
          label: 'Ảnh nhỏ (portrait)',
          admin: {
            description: 'Ảnh dọc nhỏ hiển thị dưới CTA',
          },
        },
      ],
    },

    // === RIGHT COLUMN ===
    {
      type: 'collapsible',
      label: 'Cột phải (Ảnh lớn + Text)',
      admin: {
        initCollapsed: false,
      },
      fields: [
        {
          name: 'image2',
          type: 'upload',
          relationTo: 'media',
          label: 'Ảnh lớn (landscape)',
          admin: {
            description: 'Ảnh ngang lớn',
          },
        },
        {
          name: 'rightText',
          type: 'textarea',
          label: 'Text dưới ảnh',
          admin: {
            description: 'Nội dung hiển thị dưới ảnh lớn',
          },
        },
      ],
    },

    // Typography
    ...typographyFields,
    // Background Styles
    ...blockStyleFields,
  ],
}
