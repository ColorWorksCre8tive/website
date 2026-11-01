import type { Metadata, Viewport } from "next";
import { Fraunces, Mulish } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SITE } from "@/lib/site-data";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  axes: ["SOFT", "WONK"],
});

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
    "Karli Isiyel graphic designer",
    "Austin TX design studio",
    "brand identity Austin",
    "packaging design Texas",
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
      address: {
        "@type": "PostalAddress",
        addressLocality: SITE.address.locality,
        addressRegion: SITE.address.region,
        addressCountry: SITE.address.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: SITE.geo.lat,
        longitude: SITE.geo.lng,
      },
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
    {
      "@type": "FAQPage",
      "@id": `${SITE.url}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What graphic design services does ColorWorks Creative offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ColorWorks Creative offers logo design and branding, print and editorial design, package design, advertising and marketing design, environmental and wayfinding design, and ongoing design retainer services. We serve clients in Austin, TX, San Antonio, TX, and beyond.",
          },
        },
        {
          "@type": "Question",
          name: "Where is ColorWorks Creative located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ColorWorks Creative is a service-area business based in Austin, Texas. We serve clients in Austin, San Antonio, and across Texas. Founded in 2018, we are a female-owned and minority-owned boutique graphic design studio.",
          },
        },
        {
          "@type": "Question",
          name: "How much does graphic design cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Graphic design costs vary depending on the scope of the project. ColorWorks Creative offers project-based pricing for one-time design work and monthly retainer options for ongoing design support. Contact us for a custom proposal.",
          },
        },
        {
          "@type": "Question",
          name: "What is the design process at ColorWorks Creative?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our process has four steps: Client Intake, Project Proposal, First Draft and Revisions, and Project Delivery. We work with one person from start to finish for a seamless experience.",
          },
        },
      ],
    },
    {
      "@type": "Service",
      name: "Logo Design and Branding",
      provider: { "@id": `${SITE.url}/#business` },
      areaServed: [{ "@type": "City", name: "Austin, TX" }],
    },
    {
      "@type": "Service",
      name: "Print and Editorial Design",
      provider: { "@id": `${SITE.url}/#business` },
      areaServed: [{ "@type": "City", name: "Austin, TX" }],
    },
    {
      "@type": "Service",
      name: "Package Design",
      provider: { "@id": `${SITE.url}/#business` },
      areaServed: [{ "@type": "City", name: "Austin, TX" }],
    },
  ],
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const cookieConsentScript = `
(function() {
  var consent = localStorage.getItem('cookie-consent');
  if (consent === 'accepted' && '${GA_ID || ""}') {
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=${GA_ID || ""}';
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_ID || ""}');
  }
  if (!consent) {
    setTimeout(function() {
      var bar = document.getElementById('cookie-bar');
      if (bar) bar.style.display = 'block';
    }, 1500);
  }
})();
window.acceptCookies = function() {
  localStorage.setItem('cookie-consent', 'accepted');
  var bar = document.getElementById('cookie-bar');
  if (bar) bar.style.display = 'none';
  location.reload();
};
window.declineCookies = function() {
  localStorage.setItem('cookie-consent', 'declined');
  var bar = document.getElementById('cookie-bar');
  if (bar) bar.style.display = 'none';
};
document.addEventListener('DOMContentLoaded', function() {
  var acceptBtn = document.getElementById('cookie-accept');
  var declineBtn = document.getElementById('cookie-decline');
  if (acceptBtn) acceptBtn.onclick = window.acceptCookies;
  if (declineBtn) declineBtn.onclick = window.declineCookies;
});
`;

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
        <Script id="ga-and-cookie-consent" strategy="afterInteractive">
          {cookieConsentScript}
        </Script>
        {children}
        <Toaster />
        <div id="cookie-bar" style={{ display: "none" }} className="fixed bottom-0 inset-x-0 z-[200] bg-navy text-white shadow-2xl">
          <div className="cw-container py-4 md:py-5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3 max-w-2xl">
                <span className="text-xl mt-0.5 shrink-0">🍪</span>
                <p className="text-sm text-white/80 leading-relaxed">
                  We use cookies to understand how visitors use our site and to
                  improve your experience. By clicking &quot;Accept&quot;, you agree to our
                  use of analytics cookies.
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                                <button
                  type="button"
                  id="cookie-decline"
                  className="rounded-full border border-white/30 px-5 py-2 text-sm font-semibold text-white/80 hover:bg-white/10 transition-colors"
                >
                  Decline
                </button>
                <button
                  type="button"
                  id="cookie-accept"
                  className="rounded-full bg-coral px-5 py-2 text-sm font-semibold text-white hover:bg-[#b35f3d] transition-colors"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
