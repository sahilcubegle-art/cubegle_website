import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { CareersForm } from "@/components/forms/careers-form";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Cubegle. We're looking for students, freshers and experienced engineers who want to work on real data, AI and cloud systems.",
};

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Work with us"
        description="Whether you're a student looking for your first break, a fresher ready to build, or an experienced engineer looking for your next challenge — we'd like to hear from you."
      />

      <section className="py-16 sm:py-20">
        <Reveal className="container-content grid gap-12 lg:grid-cols-[1fr_320px]">
          <CareersForm />

          <aside className="flex h-fit flex-col gap-6 rounded-2xl border border-hairline bg-surface-1 p-6 lg:sticky lg:top-28">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Email us directly
              </h3>
              <a
                href={`mailto:${siteConfig.email.hr}`}
                className="mt-3 flex items-start gap-2 text-sm text-foreground transition-colors hover:text-brand-orange-text"
              >
                <Mail className="mt-0.5 size-4 shrink-0 text-brand-orange-text" aria-hidden="true" />
                {siteConfig.email.hr}
              </a>
            </div>
            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Office
              </h3>
              <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand-orange-text" aria-hidden="true" />
                {siteConfig.address.line1}, {siteConfig.address.line2}, {siteConfig.address.city},{" "}
                {siteConfig.address.state} {siteConfig.address.postalCode}, {siteConfig.address.country}
              </p>
            </div>
          </aside>
        </Reveal>
      </section>
    </>
  );
}
