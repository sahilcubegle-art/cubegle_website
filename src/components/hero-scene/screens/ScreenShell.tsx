"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ScreenShellProps {
  title: string;
  className: string;
  visible: boolean;
  current: boolean;
  children: ReactNode;
}

/**
 * Shared card shell for the three hero-scene "screens" (Data Engineering,
 * AI/ML, Insights). All three spring in together once the mascot sets off
 * and stay put as a fixed backdrop — `current` just adds a focus ring while
 * the mascot is actively at that screen, so already-visited screens stay
 * visible with their content settled.
 */
export function ScreenShell({ title, className, visible, current, children }: ScreenShellProps) {
  return (
    <motion.div
      className={`pointer-events-none absolute w-36 rounded-2xl border bg-surface-0/95 p-3 shadow-lg backdrop-blur-sm transition-colors sm:w-40 ${className} ${
        current ? "border-brand-orange/50" : "border-hairline"
      }`}
      initial={false}
      animate={
        visible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 16, scale: 0.94 }
      }
      transition={
        visible
          ? { type: "spring", stiffness: 260, damping: 22 }
          : { duration: 0.25, ease: "easeIn" }
      }
    >
      <span className="font-mono text-[0.55rem] uppercase tracking-[0.14em] text-muted-foreground">
        {title}
      </span>
      <div className="mt-2">{children}</div>
    </motion.div>
  );
}
