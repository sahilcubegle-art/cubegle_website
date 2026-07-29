export type CaseStudy = {
  slug: string;
  title: string;
  categories: string[];
  summary: string;
  overview: string;
  challenges: string[];
  architecture: { stage: string; description: string }[];
  whatWeBuilt: string[];
  technologies: string[];
  outcomes: string[];
  relatedServices: string[];
};

export const caseStudyCategories = [
  "Data Engineering",
  "Business Intelligence",
  "AI",
  "Cloud",
  "DevOps",
] as const;

export const caseStudies: CaseStudy[] = [
  {
    slug: "data-platform-modernisation",
    title: "Global Data Platform for Operations Analytics",
    categories: ["Data Engineering", "Cloud", "Business Intelligence"],
    summary:
      "Unified data warehouse, automated pipelines, and decision-ready dashboards for a multi-location operations business.",
    overview:
      "A rapidly expanding operations-focused organization needed centralized data infrastructure. Data was dispersed across multiple databases, flat files and APIs, and stakeholders depended on manual reporting with inconsistent performance metrics.",
    challenges: [
      "Data fragmentation across production systems and geographic regions",
      "No unified metrics for financial and operational reporting",
      "Heavy manual effort to prepare weekly and monthly reports",
      "Performance constraints on analytical queries and visualization tools",
    ],
    architecture: [
      { stage: "Ingestion", description: "ETL/ELT pipelines from databases, APIs and files" },
      { stage: "Core Processing", description: "Cleaned, standardized models in a cloud warehouse" },
      { stage: "Analytics", description: "Curated datasets for dashboards and ad-hoc queries" },
    ],
    whatWeBuilt: [
      "A central, cloud-based data platform",
      "Automated data collection from core systems",
      "Standardized KPI definitions across departments",
      "Fast, governed self-service analytics",
    ],
    technologies: ["Azure SQL", "Redshift", "Snowflake", "Pentaho", "Azure Data Factory", "Python", "Power BI"],
    outcomes: [
      "Unified metric alignment across leadership and operations teams",
      "Automated refreshes reduced manual reporting effort significantly",
      "Enhanced dashboard and query performance",
      "Foundation established for future machine learning initiatives",
    ],
    relatedServices: ["data-engineering", "cloud-data-platforms", "business-intelligence"],
  },
  {
    slug: "saas-subscription-analytics",
    title: "Subscription and Product Analytics for B2B SaaS",
    categories: ["Business Intelligence", "Data Engineering"],
    summary:
      "Centralised metrics for MRR, churn, activation, and customer health — plus embedded analytics for end users.",
    overview:
      "A B2B SaaS organization needed comprehensive visibility into subscription metrics but operated without a unified analytics framework across multiple disparate tools.",
    challenges: [
      "MRR and churn metrics were inconsistent across teams",
      "Difficulty segmenting customers by usage pattern, pricing tier or lifecycle phase",
      "Stakeholders relied on spreadsheets and manual exports",
      "No analytics accessible within the customer-facing application",
    ],
    architecture: [
      { stage: "Source Systems", description: "Billing, product events and CRM data" },
      { stage: "Subscription Layer", description: "Normalized model combining billing, usage and CRM data" },
      { stage: "Internal Dashboards", description: "Product, marketing and finance reporting" },
      { stage: "Embedded Analytics", description: "Customer-facing analytics inside the SaaS UI" },
    ],
    whatWeBuilt: [
      "Standard subscription metrics: MRR, ARR, churn, expansion",
      "Cohort and retention analysis models",
      "Customer health scoring incorporating usage, support and plan data",
      "In-application analytics dashboards",
    ],
    technologies: ["Cloud data warehouse", "ETL/ELT platforms", "Power BI", "Embedded analytics framework"],
    outcomes: [
      "Leadership gained a consistent view of subscription health",
      "Product teams enabled cohort-based feature adoption tracking",
      "Customers accessed clear value through in-app analytics and reports",
      "Improved cross-functional alignment between sales, marketing and product",
    ],
    relatedServices: ["business-intelligence", "data-engineering"],
  },
  {
    slug: "devops-cloud-modernisation",
    title: "Cloud and DevOps Modernisation for Data Workloads",
    categories: ["DevOps", "Cloud"],
    summary:
      "Migrated legacy ETL and reporting stack to a modern CI/CD-driven architecture with improved reliability and lower cost.",
    overview:
      "Cubegle helped a client experiencing operational friction from legacy systems and manual processes modernise DevOps practices for data and analytics workloads — the kind of situation where data projects have grown organically and now need a disciplined DevOps layer around them.",
    challenges: [
      "Multiple scripts, ETL tools and BI platforms accumulated over time",
      "No standardized CI/CD for data initiatives",
      "Manual deployment steps prone to human error",
      "Infrastructure changes with no version control or reproducibility",
    ],
    architecture: [
      { stage: "Version Control", description: "Git-centric workflow for all data and analytics code" },
      { stage: "CI/CD Orchestration", description: "GitHub Actions, Azure DevOps or Jenkins" },
      { stage: "Infrastructure as Code", description: "Terraform-managed cloud infrastructure" },
      { stage: "Cloud Platform", description: "Azure or AWS" },
      { stage: "Observability", description: "Logging and monitoring layer" },
    ],
    whatWeBuilt: [
      "Automated pipelines for ETL, data models and BI assets",
      "Infrastructure as Code for reproducible deployments",
      "Comprehensive logging and monitoring for data jobs",
      "Test validation integrated into the deployment pipeline",
    ],
    technologies: ["Terraform", "GitHub Actions", "Azure DevOps", "Jenkins", "Azure", "AWS"],
    outcomes: [
      "Reduced deployment incidents with faster issue resolution",
      "Enhanced collaboration among data, engineering and operations teams",
      "Strengthened workload reliability and stakeholder transparency",
      "Established a scalability foundation for future growth",
    ],
    relatedServices: ["devops-platform-engineering", "cloud-data-platforms"],
  },
  {
    slug: "logistics-ops-dashboards",
    title: "Logistics and Field Operations Dashboard Suite",
    categories: ["Business Intelligence", "Data Engineering"],
    summary:
      "Real-time and batch analytics on SLAs, asset utilisation, and route performance for an operations-heavy environment.",
    overview:
      "Cubegle developed a real-time operational analytics platform for a large logistics company managing distributed field teams and daily routes.",
    challenges: [
      "No consolidated SLA tracking across routes",
      "Manual Excel-based operational reporting",
      "No standard KPI framework for utilisation and delays",
      "Delayed leadership-level visibility",
    ],
    architecture: [
      { stage: "Source Systems", description: "Operational databases" },
      { stage: "ETL Ingestion", description: "Near-real-time refresh pipeline" },
      { stage: "Cloud Data Warehouse", description: "Central fact-table model" },
      { stage: "Power BI Semantic Model", description: "Role-based interactive dashboards" },
    ],
    whatWeBuilt: [
      "KPI framework design across operations",
      "Central fact-table modeling",
      "ETL automation with near-real-time refresh",
      "Power BI dashboard suite with role-based access",
    ],
    technologies: ["Operational databases", "ETL pipeline", "Cloud data warehouse", "Power BI"],
    outcomes: [
      "Near real-time operational oversight achieved",
      "30-40% faster issue escalation resolution",
      "Standardized executive-level KPI reporting",
      "Reduced manual reporting burden",
    ],
    relatedServices: ["business-intelligence", "data-engineering"],
  },
  {
    slug: "autoinsights-ai-layer",
    title: "AutoInsights: AI-Driven Insight Layer for Dashboards",
    categories: ["AI", "Business Intelligence"],
    summary:
      "An AI-assisted insights layer that complements dashboards with anomalies, forecasts, and narrative summaries for stakeholders.",
    overview:
      "AutoInsights transforms passive dashboards into proactive intelligence systems by automatically detecting anomalies, highlighting trends, and generating narrative summaries for business stakeholders. It's a pluggable AI layer that connects to curated datasets and dashboards, runs ML and statistical checks, and generates human-friendly insight text — ideal for organisations with mature dashboards who want insight surfaced automatically on a regular cadence.",
    challenges: [
      "Stakeholders missing critical trends hidden in dashboards",
      "Analysts spending time writing commentary manually",
      "No consistent way of sharing insights across teams",
    ],
    architecture: [
      { stage: "Curated Datasets", description: "Existing semantic models and dashboards" },
      { stage: "ML/Statistical Layer", description: "Anomaly detection and trend analysis" },
      { stage: "Narrative Generation", description: "Optional LLM-based summary text" },
      { stage: "Delivery", description: "Insight text integrated back into dashboards" },
    ],
    whatWeBuilt: [
      "Anomaly detection paired with threshold-based alerts",
      "Temporal trend analysis (week-over-week and month-over-month)",
      "Segment performance comparisons across regions and customer groups",
      "Automated narrative summaries integrated into dashboards",
    ],
    technologies: ["Python", "Statistical/ML libraries", "BI semantic models", "Cloud functions", "LLMs (optional)"],
    outcomes: [
      "Business stakeholders get automated summaries answering \"what changed\"",
      "Analytics teams redirect effort toward strategic decisions rather than report writing",
      "Standardized, repeatable insight generation across dashboard ecosystems",
    ],
    relatedServices: ["ai-machine-learning", "business-intelligence"],
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((cs) => cs.slug === slug);
}
