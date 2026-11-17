import type { MetadataRoute } from "next"

import { SITE_INFO } from "@/config/site"
import { getAllDocs } from "@/features/doc/data/documents"
import { PROJECTS } from "@/features/portfolio/data/projects"
import {
  TESTIMONIALS_1,
  TESTIMONIALS_2,
} from "@/features/portfolio/data/testimonials"

export default function sitemap(): MetadataRoute.Sitemap {
  if (!SITE_INFO.hasPublicUrl) return []
  const posts = getAllDocs()
  return [
    { url: SITE_INFO.url },
    ...PROJECTS.flatMap(({ slug }) =>
      slug ? [{ url: `${SITE_INFO.url}/projects/${slug}` }] : []
    ),
    ...(posts.length ? [{ url: `${SITE_INFO.url}/blog` }] : []),
    ...posts.map(({ slug, metadata }) => ({
      url: `${SITE_INFO.url}/blog/${slug}`,
      lastModified: metadata.updatedAt,
    })),
    ...(TESTIMONIALS_1.length + TESTIMONIALS_2.length
      ? [{ url: `${SITE_INFO.url}/testimonials` }]
      : []),
  ]
}
