import { USER } from "@/features/portfolio/data/user"
import type { NavItem } from "@/types/nav"

export const SITE_INFO = {
  name: USER.displayName,
  url: (process.env.APP_URL || "http://localhost:3000").replace(/\/$/, ""),
  hasPublicUrl: Boolean(process.env.APP_URL),
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
}

export const META_THEME_COLORS = { light: "#ffffff", dark: "#09090b" }

export const MAIN_NAV: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "Stack", href: "/#stack" },
  { title: "Projects", href: "/#projects" },
  { title: "Experience", href: "/#experience" },
]

export const UTM_PARAMS = { utm_source: "steve-ricapa-portfolio" }
