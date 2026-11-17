import { ArrowUpRightIcon, BoxIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Tag } from "@/components/ui/tag"

import type { Project } from "../../types/projects"

export function ProjectCardItem({ project }: { project: Project }) {
  return (
    <article className="screen-line-before screen-line-after flex h-full flex-col gap-3 p-4 transition-colors hover:bg-accent-muted">
      {project.cover && (
        <Image
          src={project.cover}
          alt={project.title}
          width={1200}
          height={630}
          unoptimized
          className="rounded-lg"
        />
      )}
      <div className="flex items-center gap-2 text-muted-foreground">
        <BoxIcon className="size-4" aria-hidden /> <Tag>{project.status}</Tag>
      </div>
      <h3 className="text-lg font-medium text-balance">{project.title}</h3>
      <p className="text-sm text-muted-foreground">{project.description}</p>
      {project.contribution && (
        <p className="text-sm">
          <strong className="font-medium">Contribution:</strong>{" "}
          {project.contribution}
        </p>
      )}
      <ul className="flex flex-wrap gap-1.5" aria-label="Technical areas">
        {project.skills.map((skill) => (
          <li key={skill}>
            <Tag>{skill}</Tag>
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-wrap gap-4 border-t border-edge pt-3 text-xs font-medium">
        {project.slug && (
          <Link
            className="inline-flex items-center gap-1 hover:underline"
            href={`/projects/${project.slug}`}
          >
            View details <ArrowUpRightIcon className="size-3.5" />
          </Link>
        )}
        {project.link && (
          <a
            className="hover:underline"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Official site
          </a>
        )}
        {project.github && (
          <a
            className="hover:underline"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            Repository
          </a>
        )}
      </div>
    </article>
  )
}
