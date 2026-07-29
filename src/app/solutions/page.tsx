import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { CtaSection } from "@/components/sections/cta-section";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { solutions } from "@/content/solutions";
import { getServiceBySlug } from "@/content/services";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Business-problem-oriented solutions — from modern data platforms to embedded analytics — built on our core data, AI and cloud services.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Solutions"
        title="Solutions built around your problem, not our product"
        description="Each solution below combines the services you need into a single engagement, scoped to the outcome you're trying to reach."
      />

      <section className="py-16 sm:py-20">
        <RevealGroup className="container-content grid gap-4 sm:grid-cols-2">
          {solutions.map((solution) => {
            const Icon = solution.icon;
            const related = solution.relatedServices
              .map((slug) => getServiceBySlug(slug))
              .filter((s): s is NonNullable<typeof s> => Boolean(s));

            return (
              <RevealItem
                key={solution.slug}
                className="flex flex-col gap-4 rounded-2xl border border-hairline bg-surface-1 p-6 transition hover:-translate-y-1 hover:shadow-lg sm:p-7"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-surface-2 text-brand-orange-text">
                  <Icon className="size-5" strokeWidth={1.75} />
                </div>
                <h2 className="font-display text-lg font-semibold text-foreground">
                  {solution.name}
                </h2>
                <p className="text-sm text-brand-orange-text">{solution.problem}</p>
                <p className="text-sm text-muted-foreground">{solution.description}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {related.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1 rounded-full border border-hairline px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:border-brand-orange/30 hover:text-foreground"
                    >
                      {service.shortName}
                      <ArrowUpRight className="size-3" />
                    </Link>
                  ))}
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </section>

      <CtaSection />
    </>
  );
}
