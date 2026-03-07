import type { Block } from 'payload'
import { typographyFields } from '@/fields/typography'
import { blockStyleFields } from '@/fields/blockBackground'

export const OffersPageBlock: Block = {
  slug: 'offers-page',
  labels: { singular: 'Offers Page Grid', plural: 'Offers Page Grids' },
  interfaceName: 'OffersPageBlockType',
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      label: 'Tiêu đề section',
      localized: true,
      defaultValue: 'Our Exclusive Offers',
    },
    {
      name: 'sectionDescription',
      type: 'textarea',
      label: 'Mô tả section',
      localized: true,
    },
    {
      name: 'offers',
      type: 'array',
      label: 'Danh sách ưu đãi',
      minRows: 1,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Hình ảnh',
        },
        {
          name: 'badge',
          type: 'text',
          label: 'Badge / Tag',
          localized: true,
          admin: { description: 'VD: "Phổ biến", "Mới", "Giới hạn"' },
        },
        {
          name: 'title',
          type: 'text',
          label: 'Tiêu đề',
          localized: true,
          required: true,
        },
        {
          name: 'subtitle',
          type: 'text',
          label: 'Phụ đề / Giá tham khảo',
          localized: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Mô tả chi tiết',
          localized: true,
        },
        {
          name: 'features',
          type: 'array',
          label: 'Bao gồm',
          fields: [
            {
              name: 'text',
              type: 'text',
              localized: true,
              required: true,
            },
          ],
        },
        {
          name: 'ctaText',
          type: 'text',
          label: 'Nút CTA',
          localized: true,
          defaultValue: 'Book Now',
        },
        {
          name: 'ctaLink',
          type: 'text',
          label: 'Link CTA',
          defaultValue: '/booking',
        },
      ],
    },
    {
      name: 'columns',
      type: 'select',
      label: 'Số cột',
      defaultValue: '2',
      options: [
        { label: '1 cột', value: '1' },
        { label: '2 cột', value: '2' },
        { label: '3 cột', value: '3' },
      ],
      admin: { position: 'sidebar' },
    },
    {
      name: 'layout',
      type: 'select',
      label: 'Kiểu hiển thị',
      defaultValue: 'cards',
      options: [
        { label: 'Cards', value: 'cards' },
        { label: 'Alternating (ảnh trái/phải xen kẽ)', value: 'alternating' },
      ],
      admin: { position: 'sidebar' },
    },
    ...typographyFields,
    ...blockStyleFields,
  ],
}
