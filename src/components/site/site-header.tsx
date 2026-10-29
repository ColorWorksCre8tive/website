"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/80 shadow-[0_4px_24px_-12px_rgba(36,51,84,0.10)]"
          : "bg-transparent"
      )}
    >
      <div className="cw-container flex h-16 md:h-20 items-center justify-between">
        {/* Logo — uses the actual ColorWorks brand SVG */}
        <Link
          href="#top"
          className="group flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md"
          aria-label="ColorWorks Creative — home"
        >
          <img
            src="/images/brand/Top Nav Logo.svg"
            alt="ColorWorks Creative"
            width={220}
            height={40}
            loading="eager"
            className="h-8 md:h-9 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-4 py-2 text-sm font-semibold text-navy/80 hover:text-navy transition-colors group"
            >
              {item.label}
              <span className="absolute inset-x-4 -bottom-0.5 h-0.5 origin-left scale-x-0 bg-coral transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <Link href="#contact" className="hidden sm:inline-flex cw-btn-primary">
            Start a Project
          </Link>
          <button
            type="button"
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full text-navy hover:bg-navy/5 transition-colors"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-md">
          <nav className="cw-container py-4 flex flex-col gap-1" aria-label="Mobile">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-base font-semibold text-navy hover:bg-coral-soft/60 rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 cw-btn-primary"
            >
              Start a Project
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
