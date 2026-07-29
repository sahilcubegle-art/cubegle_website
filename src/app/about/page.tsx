import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { CtaSection } from "@/components/sections/cta-section";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { StatCounter } from "@/components/decorative/stat-counter";
import { differentiators } from "@/content/differentiators";
import { engagementModels } from "@/content/process";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Cubegle is an engineering partner for Data, AI and Cloud — senior engineers delivering governed platforms, BI and AI systems that hold up at scale.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Cubegle"
        title={siteConfig.positioning}
        description={siteConfig.description}
      />

      <section className="py-16 sm:py-20">
        <Reveal className="container-content grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-brand-orange-text">
              Mission
            </span>
            <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
              Turn complex data challenges into systems your team actually trusts
            </h2>
            <p className="text-base text-muted-foreground">
              We design and build the data platforms, BI systems and AI layers that sit underneath
              good decisions — engineered for the scale you actually have, not the scale a vendor
              wants to sell you.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-6 rounded-2xl border border-hairline bg-surface-1 p-8">
            <div>
              <StatCounter
                value={siteConfig.stats.yearsExperience}
                className="font-display text-3xl font-semibold text-brand-orange-text"
              />
              <p className="mt-1 text-sm text-muted-foreground">Years of engineering experience</p>
            </div>
            <div>
              <StatCounter
                value={siteConfig.stats.projectsDelivered}
                className="font-display text-3xl font-semibold text-brand-orange-text"
              />
              <p className="mt-1 text-sm text-muted-foreground">Projects delivered across data, BI, cloud and AI</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-hairline bg-surface-1 py-16 sm:py-20">
        <div className="container-content">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-brand-orange-text">
            What we value
          </span>
          <h2 className="font-display mt-4 max-w-2xl text-3xl font-semibold text-foreground sm:text-4xl">
            The principles behind how we work
          </h2>

          <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((item) => {
              const Icon = item.icon;
              return (
                <RevealItem
                  key={item.title}
                  className="flex flex-col gap-3 rounded-2xl border border-hairline bg-surface-0 p-6"
                >
                  <div className="flex size-10 items-center justify-center rounded-lg bg-surface-2 text-brand-teal-light">
                    <Icon className="size-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-content">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-brand-orange-text">
            How we engage
          </span>
          <h2 className="font-display mt-4 max-w-2xl text-3xl font-semibold text-foreground sm:text-4xl">
            Three ways to work with us
          </h2>

          <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-3">
            {engagementModels.map((model) => (
              <RevealItem
                key={model.title}
                className="flex flex-col gap-3 rounded-2xl border border-hairline bg-surface-1 p-6"
              >
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {model.title}
                </h3>
                <p className="text-sm text-muted-foreground">{model.description}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
