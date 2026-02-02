import type { Block } from 'payload'
import { typographyFields } from '@/fields/typography'
import { blockStyleFields } from '@/fields/blockBackground'

/**
 * HERO BLOCK
 * 
 * Hero section với optional slideshow và flexible text positioning
 * - subtitle (e.g. "Welcome to")
 * - name/title
 * - tagline
 * - heroImage array hoặc single (for slideshow)
 */
export const HeroBlock: Block = {
  slug: 'hero',
  
  labels: {
    singular: 'Hero Section',
    plural: 'Hero Sections',
  },

  interfaceName: 'HeroBlockType',
  
  fields: [
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle (Phía trên tiêu đề)',
      admin: {
        description: 'Ví dụ: "Welcome to", "Discover"',
      },
    },
    {
      name: 'name',
      type: 'text',
      label: 'Tên Hotel/Tiêu đề',
      required: true,
    },
    {
      name: 'tagline',
      type: 'text',
      label: 'Tagline/Slogan',
    },
    {
      name: 'heroImage',
      type: 'array',
      label: 'Hero Images',
      minRows: 1,
      admin: {
        description: 'Thêm nhiều ảnh để bật slideshow',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        }
      ],
    },
    // CTA Button (optional)
    {
      name: 'showCTA',
      type: 'checkbox',
      label: 'Hiển thị nút CTA',
      defaultValue: false,
    },
    {
      name: 'ctaText',
      type: 'text',
      label: 'Nút CTA',
      defaultValue: 'Book Now',
      admin: {
        condition: (data, siblingData) => siblingData?.showCTA,
      },
    },
    {
      name: 'ctaLink',
      type: 'text',
      label: 'Link CTA',
      defaultValue: '/booking',
      admin: {
        condition: (data, siblingData) => siblingData?.showCTA,
      },
    },

    // SETTINGS
    {
      name: 'height',
      type: 'select',
      label: 'Chiều cao Hero',
      defaultValue: 'full',
      options: [
        { label: 'Full màn hình (100vh)', value: 'full' },
        { label: 'Lớn (80vh)', value: 'large' },
        { label: 'Vừa (60vh)', value: 'medium' },
        { label: 'Nhỏ (40vh)', value: 'small' },
      ],
      admin: {
        position: 'sidebar',
        description: 'Chiều cao của hero section',
      },
    },
    {
      name: 'textPosition',
      type: 'select',
      label: 'Vị trí text (ngang)',
      defaultValue: 'center',
      options: [
        { label: 'Trái', value: 'left' },
        { label: 'Giữa', value: 'center' },
        { label: 'Phải', value: 'right' },
      ],
      admin: {
        position: 'sidebar',
        description: 'Căn chỉnh nội dung theo chiều ngang',
      },
    },
    {
      name: 'verticalAlign',
      type: 'select',
      label: 'Vị trí text (dọc)',
      defaultValue: 'center',
      options: [
        { label: 'Trên', value: 'top' },
        { label: 'Giữa', value: 'center' },
        { label: 'Dưới', value: 'bottom' },
      ],
      admin: {
        position: 'sidebar',
        description: 'Căn chỉnh nội dung theo chiều dọc',
      },
    },
    {
      name: 'overlayOpacity',
      type: 'select',
      label: 'Độ tối overlay',
      defaultValue: 'medium',
      options: [
        { label: 'Không có', value: 'none' },
        { label: 'Nhẹ (30%)', value: 'light' },
        { label: 'Vừa (50%)', value: 'medium' },
        { label: 'Đậm (70%)', value: 'dark' },
      ],
      admin: {
        position: 'sidebar',
        description: 'Độ tối của lớp phủ trên ảnh',
      },
    },
    {
      name: 'enableSlideshow',
      type: 'checkbox',
      label: 'Bật Slideshow',
      defaultValue: true,
      admin: {
        position: 'sidebar',
        description: 'Tự động chuyển ảnh khi có nhiều hơn 1 ảnh',
      },
    },
    {
      name: 'slideshowSpeed',
      type: 'select',
      label: 'Tốc độ slideshow',
      defaultValue: '5000',
      options: [
        { label: 'Nhanh (3s)', value: '3000' },
        { label: 'Vừa (5s)', value: '5000' },
        { label: 'Chậm (7s)', value: '7000' },
      ],
      admin: {
        position: 'sidebar',
        description: 'Thời gian chuyển ảnh',
        condition: (_, siblingData) => siblingData?.enableSlideshow && siblingData?.heroImage?.length > 1,
      },
    },
    // Typography
    ...typographyFields,
    // Background Styles
    ...blockStyleFields,
  ],
}
