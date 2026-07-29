import type { LucideIcon } from "lucide-react";
import {
  Workflow,
  Database,
  LayoutDashboard,
  BrainCircuit,
  GitBranch,
  Compass,
} from "lucide-react";

export type ServiceCapability = {
  title: string;
  items: string[];
};

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  icon: LucideIcon;
  summary: string;
  description: string;
  challenges: string[];
  approach: string[];
  capabilities: string[];
  deliverables: string[];
  technologies: string[];
  relatedCaseStudies: string[];
};

export const services: Service[] = [
  {
    slug: "data-engineering",
    name: "Data Engineering",
    shortName: "Data Engineering",
    icon: Workflow,
    summary: "ETL/ELT pipelines, integration and data quality for reliable analytics.",
    description:
      "We design and build the pipelines that move data from your source systems into a form your teams can trust — batch, streaming, or both.",
    challenges: [
      "Data spread across multiple databases, flat files and APIs with no single source of truth",
      "Manual effort to prepare recurring reports",
      "Pipelines that break silently or require constant babysitting",
    ],
    approach: [
      "Map source systems and define ingestion patterns before writing pipeline code",
      "Build orchestrated, monitored pipelines rather than one-off scripts",
      "Add data quality and validation checks at each stage of the pipeline",
    ],
    capabilities: [
      "API and database ingestion pipelines",
      "Batch and real-time (streaming) pipelines",
      "Orchestration and automated scheduling",
      "Data quality and validation frameworks",
      "Metadata, lineage and monitoring",
    ],
    deliverables: [
      "Production pipelines with monitoring and alerting",
      "Documented data flow and lineage",
      "Runbooks for operating and extending the pipeline set",
    ],
    technologies: ["Airflow", "Pentaho", "Python", "Azure Data Factory", "dbt"],
    relatedCaseStudies: ["data-platform-modernisation", "logistics-ops-dashboards"],
  },
  {
    slug: "cloud-data-platforms",
    name: "Cloud Data Platforms",
    shortName: "Cloud Data Platforms",
    icon: Database,
    summary: "Lakehouse and warehouse architecture on Azure, AWS and modern cloud stacks.",
    description:
      "We design cloud data warehouses and lakehouses that hold up under real query load, with governance and cost control built in from the start.",
    challenges: [
      "Legacy warehouses that are slow, expensive, or hard to extend",
      "No consistent modeling standard across teams",
      "Cloud spend growing faster than the value it delivers",
    ],
    approach: [
      "Choose warehouse or lakehouse architecture based on actual workload, not trend",
      "Model with star schemas, SCDs and partitioning strategies suited to query patterns",
      "Set access control and governance as part of the build, not an afterthought",
    ],
    capabilities: [
      "Lakehouse and data warehouse architecture",
      "Star schema modeling, SCDs, snapshots and versioning",
      "Partitioning and incremental load strategies",
      "Governance and access control",
      "Migration and modernization from legacy platforms",
    ],
    deliverables: [
      "Warehouse or lakehouse environment sized to workload",
      "Modeled, documented schemas",
      "Migration plan and cutover for legacy replacement",
    ],
    technologies: ["Azure SQL", "Snowflake", "Redshift", "BigQuery", "Microsoft Fabric", "Databricks"],
    relatedCaseStudies: ["data-platform-modernisation", "devops-cloud-modernisation"],
  },
  {
    slug: "business-intelligence",
    name: "Business Intelligence",
    shortName: "Business Intelligence",
    icon: LayoutDashboard,
    summary: "Power BI, semantic models and executive dashboards that people actually use.",
    description:
      "We build BI on top of governed semantic models so numbers match across every dashboard — not pixel-perfect charts sitting on unreliable data.",
    challenges: [
      "Dashboards that are slow, inconsistent, or trusted by no one",
      "DAX and models built without a plan for scale",
      "No row-level security or workspace governance",
    ],
    approach: [
      "Build the semantic model first, then the dashboard",
      "Optimize DAX and query folding for real-world data volumes",
      "Apply row-level security and workspace governance from day one",
    ],
    capabilities: [
      "Power BI semantic models",
      "DAX and query folding optimization",
      "Composite models and incremental refresh",
      "Row-level security, governance and workspace management",
      "Executive KPI dashboards and embedded analytics",
    ],
    deliverables: [
      "Governed semantic model as the single source of truth",
      "Executive and operational dashboards",
      "Documented refresh, security and access model",
    ],
    technologies: ["Power BI", "DAX", "Microsoft Fabric", "SQL Server"],
    relatedCaseStudies: ["saas-subscription-analytics", "logistics-ops-dashboards"],
  },
  {
    slug: "ai-machine-learning",
    name: "AI and Machine Learning",
    shortName: "AI & ML",
    icon: BrainCircuit,
    summary: "Forecasting, anomaly detection, NLP and applied AI on top of your data.",
    description:
      "We build machine learning and AI on the data foundation we've already made reliable — from forecasting models to an AI insight layer over existing dashboards.",
    challenges: [
      "Trends and anomalies buried in dashboards nobody has time to read closely",
      "Analysts spending hours writing commentary by hand",
      "No consistent way to share insight across teams",
    ],
    approach: [
      "Start from a well-modeled dataset, not raw exports",
      "Choose the simplest model that solves the business problem",
      "Put monitoring around any model that ships to production",
    ],
    capabilities: [
      "Predictive scoring and forecasting models",
      "Anomaly detection and NLP/classification",
      "ML pipelines and MLOps monitoring",
      "AI-generated insight layers on top of existing BI (AutoInsights)",
      "Generative and agentic AI proofs of concept",
    ],
    deliverables: [
      "Trained, monitored models in production",
      "Documented model assumptions and limitations",
      "Insight layer or scoring output wired into existing dashboards",
    ],
    technologies: ["Python", "scikit-learn", "MLOps pipelines", "LLM APIs"],
    relatedCaseStudies: ["autoinsights-ai-layer"],
  },
  {
    slug: "devops-platform-engineering",
    name: "DevOps and Platform Engineering",
    shortName: "DevOps",
    icon: GitBranch,
    summary: "CI/CD, infrastructure automation and reliability for data and analytics workloads.",
    description:
      "We bring a Git-centric CI/CD workflow to data and analytics — so pipeline, model and dashboard changes deploy the same reliable way application code does.",
    challenges: [
      "Manual deployment steps prone to human error",
      "Infrastructure changes with no version control or reproducibility",
      "Limited visibility when a data job fails",
    ],
    approach: [
      "Put pipelines, models and BI assets under version control",
      "Automate deployment through CI/CD rather than manual steps",
      "Add logging and monitoring so failures surface immediately",
    ],
    capabilities: [
      "CI/CD pipelines (GitHub Actions, Azure DevOps, Jenkins)",
      "Infrastructure as Code (Terraform)",
      "Docker and Kubernetes",
      "Monitoring and observability",
      "Cloud cost optimization",
    ],
    deliverables: [
      "Automated CI/CD pipeline for data and analytics assets",
      "Infrastructure as Code for reproducible environments",
      "Monitoring and alerting dashboard",
    ],
    technologies: ["Terraform", "GitHub Actions", "Azure DevOps", "Jenkins", "Docker", "Kubernetes"],
    relatedCaseStudies: ["devops-cloud-modernisation"],
  },
  {
    slug: "data-strategy-consulting",
    name: "Data Strategy and Consulting",
    shortName: "Strategy & Consulting",
    icon: Compass,
    summary: "Architecture assessments, roadmaps and cost optimization before you commit to a build.",
    description:
      "We audit what you have, recommend an architecture that fits your scale and budget, and — where useful — prove it out with a focused proof of concept before a full build.",
    challenges: [
      "Uncertainty about which platform or tools fit the organization's scale",
      "Cloud and tooling costs that have grown without a clear driver",
      "No documented architecture or roadmap to align stakeholders",
    ],
    approach: [
      "Start with a short discovery call to understand context and constraints",
      "Produce an honest, tool-agnostic architecture assessment",
      "Recommend audits, proofs of concept or full delivery based on risk and readiness",
    ],
    capabilities: [
      "Architecture assessments",
      "Data and platform roadmaps",
      "Cloud and engineering cost optimization",
      "Proofs of concept to de-risk a full build",
    ],
    deliverables: [
      "Architecture assessment document",
      "Prioritized roadmap",
      "Cost optimization recommendations with estimated impact",
    ],
    technologies: ["Cloud cost tooling", "Architecture review frameworks"],
    relatedCaseStudies: ["data-platform-modernisation", "devops-cloud-modernisation"],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
