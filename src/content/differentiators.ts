import type { LucideIcon } from "lucide-react";
import {
  UserCheck,
  DraftingCompass,
  Scale,
  Wallet,
  Handshake,
  Rocket,
  TrendingUp,
  FileText,
} from "lucide-react";

export type Differentiator = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const differentiators: Differentiator[] = [
  {
    title: "Senior engineering expertise",
    description: "13+ years of experience and 50+ projects delivered across data, BI, cloud and AI.",
    icon: UserCheck,
  },
  {
    title: "Architecture-first delivery",
    description: "We design before we build, so pipelines and platforms are shaped for your actual scale.",
    icon: DraftingCompass,
  },
  {
    title: "Tool-agnostic recommendations",
    description: "We recommend the platform that fits your workload, not the one we're most incentivized to sell.",
    icon: Scale,
  },
  {
    title: "Cost-conscious implementation",
    description: "Transparent pricing and architecture decisions that avoid inflated cloud costs.",
    icon: Wallet,
  },
  {
    title: "End-to-end ownership",
    description: "We act as an extended team across data engineering, BI, cloud, DevOps, product and AI.",
    icon: Handshake,
  },
  {
    title: "Fast proof-of-value",
    description: "Agile delivery with weekly demos, so you see and can redirect progress early.",
    icon: Rocket,
  },
  {
    title: "Scalable and maintainable solutions",
    description: "Systems designed to grow with your business, not systems that need to be rebuilt at the next milestone.",
    icon: TrendingUp,
  },
  {
    title: "Clear communication and documentation",
    description: "Transparent updates and documented systems your team can operate without us.",
    icon: FileText,
  },
];
