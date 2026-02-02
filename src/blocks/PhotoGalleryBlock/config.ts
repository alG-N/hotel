import type { Block } from 'payload'
import { typographyFields } from '@/fields/typography'
import { blockStyleFields } from '@/fields/blockBackground'

/**
 * PHOTO GALLERY BLOCK
 * 
 * Layouts:
 * - Bento: Grid 7 ảnh cố định
 * - Magazine: Grid động với Load more
 */
export const PhotoGalleryBlock: Block = {
  slug: 'photo-gallery',
  
  labels: {
    singular: 'Photo Gallery',
    plural: 'Photo Galleries',
  },

  interfaceName: 'PhotoGalleryBlockType',
  
  fields: [
    // Title
    {
      name: 'title',
      type: 'text',
      label: 'Tiêu đề',
      admin: {
        description: 'Tiêu đề section (không bắt buộc)',
      },
    },

    // Layout type
    {
      name: 'layout',
      type: 'select',
      label: 'Kiểu bố cục',
      defaultValue: 'bento',
      options: [
        { label: 'Bento (7 ảnh cố định)', value: 'bento' },
        { label: 'Magazine (Load more)', value: 'magazine' },
        // Legacy values - giữ để không lỗi migration
        { label: 'Masonry (Legacy)', value: 'masonry' },
        { label: 'Rows (Legacy)', value: 'rows' },
      ],
      admin: {
        description: 'Chọn kiểu hiển thị gallery',
      },
    },

    // Load more text - chỉ hiện khi layout là magazine
    {
      name: 'loadMoreText',
      type: 'text',
      label: 'Nút Load more',
      defaultValue: 'Load more',
      admin: {
        description: 'Text cho nút load more',
        condition: (_, siblingData) => siblingData?.layout === 'magazine',
      },
    },

    // Images array - unlimited images
    {
      name: 'images',
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

    // Typography
    ...typographyFields,
    // Background Styles
    ...blockStyleFields,
  ],
}
