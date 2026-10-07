"use client";

import { useEffect } from "react";

/**
 * Screen-by-screen scrolling for the homepage on large screens with a mouse:
 * one wheel gesture (or PageUp/PageDown/Space) moves to the previous/next
 * `.screen` section. A section taller than the window scrolls normally until
 * its edge is reached. Phones, touch devices and reduced-motion users keep
 * normal scrolling.
 */
const SCREEN_SELECTOR = "main.home .screen";
const ENABLED_QUERY = "(min-width: 1024px) and (min-height: 700px) and (hover: hover) and (pointer: fine)";
const MIN_LOCK_MS = 750;
const QUIET_MS = 220;
const EDGE = 4;

export function ScreenScroller() {
  useEffect(() => {
    const enabled = window.matchMedia(ENABLED_QUERY);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    let lockedUntil = 0;
    let lastWheelAt = 0;
    let animating = false;

    const headerOffset = () =>
      parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-space")) || 0;

    const screenTops = (screens: HTMLElement[], offset: number) =>
      screens.map((screen) => Math.round(screen.getBoundingClientRect().top + window.scrollY - offset));

    /** Returns the scroll target for a move in `direction`, or null to let the browser scroll. */
    const targetFor = (direction: 1 | -1): number | null => {
      const screens = Array.from(document.querySelectorAll<HTMLElement>(SCREEN_SELECTOR));
      if (screens.length === 0) return null;

      const offset = headerOffset();
      const tops = screenTops(screens, offset);
      const y = window.scrollY;
      const maxY = document.documentElement.scrollHeight - window.innerHeight;

      let index = 0;
      tops.forEach((top, i) => {
        if (top <= y + EDGE) index = i;
      });

      const current = screens[index];
      const rect = current.getBoundingClientRect();
      const viewportBottom = window.innerHeight;
      const tall = rect.height > viewportBottom - offset + EDGE;

      if (direction === 1) {
        // Inside a tall section: scroll natively until its bottom is visible.
        if (tall && rect.bottom > viewportBottom + EDGE) return null;
        if (index + 1 < tops.length) return tops[index + 1];
        // Last section: reveal the footer.
        return y < maxY - EDGE ? maxY : null;
      }

      // Scrolling up past the top of the first section: let the browser handle it.
      if (tall && rect.top < offset - EDGE && y > tops[index] + EDGE) return null;
      if (y > tops[index] + EDGE) return tops[index];
      if (index > 0) return tops[index - 1];
      return y > 0 ? 0 : null;
    };

    const go = (top: number) => {
      animating = true;
      lockedUntil = performance.now() + MIN_LOCK_MS;
      window.scrollTo({ top, behavior: reducedMotion.matches ? "auto" : "smooth" });
    };

    const active = () => enabled.matches && !reducedMotion.matches && !document.documentElement.classList.contains("mobile-nav-open");

    const onWheel = (event: WheelEvent) => {
      if (!active() || event.ctrlKey || Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;

      const now = performance.now();
      const sinceLastWheel = now - lastWheelAt;
      lastWheelAt = now;

      // Swallow trackpad momentum until the gesture has gone quiet.
      if (animating) {
        if (now < lockedUntil || sinceLastWheel < QUIET_MS) {
          event.preventDefault();
          return;
        }
        animating = false;
      }

      const target = targetFor(event.deltaY > 0 ? 1 : -1);
      if (target === null) return;
      event.preventDefault();
      go(target);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (!active() || event.altKey || event.ctrlKey || event.metaKey) return;
      const element = event.target as HTMLElement | null;
      if (element && (element.isContentEditable || /^(INPUT|TEXTAREA|SELECT|BUTTON)$/.test(element.tagName))) return;

      let direction: 1 | -1 | null = null;
      if (event.key === "PageDown" || (event.key === " " && !event.shiftKey)) direction = 1;
      if (event.key === "PageUp" || (event.key === " " && event.shiftKey)) direction = -1;
      if (direction === null) return;

      const target = targetFor(direction);
      if (target === null) return;
      event.preventDefault();
      go(target);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return null;
}
