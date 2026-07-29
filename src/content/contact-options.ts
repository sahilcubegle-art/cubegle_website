export const engagementOptions = [
  { value: "architecture-audit", label: "Architecture audit" },
  { value: "proof-of-concept", label: "Proof of concept" },
  { value: "project-delivery", label: "Project delivery" },
  { value: "dedicated-team", label: "Dedicated engineering team" },
  { value: "general-discussion", label: "General discussion" },
] as const;

export const interestAreas = [
  { value: "data-platform", label: "Data Platform / Warehousing" },
  { value: "bi-dashboards", label: "BI Dashboards / Power BI" },
  { value: "ai-ml", label: "AI/ML & AutoInsights" },
  { value: "devops-cloud", label: "DevOps & Cloud Modernisation" },
  { value: "product-mvp", label: "Product / MVP Development" },
  { value: "not-sure", label: "Not sure yet" },
] as const;

export const shareChecklist = [
  "Current tools",
  "One to three key problems",
  "Target timeline",
  "Constraints (budget, team, compliance)",
];
