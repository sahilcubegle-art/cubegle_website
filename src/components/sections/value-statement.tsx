"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { SectionHeading } from "@/components/sections/section-heading";
import { beforeState, afterState } from "@/content/before-after";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function ValueStatement() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-content">
        <SectionHeading
          eyebrow="Where most data platforms stall"
          title="Your data should create momentum, not complexity"
          description="Most organizations we work with are not starting from zero. They have data, tools and dashboards — but no single system anyone fully trusts."
        />

        <motion.div
          className="mt-12 grid gap-6 md:grid-cols-2"
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-hairline bg-surface-1 p-6 sm:p-8"
          >
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Before
            </h3>
            <ul className="mt-5 flex flex-col gap-4">
              {beforeState.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground sm:text-base">
                  <X className="mt-0.5 size-4 shrink-0 text-destructive" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-hairline bg-surface-1 p-6 ring-1 ring-brand-orange/20 sm:p-8"
          >
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-brand-orange-text">
              After
            </h3>
            <ul className="mt-5 flex flex-col gap-4">
              {afterState.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground sm:text-base">
                  <Check className="mt-0.5 size-4 shrink-0 text-brand-orange-text" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
