import type { Block } from 'payload'
import { typographyFields } from '@/fields/typography'
import { blockStyleFields } from '@/fields/blockBackground'

/**
 * GALLERY SLIDESHOW BLOCK
 * 
 * Gallery ảnh full-width với navigation arrows
 * - Hiển thị 1 ảnh lớn với 2 nút chuyển ảnh
 * - Nút "See all photos" 
 */
export const GalleryBlock: Block = {
  slug: 'gallery',
  
  labels: {
    singular: 'Gallery Slideshow',
    plural: 'Gallery Slideshows',
  },

  interfaceName: 'GalleryBlockType',
  
  fields: [
    // CONTENT
    {
      name: 'gallery',
      type: 'array',
      label: 'Hình ảnh',
      minRows: 1,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'seeAllText',
      type: 'text',
      label: 'Text nút xem tất cả',
      defaultValue: 'See all photos',
    },
    {
      name: 'seeAllLink',
      type: 'text',
      label: 'Link xem tất cả ảnh',
      defaultValue: '/gallery',
    },

    // SETTINGS
    {
      name: 'height',
      type: 'select',
      label: 'Chiều cao',
      defaultValue: 'large',
      options: [
        { label: 'Vừa (60vh)', value: 'medium' },
        { label: 'Lớn (80vh)', value: 'large' },
        { label: 'Full (100vh)', value: 'full' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'showCounter',
      type: 'checkbox',
      label: 'Hiển thị số ảnh',
      defaultValue: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'showSeeAll',
      type: 'checkbox',
      label: 'Hiển thị nút See All',
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
