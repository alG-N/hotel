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
  blockType: 'offers' as const,
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

  // If there are no media records, create a placeholder so required upload
  // fields can be satisfied.  The placeholder is a 1×1 transparent PNG
  // represented as a data-URL-less DB-only record (no file on disk).
  if (existingMedia.docs.length === 0) {
    payload.logger.info('— No media found, creating placeholder media record...')
    const placeholder = await payload.create({
      collection: 'media',
      data: {
        alt: 'Placeholder',
      } as any,
      filePath: undefined as any,
      file: {
        data: Buffer.from(
          'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==',
          'base64',
        ),
        mimetype: 'image/png',
        name: 'placeholder.png',
        size: 68,
      },
      context: { disableRevalidate: true },
    })
    existingMedia.docs.push(placeholder)
  }

  const mediaIds = new Set(existingMedia.docs.map((m) => m.id))
  const firstMediaId = existingMedia.docs[0]?.id
  const mid = (id: number): any => (mediaIds.has(id) ? id : firstMediaId)
  const mimg = (id: number) => {
    const resolved = mid(id)
    return resolved !== undefined ? [{ image: resolved }] : []
  }

  /** Helper: create a simple Lexical richText paragraph */
  const richText = (text: string) => ({
    root: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            { type: 'text', text, format: 0, detail: 0, mode: 'normal', style: '', version: 1 },
          ],
          direction: 'ltr' as const,
          format: '' as const,
          indent: 0,
          version: 1,
          textFormat: 0,
          textStyle: '',
        },
      ],
      direction: 'ltr' as const,
      format: '' as const,
      indent: 0,
      version: 1,
    },
  })
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
          cuisineOptions: [
            { label: 'Ẩm thực Việt Nam', value: 'vietnamese' },
            { label: 'Ẩm thực Châu Á', value: 'asian' },
            { label: 'Ẩm thực Châu Âu', value: 'european' },
          ],
          occasionOptions: [
            { label: 'Bữa sáng', value: 'breakfast' },
            { label: 'Bữa trưa', value: 'lunch' },
            { label: 'Bữa tối', value: 'dinner' },
          ],
          foodTypeOptions: [
            { label: 'Đồ ăn nhẹ', value: 'appetizer' },
            { label: 'Món chính', value: 'main-course' },
            { label: 'Tráng miệng', value: 'dessert' },
            { label: 'Thức uống', value: 'beverage' },
          ],
          featuredImage: mid(20),
          featuredTitle: 'Thiên Đường Yên Bình',
          featuredDescription:
            'Trải nghiệm hương vị thanh bình của Thiên Đường Yên Bình, một món ăn kết hợp thảo mộc tinh tế với rau củ tươi theo mùa, tưới nhẹ sốt chanh. Món ăn này được thiết kế để gợi lên cảm giác yên bình và thanh thản, hoàn hảo cho một bữa ăn thư giãn.',
          featuredLink: '/restaurants',
          sideItems: [
            {
              image: mid(21),
              title: 'Gourmet Suite',
              description:
                'Lựa chọn hoàn hảo cho kỳ nghỉ ngắn và chuyên gia tìm kiếm sự thoải mái và sang trọng',
              link: '/restaurants',
            },
            {
              image: mid(22),
              title: 'Luxury Haven',
              description:
                'Lựa chọn tuyệt vời cho chuyến thăm ngắn và khách doanh nhân trân trọng sự đơn giản và tiêu chuẩn cao.',
              link: '/restaurants',
            },
            {
              image: mid(23),
              title: 'Opulent Retreat',
              description:
                'Điểm đến lý tưởng cho chuyến đi ngắn và khách công tác ưu tiên sự tiện lợi và chất lượng.',
              link: '/restaurants',
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
          blockType: 'gallery',
          gallery: [...mimg(24), ...mimg(25), ...mimg(26), ...mimg(27), ...mimg(28)],
          seeAllText: 'Xem tất cả ảnh',
          seeAllLink: '/gallery',
          height: 'large',
          showCounter: true,
          showSeeAll: true,
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
          imageLeft: mid(26),
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
          // New fields
          sectionTitle: 'Vị Trí & Liên Hệ',
          locationLabel: 'ĐỊA CHỈ',
          fullAddress: '1, Đường Hoàng Liên, Thị Trấn Sapa, Huyện Sapa, Tỉnh Lào Cai\n33000 SAPA\nViệt Nam',
          getDirectionsUrl: 'https://maps.google.com/?q=22.3380,103.8448',
          reservationLabel: 'ĐẶT PHÒNG',
          hotline: '+84 214/3629999',
          email: 'Calanthehotel@gmail.com',
          parkingLabel: 'BÃI ĐỖ XE',
          parkingItems: [
            { text: 'Bãi đỗ xe miễn phí' },
            { text: 'Bãi đỗ xe trong nhà' },
            { text: 'Dịch vụ đỗ xe hộ' },
          ],
          mapAddress: '1 Hoang Lien, Sapa, Lao Cai, Vietnam',
          mapLatitude: 22.338,
          mapLongitude: 103.8448,
          mapZoom: 15,
          mapImage: mid(31),
          gettingThereTitle: 'Hướng Dẫn Đến',
          gettingThereItems: [
            {
              title: 'Bãi đỗ xe',
              content: 'Khách sạn có bãi đỗ xe riêng miễn phí dành cho khách lưu trú. Bãi đỗ xe trong nhà có sức chứa 30 xe.',
            },
            {
              title: 'Đường bộ',
              content: 'Từ trung tâm thị trấn Sapa, đi theo đường Hoàng Liên khoảng 5 phút. Khách sạn nằm bên trái đường.',
            },
            {
              title: 'Tàu hỏa',
              content: 'Đến ga Lào Cai, sau đó di chuyển bằng xe buýt hoặc taxi đến Sapa (khoảng 35 phút). Khách sạn có thể sắp xếp đón từ ga.',
            },
          ],
          ctaText: 'Liên Hệ',
          ctaLink: '/contact',
          // Legacy fields (kept for fallback)
          address1Label: 'Địa chỉ 1',
          address1: '1, Đường Hoàng Liên, Sapa',
          address2Label: 'Địa chỉ 2',
          address2: '33000 SAPA, Việt Nam',
          hotlineLabel: 'Đường dây nóng',
          emailLabel: 'Email',
          enabled: true,
        },
        { ...offersBlockVi, image: mid(15) },
      ],
    },
  })

  // ────────── Page 7: Ưu Đãi ──────────
  const offersPage = await payload.create({
    collection: 'pages',
    locale: 'vi',
    depth: 0,
    context: { disableRevalidate: true },
    data: {
      title: 'Ưu Đãi',
      slug: 'offers',
      _status: 'published',
      hero: { type: 'none' },
      layout: [
        {
          blockType: 'hero',
          subtitle: 'Trang chủ / Ưu Đãi',
          name: 'Ưu Đãi Đặc Biệt',
          tagline:
            'Khám phá các gói ưu đãi độc quyền được chọn lọc kỹ lưỡng dành cho những vị khách trân trọng sự thoải mái và giá trị vượt trội.',
          showCTA: false,
          ctaText: 'Đặt Ngay',
          ctaLink: '/booking',
          height: 'small',
          textPosition: 'center',
          verticalAlign: 'center',
          overlayOpacity: 'medium',
          enableSlideshow: true,
          slideshowSpeed: '5000',
          heroImage: mimg(15),
          enabled: true,
        },
        { ...offersBlockVi, image: mid(15) },
        {
          blockType: 'offers-page',
          sectionTitle: 'Các Gói Ưu Đãi',
          sectionDescription: 'Khám phá những gói ưu đãi đặc biệt được thiết kế riêng cho kỳ nghỉ hoàn hảo của bạn.',
          columns: '2',
          layout: 'alternating',
          offers: [
            {
              image: mid(9),
              badge: 'Phổ biến',
              title: 'Gói Nghỉ Dưỡng Cuối Tuần',
              subtitle: 'Từ $199 / 2 đêm',
              description:
                'Trọn gói 2 đêm bao gồm bữa sáng, spa 60 phút và trả phòng muộn đến 14:00.',
              features: [
                { text: 'Bữa sáng miễn phí mỗi ngày' },
                { text: 'Spa thư giãn 60 phút' },
                { text: 'Trả phòng muộn đến 14:00' },
              ],
              ctaText: 'Đặt Ngay',
              ctaLink: '/booking',
            },
            {
              image: mid(10),
              badge: 'Lãng mạn',
              title: 'Gói Trăng Mật',
              subtitle: 'Từ $299 / 2 đêm',
              description:
                'Dành cho các cặp đôi — bao gồm phòng suite, bữa tối lãng mạn và trang trí phòng đặc biệt.',
              features: [
                { text: 'Phòng suite view đẹp' },
                { text: 'Bữa tối lãng mạn cho 2 người' },
                { text: 'Trang trí phòng đặc biệt' },
                { text: 'Welcome drink khi nhận phòng' },
              ],
              ctaText: 'Đặt Ngay',
              ctaLink: '/booking',
            },
            {
              image: mid(11),
              badge: 'Doanh nhân',
              title: 'Gói Công Tác',
              subtitle: 'Từ $129 / đêm',
              description:
                'Giải pháp lý tưởng cho khách doanh nhân — WiFi tốc độ cao, không gian làm việc và bữa sáng nhanh.',
              features: [
                { text: 'WiFi tốc độ cao miễn phí' },
                { text: 'Không gian làm việc riêng' },
                { text: 'Bữa sáng nhanh mỗi ngày' },
                { text: 'Dịch vụ giặt ủi ưu đãi' },
              ],
              ctaText: 'Đặt Ngay',
              ctaLink: '/booking',
            },
          ],
          enabled: true,
        },
        {
          blockType: 'special-offers',
          sectionTitle: 'Ưu Đãi Theo Mùa',
          columns: '3',
          showNavigation: true,
          offers: [
            {
              image: mid(23),
              title: 'Gourmet Suite',
              description:
                'Lựa chọn hoàn hảo cho kỳ nghỉ ngắn và chuyên gia tìm kiếm sự thoải mái và sang trọng.',
              ctaText: 'Nhận Ưu Đãi',
              ctaLink: '/booking',
            },
            {
              image: mid(22),
              title: 'Luxury Haven',
              description:
                'Lựa chọn tuyệt vời cho chuyến thăm ngắn và khách doanh nhân trân trọng sự đơn giản và tiêu chuẩn cao.',
              ctaText: 'Nhận Ưu Đãi',
              ctaLink: '/booking',
            },
            {
              image: mid(21),
              title: 'Opulent Retreat',
              description:
                'Điểm đến lý tưởng cho chuyến đi ngắn và khách công tác ưu tiên sự tiện lợi và chất lượng.',
              ctaText: 'Nhận Ưu Đãi',
              ctaLink: '/booking',
            },
          ],
          enabled: true,
        },
        {
          blockType: 'subscribe',
          title: 'Đăng Ký Nhận Ưu Đãi Sớm',
          subtitle:
            'Đăng ký bản tin để nhận thông báo về các chương trình khuyến mãi và ưu đãi độc quyền trước tất cả mọi người.',
          placeholderText: 'Nhập email của bạn',
          buttonText: 'Đăng Ký',
          successMessage: 'Cảm ơn bạn đã đăng ký!',
          benefits: [
            { text: 'Nhận ưu đãi độc quyền trước tiên' },
            { text: 'Giảm giá đặc biệt cho thành viên' },
            { text: 'Cập nhật sự kiện và tin tức mới nhất' },
          ],
          layout: 'centered',
          privacyText: 'Chúng tôi tôn trọng quyền riêng tư của bạn. Hủy đăng ký bất cứ lúc nào.',
          enabled: true,
        },
      ],
    },
  })

  // ────────── Page 8: Đăng Ký Bản Tin ──────────
  const subscribePage = await payload.create({
    collection: 'pages',
    locale: 'vi',
    depth: 0,
    context: { disableRevalidate: true },
    data: {
      title: 'Đăng Ký Bản Tin',
      slug: 'subscribe',
      _status: 'published',
      hero: { type: 'none' },
      layout: [
        {
          blockType: 'hero',
          subtitle: 'Trang chủ / Đăng Ký',
          name: 'Đăng Ký Bản Tin',
          tagline:
            'Luôn cập nhật những ưu đãi mới nhất, sự kiện đặc biệt và nội dung độc quyền từ The Calanthe.',
          showCTA: false,
          ctaText: '',
          ctaLink: '',
          height: 'small',
          textPosition: 'center',
          verticalAlign: 'center',
          overlayOpacity: 'medium',
          enableSlideshow: true,
          slideshowSpeed: '5000',
          heroImage: mimg(6),
          enabled: true,
        },
        {
          blockType: 'subscribe',
          title: 'Nhận Tin Tức & Ưu Đãi Mới Nhất',
          subtitle:
            'Đăng ký bản tin để cập nhật các ưu đãi, sự kiện và nội dung độc quyền mới nhất từ The Calanthe.',
          placeholderText: 'Nhập địa chỉ email của bạn',
          buttonText: 'Đăng Ký Ngay',
          successMessage: 'Cảm ơn bạn đã đăng ký!',
          benefits: [
            { text: 'Ưu đãi độc quyền chỉ dành cho thành viên' },
            { text: 'Thông báo sớm về sự kiện đặc biệt' },
            { text: 'Mẹo du lịch và gợi ý điểm đến' },
            { text: 'Cập nhật dịch vụ mới tại khách sạn' },
          ],
          layout: 'centered',
          privacyText: 'Chúng tôi tôn trọng quyền riêng tư của bạn. Hủy đăng ký bất cứ lúc nào.',
          enabled: true,
        },
        { ...offersBlockVi, image: mid(15) },
      ],
    },
  })

  // ────────── Page 9: Đặt Phòng ──────────
  const bookingPage = await payload.create({
    collection: 'pages',
    locale: 'vi',
    depth: 0,
    context: { disableRevalidate: true },
    data: {
      title: 'Đặt Phòng',
      slug: 'booking',
      _status: 'published',
      hero: { type: 'none' },
      layout: [
        {
          blockType: 'hero',
          subtitle: 'Trang chủ / Đặt Phòng',
          name: 'Đặt Phòng',
          tagline:
            'Chọn ngày, loại phòng và số lượng khách để bắt đầu kỳ nghỉ tại The Calanthe.',
          showCTA: false,
          ctaText: '',
          ctaLink: '',
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
          blockType: 'booking-form',
          title: 'Đặt Phòng Tại The Calanthe',
          subtitle:
            'Trải nghiệm sự sang trọng và thoải mái tại The Calanthe. Chọn ngày và tùy chọn của bạn bên dưới.',
          bookingUrl: '#',
          buttonText: 'Kiểm Tra Phòng Trống',
          roomTypes: [
            { label: 'Phòng Deluxe', value: 'deluxe' },
            { label: 'Phòng Premier', value: 'premier' },
            { label: 'Junior Suite', value: 'junior-suite' },
            { label: 'Cozy Retreat Suite', value: 'cozy-retreat' },
          ],
          infoCards: [
            {
              icon: 'clock',
              title: 'Giờ Nhận / Trả Phòng',
              description: 'Nhận phòng: 14:00 — Trả phòng: 12:00',
            },
            {
              icon: 'shield',
              title: 'Chính Sách Hủy',
              description: 'Hủy miễn phí trước 48 giờ',
            },
            {
              icon: 'star',
              title: 'Cam Kết Giá Tốt Nhất',
              description: 'Đặt trực tiếp để nhận giá ưu đãi nhất',
            },
            {
              icon: 'phone',
              title: 'Hỗ Trợ 24/7',
              description: 'Gọi +84 777 4340 để được hỗ trợ',
            },
          ],
          layout: 'split',
          sideImage: mid(9),
          maxGuests: 10,
          maxRooms: 5,
          enabled: true,
        },
        { ...offersBlockVi, image: mid(15) },
      ],
    },
  })

  // ────────── Page 10: Thông Tin Thêm ──────────
  const infoPage = await payload.create({
    collection: 'pages',
    locale: 'vi',
    depth: 0,
    context: { disableRevalidate: true },
    data: {
      title: 'Thông Tin Thêm',
      slug: 'info',
      _status: 'published',
      hero: { type: 'none' },
      layout: [
        {
          blockType: 'hero',
          subtitle: 'Trang chủ / Thông Tin',
          name: 'Thông Tin Thêm',
          tagline:
            'Tất cả những gì bạn cần biết về The Calanthe — dịch vụ, tiện ích và cam kết của chúng tôi.',
          showCTA: false,
          ctaText: 'Đặt Ngay',
          ctaLink: '/booking',
          height: 'small',
          textPosition: 'center',
          verticalAlign: 'center',
          overlayOpacity: 'medium',
          enableSlideshow: false,
          heroImage: mimg(6),
          enabled: true,
        },
        {
          blockType: 'description',
          title: 'Chào Mừng Đến\u00a0The Calanthe',
          leftText:
            'Đặt phòng trực tiếp trên website để nhận ưu đãi tốt nhất và bữa sáng miễn phí cho kỳ nghỉ của bạn.',
          ctaText: 'Đặt Ngay',
          ctaLink: '/booking',
          image1: mid(6),
          image2: mid(7),
          rightText:
            'The Calanthe mang đến không gian nghỉ dưỡng yên bình, nơi mỗi chi tiết được chăm chút kỹ lưỡng để bạn cảm nhận sự thoải mái trọn vẹn.',
          enabled: true,
        },
        {
          blockType: 'content',
          columns: [
            {
              size: 'half',
              richText: richText(
                'The Calanthe mang đến trải nghiệm nghỉ dưỡng tinh tế, nơi mỗi chi tiết được chăm chút để tạo nên sự thoải mái và bình yên cho bạn.',
              ),
              enableLink: false,
            },
            {
              size: 'half',
              richText: richText(
                'Với thiết kế hiện đại, dịch vụ chu đáo và vị trí thuận lợi, The Calanthe là lựa chọn hoàn hảo cho kỳ nghỉ của bạn.',
              ),
              enableLink: false,
            },
          ],
          enabled: true,
        },
        {
          blockType: 'mediaBlock',
          media: mid(17),
          enabled: true,
        },
        {
          blockType: 'cta',
          richText: richText(
            'Sẵn sàng cho kỳ nghỉ tiếp theo? Đặt phòng ngay hôm nay để tận hưởng ưu đãi đặc biệt.',
          ),
          links: [
            {
              link: {
                type: 'custom',
                url: '/booking',
                label: 'Đặt Phòng Ngay',
                appearance: 'default',
              },
            },
            {
              link: {
                type: 'custom',
                url: '/offers',
                label: 'Xem Ưu Đãi',
                appearance: 'outline',
              },
            },
          ],
          enabled: true,
        },
        { ...offersBlockVi, image: mid(15) },
      ],
    },
  })

  payload.logger.info(
    `— Created 10 pages (vi): Main(${mainPage.id}), Accommodations(${accommodationsPage.id}), Restaurants(${restaurantsPage.id}), Gallery(${galleryPage.id}), Our Story(${ourStoryPage.id}), Contact(${contactPage.id}), Offers(${offersPage.id}), Subscribe(${subscribePage.id}), Booking(${bookingPage.id}), Info(${infoPage.id})`,
  )

  // ═══════════════════════════════════════════════════════════════════
  // STEP 3: Patch English locale for all pages
  // ═══════════════════════════════════════════════════════════════════
  payload.logger.info('— Patching English locale for all pages...')

  /**
   * Deep-merge helper: overlays English patches onto existing Vietnamese blocks.
   * Preserves block/row `id`s and all non-localized fields from the base,
   * while replacing only the localized text fields with English values.
   */
  const deepMergeBlock = (base: any, patch: any): any => {
    const result = { ...base }
    for (const [key, value] of Object.entries(patch)) {
      if (Array.isArray(value) && Array.isArray(base[key])) {
        // Merge arrays by index (preserving row IDs within each item)
        result[key] = base[key].map((baseItem: any, j: number) => {
          const patchItem = (value as any[])[j]
          if (patchItem && typeof patchItem === 'object' && typeof baseItem === 'object') {
            return deepMergeBlock(baseItem, patchItem)
          }
          return patchItem !== undefined ? patchItem : baseItem
        })
        // If patch has more items than base, append them
        if ((value as any[]).length > (base[key] as any[]).length) {
          result[key] = [...result[key], ...(value as any[]).slice((base[key] as any[]).length)]
        }
      } else if (
        value !== null &&
        typeof value === 'object' &&
        !Array.isArray(value) &&
        base[key] !== null &&
        typeof base[key] === 'object' &&
        !Array.isArray(base[key])
      ) {
        // Deep-merge nested objects (e.g., link groups, highlightSection)
        result[key] = deepMergeBlock(base[key], value)
      } else if (value !== undefined) {
        result[key] = value
      }
    }
    return result
  }

  /**
   * Update a page's English locale.
   * Accepts the full page object (from create response) so we can extract
   * block IDs from layout and deep-merge English patches onto them.
   * This preserves Vietnamese locale data for all localized sub-fields.
   */
  const updateEn = async (page: any, data: Record<string, any>) => {
    if (data.layout && Array.isArray(data.layout) && page.layout) {
      const viLayout = page.layout as any[]
      const enPatches = data.layout as any[]
      data.layout = viLayout.map((viBlock: any, i: number) => {
        const enPatch = enPatches[i]
        if (!enPatch) return viBlock
        return deepMergeBlock(viBlock, enPatch)
      })
    }
    await payload.update({
      collection: 'pages',
      id: page.id,
      locale: 'en',
      depth: 0,
      context: { disableRevalidate: true },
      data,
    })
  }

  // ──── Page 1 English: Main ────
  await updateEn(mainPage, {
    title: 'Main',
    layout: [
      // hero
      {
        subtitle: 'Welcome to',
        name: 'The Calanthe',
        tagline:
          'Wake up to soft light, thoughtful details, and a sense of calm crafted for modern travelers who value balance and beauty',
        ctaText: 'Book Now',
      },
      // description
      {
        title: 'A Refined Stay,\u00a0Thoughtfully Designed',
        leftText:
          'The Calanthe is a boutique hotel created for travelers who value calm, comfort, and intentional design.',
        ctaText: 'More About Us',
        rightText:
          'Every space is shaped to help you slow down and feel at ease. From soft materials to carefully curated details, The Calanthe balances modern elegance with a warm, welcoming atmosphere\u2014so your stay feels personal, not transactional.',
      },
      // accommodations-type2
      {
        title: 'Designed Around How You Rest',
        ctaText: 'More About Us',
        rooms: [
          {
            name: 'Deluxe Room',
            description:
              'Ideal for short stays and business travelers who value simplicity and quality.',
            buttonText: 'Book now',
            features: [
              { text: 'Queen or king-size bed with premium bedding.' },
              { text: 'Work-friendly desk and comfortable seating.' },
              { text: 'Modern bathroom with walk-in shower.' },
            ],
          },
          {
            name: 'Premier Room',
            description:
              'Designed for longer stays or guests who enjoy extra room to relax.',
            buttonText: 'Book now',
            features: [
              { text: 'Spacious sleeping area with lounge seating' },
              { text: 'Large windows for natural daylight' },
              { text: 'Upgraded bathroom amenities' },
            ],
          },
          {
            name: 'Junior Suite',
            description:
              'Offered clearly defined living and resting zones, ideal for couples or extended stays.',
            buttonText: 'Book now',
            features: [
              { text: 'King-size bed with enhanced comfort features' },
              { text: 'Separate seating or living area' },
              { text: 'Premium bath amenities and refined finishes' },
            ],
          },
        ],
      },
      // our-services
      {
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
      // photo-gallery
      {
        title: 'Experience The Calanthe Through Every Detail',
        loadMoreText: 'Load more',
      },
      // offers
      {
        title: offersBlockEn.title,
        description: offersBlockEn.description,
        priceHighlight: offersBlockEn.priceHighlight,
        featuresTitle: offersBlockEn.featuresTitle,
        ctaText: offersBlockEn.ctaText,
        features: offersBlockEn.features,
      },
    ],
  })

  // ──── Page 2 English: Accommodations ────
  await updateEn(accommodationsPage, {
    title: 'Accommodations',
    layout: [
      // hero
      {
        subtitle: 'Home / Accommodations',
        name: 'Accommodations',
        tagline: 'Our accommodations are designed with one purpose: exceptional rest.',
        ctaText: 'Book Now',
      },
      // rooms-grid
      {
        rooms: [
          {
            name: 'Deluxe Room',
            subtitle:
              'Ideal for short stays and business travelers who value simplicity and quality.',
            amenities: [
              { text: 'Queen or king-size bed with premium bedding.' },
              { text: 'Work-friendly desk and comfortable seating.' },
              { text: 'Modern bathroom with walk-in shower.' },
            ],
          },
          {
            name: 'Premier Room',
            subtitle:
              'Designed for longer stays or guests who enjoy extra room to relax.',
            amenities: [
              { text: 'Spacious sleeping area with lounge seating' },
              { text: 'Large windows for natural daylight' },
              { text: 'Upgraded bathroom amenities' },
            ],
          },
          {
            name: 'Junior Suite',
            subtitle:
              'Offered clearly defined living and resting zones, ideal for couples or extended stays.',
            amenities: [
              { text: 'King-size bed with enhanced comfort features' },
              { text: 'Separate seating or living area' },
              { text: 'Premium bath amenities and refined finishes' },
            ],
          },
          {
            name: 'Cozy Retreat Suite',
            subtitle:
              'Offered clearly defined living and resting zones, ideal for couples or extended stays.',
            amenities: [
              { text: 'King-size bed with enhanced comfort features' },
              { text: 'Separate seating or living area' },
              { text: 'Premium bath amenities and refined finishes' },
            ],
          },
          {
            name: 'Charming Junior Suite',
            subtitle:
              'Offered clearly defined living and resting zones, ideal for couples or extended stays.',
            amenities: [
              { text: 'King-size bed with enhanced comfort features' },
              { text: 'Separate seating or living area' },
              { text: 'Premium bath amenities and refined finishes' },
            ],
          },
        ],
      },
      // offers
      {
        title: offersBlockEn.title,
        description: offersBlockEn.description,
        priceHighlight: offersBlockEn.priceHighlight,
        featuresTitle: offersBlockEn.featuresTitle,
        ctaText: offersBlockEn.ctaText,
        features: offersBlockEn.features,
      },
    ],
  })

  // ──── Page 3 English: Restaurants & Bars ────
  await updateEn(restaurantsPage, {
    title: 'Restaurants & Bars',
    layout: [
      // hero
      {
        subtitle: 'Home / Restaurants & Bars',
        name: 'Restaurants & Bars',
        tagline:
          'Dining at The Calanthe is designed to complement your stay. Every element is thoughtfully curated to feel relaxed, balanced, and unhurried.',
        ctaText: 'Book Now',
      },
      // the-space
      {
        sectionTitle: 'The Space',
        sectionDescription: 'Dining at The Calanthe is designed to complement your stay.',
        stats: [
          {
            value: '120 m\u00b2',
            description:
              'Total indoor dining and bar area, designed for comfortable circulation and visual openness.',
          },
          {
            value: '48 Seats',
            description:
              'A balanced mix of intimate tables and relaxed communal seating, ensuring privacy without isolation.',
          },
          {
            value: '3 Distinct Zones',
            description:
              'Dining area, bar counter, and lounge seating\u2014each with its own atmosphere, flowing naturally throughout the day.',
          },
        ],
      },
      // food-drink
      {
        title: 'Foods & Drinks',
        cuisineOptions: [
          { label: 'Vietnamese Cuisine' },
          { label: 'Asian Cuisine' },
          { label: 'European Cuisine' },
        ],
        occasionOptions: [
          { label: 'Breakfast' },
          { label: 'Lunch' },
          { label: 'Dinner' },
        ],
        foodTypeOptions: [
          { label: 'Appetizer' },
          { label: 'Main Course' },
          { label: 'Dessert' },
          { label: 'Beverage' },
        ],
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
      // special-offers
      {
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
      // offers
      {
        title: offersBlockEn.title,
        description: offersBlockEn.description,
        priceHighlight: offersBlockEn.priceHighlight,
        featuresTitle: offersBlockEn.featuresTitle,
        ctaText: offersBlockEn.ctaText,
        features: offersBlockEn.features,
      },
    ],
  })

  // ──── Page 4 English: Gallery ────
  await updateEn(galleryPage, {
    title: 'Gallery',
    layout: [
      // hero
      {
        subtitle: 'Home / Gallery',
        name: 'Gallery',
        tagline:
          'The Gallery offers a visual journey through the spaces and atmosphere of The Calanthe. Each image reflects the balance of design, comfort, and calm',
        ctaText: 'Book Now',
      },
      // gallery slideshow
      {
        seeAllText: 'See all photos',
      },
      // photo-gallery
      {
        loadMoreText: 'Load more',
      },
      // offers
      {
        title: offersBlockEn.title,
        description: offersBlockEn.description,
        priceHighlight: offersBlockEn.priceHighlight,
        featuresTitle: offersBlockEn.featuresTitle,
        ctaText: offersBlockEn.ctaText,
        features: offersBlockEn.features,
      },
    ],
  })

  // ──── Page 5 English: Our Story ────
  await updateEn(ourStoryPage, {
    title: 'Our Story',
    layout: [
      // hero
      {
        subtitle: 'Home / Story',
        name: 'Our Story',
        tagline:
          'The Gallery offers a visual journey through the spaces and atmosphere of The Calanthe. Each image reflects the balance of design, comfort, and calm that defines every stay.',
        ctaText: 'Book Now',
      },
      // description-type2
      {
        title: 'Why The Calanthe\u00a0Exists?',
        paragraph1:
          'The Calanthe was created to answer a growing need for quieter, more intentional stays. As travel became faster and more transactional, we saw how often comfort, calm, and human connection were overlooked.',
        paragraph2:
          'We exist to offer an alternative\u2014one where guests can slow down, feel at ease, and experience hospitality without pressure or excess. The Calanthe is not about doing more. It is about doing what matters, better.',
      },
      // vision
      {
        mainTitle: 'Redefining Comfort\u00a0Through Simplicity',
        mainDescription:
          'Our vision is to become a destination for travelers who value clarity, balance, and meaningful design. We aim to redefine comfort\u2014not as luxury for display, but as an experience that genuinely supports rest and well-being.',
        cards: [
          {
            title: 'Our Vision',
            description:
              'We aim to redefine comfort\u2014not as luxury for display, but as an experience that genuinely supports rest and well-being.',
          },
          {
            title: 'Our Goal',
            description:
              'Create spaces that feel natural and effortless. Deliver consistent, thoughtful service. Build a hotel experience that feels personal, not generic',
          },
        ],
      },
      // content-image
      {
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
      // designed
      {
        title: 'Designed With Intention',
        description:
          'The Calanthe\u2019s features are not added for impact\u2014they are designed for purpose.',
        features: [
          {
            title: 'Thoughtfully Designed Rooms',
            description: 'Every room is carefully planned to support rest and privacy.',
          },
          {
            title: 'Human-Centered Layouts',
            description: 'Spaces are designed around how people move and use them.',
          },
          {
            title: 'Quiet Comfort & Sound Control',
            description: 'Acoustic considerations are integrated throughout the hotel.',
          },
          {
            title: 'Calm Dining Experience',
            description: 'Our restaurant and bar are designed for unhurried moments.',
          },
          {
            title: 'Consistent Design Language',
            description: 'Every detail follows a cohesive design approach',
          },
          {
            title: 'Accessible & Inclusive Spaces',
            description: 'Accessibility is considered from the start, not added later.',
          },
        ],
      },
      // collaboration
      {
        title: 'Working With\u00a0Like-Minded Creators',
        description:
          'We collaborate with partners who share our values of quality, responsibility, and thoughtful design.',
        partners: [{ name: 'Partner A' }],
      },
    ],
  })

  // ──── Page 6 English: Contact & Location ────
  await updateEn(contactPage, {
    title: 'Contact & Location',
    layout: [
      // hero
      {
        subtitle: 'Home / Contact & Location',
        name: 'Contact & Location',
        tagline:
          'The Gallery offers a visual journey through the spaces and atmosphere of The Calanthe. Each image reflects the balance of design, comfort, and calm',
        ctaText: 'Book Now',
      },
      // location
      {
        sectionTitle: 'Location & Contact',
        locationLabel: 'LOCATION',
        fullAddress: '1, Hoang Lien Street, Sapa District, Lao Cai Province\n33000 SAPA\nVietnam',
        reservationLabel: 'RESERVATION',
        parkingLabel: 'PARKING',
        parkingItems: [
          { text: 'Parking included' },
          { text: 'Indoor parking' },
          { text: 'Valet parking' },
        ],
        gettingThereTitle: 'Getting There',
        gettingThereItems: [
          {
            title: 'Parking',
            content: 'The hotel offers complimentary private parking for guests. The indoor parking area accommodates up to 30 vehicles.',
          },
          {
            title: 'Road Direction',
            content: 'From Sapa town center, follow Hoang Lien Street for about 5 minutes. The hotel is on the left side of the road.',
          },
          {
            title: 'Train',
            content: 'Arrive at Lao Cai station, then transfer by bus or taxi to Sapa (approx. 35 minutes). The hotel can arrange pickup from the station.',
          },
        ],
        ctaText: 'Contact Us',
        address1Label: 'Address 1',
        address2Label: 'Address 2',
        hotlineLabel: 'Hotline',
        emailLabel: 'Email',
      },
      // offers
      {
        title: offersBlockEn.title,
        description: offersBlockEn.description,
        priceHighlight: offersBlockEn.priceHighlight,
        featuresTitle: offersBlockEn.featuresTitle,
        ctaText: offersBlockEn.ctaText,
        features: offersBlockEn.features,
      },
    ],
  })

  // ──── Page 7 English: Offers ────
  await updateEn(offersPage, {
    title: 'Offers',
    layout: [
      // hero
      {
        subtitle: 'Home / Offers',
        name: 'Special Offers',
        tagline:
          'Discover exclusive packages thoughtfully curated for guests who appreciate comfort and exceptional value.',
        ctaText: 'Book Now',
      },
      // offers block
      {
        title: offersBlockEn.title,
        description: offersBlockEn.description,
        priceHighlight: offersBlockEn.priceHighlight,
        featuresTitle: offersBlockEn.featuresTitle,
        ctaText: offersBlockEn.ctaText,
        features: offersBlockEn.features,
      },
      // offers-page
      {
        sectionTitle: 'Our Packages',
        sectionDescription: 'Discover specially designed packages for your perfect getaway.',
        offers: [
          {
            badge: 'Popular',
            title: 'Weekend Retreat Package',
            subtitle: 'From $199 / 2 nights',
            description:
              'A 2-night package including breakfast, 60-minute spa session, and late check-out until 2:00 PM.',
            features: [
              { text: 'Complimentary daily breakfast' },
              { text: '60-minute relaxation spa' },
              { text: 'Late check-out until 2:00 PM' },
            ],
            ctaText: 'Book Now',
          },
          {
            badge: 'Romantic',
            title: 'Honeymoon Package',
            subtitle: 'From $299 / 2 nights',
            description:
              'Designed for couples — includes a suite, romantic dinner, and special room decoration.',
            features: [
              { text: 'Suite with beautiful view' },
              { text: 'Romantic dinner for two' },
              { text: 'Special room decoration' },
              { text: 'Welcome drink upon check-in' },
            ],
            ctaText: 'Book Now',
          },
          {
            badge: 'Business',
            title: 'Business Package',
            subtitle: 'From $129 / night',
            description:
              'Ideal for business travelers — high-speed WiFi, workspace, and express breakfast.',
            features: [
              { text: 'Complimentary high-speed WiFi' },
              { text: 'Private workspace' },
              { text: 'Express breakfast daily' },
              { text: 'Discounted laundry service' },
            ],
            ctaText: 'Book Now',
          },
        ],
      },
      // special-offers
      {
        sectionTitle: 'Seasonal Offers',
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
      // subscribe
      {
        title: 'Sign Up for Early Offers',
        subtitle:
          'Subscribe to our newsletter to be the first to know about promotions and exclusive deals.',
        placeholderText: 'Enter your email',
        buttonText: 'Subscribe',
        successMessage: 'Thank you for subscribing!',
        benefits: [
          { text: 'Be the first to receive exclusive offers' },
          { text: 'Special discounts for members' },
          { text: 'Latest event and news updates' },
        ],
        privacyText: 'We respect your privacy. Unsubscribe at any time.',
      },
    ],
  })

  // ──── Page 8 English: Subscribe ────
  await updateEn(subscribePage, {
    title: 'Newsletter',
    layout: [
      // hero
      {
        subtitle: 'Home / Subscribe',
        name: 'Newsletter',
        tagline:
          'Stay updated with the latest offers, special events, and exclusive content from The Calanthe.',
      },
      // subscribe
      {
        title: 'Get the Latest News & Offers',
        subtitle:
          'Subscribe to our newsletter to stay updated with the latest offers, events, and exclusive content from The Calanthe.',
        placeholderText: 'Enter your email address',
        buttonText: 'Subscribe Now',
        successMessage: 'Thank you for subscribing!',
        benefits: [
          { text: 'Exclusive offers for members only' },
          { text: 'Early notifications about special events' },
          { text: 'Travel tips and destination suggestions' },
          { text: 'Updates on new hotel services' },
        ],
        privacyText: 'We respect your privacy. Unsubscribe at any time.',
      },
      // offers
      {
        title: offersBlockEn.title,
        description: offersBlockEn.description,
        priceHighlight: offersBlockEn.priceHighlight,
        featuresTitle: offersBlockEn.featuresTitle,
        ctaText: offersBlockEn.ctaText,
        features: offersBlockEn.features,
      },
    ],
  })

  // ──── Page 9 English: Booking ────
  await updateEn(bookingPage, {
    title: 'Book Your Stay',
    layout: [
      // hero
      {
        subtitle: 'Home / Booking',
        name: 'Book Your Stay',
        tagline:
          'Select your dates, room type, and number of guests to begin your stay at The Calanthe.',
      },
      // booking-form
      {
        title: 'Book Your Stay at The Calanthe',
        subtitle:
          'Experience luxury and comfort at The Calanthe. Select your dates and preferences below.',
        buttonText: 'Check Availability',
        roomTypes: [
          { label: 'Deluxe Room' },
          { label: 'Premier Room' },
          { label: 'Junior Suite' },
          { label: 'Cozy Retreat Suite' },
        ],
        infoCards: [
          {
            title: 'Check-in / Check-out',
            description: 'Check-in: 2:00 PM \u2014 Check-out: 12:00 PM',
          },
          {
            title: 'Cancellation Policy',
            description: 'Free cancellation up to 48 hours in advance',
          },
          {
            title: 'Best Rate Guarantee',
            description: 'Book direct for the best available rate',
          },
          {
            title: '24/7 Support',
            description: 'Call +84 777 4340 for assistance',
          },
        ],
      },
      // offers
      {
        title: offersBlockEn.title,
        description: offersBlockEn.description,
        priceHighlight: offersBlockEn.priceHighlight,
        featuresTitle: offersBlockEn.featuresTitle,
        ctaText: offersBlockEn.ctaText,
        features: offersBlockEn.features,
      },
    ],
  })

  // ──── Page 10 English: Info ────
  await updateEn(infoPage, {
    title: 'Additional Info',
    layout: [
      // hero
      {
        subtitle: 'Home / Info',
        name: 'Additional Info',
        tagline:
          'Everything you need to know about The Calanthe — our services, amenities, and commitments.',
        ctaText: 'Book Now',
      },
      // description
      {
        title: 'Welcome to\u00a0The Calanthe',
        leftText:
          'Book directly on our website for the best rates and complimentary breakfast for your stay.',
        ctaText: 'Book Now',
        rightText:
          'The Calanthe offers a peaceful retreat where every detail is carefully crafted for your complete comfort.',
      },
      // content
      {
        columns: [
          {
            richText: richText(
              'The Calanthe offers a refined retreat experience, where every detail is crafted to create comfort and calm for you.',
            ),
          },
          {
            richText: richText(
              'With modern design, attentive service, and a convenient location, The Calanthe is the perfect choice for your getaway.',
            ),
          },
        ],
      },
      // mediaBlock
      {},
      // cta
      {
        richText: richText(
          'Ready for your next getaway? Book today to enjoy our exclusive offers.',
        ),
        links: [
          {
            link: {
              label: 'Book Your Stay',
            },
          },
          {
            link: {
              label: 'View Offers',
            },
          },
        ],
      },
      // offers
      {
        title: offersBlockEn.title,
        description: offersBlockEn.description,
        priceHighlight: offersBlockEn.priceHighlight,
        featuresTitle: offersBlockEn.featuresTitle,
        ctaText: offersBlockEn.ctaText,
        features: offersBlockEn.features,
      },
    ],
  })

  payload.logger.info('\u2014 English locale patched for all 10 pages.')

  // ═══════════════════════════════════════════════════════════════════
  // STEP 4: Update globals (Vietnamese + English)
  // ═══════════════════════════════════════════════════════════════════
  payload.logger.info('\u2014 Updating header (vi)...')
  const headerVi = await payload.updateGlobal({
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
      logoLink: '/',
      navItemsLeft: [
        {
          link: {
            type: 'reference',
            label: 'Ph\u00f2ng Ngh\u1ec9',
            reference: { relationTo: 'pages', value: accommodationsPage.id },
          },
        },
        {
          link: {
            type: 'reference',
            label: 'Nh\u00e0 H\u00e0ng & Qu\u1ea7y Bar',
            reference: { relationTo: 'pages', value: restaurantsPage.id },
          },
        },
        {
          link: {
            type: 'reference',
            label: 'Th\u01b0 Vi\u1ec7n \u1ea2nh',
            reference: { relationTo: 'pages', value: galleryPage.id },
          },
        },
      ],
      navItemsRight: [
        {
          link: {
            type: 'reference',
            label: 'C\u00e2u Chuy\u1ec7n',
            reference: { relationTo: 'pages', value: ourStoryPage.id },
          },
        },
        {
          link: {
            type: 'reference',
            label: 'Li\u00ean H\u1ec7 & V\u1ecb Tr\u00ed',
            reference: { relationTo: 'pages', value: contactPage.id },
          },
        },
      ],
      showCTA: true,
      ctaText: '\u0110\u1eb7t Ph\u00f2ng',
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

  payload.logger.info('\u2014 Updating header (en)...')
  // Use IDs from Vietnamese response to preserve localized label data
  const enLeftLabels = ['Accommodations', 'Restaurants & Bars', 'Gallery']
  const enRightLabels = ['Our Story', 'Contact & Location']
  await payload.updateGlobal({
    slug: 'header',
    locale: 'en',
    depth: 0,
    context: { disableRevalidate: true },
    data: {
      ctaText: 'Book Your Stay',
      navItemsLeft: ((headerVi as any).navItemsLeft || []).map((item: any, i: number) =>
        deepMergeBlock(item, { link: { label: enLeftLabels[i] } }),
      ),
      navItemsRight: ((headerVi as any).navItemsRight || []).map((item: any, i: number) =>
        deepMergeBlock(item, { link: { label: enRightLabels[i] } }),
      ),
    },
  })

  payload.logger.info('\u2014 Updating footer (vi)...')
  const footerVi = await payload.updateGlobal({
    slug: 'footer',
    locale: 'vi',
    depth: 0,
    context: { disableRevalidate: true },
    data: {
      subscribeTitle: 'Nh\u1eadn tin t\u1ee9c & \u01b0u \u0111\u00e3i m\u1edbi nh\u1ea5t',
      subscribeSubtitle: '\u0110\u0103ng k\u00fd nh\u1eadn b\u1ea3n tin \u0111\u1ec3 c\u1eadp nh\u1eadt th\u00f4ng tin',
      subscribeButtonText: '\u0110\u0103ng K\u00fd',
      subscribeButtonLink: '/subscribe',
      logo: mid(1),
      addresses: [
        { address: '12 Anchor Road, Sai Kung' },
        { address: '8 Seashell Drive, Lantau Island' },
      ],
      phone: '+84 777 4340',
      email: 'Calanthehotel@gmail.com',
      findUsText: 'T\u00ecm ch\u00fang t\u00f4i',
      socialLinks: [
        { platform: 'instagram', url: 'https://www.youtube.com/' },
        { platform: 'facebook', url: 'https://www.youtube.com/' },
      ],
      navLinks: [
        {
          link: {
            type: 'reference',
            label: 'Ph\u00f2ng Ngh\u1ec9',
            reference: { relationTo: 'pages', value: accommodationsPage.id },
          },
        },
        {
          link: {
            type: 'reference',
            label: 'Nh\u00e0 H\u00e0ng & Qu\u1ea7y Bar',
            reference: { relationTo: 'pages', value: restaurantsPage.id },
          },
        },
        {
          link: {
            type: 'reference',
            label: 'Th\u01b0 Vi\u1ec7n \u1ea2nh',
            reference: { relationTo: 'pages', value: galleryPage.id },
          },
        },
        {
          link: {
            type: 'reference',
            label: 'C\u00e2u Chuy\u1ec7n',
            reference: { relationTo: 'pages', value: ourStoryPage.id },
          },
        },
        {
          link: {
            type: 'reference',
            label: 'Li\u00ean H\u1ec7 & V\u1ecb Tr\u00ed',
            reference: { relationTo: 'pages', value: contactPage.id },
          },
        },
      ],
      copyrightText: '@2025 Calanthe Hotel. M\u1ecdi quy\u1ec1n \u0111\u01b0\u1ee3c b\u1ea3o l\u01b0u.',
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

  payload.logger.info('\u2014 Updating footer (en)...')
  const enFooterLabels = ['Accommodations', 'Restaurants & Bars', 'Gallery', 'Our Story', 'Contact & Location']
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
      addresses: ((footerVi as any).addresses || []).map((item: any, i: number) =>
        deepMergeBlock(item, [
          { address: '12 Anchor Road, Sai Kung' },
          { address: '8 Seashell Drive, Lantau Island' },
        ][i] || {}),
      ),
      navLinks: ((footerVi as any).navLinks || []).map((item: any, i: number) =>
        deepMergeBlock(item, { link: { label: enFooterLabels[i] } }),
      ),
    },
  })

  // ── Advertisement Global (Vi + En) ────────────────────────────────
  payload.logger.info('— Updating advertisement (vi)...')
  await payload.updateGlobal({
    slug: 'advertisement',
    locale: 'vi',
    depth: 0,
    context: { disableRevalidate: true },
    data: {
      // Top Banner
      topBannerEnabled: true,
      topBannerText: 'Đặt ngay giảm 20% cho lần lưu trú đầu tiên!',
      topBannerLink: '/offers',
      topBannerCtaText: 'Đặt Ngay',
      topBannerBgColor: '#1a1a1a',
      topBannerTextColor: '#ffffff',
      topBannerDismissible: true,
      // Popup
      popupEnabled: true,
      popupImage: mid(15),
      popupTitle: 'Ưu Đãi Đặc Biệt',
      popupDescription:
        'Đặt phòng trực tiếp và nhận giảm giá 15% cùng bữa sáng miễn phí cho kỳ nghỉ của bạn tại The Calanthe.',
      popupCtaText: 'Xem Ưu Đãi',
      popupCtaLink: '/offers',
      popupDelay: 3,
      popupBgColor: '#ffffff',
      popupTextColor: '#1a1a1a',
      popupShowOnce: true,
      // Floating Bar
      floatingBarEnabled: true,
      floatingBarText: 'Giới hạn: Gói Spa từ $99',
      floatingBarCtaText: 'Đặt Ngay',
      floatingBarCtaLink: '/booking',
      floatingBarBgColor: '#2a2a28',
      floatingBarTextColor: '#ffffff',
      floatingBarDismissible: true,
      // Slide-in
      slideInEnabled: true,
      slideInImage: mid(9),
      slideInTitle: 'Nghỉ Cuối Tuần',
      slideInDescription: 'Ở 2 đêm, tặng 1 đêm',
      slideInCtaText: 'Tìm Hiểu Thêm',
      slideInCtaLink: '/offers',
      slideInScrollTrigger: 50,
      slideInBgColor: '#ffffff',
      slideInTextColor: '#1a1a1a',
    },
  })

  payload.logger.info('— Updating advertisement (en)...')
  await payload.updateGlobal({
    slug: 'advertisement',
    locale: 'en',
    depth: 0,
    context: { disableRevalidate: true },
    data: {
      topBannerText: 'Book now and get 20% off your first stay!',
      topBannerCtaText: 'Book Now',
      popupTitle: 'Special Offer',
      popupDescription:
        'Book directly and receive 15% off plus complimentary breakfast for your stay at The Calanthe.',
      popupCtaText: 'View Offers',
      floatingBarText: 'Limited: Spa Package from $99',
      floatingBarCtaText: 'Book Now',
      slideInTitle: 'Weekend Getaway',
      slideInDescription: 'Stay 2 nights, get 1 free',
      slideInCtaText: 'Learn More',
    },
  })

  payload.logger.info('Seeded hotel data successfully! (vi + en) — 10 pages + header + footer + advertisement')
}
