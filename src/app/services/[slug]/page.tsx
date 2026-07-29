import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { CtaSection } from "@/components/sections/cta-section";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { NeuralNetwork } from "@/components/decorative/neural-network";
import { PipelineFlow } from "@/components/decorative/pipeline-flow";
import { Badge } from "@/components/ui/badge";
import { JsonLd } from "@/components/seo/json-ld";
import { services, getServiceBySlug } from "@/content/services";
import { serviceCharacters } from "@/content/service-characters";
import { getCaseStudyBySlug } from "@/content/case-studies";
import { siteConfig } from "@/config/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedCaseStudies = service.relatedCaseStudies
    .map((slug) => getCaseStudyBySlug(slug))
    .filter((cs): cs is NonNullable<typeof cs> => Boolean(cs));

  const decor =
    service.slug === "ai-machine-learning" ? (
      <NeuralNetwork />
    ) : service.slug === "data-engineering" ? (
      <PipelineFlow />
    ) : undefined;

  const character = serviceCharacters[service.slug];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.name,
          description: service.description,
          provider: {
            "@type": "Organization",
            name: siteConfig.legalName,
            url: siteConfig.url,
          },
          areaServed: "Worldwide",
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
            { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services` },
            { "@type": "ListItem", position: 3, name: service.name, item: `${siteConfig.url}/services/${service.slug}` },
          ],
        }}
      />
      <PageHeader
        eyebrow={`Service / ${service.shortName}`}
        title={service.name}
        description={service.description}
        decor={decor}
        character={character}
      />

      <section className="py-16 sm:py-20">
        <div className="container-content grid gap-12 lg:grid-cols-[1fr_320px]">
          <div className="flex flex-col gap-14">
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">
                Common challenges we solve
              </h2>
              <RevealGroup as="ul" className="mt-5 flex flex-col gap-3">
                {service.challenges.map((item) => (
                  <RevealItem as="li" key={item} className="text-sm text-muted-foreground sm:text-base">
                    — {item}
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">Our approach</h2>
              <RevealGroup as="ol" className="mt-5 flex flex-col gap-4">
                {service.approach.map((item, index) => (
                  <RevealItem as="li" key={item} className="flex gap-4 text-sm text-muted-foreground sm:text-base">
                    <span className="font-mono text-brand-orange-text">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">Capabilities</h2>
              <RevealGroup as="ul" className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.capabilities.map((item) => (
                  <RevealItem
                    as="li"
                    key={item}
                    className="rounded-xl border border-hairline bg-surface-1 px-4 py-3 text-sm text-foreground"
                  >
                    {item}
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">Deliverables</h2>
              <RevealGroup as="ul" className="mt-5 flex flex-col gap-3">
                {service.deliverables.map((item) => (
                  <RevealItem as="li" key={item} className="text-sm text-muted-foreground sm:text-base">
                    — {item}
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>

            {relatedCaseStudies.length > 0 && (
              <div>
                <h2 className="font-display text-xl font-semibold text-foreground">
                  Related case studies
                </h2>
                <RevealGroup className="mt-5 grid gap-4 sm:grid-cols-2">
                  {relatedCaseStudies.map((study) => (
                    <RevealItem key={study.slug}>
                      <Link
                        href={`/case-studies/${study.slug}`}
                        className="group flex flex-col gap-2 rounded-xl border border-hairline bg-surface-1 p-5 transition hover:-translate-y-1 hover:border-brand-orange/30 hover:shadow-lg"
                      >
                        <span className="font-display text-sm font-semibold text-foreground">
                          {study.title}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-brand-orange-text opacity-0 transition-opacity group-hover:opacity-100">
                          Read the story
                          <ArrowUpRight className="size-3.5" />
                        </span>
                      </Link>
                    </RevealItem>
                  ))}
                </RevealGroup>
              </div>
            )}
          </div>

          <Reveal
            as="aside"
            className="flex h-fit flex-col gap-6 rounded-2xl border border-hairline bg-surface-1 p-6 lg:sticky lg:top-28"
          >
            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Technologies
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
            >
              Book a free consultation
              <ArrowUpRight className="size-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              All services
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
