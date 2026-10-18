"use client";

import * as React from "react";

/**
 * /plumber proof: a phone frame showing an already-built demo site
 * scrolling slowly on its own. Pure HTML/CSS inside the frame —
 * no images, no video. Reduced motion: static, fully readable.
 * The demo screen stays paper-bright on purpose: it demos the
 * sunny, high-contrast customer site inside the dark garage page.
 */
export function DemoPhone() {
  return (
    <figure className="relative mx-auto w-full max-w-[300px]">
      {/* Ambient glow behind the phone */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 size-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-hivis/15 blur-[90px]"
      />

      {/* Phone frame */}
      <div className="glow-breathe relative rounded-[2.2rem] border border-white/15 bg-steel p-2.5">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-[1.05rem] z-20 h-[1.4rem] w-[5.5rem] -translate-x-1/2 rounded-full bg-ink"
        />
        {/* Screen */}
        <div className="relative h-[26rem] overflow-hidden rounded-[1.7rem] bg-bone">
          {/* Status bar strip */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 z-10 flex h-9 items-center justify-between bg-bone/90 px-5 pt-1 backdrop-blur-[2px]"
          >
            <span className="mono-plate text-[0.5rem] text-bodyink/70">
              9:41
            </span>
            <span className="mono-plate text-[0.5rem] text-bodyink/70">
              5G · 100%
            </span>
          </div>

          {/* The demo site itself, on a slow scroll track */}
          <div className="demo-track pt-10">
            <DemoSite />
          </div>
        </div>
      </div>

      <figcaption className="mono-plate relative mt-6 text-center text-cream/70">
        Built before you pay. This one exists right now.
      </figcaption>
    </figure>
  );
}

function DemoSite() {
  return (
    <div aria-hidden="true" className="select-none px-5 pb-6">
      {/* Demo site header */}
      <div className="flex items-center justify-between border-b border-ink/10 pb-3">
        <span className="display-line text-[1.05rem] text-ink">
          Bayview Plumbing
        </span>
        <span className="mono-plate text-[0.5rem] text-steelgray">Baltimore</span>
      </div>

      {/* Demo hero */}
      <div className="pt-6">
        <p className="mono-plate text-[0.5rem] text-burnt">
          LICENSED · INSURED · 24/7
        </p>
        <p className="display-line mt-2 text-[1.7rem] leading-[0.95] text-ink">
          Leaks stop
          <br />
          today.
        </p>
        <p className="mt-2 text-[0.72rem] leading-snug text-bodyink/90">
          Tap below. A plumber answers, not a machine.
        </p>
        <div className="mt-3 inline-flex min-h-9 items-center bg-hivis px-4 py-2">
          <span className="mono-plate text-[0.55rem] font-semibold text-ink">
            CALL NOW — 410-555-0127
          </span>
        </div>
      </div>

      {/* Demo services */}
      <div className="mt-6 border-t border-ink/10 pt-4">
        <p className="mono-plate text-[0.5rem] text-steelgray">WHAT WE FIX</p>
        <ul className="mt-2 space-y-2">
          {[
            "Drain clears — from $120",
            "Water heaters — from $380",
            "Emergency leaks — same day",
            "Pipe repair — flat quotes",
          ].map((s) => (
            <li
              key={s}
              className="flex items-baseline justify-between border-b border-ink/[0.07] pb-2 text-[0.7rem] text-bodyink"
            >
              <span>{s}</span>
              <span aria-hidden="true" className="text-burnt">
                →
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Demo reviews strip */}
      <div className="mt-6 border-t border-ink/10 pt-4">
        <p className="mono-plate text-[0.5rem] text-steelgray">
          GOOGLE REVIEWS
        </p>
        <p className="display-line mt-1 text-[1.3rem] text-ink">4.9 ★★★★★</p>
        <p className="mt-1 text-[0.65rem] leading-snug text-bodyink/80">
          "Answered at 7 a.m. on a Sunday. Fixed before lunch."
        </p>
      </div>

      {/* Demo footer */}
      <div className="mt-6 border-t-2 border-ink/15 bg-paper px-3 py-4">
        <p className="mono-plate text-[0.5rem] text-bodyink/70">
          BAYVIEW PLUMBING CO · SANDTOWN-WINCHESTER
        </p>
        <p className="mono-plate mt-1 text-[0.5rem] text-steelgray">
          A MIKE BUILDS SITE · DEMO
        </p>
      </div>
    </div>
  );
}
