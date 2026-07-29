export type JourneyStage = {
  id: string;
  label: string;
  title: string;
  builds: string;
  tools: string[];
  value: string;
  challenge: string;
};

export const journeyStages: JourneyStage[] = [
  {
    id: "sources",
    label: "01",
    title: "Business Systems & APIs",
    builds: "Connections into every system holding data your organization needs — CRM, billing, operational databases, third-party APIs.",
    tools: ["REST/SOAP APIs", "Operational databases", "Flat files"],
    value: "A complete, mapped picture of where your data actually lives.",
    challenge: "Fixes fragmentation across production systems and regions.",
  },
  {
    id: "ingestion",
    label: "02",
    title: "Data Ingestion",
    builds: "Batch and streaming pipelines that move data reliably, on schedule, with validation built in.",
    tools: ["Airflow", "Azure Data Factory", "Pentaho", "Python"],
    value: "Data lands where it needs to be without manual exports.",
    challenge: "Removes the heavy manual effort behind recurring reports.",
  },
  {
    id: "platform",
    label: "03",
    title: "Lakehouse / Data Warehouse",
    builds: "A modeled, governed cloud warehouse or lakehouse sized to your actual query patterns.",
    tools: ["Snowflake", "Databricks", "Azure SQL", "Redshift", "BigQuery"],
    value: "One place teams trust as the source of truth.",
    challenge: "Solves inconsistent metrics across teams and tools.",
  },
  {
    id: "governance",
    label: "04",
    title: "Transformation & Governance",
    builds: "Standardized modeling, access control and data quality checks applied consistently.",
    tools: ["dbt", "Row-level security", "Data quality frameworks"],
    value: "Numbers match, no matter who's asking or which dashboard they use.",
    challenge: "Closes governance gaps that erode trust in reporting.",
  },
  {
    id: "ai-analytics",
    label: "05",
    title: "AI & Analytics",
    builds: "Semantic models, forecasting and an optional AI insight layer on top of the governed data.",
    tools: ["Power BI", "Python/ML pipelines", "AutoInsights"],
    value: "Decision-ready dashboards, plus anomalies and forecasts surfaced automatically.",
    challenge: "Ends analysts spending hours writing commentary by hand.",
  },
  {
    id: "outcomes",
    label: "06",
    title: "Business Applications",
    builds: "Executive dashboards, embedded analytics and operational tools built on the same governed layer.",
    tools: ["Power BI dashboards", "Embedded analytics", "Internal apps"],
    value: "Leadership and teams act on the same trusted numbers, in real time.",
    challenge: "Replaces delayed, spreadsheet-driven visibility.",
  },
];
