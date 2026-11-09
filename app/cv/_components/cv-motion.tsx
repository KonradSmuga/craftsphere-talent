"use client";

import { useEffect } from "react";

/**
 * Small motion layer for the private CV page:
 *  - [data-reveal] elements fade up as they scroll into view (staggered by --reveal-i),
 *  - [data-count] numbers count up once when the stats band appears,
 *  - sections out of view pause their looping icon animations,
 *  - the top bar link of the section in view is highlighted.
 * Without JavaScript, or with reduced motion / paused animations, everything is shown as is.
 */
export function CvMotion() {
  useEffect(() => {
    const main = document.querySelector<HTMLElement>("main.cv");
    if (!main || !("IntersectionObserver" in window)) return;

    const sections = Array.from(main.querySelectorAll<HTMLElement>(".screen"));
    const pauser = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.toggleAttribute("data-offscreen", !e.isIntersecting)),
      { rootMargin: "200px 0px" },
    );
    sections.forEach((section) => pauser.observe(section));

    // Highlight the section in view in the top bar.
    const links = Array.from(main.querySelectorAll<HTMLAnchorElement>(".cv-nav a"));
    const setActive = (nav: string | undefined) =>
      links.forEach((link) => {
        const active = link.getAttribute("href") === `#${nav}`;
        link.classList.toggle("nav-active", active);
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive((entry.target as HTMLElement).dataset.nav);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => spy.observe(section));
    const stopSpy = () => spy.disconnect();

    const reduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      document.documentElement.classList.contains("motion-paused");
    if (reduced) return () => { pauser.disconnect(); stopSpy(); };

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
      stopSpy();
      revealer.disconnect();
      counter.disconnect();
    };
  }, []);

  return null;
}
