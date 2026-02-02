import type { Block } from 'payload'
import { typographyFields } from '@/fields/typography'
import { blockStyleFields } from '@/fields/blockBackground'

/**
 * LOCATION BLOCK
 * 
 * Layout mới:
 * ┌─────────────────────────────────────────────────────┐
 * │  Address 1  │  Hotline    │                         │
 * │  Address 2  │  Email      │  [Contact Us]           │
 * ├─────────────────────────────────────────────────────┤
 * │                   Map Image                          │
 * │                 (with markers)                       │
 * └─────────────────────────────────────────────────────┘
 */
export const LocationBlock: Block = {
  slug: 'location',
  
  labels: {
    singular: 'Location Section',
    plural: 'Location Sections',
  },

  interfaceName: 'LocationBlockType',
  
  fields: [
    // === ADDRESSES ===
    {
      type: 'collapsible',
      label: 'Địa chỉ',
      admin: { initCollapsed: false },
      fields: [
        {
          name: 'address1Label',
          type: 'text',
          label: 'Label địa chỉ 1',
          defaultValue: 'Address 1',
        },
        {
          name: 'address1',
          type: 'text',
          label: 'Địa chỉ 1',
          admin: {
            description: 'Ví dụ: 12 Anchor Road, Sai Kung',
          },
        },
        {
          name: 'address2Label',
          type: 'text',
          label: 'Label địa chỉ 2',
          defaultValue: 'Address 2',
        },
        {
          name: 'address2',
          type: 'text',
          label: 'Địa chỉ 2',
          admin: {
            description: 'Ví dụ: 8 Seashell Drive, Lantau Island',
          },
        },
      ],
    },

    // === CONTACT INFO ===
    {
      type: 'collapsible',
      label: 'Thông tin liên hệ',
      admin: { initCollapsed: false },
      fields: [
        {
          name: 'hotlineLabel',
          type: 'text',
          label: 'Label Hotline',
          defaultValue: 'Hotline',
        },
        {
          name: 'hotline',
          type: 'text',
          label: 'Số hotline',
          admin: {
            description: 'Ví dụ: +84 777 4340',
          },
        },
        {
          name: 'emailLabel',
          type: 'text',
          label: 'Label Email',
          defaultValue: 'Email',
        },
        {
          name: 'email',
          type: 'text',
          label: 'Email',
          admin: {
            description: 'Ví dụ: Calanthehotel@gmail.com',
          },
        },
      ],
    },

    // === CTA BUTTON ===
    {
      type: 'collapsible',
      label: 'Nút CTA',
      admin: { initCollapsed: false },
      fields: [
        {
          name: 'ctaText',
          type: 'text',
          label: 'Text nút',
          defaultValue: 'Contact Us',
        },
        {
          name: 'ctaLink',
          type: 'text',
          label: 'Link nút',
          defaultValue: '/contact',
        },
      ],
    },

    // === MAP IMAGE ===
    {
      name: 'mapImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Hình bản đồ',
      admin: {
        description: 'Upload hình bản đồ với markers',
      },
    },

    // Typography
    ...typographyFields,
    // Background Styles
    ...blockStyleFields,
  ],
}
