"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { PipelineFlow } from "@/components/decorative/pipeline-flow";
import { ScreenShell } from "@/components/hero-scene/screens/ScreenShell";
import type { ScenePhase } from "@/hooks/useLoopAnimation";

const VISIBLE_PHASES: ScenePhase[] = [
  "lookA", "walkA", "atA", "lookB", "walkB", "atB", "lookC", "walkC", "atC", "wave", "pause",
];
const ACTIVATED_PHASES: ScenePhase[] = [
  "atA", "lookB", "walkB", "atB", "lookC", "walkC", "atC", "wave", "pause",
];

const STACK = ["SQL", "AWS", "Fabric", "Azure", "Google Cloud"];

function DataEngineeringScreenImpl({ phase }: { phase: ScenePhase }) {
  const visible = VISIBLE_PHASES.includes(phase);
  const activated = ACTIVATED_PHASES.includes(phase);

  return (
    <ScreenShell
      title="Data Engineering"
      className="top-2 left-2"
      visible={visible}
      current={phase === "atA"}
    >
      <div className="h-8 overflow-hidden rounded-lg bg-surface-1">
        <PipelineFlow />
      </div>
      <div className="mt-2 flex flex-wrap gap-1">
        {STACK.map((tech, index) => (
          <motion.span
            key={tech}
            initial={false}
            animate={
              activated
                ? { opacity: 1, scale: 1 }
                : { opacity: 0.35, scale: 0.94 }
            }
            transition={{ duration: 0.35, delay: activated ? index * 0.06 : 0 }}
            className="rounded-full border border-hairline px-1.5 py-0.5 font-mono text-[0.5rem] text-muted-foreground"
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </ScreenShell>
  );
}

export const DataEngineeringScreen = memo(DataEngineeringScreenImpl);
