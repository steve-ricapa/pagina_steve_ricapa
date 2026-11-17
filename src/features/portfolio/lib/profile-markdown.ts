import { getCertificationCards } from "../data/certifications"
import { EXPERIENCES } from "../data/experiences"
import { PROJECTS } from "../data/projects"
import { TECH_STACK } from "../data/tech-stack"
import { TECH_CATEGORIES, TECH_STATUSES } from "../types/tech-stack"
import { certificationStatus } from "./certification-status"
import { formatPeriod } from "./format-period"

export const experienceMarkdown = EXPERIENCES.flatMap(
  ({ companyName, positions }) =>
    positions.map((position) =>
      [
        `## ${position.title} | ${companyName}`,
        formatPeriod(position.employmentPeriod),
        position.skills?.length ? `Skills: ${position.skills.join(", ")}` : "",
        position.description,
      ]
        .filter(Boolean)
        .join("\n\n")
    )
).join("\n\n")

export const projectsMarkdown = PROJECTS.map((project) =>
  [
    `## ${project.title}`,
    `Status: ${project.status}`,
    project.description,
    project.contribution && `Contribution: ${project.contribution}`,
    project.problem && `Problem: ${project.problem}`,
    project.architecture && `Architecture: ${project.architecture}`,
    project.link && `Official site: ${project.link}`,
    project.github && `Repository: ${project.github}`,
    project.skills.length && `Technical areas: ${project.skills.join(", ")}`,
  ]
    .filter(Boolean)
    .join("\n\n")
).join("\n\n")

export const certificationsMarkdown = getCertificationCards()
  .map((record) => {
    const {
      title,
      issuer,
      issueDate,
      expirationDate,
      examCode,
      topics,
      credentialUrl,
      associatedCredential,
      officialUrl,
      category,
    } = record
    const name =
      examCode && !title.startsWith(`${examCode}:`)
        ? `${examCode} — ${title}`
        : title
    const label = credentialUrl ? `[${name}](${credentialUrl})` : name
    return `- ${[`${label} (${issuer}; ${category})`, issueDate && `Issued ${issueDate}`, expirationDate && `Expiration ${expirationDate}`, certificationStatus(record), associatedCredential && `Associated credential: ${associatedCredential}`, officialUrl && `[Official program reference](${officialUrl})`, topics?.length && `Exam topics: ${topics.join(", ")}`].filter(Boolean).join(" · ")}`
  })
  .join("\n")

export const stackMarkdown = TECH_STACK.map(
  ({ title, category, status, context }) =>
    `- ${title} (${TECH_CATEGORIES[category]} · ${TECH_STATUSES[status]}): ${context}`
).join("\n")
