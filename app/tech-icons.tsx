import type { ReactNode } from "react";

/**
 * Small animated illustrations for the Expertise tiles. Each one is a hand-drawn
 * SVG whose parts are animated in CSS (see "Animated tech icons" in globals.css).
 */
export type TechKey = "cloud" | "ai" | "frontend" | "backend" | "data" | "full-stack" | "devops" | "web3";

export function TechIcon({ name }: { name: TechKey }) {
  return (
    <svg className={`ti ti-${name}`} viewBox="0 0 48 48" aria-hidden="true">
      {ICONS[name]}
    </svg>
  );
}

const ICONS: Record<TechKey, ReactNode> = {
  // An upload arrow keeps rising out of the cloud.
  cloud: (
    <>
      <path className="ti-line ti-cloud-body" d="M15 36h19a8 8 0 0 0 1.2-15.9A11 11 0 0 0 14.6 19.3 8.5 8.5 0 0 0 15 36z" />
      <g className="ti-cloud-arrow">
        <path className="ti-line" d="M24 31V21" />
        <path className="ti-line" d="M19.5 25.5 24 21l4.5 4.5" />
      </g>
    </>
  ),
  // A spark turns on the chip while its pins light up side by side.
  ai: (
    <>
      <rect className="ti-line ti-soft" x="13" y="13" width="22" height="22" rx="4" />
      <g className="ti-pins ti-pins-1"><path className="ti-line" d="M19 13V7M24 13V7M29 13V7" /></g>
      <g className="ti-pins ti-pins-2"><path className="ti-line" d="M35 19h6M35 24h6M35 29h6" /></g>
      <g className="ti-pins ti-pins-3"><path className="ti-line" d="M19 35v6M24 35v6M29 35v6" /></g>
      <g className="ti-pins ti-pins-4"><path className="ti-line" d="M13 19H7M13 24H7M13 29H7" /></g>
      <path className="ti-fill ti-spark" d="M24 16.5c.8 3.7 3.8 6.7 7.5 7.5-3.7.8-6.7 3.8-7.5 7.5-.8-3.7-3.8-6.7-7.5-7.5 3.7-.8 6.7-3.8 7.5-7.5z" />
    </>
  ),
  // Lines of code type themselves into a browser window.
  frontend: (
    <>
      <rect className="ti-line ti-soft" x="5" y="9" width="38" height="30" rx="4" />
      <path className="ti-line" d="M5 16h38" />
      <circle className="ti-fill" cx="10" cy="12.5" r="1.3" />
      <circle className="ti-fill" cx="14" cy="12.5" r="1.3" />
      <circle className="ti-fill" cx="18" cy="12.5" r="1.3" />
      <rect className="ti-fill ti-code ti-code-1" x="10" y="21" width="17" height="2.8" rx="1.4" />
      <rect className="ti-fill ti-code ti-code-2" x="14" y="26.5" width="21" height="2.8" rx="1.4" />
      <rect className="ti-fill ti-code ti-code-3" x="10" y="32" width="12" height="2.8" rx="1.4" />
    </>
  ),
  // A command types out in the terminal, then the cursor blinks.
  backend: (
    <>
      <rect className="ti-line ti-soft" x="5" y="9" width="38" height="30" rx="4" />
      <path className="ti-line" d="m11 18 4.5 3.5L11 25" />
      <rect className="ti-fill ti-command" x="19" y="20.2" width="17" height="2.8" rx="1.4" />
      <rect className="ti-fill ti-cursor" x="11" y="29" width="6" height="3.4" rx="1" />
    </>
  ),
  // Bars of a chart rise and fall.
  data: (
    <>
      <path className="ti-line" d="M7 40h34" />
      <rect className="ti-fill ti-bar ti-bar-1" x="11" y="14" width="6.5" height="26" rx="1.8" />
      <rect className="ti-fill ti-bar ti-bar-2" x="20.75" y="14" width="6.5" height="26" rx="1.8" />
      <rect className="ti-fill ti-bar ti-bar-3" x="30.5" y="14" width="6.5" height="26" rx="1.8" />
    </>
  ),
  // Layers drop onto each other to build the stack.
  "full-stack": (
    <>
      <path className="ti-line ti-layer ti-layer-1" d="m7 31 17 8.5L41 31" />
      <path className="ti-line ti-layer ti-layer-2" d="m7 24 17 8.5L41 24" />
      <path className="ti-line ti-soft ti-layer ti-layer-3" d="M24 8.5 41 17l-17 8.5L7 17z" />
    </>
  ),
  // A light runs round the infinity loop.
  devops: (
    <>
      <path className="ti-line ti-loop-track" d="M24 24c-4-5-7.5-8-11.5-8a8 8 0 0 0 0 16c4 0 7.5-3 11.5-8s7.5-8 11.5-8a8 8 0 0 1 0 16c-4 0-7.5-3-11.5-8z" />
      <path className="ti-loop-run" pathLength={100} d="M24 24c-4-5-7.5-8-11.5-8a8 8 0 0 0 0 16c4 0 7.5-3 11.5-8s7.5-8 11.5-8a8 8 0 0 1 0 16c-4 0-7.5-3-11.5-8z" />
    </>
  ),
  // Blocks in a chain light up one after another.
  web3: (
    <>
      <path className="ti-line ti-link" d="M15 24h4M29 24h4" />
      {[5, 19, 33].map((x, i) => (
        <g key={x}>
          <rect className={`ti-fill ti-block ti-block-${i + 1}`} x={x} y="19" width="10" height="10" rx="2.5" />
          <rect className="ti-line" x={x} y="19" width="10" height="10" rx="2.5" />
        </g>
      ))}
    </>
  ),
};
