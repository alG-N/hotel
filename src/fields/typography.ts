import { Field } from 'payload'

/**
 * Font options for blocks
 */
export const fontOptions = [
  { label: 'Georgia (Serif)', value: 'Georgia, serif' },
  { label: 'Playfair Display', value: "'Playfair Display', serif" },
  { label: 'Times New Roman', value: "'Times New Roman', serif" },
  { label: 'Merriweather', value: "'Merriweather', serif" },
  { label: 'Lora', value: "'Lora', serif" },
  { label: 'System UI (Mặc định)', value: 'system-ui, -apple-system, sans-serif' },
  { label: 'Inter', value: "'Inter', sans-serif" },
  { label: 'Roboto', value: "'Roboto', sans-serif" },
  { label: 'Open Sans', value: "'Open Sans', sans-serif" },
  { label: 'Lato', value: "'Lato', sans-serif" },
]

/**
 * Font size options
 */
export const fontSizeOptions = [
  { label: 'Rất nhỏ (12px)', value: '12px' },
  { label: 'Nhỏ (14px)', value: '14px' },
  { label: 'Bình thường (16px)', value: '16px' },
  { label: 'Vừa (18px)', value: '18px' },
  { label: 'Lớn (20px)', value: '20px' },
  { label: 'Rất lớn (24px)', value: '24px' },
]

/**
 * Title size options
 */
export const titleSizeOptions = [
  { label: 'Nhỏ (24px)', value: '24px' },
  { label: 'Vừa (32px)', value: '32px' },
  { label: 'Lớn (40px)', value: '40px' },
  { label: 'Rất lớn (48px)', value: '48px' },
  { label: 'Khổng lồ (56px)', value: '56px' },
  { label: 'Siêu lớn (64px)', value: '64px' },
]

/**
 * Font weight options
 */
export const fontWeightOptions = [
  { label: 'Nhẹ (300)', value: '300' },
  { label: 'Bình thường (400)', value: '400' },
  { label: 'Trung bình (500)', value: '500' },
  { label: 'Đậm vừa (600)', value: '600' },
  { label: 'Đậm (700)', value: '700' },
  { label: 'Rất đậm (800)', value: '800' },
]

/**
 * Line height options
 */
export const lineHeightOptions = [
  { label: 'Chặt (1.2)', value: '1.2' },
  { label: 'Bình thường (1.5)', value: '1.5' },
  { label: 'Thoáng (1.75)', value: '1.75' },
  { label: 'Rất thoáng (2)', value: '2' },
]

/**
 * Letter spacing options
 */
export const letterSpacingOptions = [
  { label: 'Chặt (-0.5px)', value: '-0.5px' },
  { label: 'Bình thường (0)', value: '0' },
  { label: 'Thoáng (0.5px)', value: '0.5px' },
  { label: 'Rộng (1px)', value: '1px' },
  { label: 'Rất rộng (2px)', value: '2px' },
]

/**
 * Text alignment options
 */
export const textAlignOptions = [
  { label: 'Trái', value: 'left' },
  { label: 'Giữa', value: 'center' },
  { label: 'Phải', value: 'right' },
]

/**
 * Typography settings fields for blocks - Full version
 * Using short field names to avoid PostgreSQL 63 char limit
 */
export const typographyFields: Field[] = [
  {
    type: 'collapsible',
    label: 'Cài đặt Font chữ',
    admin: {
      initCollapsed: true,
    },
    fields: [
      // Title Typography - short name "tTitle"
      {
        type: 'group',
        name: 'tTitle',
        label: 'Tiêu đề',
        admin: {
          hideGutter: true,
        },
        fields: [
          {
            type: 'row',
            fields: [
              {
                name: 'font',
                type: 'select',
                label: 'Font',
                defaultValue: 'Georgia, serif',
                options: fontOptions,
                admin: { width: '50%' },
              },
              {
                name: 'size',
                type: 'select',
                label: 'Cỡ chữ',
                defaultValue: '40px',
                options: titleSizeOptions,
                admin: { width: '50%' },
              },
            ],
          },
          {
            type: 'row',
            fields: [
              {
                name: 'weight',
                type: 'select',
                label: 'Độ đậm',
                defaultValue: '400',
                options: fontWeightOptions,
                admin: { width: '33%' },
              },
              {
                name: 'lh',
                type: 'select',
                label: 'Chiều cao dòng',
                defaultValue: '1.2',
                options: lineHeightOptions,
                admin: { width: '33%' },
              },
              {
                name: 'ls',
                type: 'select',
                label: 'Khoảng cách chữ',
                defaultValue: '0',
                options: letterSpacingOptions,
                admin: { width: '34%' },
              },
            ],
          },
          {
            name: 'color',
            type: 'text',
            label: 'Màu chữ tiêu đề',
            admin: {
              placeholder: '#1a1a1a hoặc để trống dùng mặc định',
            },
          },
        ],
      },
      // Body Typography - short name "tBody"
      {
        type: 'group',
        name: 'tBody',
        label: 'Nội dung',
        admin: {
          hideGutter: true,
        },
        fields: [
          {
            type: 'row',
            fields: [
              {
                name: 'font',
                type: 'select',
                label: 'Font',
                defaultValue: 'system-ui, -apple-system, sans-serif',
                options: fontOptions,
                admin: { width: '50%' },
              },
              {
                name: 'size',
                type: 'select',
                label: 'Cỡ chữ',
                defaultValue: '16px',
                options: fontSizeOptions,
                admin: { width: '50%' },
              },
            ],
          },
          {
            type: 'row',
            fields: [
              {
                name: 'weight',
                type: 'select',
                label: 'Độ đậm',
                defaultValue: '400',
                options: fontWeightOptions,
                admin: { width: '33%' },
              },
              {
                name: 'lh',
                type: 'select',
                label: 'Chiều cao dòng',
                defaultValue: '1.75',
                options: lineHeightOptions,
                admin: { width: '33%' },
              },
              {
                name: 'ls',
                type: 'select',
                label: 'Khoảng cách chữ',
                defaultValue: '0',
                options: letterSpacingOptions,
                admin: { width: '34%' },
              },
            ],
          },
          {
            name: 'color',
            type: 'text',
            label: 'Màu chữ nội dung',
            admin: {
              placeholder: '#4a4a4a hoặc để trống dùng mặc định',
            },
          },
        ],
      },
    ],
  },
]

/**
 * Simple typography fields - just font selection
 */
export const simpleTypographyFields: Field[] = [
  {
    type: 'collapsible',
    label: 'Cài đặt Font chữ',
    admin: {
      initCollapsed: true,
    },
    fields: [
      {
        type: 'row',
        fields: [
          {
            name: 'titleFont',
            type: 'select',
            label: 'Font tiêu đề',
            defaultValue: 'Georgia, serif',
            options: fontOptions,
            admin: { width: '50%' },
          },
          {
            name: 'bodyFont',
            type: 'select',
            label: 'Font nội dung',
            defaultValue: 'system-ui, -apple-system, sans-serif',
            options: fontOptions,
            admin: { width: '50%' },
          },
        ],
      },
    ],
  },
]
