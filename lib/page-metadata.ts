import type { Metadata } from 'next'

const OG_IMAGE = '/images/og-image.jpg'

/**
 * Per-page metadata including social sharing tags. Next.js replaces (does not
 * deep-merge) openGraph/twitter set in a page, so every page that sets its own
 * title must provide the full set here to avoid inheriting the homepage's.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type: 'website',
      images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGE],
    },
  }
}
