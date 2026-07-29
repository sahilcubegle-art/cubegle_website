"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/sections/section-heading";
import { processStages } from "@/content/process";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function ProcessTimeline() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-content">
        <SectionHeading
          eyebrow="How we work"
          title="A disciplined path from discovery to scale"
          description="Five stages, weekly visibility, and the option to stop after any phase if it's not the right fit."
        />

        <motion.ol
          className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {processStages.map((stage, index) => (
            <motion.li key={stage.step} variants={fadeUp} className="relative flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="font-display text-2xl font-semibold text-brand-orange-text">
                  {stage.step}
                </span>
                {index < processStages.length - 1 && (
                  <span className="hidden h-px flex-1 bg-hairline sm:block lg:hidden" aria-hidden="true" />
                )}
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">{stage.title}</h3>
              <p className="text-sm text-muted-foreground">{stage.description}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
