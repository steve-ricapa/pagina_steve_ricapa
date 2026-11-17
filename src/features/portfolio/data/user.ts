import type { User } from "../types/user"

export const USER: User = {
  firstName: "Steve",
  lastName: "Ricapa",
  displayName: "Steve Ricapa",
  username: "steve-ricapa",
  bio: "AI engineer and full-stack developer working on cloud and AI solutions, from agent orchestration and enterprise backend services to distributed data processing, machine learning, and computer vision.",
  headline:
    "AI Engineer · Full-Stack Developer · Cloud & AI Solutions Architect · Data Science",
  address: "Lima, Peru",
  phoneNumber: "",
  email: "",
  website: "",
  jobTitle: "AI Engineer",
  jobs: [
    {
      title: "AI Engineer",
      company: "TxDxSecure",
      website: "",
      experienceId: "txdxsecure",
    },
  ],
  about: `I’m an AI Engineer at **TxDxSecure**. Previously, I worked as a Junior Data Scientist, processing operational telemetry, integrating monitoring APIs and building reporting and observability tools. That experience informs how I build AI systems for enterprise operations, cybersecurity and automation.

I design and orchestrate **AI agents** that connect LLMs to APIs and tools. My full-stack work spans **Python, FastAPI, Java, Spring Boot, React and TypeScript**, with cloud-native, serverless and event-driven architectures on **AWS and Microsoft Azure**.

I joined the **Data Science program at UTEC** in Lima in 2021. My academic projects span distributed cybersecurity analytics, supervised learning, and computer vision, including pre-trained model inference and implementing a residual U-Net in PyTorch.`,
  avatar: "/steve-ricapa.jpg",
  ogImage: "/og/simple",
  namePronunciationUrl: "",
  timeZone: "America/Lima",
  keywords: [
    "Steve Ricapa",
    "AI Engineer",
    "AI agents",
    "cloud-native architecture",
    "full-stack development",
    "data science",
    "cloud security",
    "cloud and AI solutions architecture",
    "data engineering",
    "machine learning",
    "deep learning",
    "computer vision",
    "Lima Peru",
  ],
}
