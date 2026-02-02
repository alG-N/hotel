import type { Block } from 'payload'
import { typographyFields } from '@/fields/typography'
import { blockStyleFields } from '@/fields/blockBackground'

/**
 * DESCRIPTION BLOCK (Type 2)
 * 
 * Layout:
 */
export const DescriptionType2Block: Block = {
  slug: 'description-type2',
  
  labels: {
    singular: 'Description (Type 2)',
    plural: 'Description (Type 2)',
  },

  interfaceName: 'DescriptionType2BlockType',
  
  fields: [
    // === CỘT 1: TITLE ===
    {
      type: 'collapsible',
      label: 'Cột 1: Tiêu đề',
      admin: {
        initCollapsed: false,
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Tiêu đề',
          required: true,
          admin: {
            description: 'Ví dụ: "Why The Calanthe Exists?"',
          },
        },
      ],
    },

    // === CỘT 2: ẢNH NHỎ ===
    {
      type: 'collapsible',
      label: 'Cột 2: Ảnh nhỏ',
      admin: {
        initCollapsed: false,
      },
      fields: [
        {
          name: 'imageLeft',
          type: 'upload',
          relationTo: 'media',
          label: 'Ảnh nhỏ (landscape)',
          admin: {
            description: 'Ảnh ngang nhỏ',
          },
        },
      ],
    },

    // === CỘT 3: NỘI DUNG ===
    {
      type: 'collapsible',
      label: 'Cột 3: Nội dung',
      admin: {
        initCollapsed: false,
      },
      fields: [
        {
          name: 'paragraph1',
          type: 'textarea',
          label: 'Đoạn văn 1',
          admin: {
            description: 'Nội dung đoạn văn đầu tiên',
          },
        },
        {
          name: 'paragraph2',
          type: 'textarea',
          label: 'Đoạn văn 2',
          admin: {
            description: 'Nội dung đoạn văn thứ hai',
          },
        },
      ],
    },

    // === CỘT 4: ẢNH PHẢI 1 ===
    {
      type: 'collapsible',
      label: 'Cột 4: Ảnh phải 1',
      admin: {
        initCollapsed: false,
      },
      fields: [
        {
          name: 'imageRight1',
          type: 'upload',
          relationTo: 'media',
          label: 'Ảnh phải 1 (portrait)',
          admin: {
            description: 'Ảnh dọc bên trái',
          },
        },
      ],
    },

    // === CỘT 5: ẢNH PHẢI 2 ===
    {
      type: 'collapsible',
      label: 'Cột 5: Ảnh phải 2',
      admin: {
        initCollapsed: false,
      },
      fields: [
        {
          name: 'imageRight2',
          type: 'upload',
          relationTo: 'media',
          label: 'Ảnh phải 2 (portrait)',
          admin: {
            description: 'Ảnh dọc bên phải',
          },
        },
      ],
    },

    // Typography settings
    ...typographyFields,
    
    // Style settings
    ...blockStyleFields,
  ],
}
