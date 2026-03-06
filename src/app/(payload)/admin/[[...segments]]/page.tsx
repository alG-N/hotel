/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import type { Metadata } from 'next'

import config from '@payload-config'
import { RootPage, generatePageMetadata } from '@payloadcms/next/views'
import { importMap } from '../importMap'

type Args = {
  params: Promise<{
    segments: string[]
  }>
  searchParams: Promise<{
    [key: string]: string | string[]
  }>
}

export const dynamic = 'force-dynamic'

export const generateMetadata = async ({ params, searchParams }: Args): Promise<Metadata> => {
  if (process.env.SKIP_STATIC_BUILD_DB === 'true') {
    return { title: 'Admin' }
  }

  try {
    return await generatePageMetadata({ config, params, searchParams })
  } catch {
    return { title: 'Admin' }
  }
}

const Page = async ({ params, searchParams }: Args) => {
  if (process.env.SKIP_STATIC_BUILD_DB === 'true') {
    return (
      <main style={{ minHeight: '100vh', padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Admin Temporarily Unavailable</h1>
        <p style={{ marginTop: '0.75rem' }}>
          Database schema is not initialized yet. Run migrations/seed, then reload `/admin`.
        </p>
      </main>
    )
  }

  try {
    return await RootPage({ config, params, searchParams, importMap })
  } catch {
    return (
      <main style={{ minHeight: '100vh', padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Admin Temporarily Unavailable</h1>
        <p style={{ marginTop: '0.75rem' }}>
          Database schema is not initialized yet. Run migrations/seed, then reload `/admin`.
        </p>
      </main>
    )
  }
}

export default Page
