"use client";

import { useEffect } from "react";

/**
 * Reveal on scroll (fade + translateY 16px → 0, 560ms, escalonado 100ms por `data-reveal="0|1|2"`).
 * Un único observer para toda la página: las secciones siguen siendo Server Components y solo marcan
 * sus bloques con `data-reveal`. El estado oculto inicial lo aplica el CSS únicamente cuando <html>
 * tiene la clase `.js` (agregada por un script inline), por lo que sin JS nada queda oculto.
 */
export function RevealObserver() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const reveal = (el: Element) => el.classList.add("is-revealed");

    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach(reveal);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          reveal(entry.target);
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
