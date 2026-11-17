import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "txdxsecure",
    companyName: "TxDxSecure",
    isCurrentEmployer: true,
    positions: [
      {
        id: "ai-engineer",
        title: "AI Engineer",
        employmentPeriod: { current: true },
        icon: "code",
        isExpanded: true,
        skills: [
          "AI Agents",
          "LLMs",
          "Full-Stack",
          "Serverless",
          "Observability",
        ],
        description: `- Design and build AI agents for operational automation, integrating language models with APIs and enterprise systems.
- Develop full-stack applications and design cloud-native, serverless solutions with security and observability in mind.
- Contribute to the architecture and development of XOC, an AI-assisted enterprise operations and security platform.`,
      },
      {
        id: "data-scientist-jr",
        title: "Data Scientist Jr.",
        employmentPeriod: { start: "12.2024" },
        icon: "idea",
        skills: ["Python", "Data Analytics", "Monitoring APIs", "Telemetry"],
        description: `- Analyzed operational data from infrastructure and cybersecurity systems.
- Integrated monitoring APIs and automated data processing and analysis.
- Built reports and observability tools to help teams understand operational data.`,
      },
    ],
  },
]
