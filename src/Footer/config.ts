import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'Logo',
    },
    {
      name: 'socialLinks',
      type: 'array',
      label: 'Social Media Links',
      fields: [
        {
          name: 'platform',
          type: 'select',
          options: [
            { label: 'Facebook', value: 'facebook' },
            { label: 'YouTube', value: 'youtube' },
            { label: 'Instagram', value: 'instagram' },
            { label: 'LinkedIn', value: 'linkedin' },
            { label: 'Pinterest', value: 'pinterest' },
          ],
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
      maxRows: 6,
    },
    {
      name: 'subscribeSection',
      type: 'group',
      label: 'Subscribe Section',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: 'Exclusive offers',
        },
        {
          name: 'buttonText',
          type: 'text',
          defaultValue: 'Subscribe',
        },
        {
          name: 'buttonLink',
          type: 'text',
        },
      ],
    },
    {
      name: 'helpSection',
      type: 'group',
      label: 'Need Help Section',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: 'Need help?',
        },
        {
          name: 'links',
          type: 'array',
          fields: [
            link({
              appearances: false,
            }),
          ],
          maxRows: 5,
        },
      ],
    },
    {
      name: 'columns',
      type: 'array',
      label: 'Footer Columns',
      maxRows: 4,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'links',
          type: 'array',
          fields: [
            link({
              appearances: false,
            }),
          ],
          maxRows: 8,
        },
      ],
    },
    {
      name: 'copyrightText',
      type: 'text',
      label: 'Copyright Text',
      defaultValue: '© 2026 Sapa Hotel. All rights reserved.',
    },
    // Style Settings
    {
      type: 'collapsible',
      label: 'Cài đặt giao diện',
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Màu nền',
          defaultValue: '#1a1a1a',
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Màu chữ',
          defaultValue: '#ffffff',
        },
        {
          name: 'accentColor',
          type: 'text',
          label: 'Màu nhấn',
          defaultValue: '#8b6f47',
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
