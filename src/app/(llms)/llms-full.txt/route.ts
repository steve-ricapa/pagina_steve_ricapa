import { getAllDocs } from "@/features/doc/data/documents"
import { getLLMText } from "@/features/doc/lib/get-llm-text"
import { AWARDS } from "@/features/portfolio/data/awards"
import { EDUCATION } from "@/features/portfolio/data/education"
import { SOCIAL_LINKS } from "@/features/portfolio/data/social-links"
import { USER } from "@/features/portfolio/data/user"
import { formatPeriod } from "@/features/portfolio/lib/format-period"
import {
  certificationsMarkdown,
  experienceMarkdown,
  projectsMarkdown,
  stackMarkdown,
} from "@/features/portfolio/lib/profile-markdown"

export const dynamic = "force-static"

export async function GET() {
  const posts = await Promise.all(getAllDocs().map(getLLMText))
  const sections = [
    `# ${USER.displayName}\n\n> ${USER.bio}\n\n${USER.address}\n\n${USER.about}`,
    `# Contact\n\n${SOCIAL_LINKS.map(({ title, href }) => `- [${title}](${href})`).join("\n")}`,
    `# Tech Stack\n\n${stackMarkdown}`,
    `# Experience\n\n${experienceMarkdown}`,
    `# Projects\n\n${projectsMarkdown}`,
    `# Education\n\n${EDUCATION.flatMap(({ companyName, positions }) => positions.map(({ title, employmentPeriod }) => `- ${title} · ${companyName} · ${formatPeriod(employmentPeriod)}`)).join("\n")}`,
    `# Awards & Achievements\n\n${AWARDS.map(({ year, title, organizer }) => `- ${year} · ${title} · ${organizer}`).join("\n")}`,
    `# Certifications\n\n${certificationsMarkdown}`,
    ...(posts.length ? [`# Blog\n\n${posts.join("\n\n")}`] : []),
  ]
  return new Response(sections.join("\n\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  })
}
