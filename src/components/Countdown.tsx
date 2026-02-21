"use client";

import { useState, useEffect } from "react";

const FESTIVAL_DATE = new Date("2026-07-17T14:00:00+02:00");

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const diff = FESTIVAL_DATE.getTime() - now.getTime();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const blocks = [
    { value: timeLeft.days, label: "DAGER" },
    { value: timeLeft.hours, label: "TIMER" },
    { value: timeLeft.minutes, label: "MIN" },
    { value: timeLeft.seconds, label: "SEK" },
  ];

  return (
    <div className="flex gap-4 md:gap-6">
      {blocks.map((b) => (
        <div key={b.label} className="text-center">
          <div className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold text-off-orange tabular-nums">
            {String(b.value).padStart(2, "0")}
          </div>
          <div className="text-off-cream/60 text-xs md:text-sm tracking-widest mt-1">
            {b.label}
          </div>
        </div>
      ))}
    </div>
  );
}
