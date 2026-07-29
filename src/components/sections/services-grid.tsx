"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/sections/section-heading";
import { services } from "@/content/services";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function ServicesGrid() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-content">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="What we do"
            title="Six disciplines, one connected team"
            description="Engineering across the full data lifecycle — engaged individually or as one end-to-end delivery."
          />
          <Link
            href="/services"
            className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-brand-orange-text transition-colors hover:text-foreground"
          >
            View all services
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <motion.div
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const isFeatured = index === 0;
            return (
              <motion.div
                key={service.slug}
                variants={fadeUp}
                className={cn(isFeatured && "sm:col-span-2 lg:col-span-2 lg:row-span-1")}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className={cn(
                    "group flex h-full flex-col gap-4 rounded-2xl border border-hairline bg-surface-1 p-6 transition hover:-translate-y-1 hover:border-brand-orange/30 hover:bg-surface-2 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:p-7"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-surface-2 text-brand-orange-text">
                      <Icon className="size-5" strokeWidth={1.75} />
                    </div>
                    <ArrowUpRight className="size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {service.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{service.summary}</p>
                  </div>
                  <ul className="mt-auto flex flex-wrap gap-2 pt-2">
                    {service.capabilities.slice(0, 3).map((capability) => (
                      <li
                        key={capability}
                        className="rounded-full border border-hairline px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {capability}
                      </li>
                    ))}
                  </ul>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
