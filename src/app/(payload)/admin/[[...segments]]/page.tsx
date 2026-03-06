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
    return null
  }

  try {
    return await RootPage({ config, params, searchParams, importMap })
  } catch {
    return null
  }
}

export default Page
