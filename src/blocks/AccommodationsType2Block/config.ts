import type { Block } from 'payload'
import { typographyFields } from '@/fields/typography'
import { blockStyleFields } from '@/fields/blockBackground'

/**
 * ACCOMMODATIONS TYPE 2 BLOCK
 * 
 * Layout: List of rooms vertically
 * - Title header with CTA link on right
 * - Each room: Image (with arrows) on left, Content on right
 *   - Room name, description
 *   - Features list with icons
 *   - Book now button
 */
export const AccommodationsType2Block: Block = {
  slug: 'accommodations-type2',
  
  labels: {
    singular: 'Accommodations (Type 2)',
    plural: 'Accommodations (Type 2)',
  },

  interfaceName: 'AccommodationsType2BlockType',
  
  fields: [
    // Header
    {
      type: 'collapsible',
      label: 'Header',
      admin: {
        initCollapsed: false,
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Tiêu đề',
          required: true,
          defaultValue: 'Designed Around How You Rest',
          admin: {
            description: 'Tiêu đề section',
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
      ],
    },

    // Rooms Array
    {
      name: 'rooms',
      type: 'array',
      label: 'Danh sách phòng',
      minRows: 1,
      maxRows: 10,
      admin: {
        initCollapsed: false,
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Tên phòng',
          required: true,
          admin: {
            description: 'Ví dụ: Deluxe Room, Premier Room, Junior Suite',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Mô tả ngắn',
          admin: {
            description: 'Mô tả 1-2 dòng về phòng',
          },
        },
        {
          name: 'images',
          type: 'array',
          label: 'Ảnh phòng',
          minRows: 1,
          maxRows: 5,
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
          ],
        },
        {
          name: 'features',
          type: 'array',
          label: 'Đặc điểm nổi bật',
          minRows: 1,
          maxRows: 6,
          fields: [
            {
              name: 'icon',
              type: 'select',
              label: 'Icon',
              defaultValue: 'bed',
              options: [
                { label: 'Bed', value: 'bed' },
                { label: 'Desk', value: 'desk' },
                { label: 'Bath', value: 'bath' },
                { label: 'Window', value: 'window' },
                { label: 'Sofa', value: 'sofa' },
                { label: 'Star', value: 'star' },
              ],
            },
            {
              name: 'text',
              type: 'text',
              label: 'Nội dung',
              required: true,
            },
          ],
        },
        {
          name: 'buttonText',
          type: 'text',
          label: 'Nút CTA',
          defaultValue: 'Book now',
        },
        {
          name: 'buttonLink',
          type: 'text',
          label: 'Link CTA',
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
