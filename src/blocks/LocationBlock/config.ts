import type { Block } from 'payload'
import { typographyFields } from '@/fields/typography'
import { blockStyleFields } from '@/fields/blockBackground'

/**
 * LOCATION BLOCK
 * 
 * Hiển thị vị trí hotel với background image
 * + Settings để customize layout
 */
export const LocationBlock: Block = {
  slug: 'location',
  
  labels: {
    singular: 'Location Section',
    plural: 'Location Sections',
  },

  interfaceName: 'LocationBlockType',
  
  fields: [
    // CONTENT
    {
      name: 'sectionTitle',
      type: 'text',
      label: 'Tiêu đề Section',
      defaultValue: 'Our Location',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Mô tả vị trí',
    },
    {
      name: 'locationImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Hình ảnh/Bản đồ',
    },
    {
      name: 'address',
      type: 'text',
      label: 'Địa chỉ',
    },
    {
      name: 'googleMapUrl',
      type: 'text',
      label: 'Google Maps Link',
      admin: {
        description: 'Link Google Maps để mở trong tab mới',
      },
    },
    
    // SETTINGS
    {
      name: 'height',
      type: 'select',
      label: 'Chiều cao section',
      defaultValue: 'large',
      options: [
        { label: 'Nhỏ (40vh)', value: 'small' },
        { label: 'Vừa (60vh)', value: 'medium' },
        { label: 'Lớn (80vh)', value: 'large' },
        { label: 'Full (100vh)', value: 'full' },
      ],
      admin: {
        position: 'sidebar',
        description: 'Chiều cao của section',
      },
    },
    {
      name: 'textPosition',
      type: 'select',
      label: 'Vị trí nội dung',
      defaultValue: 'center',
      options: [
        { label: 'Trên trái', value: 'top-left' },
        { label: 'Trên giữa', value: 'top-center' },
        { label: 'Trên phải', value: 'top-right' },
        { label: 'Giữa trái', value: 'center-left' },
        { label: 'Giữa', value: 'center' },
        { label: 'Giữa phải', value: 'center-right' },
        { label: 'Dưới trái', value: 'bottom-left' },
        { label: 'Dưới giữa', value: 'bottom-center' },
        { label: 'Dưới phải', value: 'bottom-right' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'overlayOpacity',
      type: 'select',
      label: 'Độ tối overlay',
      defaultValue: 'medium',
      options: [
        { label: 'Không', value: 'none' },
        { label: 'Nhẹ (30%)', value: 'light' },
        { label: 'Vừa (50%)', value: 'medium' },
        { label: 'Đậm (70%)', value: 'dark' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'showButton',
      type: 'checkbox',
      label: 'Hiển thị nút xem bản đồ',
      defaultValue: true,
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
