import { Block } from 'payload'
import { typographyFields } from '@/fields/typography'
import { blockStyleFields } from '@/fields/blockBackground'

/**
 * SERVICES BLOCK (Dining section style)
 * 
 * Layout:
 * - Header: Title bên trái, Description bên phải
 * - Content: 3 cards với ảnh dọc, title và description overlay
 */
export const OurServicesBlock: Block = {
  slug: 'our-services',
  interfaceName: 'OurServicesBlock',
  labels: {
    singular: 'Services',
    plural: 'Services',
  },
  fields: [
    // Header Section
    {
      type: 'collapsible',
      label: 'Header',
      admin: {
        initCollapsed: false,
      },
      fields: [
        {
          name: 'sectionTitle',
          type: 'text',
          label: 'Tiêu đề Section',
          defaultValue: 'Dining That Complements Your Stay',
          admin: {
            description: 'Tiêu đề lớn bên trái',
          },
        },
        {
          name: 'sectionDescription',
          type: 'textarea',
          label: 'Mô tả Section',
          admin: {
            description: 'Mô tả ngắn bên phải tiêu đề',
          },
        },
      ],
    },

    // Service Cards
    {
      name: 'services',
      type: 'array',
      label: 'Danh sách dịch vụ',
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'serviceImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Hình ảnh',
          required: true,
          admin: {
            description: 'Ảnh dọc (portrait) cho card',
          },
        },
        {
          name: 'serviceName',
          type: 'text',
          label: 'Tên dịch vụ',
          required: true,
          admin: {
            description: 'Ví dụ: Calm Space, Balanced Drinks',
          },
        },
        {
          name: 'serviceDescription',
          type: 'textarea',
          label: 'Mô tả',
          admin: {
            description: 'Mô tả ngắn hiển thị trên card',
          },
        },
      ],
    },

    // Settings
    {
      type: 'collapsible',
      label: 'Cài đặt hiển thị',
      admin: {
        initCollapsed: true,
      },
      fields: [
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
        },
      ],
    },

    // Typography
    ...typographyFields,
    // Background Styles
    ...blockStyleFields,
  ],
}
