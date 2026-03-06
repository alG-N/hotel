import config from '../payload.config'
import type { PayloadRequest } from 'payload'
import { getPayload } from 'payload'
import { seed } from '../endpoints/seed'

const run = async (): Promise<void> => {
  const payload = await getPayload({ config })

  const { totalDocs } = await payload.count({
    collection: 'pages',
  })

  if (totalDocs > 0) {
    payload.logger.info('Seed skipped: pages already exist.')
    return
  }

  // Seed helper does not rely on authenticated user context.
  await seed({ payload, req: {} as PayloadRequest })
  payload.logger.info('Seed completed: initial data inserted.')
}

run()
  .then(() => {
    process.exit(0)
  })
  .catch((error) => {
    console.error('Seed failed:', error)
    process.exit(1)
  })
