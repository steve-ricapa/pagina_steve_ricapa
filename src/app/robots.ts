import type { MetadataRoute } from "next"

import { SITE_INFO } from "@/config/site"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: ["/og/", "/vcard/", "/rss", "/blog/rss"],
      },
    ],
    sitemap: SITE_INFO.hasPublicUrl
      ? `${SITE_INFO.url}/sitemap.xml`
      : undefined,
  }
}
