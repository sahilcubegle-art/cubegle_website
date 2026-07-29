import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Images: allow the same hostname as the site for any absolute-URL images.
  // Add external image domains here if you ever serve images from a CDN.
  // images: { remotePatterns: [{ protocol: "https", hostname: "cdn.cubegle.com" }] },

  // Headers, redirects and rewrites are handled in netlify.toml.
  // No additional Next.js-level config is required for Netlify deployment —
  // the @netlify/plugin-nextjs adapter manages SSR, ISR and API routes.
};

export default nextConfig;
