"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/sections/section-heading";
import { technologyEcosystem } from "@/content/technologies";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function TechEcosystem() {
  return (
    <section className="border-y border-hairline bg-surface-1 py-16 sm:py-20">
      <div className="container-content">
        <SectionHeading
          eyebrow="Technology ecosystem"
          title="Tool-agnostic, chosen for your workload"
          description="We recommend the platform that fits your scale and budget — not the one we're most incentivized to sell."
        />

        <motion.div
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {technologyEcosystem.map((category) => (
            <motion.div
              key={category.name}
              variants={fadeUp}
              className="rounded-2xl border border-hairline bg-surface-0 p-6"
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-brand-orange-text">
                {category.name}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-hairline px-2.5 py-1 text-xs text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
