export const CERTIFICATION_TOPICS = [
  "Cloud & AI",
  "Cybersecurity",
  "Data & Development",
  "Networking",
  "Other",
] as const

export type Certification = {
  id: string
  title: string
  issuer: string
  category:
    | "professional certification"
    | "exam"
    | "training"
    | "badge"
    | "language qualification"
    | "type pending"
  examCode: string | null
  /** ISO date with the precision of the source (YYYY-MM or YYYY-MM-DD). */
  issueDate: string | null
  expirationDate: string | null
  credentialId: string | null
  credentialUrl: string | null
  logo: string | null
  status: "listed" | "pending_verification" | "expired"
  examStatus: "passed" | null
  credentialStatus: "listed" | "pending_verification"
  topic: (typeof CERTIFICATION_TOPICS)[number]
  featured: boolean
  isPublic: boolean
  source: string | null
  /** Verification of Steve's personal credential, not of its official name. */
  verified: boolean | null
  officialUrl: string | null
  associatedCredential: string | null
  topics: string[] | null
}

export type CertificationCard = Omit<
  Certification,
  "credentialId" | "source" | "isPublic"
>
