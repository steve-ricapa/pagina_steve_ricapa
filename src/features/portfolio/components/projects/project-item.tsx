import { ArrowUpRightIcon, BoxIcon } from "lucide-react"
import Link from "next/link"

import { Tag } from "@/components/ui/tag"

import type { Project } from "../../types/projects"

export function ProjectItem({ project }: { project: Project }) {
  return (
    <article className="flex items-center gap-4 p-4 transition-colors hover:bg-accent-muted">
      <BoxIcon className="size-5 shrink-0 text-muted-foreground" aria-hidden />
      <div className="min-w-0 flex-1 space-y-1 border-l border-dashed border-edge pl-4">
        <h3 className="font-medium">{project.title}</h3>
        <p className="text-sm text-muted-foreground">{project.description}</p>
        <Tag>{project.status}</Tag>
      </div>
      {project.slug && (
        <Link
          className="shrink-0 rounded p-2 hover:bg-muted"
          href={`/projects/${project.slug}`}
          aria-label={`View ${project.title} details`}
        >
          <ArrowUpRightIcon className="size-4" />
        </Link>
      )}
    </article>
  )
}
