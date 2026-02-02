import type { RequiredDataFromCollectionSlug } from 'payload'

// Used for pre-seeded content so that the homepage is not empty
export const homeStatic: RequiredDataFromCollectionSlug<'pages'> = {
  slug: 'home',
  _status: 'published',
  hero: {
    type: 'none',
  },
  meta: {
    description: 'The Calanthe - A boutique hotel for travelers who value calm, comfort, and intentional design.',
    title: 'The Calanthe Hotel',
  },
  title: 'Home',
  layout: [],
}
