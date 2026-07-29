"use client";

import { useEffect, useRef, useState } from "react";
import { useAnimationFrame, useMotionValue, useReducedMotion, type MotionValue } from "framer-motion";

export type ScenePhase =
  | "idle"
  | "lookA"
  | "walkA"
  | "atA"
  | "lookB"
  | "walkB"
  | "atB"
  | "lookC"
  | "walkC"
  | "atC"
  | "wave"
  | "pause";

interface PhaseBoundary {
  phase: ScenePhase;
  start: number;
  end: number;
}

export const SCENE_DURATION_MS = 12000;

const PHASES: PhaseBoundary[] = [
  { phase: "idle", start: 0, end: 1200 },
  { phase: "lookA", start: 1200, end: 1500 },
  { phase: "walkA", start: 1500, end: 2700 },
  { phase: "atA", start: 2700, end: 4000 },
  { phase: "lookB", start: 4000, end: 4300 },
  { phase: "walkB", start: 4300, end: 5500 },
  { phase: "atB", start: 5500, end: 6800 },
  { phase: "lookC", start: 6800, end: 7100 },
  { phase: "walkC", start: 7100, end: 8300 },
  { phase: "atC", start: 8300, end: 9800 },
  { phase: "wave", start: 9800, end: 10800 },
  { phase: "pause", start: 10800, end: 12000 },
];

function resolvePhase(elapsedMs: number): ScenePhase {
  for (const boundary of PHASES) {
    if (elapsedMs < boundary.end) return boundary.phase;
  }
  return "pause";
}

export interface LoopAnimation {
  /** Discrete phase name — changes ~12 times per cycle, safe to use in React state/props. */
  phase: ScenePhase;
  /** Continuous 0-1 progress through the full 12s cycle, as a Framer Motion value (no re-renders). */
  cycleProgress: MotionValue<number>;
  reduced: boolean;
}

/**
 * Master sequencer for the hero scene. Drives a single requestAnimationFrame
 * loop (via Framer Motion's useAnimationFrame, so per-frame updates never
 * trigger a React re-render) and only touches React state when the discrete
 * "phase" actually changes. Pauses automatically when the tab is hidden and
 * short-circuits entirely when prefers-reduced-motion is set.
 *
 * The mascot visits three screens in turn (A: Data Engineering, B: AI/ML,
 * C: Insights) — each stop is a look -> walk -> arrive triplet.
 */
export function useLoopAnimation(enabled: boolean): LoopAnimation {
  const reduceMotion = useReducedMotion();
  const cycleProgress = useMotionValue(0);
  const [phase, setPhase] = useState<ScenePhase>("idle");
  const phaseRef = useRef<ScenePhase>("idle");

  const elapsedRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);
  const visibleRef = useRef(true);

  useEffect(() => {
    function handleVisibility() {
      visibleRef.current = !document.hidden;
      if (!visibleRef.current) lastTimeRef.current = null;
    }
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  useAnimationFrame((time) => {
    if (!enabled || reduceMotion || !visibleRef.current) {
      lastTimeRef.current = null;
      return;
    }

    if (lastTimeRef.current === null) lastTimeRef.current = time;
    const delta = time - lastTimeRef.current;
    lastTimeRef.current = time;

    elapsedRef.current = (elapsedRef.current + delta) % SCENE_DURATION_MS;
    cycleProgress.set(elapsedRef.current / SCENE_DURATION_MS);

    const nextPhase = resolvePhase(elapsedRef.current);
    if (nextPhase !== phaseRef.current) {
      phaseRef.current = nextPhase;
      setPhase(nextPhase);
    }
  });

  if (reduceMotion) {
    return { phase: "pause", cycleProgress, reduced: true };
  }

  return { phase, cycleProgress, reduced: false };
}
