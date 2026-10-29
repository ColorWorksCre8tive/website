import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // Disable Next.js image optimization in dev — sharp/optimizer returns 400 for
  // large PNGs in this environment. Netlify's Next.js Runtime handles production
  // image optimization automatically via @netlify/plugin-nextjs, so this flag
  // only affects local dev. All <Image> components continue to render correctly.
  images: {
    unoptimized: true,
  },
  // Allow the preview/sandbox domain to access dev resources without CORS issues.
  // This prevents the "Cross origin request detected" warning and ensures all
  // /_next/* resources (JS chunks, fonts, CSS, HMR) load correctly in the preview.
  allowedDevOrigins: [
    "*.space-z.ai",
    "*.chatglm.cn",
    "localhost",
    "127.0.0.1",
  ],
};

export default nextConfig;
