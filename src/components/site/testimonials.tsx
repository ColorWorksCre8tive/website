import { TESTIMONIALS, SITE } from "@/lib/site-data";

export function Testimonials() {
  return (
    <section id="testimonials" className="cw-section bg-coral-soft/30 text-navy relative overflow-hidden">
      {/* Solid color accent shapes — subtle, matching site palette */}
      <div
        className="absolute top-0 right-0 w-48 h-48 bg-coral/15"
        aria-hidden="true"
        style={{ borderRadius: "0 0 0 100%" }}
      />
      <div
        className="absolute bottom-0 left-0 w-32 h-32 bg-sage/15"
        aria-hidden="true"
        style={{ borderRadius: "0 100% 0 0" }}
      />

      <div className="cw-container relative">
        <div className="max-w-3xl mb-12 md:mb-16">
          {/* Hand-drawn "Contact Us" icon (sage) — matches the warm, artistic feel */}
          <img src="/images/brand/Contact Us.svg" alt="" width={130} height={90} className="w-24 md:w-28 h-auto mb-7" loading="lazy" decoding="async" />
          <p className="cw-eyebrow mb-5">
            Client love
          </p>
          <h2 className="cw-display text-4xl md:text-5xl lg:text-6xl text-navy">
            What clients <span className="text-coral">say.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              className="relative rounded-2xl bg-card border border-border p-7 md:p-9 shadow-sm"
            >
              <Quote className="absolute top-5 right-5 text-coral/20 pointer-events-none" />
              <blockquote className="text-navy/85 leading-relaxed text-base md:text-lg pr-8 md:pr-12 relative z-10">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border">
                <p className="font-display font-bold text-navy">{t.author}</p>
                <p className="text-sm text-slate">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Awards row */}
        <div className="mt-14 md:mt-20 pt-10 border-t border-navy/10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate/60 mb-6">Recognition</p>
          <ul className="grid sm:grid-cols-3 gap-5">
            {SITE.awards.map((a) => (
              <li key={a.name} className="flex items-baseline gap-3">
                <span className="font-display text-2xl font-extrabold text-coral">{a.year}</span>
                <span className="text-sm text-navy/80 leading-snug">{a.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Quote({ className }: { className?: string }) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      className={className}
      fill="currentColor"
      aria-hidden="true"
      style={{ transform: "scaleX(-1)" }}
    >
      <path d="M0 28.5C0 18.4 6.7 9.5 17 6.5l2.3 4.6c-6.5 2.4-11.4 7.4-12 13.2h.4c1.6-1 3.5-1.7 5.7-1.7 4.7 0 8.5 3.6 8.5 8.6 0 5.2-3.7 8.7-8.7 8.7C5.4 39.9 0 35.4 0 28.5zm26 0C26 18.4 32.7 9.5 43 6.5l2.3 4.6c-6.5 2.4-11.4 7.4-12 13.2h.4c1.6-1 3.5-1.7 5.7-1.7 4.7 0 8.5 3.6 8.5 8.6 0 5.2-3.7 8.7-8.7 8.7-7.8 0-13.2-4.5-13.2-11.4z" />
    </svg>
  );
}
