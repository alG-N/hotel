import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateHeader } from './hooks/revalidateHeader'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    // Top Bar Settings
    {
      type: 'collapsible',
      label: 'Top Bar',
      admin: {
        initCollapsed: false,
      },
      fields: [
        {
          name: 'showTopBar',
          type: 'checkbox',
          label: 'Hiển thị Top Bar',
          defaultValue: true,
        },
        {
          name: 'contactPhone',
          type: 'text',
          label: 'Số điện thoại liên hệ',
          defaultValue: '+84 777 4340',
        },
        {
          name: 'showLanguageSelector',
          type: 'checkbox',
          label: 'Hiển thị chọn ngôn ngữ',
          defaultValue: true,
        },
        {
          name: 'languages',
          type: 'array',
          label: 'Ngôn ngữ',
          admin: {
            condition: (data) => data?.showLanguageSelector,
          },
          fields: [
            {
              name: 'code',
              type: 'text',
              label: 'Mã ngôn ngữ',
              required: true,
            },
            {
              name: 'label',
              type: 'text',
              label: 'Tên hiển thị',
              required: true,
            },
          ],
          defaultValue: [
            { code: 'en', label: 'ENG' },
            { code: 'vi', label: 'VIE' },
          ],
        },
        {
          name: 'showCurrencySelector',
          type: 'checkbox',
          label: 'Hiển thị chọn tiền tệ',
          defaultValue: true,
        },
        {
          name: 'currencies',
          type: 'array',
          label: 'Tiền tệ',
          admin: {
            condition: (data) => data?.showCurrencySelector,
          },
          fields: [
            {
              name: 'code',
              type: 'text',
              label: 'Mã tiền tệ',
              required: true,
            },
            {
              name: 'label',
              type: 'text',
              label: 'Tên hiển thị',
              required: true,
            },
          ],
          defaultValue: [
            { code: 'usd', label: 'USD' },
            { code: 'vnd', label: 'VND' },
          ],
        },
      ],
    },
    // Logo Settings
    {
      type: 'collapsible',
      label: 'Logo',
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
          type: 'row',
          fields: [
            {
              name: 'logoWidth',
              type: 'number',
              label: 'Chiều rộng logo (px)',
              defaultValue: 80,
              admin: {
                width: '50%',
              },
            },
            {
              name: 'logoHeight',
              type: 'number',
              label: 'Chiều cao logo (px)',
              defaultValue: 80,
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
      ],
    },
    // Navigation - Left Side
    {
      type: 'collapsible',
      label: 'Navigation - Bên trái',
      admin: {
        initCollapsed: false,
      },
      fields: [
        {
          name: 'navItemsLeft',
          type: 'array',
          label: 'Menu bên trái',
          fields: [
            link({
              appearances: false,
            }),
          ],
          maxRows: 4,
          admin: {
            initCollapsed: true,
            components: {
              RowLabel: '@/Header/RowLabel#RowLabel',
            },
          },
        },
      ],
    },
    // Navigation - Right Side
    {
      type: 'collapsible',
      label: 'Navigation - Bên phải',
      admin: {
        initCollapsed: false,
      },
      fields: [
        {
          name: 'navItemsRight',
          type: 'array',
          label: 'Menu bên phải',
          fields: [
            link({
              appearances: false,
            }),
          ],
          maxRows: 4,
          admin: {
            initCollapsed: true,
            components: {
              RowLabel: '@/Header/RowLabel#RowLabel',
            },
          },
        },
      ],
    },
    // CTA Button
    {
      type: 'collapsible',
      label: 'Nút CTA (Book Your Stay)',
      admin: {
        initCollapsed: false,
      },
      fields: [
        {
          name: 'showCTA',
          type: 'checkbox',
          label: 'Hiển thị nút CTA',
          defaultValue: true,
        },
        {
          name: 'ctaText',
          type: 'text',
          label: 'Text nút CTA',
          defaultValue: 'Book Your Stay',
        },
        {
          name: 'ctaLink',
          type: 'text',
          label: 'Link nút CTA',
          defaultValue: '/booking',
        },
      ],
    },
    // Keep old navItems for backward compatibility (hidden)
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
        hidden: true,
      },
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
                description: 'Để trống nếu muốn trong suốt. Ví dụ: #ffffff',
              },
            },
            {
              name: 'scrolledBackgroundColor',
              type: 'text',
              label: 'Màu nền khi cuộn',
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
              name: 'textColor',
              type: 'select',
              label: 'Màu chữ',
              defaultValue: 'dark',
              options: [
                { label: 'Sáng (cho nền tối)', value: 'light' },
                { label: 'Tối (cho nền sáng)', value: 'dark' },
              ],
              admin: {
                width: '50%',
              },
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
              admin: {
                width: '50%',
              },
            },
          ],
        },
        // Typography Settings
        {
          type: 'row',
          fields: [
            {
              name: 'fontFamily',
              type: 'select',
              label: 'Font chữ',
              defaultValue: 'system-ui, -apple-system, sans-serif',
              options: [
                { label: 'System UI', value: 'system-ui, -apple-system, sans-serif' },
                { label: 'Georgia (Serif)', value: 'Georgia, serif' },
                { label: 'Times New Roman', value: 'Times New Roman, Times, serif' },
                { label: 'Playfair Display', value: 'Playfair Display, Georgia, serif' },
                { label: 'Lora', value: 'Lora, Georgia, serif' },
                { label: 'Cormorant Garamond', value: 'Cormorant Garamond, Garamond, serif' },
                { label: 'Roboto', value: 'Roboto, system-ui, sans-serif' },
                { label: 'Open Sans', value: 'Open Sans, system-ui, sans-serif' },
                { label: 'Montserrat', value: 'Montserrat, system-ui, sans-serif' },
              ],
              admin: {
                width: '50%',
              },
            },
            {
              name: 'fontWeight',
              type: 'select',
              label: 'Độ đậm chữ',
              defaultValue: '500',
              options: [
                { label: 'Mảnh (300)', value: '300' },
                { label: 'Bình thường (400)', value: '400' },
                { label: 'Trung bình (500)', value: '500' },
                { label: 'Bán đậm (600)', value: '600' },
                { label: 'Đậm (700)', value: '700' },
              ],
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
              name: 'fontSize',
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
              name: 'letterSpacing',
              type: 'select',
              label: 'Khoảng cách chữ',
              defaultValue: '1px',
              options: [
                { label: 'Không', value: '0' },
                { label: 'Nhỏ (0.5px)', value: '0.5px' },
                { label: 'Vừa (1px)', value: '1px' },
                { label: 'Lớn (1.5px)', value: '1.5px' },
                { label: 'Rất lớn (2px)', value: '2px' },
              ],
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
    afterChange: [revalidateHeader],
  },
}
