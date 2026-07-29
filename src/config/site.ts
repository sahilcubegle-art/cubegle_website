export const siteConfig = {
  name: "Cubegle",
  legalName: "Cubegle Technologies",
  tagline: "Data • AI • Cloud",
  positioning: "Your engineering partner for Data, AI and Cloud",
  description:
    "Cubegle designs and builds scalable data platforms, intelligent AI solutions and cloud systems that turn complex business challenges into measurable outcomes.",
  url: "https://www.cubegle.com",
  email: {
    general: "Contact@cubegle.com",
    hr: "hr@cubegle.com",
  },
  address: {
    line1: "1104, Link, 100 FT, RCC ROAD",
    line2: "Near JLR Showroom, Upper Gota",
    city: "Ahmedabad",
    state: "Gujarat",
    postalCode: "382481",
    country: "India",
  },
  stats: {
    yearsExperience: "13+",
    projectsDelivered: "50+",
  },
  links: {
    // No verified public social profiles were present in the source site.
    // Add real, verified URLs here before enabling footer social icons.
  },
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;

export const primaryCta = {
  label: "Book a Free Consultation",
  href: "/contact",
} as const;

export const footerLinks = {
  company: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Solutions", href: "/solutions" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Careers", href: "/careers" },
  ],
  legal: [] as { label: string; href: string }[],
} as const;
