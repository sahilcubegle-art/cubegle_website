"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { caseStudies, caseStudyCategories } from "@/content/case-studies";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function CaseStudiesFilter() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = useMemo(() => {
    if (activeCategory === "All") return caseStudies;
    return caseStudies.filter((study) => study.categories.includes(activeCategory));
  }, [activeCategory]);

  const categories = ["All", ...caseStudyCategories];

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter case studies by category">
        {categories.map((category) => (
          <Button
            key={category}
            type="button"
            size="sm"
            variant={activeCategory === category ? "default" : "outline"}
            aria-pressed={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <motion.div
        key={activeCategory}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        variants={staggerContainer(0.06)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {filtered.map((study) => (
          <motion.div key={study.slug} variants={fadeUp}>
            <Link
              href={`/case-studies/${study.slug}`}
              className={cn(
                "group flex h-full flex-col gap-4 rounded-2xl border border-hairline bg-surface-1 p-6 transition hover:-translate-y-1 hover:border-brand-orange/30 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:p-7"
              )}
            >
              <div className="flex flex-wrap gap-2">
                {study.categories.map((category) => (
                  <Badge key={category} variant="outline">
                    {category}
                  </Badge>
                ))}
              </div>
              <h2 className="font-display text-lg font-semibold text-foreground">{study.title}</h2>
              <p className="text-sm text-muted-foreground">{study.summary}</p>
              <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-brand-orange-text opacity-0 transition-opacity group-hover:opacity-100">
                Read the story
                <ArrowUpRight className="size-4" />
              </span>
            </Link>
          </motion.div>
        ))}

        {filtered.length === 0 && (
          <p className="col-span-full text-sm text-muted-foreground">
            No case studies in this category yet.
          </p>
        )}
      </motion.div>
    </div>
  );
}
