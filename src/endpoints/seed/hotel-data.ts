import type { Payload, PayloadRequest } from 'payload'

/* ─── Shared offers block (Vietnamese) ─── */
const offersBlockVi = {
  blockType: 'offers' as const,
  title: 'Ưu Đãi Độc Quyền, Được Chọn Lọc Kỹ Lưỡng',
  description:
    'Tận hưởng mức giá đặc biệt chỉ từ $89/đêm khi đặt phòng trực tiếp tại The Calanthe. Được chọn lọc dành cho những vị khách trân trọng sự thoải mái, yên bình và giá trị vượt trội.',
  priceHighlight: '$89 / đêm',
  featuresTitle: 'Bao gồm:',
  sectionStyle: 'dark' as const,
  ctaText: 'Đặt Ngay',
  ctaLink: '/booking',
  image: 15,
  imagePosition: 'left' as const,
  features: [
    { feature: 'Bữa sáng miễn phí mỗi ngày' },
    { feature: 'Nhận phòng sớm hoặc trả phòng muộn (tùy tình trạng)' },
    { feature: 'Cam kết giá tốt nhất khi đặt trực tiếp' },
  ],
  enabled: true,
}

/* ─── Shared offers block (English) ─── */
const offersBlockEn = {
  title: 'Exclusive Offers, Thoughtfully Curated',
  description:
    'Enjoy an exclusive special price from $89 per night when you book directly with The Calanthe. Thoughtfully curated for guests who appreciate comfort, calm, and exceptional value.',
  priceHighlight: '$89 per night',
  featuresTitle: "What's Included:",
  ctaText: 'Book Now',
  features: [
    { feature: 'Complimentary daily breakfast' },
    { feature: 'Early check-in or late check-out (subject to availability)' },
    { feature: 'Best rate guaranteed when booking direct' },
  ],
}

/**
 * Seed all hotel data: 6 pages + header & footer globals.
 * Creates Vietnamese (default) first, then patches English locale.
 *
 * Call via POST /next/seed from admin dashboard.
 */
export const seedHotelData = async ({
  payload,
}: {
  payload: Payload
  req: PayloadRequest
}): Promise<void> => {
  payload.logger.info('Seeding hotel data...')

  // ── Helper: resolve media IDs ──────────────────────────────────────
  const existingMedia = await payload.find({
    collection: 'media',
    limit: 100,
    depth: 0,
    pagination: false,
  })
  const mediaIds = new Set(existingMedia.docs.map((m) => m.id))
  const firstMediaId = existingMedia.docs[0]?.id
  const mid = (id: number): any => (mediaIds.has(id) ? id : firstMediaId)
  const mimg = (id: number) => {
    const resolved = mid(id)
    return resolved !== undefined ? [{ image: resolved }] : []
  }
  payload.logger.info(`— Found ${mediaIds.size} existing media records`)

  // ── Step 1: Clear existing pages ───────────────────────────────────
  payload.logger.info('— Clearing existing pages...')
  try {
    await payload.delete({
      collection: 'pages',
      where: {},
      depth: 0,
      context: { disableRevalidate: true },
    })
  } catch {
    payload.logger.warn('Could not clear pages, continuing...')
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 2: Create pages (Vietnamese — default locale)
  // ═══════════════════════════════════════════════════════════════════
  payload.logger.info('— Creating pages (Vietnamese)...')

  // ────────── Page 1: Trang Chính ──────────
  const mainPage = await payload.create({
    collection: 'pages',
    locale: 'vi',
    depth: 0,
    context: { disableRevalidate: true },
    data: {
      title: 'Trang Chính',
      slug: 'home',
      _status: 'published',
      hero: { type: 'none' },
      layout: [
        {
          blockType: 'hero',
          subtitle: 'Chào mừng đến',
          name: 'The Calanthe',
          tagline:
            'Thức dậy trong ánh sáng dịu nhẹ, những chi tiết tinh tế, và cảm giác bình yên được tạo nên cho những du khách hiện đại trân trọng sự cân bằng và vẻ đẹp',
          showCTA: false,
          ctaText: 'Đặt Ngay',
          ctaLink: '/booking',
          height: 'large',
          textPosition: 'center',
          verticalAlign: 'center',
          overlayOpacity: 'medium',
          enableSlideshow: true,
          slideshowSpeed: '5000',
          heroImage: [...mimg(2), ...mimg(3), ...mimg(4), ...mimg(5)],
          enabled: true,
        },
        {
          blockType: 'description',
          title: 'Kỳ Nghỉ Tinh Tế,\u00a0Thiết Kế Chu Đáo',
          leftText:
            'The Calanthe là khách sạn boutique dành cho những du khách trân trọng sự yên bình, thoải mái và thiết kế có chủ đích.',
          ctaText: 'Tìm Hiểu Thêm',
          ctaLink: '/accomi',
          image1: mid(6),
          image2: mid(7),
          rightText:
            'Mỗi không gian được tạo nên để giúp bạn thư giãn và cảm thấy thoải mái. Từ chất liệu mềm mại đến những chi tiết được chọn lọc kỹ lưỡng, The Calanthe cân bằng giữa sự sang trọng hiện đại và bầu không khí ấm áp, thân thiện\u2014để kỳ nghỉ của bạn mang tính cá nhân, không phải giao dịch.',
          enabled: true,
        },
        {
          blockType: 'accommodations-type2',
          title: 'Thiết Kế Xoay Quanh Giấc Nghỉ Của Bạn',
          ctaText: 'Tìm Hiểu Thêm',
          ctaLink: '/accommodations',
          rooms: [
            {
              name: 'Phòng Deluxe',
              description:
                'Lý tưởng cho kỳ nghỉ ngắn ngày và khách công tác coi trọng sự đơn giản và chất lượng.',
              buttonText: 'Đặt ngay',
              buttonLink: '/booking',
              features: [
                { icon: 'bed', text: 'Giường queen hoặc king-size với bộ ga cao cấp.' },
                { icon: 'sofa', text: 'Bàn làm việc tiện lợi và ghế ngồi thoải mái.' },
                { icon: 'bath', text: 'Phòng tắm hiện đại với vòi sen đứng.' },
              ],
              images: mimg(9),
            },
            {
              name: 'Phòng Premier',
              description:
                'Thiết kế cho kỳ nghỉ dài hơn hoặc khách muốn nhiều không gian thư giãn.',
              buttonText: 'Đặt ngay',
              buttonLink: '/booking',
              features: [
                { icon: 'bed', text: 'Khu vực ngủ rộng rãi với ghế nghỉ' },
                { icon: 'sofa', text: 'Cửa sổ lớn đón ánh sáng tự nhiên' },
                { icon: 'bath', text: 'Tiện nghi phòng tắm nâng cấp' },
              ],
              images: mimg(10),
            },
            {
              name: 'Junior Suite',
              description:
                'Cung cấp khu vực sinh hoạt và nghỉ ngơi riêng biệt, lý tưởng cho cặp đôi hoặc lưu trú dài ngày.',
              buttonText: 'Đặt ngay',
              buttonLink: '/booking',
              features: [
                { icon: 'bed', text: 'Giường king-size với tiện nghi thoải mái nâng cao' },
                { icon: 'sofa', text: 'Khu vực ngồi hoặc phòng khách riêng' },
                { icon: 'bath', text: 'Tiện nghi tắm cao cấp và hoàn thiện tinh tế' },
              ],
              images: mimg(11),
            },
          ],
          enabled: true,
        },
        {
          blockType: 'our-services',
          sectionTitle: 'Ẩm Thực Bổ Sung Cho Kỳ Nghỉ',
          sectionDescription:
            'Ẩm thực tại The Calanthe được thiết kế để bổ sung cho kỳ nghỉ của bạn. Mọi yếu tố đều được chọn lọc kỹ lưỡng để mang lại cảm giác thư thái, cân bằng và không vội vã.',
          columns: '3',
          services: [
            {
              serviceImage: mid(12),
              serviceName: 'Không Gian Yên Bình',
              serviceDescription:
                'Không gian nhà hàng ấm áp, yên tĩnh và được thiết kế có chủ đích. Ánh sáng dịu, chất liệu tự nhiên và bố cục mở tạo nên bầu không khí đón tiếp vào bất kỳ thời điểm nào trong ngày.',
            },
            {
              serviceImage: mid(13),
              serviceName: 'Thức Uống Cân Bằng',
              serviceDescription:
                'Menu thức uống được chọn lọc kỹ lưỡng. Từ cà phê pha mới và trà thảo mộc đến nước ép tươi và cocktail nhẹ, mỗi lựa chọn đều mượt mà và dễ chịu.',
            },
            {
              serviceImage: mid(14),
              serviceName: 'Ẩm Thực Chu Đáo',
              serviceDescription:
                'Ẩm thực The Calanthe tôn vinh sự đơn giản và chất lượng. Nguyên liệu tươi, chế biến tinh tế và hương vị cân bằng hòa quyện trong những món ăn quen thuộc nhưng đầy suy nghĩ.',
            },
          ],
          enabled: true,
        },
        {
          blockType: 'photo-gallery',
          title: 'Trải Nghiệm The Calanthe Qua Từng Chi Tiết',
          layout: 'bento',
          loadMoreText: 'Xem thêm',
          images: [
            ...mimg(7),
            ...mimg(6),
            ...mimg(11),
            ...mimg(12),
            ...mimg(14),
            ...mimg(12),
          ],
          enabled: true,
        },
        { ...offersBlockVi, image: mid(15) },
      ],
    },
  })

  // ────────── Page 2: Phòng Nghỉ ──────────
  const accommodationsPage = await payload.create({
    collection: 'pages',
    locale: 'vi',
    depth: 0,
    context: { disableRevalidate: true },
    data: {
      title: 'Phòng Nghỉ',
      slug: 'accommodations',
      _status: 'published',
      hero: { type: 'none' },
      layout: [
        {
          blockType: 'hero',
          subtitle: 'Trang chủ / Phòng Nghỉ',
          name: 'Phòng Nghỉ',
          tagline:
            'Phòng nghỉ của chúng tôi được thiết kế với một mục đích duy nhất: giấc nghỉ tuyệt vời.',
          showCTA: false,
          ctaText: 'Đặt Ngay',
          ctaLink: '/booking',
          height: 'small',
          textPosition: 'center',
          verticalAlign: 'center',
          overlayOpacity: 'medium',
          enableSlideshow: true,
          slideshowSpeed: '5000',
          heroImage: mimg(8),
          enabled: true,
        },
        {
          blockType: 'rooms-grid',
          enabledCategories: ['regular', 'deluxe', 'family', 'suites'],
          rooms: [
            {
              category: 'regular',
              name: 'Phòng Deluxe',
              subtitle:
                'Lý tưởng cho kỳ nghỉ ngắn ngày và khách công tác coi trọng sự đơn giản và chất lượng.',
              bookLink: '/booking',
              amenities: [
                { icon: 'bed', text: 'Giường queen hoặc king-size với bộ ga cao cấp.' },
                { icon: 'sofa', text: 'Bàn làm việc tiện lợi và ghế ngồi thoải mái.' },
                { icon: 'bath', text: 'Phòng tắm hiện đại với vòi sen đứng.' },
              ],
              images: mimg(10),
            },
            {
              category: 'deluxe',
              name: 'Phòng Premier',
              subtitle:
                'Thiết kế cho kỳ nghỉ dài hơn hoặc khách muốn nhiều không gian thư giãn.',
              bookLink: '/booking',
              amenities: [
                { icon: 'bed', text: 'Khu vực ngủ rộng rãi với ghế nghỉ' },
                { icon: 'sofa', text: 'Cửa sổ lớn đón ánh sáng tự nhiên' },
                { icon: 'bath', text: 'Tiện nghi phòng tắm nâng cấp' },
              ],
              images: mimg(11),
            },
            {
              category: 'family',
              name: 'Junior Suite',
              subtitle:
                'Cung cấp khu vực sinh hoạt và nghỉ ngơi riêng biệt, lý tưởng cho cặp đôi hoặc lưu trú dài ngày.',
              bookLink: '/booking',
              amenities: [
                { icon: 'bed', text: 'Giường king-size với tiện nghi thoải mái nâng cao' },
                { icon: 'sofa', text: 'Khu vực ngồi hoặc phòng khách riêng' },
                { icon: 'bath', text: 'Tiện nghi tắm cao cấp và hoàn thiện tinh tế' },
              ],
              images: mimg(9),
            },
            {
              category: 'suites',
              name: 'Cozy Retreat Suite',
              subtitle:
                'Khu vực sinh hoạt và nghỉ ngơi riêng biệt, lý tưởng cho cặp đôi hoặc lưu trú dài ngày.',
              bookLink: '/booking',
              amenities: [
                { icon: 'bed', text: 'Giường king-size với tiện nghi thoải mái nâng cao' },
                { icon: 'sofa', text: 'Khu vực ngồi hoặc phòng khách riêng' },
                { icon: 'bath', text: 'Tiện nghi tắm cao cấp và hoàn thiện tinh tế' },
              ],
              images: mimg(8),
            },
            {
              category: 'suites',
              name: 'Charming Junior Suite',
              subtitle:
                'Khu vực sinh hoạt và nghỉ ngơi riêng biệt, lý tưởng cho cặp đôi hoặc lưu trú dài ngày.',
              bookLink: '/booking',
              amenities: [
                { icon: 'bed', text: 'Giường king-size với tiện nghi thoải mái nâng cao' },
                { icon: 'sofa', text: 'Khu vực ngồi hoặc phòng khách riêng' },
                { icon: 'bath', text: 'Tiện nghi tắm cao cấp và hoàn thiện tinh tế' },
              ],
              images: mimg(10),
            },
          ],
          enabled: true,
        },
        { ...offersBlockVi, image: mid(15) },
      ],
    },
  })

  // ────────── Page 3: Nhà Hàng & Quầy Bar ──────────
  const restaurantsPage = await payload.create({
    collection: 'pages',
    locale: 'vi',
    depth: 0,
    context: { disableRevalidate: true },
    data: {
      title: 'Nhà Hàng & Quầy Bar',
      slug: 'restaurants',
      _status: 'published',
      hero: { type: 'none' },
      layout: [
        {
          blockType: 'hero',
          subtitle: 'Trang chủ / Nhà Hàng & Quầy Bar',
          name: 'Nhà Hàng & Quầy Bar',
          tagline:
            'Ẩm thực tại The Calanthe được thiết kế để bổ sung cho kỳ nghỉ của bạn. Mọi yếu tố đều được chọn lọc kỹ lưỡng để mang lại cảm giác thư thái, cân bằng và không vội vã.',
          showCTA: false,
          ctaText: 'Đặt Ngay',
          ctaLink: '/booking',
          height: 'small',
          textPosition: 'center',
          verticalAlign: 'center',
          overlayOpacity: 'medium',
          enableSlideshow: true,
          slideshowSpeed: '5000',
          heroImage: mimg(16),
          enabled: true,
        },
        {
          blockType: 'the-space',
          sectionTitle: 'Không Gian',
          sectionDescription:
            'Ẩm thực tại The Calanthe được thiết kế để bổ sung cho kỳ nghỉ của bạn.',
          stats: [
            {
              icon: 'grid',
              value: '120 m\u00b2',
              description:
                'Tổng diện tích nhà hàng và quầy bar trong nhà, được thiết kế cho sự lưu thông thoải mái và sự mở rộng thị giác.',
            },
            {
              icon: 'zones',
              value: '48 Chỗ ngồi',
              description:
                'Sự kết hợp cân bằng giữa bàn riêng tư và chỗ ngồi chung thoải mái, đảm bảo sự riêng tư mà không bị cô lập.',
            },
            {
              icon: 'seats',
              value: '3 Khu Vực Riêng Biệt',
              description:
                'Khu vực ăn uống, quầy bar và ghế nghỉ\u2014mỗi nơi có bầu không khí riêng, hòa quyện tự nhiên suốt cả ngày.',
            },
          ],
          images: [...mimg(17), ...mimg(18), ...mimg(19)],
          enabled: true,
        },
        {
          blockType: 'food-drink',
          title: 'Ẩm Thực & Thức Uống',
          featuredImage: mid(20),
          featuredTitle: 'Thiên Đường Yên Bình',
          featuredDescription:
            'Trải nghiệm hương vị thanh bình của Thiên Đường Yên Bình, một món ăn kết hợp thảo mộc tinh tế với rau củ tươi theo mùa, tưới nhẹ sốt chanh. Món ăn này được thiết kế để gợi lên cảm giác yên bình và thanh thản, hoàn hảo cho một bữa ăn thư giãn.',
          sideItems: [
            {
              image: mid(21),
              title: 'Gourmet Suite',
              description:
                'Lựa chọn hoàn hảo cho kỳ nghỉ ngắn và chuyên gia tìm kiếm sự thoải mái và sang trọng',
            },
            {
              image: mid(22),
              title: 'Luxury Haven',
              description:
                'Lựa chọn tuyệt vời cho chuyến thăm ngắn và khách doanh nhân trân trọng sự đơn giản và tiêu chuẩn cao.',
            },
            {
              image: mid(23),
              title: 'Opulent Retreat',
              description:
                'Điểm đến lý tưởng cho chuyến đi ngắn và khách công tác ưu tiên sự tiện lợi và chất lượng.',
            },
          ],
          enabled: true,
        },
        {
          blockType: 'special-offers',
          sectionTitle: 'Ưu Đãi Đặc Biệt',
          columns: '3',
          showNavigation: true,
          offers: [
            {
              image: mid(23),
              title: 'Gourmet Suite',
              description:
                'Lựa chọn hoàn hảo cho kỳ nghỉ ngắn và chuyên gia tìm kiếm sự thoải mái và sang trọng.',
              ctaText: 'Nhận Ưu Đãi',
              ctaLink: '/offers',
            },
            {
              image: mid(22),
              title: 'Luxury Haven',
              description:
                'Lựa chọn tuyệt vời cho chuyến thăm ngắn và khách doanh nhân trân trọng sự đơn giản và tiêu chuẩn cao.',
              ctaText: 'Nhận Ưu Đãi',
              ctaLink: '/offers',
            },
            {
              image: mid(21),
              title: 'Opulent Retreat',
              description:
                'Điểm đến lý tưởng cho chuyến đi ngắn và khách công tác ưu tiên sự tiện lợi và chất lượng.',
              ctaText: 'Nhận Ưu Đãi',
              ctaLink: '/offers',
            },
          ],
          enabled: true,
        },
        { ...offersBlockVi, image: mid(15) },
      ],
    },
  })

  // ────────── Page 4: Thư Viện Ảnh ──────────
  const galleryPage = await payload.create({
    collection: 'pages',
    locale: 'vi',
    depth: 0,
    context: { disableRevalidate: true },
    data: {
      title: 'Thư Viện Ảnh',
      slug: 'gallery',
      _status: 'published',
      hero: { type: 'none' },
      layout: [
        {
          blockType: 'hero',
          subtitle: 'Trang chủ / Thư Viện Ảnh',
          name: 'Thư Viện Ảnh',
          tagline:
            'Thư viện ảnh mang đến cuộc hành trình thị giác qua các không gian và bầu không khí của The Calanthe. Mỗi hình ảnh phản ánh sự cân bằng giữa thiết kế, sự thoải mái và bình yên',
          showCTA: false,
          ctaText: 'Đặt Ngay',
          ctaLink: '/booking',
          height: 'small',
          textPosition: 'center',
          verticalAlign: 'center',
          overlayOpacity: 'medium',
          enableSlideshow: true,
          slideshowSpeed: '5000',
          heroImage: mimg(24),
          enabled: true,
        },
        {
          blockType: 'photo-gallery',
          layout: 'magazine',
          loadMoreText: 'Xem thêm',
          images: [
            ...mimg(27),
            ...mimg(26),
            ...mimg(25),
            ...mimg(24),
            ...mimg(22),
            ...mimg(17),
            ...mimg(14),
            ...mimg(24),
            ...mimg(28),
          ],
          enabled: true,
        },
        { ...offersBlockVi, image: mid(15) },
      ],
    },
  })

  // ────────── Page 5: Câu Chuyện Của Chúng Tôi ──────────
  const ourStoryPage = await payload.create({
    collection: 'pages',
    locale: 'vi',
    depth: 0,
    context: { disableRevalidate: true },
    data: {
      title: 'Câu Chuyện Của Chúng Tôi',
      slug: 'our-story',
      _status: 'published',
      hero: { type: 'none' },
      layout: [
        {
          blockType: 'hero',
          subtitle: 'Trang chủ / Câu Chuyện',
          name: 'Câu Chuyện Của Chúng Tôi',
          tagline:
            'Thư viện ảnh mang đến cuộc hành trình thị giác qua các không gian và bầu không khí của The Calanthe. Mỗi hình ảnh phản ánh sự cân bằng giữa thiết kế, sự thoải mái và bình yên.',
          showCTA: false,
          ctaText: 'Đặt Ngay',
          ctaLink: '/booking',
          height: 'small',
          textPosition: 'center',
          verticalAlign: 'center',
          overlayOpacity: 'medium',
          enableSlideshow: true,
          slideshowSpeed: '5000',
          heroImage: mimg(25),
          enabled: true,
        },
        {
          blockType: 'description-type2',
          title: 'Tại Sao The Calanthe\u00a0Tồn Tại?',
          paragraph1:
            'The Calanthe được tạo ra để đáp ứng nhu cầu ngày càng tăng về những kỳ nghỉ yên tĩnh hơn, có chủ đích hơn. Khi du lịch trở nên nhanh hơn và mang tính giao dịch hơn, chúng tôi nhận thấy sự thoải mái, yên bình và kết nối con người thường bị bỏ qua.',
          paragraph2:
            'Chúng tôi tồn tại để mang đến một lựa chọn thay thế\u2014nơi khách có thể thư giãn, cảm thấy thoải mái và trải nghiệm sự hiếu khách không áp lực hay thừa thãi. The Calanthe không phải là làm nhiều hơn. Mà là làm điều quan trọng, tốt hơn.',
          imageRight1: mid(27),
          imageRight2: mid(28),
          enabled: true,
        },
        {
          blockType: 'vision',
          mainTitle: 'Định Nghĩa Lại Sự Thoải Mái\u00a0Qua Sự Đơn Giản',
          mainDescription:
            'Tầm nhìn của chúng tôi là trở thành điểm đến cho những du khách trân trọng sự rõ ràng, cân bằng và thiết kế có ý nghĩa. Chúng tôi hướng đến việc định nghĩa lại sự thoải mái\u2014không phải xa hoa để phô trương, mà là trải nghiệm thực sự hỗ trợ nghỉ ngơi và sức khỏe.',
          cards: [
            {
              icon: 'eye',
              style: 'dark',
              title: 'Tầm Nhìn',
              description:
                'Chúng tôi hướng đến việc định nghĩa lại sự thoải mái\u2014không phải xa hoa để phô trương, mà là trải nghiệm thực sự hỗ trợ nghỉ ngơi và sức khỏe.',
            },
            {
              icon: 'target',
              style: 'light',
              title: 'Mục Tiêu',
              description:
                'Tạo ra không gian tự nhiên và dễ dàng. Cung cấp dịch vụ chu đáo, nhất quán. Xây dựng trải nghiệm khách sạn mang tính cá nhân, không phải chung chung.',
            },
          ],
          enabled: true,
        },
        {
          blockType: 'content-image',
          imagePosition: 'right',
          showBorder: true,
          title: 'Trải Nghiệm Mang Tính\u00a0Cá Nhân Và Lâu Dài',
          description:
            'Tại The Calanthe, thành công được đo bằng cảm nhận của khách, không phải bằng những gì được thêm vào. Chúng tôi tập trung vào kết quả quan trọng.',
          highlightSection: {
            title: 'Những gì chúng tôi đạt được',
            items: [
              { text: 'Môi trường nghỉ ngơi hỗ trợ giấc ngủ tốt hơn' },
              { text: 'Kỳ nghỉ liền mạch thông qua thiết kế và dịch vụ trực giác' },
              { text: 'Cảm giác bình yên mà khách mang theo sau khi trả phòng' },
            ],
          },
          image: mid(28),
          enabled: true,
        },
        {
          blockType: 'designed',
          title: 'Thiết Kế Có Chủ Đích',
          description:
            'Các tính năng của The Calanthe không được thêm vào để gây ấn tượng\u2014chúng được thiết kế với mục đích.',
          features: [
            {
              icon: 'book',
              title: 'Phòng Thiết Kế Chu Đáo',
              description: 'Mỗi phòng được lên kế hoạch cẩn thận để hỗ trợ nghỉ ngơi và riêng tư.',
            },
            {
              icon: 'smile',
              title: 'Bố Cục Lấy Con Người Làm Trung Tâm',
              description: 'Không gian được thiết kế xoay quanh cách con người di chuyển và sử dụng.',
            },
            {
              icon: 'volume-off',
              title: 'Sự Thoải Mái Yên Tĩnh & Kiểm Soát Âm Thanh',
              description: 'Các yếu tố cách âm được tích hợp xuyên suốt khách sạn.',
            },
            {
              icon: 'utensils',
              title: 'Trải Nghiệm Ẩm Thực Bình Yên',
              description:
                'Nhà hàng và quầy bar của chúng tôi được thiết kế cho những khoảnh khắc không vội vã.',
            },
            {
              icon: 'palette',
              title: 'Ngôn Ngữ Thiết Kế Nhất Quán',
              description: 'Mọi chi tiết tuân theo phương pháp thiết kế thống nhất.',
            },
            {
              icon: 'accessibility',
              title: 'Không Gian Dễ Tiếp Cận & Hòa Nhập',
              description: 'Khả năng tiếp cận được cân nhắc từ đầu, không phải bổ sung sau.',
            },
          ],
          enabled: true,
        },
        {
          blockType: 'collaboration',
          title: 'Hợp Tác Với\u00a0Những Nhà Sáng Tạo Cùng Chí Hướng',
          description:
            'Chúng tôi hợp tác với những đối tác chia sẻ giá trị về chất lượng, trách nhiệm và thiết kế chu đáo.',
          partners: [{ name: 'a', logo: mid(32) }],
          enabled: true,
        },
      ],
    },
  })

  // ────────── Page 6: Liên Hệ & Vị Trí ──────────
  const contactPage = await payload.create({
    collection: 'pages',
    locale: 'vi',
    depth: 0,
    context: { disableRevalidate: true },
    data: {
      title: 'Liên Hệ & Vị Trí',
      slug: 'co',
      _status: 'published',
      hero: { type: 'none' },
      layout: [
        {
          blockType: 'hero',
          subtitle: 'Trang chủ / Liên Hệ & Vị Trí',
          name: 'Liên Hệ & Vị Trí',
          tagline:
            'Thư viện ảnh mang đến cuộc hành trình thị giác qua các không gian và bầu không khí của The Calanthe. Mỗi hình ảnh phản ánh sự cân bằng giữa thiết kế, sự thoải mái và bình yên',
          showCTA: false,
          ctaText: 'Đặt Ngay',
          ctaLink: '/booking',
          height: 'small',
          textPosition: 'center',
          verticalAlign: 'center',
          overlayOpacity: 'medium',
          enableSlideshow: true,
          slideshowSpeed: '5000',
          heroImage: mimg(30),
          enabled: true,
        },
        {
          blockType: 'location',
          address1Label: 'Địa chỉ 1',
          address1: '12 Anchor Road, Sai Kung',
          address2Label: 'Địa chỉ 2',
          address2: '8 Seashell Drive, Lantau Island',
          hotlineLabel: 'Đường dây nóng',
          hotline: '+84 777 4340',
          emailLabel: 'Email',
          email: 'Calanthehotel@gmail.com',
          ctaText: 'Liên Hệ',
          ctaLink: '/contact',
          mapImage: mid(31),
          enabled: true,
        },
        { ...offersBlockVi, image: mid(15) },
      ],
    },
  })

  payload.logger.info(
    `— Created 6 pages (vi): Main(${mainPage.id}), Accommodations(${accommodationsPage.id}), Restaurants(${restaurantsPage.id}), Gallery(${galleryPage.id}), Our Story(${ourStoryPage.id}), Contact(${contactPage.id})`,
  )

  // ═══════════════════════════════════════════════════════════════════
  // STEP 3: Patch English locale for all pages
  // ═══════════════════════════════════════════════════════════════════
  payload.logger.info('— Patching English locale for all pages...')

  const updateEn = async (id: number, data: Record<string, any>) => {
    await payload.update({
      collection: 'pages',
      id,
      locale: 'en',
      depth: 0,
      context: { disableRevalidate: true },
      data,
    })
  }

  // ──── Page 1 English: Main ────
  await updateEn(mainPage.id, {
    title: 'Main',
    layout: [
      {
        blockType: 'hero',
        subtitle: 'Welcome to',
        name: 'The Calanthe',
        tagline:
          'Wake up to soft light, thoughtful details, and a sense of calm crafted for modern travelers who value balance and beauty',
        ctaText: 'Book Now',
      },
      {
        blockType: 'description',
        title: 'A Refined Stay,\u00a0Thoughtfully Designed',
        leftText:
          'The Calanthe is a boutique hotel created for travelers who value calm, comfort, and intentional design.',
        ctaText: 'More About Us',
        rightText:
          'Every space is shaped to help you slow down and feel at ease. From soft materials to carefully curated details, The Calanthe balances modern elegance with a warm, welcoming atmosphere\u2014so your stay feels personal, not transactional.',
      },
      {
        blockType: 'accommodations-type2',
        title: 'Designed Around How You Rest',
        ctaText: 'More About Us',
        rooms: [
          {
            name: 'Deluxe Room',
            description:
              'Ideal for short stays and business travelers who value simplicity and quality.',
            buttonText: 'Book now',
            features: [
              { icon: 'bed', text: 'Queen or king-size bed with premium bedding.' },
              { icon: 'sofa', text: 'Work-friendly desk and comfortable seating.' },
              { icon: 'bath', text: 'Modern bathroom with walk-in shower.' },
            ],
          },
          {
            name: 'Premier Room',
            description:
              'Designed for longer stays or guests who enjoy extra room to relax.',
            buttonText: 'Book now',
            features: [
              { icon: 'bed', text: 'Spacious sleeping area with lounge seating' },
              { icon: 'sofa', text: 'Large windows for natural daylight' },
              { icon: 'bath', text: 'Upgraded bathroom amenities' },
            ],
          },
          {
            name: 'Junior Suite',
            description:
              'Offered clearly defined living and resting zones, ideal for couples or extended stays.',
            buttonText: 'Book now',
            features: [
              { icon: 'bed', text: 'King-size bed with enhanced comfort features' },
              { icon: 'sofa', text: 'Separate seating or living area' },
              { icon: 'bath', text: 'Premium bath amenities and refined finishes' },
            ],
          },
        ],
      },
      {
        blockType: 'our-services',
        sectionTitle: 'Dining That Complements Your Stay',
        sectionDescription:
          'Dining at The Calanthe is designed to complement your stay. Every element is thoughtfully curated to feel relaxed, balanced, and unhurried.',
        services: [
          {
            serviceName: 'Calm Space',
            serviceDescription:
              'The restaurant space is warm, quiet, and intentionally designed. Soft lighting, natural materials, and an open layout create an atmosphere that feels welcoming at any time of day.',
          },
          {
            serviceName: 'Balanced Drinks',
            serviceDescription:
              'Our drinks menu is carefully selected with comfort in mind. From freshly brewed coffee and herbal teas to refreshing juices and light cocktails, each option is crafted to be smooth and approachable.',
          },
          {
            serviceName: 'Thoughtful Foods',
            serviceDescription:
              'The Calanthe\u2019s cuisine celebrates simplicity and quality. Fresh ingredients, refined preparation, and balanced flavors come together in dishes that feel familiar yet considered.',
          },
        ],
      },
      {
        blockType: 'photo-gallery',
        title: 'Experience The Calanthe Through Every Detail',
        loadMoreText: 'Load more',
      },
      { ...offersBlockEn },
    ],
  })

  // ──── Page 2 English: Accommodations ────
  await updateEn(accommodationsPage.id, {
    title: 'Accommodations',
    layout: [
      {
        blockType: 'hero',
        subtitle: 'Home / Accommodations',
        name: 'Accommodations',
        tagline: 'Our accommodations are designed with one purpose: exceptional rest.',
        ctaText: 'Book Now',
      },
      {
        blockType: 'rooms-grid',
        rooms: [
          {
            name: 'Deluxe Room',
            subtitle:
              'Ideal for short stays and business travelers who value simplicity and quality.',
            amenities: [
              { icon: 'bed', text: 'Queen or king-size bed with premium bedding.' },
              { icon: 'sofa', text: 'Work-friendly desk and comfortable seating.' },
              { icon: 'bath', text: 'Modern bathroom with walk-in shower.' },
            ],
          },
          {
            name: 'Premier Room',
            subtitle:
              'Designed for longer stays or guests who enjoy extra room to relax.',
            amenities: [
              { icon: 'bed', text: 'Spacious sleeping area with lounge seating' },
              { icon: 'sofa', text: 'Large windows for natural daylight' },
              { icon: 'bath', text: 'Upgraded bathroom amenities' },
            ],
          },
          {
            name: 'Junior Suite',
            subtitle:
              'Offered clearly defined living and resting zones, ideal for couples or extended stays.',
            amenities: [
              { icon: 'bed', text: 'King-size bed with enhanced comfort features' },
              { icon: 'sofa', text: 'Separate seating or living area' },
              { icon: 'bath', text: 'Premium bath amenities and refined finishes' },
            ],
          },
          {
            name: 'Cozy Retreat Suite',
            subtitle:
              'Offered clearly defined living and resting zones, ideal for couples or extended stays.',
            amenities: [
              { icon: 'bed', text: 'King-size bed with enhanced comfort features' },
              { icon: 'sofa', text: 'Separate seating or living area' },
              { icon: 'bath', text: 'Premium bath amenities and refined finishes' },
            ],
          },
          {
            name: 'Charming Junior Suite',
            subtitle:
              'Offered clearly defined living and resting zones, ideal for couples or extended stays.',
            amenities: [
              { icon: 'bed', text: 'King-size bed with enhanced comfort features' },
              { icon: 'sofa', text: 'Separate seating or living area' },
              { icon: 'bath', text: 'Premium bath amenities and refined finishes' },
            ],
          },
        ],
      },
      { ...offersBlockEn },
    ],
  })

  // ──── Page 3 English: Restaurants & Bars ────
  await updateEn(restaurantsPage.id, {
    title: 'Restaurants & Bars',
    layout: [
      {
        blockType: 'hero',
        subtitle: 'Home / Restaurants & Bars',
        name: 'Restaurants & Bars',
        tagline:
          'Dining at The Calanthe is designed to complement your stay. Every element is thoughtfully curated to feel relaxed, balanced, and unhurried.',
        ctaText: 'Book Now',
      },
      {
        blockType: 'the-space',
        sectionTitle: 'The Space',
        sectionDescription: 'Dining at The Calanthe is designed to complement your stay.',
        stats: [
          {
            icon: 'grid',
            value: '120 m\u00b2',
            description:
              'Total indoor dining and bar area, designed for comfortable circulation and visual openness.',
          },
          {
            icon: 'zones',
            value: '48 Seats',
            description:
              'A balanced mix of intimate tables and relaxed communal seating, ensuring privacy without isolation.',
          },
          {
            icon: 'seats',
            value: '3 Distinct Zones',
            description:
              'Dining area, bar counter, and lounge seating\u2014each with its own atmosphere, flowing naturally throughout the day.',
          },
        ],
      },
      {
        blockType: 'food-drink',
        title: 'Foods & Drinks',
        featuredTitle: 'Tranquil Haven',
        featuredDescription:
          'Experience the serene flavors of Tranquil Haven, a dish that combines delicate herbs with fresh, seasonal vegetables, all drizzled with a light citrus vinaigrette. This refreshing plate is designed to evoke a sense of calm and peace, perfect for a relaxing meal.',
        sideItems: [
          {
            title: 'Gourmet Suite',
            description:
              'A perfect choice for quick getaways and professionals seeking comfort and elegance',
          },
          {
            title: 'Luxury Haven',
            description:
              'An excellent option for brief visits and business guests who appreciate straightforwardness and high standards.',
          },
          {
            title: 'Opulent Retreat',
            description:
              'The ideal spot for short trips and corporate travelers who prioritize ease and quality.',
          },
        ],
      },
      {
        blockType: 'special-offers',
        sectionTitle: 'Special Offers',
        offers: [
          {
            title: 'Gourmet Suite',
            description:
              'A perfect choice for quick getaways and professionals seeking comfort and elegance.',
            ctaText: 'Get The Offer',
          },
          {
            title: 'Luxury Haven',
            description:
              'An excellent option for brief visits and business guests who appreciate straightforwardness and high standards.',
            ctaText: 'Get The Offer',
          },
          {
            title: 'Opulent Retreat',
            description:
              'The ideal spot for short trips and corporate travelers who prioritize ease and quality.',
            ctaText: 'Get The Offer',
          },
        ],
      },
      { ...offersBlockEn },
    ],
  })

  // ──── Page 4 English: Gallery ────
  await updateEn(galleryPage.id, {
    title: 'Gallery',
    layout: [
      {
        blockType: 'hero',
        subtitle: 'Home / Gallery',
        name: 'Gallery',
        tagline:
          'The Gallery offers a visual journey through the spaces and atmosphere of The Calanthe. Each image reflects the balance of design, comfort, and calm',
        ctaText: 'Book Now',
      },
      {
        blockType: 'photo-gallery',
        loadMoreText: 'Load more',
      },
      { ...offersBlockEn },
    ],
  })

  // ──── Page 5 English: Our Story ────
  await updateEn(ourStoryPage.id, {
    title: 'Our Story',
    layout: [
      {
        blockType: 'hero',
        subtitle: 'Home / Story',
        name: 'Our Story',
        tagline:
          'The Gallery offers a visual journey through the spaces and atmosphere of The Calanthe. Each image reflects the balance of design, comfort, and calm that defines every stay.',
        ctaText: 'Book Now',
      },
      {
        blockType: 'description-type2',
        title: 'Why The Calanthe\u00a0Exists?',
        paragraph1:
          'The Calanthe was created to answer a growing need for quieter, more intentional stays. As travel became faster and more transactional, we saw how often comfort, calm, and human connection were overlooked.',
        paragraph2:
          'We exist to offer an alternative\u2014one where guests can slow down, feel at ease, and experience hospitality without pressure or excess. The Calanthe is not about doing more. It is about doing what matters, better.',
      },
      {
        blockType: 'vision',
        mainTitle: 'Redefining Comfort\u00a0Through Simplicity',
        mainDescription:
          'Our vision is to become a destination for travelers who value clarity, balance, and meaningful design. We aim to redefine comfort\u2014not as luxury for display, but as an experience that genuinely supports rest and well-being.',
        cards: [
          {
            icon: 'eye',
            title: 'Our Vision',
            description:
              'We aim to redefine comfort\u2014not as luxury for display, but as an experience that genuinely supports rest and well-being.',
          },
          {
            icon: 'target',
            title: 'Our Goal',
            description:
              'Create spaces that feel natural and effortless. Deliver consistent, thoughtful service. Build a hotel experience that feels personal, not generic',
          },
        ],
      },
      {
        blockType: 'content-image',
        title: 'Experiences That Feel\u00a0Personal and Lasting',
        description:
          'At The Calanthe, success is measured by how guests feel, not how much is added. We focus on outcomes that matter.',
        highlightSection: {
          title: 'What we achieve',
          items: [
            { text: 'Restful environments that support better sleep' },
            { text: 'Seamless stays through intuitive design and service' },
            { text: 'A sense of calm that guests carry with them beyond checkout' },
          ],
        },
      },
      {
        blockType: 'designed',
        title: 'Designed With Intention',
        description:
          'The Calanthe\u2019s features are not added for impact\u2014they are designed for purpose.',
        features: [
          {
            icon: 'book',
            title: 'Thoughtfully Designed Rooms',
            description: 'Every room is carefully planned to support rest and privacy.',
          },
          {
            icon: 'smile',
            title: 'Human-Centered Layouts',
            description: 'Spaces are designed around how people move and use them.',
          },
          {
            icon: 'volume-off',
            title: 'Quiet Comfort & Sound Control',
            description: 'Acoustic considerations are integrated throughout the hotel.',
          },
          {
            icon: 'utensils',
            title: 'Calm Dining Experience',
            description: 'Our restaurant and bar are designed for unhurried moments.',
          },
          {
            icon: 'palette',
            title: 'Consistent Design Language',
            description: 'Every detail follows a cohesive design approach',
          },
          {
            icon: 'accessibility',
            title: 'Accessible & Inclusive Spaces',
            description: 'Accessibility is considered from the start, not added later.',
          },
        ],
      },
      {
        blockType: 'collaboration',
        title: 'Working With\u00a0Like-Minded Creators',
        description:
          'We collaborate with partners who share our values of quality, responsibility, and thoughtful design.',
        partners: [{ name: 'a' }],
      },
    ],
  })

  // ──── Page 6 English: Contact & Location ────
  await updateEn(contactPage.id, {
    title: 'Contact & Location',
    layout: [
      {
        blockType: 'hero',
        subtitle: 'Home / Contact & Location',
        name: 'Contact & Location',
        tagline:
          'The Gallery offers a visual journey through the spaces and atmosphere of The Calanthe. Each image reflects the balance of design, comfort, and calm',
        ctaText: 'Book Now',
      },
      {
        blockType: 'location',
        address1Label: 'Address 1',
        address1: '12 Anchor Road, Sai Kung',
        address2Label: 'Address 2',
        address2: '8 Seashell Drive, Lantau Island',
        hotlineLabel: 'Hotline',
        emailLabel: 'Email',
        ctaText: 'Contact Us',
      },
      { ...offersBlockEn },
    ],
  })

  payload.logger.info('— English locale patched for all 6 pages.')

  // ═══════════════════════════════════════════════════════════════════
  // STEP 4: Update globals (Vietnamese + English)
  // ═══════════════════════════════════════════════════════════════════
  payload.logger.info('— Updating header (vi)...')
  await payload.updateGlobal({
    slug: 'header',
    locale: 'vi',
    depth: 0,
    context: { disableRevalidate: true },
    data: {
      showTopBar: true,
      contactPhone: '+84 777 4340',
      showLanguageSelector: true,
      languages: [
        { code: 'en', label: 'ENG' },
        { code: 'vi', label: 'VIE' },
      ],
      showCurrencySelector: true,
      currencies: [
        { code: 'usd', label: 'USD' },
        { code: 'vnd', label: 'VND' },
      ],
      logo: mid(1),
      logoWidth: 80,
      logoHeight: 80,
      logoLink: '/hotel',
      navItemsLeft: [
        {
          link: {
            type: 'reference',
            label: 'Phòng Nghỉ',
            reference: { relationTo: 'pages', value: accommodationsPage.id },
          },
        },
        {
          link: {
            type: 'reference',
            label: 'Nhà Hàng & Quầy Bar',
            reference: { relationTo: 'pages', value: restaurantsPage.id },
          },
        },
        {
          link: {
            type: 'reference',
            label: 'Thư Viện Ảnh',
            reference: { relationTo: 'pages', value: galleryPage.id },
          },
        },
      ],
      navItemsRight: [
        {
          link: {
            type: 'reference',
            label: 'Câu Chuyện',
            reference: { relationTo: 'pages', value: ourStoryPage.id },
          },
        },
        {
          link: {
            type: 'reference',
            label: 'Liên Hệ & Vị Trí',
            reference: { relationTo: 'pages', value: contactPage.id },
          },
        },
      ],
      showCTA: true,
      ctaText: 'Đặt Phòng',
      ctaLink: '/booking',
      backgroundColor: '#ffffff',
      scrolledBackgroundColor: '#ffffff',
      textColor: 'dark',
      paddingSize: 'small',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      fontWeight: '500',
      fontSize: '14px',
      letterSpacing: '1px',
    },
  })

  payload.logger.info('— Updating header (en)...')
  await payload.updateGlobal({
    slug: 'header',
    locale: 'en',
    depth: 0,
    context: { disableRevalidate: true },
    data: {
      ctaText: 'Book Your Stay',
      navItemsLeft: [
        {
          link: {
            type: 'reference',
            label: 'Accommodations',
            reference: { relationTo: 'pages', value: accommodationsPage.id },
          },
        },
        {
          link: {
            type: 'reference',
            label: 'Restaurants & Bars',
            reference: { relationTo: 'pages', value: restaurantsPage.id },
          },
        },
        {
          link: {
            type: 'reference',
            label: 'Gallery',
            reference: { relationTo: 'pages', value: galleryPage.id },
          },
        },
      ],
      navItemsRight: [
        {
          link: {
            type: 'reference',
            label: 'Our Story',
            reference: { relationTo: 'pages', value: ourStoryPage.id },
          },
        },
        {
          link: {
            type: 'reference',
            label: 'Contact & Location',
            reference: { relationTo: 'pages', value: contactPage.id },
          },
        },
      ],
    },
  })

  payload.logger.info('— Updating footer (vi)...')
  await payload.updateGlobal({
    slug: 'footer',
    locale: 'vi',
    depth: 0,
    context: { disableRevalidate: true },
    data: {
      subscribeTitle: 'Nhận tin tức & ưu đãi mới nhất',
      subscribeSubtitle: 'Đăng ký nhận bản tin để cập nhật thông tin',
      subscribeButtonText: 'Đăng Ký',
      subscribeButtonLink: '/subscribe',
      logo: mid(1),
      addresses: [
        { address: '12 Anchor Road, Sai Kung' },
        { address: '8 Seashell Drive, Lantau Island' },
      ],
      phone: '+84 777 4340',
      email: 'Calanthehotel@gmail.com',
      findUsText: 'Tìm chúng tôi',
      socialLinks: [
        { platform: 'instagram', url: 'https://www.youtube.com/' },
        { platform: 'facebook', url: 'https://www.youtube.com/' },
      ],
      navLinks: [
        {
          link: {
            type: 'reference',
            label: 'Phòng Nghỉ',
            reference: { relationTo: 'pages', value: accommodationsPage.id },
          },
        },
        {
          link: {
            type: 'reference',
            label: 'Nhà Hàng & Quầy Bar',
            reference: { relationTo: 'pages', value: restaurantsPage.id },
          },
        },
        {
          link: {
            type: 'reference',
            label: 'Thư Viện Ảnh',
            reference: { relationTo: 'pages', value: galleryPage.id },
          },
        },
        {
          link: {
            type: 'reference',
            label: 'Câu Chuyện',
            reference: { relationTo: 'pages', value: ourStoryPage.id },
          },
        },
        {
          link: {
            type: 'reference',
            label: 'Liên Hệ & Vị Trí',
            reference: { relationTo: 'pages', value: contactPage.id },
          },
        },
      ],
      copyrightText: '@2025 Calanthe Hotel. Mọi quyền được bảo lưu.',
      backgroundColor: '#ffffff',
      textColor: '#1a1a1a',
      borderColor: '#e5e5e5',
      subscribeBackgroundColor: '#f5f5f5',
      titleFont: 'Georgia, serif',
      bodyFont: 'system-ui, -apple-system, sans-serif',
      titleFontWeight: '400',
      bodyFontWeight: '400',
    },
  })

  payload.logger.info('— Updating footer (en)...')
  await payload.updateGlobal({
    slug: 'footer',
    locale: 'en',
    depth: 0,
    context: { disableRevalidate: true },
    data: {
      subscribeTitle: 'Get the latest news & discounts',
      subscribeSubtitle: 'Subscribe to our newsletter to stay updated',
      subscribeButtonText: 'Subscribe',
      findUsText: 'Find us',
      copyrightText: '@2025 Calanthe Hotel. All rights reserved.',
      navLinks: [
        {
          link: {
            type: 'reference',
            label: 'Accommodations',
            reference: { relationTo: 'pages', value: accommodationsPage.id },
          },
        },
        {
          link: {
            type: 'reference',
            label: 'Restaurants & Bars',
            reference: { relationTo: 'pages', value: restaurantsPage.id },
          },
        },
        {
          link: {
            type: 'reference',
            label: 'Gallery',
            reference: { relationTo: 'pages', value: galleryPage.id },
          },
        },
        {
          link: {
            type: 'reference',
            label: 'Our Story',
            reference: { relationTo: 'pages', value: ourStoryPage.id },
          },
        },
        {
          link: {
            type: 'reference',
            label: 'Contact & Location',
            reference: { relationTo: 'pages', value: contactPage.id },
          },
        },
      ],
    },
  })

  payload.logger.info('Seeded hotel data successfully! (vi + en)')
}
