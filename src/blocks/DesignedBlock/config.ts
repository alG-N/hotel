import type { Block } from 'payload'
import { typographyFields } from '@/fields/typography'
import { blockStyleFields } from '@/fields/blockBackground'

export const DesignedBlock: Block = {
  slug: 'designed',
  interfaceName: 'DesignedBlock',
  labels: {
    singular: 'Designed Features Block',
    plural: 'Designed Features Blocks',
  },
  fields: [
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
      name: 'features',
      type: 'array',
      label: 'Features',
      minRows: 1,
      maxRows: 8,
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'icon',
              type: 'select',
              label: 'Icon',
              defaultValue: 'book',
              options: [
                { label: 'Book (Rooms)', value: 'book' },
                { label: 'Smile (Human-Centered)', value: 'smile' },
                { label: 'Volume Off (Sound)', value: 'volume-off' },
                { label: 'Utensils (Dining)', value: 'utensils' },
                { label: 'Palette (Design)', value: 'palette' },
                { label: 'Accessibility', value: 'accessibility' },
                { label: 'Bed', value: 'bed' },
                { label: 'Coffee', value: 'coffee' },
                { label: 'Wifi', value: 'wifi' },
                { label: 'Sun', value: 'sun' },
                { label: 'Moon', value: 'moon' },
                { label: 'Leaf', value: 'leaf' },
                { label: 'Shield', value: 'shield' },
                { label: 'Clock', value: 'clock' },
                { label: 'Sparkles', value: 'sparkles' },
              ],
              admin: {
                width: '50%',
              },
            },
            {
              name: 'title',
              type: 'text',
              label: 'Feature Title',
              required: true,
              admin: {
                width: '50%',
              },
            },
          ],
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Feature Description',
        },
      ],
    },
    // Background styling
    ...blockStyleFields,
    // Typography
    ...typographyFields,
  ],
}
