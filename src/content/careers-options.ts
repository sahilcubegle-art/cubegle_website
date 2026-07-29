export const applicantTypes = [
  { value: "student-intern", label: "Student / Intern" },
  { value: "fresher", label: "Fresher (0-1 years)" },
  { value: "experienced", label: "Experienced professional" },
] as const;

export const interestAreas = [
  { value: "data-engineering", label: "Data Engineering" },
  { value: "cloud-data-platforms", label: "Cloud Data Platforms" },
  { value: "business-intelligence", label: "Business Intelligence" },
  { value: "ai-ml", label: "AI & Machine Learning" },
  { value: "devops", label: "DevOps & Platform Engineering" },
  { value: "other", label: "Not sure / Other" },
] as const;

export const applicationChecklist = [
  "Your resume or portfolio link",
  "Relevant coursework, projects or work experience",
  "Notice period or availability",
];
