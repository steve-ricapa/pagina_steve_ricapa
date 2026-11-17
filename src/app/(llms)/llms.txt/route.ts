import { SITE_INFO } from "@/config/site"
import { getAllDocs } from "@/features/doc/data/documents"

export const dynamic = "force-static"

export function GET() {
  const url = SITE_INFO.hasPublicUrl ? SITE_INFO.url : ""
  const posts = getAllDocs()
  const content = `# ${SITE_INFO.name}

> ${SITE_INFO.description}

- [About](${url}/about.md)
- [Experience](${url}/experience.md)
- [Projects](${url}/projects.md)
- [Certifications and exam results](${url}/certifications.md)
- [Full portfolio](${url}/llms-full.txt)
${posts.length ? `\n## Blog\n\n${posts.map(({ slug, metadata }) => `- [${metadata.title}](${url}/blog/${slug}.mdx)`).join("\n")}\n` : ""}`
  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  })
}
