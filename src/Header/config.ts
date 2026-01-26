import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateHeader } from './hooks/revalidateHeader'

export const Header: GlobalConfig = {
  slug: 'header',
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
      type: 'row',
      fields: [
        {
          name: 'logoWidth',
          type: 'number',
          label: 'Chiều rộng logo (px)',
          defaultValue: 120,
          admin: {
            width: '50%',
          },
        },
        {
          name: 'logoHeight',
          type: 'number',
          label: 'Chiều cao logo (px)',
          defaultValue: 40,
          admin: {
            width: '50%',
          },
        },
      ],
    },
    {
      name: 'logoLink',
      type: 'text',
      label: 'Link khi click logo',
      defaultValue: '/',
    },
    {
      name: 'navItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
      ],
      maxRows: 8,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/Header/RowLabel#RowLabel',
        },
      },
    },
    // Auth Settings
    {
      type: 'collapsible',
      label: 'Đăng nhập / Đăng ký',
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'showAuth',
          type: 'checkbox',
          label: 'Hiển thị nút đăng nhập/đăng ký',
          defaultValue: true,
        },
        {
          name: 'signInText',
          type: 'text',
          label: 'Text đăng nhập',
          defaultValue: 'Sign In',
        },
        {
          name: 'signInLink',
          type: 'text',
          label: 'Link đăng nhập',
          defaultValue: '/sign-in',
        },
        {
          name: 'signUpText',
          type: 'text',
          label: 'Text đăng ký',
          defaultValue: 'Sign Up',
        },
        {
          name: 'signUpLink',
          type: 'text',
          label: 'Link đăng ký',
          defaultValue: '/sign-up',
        },
      ],
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
          admin: {
            description: 'Để trống nếu muốn trong suốt. Ví dụ: #ffffff, rgba(0,0,0,0.5)',
          },
        },
        {
          name: 'textColor',
          type: 'select',
          label: 'Màu chữ',
          defaultValue: 'light',
          options: [
            { label: 'Sáng (cho nền tối)', value: 'light' },
            { label: 'Tối (cho nền sáng)', value: 'dark' },
          ],
        },
        {
          name: 'paddingSize',
          type: 'select',
          label: 'Kích thước padding',
          defaultValue: 'small',
          options: [
            { label: 'Nhỏ', value: 'small' },
            { label: 'Vừa', value: 'medium' },
            { label: 'Lớn', value: 'large' },
          ],
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
