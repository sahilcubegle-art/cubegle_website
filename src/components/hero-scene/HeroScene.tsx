"use client";

import { useEffect, useRef, useState } from "react";
import { useLoopAnimation } from "@/hooks/useLoopAnimation";
import { BackgroundGrid } from "@/components/hero-scene/BackgroundGrid";
import { Particles } from "@/components/hero-scene/Particles";
import { FloatingIcons } from "@/components/hero-scene/FloatingIcons";
import { HeroMascot } from "@/components/hero-scene/HeroMascot";
import { DataEngineeringScreen } from "@/components/hero-scene/screens/DataEngineeringScreen";
import { AiMlScreen } from "@/components/hero-scene/screens/AiMlScreen";
import { InsightsScreen } from "@/components/hero-scene/screens/InsightsScreen";

const MIN_WIDTH_QUERY = "(min-width: 1280px)";

/**
 * Self-contained, looping hero illustration: three screens (Data
 * Engineering, AI/ML, Insights) sit at the points of a triangle, and the
 * mascot walks a circuit between them, waking each one up in turn before
 * waving and looping. Purely decorative (the real message lives in the
 * hero heading), so the container is aria-hidden.
 *
 * The scene is only mounted at all above the xl breakpoint (it's hidden by
 * CSS below that anyway) and the animated children only mount once the
 * scene has actually scrolled into view — this keeps the particle canvas
 * and rAF sequencer from running at all on mobile/tablet or before the
 * hero is visible, rather than relying on `display: none` to silently
 * suppress an already-running loop.
 */
export function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [large, setLarge] = useState(
    () => typeof window !== "undefined" && window.matchMedia(MIN_WIDTH_QUERY).matches
  );

  useEffect(() => {
    const query = window.matchMedia(MIN_WIDTH_QUERY);
    const handleChange = (event: MediaQueryListEvent) => setLarge(event.matches);
    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (!large) return;
    const node = containerRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [large]);

  const active = large && inView;
  const { phase, cycleProgress } = useLoopAnimation(active);

  return (
    <div
      ref={containerRef}
      className="relative h-[26rem] w-[26rem] xl:h-[29rem] xl:w-[29rem]"
      role="img"
      aria-label="Illustration of the Cubegle mascot visiting three screens — Data Engineering, AI and ML, and Insights — waking each one up in turn"
    >
      {active && (
        <>
          <BackgroundGrid />
          <Particles />
          <FloatingIcons phase={phase} />
          <DataEngineeringScreen phase={phase} />
          <AiMlScreen phase={phase} />
          <InsightsScreen phase={phase} />
          <HeroMascot phase={phase} cycleProgress={cycleProgress} />
        </>
      )}
    </div>
  );
}
