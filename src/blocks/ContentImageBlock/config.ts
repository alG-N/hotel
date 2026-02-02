import type { Block } from 'payload'
import { typographyFields } from '@/fields/typography'
import { blockStyleFields } from '@/fields/blockBackground'

export const ContentImageBlock: Block = {
  slug: 'content-image',
  interfaceName: 'ContentImageBlock',
  labels: {
    singular: 'Content & Image Block',
    plural: 'Content & Image Blocks',
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'imagePosition',
          type: 'select',
          label: 'Image Position',
          defaultValue: 'right',
          options: [
            {
              label: 'Left (Hình bên trái)',
              value: 'left',
            },
            {
              label: 'Right (Hình bên phải)',
              value: 'right',
            },
          ],
          admin: {
            width: '50%',
          },
        },
        {
          name: 'showBorder',
          type: 'checkbox',
          label: 'Show Left Border',
          defaultValue: true,
          admin: {
            width: '50%',
          },
        },
      ],
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      name: 'highlightSection',
      type: 'group',
      label: 'Highlight Section (Optional)',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Section Title',
          admin: {
            placeholder: 'e.g., What we achieve',
          },
        },
        {
          name: 'items',
          type: 'array',
          label: 'Highlight Items',
          maxRows: 6,
          fields: [
            {
              name: 'text',
              type: 'text',
              label: 'Item Text',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image',
      required: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'ctaText',
          type: 'text',
          label: 'CTA Button Text (Optional)',
          admin: {
            width: '50%',
          },
        },
        {
          name: 'ctaLink',
          type: 'text',
          label: 'CTA Button Link',
          admin: {
            width: '50%',
            condition: (data, siblingData) => siblingData?.ctaText,
          },
        },
      ],
    },
    // Background styling
    ...blockStyleFields,
    // Typography
    ...typographyFields,
  ],
}
