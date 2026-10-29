"use client";

import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/site-data";

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  // Body scroll lock + ESC handling
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightbox !== null) setLightbox(null);
        else onClose();
      }
      if (e.key === "ArrowRight") setLightbox((i) => (i === null ? i : (i + 1) % project.images.length));
      if (e.key === "ArrowLeft") setLightbox((i) => (i === null ? i : (i - 1 + project.images.length) % project.images.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose, lightbox]);

  if (!project) return null;

  const hero = project.images[0];

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-background/95 backdrop-blur-xl"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      {/* Top bar */}
      <div className="shrink-0 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="cw-container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3 min-w-0">
            <span className="hidden sm:inline-flex cw-eyebrow">
              {project.industry}
            </span>
            <span className="text-xs text-slate/70 truncate">
              {project.client}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-navy hover:bg-navy/5 transition-colors"
            aria-label="Close project"
          >
            <X size={22} />
          </button>
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto">
        <article className="cw-container py-10 md:py-16">
          {/* Title block */}
          <header className="max-w-4xl">
            <h1
              id="project-modal-title"
              className="cw-display text-4xl md:text-5xl lg:text-6xl text-navy"
            >
              {project.title}
            </h1>
            <p
              className="mt-6 text-lg md:text-xl text-slate leading-relaxed"
              dangerouslySetInnerHTML={{ __html: project.description }}
            />
          </header>

          {/* Meta chips */}
          <div className="mt-8 grid sm:grid-cols-2 gap-6 max-w-4xl">
            <Meta label="Client" value={project.client ?? "—"} link={project.clientUrl} />
            <Meta label="Industry" value={project.industry} />
          </div>

          <div className="mt-6 grid sm:grid-cols-2 gap-6 max-w-4xl">
            <div>
              <Meta label="Disciplines" value={project.disciplines.join(" · ")} multiline />
            </div>
            <div>
              <Meta label="Deliverables" value={project.deliverables.join(" · ")} multiline />
            </div>
          </div>

          {/* Hero image */}
          <div className="mt-12 md:mt-16">
            <button
              type="button"
              onClick={() => setLightbox(0)}
              className="group block w-full relative rounded-2xl overflow-hidden border border-border"
              aria-label="Open full size"
            >
              <div className="relative aspect-[16/9] md:aspect-[2/1]">
                <img src={hero.src} alt={hero.alt} className="object-cover transition-transform duration-500 group-hover:scale-[1.02]" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} loading="eager" />
              </div>
            </button>
          </div>

          {/* Body paragraphs */}
          {project.body && project.body.length > 0 && (
            <div className="mt-12 max-w-3xl">
              {project.body.map((p, i) => (
                <p
                  key={i}
                  className="text-base md:text-lg text-slate leading-relaxed mb-5"
                  dangerouslySetInnerHTML={{ __html: p }}
                />
              ))}
            </div>
          )}

          {/* Gallery grid */}
          <div className="mt-12 md:mt-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-6">
              Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {project.images.slice(1).map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setLightbox(idx + 1)}
                  className="group relative overflow-hidden rounded-xl border border-border aspect-[4/3] bg-muted"
                  aria-label={`View image ${idx + 2}`}
                >
                  <img src={img.src} alt={img.alt} className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} loading="lazy" />
                </button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 md:mt-24 rounded-3xl bg-coral-soft/50 p-8 md:p-12 text-center">
            <p className="cw-eyebrow justify-center">Like what you see?</p>
            <h2 className="mt-4 cw-display text-3xl md:text-4xl text-navy">
              Let's create something <span className="text-coral">together.</span>
            </h2>
            <a
              href="#contact"
              onClick={onClose}
              className="mt-7 cw-btn-primary"
            >
              Start a project
            </a>
          </div>
        </article>
      </div>

      {/* Lightbox overlay */}
      {lightbox !== null && (
        <Lightbox
          project={project}
          index={lightbox}
          onClose={() => setLightbox(null)}
          onPrev={() =>
            setLightbox((i) =>
              i === null ? i : (i - 1 + project.images.length) % project.images.length
            )
          }
          onNext={() =>
            setLightbox((i) =>
              i === null ? i : (i + 1) % project.images.length
            )
          }
        />
      )}
    </div>
  );
}

function Meta({
  label,
  value,
  multiline,
  link,
}: {
  label: string;
  value: string;
  multiline?: boolean;
  link?: string;
}) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate/70">{label}</p>
      <p className={cn("mt-1 text-navy font-medium", multiline ? "text-sm leading-relaxed" : "text-base")}>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-coral hover:underline"
          >
            {value}
          </a>
        ) : (
          value
        )}
      </p>
    </div>
  );
}

function Lightbox({
  project,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  project: Project;
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const img = project.images[index];
  return (
    <div
      className="fixed inset-0 z-[110] bg-navy/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-5 right-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
        aria-label="Close"
      >
        <X size={22} />
      </button>
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-3 md:left-8 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-3 md:right-8 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>

      <figure
        className="relative max-w-6xl w-full max-h-[88vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full aspect-[4/3] md:aspect-[16/10] max-h-[80vh]">
          <img src={img.src} alt={img.alt} className="object-contain" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} loading="lazy" />
        </div>
        <figcaption className="mt-3 text-center text-sm text-cream/80 max-w-xl">
          {img.alt} · <span className="text-cream/50">{index + 1} / {project.images.length}</span>
        </figcaption>
      </figure>
    </div>
  );
}
