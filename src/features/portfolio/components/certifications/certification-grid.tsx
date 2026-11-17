"use client"

import { ChevronDownIcon, SearchIcon } from "lucide-react"
import { useState } from "react"

import {
  CERTIFICATION_TOPICS,
  type CertificationCard,
} from "../../types/certifications"
import { CertificationItem } from "./certification-item"

const INITIAL_COUNT = 6
const FILTERS = ["All", "Microsoft", ...CERTIFICATION_TOPICS] as const
const control =
  "rounded-md border border-edge bg-background px-2.5 py-1.5 text-sm focus-visible:outline-2 focus-visible:outline-ring"

function normalize(text: string) {
  return text
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim()
}

export function CertificationGrid({
  entries,
}: {
  entries: CertificationCard[]
}) {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All")
  const [query, setQuery] = useState("")
  const [order, setOrder] = useState("newest")
  const [expanded, setExpanded] = useState(false)
  const search = normalize(query)
  const filtered = entries
    .filter((entry) => {
      if (filter === "Microsoft" && entry.issuer !== "Microsoft") return false
      if (filter !== "All" && filter !== "Microsoft" && entry.topic !== filter)
        return false
      if (filter === "All" && !search && entry.featured) return false
      return normalize(
        [entry.title, entry.issuer, entry.examCode, entry.category, entry.topic]
          .filter(Boolean)
          .join(" ")
      ).includes(search)
    })
    .sort((a, b) => {
      const byTitle = a.title.localeCompare(b.title, "en")
      if (order === "title") return byTitle
      if (!a.issueDate || !b.issueDate)
        return (
          Number(Boolean(b.issueDate)) - Number(Boolean(a.issueDate)) || byTitle
        )
      return (
        (order === "oldest"
          ? a.issueDate.localeCompare(b.issueDate)
          : b.issueDate.localeCompare(a.issueDate)) || byTitle
      )
    })
  const visible = expanded ? filtered : filtered.slice(0, INITIAL_COUNT)

  return (
    <>
      <div
        className="flex flex-wrap gap-1.5"
        role="group"
        aria-label="Filter certifications"
      >
        {FILTERS.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={filter === item}
            onClick={() => {
              setFilter(item)
              setExpanded(false)
            }}
            className={`${control} hover:bg-muted aria-pressed:bg-foreground aria-pressed:text-background`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap items-end gap-3">
        <label className="min-w-0 flex-1 basis-56 space-y-1 text-sm">
          <span className="font-medium">Search credentials</span>
          <span className="relative block">
            <SearchIcon
              className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden
            />
            <input
              type="search"
              className={`${control} w-full pl-8`}
              placeholder="Name, issuer or exam code"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value)
                setExpanded(false)
              }}
            />
          </span>
        </label>
        <label className="space-y-1 text-sm">
          <span className="block font-medium">Sort by</span>
          <select
            className={control}
            value={order}
            onChange={(event) => {
              setOrder(event.target.value)
              setExpanded(false)
            }}
          >
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
            <option value="title">Name A–Z</option>
          </select>
        </label>
      </div>
      <p className="font-mono text-xs text-muted-foreground" aria-live="polite">
        {filtered.length
          ? `Showing ${visible.length} of ${filtered.length}`
          : "No credentials match your search."}
      </p>
      <ul id="other-certifications" className="grid gap-3 sm:grid-cols-2">
        {visible.map((entry) => (
          <li key={entry.id} className="min-w-0">
            <CertificationItem certification={entry} />
          </li>
        ))}
      </ul>
      {filtered.length > INITIAL_COUNT && (
        <button
          type="button"
          aria-controls="other-certifications"
          aria-expanded={expanded}
          className="mx-auto flex items-center gap-2 rounded-md border border-edge px-3 py-2 text-sm transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-ring"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show fewer" : "View all"}
          <ChevronDownIcon
            aria-hidden
            className={`size-4 motion-safe:transition-transform ${expanded ? "rotate-180" : ""}`}
          />
        </button>
      )}
    </>
  )
}
