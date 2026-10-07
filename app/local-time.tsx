"use client";

import { useEffect, useState } from "react";

/** Live local time for a market's reference city; renders nothing until mounted. */
export function LocalTime({ city, timeZone }: { city: string; timeZone: string }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const format = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone });
    const update = () => setTime(format.format(new Date()));
    update();
    const timer = window.setInterval(update, 20_000);
    return () => window.clearInterval(timer);
  }, [timeZone]);

  return (
    <span className="local-time">
      <i aria-hidden="true" />
      {time ? <><time>{time}</time> in {city}</> : <>Local time in {city}</>}
    </span>
  );
}
