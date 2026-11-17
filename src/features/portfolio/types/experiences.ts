export type ExperiencePositionIcon =
  /** Icon key used to render the position category in the UI. */
  "code" | "design" | "education" | "business" | "idea"

export type ExperiencePosition = {
  id: string
  title: string
  employmentPeriod: {
    /** Use "MM.YYYY" or "YYYY"; omit dates that are not known. */
    start?: string
    end?: string
    current?: boolean
  }
  /** Full-time | Part-time | Contract | Internship, etc. */
  employmentType?: string
  description?: string
  /** UI icon to represent the role type. */
  icon?: ExperiencePositionIcon
  skills?: string[]
  /** Whether the position is expanded by default in the UI. */
  isExpanded?: boolean
}

export type Experience = {
  id: string
  companyName: string
  /** URL to the company logo (absolute URL or path under /public). */
  companyLogo?: string
  /** URL to the company's website. */
  companyWebsite?: string
  /** Roles held at this company; keep newest first for display. */
  positions: ExperiencePosition[]
  /** Marks the company as the current employer for highlighting. */
  isCurrentEmployer?: boolean
}
