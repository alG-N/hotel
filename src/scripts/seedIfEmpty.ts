import config from '../payload.config'
import type { PayloadRequest } from 'payload'
import { getPayload } from 'payload'
import { seed } from '../endpoints/seed'

const run = async (): Promise<void> => {
  console.log('[SEED] Boot seed script started.')

  let payload
  try {
    console.log('[SEED] Initializing Payload (this triggers schema push)...')
    payload = await getPayload({ config })
    console.log('[SEED] Payload initialized successfully.')
  } catch (err) {
    console.error('[SEED] Failed to initialize Payload:', err)
    throw err
  }

  const forceSeed = process.env.FORCE_SEED_ON_BOOT === 'true'

  let pagesBefore: number
  try {
    const result = await payload.count({ collection: 'pages' })
    pagesBefore = result.totalDocs
    console.log(`[SEED] Pages before seed: ${pagesBefore}`)
  } catch (err) {
    console.error('[SEED] Failed to count pages (tables may not exist yet):', err)
    // If count fails, tables might be empty after push — treat as 0
    pagesBefore = 0
    console.log('[SEED] Treating pages count as 0, will attempt seed.')
  }

  if (pagesBefore > 0 && !forceSeed) {
    console.log('[SEED] Seed skipped: pages already exist.')
    return
  }

  if (forceSeed) {
    console.log('[SEED] FORCE_SEED_ON_BOOT=true, running seed regardless of current pages count.')
  }

  // Seed helper does not rely on authenticated user context.
  console.log('[SEED] Running seed function...')
  try {
    await seed({ payload, req: {} as PayloadRequest })
    console.log('[SEED] Seed function completed.')
  } catch (err) {
    console.error('[SEED] Seed function threw an error:', err)
    throw err
  }

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
