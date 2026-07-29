"use client";

import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Database, Cloud, BrainCircuit, BarChart3, Cpu, Webhook, Warehouse } from "lucide-react";
import type { ScenePhase } from "@/hooks/useLoopAnimation";

// Positioned in the middle band of the box (roughly 35-70% vertically) so
// they stay clear of the three screen cards parked in the corners/bottom.
const ICONS = [
  { Icon: Database, top: "40%", left: "2%", duration: 6.5, delay: 0 },
  { Icon: Cloud, top: "38%", left: "86%", duration: 7.2, delay: 0.4 },
  { Icon: BrainCircuit, top: "48%", left: "44%", duration: 6.8, delay: 0.8 },
  { Icon: BarChart3, top: "62%", left: "78%", duration: 7.6, delay: 0.2 },
  { Icon: Cpu, top: "66%", left: "8%", duration: 6.2, delay: 1.1 },
  { Icon: Webhook, top: "55%", left: "20%", duration: 7.0, delay: 0.6 },
  { Icon: Warehouse, top: "60%", left: "60%", duration: 6.9, delay: 1.4 },
] as const;

const VISIBLE_PHASES: ScenePhase[] = ["atB", "lookC", "walkC", "atC", "wave", "pause"];

function FloatingIconsImpl({ phase }: { phase: ScenePhase }) {
  const reduceMotion = useReducedMotion();
  const visible = VISIBLE_PHASES.includes(phase);

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {ICONS.map(({ Icon, top, left, duration, delay }, index) => (
        <motion.div
          key={index}
          className="absolute flex size-8 items-center justify-center rounded-full border border-hairline bg-surface-0/90 text-brand-orange-text shadow-sm backdrop-blur-sm"
          style={{ top, left }}
          animate={
            visible
              ? {
                  opacity: 1,
                  scale: 1,
                  y: reduceMotion ? 0 : [0, -10, 0, 8, 0],
                }
              : { opacity: 0, scale: 0.6, y: 0 }
          }
          transition={{
            opacity: { duration: 0.5, delay: visible ? delay : 0 },
            scale: { duration: 0.5, delay: visible ? delay : 0 },
            y: reduceMotion
              ? undefined
              : { duration, repeat: Infinity, ease: "easeInOut", delay },
          }}
        >
          <Icon className="size-4" strokeWidth={1.75} />
        </motion.div>
      ))}
    </div>
  );
}

export const FloatingIcons = memo(FloatingIconsImpl);
