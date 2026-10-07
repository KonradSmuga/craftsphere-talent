"use client";

import { useEffect, useState } from "react";

const KEY = "craftsphere-motion-paused";

/**
 * Lets visitors pause every looping animation on the site (WCAG 2.2.2).
 * The choice is remembered and applied as a class on <html>.
 */
export function MotionToggle() {
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    let saved = false;
    try {
      saved = window.localStorage.getItem(KEY) === "1";
    } catch {}
    setPaused(saved);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("motion-paused", paused);
  }, [paused]);

  const toggle = () => {
    const next = !paused;
    setPaused(next);
    try {
      window.localStorage.setItem(KEY, next ? "1" : "0");
    } catch {}
  };

  return (
    <button type="button" className="motion-toggle" aria-pressed={paused} onClick={toggle}>
      {paused ? "Play animations" : "Pause animations"}
    </button>
  );
}
