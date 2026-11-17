import "@/styles/globals.css"

import type { Metadata, Viewport } from "next"
import { NuqsAdapter } from "nuqs/adapters/next/app"

import { Providers } from "@/components/providers"
import { META_THEME_COLORS, SITE_INFO } from "@/config/site"
import { USER } from "@/features/portfolio/data/user"
import { fontMono, fontPixelSquare, fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_INFO.url),
  title: {
    template: `%s – ${SITE_INFO.name}`,
    default: `${USER.displayName} – ${USER.jobTitle}`,
  },
  description: SITE_INFO.description,
  keywords: SITE_INFO.keywords,
  authors: [{ name: USER.displayName }],
  creator: USER.displayName,
  manifest: "/manifest.webmanifest",
  robots: SITE_INFO.hasPublicUrl ? undefined : { index: false, follow: false },
  openGraph: {
    siteName: SITE_INFO.name,
    url: SITE_INFO.hasPublicUrl ? "/" : undefined,
    type: "profile",
    locale: "en_US",
    firstName: USER.firstName,
    lastName: USER.lastName,
    username: USER.username,
    images: [
      { url: SITE_INFO.ogImage, width: 1200, height: 630, alt: SITE_INFO.name },
    ],
  },
  twitter: { card: "summary_large_image", images: [SITE_INFO.ogImage] },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: META_THEME_COLORS.light },
    { media: "(prefers-color-scheme: dark)", color: META_THEME_COLORS.dark },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cn(
        fontSans.variable,
        fontMono.variable,
        fontPixelSquare.variable
      )}
      suppressHydrationWarning
    >
      <body>
        <Providers>
          <NuqsAdapter>{children}</NuqsAdapter>
        </Providers>
      </body>
    </html>
  )
}
