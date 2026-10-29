import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Philosophy() {
  return (
    <section id="philosophy" className="cw-section bg-coral-soft/40 relative overflow-hidden">
      <div className="cw-container relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Heading column — with hand-drawn "Who We Are" icon (swapped from Services) */}
          <div className="lg:col-span-5">
            {/* Hand-drawn brand icon (gold) — concentric people */}
            <img src="/images/brand/Who We Are.svg" alt="" width={120} height={104} className="w-24 md:w-28 h-auto mb-7" loading="lazy" decoding="async" />
            <p className="cw-eyebrow mb-5">Our Philosophy</p>
            <h2 className="cw-display text-4xl md:text-5xl lg:text-6xl">
              Order from the <span className="text-coral">chaos.</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-slate leading-relaxed">
              ColorWorks exists to take your ideas and inspiration and turn them into
              a focused plan and achievable goals. The end product is marketing
              collateral with impact — backed by a team that shares the same joy of
              creation and crazy-good customer service.
            </p>
          </div>

          {/* Cards column */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-5">
              <PhilosophyCard
                index="01"
                title="An extension of your team"
                body="We can step in to collaborate on a single project, or serve as an ongoing supplement to your marketing department. Like having a Creative Director, expert Graphic Designer, Branding Specialist and Print Designer all in your pocket."
              />
              <PhilosophyCard
                index="02"
                title="Candid and uncomplicated"
                body="Our clients love the journey — candid, uncomplicated and pretty dang fun. We work with one person from start to finish and check in along the way to make sure we're on track."
                tone="gold"
              />
              <PhilosophyCard
                index="03"
                title="Impeccable final product"
                body="We've worked with restaurants to design menus that sing and ads that sell, helped health and medical companies launch new programs, and created eye-catching infographics for nonprofits."
                tone="sage"
              />
              <PhilosophyCard
                index="04"
                title="Tell us your goal"
                body="We've designed food and beverage packaging that pops with style and intrigue customers. We've helped real estate companies rebrand for modern markets. Tell us your goal, and we'll help you get there too."
                tone="coral"
              />
            </div>

            <div className="mt-7">
              <Link href="#services" className="inline-flex items-center gap-2 text-sm font-semibold text-navy group">
                <span>See how we work</span>
                <ArrowUpRight size={16} className="text-coral transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhilosophyCard({
  index,
  title,
  body,
  tone = "navy",
}: {
  index: string;
  title: string;
  body: string;
  tone?: "navy" | "gold" | "sage" | "coral";
}) {
  const tones: Record<string, string> = {
    navy: "text-navy",
    gold: "text-gold",
    sage: "text-sage",
    coral: "text-coral",
  };
  return (
    <article className="cw-card cw-card-hover p-6 md:p-7 bg-card">
      <span className={`font-display text-2xl font-extrabold ${tones[tone]}`}>{index}</span>
      <h3 className="mt-3 font-display text-lg font-bold text-navy leading-snug">{title}</h3>
      <p className="mt-2 text-sm text-slate leading-relaxed">{body}</p>
    </article>
  );
}
