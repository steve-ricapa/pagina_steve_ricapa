import type { Activity } from "@/components/kibo-ui/contribution-graph"

function attr(tag: string, name: string) {
  return tag.match(new RegExp(`\\s${name}="([^"]*)"`))?.[1]
}

export function parseGitHubCalendar(html: string) {
  const total = html.match(
    /<h2\b[^>]*\bid="js-contribution-activity-description"[^>]*>\s*([\d,]+)\s+contributions?\s+in the last year\b/i
  )
  const totalCount = total ? Number(total[1].replaceAll(",", "")) : NaN
  const counts = new Map<string, number>()
  for (const [, tag, text] of html.matchAll(
    /(<tool-tip\b[^>]*>)([^<]*)<\/tool-tip>/gi
  )) {
    const id = attr(tag, "for")
    const match = text.trim().match(/^(No|[\d,]+) contributions? on\b/i)
    if (id && match)
      counts.set(
        id,
        match[1].toLowerCase() === "no"
          ? 0
          : Number(match[1].replaceAll(",", ""))
      )
  }

  const data: Activity[] = []
  const dates = new Set<string>()
  for (const [tag] of html.matchAll(
    /<td\b[^>]*\bdata-date="[^"<>]+"[^>]*>/gi
  )) {
    const date = attr(tag, "data-date")
    const level = attr(tag, "data-level")
    const id = attr(tag, "id")
    const count = id ? counts.get(id) : undefined
    if (
      !date ||
      !/^\d{4}-\d{2}-\d{2}$/.test(date) ||
      dates.has(date) ||
      !level ||
      !/^[0-4]$/.test(level) ||
      count === undefined ||
      !Number.isSafeInteger(count) ||
      (count === 0) !== (level === "0")
    ) {
      throw new Error("Unexpected GitHub contribution day")
    }
    dates.add(date)
    data.push({ date, count, level: Number(level) as Activity["level"] })
  }

  if (
    !data.length ||
    !Number.isSafeInteger(totalCount) ||
    data.reduce((sum, day) => sum + day.count, 0) !== totalCount
  ) {
    throw new Error("GitHub calendar does not match its public total")
  }
  data.sort((a, b) => a.date.localeCompare(b.date))
  return { data, totalCount }
}
