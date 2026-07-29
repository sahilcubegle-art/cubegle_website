"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Database, Cloud, Layers, BrainCircuit, LayoutDashboard } from "lucide-react";

const stages = [
  { label: "Sources", icon: Database },
  { label: "Ingestion", icon: Cloud },
  { label: "Lakehouse", icon: Layers },
  { label: "AI/ML", icon: BrainCircuit },
  { label: "BI", icon: LayoutDashboard },
];

export function HeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl border border-hairline bg-surface-1/60 px-2 py-6 sm:px-10 sm:py-10"
      aria-hidden="true"
    >
      <div className="relative flex items-center justify-between">
        {stages.map((stage, index) => {
          const Icon = stage.icon;
          const isLast = index === stages.length - 1;
          return (
            <div key={stage.label} className="relative flex flex-1 items-start last:flex-none">
              <div className="flex flex-col items-center gap-1.5 sm:gap-3">
                <motion.div
                  className="flex size-8 shrink-0 items-center justify-center rounded-full border border-hairline bg-surface-2 text-brand-orange-text sm:size-11 md:size-14"
                  initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Icon className="size-4 sm:size-5 md:size-6" strokeWidth={1.75} />
                </motion.div>
                <span className="whitespace-nowrap font-mono text-[0.55rem] uppercase tracking-[0.08em] text-muted-foreground sm:text-[0.65rem] sm:tracking-[0.15em] md:text-xs">
                  {stage.label}
                </span>
              </div>

              {!isLast && (
                <div className="relative mx-1 mt-4 h-px flex-1 bg-hairline sm:mx-2 sm:mt-[22px] md:mx-4 md:mt-7">
                  {!reduceMotion && (
                    <motion.span
                      className="absolute top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-brand-orange shadow-[0_0_8px_var(--brand-orange)]"
                      initial={{ left: "0%", opacity: 0 }}
                      animate={{ left: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: index * 0.35,
                      }}
                    />
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
