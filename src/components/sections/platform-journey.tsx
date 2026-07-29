"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "@/components/sections/section-heading";
import { journeyStages } from "@/content/platform-journey";
import { cn } from "@/lib/utils";

export function PlatformJourney() {
  const [activeId, setActiveId] = useState(journeyStages[0].id);
  const activeStage = journeyStages.find((stage) => stage.id === activeId) ?? journeyStages[0];
  const pinRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      const trigger = ScrollTrigger.create({
        trigger: pinRef.current,
        start: "top top+=96",
        end: `+=${(journeyStages.length - 1) * 600}`,
        pin: true,
        scrub: 0.6,
        onUpdate: (self) => {
          const index = Math.min(
            journeyStages.length - 1,
            Math.round(self.progress * (journeyStages.length - 1))
          );
          setActiveId(journeyStages[index].id);
        },
      });

      return () => trigger.kill();
    });

    return () => mm.revert();
  }, []);

  return (
    <section className="border-y border-hairline bg-surface-1 py-16 sm:py-20">
      <div className="container-content">
        <SectionHeading
          eyebrow="How we build it"
          title="From raw data to business outcomes"
          description="One connected architecture — each stage engineered to feed the next, from source systems through to the dashboards and AI your teams act on."
        />

        <div ref={pinRef} className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,320px)_1fr]">
          <div
            className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0"
            role="tablist"
            aria-label="Platform journey stages"
          >
            {journeyStages.map((stage) => {
              const isActive = stage.id === activeId;
              return (
                <button
                  key={stage.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveId(stage.id)}
                  className={cn(
                    "flex shrink-0 items-center gap-3 rounded-xl border px-4 py-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:shrink lg:w-full",
                    isActive
                      ? "border-brand-orange/40 bg-surface-2"
                      : "border-hairline bg-transparent hover:bg-surface-2/60"
                  )}
                >
                  <span
                    className={cn(
                      "font-mono text-xs",
                      isActive ? "text-brand-orange-text" : "text-muted-foreground"
                    )}
                  >
                    {stage.label}
                  </span>
                  <span
                    className={cn(
                      "whitespace-nowrap text-sm font-medium lg:whitespace-normal",
                      isActive ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {stage.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-hairline bg-surface-0 p-6 sm:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 flex flex-col gap-6"
              >
                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand-orange-text">
                    Stage {activeStage.label}
                  </span>
                  <h3 className="font-display mt-2 text-2xl font-semibold text-foreground">
                    {activeStage.title}
                  </h3>
                  <p className="mt-3 text-base text-muted-foreground">{activeStage.builds}</p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Tools we use
                    </h4>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {activeStage.tools.map((tool) => (
                        <li
                          key={tool}
                          className="rounded-full border border-hairline px-2.5 py-1 text-xs text-foreground"
                        >
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      What it solves
                    </h4>
                    <p className="mt-3 text-sm text-muted-foreground">{activeStage.challenge}</p>
                    <p className="mt-3 text-sm text-foreground">{activeStage.value}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
