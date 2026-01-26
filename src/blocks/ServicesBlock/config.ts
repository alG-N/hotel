import type { Block } from 'payload'
import { typographyFields } from '@/fields/typography'
import { blockStyleFields } from '@/fields/blockBackground'

/**
 * EAT & DRINK BLOCK
 * 
 * Hiển thị nhà hàng và bar với tabs
 * - Restaurants, Bars, Breakfasts tabs
 * - Mỗi item có: tên, loại (category), mô tả, ảnh, link
 */
export const ServicesBlock: Block = {
  slug: 'services',
  
  labels: {
    singular: 'Eat & Drink Section',
    plural: 'Eat & Drink Sections',
  },

  interfaceName: 'ServicesBlockType',
  
  fields: [
    // CONTENT
    {
      name: 'sectionTitle',
      type: 'text',
      label: 'Tiêu đề Section',
      defaultValue: 'Eat and drink',
    },
    {
      name: 'viewAllText',
      type: 'text',
      label: 'Text link xem tất cả',
      defaultValue: 'View all options',
    },
    {
      name: 'viewAllLink',
      type: 'text',
      label: 'Link xem tất cả',
      defaultValue: '/dining',
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
            description: 'Ví dụ: Restaurants, Bars, Breakfasts',
          },
        },
        {
          name: 'items',
          type: 'array',
          label: 'Danh sách',
          fields: [
            {
              name: 'itemName',
              type: 'text',
              label: 'Tên',
              required: true,
            },
            {
              name: 'itemCategory',
              type: 'text',
              label: 'Loại/Category',
              admin: {
                description: 'Ví dụ: CAFE, FRENCH, BAR',
              },
            },
            {
              name: 'itemDescription',
              type: 'textarea',
              label: 'Mô tả',
            },
            {
              name: 'itemImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Hình ảnh',
            },
            {
              name: 'itemLink',
              type: 'text',
              label: 'Link chi tiết',
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
    {
      name: 'columns',
      type: 'select',
      label: 'Số cột',
      defaultValue: '2',
      options: [
        { label: '2 cột', value: '2' },
        { label: '3 cột', value: '3' },
        { label: '4 cột', value: '4' },
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
