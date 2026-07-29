import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { CtaSection } from "@/components/sections/cta-section";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { caseStudies, getCaseStudyBySlug } from "@/content/case-studies";
import { getServiceBySlug } from "@/content/services";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/config/site";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.summary,
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  const relatedServices = study.relatedServices
    .map((s) => getServiceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
            { "@type": "ListItem", position: 2, name: "Case Studies", item: `${siteConfig.url}/case-studies` },
            { "@type": "ListItem", position: 3, name: study.title, item: `${siteConfig.url}/case-studies/${study.slug}` },
          ],
        }}
      />
      <PageHeader
        eyebrow={study.categories.join(" · ")}
        title={study.title}
        description={study.summary}
      />

      <section className="py-16 sm:py-20">
        <div className="container-content grid gap-12 lg:grid-cols-[1fr_320px]">
          <div className="flex flex-col gap-14">
            <Reveal>
              <h2 className="font-display text-xl font-semibold text-foreground">Overview</h2>
              <p className="mt-4 text-base text-muted-foreground">{study.overview}</p>
            </Reveal>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">The challenge</h2>
              <RevealGroup as="ul" className="mt-5 flex flex-col gap-3">
                {study.challenges.map((item) => (
                  <RevealItem as="li" key={item} className="text-sm text-muted-foreground sm:text-base">
                    — {item}
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">The architecture</h2>
              <RevealGroup as="ol" className="mt-5 flex flex-col gap-4">
                {study.architecture.map((stage, index) => (
                  <RevealItem
                    as="li"
                    key={stage.stage}
                    className="flex gap-4 rounded-xl border border-hairline bg-surface-1 p-4"
                  >
                    <span className="font-mono text-brand-orange-text">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{stage.stage}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{stage.description}</p>
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">What we built</h2>
              <RevealGroup as="ul" className="mt-5 flex flex-col gap-3">
                {study.whatWeBuilt.map((item) => (
                  <RevealItem as="li" key={item} className="text-sm text-foreground sm:text-base">
                    — {item}
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">Outcomes</h2>
              <RevealGroup as="ul" className="mt-5 grid gap-3 sm:grid-cols-2">
                {study.outcomes.map((item) => (
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
                {study.technologies.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {relatedServices.length > 0 && (
              <div>
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Related services
                </h3>
                <div className="mt-3 flex flex-col gap-2">
                  {relatedServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1 text-sm text-foreground transition-colors hover:text-brand-orange-text"
                    >
                      {service.shortName}
                      <ArrowUpRight className="size-3.5" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              All case studies
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
