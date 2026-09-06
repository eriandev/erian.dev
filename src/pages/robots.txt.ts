import type { APIRoute } from 'astro'

const getRobotsTxt = ({ href }: URL) => `\
User-agent: *
Allow: /

Sitemap: ${href}
`

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL('sitemap.xml', site)
  return new Response(getRobotsTxt(sitemapURL))
}
