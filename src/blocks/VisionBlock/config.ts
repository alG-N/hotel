import type { Block } from 'payload'
import { typographyFields } from '@/fields/typography'
import { blockStyleFields } from '@/fields/blockBackground'

export const VisionBlock: Block = {
  slug: 'vision',
  interfaceName: 'VisionBlock',
  labels: {
    singular: 'Vision Block',
    plural: 'Vision Blocks',
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'mainTitle',
          type: 'text',
          label: 'Main Title',
          required: true,
          admin: {
            width: '50%',
          },
        },
        {
          name: 'mainDescription',
          type: 'textarea',
          label: 'Main Description',
          admin: {
            width: '50%',
          },
        },
      ],
    },
    {
      name: 'cards',
      type: 'array',
      label: 'Vision Cards',
      minRows: 1,
      maxRows: 2,
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'icon',
              type: 'select',
              label: 'Icon',
              defaultValue: 'eye',
              options: [
                { label: 'Eye (Vision)', value: 'eye' },
                { label: 'Target (Goal)', value: 'target' },
                { label: 'Compass', value: 'compass' },
                { label: 'Heart', value: 'heart' },
                { label: 'Star', value: 'star' },
                { label: 'Lightbulb', value: 'lightbulb' },
                { label: 'Award', value: 'award' },
                { label: 'Gem', value: 'gem' },
              ],
              admin: {
                width: '50%',
              },
            },
            {
              name: 'style',
              type: 'select',
              label: 'Card Style',
              defaultValue: 'dark',
              options: [
                { label: 'Dark', value: 'dark' },
                { label: 'Light', value: 'light' },
              ],
              admin: {
                width: '50%',
              },
            },
          ],
        },
        {
          name: 'title',
          type: 'text',
          label: 'Card Title',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Card Description',
        },
      ],
    },
    // Background styling
    ...blockStyleFields,
    // Typography
    ...typographyFields,
  ],
}
