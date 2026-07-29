import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { CtaSection } from "@/components/sections/cta-section";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Data engineering, cloud data platforms, business intelligence, AI/ML, DevOps and data strategy consulting — engaged individually or as one end-to-end team.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Engineering across the full data lifecycle"
        description="Six disciplines that connect into one delivery team — from raw source systems through to the AI and dashboards your business runs on."
      />

      <section className="py-16 sm:py-20">
        <RevealGroup className="container-content flex flex-col gap-16" stagger={0.12}>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <RevealItem
                key={service.slug}
                id={service.slug}
                className="grid gap-8 border-t border-hairline pt-12 first:border-t-0 first:pt-0 lg:grid-cols-[280px_1fr]"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex size-11 items-center justify-center rounded-xl bg-surface-2 text-brand-orange-text">
                      <Icon className="size-5" strokeWidth={1.75} />
                    </div>
                  </div>
                  <h2 className="font-display text-2xl font-semibold text-foreground">
                    {service.name}
                  </h2>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-brand-orange-text transition-colors hover:text-foreground"
                  >
                    Full details
                    <ArrowUpRight className="size-4" />
                  </Link>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Common challenges
                    </h3>
                    <ul className="mt-4 flex flex-col gap-3">
                      {service.challenges.map((item) => (
                        <li key={item} className="text-sm text-muted-foreground">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      What we deliver
                    </h3>
                    <ul className="mt-4 flex flex-col gap-3">
                      {service.deliverables.map((item) => (
                        <li key={item} className="text-sm text-foreground">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
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
