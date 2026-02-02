import type { Block } from 'payload'
import { typographyFields } from '@/fields/typography'
import { blockStyleFields } from '@/fields/blockBackground'

/**
 * OFFERS BLOCK
 * 
 * Hiển thị ưu đãi đặc biệt với layout:
 * - Ảnh bên trái
 * - Nội dung bên phải với title, description, price, features list, CTA button
 */
export const OffersBlock: Block = {
  slug: 'offers',
  
  labels: {
    singular: 'Exclusive Offers',
    plural: 'Exclusive Offers',
  },

  interfaceName: 'OffersBlockType',
  
  fields: [
    // Image
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Hình ảnh',
    },
    // Content
    {
      name: 'title',
      type: 'text',
      label: 'Tiêu đề',
      defaultValue: 'Exclusive Offers, Thoughtfully Curated',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Mô tả',
      admin: {
        description: 'Mô tả ngắn về ưu đãi. Có thể chứa giá với format đặc biệt.',
      },
    },
    {
      name: 'priceHighlight',
      type: 'text',
      label: 'Giá nổi bật',
      defaultValue: '$89 per night',
      admin: {
        description: 'Phần giá sẽ được in đậm và nghiêng',
      },
    },
    // Features
    {
      name: 'featuresTitle',
      type: 'text',
      label: 'Tiêu đề features',
      defaultValue: "What's Included:",
    },
    {
      name: 'features',
      type: 'array',
      label: 'Features/Bao gồm',
      fields: [
        {
          name: 'feature',
          type: 'text',
          required: true,
        },
      ],
    },
    // Section style for checkmarks
    {
      name: 'sectionStyle',
      type: 'select',
      label: 'Style section',
      defaultValue: 'dark',
      options: [
        { label: 'Tối (text sáng)', value: 'dark' },
        { label: 'Sáng (text tối)', value: 'light' },
      ],
      admin: {
        position: 'sidebar',
        description: 'Điều chỉnh màu checkmarks và text theo nền',
      },
    },
    // CTA
    {
      name: 'ctaText',
      type: 'text',
      label: 'Nút CTA',
      defaultValue: 'Book Now',
    },
    {
      name: 'ctaLink',
      type: 'text',
      label: 'Link CTA',
      defaultValue: '/booking',
    },

    // SETTINGS
    {
      name: 'imagePosition',
      type: 'select',
      label: 'Vị trí ảnh',
      defaultValue: 'left',
      options: [
        { label: 'Trái', value: 'left' },
        { label: 'Phải', value: 'right' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'textAlign',
      type: 'select',
      label: 'Căn chỉnh text',
      defaultValue: 'center',
      options: [
        { label: 'Trái', value: 'left' },
        { label: 'Giữa', value: 'center' },
        { label: 'Phải', value: 'right' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'imageWidth',
      type: 'text',
      label: 'Chiều rộng ảnh',
      defaultValue: '100%',
      admin: {
        position: 'sidebar',
        description: 'VD: 100%, 400px, 50vw',
      },
    },
    {
      name: 'imageHeight',
      type: 'text',
      label: 'Chiều cao ảnh',
      defaultValue: 'auto',
      admin: {
        position: 'sidebar',
        description: 'VD: auto, 500px, 60vh',
      },
    },
    {
      name: 'imageAspectRatio',
      type: 'select',
      label: 'Tỷ lệ ảnh',
      defaultValue: 'auto',
      options: [
        { label: 'Tự động', value: 'auto' },
        { label: '1:1 (Vuông)', value: '1/1' },
        { label: '4:3', value: '4/3' },
        { label: '3:4', value: '3/4' },
        { label: '16:9', value: '16/9' },
        { label: '9:16', value: '9/16' },
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
