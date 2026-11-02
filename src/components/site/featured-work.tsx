"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, type Project } from "@/lib/site-data";
import { ProjectModal } from "./project-modal";

const FEATURED_SLUGS = ["savor", "book-nerd", "texas-association-of-museums", "doseum"];

export function FeaturedWork() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  const featured = FEATURED_SLUGS
    .map((slug) => PROJECTS.find((p) => p.slug === slug))
    .filter((p): p is Project => Boolean(p));

  const active = PROJECTS.find((p) => p.slug === activeSlug) ?? null;

  return (
    <>
      <section id="work" className="cw-section bg-background relative">
        <div className="cw-container">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 lg:mb-12">
            <div className="max-w-2xl">
              <p className="cw-eyebrow mb-5">Featured work</p>
              <h2 className="cw-display text-4xl md:text-5xl lg:text-6xl">
                Recent <span className="text-coral">projects.</span>
              </h2>
            </div>
            <p className="text-base text-slate max-w-md leading-relaxed">
              A curated look at four projects we are proud of — across nonprofit
              event branding, editorial design and full brand identity systems.
            </p>
          </div>

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
      </section>

      <ProjectModal
        key={activeSlug ?? "none"}
        project={active}
        onClose={() => setActiveSlug(null)}
      />
    </>
  );
}

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
