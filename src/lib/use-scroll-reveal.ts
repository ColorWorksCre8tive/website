"use client";

import { useEffect } from "react";

/**
 * Scroll reveal — adds the `is-visible` class to any element with `.cw-reveal`
 * when it scrolls into the viewport. Re-runs whenever `selectorKey` changes
 * (e.g. when the project filter changes the grid contents).
 */
export function useScrollReveal(selectorKey: string = "default") {
  useEffect(() => {
    if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>(".cw-reveal:not(.is-visible)"));
    if (elements.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay;
            if (delay) el.style.transitionDelay = `${delay}ms`;
            el.classList.add("is-visible");
            io.unobserve(el);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    elements.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, [selectorKey]);
}
