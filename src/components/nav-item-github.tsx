import { GITHUB_URL } from "@/features/portfolio/data/social-links"

import { Icons } from "./icons"
import { Button } from "./ui/button"

export function NavItemGitHub() {
  return (
    <Button asChild variant="ghost" size="icon-sm">
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub profile"
      >
        <Icons.github />
      </a>
    </Button>
  )
}
