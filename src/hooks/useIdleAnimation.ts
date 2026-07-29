"use client";

import { useReducedMotion } from "framer-motion";

/**
 * Continuous idle "breathing" motion for a resting illustrated character.
 * Kept separate from useLoopAnimation so any component can drop into an
 * idle-like state (e.g. HeroMascot during "idle" and "pause" phases)
 * without depending on the master scene sequencer.
 */
export function useIdleAnimation(active: boolean) {
  const reduceMotion = useReducedMotion();
  const enabled = active && !reduceMotion;

  return {
    animate: enabled
      ? { scaleY: [1, 1.015, 1, 1.01, 1], rotate: [-0.5, 0.4, -0.3, 0.5, -0.5] }
      : { scaleY: 1, rotate: 0 },
    transition: enabled
      ? { duration: 4.6, repeat: Infinity, ease: "easeInOut" as const }
      : { duration: 0 },
  };
}
