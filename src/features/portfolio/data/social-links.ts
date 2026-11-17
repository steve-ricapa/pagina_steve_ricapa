import type { SocialLink } from "../types/social-links"

export const GITHUB_USERNAME = "steve-ricapa"
export const GITHUB_URL = `https://github.com/${GITHUB_USERNAME}`
export const LINKEDIN_URL = "https://pe.linkedin.com/in/steve-ricapa-656313239"

export const SOCIAL_LINKS: SocialLink[] = [
  {
    title: "GitHub",
    subtitle: GITHUB_USERNAME,
    href: GITHUB_URL,
    icon: "/github-icon.webp",
  },
  {
    title: "LinkedIn",
    subtitle: "Steve Ricapa",
    href: LINKEDIN_URL,
    icon: "/linkedin-icon.webp",
  },
]
