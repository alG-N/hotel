import type { Block } from 'payload'
import { typographyFields } from '@/fields/typography'
import { blockStyleFields } from '@/fields/blockBackground'

/**
 * OFFERS BLOCK
 * 
 * Hiển thị các ưu đãi đặc biệt
 * - offerTitle, offerDescription, offerImage
 * + Settings để customize layout
 */
export const OffersBlock: Block = {
  slug: 'offers',
  
  labels: {
    singular: 'Special Offers',
    plural: 'Special Offers',
  },

  interfaceName: 'OffersBlockType',
  
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      label: 'Tiêu đề Section',
      defaultValue: 'Special Offers',
    },
    {
      name: 'offers',
      type: 'array',
      label: 'Danh sách ưu đãi',
      fields: [
        {
          name: 'offerTitle',
          type: 'text',
          label: 'Tiêu đề ưu đãi',
        },
        {
          name: 'offerDescription',
          type: 'textarea',
          label: 'Mô tả ưu đãi',
        },
        {
          name: 'offerImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Hình ảnh',
        },
        {
          name: 'offerLink',
          type: 'text',
          label: 'Link chi tiết',
        },
      ],
    },

    // SETTINGS
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
      admin: {
        position: 'sidebar',
        description: 'Số cột hiển thị',
      },
    },
    {
      name: 'gap',
      type: 'select',
      label: 'Khoảng cách',
      defaultValue: 'medium',
      options: [
        { label: 'Nhỏ (1rem)', value: 'small' },
        { label: 'Vừa (2rem)', value: 'medium' },
        { label: 'Lớn (3rem)', value: 'large' },
      ],
      admin: {
        position: 'sidebar',
        description: 'Khoảng cách giữa các cards',
      },
    },
    {
      name: 'layout',
      type: 'select',
      label: 'Bố cục card',
      defaultValue: 'horizontal',
      options: [
        { label: 'Ngang (ảnh trái)', value: 'horizontal' },
        { label: 'Dọc (ảnh trên)', value: 'vertical' },
      ],
      admin: {
        position: 'sidebar',
        description: 'Cách bố trí ảnh và nội dung',
      },
    },
    {
      name: 'backgroundColor',
      type: 'select',
      label: 'Màu nền section',
      defaultValue: 'dark',
      options: [
        { label: 'Tối', value: 'dark' },
        { label: 'Tối hơn', value: 'darker' },
        { label: 'Trong suốt', value: 'transparent' },
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
