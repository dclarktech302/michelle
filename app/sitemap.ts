import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.michelewjohnson.com'

const routes = [
  '/',
  '/about',
  '/issues',
  '/events',
  '/endorsements',
  '/gallery',
  '/get-involved',
  '/vote',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return routes.map((route) => ({
    url: route === '/' ? BASE_URL : `${BASE_URL}${route}`,
    lastModified,
  }))
}
