export const TECH_CATEGORIES = {
  ai: "Artificial Intelligence & Agentic AI",
  backend: "Backend Engineering",
  cloud: "Cloud & DevOps",
  ml: "Machine Learning & Deep Learning",
  vision: "Computer Vision",
  data: "Data Science & Big Data",
  frontend: "Frontend & Mobile",
  security: "AI Security",
  tools: "Agentic Development Tools",
} as const

export const TECH_STATUSES = {
  "hands-on": "Hands-on",
  familiar: "Studied / lab",
  exploring: "Exploring",
} as const

export type TechCategory = keyof typeof TECH_CATEGORIES
export type TechStatus = keyof typeof TECH_STATUSES
export type TechStack = {
  title: string
  category: TechCategory
  status: TechStatus
  context: string
  project?: string
}
