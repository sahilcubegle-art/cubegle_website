import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { siteConfig, footerLinks, navigation } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline bg-surface-1">
      <div className="container-content grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="max-w-xs text-sm text-muted-foreground">
            {siteConfig.positioning}.
          </p>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Navigate
          </h3>
          <ul className="mt-4 flex flex-col gap-3">
            {navigation
              .filter((item) => item.href !== "/")
              .map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Company
          </h3>
          <ul className="mt-4 flex flex-col gap-3">
            {footerLinks.company.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Get in touch
          </h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 size-4 shrink-0 text-brand-orange-text" aria-hidden="true" />
              <a
                href={`mailto:${siteConfig.email.general}`}
                className="transition-colors hover:text-foreground"
              >
                {siteConfig.email.general}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand-orange-text" aria-hidden="true" />
              <span>
                {siteConfig.address.line1}, {siteConfig.address.line2},{" "}
                {siteConfig.address.city}, {siteConfig.address.state}{" "}
                {siteConfig.address.postalCode}, {siteConfig.address.country}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-hairline">
        <div className="container-content flex flex-col gap-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          {footerLinks.legal.length > 0 && (
            <div className="flex gap-6">
              {footerLinks.legal.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
