import { InstagramIcon } from "lucide-react"

import {
  GITHUB_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
} from "@/features/portfolio/data/social-links"
import { USER } from "@/features/portfolio/data/user"

import { Icons } from "./icons"

export function SiteFooter({
  width = "default",
}: {
  width?: "default" | "wide"
}) {
  return (
    <footer className="max-w-screen overflow-x-hidden px-2 pb-[env(safe-area-inset-bottom,0px)]">
      <div
        data-width={width}
        className="screen-line-before mx-auto border-x border-edge pt-4 data-[width=wide]:container data-[width=default]:md:max-w-3xl"
      >
        <p className="mb-4 px-4 text-center font-mono text-sm text-muted-foreground">
          {USER.displayName} · {USER.address}
        </p>
        <div className="screen-line-before screen-line-after flex justify-center">
          <div className="flex divide-x divide-edge border-x border-edge">
            <a
              className="grid h-11 w-12 place-items-center text-muted-foreground hover:text-foreground"
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Icons.github className="size-4" />
            </a>
            <a
              className="grid h-11 w-12 place-items-center text-muted-foreground hover:text-foreground"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Icons.linkedin className="size-4" />
            </a>
            <a
              className="grid h-11 w-12 place-items-center text-muted-foreground hover:text-foreground"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon className="size-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="h-2" />
    </footer>
  )
}
