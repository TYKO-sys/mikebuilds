"use client";

import * as React from "react";

/**
 * /realtor signature: "One becomes thirty."
 * One wide episode tile fans out into a grid of ~30 post tiles.
 * Content is ALWAYS in the DOM and ALWAYS visible without JS —
 * same contract as Reveal: animation is enhancement, never a gate.
 * The stagger arms client-side only when the bundle landed fast
 * (< 800ms after navigation start). Late bundle, no JS, or
 * reduced-motion: the grid stays painted and complete.
 */

const TILES: { label: string; sub: string; hot?: boolean }[] = [
  { label: "POST 01", sub: "listing teaser" },
  { label: "POST 02", sub: "market stat" },
  { label: "CLIP 00:04", sub: "front door reveal" },
  { label: "QUOTE CARD", sub: "client line" },
  { label: "POST 03", sub: "open house" },
  { label: "CLIP 00:12", sub: "kitchen walk" },
  { label: "POST 04", sub: "price drop note" },
  { label: "CAPTION SET", sub: "7 captions" },
  { label: "POST 05", sub: "neighborhood bit" },
  { label: "CLIP 00:31", sub: "backyard pan" },
  { label: "QUOTE CARD", sub: "inspector line" },
  { label: "POST 06", sub: "school district" },
  { label: "POST 07", sub: "commute math" },
  { label: "CLIP 00:47", sub: "primary suite" },
  { label: "POST 08", sub: "closing cost explainer" },
  { label: "ARTICLE §", sub: "600–1,000 words", hot: true },
  { label: "POST 09", sub: "FAQ Friday" },
  { label: "CLIP 01:03", sub: "garage tour" },
  { label: "POST 10", sub: "rate watch" },
  { label: "QUOTE CARD", sub: "appraiser line" },
  { label: "POST 11", sub: "staging tip" },
  { label: "CLIP 01:22", sub: "rooftop view" },
  { label: "POST 12", sub: "buyer checklist" },
  { label: "SHOW NOTES", sub: "audio cut", hot: true },
  { label: "POST 13", sub: "referral ask" },
  { label: "QUOTE CARD", sub: "lender line" },
  { label: "CLIP 01:44", sub: "block walk" },
  { label: "POST 14", sub: "sold banner" },
  { label: "POST 15", sub: "next listing tease" },
  { label: "+ MORE", sub: "calendar filled" },
];

export function FanOut() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [armed, setArmed] = React.useState(false);
  const [fanned, setFanned] = React.useState(false);

  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Late bundle: leave the painted content alone (Reveal's contract).
    if (performance.now() > 800) return;
    setArmed(true);
  }, []);

  React.useEffect(() => {
    if (!armed) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setFanned(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [armed]);

  return (
    <div ref={ref} aria-label="One episode becomes about thirty pieces of ready-to-post content">
      {/* The one */}
      <div
        className={`transition-all duration-300 ${
          fanned ? "opacity-90" : "opacity-100"
        }`}
      >
        <div className="glass relative flex h-44 min-h-44 flex-col justify-end overflow-hidden rounded-2xl p-6 md:h-52">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute -right-10 -top-10 size-40 rounded-full bg-hivis/20 blur-[70px]" />
          </div>
          <p className="mono-plate relative text-cream/50">THE ONE — EPISODE, 2 HRS</p>
          <p className="display-line relative mt-2 text-[clamp(1.6rem,5vw,2.4rem)] text-cream">
            One video. Raw footage.
          </p>
          <span
            aria-hidden="true"
            className="animate-ping absolute right-6 top-6 size-3 rounded-full bg-hivis/60"
          />
        </div>
      </div>

      {/* The spark arrow */}
      <div className="flex items-center gap-4 py-4 md:py-6" aria-hidden="true">
        <span className="mono-plate shrink-0 text-sparkamber">
          ONE BECOMES THIRTY
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-hivis/40 to-transparent" />
        <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-sparkamber" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 4v14m0 0 5-5m-5 5-5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* The thirty */}
      <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5 md:gap-4">
        {TILES.map((tile, i) => (
          <li
            key={`${tile.label}-${i}`}
            className={`fan-tile flex min-h-24 flex-col justify-between rounded-xl border p-4 md:min-h-28 ${
              tile.hot
                ? "border-hivis/50 bg-hivis/[0.08]"
                : "border-white/10 bg-white/[0.03]"
            } ${
              armed && !fanned
                ? "opacity-0"
                : ""
            }`}
            style={
              armed && fanned
                ? { animation: `fan-in 320ms var(--ease-out-expo) ${i * 20}ms both` }
                : undefined
            }
          >
            <span
              className={`mono-plate text-[0.625rem] ${
                tile.hot ? "text-sparkamber" : "text-cream/80"
              }`}
            >
              {tile.label}
            </span>
            <span
              className={`text-[0.72rem] leading-tight md:text-[0.78rem] ${
                tile.hot ? "text-cream/80" : "text-cream/55"
              }`}
            >
              {tile.sub}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
