import type { Block } from 'payload'
import { typographyFields } from '@/fields/typography'
import { blockStyleFields } from '@/fields/blockBackground'


export const LocationBlock: Block = {
  slug: 'location',

  labels: {
    singular: 'Location Section',
    plural: 'Location Sections',
  },

  interfaceName: 'LocationBlockType',

  fields: [
    // === SECTION TITLE ===
    {
      name: 'sectionTitle',
      type: 'text',
      label: 'Tiêu đề section',
      defaultValue: 'Location & Contact',
      admin: {
        description: 'Tiêu đề lớn phía trên (ví dụ: Location & Contact)',
      },
    },

    // === LOCATION / ADDRESS ===
    {
      type: 'collapsible',
      label: 'Địa chỉ (Location)',
      admin: { initCollapsed: false },
      fields: [
        // Giữ các field cũ để không mất dữ liệu
        {
          name: 'address1Label',
          type: 'text',
          label: 'Label địa chỉ 1 (legacy)',
          defaultValue: 'Address 1',
          admin: { condition: () => false }, // Ẩn trong admin
        },
        {
          name: 'address1',
          type: 'text',
          label: 'Địa chỉ 1 (legacy)',
          admin: { condition: () => false },
        },
        {
          name: 'address2Label',
          type: 'text',
          label: 'Label địa chỉ 2 (legacy)',
          defaultValue: 'Address 2',
          admin: { condition: () => false },
        },
        {
          name: 'address2',
          type: 'text',
          label: 'Địa chỉ 2 (legacy)',
          admin: { condition: () => false },
        },
        // Field mới
        {
          name: 'locationLabel',
          type: 'text',
          label: 'Label mục Location',
          defaultValue: 'LOCATION',
        },
        {
          name: 'fullAddress',
          type: 'textarea',
          label: 'Địa chỉ đầy đủ',
          admin: {
            description: 'Mỗi dòng sẽ hiển thị riêng. Ví dụ:\n1, Hoang Lien Street, Sapa District, Lao Cai Province\n33000 SAPA\nVietnam',
          },
        },
        {
          name: 'getDirectionsUrl',
          type: 'text',
          label: 'Link "Get directions"',
          admin: {
            description: 'Link Google Maps directions. Ví dụ: https://maps.google.com/...',
          },
        },
      ],
    },

    // === RESERVATION / CONTACT INFO ===
    {
      type: 'collapsible',
      label: 'Đặt phòng (Reservation)',
      admin: { initCollapsed: false },
      fields: [
        {
          name: 'reservationLabel',
          type: 'text',
          label: 'Label mục Reservation',
          defaultValue: 'RESERVATION',
        },
        // Giữ field cũ
        {
          name: 'hotlineLabel',
          type: 'text',
          label: 'Label Hotline (legacy)',
          defaultValue: 'Hotline',
          admin: { condition: () => false },
        },
        {
          name: 'hotline',
          type: 'text',
          label: 'Số điện thoại',
          admin: {
            description: 'Ví dụ: +84 214/3629999',
          },
        },
        {
          name: 'emailLabel',
          type: 'text',
          label: 'Label Email (legacy)',
          defaultValue: 'Email',
          admin: { condition: () => false },
        },
        {
          name: 'email',
          type: 'text',
          label: 'Email đặt phòng',
          admin: {
            description: 'Ví dụ: HASV2-RE@accor.com',
          },
        },
      ],
    },

    // === PARKING INFO ===
    {
      type: 'collapsible',
      label: 'Bãi đỗ xe (Parking)',
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'parkingLabel',
          type: 'text',
          label: 'Label mục Parking',
          defaultValue: 'PARKING',
        },
        {
          name: 'parkingItems',
          type: 'array',
          label: 'Danh sách tiện ích đỗ xe',
          labels: {
            singular: 'Mục',
            plural: 'Các mục',
          },
          admin: {
            description: 'Ví dụ: Parking included, Indoor parking, Valet parking',
          },
          fields: [
            {
              name: 'text',
              type: 'text',
              label: 'Nội dung',
              required: true,
            },
          ],
        },
      ],
    },

    // === GOOGLE MAP ===
    {
      type: 'collapsible',
      label: 'Bản đồ Google Maps',
      admin: { initCollapsed: false },
      fields: [
        {
          name: 'mapAddress',
          type: 'text',
          label: 'Địa chỉ trên Google Maps',
          admin: {
            description: 'Nhập địa chỉ để hiển thị trên Google Maps. Nếu để trống sẽ dùng "Địa chỉ đầy đủ" ở trên.',
          },
        },
        {
          name: 'mapLatitude',
          type: 'number',
          label: 'Vĩ độ (Latitude)',
          admin: {
            description: 'Tùy chọn: nhập tọa độ để chính xác hơn. Ví dụ: 22.3380',
            step: 0.0001,
          },
        },
        {
          name: 'mapLongitude',
          type: 'number',
          label: 'Kinh độ (Longitude)',
          admin: {
            description: 'Tùy chọn: nhập tọa độ để chính xác hơn. Ví dụ: 103.8448',
            step: 0.0001,
          },
        },
        {
          name: 'mapZoom',
          type: 'number',
          label: 'Mức zoom',
          defaultValue: 13,
          admin: {
            description: 'Mức zoom bản đồ (1-20). Mặc định: 13',
          },
        },
        // Giữ mapImage cũ làm fallback
        {
          name: 'mapImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Hình bản đồ (fallback)',
          admin: {
            description: 'Hình bản đồ dự phòng khi không có Google Maps API key',
          },
        },
      ],
    },

    // === GETTING THERE (Accordion) ===
    {
      type: 'collapsible',
      label: 'Hướng dẫn đến (Getting There)',
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'gettingThereTitle',
          type: 'text',
          label: 'Tiêu đề section',
          defaultValue: 'Getting there',
        },
        {
          name: 'gettingThereItems',
          type: 'array',
          label: 'Các mục hướng dẫn',
          labels: {
            singular: 'Mục hướng dẫn',
            plural: 'Các mục hướng dẫn',
          },
          admin: {
            description: 'Mỗi mục sẽ hiển thị dạng accordion (click mở/đóng)',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Tiêu đề',
              required: true,
              admin: {
                description: 'Ví dụ: Parking, Road direction, Train...',
              },
            },
            {
              name: 'content',
              type: 'textarea',
              label: 'Nội dung chi tiết',
              admin: {
                description: 'Nội dung hiển thị khi mở accordion',
              },
            },
          ],
        },
      ],
    },

    // === CTA BUTTON (giữ nguyên) ===
    {
      type: 'collapsible',
      label: 'Nút CTA',
      admin: { initCollapsed: true },
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

    // Typography
    ...typographyFields,
    // Background Styles
    ...blockStyleFields,
  ],
}
