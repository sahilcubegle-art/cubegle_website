import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { ContactForm } from "@/components/forms/contact-form";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about your data, AI or cloud project. Share your current tools, key problems, timeline and constraints — we'll respond with a clear path forward.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Book a free consultation"
        description="Share where you are today and what you're trying to solve. We'll respond with an honest read on the right path forward."
      />

      <section className="py-16 sm:py-20">
        <Reveal className="container-content grid gap-12 lg:grid-cols-[1fr_320px]">
          <ContactForm />

          <aside className="flex h-fit flex-col gap-6 rounded-2xl border border-hairline bg-surface-1 p-6 lg:sticky lg:top-28">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Email us directly
              </h3>
              <a
                href={`mailto:${siteConfig.email.general}`}
                className="mt-3 flex items-start gap-2 text-sm text-foreground transition-colors hover:text-brand-orange-text"
              >
                <Mail className="mt-0.5 size-4 shrink-0 text-brand-orange-text" aria-hidden="true" />
                {siteConfig.email.general}
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
