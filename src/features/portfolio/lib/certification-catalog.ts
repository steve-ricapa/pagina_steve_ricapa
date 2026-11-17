import type { Certification } from "../types/certifications"

type RequiredFields = "id" | "title" | "issuer" | "category" | "isPublic"

export function certification(
  record: Pick<Certification, RequiredFields> &
    Partial<Omit<Certification, RequiredFields>>
): Certification {
  return {
    examCode: null,
    issueDate: null,
    expirationDate: null,
    credentialId: null,
    credentialUrl: null,
    logo: null,
    status: "listed",
    featured: false,
    source: null,
    examStatus: null,
    credentialStatus: "listed",
    topic: "Other",
    verified: null,
    officialUrl: null,
    associatedCredential: null,
    topics: null,
    ...record,
  }
}

function normalize(text: string) {
  return text.normalize("NFKC").trim().replace(/\s+/g, " ").toLowerCase()
}

export function getPublicCertifications(records: readonly Certification[]) {
  const keys = new Set<string>()
  for (const entry of records) {
    const issuer = normalize(entry.issuer)
    const identities = [
      `id:${normalize(entry.id)}`,
      `title:${issuer}:${normalize(entry.title)}`,
      ...(entry.examCode
        ? [`exam:${issuer}:${normalize(entry.examCode)}`]
        : []),
      ...(entry.credentialId
        ? [`credential:${issuer}:${normalize(entry.credentialId)}`]
        : []),
      ...(entry.credentialUrl
        ? [`url:${new URL(entry.credentialUrl).href}`]
        : []),
    ]
    for (const key of identities) {
      if (keys.has(key))
        throw new Error("Duplicate certification in the catalog")
      keys.add(key)
    }
  }
  return records.filter((record) => record.isPublic === true)
}

export function withExpiration(
  record: Certification,
  today: string
): Certification {
  const expires = record.expirationDate
  // Without a day, don't mark it expired until the following month.
  return expires && expires < today.slice(0, expires.length)
    ? { ...record, status: "expired" }
    : record
}
