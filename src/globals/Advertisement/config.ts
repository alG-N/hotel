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
          label: 'Top Banner',
          description: 'Banner quảng cáo dạng dải mỏng, hiển thị phía trên Header',
          fields: [
            {
              name: 'topBannerEnabled',
              type: 'checkbox',
              label: 'Bật Top Banner',
              defaultValue: false,
            },
            {
              name: 'topBannerText',
              type: 'text',
              label: 'Nội dung',
              admin: {
                condition: (data) => data?.topBannerEnabled,
                description: 'Ví dụ: "Book now and get 20% off your first stay!"',
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
              admin: {
                condition: (data) => data?.topBannerEnabled,
                description: 'Ví dụ: "Book Now", "Learn More"',
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
          label: 'Popup Offer',
          description: 'Popup hiển thị khi người dùng vào trang (sau delay)',
          fields: [
            {
              name: 'popupEnabled',
              type: 'checkbox',
              label: 'Bật Popup Offer',
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
              admin: {
                condition: (data) => data?.popupEnabled,
                description: 'Ví dụ: "Exclusive Offer"',
              },
            },
            {
              name: 'popupDescription',
              type: 'textarea',
              label: 'Mô tả',
              admin: {
                condition: (data) => data?.popupEnabled,
                description: 'Nội dung chi tiết của popup',
              },
            },
            {
              name: 'popupCtaText',
              type: 'text',
              label: 'Text nút CTA',
              defaultValue: 'View Offer',
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
          label: 'Floating Bar',
          description: 'Thanh quảng cáo nổi ở dưới cùng trang',
          fields: [
            {
              name: 'floatingBarEnabled',
              type: 'checkbox',
              label: 'Bật Floating Bar',
              defaultValue: false,
            },
            {
              name: 'floatingBarText',
              type: 'text',
              label: 'Nội dung',
              admin: {
                condition: (data) => data?.floatingBarEnabled,
                description: 'Ví dụ: "Limited time: Spa package from $99"',
              },
            },
            {
              name: 'floatingBarCtaText',
              type: 'text',
              label: 'Text nút CTA',
              defaultValue: 'Book Now',
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
          label: 'Slide-in CTA',
          description: 'Hộp quảng cáo trượt vào từ góc phải khi cuộn trang',
          fields: [
            {
              name: 'slideInEnabled',
              type: 'checkbox',
              label: 'Bật Slide-in CTA',
              defaultValue: false,
            },
            {
              name: 'slideInImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Hình ảnh',
              admin: {
                condition: (data) => data?.slideInEnabled,
                description: 'Hình nhỏ minh họa cho offer',
              },
            },
            {
              name: 'slideInTitle',
              type: 'text',
              label: 'Tiêu đề',
              admin: {
                condition: (data) => data?.slideInEnabled,
                description: 'Ví dụ: "Weekend Getaway"',
              },
            },
            {
              name: 'slideInDescription',
              type: 'text',
              label: 'Mô tả ngắn',
              admin: {
                condition: (data) => data?.slideInEnabled,
                description: 'Ví dụ: "Stay 2 nights, get 1 free"',
              },
            },
            {
              name: 'slideInCtaText',
              type: 'text',
              label: 'Text nút',
              defaultValue: 'Learn More',
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
