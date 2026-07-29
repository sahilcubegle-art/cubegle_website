"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/sections/section-heading";
import { caseStudies } from "@/content/case-studies";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function CaseStudiesPreview() {
  const featured = caseStudies.slice(0, 3);

  return (
    <section className="border-y border-hairline bg-surface-1 py-16 sm:py-20">
      <div className="container-content">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Real Platforms. Real Products. Real Outcomes."
            title="What we've built"
            description="A sample of the platforms, dashboards and AI layers we've delivered across industries."
          />
          <Link
            href="/case-studies"
            className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-brand-orange-text transition-colors hover:text-foreground"
          >
            All case studies
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <motion.div
          className="mt-12 grid gap-4 lg:grid-cols-3"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {featured.map((study) => (
            <motion.div key={study.slug} variants={fadeUp}>
              <Link
                href={`/case-studies/${study.slug}`}
                className="group flex h-full flex-col gap-4 rounded-2xl border border-hairline bg-surface-0 p-6 transition hover:-translate-y-1 hover:border-brand-orange/30 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:p-7"
              >
                <div className="flex flex-wrap gap-2">
                  {study.categories.slice(0, 2).map((category) => (
                    <Badge key={category} variant="outline">
                      {category}
                    </Badge>
                  ))}
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {study.title}
                </h3>
                <p className="text-sm text-muted-foreground">{study.summary}</p>
                <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-brand-orange-text opacity-0 transition-opacity group-hover:opacity-100">
                  Read the story
                  <ArrowUpRight className="size-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
