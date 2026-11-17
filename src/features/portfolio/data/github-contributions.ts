import { unstable_cache } from "next/cache"

import { parseGitHubCalendar } from "../lib/github-calendar"
import { GITHUB_USERNAME } from "./social-links"

export const getGitHubContributions = unstable_cache(
  async () => {
    const res = await fetch(
      `https://github.com/users/${GITHUB_USERNAME}/contributions`,
      {
        headers: { "Accept-Language": "en-US,en;q=0.9" },
        signal: AbortSignal.timeout(5000),
      }
    )
    if (!res.ok) throw new Error(`GitHub calendar returned ${res.status}`)
    return parseGitHubCalendar(await res.text())
  },
  ["github-direct-public-calendar", GITHUB_USERNAME],
  { revalidate: 300 }
)
