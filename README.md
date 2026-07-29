# Cubegle — Marketing Website

Production website for Cubegle Technologies: "Your engineering partner for Data, AI and Cloud." Built with Next.js App Router, TypeScript, Tailwind CSS v4, shadcn/ui and Framer Motion.

## Stack

- **Framework:** Next.js 16 (App Router, Turbopack), React 19, TypeScript (strict)
- **Styling:** Tailwind CSS v4 (CSS-first `@theme`), shadcn/ui (`radix-nova` style) on top of `radix-ui`
- **Motion:** Framer Motion, with `MotionConfig reducedMotion="user"` applied globally so all animations honor the OS-level reduced-motion preference
- **Forms:** React Hook Form + Zod validation
- **Icons/fonts:** lucide-react, `next/font` (Geist, Geist Mono, Space Grotesk)

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build (statically prerenders every route)
npm run start     # serve the production build
npm run lint      # ESLint (Next.js + React Compiler rules)
npx tsc --noEmit  # type-check
```

## Structure

```
src/
  app/                    routes (App Router) — one folder per page, [slug] for dynamic detail pages
  components/
    layout/                navbar, footer, logo, skip-link
    sections/               homepage + shared page sections (hero, page-header, cta-section, ...)
    forms/                  contact and careers forms
    filters/                case studies category filter
    seo/                    JSON-LD structured data helper
    decorative/              animated background elements
    providers/              MotionConfig / reduced-motion wrapper
    ui/                      shadcn/ui primitives
  content/                 typed content data (services, case studies, careers options, etc.) — the
                           single source of truth every page renders from. No facts are hardcoded in JSX.
  config/site.ts           company info, nav, footer links, CTA copy
  lib/motion.ts            shared Framer Motion variants
```

## Content policy

All copy is grounded in what's verifiably true of the business today (services, positioning, contact details). Nothing fabricates customers, certifications, partnerships, stats, or testimonials that weren't part of the source content:

- **Contact and Careers forms** have no backend. Submitting builds a `mailto:` link pre-filled with the form data and opens the user's email client — this is disclosed in the success state rather than faking a "message sent" confirmation.
- **Footer legal links** (Privacy/Terms) were intentionally omitted rather than filled with placeholder or invented legal text.

## SEO

- Per-page metadata via `generateMetadata` / static `metadata` exports
- `sitemap.xml` and `robots.txt` generated from the same content data used to render pages (`src/app/sitemap.ts`, `src/app/robots.ts`)
- JSON-LD: `Organization` (root layout), `Service` + `BreadcrumbList` (service detail pages), `BreadcrumbList` (case study detail pages)

## Known follow-ups

- No OG/social preview image exists yet — add one and wire it into `metadata.openGraph`/`twitter` in `src/app/layout.tsx` once real brand imagery is available.
- Add real Privacy Policy / Terms of Service content and re-add the links in `src/config/site.ts`'s `footerLinks.legal` once legal copy exists.
