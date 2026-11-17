import { certificationsMarkdown } from "@/features/portfolio/lib/profile-markdown"

export const dynamic = "force-static"

export function GET() {
  return new Response(`# Certifications\n\n${certificationsMarkdown}\n`, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  })
}
