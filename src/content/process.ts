export type ProcessStage = {
  step: string;
  title: string;
  description: string;
};

export const processStages: ProcessStage[] = [
  {
    step: "01",
    title: "Discover",
    description:
      "A short discovery call to understand your current tools, data sources and the problem you're actually trying to solve.",
  },
  {
    step: "02",
    title: "Architect",
    description:
      "We design an architecture sized to your scale and budget — tool-agnostic, and documented so your team can follow the reasoning.",
  },
  {
    step: "03",
    title: "Validate",
    description:
      "For higher-risk builds, we prove the approach with a focused proof of concept before committing to full delivery.",
  },
  {
    step: "04",
    title: "Build",
    description:
      "Senior engineers build the pipelines, platform or models with weekly demos, so you see progress and can redirect early.",
  },
  {
    step: "05",
    title: "Scale",
    description:
      "We hand over documented, monitored systems built to grow with your data volume and team — with support for ongoing evolution.",
  },
];

export const engagementModels = [
  {
    title: "A focused audit",
    description: "An architecture assessment of what you have today, with prioritized recommendations.",
  },
  {
    title: "A proof of concept",
    description: "A scoped build that validates the approach before a larger investment.",
  },
  {
    title: "An end-to-end delivery engagement",
    description: "Full design-through-build ownership of a platform, pipeline or AI system.",
  },
];
