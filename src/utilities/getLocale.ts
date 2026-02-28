import { cookies } from 'next/headers'

export type PayloadLocale = 'vi' | 'en'

/**
 * Reads the preferred locale from the request cookies.
 * Falls back to 'vi' (default locale) if not set.
 * Use this in server components and server-side data fetching.
 */
export async function getLocale(): Promise<PayloadLocale> {
  try {
    const cookieStore = await cookies()
    const locale = cookieStore.get('payload-locale')?.value
    if (locale === 'en' || locale === 'vi') return locale
  } catch {
    // cookies() may throw during static generation
  }
  return 'vi'
}
