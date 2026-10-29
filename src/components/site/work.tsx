"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, type Project, type ProjectIndustry } from "@/lib/site-data";
import { ProjectModal } from "./project-modal";
import { cn } from "@/lib/utils";

const FILTERS: ("All" | ProjectIndustry)[] = [
  "All",
  "Nonprofit",
  "Hospitality / Restaurant",
  "Medical / Tech",
  "Editorial",
];

export function Work() {
  const [filter, setFilter] = useState<"All" | ProjectIndustry>("All");
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  // Featured = the 4 projects the user wants showcased on the homepage.
  // Order: Savor → Book Nerd → TAM → DoSeum
  const FEATURED_SLUGS = ["savor", "book-nerd", "texas-association-of-museums", "doseum"];
  const featured = useMemo(
    () =>
      FEATURED_SLUGS
        .map((slug) => PROJECTS.find((p) => p.slug === slug))
        .filter((p): p is Project => Boolean(p)),
    []
  );

  const visible = useMemo(() => {
    if (filter === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.industry === filter);
  }, [filter]);

  const active = useMemo(
    () => PROJECTS.find((p) => p.slug === activeSlug) ?? null,
    [activeSlug]
  );

  return (
    <section id="work" className="cw-section bg-background relative">
      <div className="cw-container">
        {/* Featured Work — 2x2 grid of the 4 highlighted projects */}
        <div className="mb-20 lg:mb-28">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 lg:mb-12">
            <div className="max-w-2xl">
              <p className="cw-eyebrow mb-5">Featured work</p>
              <h2 className="cw-display text-4xl md:text-5xl lg:text-6xl">
                Recent <span className="text-coral">projects.</span>
              </h2>
            </div>
            <p className="text-base text-slate max-w-md leading-relaxed">
              A curated look at four projects we're proud of — across nonprofit
              event branding, editorial design and full brand identity systems.
            </p>
          </div>

          {/* 2x2 grid of featured projects */}
          <div className="grid sm:grid-cols-2 gap-5 md:gap-7">
            {featured.map((project) => (
              <FeaturedCard
                key={project.slug}
                project={project}
                onClick={() => setActiveSlug(project.slug)}
              />
            ))}
          </div>
        </div>

        {/* All Work — full grid with filter */}
        <div className="pt-16 lg:pt-20 border-t border-border">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 lg:mb-12">
            <div className="max-w-2xl">
              <p className="cw-eyebrow mb-5">All work</p>
              <h3 className="cw-display text-3xl md:text-4xl">
                The full <span className="text-coral">archive.</span>
              </h3>
            </div>
            <div className="cw-no-scrollbar -mx-5 px-5 lg:mx-0 lg:px-0 flex gap-2 overflow-x-auto pb-1 lg:flex-wrap lg:justify-end">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  className={cn(
                    "shrink-0 rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all",
                    filter === f
                      ? "bg-navy text-cream shadow-md"
                      : "bg-card border border-border text-navy/70 hover:border-navy/40 hover:text-navy"
                  )}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
            {visible.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                onClick={() => setActiveSlug(project.slug)}
              />
            ))}
          </div>

          <div className="mt-14 text-center">
            <p className="text-sm text-slate">
              Want to see more? <a href="#contact" className="font-semibold text-coral hover:underline">Get in touch</a> — we have a deeper archive and are happy to share work that aligns with your industry.
            </p>
          </div>
        </div>
      </div>

      {/* Project detail modal — keyed by slug so internal state resets when project changes */}
      <ProjectModal
        key={activeSlug ?? "none"}
        project={active}
        onClose={() => setActiveSlug(null)}
      />
    </section>
  );
}

/* ------------------ Featured card (larger, 2-col grid) ------------------ */

function FeaturedCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  const hero = project.images[0];
  return (
    <article
      className="group relative overflow-hidden rounded-2xl border border-border bg-card cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-navy/15 hover:border-coral/30"
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`View project: ${project.title}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={hero.src} alt={hero.alt} className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/15 to-transparent opacity-90" />
        <div className="absolute top-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/85 backdrop-blur-sm text-navy opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <ArrowUpRight size={18} />
        </div>
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center rounded-full bg-coral px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
              {project.industry}
            </span>
          </div>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-cream leading-tight">
            {project.shortTitle}
          </h3>
          <p className="mt-2 text-cream/80 leading-relaxed text-sm md:text-base line-clamp-2 max-w-xl">
            {project.excerpt}
          </p>
        </div>
      </div>
    </article>
  );
}

/* ------------------ Standard card (3-col grid) ------------------ */

function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  const hero = project.images[0];
  return (
    <article
      className="group relative overflow-hidden rounded-2xl border border-border bg-card cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-navy/15 hover:border-coral/30"
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`View project: ${project.title}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img src={hero.src} alt={hero.alt} className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/15 to-transparent opacity-90" />
        <div className="absolute top-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/85 backdrop-blur-sm text-navy opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <ArrowUpRight size={18} />
        </div>
        <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center rounded-full bg-coral px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
              {project.industry}
            </span>
          </div>
          <h3 className="font-display text-xl font-bold text-cream leading-tight">
            {project.shortTitle}
          </h3>
          <p className="mt-2 text-xs text-cream/80 leading-relaxed line-clamp-2">
            {project.excerpt}
          </p>
        </div>
      </div>
    </article>
  );
}
