import type { Metadata, Viewport } from "next";
import { Fraunces, Mulish } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SITE } from "@/lib/site-data";

// Fraunces — a classy, trendy, modern serif for big display headings.
// Has optical sizing, soft/wonky settings, and a literary editorial feel.
const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  axes: ["SOFT", "WONK"],
});

// Mulish — clean geometric sans for body text (kept from before).
const mulish = Mulish({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Austin Graphic Design Studio`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "graphic design studio Austin",
    "Austin graphic designer",
    "branding design Austin",
    "package design Austin",
    "print design Austin",
    "editorial design",
    "logo design Austin TX",
    "nonprofit design",
    "impact report design",
    "menu design",
    "colorworks creative",
    "Karli Burton graphic designer",
  ],
  authors: [{ name: SITE.founder }],
  creator: SITE.founder,
  publisher: SITE.legalName,
  alternates: { canonical: SITE.url },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    apple: [{ url: "/images/misc/webclip.jpg" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Austin Graphic Design Studio`,
    description: SITE.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${SITE.name} — ${SITE.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Austin Graphic Design Studio`,
    description: SITE.description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6dbd9" },
    { media: "(prefers-color-scheme: dark)", color: "#243056" },
  ],
  width: "device-width",
  initialScale: 1,
};

// JSON-LD structured data for SEO/GEO/AIO.
// Service-area business (no public street address — matches GMB setup).
// We use areaServed + ServiceArea types instead of a PostalAddress with a fake street.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE.url}/#business`,
      name: SITE.name,
      legalName: SITE.legalName,
      description: SITE.description,
      url: SITE.url,
      email: SITE.email,
      telephone: SITE.phone,
      founder: { "@type": "Person", name: SITE.founder },
      foundingDate: String(SITE.founded),
      // Service-area business: addressLocality only, no streetAddress (matches GMB).
      address: {
        "@type": "PostalAddress",
        addressLocality: SITE.address.locality,
        addressRegion: SITE.address.region,
        addressCountry: SITE.address.country,
      },
      // Centroid of service area (Austin metro) — not a physical address.
      geo: {
        "@type": "GeoCoordinates",
        latitude: SITE.geo.lat,
        longitude: SITE.geo.lng,
      },
      // Geographic areas served — used for local pack / map ranking.
      areaServed: [
        { "@type": "City", name: "Austin, TX" },
        { "@type": "City", name: "San Antonio, TX" },
        { "@type": "State", name: "Texas" },
      ],
      sameAs: [
        SITE.social.instagram,
        SITE.social.facebook,
        SITE.social.linkedin,
        SITE.social.tiktok,
      ],
      priceRange: "$$",
      knowsAbout: [
        "Branding",
        "Logo design",
        "Print design",
        "Editorial design",
        "Packaging design",
        "Infographic design",
        "Wayfinding design",
        "Graphic design",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      publisher: { "@id": `${SITE.url}/#business` },
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE.url}/?s={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE.url}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
        { "@type": "ListItem", position: 2, name: "Our Work", item: `${SITE.url}/#work` },
        { "@type": "ListItem", position: 3, name: "Services", item: `${SITE.url}/#services` },
        { "@type": "ListItem", position: 4, name: "About", item: `${SITE.url}/#about` },
        { "@type": "ListItem", position: 5, name: "Contact", item: `${SITE.url}/#contact` },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fraunces.variable} ${mulish.variable} antialiased bg-background text-foreground`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
