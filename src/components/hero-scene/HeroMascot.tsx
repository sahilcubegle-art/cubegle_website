"use client";

import { memo } from "react";
import Image from "next/image";
import { motion, useTransform, type MotionValue } from "framer-motion";
import { useIdleAnimation } from "@/hooks/useIdleAnimation";
import type { ScenePhase } from "@/hooks/useLoopAnimation";

const SPRITES = {
  rest: "/characters/cubey/master-neutral-standing.svg",
  walk: "/characters/cubey/poses/walking.svg",
  pointLeft: "/characters/cubey/poses/pointing-left.svg",
  pointRight: "/characters/cubey/poses/pointing-right.svg",
  wave: "/characters/cubey/shared/waving.svg",
} as const;

/**
 * Triangle waypoints, expressed as (x, y) offsets in px from the mascot's
 * centered-bottom resting spot. A: Data Engineering screen (top-left),
 * B: AI/ML screen (top-right), C: Insights screen (bottom-center).
 */
export const WAYPOINTS = {
  base: { x: 0, y: 0 },
  a: { x: -108, y: -212 },
  b: { x: 108, y: -212 },
  c: { x: -152, y: -20 },
} as const;

const BOUNCE_Y = -7;

const WALK_WINDOWS: { phase: ScenePhase; start: number; end: number }[] = [
  { phase: "walkA", start: 1500 / 12000, end: 2700 / 12000 },
  { phase: "walkB", start: 4300 / 12000, end: 5500 / 12000 },
  { phase: "walkC", start: 7100 / 12000, end: 8300 / 12000 },
];

function spriteFor(phase: ScenePhase): string {
  switch (phase) {
    case "walkA":
    case "walkB":
    case "walkC":
      return SPRITES.walk;
    case "atA":
      return SPRITES.pointLeft;
    case "atB":
    case "atC":
      return SPRITES.pointRight;
    case "wave":
      return SPRITES.wave;
    default:
      return SPRITES.rest;
  }
}

interface HeroMascotProps {
  phase: ScenePhase;
  cycleProgress: MotionValue<number>;
}

function HeroMascotImpl({ phase, cycleProgress }: HeroMascotProps) {
  const sprite = spriteFor(phase);

  // Position layer: piecewise-linear path through the four waypoints,
  // holding at each stop for its "at" phase before moving to the next.
  const xStops: number[] = [
    WAYPOINTS.base.x,
    WAYPOINTS.base.x,
    WAYPOINTS.a.x,
    WAYPOINTS.a.x,
    WAYPOINTS.b.x,
    WAYPOINTS.b.x,
    WAYPOINTS.c.x,
    WAYPOINTS.c.x,
  ];
  const yStops: number[] = [
    WAYPOINTS.base.y,
    WAYPOINTS.base.y,
    WAYPOINTS.a.y,
    WAYPOINTS.a.y,
    WAYPOINTS.b.y,
    WAYPOINTS.b.y,
    WAYPOINTS.c.y,
    WAYPOINTS.c.y,
  ];
  const progressStops = [0, 1500 / 12000, 2700 / 12000, 4300 / 12000, 5500 / 12000, 7100 / 12000, 8300 / 12000, 1];

  const x = useTransform(cycleProgress, progressStops, xStops);
  const yBase = useTransform(cycleProgress, progressStops, yStops);
  const bounce = useTransform(cycleProgress, (v) => {
    const win = WALK_WINDOWS.find((w) => v >= w.start && v <= w.end);
    if (!win) return 0;
    const local = (v - win.start) / (win.end - win.start);
    return Math.abs(Math.sin(local * Math.PI * 5)) * BOUNCE_Y;
  });
  const y = useTransform([yBase, bounce], ([base, b]: number[]) => base + b);
  const squish = useTransform(cycleProgress, (v) => {
    const win = WALK_WINDOWS.find((w) => v >= w.start && v <= w.end);
    if (!win) return 1;
    const local = (v - win.start) / (win.end - win.start);
    return 1 - Math.abs(Math.sin(local * Math.PI * 5)) * 0.05;
  });

  // Orientation layer: lean toward the destination while looking/walking/
  // arriving at each screen, plus the wave wobble at the end.
  const orientationTarget = (() => {
    switch (phase) {
      case "lookA":
      case "walkA":
      case "atA":
        return -6;
      case "lookB":
      case "walkB":
      case "atB":
        return 6;
      case "lookC":
      case "walkC":
      case "atC":
        return -3;
      case "wave":
        return [0, -8, 6, -4, 0];
      default:
        return 0;
    }
  })();

  const idle = useIdleAnimation(phase === "idle" || phase === "pause");

  // Cubey's walking pose steps toward the left in the source art. Only the
  // A -> B leg travels rightward, so that's the only walk that needs
  // mirroring to visibly step in its direction of travel.
  const shouldMirror = phase === "walkB";

  return (
    <div className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2">
      <motion.div className="w-28" style={{ x, y, scaleX: squish }}>
        <motion.div
          animate={{ rotate: orientationTarget }}
          transition={{ duration: phase === "wave" ? 1.1 : 0.5, ease: "easeInOut" }}
        >
          <motion.div animate={idle.animate} transition={idle.transition}>
            <Image
              key={sprite}
              src={sprite}
              alt=""
              width={1792}
              height={2432}
              className="h-auto w-full drop-shadow-lg"
              style={{ transform: shouldMirror ? "scaleX(-1)" : undefined }}
              priority
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export const HeroMascot = memo(HeroMascotImpl);
