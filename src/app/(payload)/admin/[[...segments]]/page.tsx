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

export const generateMetadata = ({ params, searchParams }: Args): Promise<Metadata> => {
  if (process.env.SKIP_STATIC_BUILD_DB === 'true') {
    return Promise.resolve({ title: 'Admin' })
  }

  return generatePageMetadata({ config, params, searchParams })
}

const Page = ({ params, searchParams }: Args) => {
  if (process.env.SKIP_STATIC_BUILD_DB === 'true') {
    return null
  }

  return RootPage({ config, params, searchParams, importMap })
}

export default Page
