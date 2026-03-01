import type { Payload, PayloadRequest } from 'payload'

/**
 * Shared "Exclusive Offers" block used on multiple pages.
 * Media ID 15 = offers image.
 */
const offersBlock = {
  blockType: 'offers' as const,
  title: 'Exclusive Offers, Thoughtfully Curated',
  description:
    'Enjoy an exclusive special price from $89 per night when you book directly with The Calanthe. Thoughtfully curated for guests who appreciate comfort, calm, and exceptional value.',
  priceHighlight: '$89 per night',
  featuresTitle: "What's Included:",
  sectionStyle: 'dark' as const,
  ctaText: 'Book Now',
  ctaLink: '/booking',
  image: 15,
  imagePosition: 'left' as const,
  features: [
    { feature: 'Complimentary daily breakfast' },
    { feature: 'Early check-in or late check-out (subject to availability)' },
    { feature: 'Best rate guaranteed when booking direct' },
  ],
  enabled: true,
}

/**
 * Seed all hotel data: 6 pages, header & footer globals.
 * Designed to work on both fresh DBs and Railway (where media already exists).
 *
 * Call via POST /next/seed from admin dashboard.
 */
export const seedHotelData = async ({
  payload,
  req,
}: {
  payload: Payload
  req: PayloadRequest
}): Promise<void> => {
  payload.logger.info('Seeding hotel data...')

  // ── Helper: resolve media IDs (skip if media doesn't exist) ────────
  const existingMedia = await payload.find({
    collection: 'media',
    limit: 100,
    depth: 0,
    pagination: false,
  })
  const mediaIds = new Set(existingMedia.docs.map((m) => m.id))
  const mid = (id: number): any => (mediaIds.has(id) ? id : undefined)
  const mimg = (id: number) => {
    const resolved = mid(id)
    return resolved !== undefined ? [{ image: resolved }] : []
  }
  payload.logger.info(`— Found ${mediaIds.size} existing media records`)

  // ── Step 1: Clear existing pages ──────────────────────────────────
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

  // ── Step 2: Create all 6 pages ────────────────────────────────────
  payload.logger.info('— Creating pages...')

  // ---------- Page 1: Main ----------
  const mainPage = await payload.create({
    collection: 'pages',
    locale: 'vi',
    depth: 0,
    context: { disableRevalidate: true },
    data: {
      title: 'Main',
      slug: 'home',
      _status: 'published',
      hero: { type: 'none' },
      layout: [
        {
          blockType: 'hero',
          subtitle: 'Welcome to',
          name: 'The Calanthe',
          tagline:
            'Wake up to soft light, thoughtful details, and a sense of calm crafted for modern travelers who value balance and beauty',
          showCTA: false,
          ctaText: 'Book Now',
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
          title: 'A Refined Stay,\u00a0Thoughtfully Designed',
          leftText:
            'The Calanthe is a boutique hotel created for travelers who value calm, comfort, and intentional design.',
          ctaText: 'More About Us',
          ctaLink: '/accomi',
          image1: mid(6),
          image2: mid(7),
          rightText:
            'Every space is shaped to help you slow down and feel at ease. From soft materials to carefully curated details, The Calanthe balances modern elegance with a warm, welcoming atmosphere\u2014so your stay feels personal, not transactional.',
          enabled: true,
        },
        {
          blockType: 'accommodations-type2',
          title: 'Designed Around How You Rest',
          ctaText: 'More About Us',
          ctaLink: '/accommodations',
          rooms: [
            {
              name: 'Deluxe Room',
              description:
                'Ideal for short stays and business travelers who value simplicity and quality.',
              buttonText: 'Book now',
              buttonLink: '/booking',
              features: [
                { icon: 'bed', text: 'Queen or king-size bed with premium bedding.' },
                { icon: 'sofa', text: 'Work-friendly desk and comfortable seating.' },
                { icon: 'bath', text: 'Modern bathroom with walk-in shower.' },
              ],
              images: mimg(9),
            },
            {
              name: 'Premier Room',
              description:
                'Designed for longer stays or guests who enjoy extra room to relax.',
              buttonText: 'Book now',
              buttonLink: '/booking',
              features: [
                { icon: 'bed', text: 'Spacious sleeping area with lounge seating' },
                { icon: 'sofa', text: 'Large windows for natural daylight' },
                { icon: 'bath', text: 'Upgraded bathroom amenities' },
              ],
              images: mimg(10),
            },
            {
              name: 'Junior Suite',
              description:
                'Offered clearly defined living and resting zones, ideal for couples or extended stays.',
              buttonText: 'Book now',
              buttonLink: '/booking',
              features: [
                { icon: 'bed', text: 'King-size bed with enhanced comfort features' },
                { icon: 'sofa', text: 'Separate seating or living area' },
                { icon: 'bath', text: 'Premium bath amenities and refined finishes' },
              ],
              images: mimg(11),
            },
          ],
          enabled: true,
        },
        {
          blockType: 'our-services',
          sectionTitle: 'Dining That Complements Your Stay',
          sectionDescription:
            'Dining at The Calanthe is designed to complement your stay. Every element is thoughtfully curated to feel relaxed, balanced, and unhurried.',
          columns: '3',
          services: [
            {
              serviceImage: mid(12),
              serviceName: 'Calm Space',
              serviceDescription:
                'The restaurant space is warm, quiet, and intentionally designed. Soft lighting, natural materials, and an open layout create an atmosphere that feels welcoming at any time of day.',
            },
            {
              serviceImage: mid(13),
              serviceName: 'Balanced Drinks',
              serviceDescription:
                'Our drinks menu is carefully selected with comfort in mind. From freshly brewed coffee and herbal teas to refreshing juices and light cocktails, each option is crafted to be smooth and approachable.',
            },
            {
              serviceImage: mid(14),
              serviceName: 'Thoughtful Foods',
              serviceDescription:
                'The Calanthe\u2019s cuisine celebrates simplicity and quality. Fresh ingredients, refined preparation, and balanced flavors come together in dishes that feel familiar yet considered.',
            },
          ],
          enabled: true,
        },
        {
          blockType: 'photo-gallery',
          title: 'Experience The Calanthe Through Every Detail',
          layout: 'bento',
          loadMoreText: 'Load more',
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
        { ...offersBlock, image: mid(15) },
      ],
    },
  })

  // ---------- Page 2: Accommodations ----------
  const accommodationsPage = await payload.create({
    collection: 'pages',
    locale: 'vi',
    depth: 0,
    context: { disableRevalidate: true },
    data: {
      title: 'Accommodations',
      slug: 'accommodations',
      _status: 'published',
      hero: { type: 'none' },
      layout: [
        {
          blockType: 'hero',
          subtitle: 'Home / Accomodations',
          name: 'Accomodations',
          tagline: 'Our accommodations are designed with one purpose: exceptional rest.',
          showCTA: false,
          ctaText: 'Book Now',
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
              name: 'Deluxe Room',
              subtitle:
                'Ideal for short stays and business travelers who value simplicity and quality.',
              bookLink: '/booking',
              amenities: [
                { icon: 'bed', text: 'Queen or king-size bed with premium bedding.' },
                { icon: 'sofa', text: 'Work-friendly desk and comfortable seating.' },
                { icon: 'bath', text: 'Modern bathroom with walk-in shower.' },
              ],
              images: mimg(10),
            },
            {
              category: 'deluxe',
              name: 'Premier Room',
              subtitle:
                'Designed for longer stays or guests who enjoy extra room to relax.',
              bookLink: '/booking',
              amenities: [
                { icon: 'bed', text: 'Spacious sleeping area with lounge seating' },
                { icon: 'sofa', text: 'Large windows for natural daylight' },
                { icon: 'bath', text: 'Upgraded bathroom amenities' },
              ],
              images: mimg(11),
            },
            {
              category: 'family',
              name: 'Junior Suite',
              subtitle:
                'Offered clearly defined living and resting zones, ideal for couples or extended stays.',
              bookLink: '/booking',
              amenities: [
                { icon: 'bed', text: 'King-size bed with enhanced comfort features' },
                { icon: 'sofa', text: 'Separate seating or living area' },
                { icon: 'bath', text: 'Premium bath amenities and refined finishes' },
              ],
              images: mimg(9),
            },
            {
              category: 'suites',
              name: 'Cozy Retreat Suite',
              subtitle:
                'Offered clearly defined living and resting zones, ideal for couples or extended stays.',
              bookLink: '/booking',
              amenities: [
                { icon: 'bed', text: 'King-size bed with enhanced comfort features' },
                { icon: 'sofa', text: 'Separate seating or living area' },
                { icon: 'bath', text: 'Premium bath amenities and refined finishes' },
              ],
              images: mimg(8),
            },
            {
              category: 'suites',
              name: 'Charming Junior Suite',
              subtitle:
                'Offered clearly defined living and resting zones, ideal for couples or extended stays.',
              bookLink: '/booking',
              amenities: [
                { icon: 'bed', text: 'King-size bed with enhanced comfort features' },
                { icon: 'sofa', text: 'Separate seating or living area' },
                { icon: 'bath', text: 'Premium bath amenities and refined finishes' },
              ],
              images: mimg(10),
            },
          ],
          enabled: true,
        },
        { ...offersBlock, image: mid(15) },
      ],
    },
  })

  // ---------- Page 3: Restaurants & Bars ----------
  const restaurantsPage = await payload.create({
    collection: 'pages',
    locale: 'vi',
    depth: 0,
    context: { disableRevalidate: true },
    data: {
      title: 'Restaurants & Bars',
      slug: 'restaurants',
      _status: 'published',
      hero: { type: 'none' },
      layout: [
        {
          blockType: 'hero',
          subtitle: 'Home / Restaurants & Bars',
          name: 'Restaurants & Bars',
          tagline:
            'Dining at The Calanthe is designed to complement your stay. Every element is thoughtfully curated to feel relaxed, balanced, and unhurried.',
          showCTA: false,
          ctaText: 'Book Now',
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
          sectionTitle: 'The Space',
          sectionDescription:
            'Dining at The Calanthe is designed to complement your stay.',
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
          images: [...mimg(17), ...mimg(18), ...mimg(19)],
          enabled: true,
        },
        {
          blockType: 'food-drink',
          title: 'Foods & Drinks',
          featuredImage: mid(20),
          featuredTitle: 'Tranquil Haven',
          featuredDescription:
            'Experience the serene flavors of Tranquil Haven, a dish that combines delicate herbs with fresh, seasonal vegetables, all drizzled with a light citrus vinaigrette. This refreshing plate is designed to evoke a sense of calm and peace, perfect for a relaxing meal.',
          sideItems: [
            {
              image: mid(21),
              title: 'Gourmet Suite',
              description:
                'A perfect choice for quick getaways and professionals seeking comfort and elegance',
            },
            {
              image: mid(22),
              title: 'Luxury Haven',
              description:
                'An excellent option for brief visits and business guests who appreciate straightforwardness and high standards.',
            },
            {
              image: mid(23),
              title: 'Opulent Retreat',
              description:
                'The ideal spot for short trips and corporate travelers who prioritize ease and quality.',
            },
          ],
          enabled: true,
        },
        {
          blockType: 'special-offers',
          sectionTitle: 'Special Offers',
          columns: '3',
          showNavigation: true,
          offers: [
            {
              image: mid(23),
              title: 'Gourmet Suite',
              description:
                'A perfect choice for quick getaways and professionals seeking comfort and elegance.',
              ctaText: 'Get The Offer',
              ctaLink: '/offers',
            },
            {
              image: mid(22),
              title: 'Luxury Haven',
              description:
                'An excellent option for brief visits and business guests who appreciate straightforwardness and high standards.',
              ctaText: 'Get The Offer',
              ctaLink: '/offers',
            },
            {
              image: mid(21),
              title: 'Opulent Retreat',
              description:
                'The ideal spot for short trips and corporate travelers who prioritize ease and quality.',
              ctaText: 'Get The Offer',
              ctaLink: '/offers',
            },
          ],
          enabled: true,
        },
        { ...offersBlock, image: mid(15) },
      ],
    },
  })

  // ---------- Page 4: Gallery ----------
  const galleryPage = await payload.create({
    collection: 'pages',
    locale: 'vi',
    depth: 0,
    context: { disableRevalidate: true },
    data: {
      title: 'Gallery',
      slug: 'gallery',
      _status: 'published',
      hero: { type: 'none' },
      layout: [
        {
          blockType: 'hero',
          subtitle: 'Home / Gallery',
          name: 'Gallery',
          tagline:
            'The Gallery offers a visual journey through the spaces and atmosphere of The Calanthe. Each image reflects the balance of design, comfort, and calm ',
          showCTA: false,
          ctaText: 'Book Now',
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
          loadMoreText: 'Load more',
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
        { ...offersBlock, image: mid(15) },
      ],
    },
  })

  // ---------- Page 5: Our Story ----------
  const ourStoryPage = await payload.create({
    collection: 'pages',
    locale: 'vi',
    depth: 0,
    context: { disableRevalidate: true },
    data: {
      title: 'Our Story',
      slug: 'our-story',
      _status: 'published',
      hero: { type: 'none' },
      layout: [
        {
          blockType: 'hero',
          subtitle: 'Home / Story',
          name: 'Our Story',
          tagline:
            'The Gallery offers a visual journey through the spaces and atmosphere of The Calanthe. Each image reflects the balance of design, comfort, and calm that defines every stay.',
          showCTA: false,
          ctaText: 'Book Now',
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
          title: 'Why The Calanthe\u00a0Exists?',
          paragraph1:
            'The Calanthe was created to answer a growing need for quieter, more intentional stays. As travel became faster and more transactional, we saw how often comfort, calm, and human connection were overlooked.',
          paragraph2:
            'We exist to offer an alternative\u2014one where guests can slow down, feel at ease, and experience hospitality without pressure or excess. The Calanthe is not about doing more. It is about doing what matters, better.',
          imageRight1: mid(27),
          imageRight2: mid(28),
          enabled: true,
        },
        {
          blockType: 'vision',
          mainTitle: 'Redefining Comfort\u00a0Through Simplicity',
          mainDescription:
            'Our vision is to become a destination for travelers who value clarity, balance, and meaningful design. We aim to redefine comfort\u2014not as luxury for display, but as an experience that genuinely supports rest and well-being.',
          cards: [
            {
              icon: 'eye',
              style: 'dark',
              title: 'Our Vision',
              description:
                'We aim to redefine comfort\u2014not as luxury for display, but as an experience that genuinely supports rest and well-being.',
            },
            {
              icon: 'target',
              style: 'light',
              title: 'Our Goal',
              description:
                'Create spaces that feel natural and effortless. Deliver consistent, thoughtful service. Build a hotel experience that feels personal, not generic',
            },
          ],
          enabled: true,
        },
        {
          blockType: 'content-image',
          imagePosition: 'right',
          showBorder: true,
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
          image: mid(28),
          enabled: true,
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
              description:
                'Spaces are designed around how people move and use them.',
            },
            {
              icon: 'volume-off',
              title: 'Quiet Comfort & Sound Control',
              description:
                'Acoustic considerations are integrated throughout the hotel.',
            },
            {
              icon: 'utensils',
              title: 'Calm Dining Experience',
              description:
                'Our restaurant and bar are designed for unhurried moments.',
            },
            {
              icon: 'palette',
              title: 'Consistent Design Language',
              description: 'Every detail follows a cohesive design approach',
            },
            {
              icon: 'accessibility',
              title: 'Accessible & Inclusive Spaces',
              description:
                'Accessibility is considered from the start, not added later.',
            },
          ],
          enabled: true,
        },
        {
          blockType: 'collaboration',
          title: 'Working With\u00a0Like-Minded Creators',
          description:
            'We collaborate with partners who share our values of quality, responsibility, and thoughtful design.',
          partners: [{ name: 'a', logo: mid(32) }],
          enabled: true,
        },
      ],
    },
  })

  // ---------- Page 6: Contact & Location ----------
  const contactPage = await payload.create({
    collection: 'pages',
    locale: 'vi',
    depth: 0,
    context: { disableRevalidate: true },
    data: {
      title: 'Contact & Location',
      slug: 'co',
      _status: 'published',
      hero: { type: 'none' },
      layout: [
        {
          blockType: 'hero',
          subtitle: 'Home / Contact & Location',
          name: 'Contact & Location',
          tagline:
            'The Gallery offers a visual journey through the spaces and atmosphere of The Calanthe. Each image reflects the balance of design, comfort, and calm',
          showCTA: false,
          ctaText: 'Book Now',
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
          address1Label: 'Address 1',
          address1: '12 Anchor Road, Sai Kung',
          address2Label: 'Address 2',
          address2: '8 Seashell Drive, Lantau Island',
          hotlineLabel: 'Hotline',
          hotline: '+84 777 4340',
          emailLabel: 'Email',
          email: 'Calanthehotel@gmail.com',
          ctaText: 'Contact Us',
          ctaLink: '/contact',
          mapImage: mid(31),
          enabled: true,
        },
        { ...offersBlock, image: mid(15) },
      ],
    },
  })

  payload.logger.info(
    `— Created 6 pages: Main(${mainPage.id}), Accommodations(${accommodationsPage.id}), Restaurants(${restaurantsPage.id}), Gallery(${galleryPage.id}), Our Story(${ourStoryPage.id}), Contact(${contactPage.id})`,
  )

  // ── Step 3: Update globals ────────────────────────────────────────
  payload.logger.info('— Updating header...')
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
      showCTA: true,
      ctaText: 'Book Your Stay',
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

  payload.logger.info('— Updating footer...')
  await payload.updateGlobal({
    slug: 'footer',
    locale: 'vi',
    depth: 0,
    context: { disableRevalidate: true },
    data: {
      subscribeTitle: 'Get the latest news & discounts',
      subscribeSubtitle: 'Subscribe to our newsletter to stay on updated',
      subscribeButtonText: 'Subscribe',
      subscribeButtonLink: '/subscribe',
      logo: mid(1),
      addresses: [
        { address: '12 Anchor Road, Sai Kung' },
        { address: '8 Seashell Drive, Lantau Island' },
      ],
      phone: '+84 777 4340',
      email: 'Calanthehotel@gmail.com',
      findUsText: 'Find us',
      socialLinks: [
        { platform: 'instagram', url: 'https://www.youtube.com/' },
        { platform: 'facebook', url: 'https://www.youtube.com/' },
      ],
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
      copyrightText: '@2025 Calanthe hotel All rights Reserves',
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

  payload.logger.info('Seeded hotel data successfully!')
}
