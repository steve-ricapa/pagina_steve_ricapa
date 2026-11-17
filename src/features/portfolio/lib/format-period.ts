import type { ExperiencePosition } from "../types/experiences"

export function formatPeriod({
  start,
  end,
  current,
}: ExperiencePosition["employmentPeriod"]) {
  if (start && end) return `${start}–${end}${current ? " · In progress" : ""}`
  if (current) return start ? `${start}–Present` : "Present"
  return start ? `Started ${start}` : end ? `Ended ${end}` : ""
}
