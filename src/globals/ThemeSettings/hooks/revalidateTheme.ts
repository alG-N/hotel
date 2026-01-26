import type { GlobalAfterChangeHook } from 'payload'
import { revalidateTag } from 'next/cache'

export const revalidateTheme: GlobalAfterChangeHook = ({ doc, req }) => {
  req.payload.logger.info(`Revalidating theme-settings cache`)
  revalidateTag('global_theme-settings')
  return doc
}
