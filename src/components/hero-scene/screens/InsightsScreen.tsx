"use client";

import { memo, useEffect, useRef, useState } from "react";
import { AnimatePresence, animate, motion, useMotionValue, useReducedMotion } from "framer-motion";
import { Cloud } from "lucide-react";
import { ScreenShell } from "@/components/hero-scene/screens/ScreenShell";
import { easeOutPremium } from "@/lib/motion";
import type { ScenePhase } from "@/hooks/useLoopAnimation";

const VISIBLE_PHASES: ScenePhase[] = [
  "lookA", "walkA", "atA", "lookB", "walkB", "atB", "lookC", "walkC", "atC", "wave", "pause",
];
const ACTIVATED_PHASES: ScenePhase[] = ["atC", "wave", "pause"];

const BARS = [0.4, 0.7, 0.5, 0.9, 0.65];
const LINE_POINTS = "0,28 12,20 24,24 36,10 48,14 60,4 72,8";

function Counter({ target, start, suffix = "" }: { target: number; start: boolean; suffix?: string }) {
  const reduceMotion = useReducedMotion();
  const value = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!start || reduceMotion) {
      value.set(0);
      return;
    }
    const controls = animate(value, target, {
      duration: 1.1,
      ease: easeOutPremium,
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [start, target, reduceMotion, value]);

  return (
    <span className="font-display text-base font-semibold text-foreground">
      {!start ? 0 : reduceMotion ? target : display}
      {suffix}
    </span>
  );
}

function InsightsScreenImpl({ phase }: { phase: ScenePhase }) {
  const reduceMotion = useReducedMotion();
  const visible = VISIBLE_PHASES.includes(phase);
  const activated = ACTIVATED_PHASES.includes(phase);
  const [rippleKey, setRippleKey] = useState(0);
  const firedRipple = useRef(false);

  useEffect(() => {
    if (phase === "atC" && !firedRipple.current) {
      firedRipple.current = true;
      setRippleKey((k) => k + 1);
    } else if (phase !== "atC") {
      firedRipple.current = false;
    }
  }, [phase]);

  return (
    <ScreenShell
      title="Insights"
      className="bottom-2 left-1/2 -translate-x-1/2"
      visible={visible}
      current={phase === "atC"}
    >
      <div className="flex items-center justify-between">
        <div className="flex gap-3">
          <div>
            <Counter target={98} start={activated} suffix="%" />
            <p className="text-[0.55rem] text-muted-foreground">Uptime</p>
          </div>
          <div>
            <Counter target={240} start={activated} suffix="/s" />
            <p className="text-[0.55rem] text-muted-foreground">Signals</p>
          </div>
        </div>
        <motion.div
          className="flex size-5 items-center justify-center text-brand-teal-light"
          animate={activated && !reduceMotion ? { rotate: 360 } : undefined}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        >
          <Cloud className="size-3.5" strokeWidth={1.75} />
        </motion.div>
      </div>

      <div className="mt-2 flex items-end gap-2">
        <svg viewBox="0 0 76 32" className="h-7 w-16" aria-hidden="true">
          {BARS.map((h, index) => (
            <motion.rect
              key={index}
              x={index * 15}
              width={9}
              rx={1.5}
              fill="var(--brand-orange)"
              initial={false}
              animate={activated ? { height: h * 32, y: 32 - h * 32 } : { height: 0, y: 32 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: easeOutPremium }}
            />
          ))}
          <motion.polyline
            points={LINE_POINTS}
            fill="none"
            stroke="var(--brand-cyan)"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={false}
            animate={activated ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          />
        </svg>

        <svg viewBox="0 0 32 32" className="size-7 shrink-0" aria-hidden="true">
          <circle cx={16} cy={16} r={13} fill="none" stroke="var(--hairline)" strokeWidth={4} />
          <motion.circle
            cx={16}
            cy={16}
            r={13}
            fill="none"
            stroke="var(--brand-teal-light)"
            strokeWidth={4}
            strokeLinecap="round"
            strokeDasharray={2 * Math.PI * 13}
            transform="rotate(-90 16 16)"
            initial={false}
            animate={{ strokeDashoffset: activated ? 2 * Math.PI * 13 * 0.32 : 2 * Math.PI * 13 }}
            transition={{ duration: 0.8, delay: 0.5, ease: easeOutPremium }}
          />
        </svg>
      </div>

      <motion.button
        type="button"
        tabIndex={-1}
        aria-hidden="true"
        className="pointer-events-none relative mt-2 flex w-full items-center justify-center overflow-hidden rounded-lg bg-primary py-1.5 text-[0.6rem] font-medium text-primary-foreground"
      >
        Sync now
        <AnimatePresence>
          {rippleKey > 0 && (
            <motion.span
              key={rippleKey}
              className="absolute size-2 rounded-full bg-white/70"
              initial={{ scale: 0, opacity: 0.6 }}
              animate={{ scale: 14, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
          )}
        </AnimatePresence>
      </motion.button>
    </ScreenShell>
  );
}

export const InsightsScreen = memo(InsightsScreenImpl);
