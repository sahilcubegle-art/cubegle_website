export type TechCategory = {
  name: string;
  items: string[];
};

export const technologyEcosystem: TechCategory[] = [
  { name: "Cloud", items: ["Azure", "AWS", "Microsoft Fabric", "Google Cloud"] },
  { name: "Data Platforms", items: ["Databricks", "Snowflake", "Azure SQL", "Azure Synapse", "Delta Lake"] },
  { name: "ETL and Orchestration", items: ["Airflow", "Pentaho", "Azure Data Factory", "dbt", "Fivetran", "Talend"] },
  { name: "Databases and Warehouses", items: ["SQL Server", "Redshift", "BigQuery", "Snowflake", "PostgreSQL", "MongoDB"] },
  { name: "BI and Analytics", items: ["Power BI", "DAX", "Embedded Analytics", "Tableau", "Looker"] },
  { name: "AI and Machine Learning", items: ["Python", "scikit-learn", "MLOps pipelines", "LLM APIs", "TensorFlow", "MLflow"] },
  { name: "DevOps and Observability", items: ["Terraform", "GitHub Actions", "Azure DevOps", "Jenkins", "Docker", "Kubernetes", "Prometheus", "Grafana"] },
];

// Displayed as clean text labels in the trust strip (no official partnership implied).
export const capabilityStrip: string[] = [
  "Microsoft Fabric",
  "Azure",
  "AWS",
  "Databricks",
  "Snowflake",
  "Power BI",
  "Pentaho",
  "SQL Server",
  "Python",
  "dbt",
  "Airflow",
  "Terraform",
];
