"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Slow-moving grid + light sweep confined to the hero scene box.
 * Purely decorative — kept out of the accessibility tree by the parent.
 */
export function BackgroundGrid() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden rounded-3xl">
      <motion.div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--hairline) 1px, transparent 1px), linear-gradient(to bottom, var(--hairline) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        animate={
          reduceMotion
            ? undefined
            : { backgroundPosition: ["0px 0px", "28px 28px", "0px 0px"] }
        }
        transition={
          reduceMotion ? undefined : { duration: 14, repeat: Infinity, ease: "linear" }
        }
      />
      <motion.div
        className="absolute top-0 left-0 size-56 rounded-full blur-2xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklch, var(--brand-cyan) 22%, transparent) 0%, transparent 65%)",
        }}
        animate={
          reduceMotion
            ? undefined
            : { x: [20, 160, 60, 20], y: [30, 140, 220, 30] }
        }
        transition={
          reduceMotion ? undefined : { duration: 18, repeat: Infinity, ease: "easeInOut" }
        }
      />
    </div>
  );
}
