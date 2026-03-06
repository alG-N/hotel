import config from '../payload.config'
import type { PayloadRequest } from 'payload'
import { getPayload } from 'payload'
import { seed } from '../endpoints/seed'

const run = async (): Promise<void> => {
  console.log('[SEED] Boot seed script started.')
  const payload = await getPayload({ config })

  const forceSeed = process.env.FORCE_SEED_ON_BOOT === 'true'

  const { totalDocs: pagesBefore } = await payload.count({
    collection: 'pages',
  })
  console.log(`[SEED] Pages before seed: ${pagesBefore}`)

  if (pagesBefore > 0 && !forceSeed) {
    console.log('[SEED] Seed skipped: pages already exist.')
    return
  }

  if (forceSeed) {
    console.log('[SEED] FORCE_SEED_ON_BOOT=true, running seed regardless of current pages count.')
  }

  // Seed helper does not rely on authenticated user context.
  await seed({ payload, req: {} as PayloadRequest })

  const { totalDocs: pagesAfter } = await payload.count({
    collection: 'pages',
  })
  const { totalDocs: postsAfter } = await payload.count({
    collection: 'posts',
  })

  console.log(`[SEED] Pages after seed: ${pagesAfter}`)
  console.log(`[SEED] Posts after seed: ${postsAfter}`)

  if (pagesAfter === 0) {
    throw new Error('Seed finished but no pages were created.')
  }

  console.log('[SEED] Seed completed: initial data inserted.')
}

run()
  .then(() => {
    process.exit(0)
  })
  .catch((error) => {
    console.error('Seed failed:', error)
    process.exit(1)
  })
