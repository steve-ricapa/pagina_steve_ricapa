import { experienceMarkdown } from "@/features/portfolio/lib/profile-markdown"

export const dynamic = "force-static"

export function GET() {
  return new Response(`# Experience\n\n${experienceMarkdown}\n`, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  })
}
