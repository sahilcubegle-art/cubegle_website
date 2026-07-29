"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/sections/section-heading";
import { differentiators } from "@/content/differentiators";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function DifferentiatorsSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-content">
        <SectionHeading
          eyebrow="Why Cubegle"
          title="Senior engineering, applied with discipline"
          align="center"
          className="mx-auto"
        />

        <motion.div
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {differentiators.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="flex flex-col gap-3 rounded-2xl border border-hairline bg-surface-1 p-6"
              >
                <div className="flex size-10 items-center justify-center rounded-lg bg-surface-2 text-brand-teal-light">
                  <Icon className="size-5" strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
