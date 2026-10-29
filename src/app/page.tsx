"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useScrollReveal } from "@/lib/use-scroll-reveal";
import { Hero } from "@/components/site/hero";
import { Work } from "@/components/site/work";
import { Philosophy } from "@/components/site/philosophy";
import { Services } from "@/components/site/services";
import { Testimonials } from "@/components/site/testimonials";
import { About } from "@/components/site/about";
import { Blog } from "@/components/site/blog";
import { Contact } from "@/components/site/contact";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";

function SubmittedContact() {
  const searchParams = useSearchParams();
  const submitted = searchParams.get("submitted") === "true";
  return <Contact submitted={submitted} />;
}

export default function Home() {
  useScrollReveal("home");

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Work />
        <Philosophy />
        <Services />
        <Testimonials />
        <About />
        <Blog />
        <Suspense fallback={<Contact submitted={false} />}>
          <SubmittedContact />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  );
}
