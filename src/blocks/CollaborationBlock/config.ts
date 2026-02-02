import type { Block } from 'payload'
import { typographyFields } from '@/fields/typography'
import { blockStyleFields } from '@/fields/blockBackground'

export const CollaborationBlock: Block = {
  slug: 'collaboration',
  interfaceName: 'CollaborationBlock',
  labels: {
    singular: 'Collaboration Block',
    plural: 'Collaboration Blocks',
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
      name: 'partners',
      type: 'array',
      label: 'Partners',
      minRows: 1,
      maxRows: 10,
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Partner Name',
          required: true,
        },
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          label: 'Partner Logo',
          required: true,
        },
        {
          name: 'link',
          type: 'text',
          label: 'Partner Website (Optional)',
        },
      ],
    },
    // Background styling
    ...blockStyleFields,
    // Typography
    ...typographyFields,
  ],
}
