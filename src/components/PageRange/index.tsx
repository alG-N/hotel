'use client'
import React from 'react'
import { useLanguage } from '@/providers/Language'

const defaultLabels = {
  plural: { vi: 'Tài liệu', en: 'Docs' },
  singular: { vi: 'Tài liệu', en: 'Doc' },
}

const defaultCollectionLabels = {
  posts: {
    plural: { vi: 'Bài viết', en: 'Posts' },
    singular: { vi: 'Bài viết', en: 'Post' },
  },
}

export const PageRange: React.FC<{
  className?: string
  collection?: keyof typeof defaultCollectionLabels
  collectionLabels?: {
    plural?: string
    singular?: string
  }
  currentPage?: number
  limit?: number
  totalDocs?: number
}> = (props) => {
  const {
    className,
    collection,
    collectionLabels: collectionLabelsFromProps,
    currentPage,
    limit,
    totalDocs,
  } = props

  const { t } = useLanguage()

  let indexStart = (currentPage ? currentPage - 1 : 1) * (limit || 1) + 1
  if (totalDocs && indexStart > totalDocs) indexStart = 0

  let indexEnd = (currentPage || 1) * (limit || 1)
  if (totalDocs && indexEnd > totalDocs) indexEnd = totalDocs

  const labels = collection ? defaultCollectionLabels[collection] : undefined
  const plural = collectionLabelsFromProps?.plural || (labels ? t(labels.plural.vi, labels.plural.en) : t(defaultLabels.plural.vi, defaultLabels.plural.en))
  const singular = collectionLabelsFromProps?.singular || (labels ? t(labels.singular.vi, labels.singular.en) : t(defaultLabels.singular.vi, defaultLabels.singular.en))

  return (
    <div className={[className, 'font-semibold'].filter(Boolean).join(' ')}>
      {(typeof totalDocs === 'undefined' || totalDocs === 0) && t('Không tìm thấy kết quả.', 'Search produced no results.')}
      {typeof totalDocs !== 'undefined' &&
        totalDocs > 0 &&
        `${t('Hiển thị', 'Showing')} ${indexStart}${indexStart > 0 ? ` - ${indexEnd}` : ''} ${t('trong', 'of')} ${totalDocs} ${
          totalDocs > 1 ? plural : singular
        }`}
    </div>
  )
}
