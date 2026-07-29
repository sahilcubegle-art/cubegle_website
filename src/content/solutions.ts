import type { LucideIcon } from "lucide-react";
import {
  Layers,
  CloudUpload,
  LineChart,
  Workflow,
  Bot,
  Gauge,
  ShieldCheck,
  AppWindow,
} from "lucide-react";

export type Solution = {
  slug: string;
  name: string;
  icon: LucideIcon;
  problem: string;
  description: string;
  relatedServices: string[];
};

export const solutions: Solution[] = [
  {
    slug: "modern-data-platform",
    name: "Modern Data Platform",
    icon: Layers,
    problem: "Data scattered across databases, files and APIs with no single source of truth.",
    description:
      "A central, cloud-based platform that ingests from every core system, standardizes definitions, and gives every team the same governed numbers.",
    relatedServices: ["data-engineering", "cloud-data-platforms"],
  },
  {
    slug: "cloud-data-migration",
    name: "Cloud Data Migration",
    icon: CloudUpload,
    problem: "Legacy on-premise or aging cloud infrastructure that's slow, brittle or expensive to maintain.",
    description:
      "Structured migration from legacy warehouses and ETL tools to a modern cloud architecture, with a cutover plan that protects reporting continuity.",
    relatedServices: ["cloud-data-platforms", "devops-platform-engineering"],
  },
  {
    slug: "executive-analytics",
    name: "Executive Analytics",
    icon: LineChart,
    problem: "Leadership waiting days for reports that should be available in real time.",
    description:
      "Governed semantic models and executive dashboards built on Power BI, so leadership sees the same trusted metrics without manual report prep.",
    relatedServices: ["business-intelligence"],
  },
  {
    slug: "data-pipeline-automation",
    name: "Data Pipeline Automation",
    icon: Workflow,
    problem: "Manual data preparation eating hours every week, with reports breaking silently.",
    description:
      "Orchestrated, monitored pipelines that replace manual exports and scripts with scheduled, validated, automated data flow.",
    relatedServices: ["data-engineering", "devops-platform-engineering"],
  },
  {
    slug: "ai-powered-operations",
    name: "AI-Powered Operations",
    icon: Bot,
    problem: "Trends and anomalies buried in dashboards that nobody has time to review closely.",
    description:
      "An AI insight layer — like our AutoInsights build — that surfaces anomalies, forecasts and narrative summaries automatically on top of existing dashboards.",
    relatedServices: ["ai-machine-learning"],
  },
  {
    slug: "cost-performance-optimization",
    name: "Cost and Performance Optimization",
    icon: Gauge,
    problem: "Cloud and tooling spend growing faster than the value it delivers.",
    description:
      "An honest audit of current infrastructure and query patterns, with concrete recommendations to cut cost without sacrificing performance.",
    relatedServices: ["data-strategy-consulting", "devops-platform-engineering"],
  },
  {
    slug: "data-quality-governance",
    name: "Data Quality and Governance",
    icon: ShieldCheck,
    problem: "Numbers that don't match between teams, and no clear ownership of definitions.",
    description:
      "Validation frameworks, lineage tracking and access governance built into the pipeline and warehouse layer, not bolted on afterward.",
    relatedServices: ["data-engineering", "cloud-data-platforms"],
  },
  {
    slug: "embedded-analytics",
    name: "Embedded Analytics",
    icon: AppWindow,
    problem: "Customers or internal users asking for analytics inside your own product.",
    description:
      "Analytics embedded directly in your application — the same approach we used to give a B2B SaaS product in-app subscription and usage insight.",
    relatedServices: ["business-intelligence", "data-engineering"],
  },
];
