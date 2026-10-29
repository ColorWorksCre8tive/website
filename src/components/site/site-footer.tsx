import Link from "next/link";
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { SITE } from "@/lib/site-data";

const NAV = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const SERVICE_LINKS = [
  { label: "Logo & Branding", href: "#services" },
  { label: "Print & Editorial", href: "#services" },
  { label: "Package Design", href: "#services" },
  { label: "Environmental Design", href: "#services" },
  { label: "Design Retainer", href: "#services" },
];

export function SiteFooter() {
  return (
    <footer className="bg-navy text-cream mt-auto">
      <div className="cw-container py-16 lg:py-20">
        {/* Top: brand + nav + contact */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Brand column — NAP info only (logo removed per user request) */}
          <div className="lg:col-span-5">
            <p className="font-display text-xl font-bold text-cream mb-6">
              ColorWorks<span className="text-coral">.</span>
            </p>
            <p className="text-sm leading-relaxed text-cream/70 max-w-sm mb-7">
              A boutique graphic design studio in Austin, Texas. Cheerful,
              engaging, thoughtful design that moves your audience and supports
              your goals.
            </p>

            {/* NAP — Name, Address, Phone.
                Service-area business: no street address shown (matches GMB).
                Name and phone must match the GMB listing exactly. */}
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-coral shrink-0" />
                <div className="not-italic text-cream/80 leading-relaxed">
                  <span className="font-semibold text-cream">{SITE.name}</span><br />
                  <span>Service-area business</span><br />
                  <span>Servicing Austin, TX, San Antonio, TX &amp; Beyond</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 text-coral shrink-0" />
                <a href={`mailto:${SITE.email}`} className="text-cream/80 hover:text-coral transition-colors break-all">{SITE.email}</a>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 text-coral shrink-0" />
                <a href={SITE.phoneHref} className="text-cream/80 hover:text-coral transition-colors">{SITE.phone}</a>
              </div>
            </div>

            {/* Social row */}
            <div className="mt-7 flex items-center gap-3">
              <SocialLink href={SITE.social.instagram} label="Instagram" icon={<Instagram size={16} />} />
              <SocialLink href={SITE.social.facebook} label="Facebook" icon={<Facebook size={16} />} />
              <SocialLink href={SITE.social.linkedin} label="LinkedIn" icon={<Linkedin size={16} />} />
              <SocialLink href={`mailto:${SITE.email}`} label="Email" icon={<Mail size={16} />} />
            </div>
          </div>

          {/* Middle column: Pages + Services combined into 2 sub-columns */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-cream/50 mb-5">Pages</h3>
                <ul className="space-y-3">
                  {NAV.map((n) => (
                    <li key={n.href}>
                      <Link href={n.href} className="text-sm text-cream/80 hover:text-coral transition-colors">
                        {n.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-cream/50 mb-5">Services</h3>
                <ul className="space-y-3">
                  {SERVICE_LINKS.map((n) => (
                    <li key={n.label}>
                      <Link href={n.href} className="text-sm text-cream/80 hover:text-coral transition-colors">
                        {n.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right column: credentials only (removed repetitive "Let's Work Together" CTA) */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-cream/50 mb-5">
              Credentials
            </h3>
            <div className="space-y-2">
              {SITE.credentials.map((c) => (
                <p key={c} className="text-xs text-cream/60 leading-relaxed">
                  · {c}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-7 border-t border-cream/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
            <span className="hidden sm:inline"> · Female-owned &amp; minority-owned business.</span>
          </p>
          <p className="text-xs text-cream/40">
            Designed in Austin. Built for SEO, GEO &amp; AIO.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-all hover:bg-coral hover:border-coral hover:text-white"
    >
      {icon}
    </a>
  );
}
