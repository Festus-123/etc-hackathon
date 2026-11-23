"use client";

import { useEffect, useState } from "react";

// Hackathon window in West Africa Time (UTC+1).
const START = new Date("2026-12-12T00:00:00+01:00").getTime();
const END = new Date("2027-01-12T23:59:59+01:00").getTime();

type Phase = "before" | "live" | "ended";

function getState(now: number): { phase: Phase; remaining: number } {
  if (now < START) return { phase: "before", remaining: START - now };
  if (now < END) return { phase: "live", remaining: END - now };
  return { phase: "ended", remaining: 0 };
}

function Unit({
  value,
  label,
  accent,
  plain,
  hideOnMobile,
}: {
  value: number;
  label: string;
  accent?: boolean;
  plain?: string;
  hideOnMobile?: boolean;
}) {
  return (
    <div
      className={`flex-col items-center  px-2 py-4 sm:px-6 sm:py-6 ${
        hideOnMobile ? "hidden sm:flex" : "flex"
      }`}
    >
      <span
        className={`text-5xl font-black tabular-nums sm:text-7xl ${
          accent ? "text-blue-soft" : plain ? plain : "text-white"
        }`}
      >
        {String(value).padStart(2, "0")}
      </span>
      <span className="mt-1 text-[10px] font-bold uppercase tracking-widest text-white/80 sm:text-sm">
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  // null until mounted, so server and client markup match.
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setNow(Date.now());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const { phase, remaining } = getState(now ?? START);
  const total = Math.max(0, Math.floor(remaining / 1000));
  const d = Math.floor(total / 86400);
  const h = Math.floor((total % 86400) / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;

  const heading =
    phase === "before"
      ? "Hackathon starts in"
      : phase === "live"
        ? "Submissions close in"
        : "The hackathon has ended";

  const badge = phase === "live" ? "bg-green" : "bg-transparent";

  return (
    <div
      className="fade-in w-full p-5 sm:p-8"
      style={{ "--d": "0.5s" } as React.CSSProperties}
    >
      <div className="mb-5 flex flex-col items-center gap-2">
        <span
          className={` px-2 py-1 text-xs font-bold uppercase text-white ${badge}`}
        >
          {phase === "live" ? "● Live" : phase === "before" ? "Upcoming..." : "Closed"}
        </span>
        <h2 className="text-lg font-black text-white sm:text-2xl">{heading}</h2>
      </div>

      {phase === "ended" ? (
        <p className="text-xl font-bold text-white">Thanks to everyone who took part.</p>
      ) : (
        <div
          className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
          role="timer"
          aria-live="off"
          suppressHydrationWarning
        >
          <Unit value={d} label="Days" plain="text-white"/>
          <Unit value={h} label="Hours" plain="text-white"/>
          <Unit value={m} label="Mins" plain="text-blue-soft" hideOnMobile />
          <Unit value={s} label="Secs" accent hideOnMobile />
        </div>
      )}

      <p className="mt-8 text-sm font-bold tracking-wider text-white/90 sm:text-lg">
        12 Dec 2026 &rarr; 12 Jan 2027 &middot; West Africa Time
      </p>
    </div>
  );
}
