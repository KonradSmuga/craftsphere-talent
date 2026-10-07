"use client";

import { useEffect } from "react";

/**
 * Pauses the looping animations of homepage sections that are scrolled out of view,
 * so the browser only animates what the visitor can see (less CPU and battery use).
 */
export function OffscreenPause() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const sections = document.querySelectorAll<HTMLElement>("main.home .screen");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.target.toggleAttribute("data-offscreen", !entry.isIntersecting));
      },
      { rootMargin: "200px 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return null;
}
