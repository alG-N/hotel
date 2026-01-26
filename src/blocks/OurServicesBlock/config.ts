import { Block } from 'payload'
import { typographyFields } from '@/fields/typography'
import { blockStyleFields } from '@/fields/blockBackground'

export const OurServicesBlock: Block = {
  slug: 'our-services',
  interfaceName: 'OurServicesBlock',
  labels: {
    singular: 'Our Services Block',
    plural: 'Our Services Blocks',
  },
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      label: 'Tiêu đề Section',
      defaultValue: 'Our Services',
    },
    {
      name: 'services',
      type: 'array',
      label: 'Danh sách dịch vụ',
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'category',
          type: 'text',
          label: 'Danh mục',
          admin: {
            description: 'Ví dụ: WELLNESS, BREAKFAST, OCCASIONS',
          },
        },
        {
          name: 'serviceName',
          type: 'text',
          label: 'Tên dịch vụ',
          required: true,
        },
        {
          name: 'serviceDescription',
          type: 'textarea',
          label: 'Mô tả',
        },
        {
          name: 'serviceImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Hình ảnh',
        },
        {
          name: 'serviceLink',
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
