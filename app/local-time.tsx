"use client";

import { useEffect, useState } from "react";

/** Little cartoon sun with slowly turning rays. */
function Sun() {
  return (
    <svg className="sky-icon sky-sun" viewBox="0 0 32 32" aria-hidden="true">
      <g className="sky-sun-rays">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <rect key={angle} x="14.6" y="1.5" width="2.8" height="6" rx="1.4" transform={`rotate(${angle} 16 16)`} />
        ))}
      </g>
      <circle className="sky-sun-core" cx="16" cy="16" r="7.2" />
    </svg>
  );
}

/** Little cartoon moon that rocks gently next to a twinkling star. */
function Moon() {
  return (
    <svg className="sky-icon sky-moon" viewBox="0 0 32 32" aria-hidden="true">
      <path className="sky-moon-body" d="M20.5 4.5a11.5 11.5 0 1 0 7 19.6A9.5 9.5 0 0 1 20.5 4.5Z" />
      <path className="sky-moon-star" d="M25 3l1 2.4 2.4 1-2.4 1-1 2.4-1-2.4-2.4-1 2.4-1Z" />
    </svg>
  );
}

/** Live local time (12-hour, AM/PM) for a market's reference city, with a sun or moon. */
export function LocalTime({ city, timeZone }: { city: string; timeZone: string }) {
  const [now, setNow] = useState<{ time: string; day: boolean } | null>(null);

  useEffect(() => {
    const clock = new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", hour12: true, timeZone });
    const hour = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", hourCycle: "h23", timeZone });
    const update = () => {
      const date = new Date();
      const h = Number(hour.format(date));
      setNow({ time: clock.format(date), day: h >= 6 && h < 19 });
    };
    update();
    const timer = window.setInterval(update, 20_000);
    return () => window.clearInterval(timer);
  }, [timeZone]);

  return (
    <span className="local-time">
      <span className="local-time-icon">{now ? now.day ? <Sun /> : <Moon /> : null}</span>
      {now ? <><time>{now.time}</time> in {city}</> : <>Local time in {city}</>}
    </span>
  );
}
