import type { TechCategory, TechStack, TechStatus } from "../types/tech-stack"

// Lead with evidenced work. Unlinked products are not production claims.
type Group = [TechStatus, string, string[], string?]

const groups: Record<TechCategory, Group[]> = {
  ai: [
    [
      "hands-on",
      "Enterprise agent integration and operational automation",
      [
        "LLM Orchestration",
        "Tool Calling / Function Calling",
        "Agentic Workflows",
        "Prompt Engineering",
      ],
    ],
    [
      "hands-on",
      "Read-only vulnerability data queries in Big Data II",
      ["Model Context Protocol (MCP)"],
      "threat-intelligence",
    ],
    [
      "familiar",
      "AI apps and agents study; no production deployment claimed",
      [
        "Microsoft Foundry / Azure AI Foundry",
        "Microsoft Foundry Agents",
        "RAG / Retrieval-Augmented Generation",
        "Azure AI Search",
        "Multi-Agent Systems",
        "Conversational Memory",
        "AI Observability",
        "AI Security",
      ],
    ],
    [
      "exploring",
      "Frameworks, model platforms and patterns for agent development",
      [
        "LangChain",
        "LangChain4j",
        "Microsoft Agent Framework",
        "Amazon Bedrock",
        "Google Cloud Vertex AI",
        "Ollama (Local LLMs)",
        "Claude Agent SDK",
        "AI Agent Skills",
      ],
    ],
  ],
  backend: [
    [
      "hands-on",
      "Enterprise full-stack services",
      [
        "Python",
        "FastAPI",
        "Java",
        "Spring Boot",
        "REST APIs",
        "Event-Driven Architecture",
      ],
    ],
    [
      "hands-on",
      "Authentication in the academic threat intelligence platform",
      ["Keycloak", "OAuth 2.0 / OpenID Connect"],
      "threat-intelligence",
    ],
    [
      "familiar",
      "Backend runtimes, authentication, transports and service design",
      [
        "Node.js",
        "Express.js",
        "Serverless Framework",
        "Mangum",
        "JWT",
        "WebSockets",
        "Microservices",
      ],
    ],
  ],
  cloud: [
    [
      "hands-on",
      "Cloud-native and serverless application architecture",
      ["AWS", "Microsoft Azure"],
    ],
    [
      "hands-on",
      "Containerization and Google Cloud infrastructure in Big Data II",
      ["Google Cloud", "Docker", "Terraform"],
      "threat-intelligence",
    ],
    [
      "hands-on",
      "Academic Hadoop and distributed analytics environment",
      ["Dataproc", "Cloud Storage"],
      "distributed-cybersecurity",
    ],
    [
      "hands-on",
      "Development and infrastructure observability",
      ["Git / GitHub", "Grafana", "Observability"],
    ],
    [
      "familiar",
      "AWS service portfolio; no service-specific production claim",
      [
        "AWS Lambda",
        "API Gateway",
        "S3",
        "SQS",
        "SNS",
        "EventBridge",
        "Step Functions",
        "Aurora / RDS",
        "Cognito",
        "DynamoDB",
        "EC2",
        "ECS / Fargate",
        "AWS IAM",
        "CloudFormation",
        "Amazon Rekognition",
      ],
    ],
    [
      "exploring",
      "Managed model platform",
      ["Amazon Bedrock", "Google Cloud Vertex AI"],
    ],
    [
      "familiar",
      "Azure service and identity study",
      [
        "Microsoft Foundry / Azure AI Foundry",
        "Azure Functions",
        "Azure Container Apps",
        "Azure AI Search",
        "Azure Speech",
        "Azure Identity",
        "Microsoft Entra ID",
        "Azure AI Services",
      ],
    ],
    [
      "familiar",
      "Google Cloud compute and identity",
      ["Compute Engine", "Google Cloud IAM"],
    ],
    [
      "familiar",
      "Infrastructure and telemetry tooling",
      ["Linux", "CI/CD", "OpenTelemetry", "Telegraf"],
    ],
  ],
  ml: [
    [
      "hands-on",
      "Notebook implementation and evaluation on MNIST and California Housing",
      [
        "TensorFlow",
        "Keras",
        "Scikit-learn",
        "Supervised Learning",
        "Classification & Regression",
        "Model Evaluation",
      ],
      "ml-experiments",
    ],
    [
      "hands-on",
      "Model comparison and class imbalance experiments",
      ["XGBoost", "Imbalanced-learn", "SMOTE"],
      "vulnerability-prediction",
    ],
    [
      "hands-on",
      "Feature extraction, inference and model architecture exercises",
      ["PyTorch", "TorchVision", "CNNs", "Model Inference"],
      "computer-vision",
    ],
    [
      "hands-on",
      "Numerical processing, analysis and notebook plots",
      ["NumPy", "Pandas", "Matplotlib", "Seaborn"],
      "ml-experiments",
    ],
    [
      "familiar",
      "Supervised learning and model development coursework",
      [
        "Random Forest",
        "Decision Trees",
        "SVM",
        "Logistic Regression",
        "Feature Engineering",
        "Transfer Learning",
      ],
    ],
  ],
  vision: [
    [
      "hands-on",
      "Pre-trained inference, activation maps and threshold comparisons",
      [
        "Ultralytics YOLO",
        "YOLO11",
        "ResNet18",
        "Object Detection",
        "Feature Extraction",
        "IoU / NMS",
      ],
      "computer-vision",
    ],
    [
      "hands-on",
      "Residual U-Net architecture implementation; no training claim",
      ["Residual U-Net", "PyTorch", "Image Segmentation"],
      "computer-vision",
    ],
    [
      "hands-on",
      "Coursework image processing and analysis",
      ["OpenCV", "TorchVision", "Pillow", "NumPy", "Matplotlib"],
      "computer-vision",
    ],
    [
      "hands-on",
      "Academic detection and tracking experiments, not production",
      [
        "RT-DETR",
        "Multi-Object Tracking",
        "SORT",
        "ByteTrack",
        "BoT-SORT",
        "Kalman Filter",
        "MOTA / IDF1",
      ],
      "uavdt",
    ],
    [
      "familiar",
      "Computer vision coursework",
      [
        "Image Classification",
        "Image Retrieval",
        "Hungarian Algorithm",
        "SIFT",
        "HOG",
        "ORB",
        "Bag of Visual Words",
      ],
    ],
  ],
  data: [
    [
      "hands-on",
      "Equivalent queries and distributed processing on CIC-IoT-2023",
      [
        "PySpark",
        "Apache Spark",
        "Polars",
        "Dask",
        "Modin",
        "PyArrow",
        "Apache Hadoop",
        "Hadoop MapReduce",
        "HDFS",
        "Distributed Data Processing",
        "Jupyter Notebook / JupyterLab",
      ],
      "distributed-cybersecurity",
    ],
    [
      "hands-on",
      "Incremental ingestion, NoSQL modeling and dashboarding in Big Data II",
      [
        "Apache Airflow",
        "ETL / ELT Pipelines",
        "MongoDB",
        "Apache Cassandra",
        "Neo4j",
        "Cypher",
        "NoSQL Data Modeling",
        "Streamlit",
        "KPI Dashboards",
      ],
      "threat-intelligence",
    ],
    [
      "hands-on",
      "Data analysis and visualization in notebooks",
      ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Data Visualization"],
      "ml-experiments",
    ],
    [
      "hands-on",
      "Application storage and infrastructure telemetry",
      ["PostgreSQL", "SQL", "InfluxDB", "Grafana"],
    ],
    [
      "familiar",
      "Academic big-data ecosystem and storage architectures",
      [
        "Data Lakes",
        "Apache Kafka",
        "BigQuery",
        "Microsoft Fabric",
        "Databricks",
      ],
    ],
  ],
  frontend: [
    [
      "hands-on",
      "Full-stack UI development and this portfolio",
      [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "HTML / CSS",
      ],
    ],
    [
      "familiar",
      "Front-end tooling and mobile development",
      ["Vite", "React Native", "Expo"],
    ],
  ],
  security: [
    [
      "hands-on",
      "Security considerations in cloud-native enterprise engineering",
      ["Cloud Security", "DevSecOps"],
    ],
    [
      "hands-on",
      "Academic vulnerability data ingestion and defensive prioritization",
      ["Vulnerability Management", "CVE / CVSS / CWE"],
      "threat-intelligence",
    ],
    [
      "familiar",
      "Agent safeguards and cloud security study",
      ["AI Security", "Security Automation", "Model & Agent Security"],
    ],
    [
      "exploring",
      "Exploratory AI-assisted security assessment; no production use claimed",
      ["Strix", "GLM Models", "LLM-assisted Pentesting"],
    ],
  ],
  tools: [
    [
      "hands-on",
      "AI-assisted development workflow",
      ["Claude Code", "OpenAI Codex", "OpenCode", "AI-assisted Development"],
    ],
    [
      "hands-on",
      "Application integration for data queries",
      ["MCP Servers"],
      "threat-intelligence",
    ],
    [
      "exploring",
      "Developer tooling and reusable agent capabilities",
      ["Google Antigravity", "Agent Skills", "Claude Agent SDK"],
    ],
  ],
}

export const TECH_STACK: TechStack[] = (
  Object.keys(groups) as TechCategory[]
).flatMap((category) =>
  groups[category].flatMap(([status, context, titles, project]) =>
    titles.map((title) => ({ title, category, status, context, project }))
  )
)
