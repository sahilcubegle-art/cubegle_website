import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { CtaSection } from "@/components/sections/cta-section";
import { CaseStudiesFilter } from "@/components/filters/case-studies-filter";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real platforms, products and outcomes we've delivered across data engineering, business intelligence, AI, cloud and DevOps.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Real Platforms. Real Products. Real Outcomes."
        title="Case studies"
        description="A sample of the platforms, dashboards and AI layers we've delivered — filter by the discipline you're interested in."
      />

      <section className="py-16 sm:py-20">
        <div className="container-content">
          <CaseStudiesFilter />
        </div>
      </section>

      <CtaSection />
    </>
  );
}
