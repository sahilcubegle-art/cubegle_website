import { Hero } from "@/components/sections/hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { ValueStatement } from "@/components/sections/value-statement";
import { ServicesGrid } from "@/components/sections/services-grid";
import { PlatformJourney } from "@/components/sections/platform-journey";
import { DifferentiatorsSection } from "@/components/sections/differentiators-section";
import { CaseStudiesPreview } from "@/components/sections/case-studies-preview";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { TechEcosystem } from "@/components/sections/tech-ecosystem";
import { CtaSection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ValueStatement />
      <ServicesGrid />
      <PlatformJourney />
      <DifferentiatorsSection />
      <CaseStudiesPreview />
      <ProcessTimeline />
      <TechEcosystem />
      <CtaSection />
    </>
  );
}
