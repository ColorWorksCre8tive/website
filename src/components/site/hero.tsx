import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Hero — warmer, modern, minimal, artistic.
 * No blurred gradient blobs. Instead: solid color accent shapes,
 * hand-drawn decorative SVG accents, editorial typography,
 * single hero image with a hand-drawn frame feel.
 */
export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 md:pt-36 lg:pt-40 pb-20 md:pb-28"
      aria-labelledby="hero-heading"
    >
      {/* Solid color accent shapes — no blur, more graphic/editorial */}
      <div
        className="absolute top-0 right-0 w-[42%] h-[60%] bg-coral-soft -z-10"
        aria-hidden="true"
        style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-32 h-32 bg-gold/30 -z-10"
        aria-hidden="true"
        style={{ borderRadius: "50% 50% 50% 0" }}
      />

      <div className="cw-container relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-7 max-w-2xl">
            <p className="cw-eyebrow mb-6">Austin Graphic Design Studio · Est. 2018</p>

            <h1
              id="hero-heading"
              className="cw-display text-[clamp(2.5rem,7vw,5.25rem)]"
            >
              Cheerful.
              <br />
              Engaging.
              <br />
              <span className="text-coral">Thoughtful Design.</span>
            </h1>

            <p className="mt-7 text-lg md:text-xl text-slate leading-relaxed max-w-xl">
              We function like your right-hand design super-power. A boutique
              graphic design studio delivering impeccable branding, print,
              packaging and editorial work through a seamless, flexible process.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link href="#work" className="cw-btn-primary">
                See our work
                <ArrowRight size={16} />
              </Link>
              <Link href="#contact" className="cw-btn-ghost">
                Start a project
              </Link>
            </div>

            {/* Trust signals */}
            <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              <Stat value="100+" label="Clients served" />
              <Stat value="15" label="Years of design" />
              <Stat value="2018" label="Founded in Austin" />
            </dl>
          </div>

          {/* Right: single hero image with hand-drawn frame accent */}
          <div className="lg:col-span-5 relative">
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="font-display text-2xl md:text-3xl font-extrabold text-navy">{value}</dt>
      <dd className="mt-1 text-xs text-slate leading-snug">{label}</dd>
    </div>
  );
}

/**
 * Single hero image with hand-drawn accent frame.
 * - Solid coral square behind (offset, no blur)
 * - Hand-drawn squiggle accent (from brand SVG library style)
 * - Single TAM 2026 program cover as the showcase image (one of the 4 featured projects)
 */
function HeroImage() {
  return (
    <div className="relative h-[480px] md:h-[580px] w-full">
      {/* Solid coral square offset behind — no blur, more graphic */}
      <div
        className="absolute -top-4 -right-4 w-[78%] h-[78%] bg-coral -z-10"
        aria-hidden="true"
      />
      {/* Solid sage square smaller accent */}
      <div
        className="absolute -bottom-4 -left-4 w-20 h-20 bg-sage/70 -z-10"
        aria-hidden="true"
        style={{ borderRadius: "8px" }}
      />

      {/* Main image */}
      <div className="absolute inset-0 rounded-sm overflow-hidden shadow-2xl shadow-navy/20">
        <img src="/images/texasassociationofmuseums/tam-2026-program-square.png" alt="Texas Association of Museums 2026 conference program cover — a featured ColorWorks project" className="object-cover" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} loading="eager" />
      {/* Solid gold circle accent — replaces the squiggle */}
      <div
        className="absolute -top-6 -left-6 w-16 h-16 bg-gold rounded-full -z-10"
        aria-hidden="true"
      />

      {/* Small floating "studio stamp" — adds editorial feel */}
      <div className="absolute -bottom-6 right-6 bg-cream border border-navy/15 rounded-full px-4 py-2 shadow-lg">
        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-navy">
          Featured · TAM 2026
        </p>
      </div>
    </div>
  );
}
