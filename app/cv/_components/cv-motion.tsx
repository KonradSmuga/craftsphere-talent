"use client";

import { useEffect } from "react";

/**
 * Small motion layer for the private CV page:
 *  - [data-reveal] elements fade up as they scroll into view (staggered by --reveal-i),
 *  - [data-count] numbers count up once when the stats band appears,
 *  - sections out of view pause their looping icon animations.
 * Without JavaScript, or with reduced motion / paused animations, everything is shown as is.
 */
export function CvMotion() {
  useEffect(() => {
    const main = document.querySelector<HTMLElement>("main.cv");
    if (!main || !("IntersectionObserver" in window)) return;

    const sections = main.querySelectorAll<HTMLElement>(".block");
    const pauser = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.toggleAttribute("data-offscreen", !e.isIntersecting)),
      { rootMargin: "200px 0px" },
    );
    sections.forEach((section) => pauser.observe(section));

    const reduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      document.documentElement.classList.contains("motion-paused");
    if (reduced) return () => pauser.disconnect();

    const items = Array.from(main.querySelectorAll<HTMLElement>("[data-reveal]"));
    const counters = Array.from(main.querySelectorAll<HTMLElement>("[data-count]"));
    const inView = (el: Element) => el.getBoundingClientRect().top < window.innerHeight * 0.92;

    const countUp = (el: HTMLElement) => {
      const target = Number(el.dataset.count);
      const suffix = el.dataset.suffix ?? "";
      if (!Number.isFinite(target)) return;
      const start = performance.now();
      const duration = 1100;
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = `${Math.round(target * eased)}${t === 1 ? suffix : ""}`;
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    // Anything already on screen stays visible: only content below the fold is hidden and revealed.
    const pending = items.filter((el) => !inView(el));
    pending.forEach((el) => el.setAttribute("data-reveal", "hidden"));

    const revealer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.setAttribute("data-reveal", "shown");
          revealer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    pending.forEach((el) => revealer.observe(el));

    const counter = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          countUp(entry.target as HTMLElement);
          counter.unobserve(entry.target);
        });
      },
      { threshold: 0.6 },
    );
    counters.forEach((el) => counter.observe(el));

    return () => {
      pauser.disconnect();
      revealer.disconnect();
      counter.disconnect();
    };
  }, []);

  return null;
}
