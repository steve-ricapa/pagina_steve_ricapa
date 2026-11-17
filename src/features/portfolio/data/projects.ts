import type { Project } from "../types/projects"

// Only publication-approved records belong in this module. Drafts are kept outside src/.
export const PROJECTS: Project[] = [
  {
    id: "xoc",
    slug: "xoc",
    title: "XOC — Experience Operations Center",
    status: "Public launch",
    description:
      "Enterprise operations and cybersecurity platform that brings monitoring, analytics and AI agents into one workspace.",
    problem:
      "Bring operational and security information together so teams can investigate it and act from the same platform.",
    contribution:
      "Contributed to software and cloud architecture, backend services, AI agent integration and platform features.",
    skills: [
      "Software Architecture",
      "Backend Services",
      "AI Agents",
      "Cloud Architecture",
    ],
  },
  {
    id: "threat-intelligence",
    slug: "threat-intelligence",
    title: "Threat Intelligence Platform — Big Data II",
    status: "Academic · Public repository",
    github: "https://github.com/steve-ricapa/Big_Data_Proy2",
    description:
      "Vulnerability intelligence platform for exploring public CVE records from the NIST National Vulnerability Database (NVD).",
    problem:
      "Make vulnerability records easier to ingest, query, and analyze across different data models.",
    contribution:
      "Academic team project. The repository documents the team's work; individual ownership of components is not stated here.",
    architecture:
      "Incremental ETL orchestrated by Apache Airflow DAGs. MongoDB, Cassandra and Neo4j provide document, wide-column and graph views. The project provides a Streamlit dashboard, a FastAPI REST API and an MCP interface for querying vulnerability records. Keycloak supports OAuth/OIDC authentication; the repository includes Docker and Terraform configuration for Google Cloud.",
    skills: [
      "Python",
      "MongoDB",
      "Apache Cassandra",
      "Neo4j",
      "Apache Airflow",
      "FastAPI",
      "Streamlit",
      "Docker",
      "Google Cloud",
      "Terraform",
      "Keycloak",
      "OAuth 2.0 / OpenID Connect",
      "MCP",
    ],
  },
  {
    id: "distributed-cybersecurity",
    slug: "distributed-cybersecurity",
    title: "Distributed Cybersecurity Data Processing",
    status: "Academic · Public repository",
    github: "https://github.com/steve-ricapa/BigData-Proy_Ciberseguridad",
    description:
      "Distributed analysis of the CIC-IoT-2023 dataset, comparing implementations of equivalent cybersecurity data queries.",
    contribution:
      "Academic project. The published notebooks and scripts document the implementation and comparison; individual ownership is not stated here.",
    architecture:
      "PySpark, Polars, Dask and Modin implementations share query definitions so results can be compared. The Hadoop work uses HDFS and MapReduce on Dataproc, with Cloud Storage for data exchange.",
    skills: [
      "Python",
      "PySpark",
      "Polars",
      "Dask",
      "Modin",
      "Pandas",
      "PyArrow",
      "Apache Hadoop",
      "HDFS",
      "Hadoop MapReduce",
      "Dataproc",
      "Cloud Storage",
    ],
  },
  {
    id: "computer-vision",
    slug: "computer-vision",
    title: "Computer Vision Experiments",
    status: "Academic · Public repository",
    github: "https://github.com/steve-ricapa/eva4_CV",
    description:
      "Deep learning exercises in visual feature extraction, object detection, and segmentation architecture.",
    contribution:
      "The exercises use pre-trained ResNet18 for feature extraction and activation visualization, and pre-trained YOLO11 for inference while comparing confidence and IoU thresholds. A Residual U-Net architecture is implemented in PyTorch; this does not imply training it from scratch.",
    references: [
      {
        label: "ResNet18 feature maps (original figure)",
        url: "https://github.com/steve-ricapa/eva4_CV/blob/main/ejercicios/01_encoders/feature_maps.png",
      },
      {
        label: "YOLO confidence comparison (original figure)",
        url: "https://github.com/steve-ricapa/eva4_CV/blob/main/ejercicios/02_yolo/outputs/comparacion_conf.png",
      },
    ],
    skills: [
      "PyTorch",
      "TorchVision",
      "OpenCV",
      "Ultralytics YOLO",
      "YOLO11",
      "ResNet18",
      "Residual U-Net",
      "Pillow",
      "NumPy",
      "Matplotlib",
    ],
  },
  {
    id: "uavdt",
    slug: "uavdt",
    title: "Vehicle Detection & Tracking — UAVDT",
    status: "Academic · Repository not confirmed",
    description:
      "Academic work on detecting and tracking vehicles in aerial footage using the UAVDT dataset.",
    problem:
      "Compare detection and tracking approaches by tracking quality and runtime, not detection accuracy alone.",
    contribution:
      "The project covers experiments with YOLO and RT-DETR for detection and SORT, ByteTrack and BoT-SORT for tracking. Evaluation considers MOTA, IDF1, identity switches and FPS. This is an experimental comparison, not a claim of training every model from scratch.",
    skills: [
      "YOLO",
      "RT-DETR",
      "SORT",
      "ByteTrack",
      "BoT-SORT",
      "Kalman Filter",
      "MOTA / IDF1",
    ],
  },
  {
    id: "vulnerability-prediction",
    slug: "vulnerability-prediction",
    title: "Vulnerability Exploitability Prediction",
    status: "Academic · Public repository",
    github:
      "https://github.com/steve-ricapa/Prediccion-de-Explotabilidad-de-Vulnerabilidades",
    description:
      "Supervised classification study for defensive CVE prioritization, with an emphasis on class imbalance and model evaluation.",
    contribution:
      "The published notebook compares models with Scikit-learn and XGBoost, explores imbalance handling with Imbalanced-learn, and evaluates precision–recall trade-offs. It does not create or execute exploits.",
    skills: [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "Imbalanced-learn",
      "SMOTE",
      "Model Evaluation",
    ],
  },
  {
    id: "ml-experiments",
    slug: "ml-experiments",
    title: "Machine Learning Experiments",
    status: "Academic · Public repository",
    github: "https://github.com/steve-ricapa/final_ML",
    description:
      "Two notebook experiments: handwritten digit classification with MNIST and regression with California Housing.",
    contribution:
      "The notebooks use TensorFlow, Keras and Scikit-learn for classification and regression, with visualizations and task-appropriate evaluation.",
    skills: [
      "Python",
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "Pandas",
      "Matplotlib",
      "Seaborn",
    ],
  },
]
