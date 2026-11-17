import { projectsMarkdown } from "@/features/portfolio/lib/profile-markdown"

export const dynamic = "force-static"

export function GET() {
  return new Response(`# Projects\n\n${projectsMarkdown}\n`, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  })
}
