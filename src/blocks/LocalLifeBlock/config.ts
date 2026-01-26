import { Block } from 'payload'
import { typographyFields } from '@/fields/typography'
import { blockStyleFields } from '@/fields/blockBackground'

export const LocalLifeBlock: Block = {
  slug: 'local-life',
  interfaceName: 'LocalLifeBlock',
  labels: {
    singular: 'Local Life Block',
    plural: 'Local Life Blocks',
  },
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      label: 'Tiêu đề Section',
      defaultValue: 'Local Life',
    },
    {
      name: 'sectionDescription',
      type: 'textarea',
      label: 'Mô tả Section',
      admin: {
        description: 'Mô tả ngắn về địa phương',
      },
    },
    {
      name: 'items',
      type: 'array',
      label: 'Danh sách hoạt động',
      minRows: 1,
      maxRows: 8,
      fields: [
        {
          name: 'itemTitle',
          type: 'text',
          label: 'Tiêu đề',
          required: true,
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
    // Settings
    {
      type: 'collapsible',
      label: 'Cài đặt hiển thị',
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'backgroundColor',
          type: 'select',
          label: 'Màu nền',
          defaultValue: 'light',
          options: [
            { label: 'Sáng', value: 'light' },
            { label: 'Tối', value: 'dark' },
          ],
        },
        {
          name: 'accentColor',
          type: 'text',
          label: 'Màu nhấn',
          defaultValue: '#8b6f47',
        },
      ],
    },
    // Typography
    ...typographyFields,
    // Background Styles
    ...blockStyleFields,
  ],
}
