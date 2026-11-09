import type { ReactNode } from "react";

/**
 * Animated icons for the private CV page, drawn in the same style as app/animated-icons.tsx.
 * Lines use currentColor; motion lives in globals.css ("Private CV page: animated icons").
 */

export type HireKey = "software" | "hardware" | "gtm";
export type SideKey = "tools" | "strengths" | "education" | "certificates" | "languages" | "outside";

export function HireIcon({ name }: { name: HireKey }) {
  return <svg className={`ai cvh-${name}`} viewBox="0 0 48 48" aria-hidden="true">{HIRE[name]}</svg>;
}

export function SideIcon({ name }: { name: SideKey }) {
  return <svg className={`cvi cvi-${name}`} viewBox="0 0 24 24" aria-hidden="true">{SIDE[name]}</svg>;
}

const HIRE: Record<HireKey, ReactNode> = {
  // Code brackets breathe while the slash draws itself.
  software: (
    <>
      <path className="ai-line cvh-left" d="M16 14 6 24l10 10" />
      <path className="ai-line cvh-right" d="M32 14l10 10-10 10" />
      <path className="ai-line ai-faint" d="M27.5 11 20.5 37" />
      <path className="cvh-slash" pathLength={100} d="M27.5 11 20.5 37" />
    </>
  ),
  // A chip whose pins light up in turn while the core glows.
  hardware: (
    <>
      <rect className="ai-line ai-soft" x="13" y="13" width="22" height="22" rx="4" />
      <rect className="ai-line cvh-core" x="19.5" y="19.5" width="9" height="9" rx="1.5" />
      <path className="ai-line cvh-pin cvh-pin-1" d="M19 6v6M29 6v6" />
      <path className="ai-line cvh-pin cvh-pin-2" d="M36 19h6M36 29h6" />
      <path className="ai-line cvh-pin cvh-pin-3" d="M19 36v6M29 36v6" />
      <path className="ai-line cvh-pin cvh-pin-4" d="M6 19h6M6 29h6" />
    </>
  ),
  // A growth line draws itself and the arrow pops out.
  gtm: (
    <>
      <path className="ai-line ai-faint" d="M7 8v33h34" />
      <path className="cvh-trend" pathLength={100} d="M12 33l9-9 7 6 13-14" />
      <path className="ai-line cvh-arrow" d="M33 15.5h8.5V24" />
    </>
  ),
};

const SIDE: Record<SideKey, ReactNode> = {
  // A gear that keeps turning.
  tools: (
    <g className="cvi-gear">
      <circle className="cvi-line cvi-soft" cx="12" cy="12" r="6.5" />
      <circle className="cvi-line" cx="12" cy="12" r="2.4" />
      <path className="cvi-line" d="M12 2.5V5.5M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1" />
    </g>
  ),
  // Bars rising one after another.
  strengths: (
    <>
      <path className="cvi-line" d="M3 21h18" />
      <rect className="cvi-line cvi-soft cvi-bar cvi-bar-1" x="4.5" y="12" width="4" height="9" rx="1" />
      <rect className="cvi-line cvi-soft cvi-bar cvi-bar-2" x="10" y="7" width="4" height="14" rx="1" />
      <rect className="cvi-line cvi-soft cvi-bar cvi-bar-3" x="15.5" y="3" width="4" height="18" rx="1" />
    </>
  ),
  // A graduation cap bobbing with a swinging tassel.
  education: (
    <>
      <g className="cvi-cap">
        <path className="cvi-line cvi-soft" d="M21.4 10.9a1 1 0 0 0 0-1.8L12.8 5.2a2 2 0 0 0-1.6 0L2.6 9.1a1 1 0 0 0 0 1.8l8.6 3.9a2 2 0 0 0 1.6 0z" />
        <path className="cvi-line" d="M6 12.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-3.5" />
      </g>
      <path className="cvi-line cvi-tassel" d="M21.5 10v6" />
    </>
  ),
  // A medal that sways while its tick draws.
  certificates: (
    <g className="cvi-medal">
      <path className="cvi-line" d="M15.5 13 17 22l-5-3-5 3 1.5-9" />
      <circle className="cvi-line cvi-soft" cx="12" cy="8.5" r="6" />
      <path className="cvi-tick" pathLength={100} d="M9.4 8.6l1.8 1.8 3.4-3.4" />
    </g>
  ),
  // Two speech bubbles taking turns.
  languages: (
    <>
      <path className="cvi-line cvi-soft cvi-bubble-a" d="M4 3h9a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H8.5L5 15v-3H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
      <path className="cvi-line cvi-bubble-b" d="M17.5 9H20a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1v3l-3.5-3H12a2 2 0 0 1-2-2v-.5" />
    </>
  ),
  // A drum and two sticks hitting it in turn.
  outside: (
    <>
      <g className="cvi-drum">
        <ellipse className="cvi-line cvi-soft cvi-skin" cx="12" cy="13.5" rx="7.5" ry="2.6" />
        <path className="cvi-line" d="M4.5 13.5V18c0 1.4 3.4 2.6 7.5 2.6s7.5-1.2 7.5-2.6v-4.5" />
      </g>
      <path className="cvi-line cvi-stick cvi-stick-l" d="M3 3.5l6.5 8" />
      <path className="cvi-line cvi-stick cvi-stick-r" d="M21 3.5l-6.5 8" />
    </>
  ),
};
