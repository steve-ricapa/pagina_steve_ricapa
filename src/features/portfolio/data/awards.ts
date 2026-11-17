type Award = {
  year: string
  title: string
  organizer: string
  description?: string
  credentialURL?: string
  credentialUnavailable?: boolean
}

export const AWARDS: Award[] = [
  {
    year: "2026",
    title: "3rd Place, Cloud Computing Hackathon",
    organizer: "UTEC",
  },
  {
    year: "2025",
    title: "1st Place, EdHACK Hackathon",
    organizer: "AIDEA",
    description: "Recognized for work on educational initiatives.",
    credentialURL:
      "https://credsverse.com/credentials/b7079c2e-a93e-4cc7-b82c-43fc5bbdd7ae",
    credentialUnavailable: true,
  },
  {
    year: "2024",
    title: "1st Place, Open Data Hack",
    organizer: "Convoca",
    description:
      "Hackathon focused on artificial intelligence, open data and misinformation.",
  },
]
