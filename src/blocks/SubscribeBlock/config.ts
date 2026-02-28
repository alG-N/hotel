import type { Block } from 'payload'
import { typographyFields } from '@/fields/typography'
import { blockStyleFields } from '@/fields/blockBackground'

/**
 * SUBSCRIBE BLOCK
 *
 * Newsletter subscription section:
 * - Title + Subtitle
 * - Email input + Subscribe button
 * - Optional background image
 * - Optional features/benefits list
 * - Configurable form action (API endpoint or external service)
 */
export const SubscribeBlock: Block = {
  slug: 'subscribe',

  labels: {
    singular: 'Subscribe / Newsletter',
    plural: 'Subscribe / Newsletter',
  },

  interfaceName: 'SubscribeBlockType',

  fields: [
    // Content
    {
      name: 'title',
      type: 'text',
      label: 'Tiêu đề',
      localized: true,
      defaultValue: 'Get the latest news & discounts',
    },
    {
      name: 'subtitle',
      type: 'textarea',
      label: 'Mô tả',
      localized: true,
      defaultValue: 'Subscribe to our newsletter to stay on updated with the latest offers, events, and exclusive content.',
    },

    // Form settings
    {
      name: 'placeholderText',
      type: 'text',
      label: 'Placeholder cho email',
      localized: true,
      defaultValue: 'Enter your email address',
    },
    {
      name: 'buttonText',
      type: 'text',
      label: 'Text nút subscribe',
      localized: true,
      defaultValue: 'Subscribe',
    },
    {
      name: 'formAction',
      type: 'text',
      label: 'Form Action URL',
      admin: {
        description: 'URL API nhận email (VD: Mailchimp, ConvertKit, hoặc API riêng). Để trống = chỉ hiển thị.',
      },
    },
    {
      name: 'successMessage',
      type: 'text',
      label: 'Thông báo thành công',
      localized: true,
      defaultValue: 'Thank you for subscribing!',
    },

    // Benefits/features
    {
      name: 'benefits',
      type: 'array',
      label: 'Lợi ích đăng ký',
      maxRows: 4,
      admin: {
        description: 'Liệt kê lý do nên đăng ký (hiển thị dưới form)',
      },
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Nội dung',
          localized: true,
          required: true,
        },
      ],
    },

    // Layout
    {
      name: 'layout',
      type: 'select',
      label: 'Kiểu hiển thị',
      defaultValue: 'centered',
      options: [
        { label: 'Căn giữa (full width)', value: 'centered' },
        { label: 'Ngang (Title bên trái, form bên phải)', value: 'horizontal' },
        { label: 'Chia 2 cột (Form + Ảnh)', value: 'split' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'sideImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Ảnh bên cạnh (chế độ chia 2 cột)',
      admin: {
        condition: (_, siblingData) => siblingData?.layout === 'split',
      },
    },

    // Privacy note
    {
      name: 'privacyText',
      type: 'text',
      label: 'Ghi chú bảo mật',
      localized: true,
      defaultValue: 'We respect your privacy. Unsubscribe at any time.',
    },

    // Typography
    ...typographyFields,
    // Background Styles
    ...blockStyleFields,
  ],
}
