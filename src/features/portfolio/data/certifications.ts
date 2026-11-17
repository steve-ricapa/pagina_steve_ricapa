import {
  certification,
  getPublicCertifications,
  withExpiration,
} from "../lib/certification-catalog"
import type { Certification, CertificationCard } from "../types/certifications"
import { PLATZI_CERTIFICATIONS } from "./certifications-platzi"

type ListedFields = Pick<
  Certification,
  "id" | "title" | "issuer" | "category" | "topic"
>

function listed(entry: ListedFields & Partial<Certification>) {
  return certification({
    isPublic: true,
    source: "LinkedIn inventory supplied by Steve Ricapa",
    ...entry,
  })
}

const learn = "https://learn.microsoft.com/en-us/credentials/certifications/"
const paloAlto = {
  issuer: "Palo Alto Networks",
  topic: "Cybersecurity",
  logo: "/brand-icons/paloaltonetworks.svg",
} as const
const fortinet = {
  issuer: "Fortinet",
  topic: "Cybersecurity",
  category: "training",
  logo: "/brand-icons/fortinet.svg",
} as const
const ms = { issuer: "Microsoft", logo: "microsoft" } as const

const linkedin = [
  listed({
    ...ms,
    id: "ms-sc-500",
    title: "Microsoft Certified: Cloud and AI Security Engineer Associate",
    category: "professional certification",
    topic: "Cybersecurity",
    examCode: "SC-500",
    issueDate: "2026-11",
    expirationDate: "2027-11",
    credentialId: "DB942683F7032EF7",
    featured: true,
    officialUrl: `${learn}cloud-and-ai-security-engineer-associate/`,
  }),
  listed({
    ...ms,
    id: "ms-ai-103",
    title: "Microsoft Certified: Azure AI Apps and Agents Developer Associate",
    category: "professional certification",
    topic: "Cloud & AI",
    examCode: "AI-103",
    issueDate: "2026-07",
    expirationDate: "2027-07",
    credentialId: "9CC0BB9B96449D51",
    featured: true,
    officialUrl: `${learn}azure-ai-apps-and-agents-developer-associate/`,
  }),
  listed({
    ...ms,
    id: "ms-skills-fest",
    title: "Microsoft AI Skills Fest 2026",
    category: "badge",
    topic: "Cloud & AI",
    issueDate: "2026-06",
  }),
  listed({
    ...ms,
    id: "ms-azure-ai-fundamentals",
    title: "Microsoft Certified: Azure AI Fundamentals",
    category: "professional certification",
    topic: "Cloud & AI",
    issueDate: "2022-08",
    credentialId: "6CD1A434249563A1",
  }),
  listed({
    ...ms,
    id: "ms-azure-fundamentals",
    title: "Microsoft Certified: Azure Fundamentals",
    category: "professional certification",
    topic: "Cloud & AI",
    issueDate: "2022-09",
    credentialId: "I407-4163",
  }),
  listed({
    ...ms,
    id: "ms-security-compliance",
    title: "Microsoft Security Compliance",
    category: "type pending",
    topic: "Cybersecurity",
    issueDate: "2022-10",
    credentialId: "I448-8529",
  }),
  listed({
    id: "lf-otca",
    title: "OTCA: OpenTelemetry Certified Associate",
    issuer: "The Linux Foundation",
    category: "professional certification",
    topic: "Data & Development",
    examCode: "OTCA",
    issueDate: "2026-07",
    credentialId: "LF-81kewdraoj",
    featured: true,
    logo: "/brand-icons/linuxfoundation.svg",
    officialUrl:
      "https://training.linuxfoundation.org/certification/opentelemetry-certified-associate-otca/",
  }),
  listed({
    id: "replit-builder",
    title: "Proficient level 3 Builder",
    issuer: "Replit",
    category: "badge",
    topic: "Data & Development",
    issueDate: "2026-08",
    logo: "/brand-icons/replit.svg",
  }),
  listed({
    ...fortinet,
    id: "fortinet-fca-operator",
    title: "FCA-Fortigate 7.4 Operator Self-Paced",
  }),
  listed({
    ...fortinet,
    id: "fortinet-nse-3",
    title: "Fortinet NSE 3",
    issueDate: "2022-10",
    credentialId: "U2VbLkJxAm",
  }),
  listed({
    ...fortinet,
    id: "fortinet-nse-2",
    title: "Fortinet NSE 2",
    issueDate: "2022-10",
    credentialId: "QgXdwsB3Fk",
  }),
  listed({
    ...fortinet,
    id: "fortinet-nse-1",
    title: "Fortinet NSE 1",
    issueDate: "2022-10",
    credentialId: "UnLkqnmbl7",
  }),
  listed({
    ...paloAlto,
    id: "pan-security-operations",
    title: "Understanding Security Operations",
    category: "training",
  }),
  listed({
    ...paloAlto,
    id: "pan-xsiam-consultant",
    title: "XSIAM Business Consultant",
    category: "type pending",
  }),
  listed({
    ...paloAlto,
    id: "pan-xsiam-resources",
    title: "Cortex XSIAM: Additional Resources",
    category: "training",
  }),
  listed({
    ...paloAlto,
    id: "pan-xsiam-design",
    title: "Cortex XSIAM: Design and Demo",
    category: "training",
  }),
  listed({
    ...paloAlto,
    id: "pan-xsiam-concepts",
    title: "Cortex XSIAM Fundational Concepts",
    category: "training",
  }),
  listed({
    ...paloAlto,
    id: "pan-xsiam-sales",
    title: "XSIAM - Sales Product Specialist",
    category: "type pending",
  }),
  listed({
    ...paloAlto,
    id: "pan-pse-sase",
    title:
      "Palo Alto Networks System Engineer (PSE) - Secure Access Service Edge (SASE) Associate",
    category: "type pending",
    issueDate: "2023-07",
    expirationDate: "2025-07",
    status: "expired",
  }),
  listed({
    ...paloAlto,
    id: "pan-pse-foundation",
    title: "Palo Alto Networks Systems Engineer (PSE) - Foundation",
    category: "type pending",
    issueDate: "2023-07",
    expirationDate: "2025-07",
    status: "expired",
  }),
  listed({
    ...paloAlto,
    id: "pan-hardware-firewall",
    title: "Hardware Firewall - Sales Product Specialist",
    category: "type pending",
    issueDate: "2026-04",
  }),
  listed({
    id: "cisco-observability",
    title: "Black Belt - Full Stack Observability - Presales Stage 1",
    issuer: "Cisco",
    category: "training",
    topic: "Data & Development",
    issueDate: "2024-03",
    credentialId: "1739548459922776623",
    logo: "/brand-icons/cisco.svg",
  }),
  listed({
    id: "cisco-black-belt-ai",
    title: "Black Belt AI Fundamentals Sales Stage 1",
    issuer: "Cisco",
    category: "training",
    topic: "Cloud & AI",
    issueDate: "2024-10",
    logo: "/brand-icons/cisco.svg",
  }),
  listed({
    id: "cisco-netacad-data-science",
    title: "Introduction to Data Science",
    issuer: "Cisco Networking Academy",
    category: "training",
    topic: "Data & Development",
    issueDate: "2024-09",
    logo: "/brand-icons/cisco.svg",
  }),
  listed({
    id: "matlab-onramp",
    title: "MATLAB Onramp",
    issuer: "MATLAB Coding",
    category: "training",
    topic: "Data & Development",
    logo: "/brand-icons/matlab.svg",
    officialUrl:
      "https://matlabacademy.mathworks.com/details/matlab-onramp/gettingstarted",
  }),
  listed({
    id: "tplink-ocna",
    title: "Omada Certified Network Administrator (OCNA) Wireless",
    issuer: "TP-Link",
    category: "professional certification",
    topic: "Networking",
    issueDate: "2025-03",
    expirationDate: "2028-03",
    credentialId: "TPLK000017065",
    logo: "/brand-icons/tplink.svg",
  }),
  listed({
    id: "ibm-getting-started-ai",
    title: "IBM SkillsBuild: Getting Started with Artificial Intelligence",
    issuer: "Student Ambassador Program with IBM SkillsBuild",
    category: "training",
    topic: "Cloud & AI",
    issueDate: "2024-10",
  }),
  listed({
    id: "postman-student-expert",
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    category: "badge",
    topic: "Data & Development",
    issueDate: "2024-05",
    logo: "/brand-icons/postman.svg",
  }),
  listed({
    id: "make-foundation",
    title: "Make Foundation",
    issuer: "Make",
    category: "training",
    topic: "Data & Development",
    issueDate: "2025-01",
    logo: "/brand-icons/make.svg",
  }),
  listed({
    id: "credicorp-agilidad",
    title: "Programa de Agilidad",
    issuer: "Credicorp",
    category: "training",
    topic: "Other",
  }),
  listed({
    id: "cnsd-ethical-hacking",
    title: "Ethical Hacking",
    issuer: "Centro Nacional de Seguridad Digital",
    category: "training",
    topic: "Cybersecurity",
  }),
  listed({
    id: "cambridge-b1",
    title: "B1 Preliminary - Score 144",
    issuer: "Cambridge English",
    category: "language qualification",
    topic: "Other",
    issueDate: "2023-01",
  }),
]

const ab100 = certification({
  ...ms,
  id: "ms-ab-100",
  title: "Agentic AI Business Solutions Architect",
  category: "exam",
  topic: "Cloud & AI",
  examCode: "AB-100",
  examStatus: "passed",
  credentialStatus: "pending_verification",
  status: "pending_verification",
  isPublic: true,
  source:
    "Exam result reported by Steve Ricapa; not part of the LinkedIn inventory",
  associatedCredential:
    "Microsoft Certified: Agentic AI Business Solutions Architect Expert",
  officialUrl: `${learn}exams/ab-100/`,
  topics: [
    "Agentic AI Architecture",
    "Enterprise AI Solutions",
    "Multi-Agent Orchestration",
    "Microsoft Copilot Studio",
    "Microsoft Foundry",
    "Power Platform",
    "AI Governance",
    "Secure AI Architectures",
    "MCP / A2A",
    "AI Solution Lifecycle Management",
  ],
})

export const PUBLIC_CERTIFICATIONS = getPublicCertifications([
  ...linkedin,
  ab100,
  ...PLATZI_CERTIFICATIONS,
])

export function getCertificationCards(): CertificationCard[] {
  const today = new Date().toISOString().slice(0, 10)
  return PUBLIC_CERTIFICATIONS.map((record) => {
    const {
      id,
      title,
      issuer,
      category,
      examCode,
      issueDate,
      expirationDate,
      credentialUrl,
      logo,
      status,
      examStatus,
      credentialStatus,
      topic,
      featured,
      verified,
      officialUrl,
      associatedCredential,
      topics,
    } = withExpiration(record, today)
    return {
      id,
      title,
      issuer,
      category,
      examCode,
      issueDate,
      expirationDate,
      credentialUrl,
      logo,
      status,
      examStatus,
      credentialStatus,
      topic,
      featured,
      verified,
      officialUrl,
      associatedCredential,
      topics,
    }
  })
}
