import type { Block } from 'payload'
import { typographyFields } from '@/fields/typography'
import { blockStyleFields } from '@/fields/blockBackground'

/**
 * ACCOMMODATIONS BLOCK
 * 
 * Hiển thị phòng với tabs Room/Suite
 * - Mỗi phòng có: tên, loại giường, diện tích, số người, mô tả, nút xem chi tiết
 */
export const RoomsGridBlock: Block = {
  slug: 'rooms-grid',
  
  labels: {
    singular: 'Accommodations',
    plural: 'Accommodations',
  },

  interfaceName: 'RoomsGridBlockType',
  
  fields: [
    // CONTENT
    {
      name: 'sectionTitle',
      type: 'text',
      label: 'Tiêu đề Section',
      defaultValue: 'Accommodations',
    },
    {
      name: 'viewAllText',
      type: 'text',
      label: 'Text link xem tất cả',
      defaultValue: 'View all accommodations',
    },
    {
      name: 'viewAllLink',
      type: 'text',
      label: 'Link xem tất cả',
      defaultValue: '/accommodations',
    },

    // TABS
    {
      name: 'tabs',
      type: 'array',
      label: 'Tabs',
      minRows: 1,
      fields: [
        {
          name: 'tabName',
          type: 'text',
          label: 'Tên Tab',
          required: true,
          admin: {
            description: 'Ví dụ: Room, Suite',
          },
        },
        {
          name: 'rooms',
          type: 'array',
          label: 'Danh sách phòng',
          fields: [
            {
              name: 'roomName',
              type: 'text',
              label: 'Tên phòng',
              required: true,
            },
            {
              name: 'roomSubtitle',
              type: 'text',
              label: 'Phụ đề',
              admin: {
                description: 'Ví dụ: 2 Single Size Beds, 1 King Size Bed',
              },
            },
            {
              name: 'bedType',
              type: 'text',
              label: 'Loại giường',
              admin: {
                description: 'Ví dụ: KING SIZE BED(S) X1',
              },
            },
            {
              name: 'roomSize',
              type: 'text',
              label: 'Diện tích',
              admin: {
                description: 'Ví dụ: 33 M²/355SQFT',
              },
            },
            {
              name: 'maxPersons',
              type: 'text',
              label: 'Số người tối đa',
              admin: {
                description: 'Ví dụ: 3 PERSONS',
              },
            },
            {
              name: 'roomDescription',
              type: 'textarea',
              label: 'Mô tả phòng',
            },
            {
              name: 'roomImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Ảnh phòng',
            },
            {
              name: 'ratesLink',
              type: 'text',
              label: 'Link xem giá',
            },
            {
              name: 'detailsLink',
              type: 'text',
              label: 'Link xem chi tiết',
            },
          ],
        },
      ],
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
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'accentColor',
      type: 'text',
      label: 'Màu accent',
      defaultValue: '#8b6f47',
      admin: {
        position: 'sidebar',
        description: 'Màu cho tab active và nút',
      },
    },
    // Typography
    ...typographyFields,
    // Background Styles
    ...blockStyleFields,
  ],
}
