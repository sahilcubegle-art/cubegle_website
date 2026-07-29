"use client";

import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Bot } from "lucide-react";
import { NeuralNetwork } from "@/components/decorative/neural-network";
import { ScreenShell } from "@/components/hero-scene/screens/ScreenShell";
import type { ScenePhase } from "@/hooks/useLoopAnimation";

const VISIBLE_PHASES: ScenePhase[] = [
  "lookA", "walkA", "atA", "lookB", "walkB", "atB", "lookC", "walkC", "atC", "wave", "pause",
];
const ACTIVATED_PHASES: ScenePhase[] = ["atB", "lookC", "walkC", "atC", "wave", "pause"];

function AiMlScreenImpl({ phase }: { phase: ScenePhase }) {
  const reduceMotion = useReducedMotion();
  const visible = VISIBLE_PHASES.includes(phase);
  const activated = ACTIVATED_PHASES.includes(phase);

  return (
    <ScreenShell
      title="AI / ML"
      className="top-2 right-2"
      visible={visible}
      current={phase === "atB"}
    >
      <div className="flex items-center justify-center py-1">
        <motion.div
          className="relative flex size-9 items-center justify-center rounded-full bg-surface-1 text-brand-teal-light"
          animate={
            activated && !reduceMotion
              ? { boxShadow: "0 0 0 6px color-mix(in oklch, var(--brand-cyan) 25%, transparent)" }
              : { boxShadow: "0 0 0 0px transparent" }
          }
          transition={{ duration: 0.6 }}
        >
          <Bot className="size-5" strokeWidth={1.75} />
        </motion.div>
      </div>
      <div className="mt-1 h-8 overflow-hidden rounded-lg bg-surface-1">
        {activated ? <NeuralNetwork /> : null}
      </div>
    </ScreenShell>
  );
}

export const AiMlScreen = memo(AiMlScreenImpl);
