import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'
import { fontOptions, fontWeightOptions } from '@/fields/typography'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    // Subscribe Section
    {
      type: 'collapsible',
      label: 'Subscribe Section',
      admin: {
        initCollapsed: false,
      },
      fields: [
        {
          name: 'subscribeTitle',
          type: 'text',
          label: 'Tiêu đề',
          defaultValue: 'Get the latest news & discounts',
        },
        {
          name: 'subscribeSubtitle',
          type: 'text',
          label: 'Phụ đề',
          defaultValue: 'Subscribe to our newsletter to stay on updated',
        },
        {
          name: 'subscribeButtonText',
          type: 'text',
          label: 'Text nút',
          defaultValue: 'Subscribe',
        },
        {
          name: 'subscribeButtonLink',
          type: 'text',
          label: 'Link nút',
          defaultValue: '/subscribe',
        },
      ],
    },
    // Contact Info Section
    {
      type: 'collapsible',
      label: 'Thông tin liên hệ',
      admin: {
        initCollapsed: false,
      },
      fields: [
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          label: 'Logo',
        },
        {
          name: 'addresses',
          type: 'array',
          label: 'Địa chỉ',
          fields: [
            {
              name: 'address',
              type: 'text',
              required: true,
            },
          ],
          maxRows: 3,
        },
        {
          name: 'phone',
          type: 'text',
          label: 'Số điện thoại',
          defaultValue: '+84 777 4340',
        },
        {
          name: 'email',
          type: 'text',
          label: 'Email',
          defaultValue: 'Calanthehotel@gmail.com',
        },
        {
          name: 'findUsText',
          type: 'text',
          label: 'Text "Find us"',
          defaultValue: 'Find us',
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
                { label: 'Twitter', value: 'twitter' },
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
      ],
    },
    // Navigation Links
    {
      type: 'collapsible',
      label: 'Navigation Links',
      admin: {
        initCollapsed: false,
      },
      fields: [
        {
          name: 'navLinks',
          type: 'array',
          label: 'Menu Links',
          fields: [
            link({
              appearances: false,
            }),
          ],
          maxRows: 10,
        },
      ],
    },
    // Copyright
    {
      name: 'copyrightText',
      type: 'text',
      label: 'Copyright Text',
      defaultValue: '@2025 Calanthe hotel All rights Reserves',
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
          type: 'row',
          fields: [
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Màu nền',
              defaultValue: '#ffffff',
              admin: {
                width: '50%',
              },
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Màu chữ',
              defaultValue: '#1a1a1a',
              admin: {
                width: '50%',
              },
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'borderColor',
              type: 'text',
              label: 'Màu viền',
              defaultValue: '#e5e5e5',
              admin: {
                width: '50%',
              },
            },
            {
              name: 'subscribeBackgroundColor',
              type: 'text',
              label: 'Màu nền Subscribe',
              defaultValue: '#f5f5f5',
              admin: {
                width: '50%',
              },
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'titleFont',
              type: 'select',
              label: 'Font tiêu đề',
              defaultValue: 'Georgia, serif',
              options: fontOptions,
              admin: {
                width: '50%',
              },
            },
            {
              name: 'bodyFont',
              type: 'select',
              label: 'Font body',
              defaultValue: 'system-ui, -apple-system, sans-serif',
              options: fontOptions,
              admin: {
                width: '50%',
              },
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'titleFontWeight',
              type: 'select',
              label: 'Độ đậm tiêu đề',
              defaultValue: '400',
              options: fontWeightOptions,
              admin: {
                width: '50%',
              },
            },
            {
              name: 'bodyFontWeight',
              type: 'select',
              label: 'Độ đậm body',
              defaultValue: '400',
              options: fontWeightOptions,
              admin: {
                width: '50%',
              },
            },
          ],
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
