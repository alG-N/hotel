import type { GlobalConfig } from 'payload'
import { revalidateTheme } from './hooks/revalidateTheme'

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
          description: 'Cài đặt màu sắc cho Header',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'headerBackgroundColor',
                  type: 'text',
                  label: 'Màu nền Header',
                  defaultValue: 'transparent',
                  admin: {
                    width: '50%',
                    description: 'Nhập hex (#000000) hoặc "transparent"',
                  },
                },
                {
                  name: 'headerTextColor',
                  type: 'select',
                  label: 'Màu chữ Header',
                  defaultValue: 'light',
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
        // Admin Panel Tab
        {
          label: 'Admin Panel',
          description: 'Tùy chỉnh giao diện Admin Dashboard',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'adminPrimaryColor',
                  type: 'text',
                  label: 'Màu chính Admin',
                  defaultValue: '#0f172a',
                  admin: {
                    width: '50%',
                    description: 'Màu nền sidebar, header admin',
                  },
                },
                {
                  name: 'adminAccentColor',
                  type: 'text',
                  label: 'Màu nhấn Admin',
                  defaultValue: '#8b6f47',
                  admin: {
                    width: '50%',
                    description: 'Màu button, link, hover',
                  },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'adminBgColor',
                  type: 'text',
                  label: 'Màu nền trang Admin',
                  defaultValue: '#f8fafc',
                  admin: {
                    width: '50%',
                  },
                },
                {
                  name: 'adminTextColor',
                  type: 'text',
                  label: 'Màu chữ Admin',
                  defaultValue: '#1e293b',
                  admin: {
                    width: '50%',
                  },
                },
              ],
            },
          ],
        },
        // Global Block Defaults Tab
        {
          label: 'Block mặc định',
          description: 'Cài đặt mặc định cho tất cả các block',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'defaultBlockBg',
                  type: 'text',
                  label: 'Màu nền block mặc định',
                  defaultValue: 'transparent',
                  admin: {
                    width: '50%',
                  },
                },
                {
                  name: 'defaultBlockText',
                  type: 'text',
                  label: 'Màu chữ block mặc định',
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
                  name: 'defaultTitleFont',
                  type: 'text',
                  label: 'Font tiêu đề mặc định',
                  defaultValue: 'Georgia, serif',
                  admin: {
                    width: '50%',
                  },
                },
                {
                  name: 'defaultBodyFont',
                  type: 'text',
                  label: 'Font body mặc định',
                  defaultValue: 'system-ui, -apple-system, sans-serif',
                  admin: {
                    width: '50%',
                  },
                },
              ],
            },
            {
              name: 'blockSpacing',
              type: 'select',
              label: 'Khoảng cách giữa các block',
              defaultValue: 'normal',
              options: [
                { label: 'Nhỏ (8px)', value: 'small' },
                { label: 'Bình thường (0)', value: 'normal' },
                { label: 'Lớn (16px)', value: 'large' },
                { label: 'Rất lớn (32px)', value: 'xlarge' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
