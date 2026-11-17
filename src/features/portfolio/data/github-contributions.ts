import { unstable_cache } from "next/cache"
import { z } from "zod"

import { GITHUB_USERNAME } from "./social-links"

const responseSchema = z.object({
  contributions: z
    .array(
      z.object({
        date: z.string().date(),
        count: z.number().int().nonnegative(),
        level: z.union([
          z.literal(0),
          z.literal(1),
          z.literal(2),
          z.literal(3),
          z.literal(4),
        ]),
      })
    )
    .min(1),
})

export const getGitHubContributions = unstable_cache(
  async () => {
    const base =
      process.env.GITHUB_CONTRIBUTIONS_API_URL ||
      "https://github-contributions-api.jogruber.de"
    const res = await fetch(
      `${base.replace(/\/$/, "")}/v4/${GITHUB_USERNAME}?y=last`,
      { signal: AbortSignal.timeout(4500) }
    )
    if (!res.ok) throw new Error(`Contributions request returned ${res.status}`)
    return responseSchema.parse(await res.json()).contributions
  },
  ["github-contributions", GITHUB_USERNAME],
  { revalidate: 86400 }
)
