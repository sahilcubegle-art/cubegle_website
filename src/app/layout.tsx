import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ReducedMotionProvider } from "@/components/providers/reduced-motion-provider";
import { SkipLink } from "@/components/layout/skip-link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/config/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-body",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono-tech",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.positioning}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "data engineering",
    "cloud data platform",
    "Power BI consulting",
    "AI and machine learning",
    "data warehouse",
    "lakehouse architecture",
    "DevOps automation",
    "data analytics consulting",
  ],
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: `${siteConfig.name} — ${siteConfig.positioning}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary",
    title: `${siteConfig.name} — ${siteConfig.positioning}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: siteConfig.legalName,
            alternateName: siteConfig.name,
            url: siteConfig.url,
            description: siteConfig.description,
            email: siteConfig.email.general,
            address: {
              "@type": "PostalAddress",
              streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
              addressLocality: siteConfig.address.city,
              addressRegion: siteConfig.address.state,
              postalCode: siteConfig.address.postalCode,
              addressCountry: siteConfig.address.country,
            },
          }}
        />
        <ReducedMotionProvider>
          <TooltipProvider delayDuration={150}>
            <SkipLink />
            <Navbar />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </TooltipProvider>
        </ReducedMotionProvider>
      </body>
    </html>
  );
}
