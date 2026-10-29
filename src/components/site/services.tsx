import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/site-data";

/**
 * Maps service id -> the user's hand-drawn brand icon SVG.
 * The icons are artistic line-drawings in the brand palette.
 *
 * Icon assignments (per user's direction):
 *  - branding             → Branding.svg (sage, interlocking people)
 *  - print-editorial      → Print Design.svg (gold, layered print)
 *  - packaging            → Package Design.svg (coral, box + ribbon)
 *  - advertising          → Our Services.svg (coral, gear)
 *  - environmental        → About Us.svg (gold, magnifying glass — moved from About section)
 *  - retainer             → Design Retainer.svg (pink, infinity loop — user-provided)
 */
const SERVICE_ICON: Record<string, string | null> = {
  branding: "/images/brand/Branding.svg",
  "print-editorial": "/images/brand/Print Design.svg",
  packaging: "/images/brand/Package Design.svg",
  advertising: "/images/brand/Our Services.svg",
  environmental: "/images/brand/About Us.svg",
  retainer: "/images/brand/Design Retainer.svg",
};

export function Services() {
  return (
    <section id="services" className="cw-section bg-background relative">
      <div className="cw-container">
        <div className="max-w-3xl mb-14 md:mb-20">
          {/* Hand-drawn "What We Do" icon (coral, puzzle piece) — section header (swapped from Philosophy) */}
          <img src="/images/brand/What We Do.svg" alt="" width={120} height={116} className="w-24 md:w-28 h-auto mb-7" loading="lazy" decoding="async" />
          <p className="cw-eyebrow mb-5">What we do</p>
          <h2 className="cw-display text-4xl md:text-5xl lg:text-6xl">
            Let us solve <br className="hidden sm:block" />
            your <span className="text-coral">design problems.</span>
          </h2>
          <p className="mt-6 text-lg text-slate leading-relaxed">
            We offer a wide range of design services while remaining nimble and
            relational. Whether you need a single logo or an ongoing design partner,
            there's a ColorWorks engagement that fits.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {SERVICES.map((service, idx) => {
            const iconSrc = SERVICE_ICON[service.id];
            const isFeatured = idx === 0 || idx === 5;
            return (
              <article
                key={service.id}
                className={`cw-card cw-card-hover p-7 md:p-8 flex flex-col ${
                  isFeatured ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="flex items-start justify-between mb-5">
                  {/* Hand-drawn service icon */}
                  {iconSrc ? (
                    <img src={iconSrc} alt="" width={56} height={56} className="w-14 h-14 h-auto" loading="lazy" decoding="async" />
                  ) : (
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-coral-soft">
                      <span className="font-display text-2xl font-extrabold text-coral">{idx + 1}</span>
                    </div>
                  )}
                  <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-slate/60">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-navy leading-tight">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-slate leading-relaxed flex-grow">
                  {service.blurb}
                </p>
                <ul className="mt-5 space-y-1.5">
                  {service.deliverables.slice(0, 3).map((d) => (
                    <li key={d} className="flex items-center gap-2 text-xs text-navy/70">
                      <span className="h-1 w-1 rounded-full bg-coral" aria-hidden="true" />
                      {d}
                    </li>
                  ))}
                  {service.deliverables.length > 3 && (
                    <li className="text-xs text-slate/70 pl-3">
                      + {service.deliverables.length - 3} more
                    </li>
                  )}
                </ul>
              </article>
            );
          })}
        </div>

        {/* Process band */}
        <ProcessBand />
      </div>
    </section>
  );
}

function ProcessBand() {
  const steps = [
    { num: "01", title: "Client Intake", body: "Our getting-to-know-you phase. We talk project goals and deliverables, set expectations, establish open communication and discuss the all-important timeline." },
    { num: "02", title: "Project Proposal", body: "Time to dial in. You get a solid proposal with important details, contract terms, deposit needs and project outlines. We gather any related pictures, logos, brand guides and copy you're providing." },
    { num: "03", title: "First Draft + Revisions", body: "We've come to the first look. Take your first draft back to your team and discuss. We talk things through and ensure you meet your goals and happiness quota." },
    { num: "04", title: "Project Delivery", body: "Welcome to the grand finale. Revisions are incorporated and the final product is revealed — sent in the appropriate format and ready to go. No need to hold your applause." },
  ];

  return (
    <div className="mt-20 lg:mt-28">
      <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
        <div>
          <p className="cw-eyebrow mb-3">Our Process</p>
          <h3 className="cw-display text-3xl md:text-4xl">Simple. Interactive. <span className="text-coral">Fun.</span></h3>
        </div>
        <Link href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-navy group">
          <span>Start the process</span>
          <ArrowUpRight size={16} className="text-coral transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((s, i) => (
          <li
            key={s.num}
            className="relative rounded-2xl border border-border bg-card p-6 hover:border-coral/40 transition-colors"
          >
            <span className="absolute -top-3 left-5 inline-flex items-center justify-center h-7 px-3 rounded-full bg-navy text-cream text-xs font-bold font-display">
              {s.num}
            </span>
            <h4 className="mt-2 font-display text-base font-bold text-navy">{s.title}</h4>
            <p className="mt-2 text-xs text-slate leading-relaxed">{s.body}</p>
            {i < steps.length - 1 && (
              <span
                className="hidden lg:block absolute top-7 -right-2 text-coral/30"
                aria-hidden="true"
              >
                →
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
