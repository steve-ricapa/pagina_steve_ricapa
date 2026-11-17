"use client"

import {
  BotIcon,
  BracesIcon,
  BrainCircuitIcon,
  CloudIcon,
  DatabaseIcon,
  EyeIcon,
  FingerprintIcon,
  GitBranchIcon,
  ImageIcon,
  LayersIcon,
  NetworkIcon,
  ShieldIcon,
  TerminalIcon,
  WorkflowIcon,
} from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import Image from "next/image"
import { useState } from "react"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/base/ui/tooltip"
import { cn } from "@/lib/utils"

import { TECH_STACK } from "../data/tech-stack"
import {
  TECH_CATEGORIES,
  TECH_STATUSES,
  type TechCategory,
  type TechStack,
} from "../types/tech-stack"
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel"

const glyphs = {
  ai: BotIcon,
  backend: BracesIcon,
  cloud: CloudIcon,
  ml: BrainCircuitIcon,
  vision: EyeIcon,
  data: DatabaseIcon,
  frontend: LayersIcon,
  security: ShieldIcon,
  tools: TerminalIcon,
}
const themed: Record<string, string> = {
  Python: "python",
  Java: "java",
  PostgreSQL: "postgresql",
  React: "react",
  TypeScript: "typescript",
  JavaScript: "js",
  "Tailwind CSS": "tailwindcss",
  "Next.js": "nextjs2",
  "Git / GitHub": "git",
}
const logos: Record<string, string> = {
  FastAPI: "fastapi",
  "Spring Boot": "spring",
  AWS: "aws",
  "Microsoft Azure": "azure",
  "Google Cloud": "googlecloud",
  Grafana: "grafana",
  InfluxDB: "influxdb",
  PyTorch: "pytorch",
  TorchVision: "pytorch",
  TensorFlow: "tensorflow",
  Keras: "keras",
  "Scikit-learn": "scikitlearn",
  NumPy: "numpy",
  Pandas: "pandas",
  Matplotlib: "matplotlib",
  OpenCV: "opencv",
  "Jupyter Notebook / JupyterLab": "jupyter",
  "Apache Spark": "apachespark",
  PySpark: "apachespark",
  "Apache Hadoop": "hadoop",
  MongoDB: "mongodb",
  "Apache Cassandra": "cassandra",
  Neo4j: "neo4j",
  "Node.js": "nodejs",
  Docker: "docker",
  Terraform: "terraform",
  Linux: "linux",
  Vite: "vite",
  Expo: "expo",
  Streamlit: "streamlit",
  "Apache Kafka": "apachekafka",
  DynamoDB: "dynamodb",
  "REST APIs": "openapi",
  "Microsoft Foundry / Azure AI Foundry": "microsoft-foundry",
  "Microsoft Foundry Agents": "foundry-agents",
  "Azure Functions": "azure-functions",
  "Azure Container Apps": "azure-container-apps",
  "Azure AI Search": "azure-ai-search",
  "Azure Speech": "azure-speech",
  "Azure AI Services": "azure-ai-services",
  "AWS Lambda": "aws-lambda",
  "API Gateway": "aws-api-gateway",
  S3: "aws-s3",
  SQS: "aws-sqs",
  SNS: "aws-sns",
  EventBridge: "aws-eventbridge",
  "Step Functions": "aws-step-functions",
  "Aurora / RDS": "aws-rds",
  Cognito: "aws-cognito",
  EC2: "aws-ec2",
  "ECS / Fargate": "aws-ecs",
  "AWS IAM": "aws-iam",
  CloudFormation: "aws-cloudformation",
  LangChain: "langchain",
  LangChain4j: "langchain",
  "Ollama (Local LLMs)": "ollama",
  "Claude Code": "claude",
  "Claude Agent SDK": "claude",
  "OpenAI Codex": "openai",
  OpenCode: "opencode",
  "Model Context Protocol (MCP)": "mcp",
  "MCP Servers": "mcp",
  "Express.js": "express",
  Keycloak: "keycloak",
  "Serverless Framework": "serverless",
  JWT: "jsonwebtokens",
  "OAuth 2.0 / OpenID Connect": "openid",
  Polars: "polars",
  Dask: "dask",
  Modin: "modin",
  PyArrow: "apachearrow",
  "Apache Airflow": "apacheairflow",
  "Hadoop MapReduce": "hadoop",
  HDFS: "hadoop",
  Cypher: "neo4j",
  Seaborn: "seaborn",
  "HTML / CSS": "html5",
  "React Native": "reactnative",
  "Ultralytics YOLO": "ultralytics",
  YOLO11: "ultralytics",
  OpenTelemetry: "opentelemetry",
  BigQuery: "googlebigquery",
  Databricks: "databricks",
}

const conceptIcons: Record<string, typeof BotIcon> = {
  "LLM Orchestration": WorkflowIcon,
  "Agentic Workflows": WorkflowIcon,
  "Event-Driven Architecture": WorkflowIcon,
  "ETL / ELT Pipelines": WorkflowIcon,
  "Multi-Agent Systems": NetworkIcon,
  Microservices: NetworkIcon,
  WebSockets: NetworkIcon,
  "Azure Identity": FingerprintIcon,
  "Microsoft Entra ID": FingerprintIcon,
  "Google Cloud IAM": FingerprintIcon,
  "CI/CD": GitBranchIcon,
  Pillow: ImageIcon,
  "Image Classification": ImageIcon,
  "Image Segmentation": ImageIcon,
}

const monochrome = new Set([
  "aws",
  "expo",
  "apachekafka",
  "langchain",
  "ollama",
  "openai",
  "opencode",
  "express",
  "keycloak",
  "serverless",
  "jsonwebtokens",
  "openid",
  "polars",
  "dask",
  "modin",
  "apachearrow",
  "apacheairflow",
  "ultralytics",
  "opentelemetry",
  "googlebigquery",
  "databricks",
  "claude",
])

function TechIcon({ tech }: { tech: TechStack }) {
  const theme = themed[tech.title]
  if (theme)
    return (
      <>
        <Image
          src={`/tech-stack-icons/light/${theme}-light.svg`}
          alt=""
          width={28}
          height={28}
          className="dark:hidden"
          unoptimized
        />
        <Image
          src={`/tech-stack-icons/dark/${theme}-dark.svg`}
          alt=""
          width={28}
          height={28}
          className="hidden dark:block"
          unoptimized
        />
      </>
    )
  const logo = logos[tech.title]
  if (logo === "html5") {
    return (
      <span className="flex gap-1">
        <Image
          src="/brand-icons/html5.svg"
          alt=""
          width={22}
          height={24}
          unoptimized
        />
        <Image
          src="/brand-icons/css3.svg"
          alt=""
          width={22}
          height={24}
          unoptimized
        />
      </span>
    )
  }
  if (logo)
    return (
      <Image
        src={`/brand-icons/${logo}.svg`}
        alt=""
        width={logo === "mcp" ? 66 : 28}
        height={28}
        className={
          logo === "mcp"
            ? "h-7 max-w-full object-contain brightness-0 dark:brightness-100"
            : monochrome.has(logo)
              ? "dark:brightness-0 dark:invert"
              : undefined
        }
        unoptimized
      />
    )
  const Icon = conceptIcons[tech.title] ?? glyphs[tech.category]
  return <Icon aria-hidden className="size-7" />
}

const filterClass =
  "rounded-md border border-edge px-2.5 py-1 font-mono text-xs transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-ring aria-pressed:bg-foreground aria-pressed:text-background"
const featuredTitles = [
  "LLM Orchestration",
  "Model Context Protocol (MCP)",
  "Python",
  "FastAPI",
  "Microsoft Foundry / Azure AI Foundry",
  "AWS",
  "PyTorch",
  "Ultralytics YOLO",
  "Apache Spark",
  "React",
]
const featured = featuredTitles.flatMap(
  (title) =>
    TECH_STACK.find(
      (tech) => tech.title === title && tech.status === "hands-on"
    ) ??
    TECH_STACK.find((tech) => tech.title === title) ??
    []
)

export function TechStack() {
  const [category, setCategory] = useState<TechCategory | "featured">(
    "featured"
  )
  const [expanded, setExpanded] = useState(false)
  const [selected, setSelected] = useState<TechStack | null>(null)
  const reduced = useReducedMotion()
  const entries =
    category === "featured"
      ? featured
      : TECH_STACK.filter((tech) => tech.category === category)
  const visible = expanded ? entries : entries.slice(0, 10)

  function selectCategory(next: typeof category) {
    setCategory(next)
    setExpanded(false)
    setSelected(null)
  }

  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Tech Stack</PanelTitle>
      </PanelHeader>
      <PanelContent className="space-y-4">
        <div
          aria-label="Filter by category"
          role="group"
          className="flex flex-wrap gap-1.5"
        >
          <button
            className={filterClass}
            type="button"
            aria-pressed={category === "featured"}
            onClick={() => selectCategory("featured")}
          >
            Featured
          </button>
          {(Object.keys(TECH_CATEGORIES) as TechCategory[]).map((item) => (
            <button
              className={filterClass}
              key={item}
              type="button"
              aria-pressed={item === category}
              onClick={() => selectCategory(item)}
            >
              {TECH_CATEGORIES[item]}
            </button>
          ))}
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          Hands-on includes project work. Studied / lab and Exploring do not
          imply production use.
        </p>
        <p className="sr-only" aria-live="polite">
          {visible.length} of {entries.length} technologies shown
        </p>
        <ul
          id="stack-cards"
          key={category}
          className="grid grid-cols-2 gap-2 min-[380px]:grid-cols-3 sm:grid-cols-5"
        >
          {visible.map((tech) => (
            <motion.li
              key={tech.title}
              initial={reduced ? false : { opacity: 0, y: 3 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={reduced ? undefined : { y: -2 }}
              transition={{ duration: 0.16 }}
            >
              <Tooltip>
                <TooltipTrigger
                  type="button"
                  aria-pressed={selected === tech}
                  aria-controls="stack-context"
                  onClick={() => setSelected(selected === tech ? null : tech)}
                  className={cn(
                    "flex h-full min-h-28 w-full flex-col items-center justify-center gap-2 rounded-md border border-edge p-2 text-center text-xs font-medium transition-colors hover:border-foreground/40 focus-visible:outline-2 focus-visible:outline-ring aria-pressed:border-foreground",
                    tech.status === "hands-on"
                      ? "bg-muted/40 hover:bg-muted"
                      : "border-dashed text-muted-foreground"
                  )}
                >
                  <TechIcon tech={tech} />
                  <span className="text-balance">{tech.title}</span>
                  <span className="font-mono text-[10px]">
                    {TECH_STATUSES[tech.status]}
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <strong>{tech.title}</strong>
                  <p className="text-xs">
                    {TECH_CATEGORIES[tech.category]} · {tech.context}
                  </p>
                </TooltipContent>
              </Tooltip>
            </motion.li>
          ))}
        </ul>
        <div id="stack-context" aria-live="polite">
          {selected && (
            <div className="space-y-1 rounded-md border border-edge bg-muted/25 p-3 text-sm">
              <p>
                <strong>{selected.title}</strong> ·{" "}
                {TECH_CATEGORIES[selected.category]} ·{" "}
                {TECH_STATUSES[selected.status]}
              </p>
              <p className="text-muted-foreground">{selected.context}</p>
              {selected.project && (
                <a
                  className="inline-block link"
                  href={`/projects/${selected.project}`}
                >
                  View related project
                </a>
              )}
            </div>
          )}
        </div>
        {entries.length > 10 && (
          <button
            type="button"
            className={filterClass}
            aria-expanded={expanded}
            aria-controls="stack-cards"
            onClick={() => {
              setExpanded(!expanded)
              setSelected(null)
            }}
          >
            {expanded
              ? "Show fewer technologies"
              : `Show all ${entries.length} technologies`}
          </button>
        )}
      </PanelContent>
    </Panel>
  )
}
