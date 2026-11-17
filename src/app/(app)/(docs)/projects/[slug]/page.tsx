import { ArrowLeftIcon } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import { MDX } from "@/components/mdx"
import { Button } from "@/components/ui/button"
import { Tag } from "@/components/ui/tag"
import { Prose } from "@/components/ui/typography"
import { SITE_INFO } from "@/config/site"
import { PROJECTS } from "@/features/portfolio/data/projects"
import { getProjectDocBySlug } from "@/features/project/data/project-documents"

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return PROJECTS.flatMap(({ slug }) => (slug ? [{ slug }] : []))
}

function getProject(slug: string) {
  return PROJECTS.find((project) => project.slug === slug) ?? notFound()
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  const path = `/projects/${slug}`
  const images = [
    project.cover ||
      `/og/simple?${new URLSearchParams({ title: project.title })}`,
  ]
  return {
    title: project.title,
    description: project.description,
    alternates: SITE_INFO.hasPublicUrl ? { canonical: path } : undefined,
    openGraph: {
      title: project.title,
      description: project.description,
      url: SITE_INFO.hasPublicUrl ? path : undefined,
      images,
    },
    twitter: { card: "summary_large_image", images },
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const project = getProject(slug)
  const doc = getProjectDocBySlug(slug)

  return (
    <>
      <div className="screen-line-after p-2 pl-4">
        <Button className="gap-2 font-mono" variant="link" size="sm" asChild>
          <Link href="/#projects">
            <ArrowLeftIcon /> Projects
          </Link>
        </Button>
      </div>
      <div className="space-y-4 px-4 py-6">
        <Tag>{project.status}</Tag>
        <Prose>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          {project.problem && (
            <>
              <h2>Problem</h2>
              <p>{project.problem}</p>
            </>
          )}
          {project.contribution && (
            <>
              <h2>My contribution</h2>
              <p>{project.contribution}</p>
            </>
          )}
          {project.architecture && (
            <>
              <h2>Architecture</h2>
              <p>{project.architecture}</p>
            </>
          )}
          {doc && <MDX code={doc.content} />}
        </Prose>
        {project.skills.length > 0 && (
          <ul className="flex flex-wrap gap-1.5" aria-label="Technical areas">
            {project.skills.map((skill) => (
              <li key={skill}>
                <Tag>{skill}</Tag>
              </li>
            ))}
          </ul>
        )}
        {[
          ...(project.cover
            ? [{ url: project.cover, alt: project.title }]
            : []),
          ...(project.screenshots ?? []),
        ].map(({ url, alt }) => (
          <Image
            key={url}
            src={url}
            alt={alt}
            width={1200}
            height={630}
            unoptimized
            className="rounded-lg"
          />
        ))}
        {(project.link || project.github) && (
          <div className="flex gap-4 text-sm">
            {project.link && (
              <a className="link" href={project.link}>
                Official site
              </a>
            )}
            {project.github && (
              <a className="link" href={project.github}>
                Repository
              </a>
            )}
          </div>
        )}
        {project.references?.length && (
          <section className="space-y-2 text-sm">
            <h2 className="font-medium">Original figures</h2>
            <ul className="space-y-2">
              {project.references.map(({ url, label }) => (
                <li key={url}>
                  <a className="link" href={url}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </>
  )
}
