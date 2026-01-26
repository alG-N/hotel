import { Block } from 'payload'
import { typographyFields } from '@/fields/typography'
import { blockStyleFields } from '@/fields/blockBackground'

export const MomentBlock: Block = {
  slug: 'moment',
  interfaceName: 'MomentBlock',
  labels: {
    singular: 'Moment Block',
    plural: 'Moment Blocks',
  },
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      label: 'Tiêu đề Section',
      defaultValue: 'Moment',
    },
    {
      name: 'hotelName',
      type: 'text',
      label: 'Tên khách sạn',
      admin: {
        description: 'Ví dụ: "HÔTEL DE LA COUPOLE - MGALLERY"',
      },
    },
    {
      name: 'momentTitle',
      type: 'text',
      label: 'Tiêu đề Moment',
      required: true,
      admin: {
        description: 'Ví dụ: "Cloud Hunting in Sapa"',
      },
    },
    {
      name: 'momentDescription',
      type: 'textarea',
      label: 'Mô tả',
    },
    {
      name: 'momentImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Hình ảnh',
      required: true,
    },
    {
      name: 'ctaText',
      type: 'text',
      label: 'Text nút CTA',
      defaultValue: 'Discover this M Moment',
    },
    {
      name: 'ctaLink',
      type: 'text',
      label: 'Link CTA',
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
          type: 'text',
          label: 'Màu nền',
          defaultValue: '#f5e6e0',
          admin: {
            description: 'Mã màu hex, ví dụ: #f5e6e0 (hồng nhạt)',
          },
        },
        {
          name: 'layout',
          type: 'select',
          label: 'Vị trí hình ảnh',
          defaultValue: 'image-left',
          options: [
            { label: 'Hình bên trái', value: 'image-left' },
            { label: 'Hình bên phải', value: 'image-right' },
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
