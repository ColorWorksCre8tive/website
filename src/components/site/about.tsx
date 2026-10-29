import { SITE, CLIENTS } from "@/lib/site-data";

export function About() {
  return (
    <section id="about" className="cw-section bg-background relative overflow-hidden">
      <div className="cw-container relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: founder portrait */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl shadow-navy/15">
              <img src={`/_next/image?url=${encodeURIComponent("/images/about/founder-portrait.jpeg")}&w=800&q=75`} alt={`${SITE.founder} — founder of ColorWorks Creative`} className="object-cover" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} loading="eager" />              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-navy/85 via-navy/40 to-transparent">
                <p className="font-display text-xl font-bold text-cream leading-tight">
                  {SITE.founder}
                </p>
                <p className="text-sm text-cream/80">Founder &amp; Creative Director</p>
              </div>
            </div>
          </div>

          {/* Right: copy */}
          <div className="lg:col-span-7">
            <p className="cw-eyebrow mb-5">Who we are</p>
            <h2 className="cw-display text-4xl md:text-5xl lg:text-6xl">
              A boutique studio with <span className="text-coral">big-design</span> energy.
            </h2>

            <div className="mt-6 space-y-5 text-base md:text-lg text-slate leading-relaxed max-w-2xl">
              <p>
                ColorWorks was founded in 2018 after seeing a growing need for a niche
                boutique graphic design studio that offers a wide range of design
                services while still remaining nimble and relational. We're proudly a
                female- and minority-owned business.
              </p>
              <p>
                Hi, I'm Karli. An entrepreneur-creative and proud owner of ColorWorks
                Creative. I'm Austin born and raised, earned my BA in Graphic Design at
                St. Edward's University, and bring over 15 years of design experience
                to every project. I started a grocery-delivery business in my 20s,
                later a vintage clothing store — both of which taught me the value of
                organized systems and customer relationships.
              </p>
              <p>
                Now, over 100 clients and 6+ years later, we are fulfilling my promise
                on each and every project: an original, beautiful piece that supports
                your goals.
              </p>
            </div>

            {/* Credentials — lightly colored boxes */}
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {SITE.credentials.map((c, i) => {
                const tints = [
                  "bg-coral-soft/50 border-coral/20",
                  "bg-gold/15 border-gold/30",
                  "bg-sage/15 border-sage/30",
                ];
                return (
                  <div
                    key={c}
                    className={`rounded-xl border p-4 text-sm font-medium text-navy ${tints[i % tints.length]}`}
                  >
                    {c}
                  </div>
                );
              })}
            </div>


          </div>
        </div>

        {/* Client marquee */}
        <div className="mt-20 lg:mt-28">
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate/60 mb-8">
            Some of our clients
          </p>
          <div className="relative overflow-hidden">
            <div className="cw-marquee flex gap-3 w-max">
              {[...CLIENTS, ...CLIENTS].map((name, i) => (
                <span
                  key={i}
                  className="shrink-0 inline-flex items-center rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-navy/70"
                >
                  {name}
                </span>
              ))}
            </div>
            {/* Edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
