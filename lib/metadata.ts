import type { Metadata } from 'next'

const BASE_URL = 'https://www.auspreiot.com'

interface PageMetaOptions {
  title: string
  description: string
  keywords?: string[]
  path?: string
  ogImage?: string
}

export function buildMeta({
  title,
  description,
  keywords = [],
  path = '',
  ogImage = '/og-image.jpg',
}: PageMetaOptions): Metadata {
  const url = `${BASE_URL}${path}`

  return {
    title,
    description,
    keywords: [
      'Auspre IoT',
      'IoT solutions',
      'custom software development',
      ...keywords,
    ],
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      title,
      description,
      siteName: 'Auspre IoT',
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      creator: '@auspreiot',
    },
  }
}
