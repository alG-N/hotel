import type { GlobalConfig } from 'payload'
import { revalidateTheme } from './hooks/revalidateTheme'
import { fontOptions, fontWeightOptions, letterSpacingOptions } from '@/fields/typography'

export const ThemeSettings: GlobalConfig = {
  slug: 'theme-settings',
  label: 'Cài đặt giao diện',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Giao diện',
  },
  hooks: {
    afterChange: [revalidateTheme],
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        // Header Colors Tab
        {
          label: 'Header',
          description: 'Cài đặt giao diện cho Header',
          fields: [
            // Colors
            {
              type: 'row',
              fields: [
                {
                  name: 'headerBackgroundColor',
                  type: 'text',
                  label: 'Màu nền Header',
                  defaultValue: '#ffffff',
                  admin: {
                    width: '50%',
                    description: 'Nhập hex (#000000) hoặc "transparent"',
                  },
                },
                {
                  name: 'headerTextColor',
                  type: 'select',
                  label: 'Màu chữ Header',
                  defaultValue: 'dark',
                  options: [
                    { label: 'Sáng (trắng)', value: 'light' },
                    { label: 'Tối (đen)', value: 'dark' },
                  ],
                  admin: {
                    width: '50%',
                  },
                },
              ],
            },
            {
              name: 'headerScrolledBackgroundColor',
              type: 'text',
              label: 'Màu nền khi cuộn',
              defaultValue: '#ffffff',
              admin: {
                description: 'Màu nền Header khi scroll xuống',
              },
            },
            // Typography
            {
              type: 'row',
              fields: [
                {
                  name: 'headerFont',
                  type: 'select',
                  label: 'Font chữ Header',
                  defaultValue: 'system-ui, -apple-system, sans-serif',
                  options: fontOptions,
                  admin: {
                    width: '50%',
                  },
                },
                {
                  name: 'headerFontWeight',
                  type: 'select',
                  label: 'Độ đậm chữ',
                  defaultValue: '500',
                  options: fontWeightOptions,
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
                  name: 'headerFontSize',
                  type: 'select',
                  label: 'Kích thước chữ',
                  defaultValue: '14px',
                  options: [
                    { label: 'Nhỏ (12px)', value: '12px' },
                    { label: 'Bình thường (14px)', value: '14px' },
                    { label: 'Vừa (15px)', value: '15px' },
                    { label: 'Lớn (16px)', value: '16px' },
                  ],
                  admin: {
                    width: '50%',
                  },
                },
                {
                  name: 'headerLetterSpacing',
                  type: 'select',
                  label: 'Khoảng cách chữ',
                  defaultValue: '1px',
                  options: letterSpacingOptions,
                  admin: {
                    width: '50%',
                  },
                },
              ],
            },
          ],
        },
        // Footer Colors Tab
        {
          label: 'Footer',
          description: 'Cài đặt màu sắc cho Footer',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'footerBackgroundColor',
                  type: 'text',
                  label: 'Màu nền Footer',
                  defaultValue: '#1a1a1a',
                  admin: {
                    width: '50%',
                  },
                },
                {
                  name: 'footerTextColor',
                  type: 'text',
                  label: 'Màu chữ Footer',
                  defaultValue: '#ffffff',
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
                  name: 'footerAccentColor',
                  type: 'text',
                  label: 'Màu nhấn Footer',
                  defaultValue: '#8b6f47',
                  admin: {
                    width: '50%',
                    description: 'Dùng cho hover, links',
                  },
                },
                {
                  name: 'footerBorderColor',
                  type: 'text',
                  label: 'Màu viền Footer',
                  defaultValue: '#333333',
                  admin: {
                    width: '50%',
                  },
                },
              ],
            },
          ],
        },

      ],
    },
  ],
}
