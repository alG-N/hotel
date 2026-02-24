import type { Block } from 'payload'
import { typographyFields } from '@/fields/typography'
import { blockStyleFields } from '@/fields/blockBackground'

/**
 * BOOKING FORM BLOCK
 *
 * Elegant booking widget for hotel landing pages:
 * - Check-in / Check-out dates
 * - Guest & Room count
 * - Room type selector
 * - CTA button (links to external booking engine or internal page)
 * - Optional background image
 */
export const BookingFormBlock: Block = {
  slug: 'booking-form',

  labels: {
    singular: 'Booking Form',
    plural: 'Booking Forms',
  },

  interfaceName: 'BookingFormBlockType',

  fields: [
    // Header
    {
      name: 'title',
      type: 'text',
      label: 'Tiêu đề',
      defaultValue: 'Book Your Stay',
    },
    {
      name: 'subtitle',
      type: 'textarea',
      label: 'Mô tả ngắn',
      defaultValue: 'Experience luxury and comfort at The Calanthe. Select your dates and preferences below.',
    },

    // Booking URL
    {
      name: 'bookingUrl',
      type: 'text',
      label: 'URL trang đặt phòng',
      required: true,
      defaultValue: '#',
      admin: {
        description: 'Link đến hệ thống đặt phòng (Booking.com, engine riêng, v.v.)',
      },
    },
    {
      name: 'buttonText',
      type: 'text',
      label: 'Text nút đặt phòng',
      defaultValue: 'Check Availability',
    },

    // Room types
    {
      name: 'roomTypes',
      type: 'array',
      label: 'Loại phòng',
      admin: {
        description: 'Danh sách loại phòng hiển thị trong dropdown',
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Tên loại phòng',
          required: true,
        },
        {
          name: 'value',
          type: 'text',
          label: 'Giá trị (dùng cho URL param)',
          required: true,
        },
      ],
    },

    // Additional info cards (optional)
    {
      name: 'infoCards',
      type: 'array',
      label: 'Thông tin bổ sung',
      maxRows: 4,
      admin: {
        description: 'Các card thông tin nhỏ bên dưới form (VD: Giờ check-in, chính sách hủy...)',
      },
      fields: [
        {
          name: 'icon',
          type: 'select',
          label: 'Icon',
          options: [
            { label: 'Đồng hồ', value: 'clock' },
            { label: 'Shield', value: 'shield' },
            { label: 'Ngôi sao', value: 'star' },
            { label: 'Điện thoại', value: 'phone' },
            { label: 'Email', value: 'mail' },
            { label: 'Map', value: 'map' },
          ],
        },
        {
          name: 'title',
          type: 'text',
          label: 'Tiêu đề',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
          label: 'Mô tả',
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
        { label: 'Căn giữa', value: 'centered' },
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

    // Max guests/rooms config
    {
      name: 'maxGuests',
      type: 'number',
      label: 'Số khách tối đa',
      defaultValue: 10,
      admin: { position: 'sidebar' },
    },
    {
      name: 'maxRooms',
      type: 'number',
      label: 'Số phòng tối đa',
      defaultValue: 5,
      admin: { position: 'sidebar' },
    },

    // Typography
    ...typographyFields,
    // Background Styles
    ...blockStyleFields,
  ],
}
