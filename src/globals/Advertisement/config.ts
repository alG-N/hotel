import type { GlobalConfig } from 'payload'
import { revalidateAdvertisement } from './hooks/revalidateAdvertisement'

export const Advertisement: GlobalConfig = {
  slug: 'advertisement',
  label: 'Quảng cáo',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Giao diện',
  },
  hooks: {
    afterChange: [revalidateAdvertisement],
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        // =====================
        // TAB 1: TOP BANNER
        // =====================
        {
          label: 'Băng rôn đầu trang',
          description: 'Băng rôn quảng cáo dạng dải mỏng, hiển thị phía trên Header',
          fields: [
            {
              name: 'topBannerEnabled',
              type: 'checkbox',
              label: 'Bật băng rôn đầu trang',
              defaultValue: false,
            },
            {
              name: 'topBannerText',
              type: 'text',
              label: 'Nội dung',
              localized: true,
              admin: {
                condition: (data) => data?.topBannerEnabled,
                description: 'Ví dụ: "Đặt ngay giảm 20% cho lần lưu trú đầu tiên!"',
              },
            },
            {
              name: 'topBannerLink',
              type: 'text',
              label: 'Link khi click',
              admin: {
                condition: (data) => data?.topBannerEnabled,
                description: 'Trang đích khi click vào banner. Ví dụ: /offers',
              },
            },
            {
              name: 'topBannerCtaText',
              type: 'text',
              label: 'Text nút CTA',
              localized: true,
              admin: {
              },
            },
            {
              name: 'topBannerBgColor',
              type: 'text',
              label: 'Màu nền',
              defaultValue: '#1a1a1a',
              admin: {
                condition: (data) => data?.topBannerEnabled,
                description: 'Hex color. Ví dụ: #1a1a1a, #8B6914',
              },
            },
            {
              name: 'topBannerTextColor',
              type: 'text',
              label: 'Màu chữ',
              defaultValue: '#ffffff',
              admin: {
                condition: (data) => data?.topBannerEnabled,
              },
            },
            {
              name: 'topBannerDismissible',
              type: 'checkbox',
              label: 'Cho phép đóng',
              defaultValue: true,
              admin: {
                condition: (data) => data?.topBannerEnabled,
              },
            },
          ],
        },

        // =====================
        // TAB 2: POPUP OFFER
        // =====================
        {
          label: 'Popup khuyến mãi',
          description: 'Popup hiển thị khi người dùng vào trang (sau delay)',
          fields: [
            {
              name: 'popupEnabled',
              type: 'checkbox',
              label: 'Bật Popup khuyến mãi',
              defaultValue: false,
            },
            {
              name: 'popupImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Hình ảnh popup',
              admin: {
                condition: (data) => data?.popupEnabled,
                description: 'Hình ảnh chính cho popup (tỷ lệ ngang hoặc vuông)',
              },
            },
            {
              name: 'popupTitle',
              type: 'text',
              label: 'Tiêu đề',
              localized: true,
              admin: {
              },
            },
            {
              name: 'popupDescription',
              type: 'textarea',
              label: 'Mô tả',
              localized: true,
              admin: {
                condition: (data) => data?.popupEnabled,
                description: 'Nội dung chi tiết của popup',
              },
            },
            {
              name: 'popupCtaText',
              type: 'text',
              label: 'Text nút CTA',
              defaultValue: 'Xem ưu đãi',
              localized: true,
              admin: {
                condition: (data) => data?.popupEnabled,
              },
            },
            {
              name: 'popupCtaLink',
              type: 'text',
              label: 'Link nút CTA',
              defaultValue: '/offers',
              admin: {
                condition: (data) => data?.popupEnabled,
              },
            },
            {
              name: 'popupDelay',
              type: 'number',
              label: 'Delay hiển thị (giây)',
              defaultValue: 3,
              admin: {
                condition: (data) => data?.popupEnabled,
                description: 'Số giây chờ trước khi hiện popup. Mặc định: 3s',
              },
            },
            {
              name: 'popupBgColor',
              type: 'text',
              label: 'Màu nền popup',
              defaultValue: '#ffffff',
              admin: {
                condition: (data) => data?.popupEnabled,
              },
            },
            {
              name: 'popupTextColor',
              type: 'text',
              label: 'Màu chữ popup',
              defaultValue: '#1a1a1a',
              admin: {
                condition: (data) => data?.popupEnabled,
              },
            },
            {
              name: 'popupShowOnce',
              type: 'checkbox',
              label: 'Chỉ hiện 1 lần mỗi session',
              defaultValue: true,
              admin: {
                condition: (data) => data?.popupEnabled,
                description: 'Nếu bật, popup chỉ hiện 1 lần mỗi phiên truy cập',
              },
            },
          ],
        },

        // =====================
        // TAB 3: FLOATING BAR
        // =====================
        {
          label: 'Thanh nổi cuối trang',
          description: 'Thanh quảng cáo nổi ở dưới cùng trang',
          fields: [
            {
              name: 'floatingBarEnabled',
              type: 'checkbox',
              label: 'Bật thanh nổi',
              defaultValue: false,
            },
            {
              name: 'floatingBarText',
              type: 'text',
              label: 'Nội dung',
              localized: true,
              admin: {
                condition: (data) => data?.floatingBarEnabled,
                description: 'Ví dụ: "Giới hạn: Gói Spa từ 99$"',
              },
            },
            {
              name: 'floatingBarCtaText',
              type: 'text',
              label: 'Text nút CTA',
              defaultValue: 'Đặt ngay',
              localized: true,
              admin: {
                condition: (data) => data?.floatingBarEnabled,
              },
            },
            {
              name: 'floatingBarCtaLink',
              type: 'text',
              label: 'Link nút',
              defaultValue: '/booking',
              admin: {
                condition: (data) => data?.floatingBarEnabled,
              },
            },
            {
              name: 'floatingBarBgColor',
              type: 'text',
              label: 'Màu nền',
              defaultValue: '#2a2a28',
              admin: {
                condition: (data) => data?.floatingBarEnabled,
              },
            },
            {
              name: 'floatingBarTextColor',
              type: 'text',
              label: 'Màu chữ',
              defaultValue: '#ffffff',
              admin: {
                condition: (data) => data?.floatingBarEnabled,
              },
            },
            {
              name: 'floatingBarDismissible',
              type: 'checkbox',
              label: 'Cho phép đóng',
              defaultValue: true,
              admin: {
                condition: (data) => data?.floatingBarEnabled,
              },
            },
          ],
        },

        // =====================
        // TAB 4: SLIDE-IN OFFER
        // =====================
        {
          label: 'Hộp trượt góc phải',
          description: 'Hộp quảng cáo trượt vào từ góc phải khi cuộn trang',
          fields: [
            {
              name: 'slideInEnabled',
              type: 'checkbox',
              label: 'Bật hộp trượt',
              defaultValue: false,
            },
            {
              name: 'slideInImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Hình ảnh',
              admin: {
                condition: (data) => data?.slideInEnabled,
                description: 'Hình nhỏ minh họa cho ưu đãi',
              },
            },
            {
              name: 'slideInTitle',
              type: 'text',
              label: 'Tiêu đề',
              localized: true,
              admin: {
                condition: (data) => data?.slideInEnabled,
                description: 'Ví dụ: "Nghỉ cuối tuần"',
              },
            },
            {
              name: 'slideInDescription',
              type: 'text',
              label: 'Mô tả ngắn',
              localized: true,
              admin: {
                condition: (data) => data?.slideInEnabled,
                description: 'Ví dụ: "Ở 2 đêm, tặng 1 đêm"',
              },
            },
            {
              name: 'slideInCtaText',
              type: 'text',
              label: 'Text nút',
              defaultValue: 'Tìm hiểu thêm',
              localized: true,
              admin: {
                condition: (data) => data?.slideInEnabled,
              },
            },
            {
              name: 'slideInCtaLink',
              type: 'text',
              label: 'Link nút',
              defaultValue: '/offers',
              admin: {
                condition: (data) => data?.slideInEnabled,
              },
            },
            {
              name: 'slideInScrollTrigger',
              type: 'number',
              label: 'Trigger khi cuộn (%)',
              defaultValue: 50,
              admin: {
                condition: (data) => data?.slideInEnabled,
                description: 'Hiện khi cuộn bao nhiêu % trang. Mặc định: 50%',
              },
            },
            {
              name: 'slideInBgColor',
              type: 'text',
              label: 'Màu nền',
              defaultValue: '#ffffff',
              admin: {
                condition: (data) => data?.slideInEnabled,
              },
            },
            {
              name: 'slideInTextColor',
              type: 'text',
              label: 'Màu chữ',
              defaultValue: '#1a1a1a',
              admin: {
                condition: (data) => data?.slideInEnabled,
              },
            },
          ],
        },
      ],
    },
  ],
}
