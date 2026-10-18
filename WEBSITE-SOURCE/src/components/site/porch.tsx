"use client";

import * as React from "react";
import { Wrench, Layers, Zap } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { PhonePlate, ClosingPlate, MicroFooter } from "@/components/site/door-parts";

const SMS = "sms:+14105754192";

const TICKER = [
  "PLUMBERS",
  "HVAC CREWS",
  "ELECTRICIANS",
  "ROOFERS",
  "HANDYMEN",
  "REALTORS",
  "LISTING AGENTS",
  "PODCASTERS",
  "SMALL SHOPS",
];

const LANES = [
  {
    icon: Wrench,
    title: "WEBSITES FOR TRADES",
    body: "Flat fee. Built before you pay. You watch it scroll on your phone, then decide. You own it outright — no monthly fees, no hostage-taking.",
    tag: "$500–800 · FLAT",
  },
  {
    icon: Layers,
    title: "CONTENT PACKS FOR AGENTS",
    body: "One long video a month becomes thirty days of ready-to-post material. Captions, clips, article draft, show notes. You approve it. That's your whole job.",
    tag: "$297–497 / MO",
  },
  {
    icon: Zap,
    title: "BACK-OFFICE AUTOMATION",
    body: "Missed calls texted back in ten seconds. Reviews answered within the hour. Invoices chased politely. Flat prices, you own it outright.",
    tag: "FROM $300 · FLAT",
  },
];

const STATS = [
  { value: "1", label: "HUMAN ANSWERS" },
  { value: "0", label: "MONTHLY FEES ON WEBSITES" },
  { value: "48H", label: "TYPICAL TIME TO LIVE" },
  { value: "100%", label: "YOURS TO KEEP" },
];

/**
 * THE PORCH v2 — "The Night Garage".
 * Still zero links out, one conversion action, a human answers.
 * Now it also shows what the shop builds, so it earns the call.
 */
export function Porch() {
  return (
    <div className="relative min-h-dvh overflow-x-clip bg-ink font-body text-cream">
      {/* Ambient background — the page breathes */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
      >
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_75%_60%_at_50%_35%,black_25%,transparent_78%)]" />
        <div className="animate-orb absolute -top-28 left-1/2 size-[34rem] -translate-x-[72%] rounded-full bg-hivis/15 blur-[130px]" />
        <div className="animate-orb-slow absolute -top-16 left-1/2 size-[30rem] translate-x-[18%] rounded-full bg-sparkamber/10 blur-[130px]" />
        <div className="animate-orb absolute bottom-[10%] left-1/2 size-[26rem] -translate-x-1/2 rounded-full bg-sparkrose/10 blur-[140px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-hivis/60 to-transparent" />
      </div>

      <main className="relative z-10 flex min-h-dvh flex-col">
        {/* ============ HERO ============ */}
        <section className="flex flex-1 flex-col items-center justify-center px-4 pb-20 pt-16">
          {/* Badge */}
          <Reveal>
            <p className="mono-plate inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-cream/70 backdrop-blur">
              BALTIMORE, MD · ONE-MAN SHOP
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-cream/40" />
              <span className="relative flex items-center gap-1.5">
                <span className="relative flex size-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-hivis opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-hivis" />
                </span>
                ACCEPTING WORK
              </span>
            </p>
          </Reveal>

          {/* The name */}
          <Reveal delay={80}>
            <h1 className="display-hero mt-8 text-center text-[clamp(3.8rem,16vw,10rem)]">
              <span className="text-cream">MIKE </span>
              <span className="text-spark">BUILDS.</span>
            </h1>
          </Reveal>

          {/* Subline */}
          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-xl text-center text-cream/75 md:text-lg">
              Websites for trades. Content packs for agents. Quiet
              back-office automation. One number, one human, zero runaround.
            </p>
          </Reveal>

          {/* The one tap target */}
          <Reveal delay={240}>
            <div className="mt-10 w-full max-w-md">
              <PhonePlate />
              <a
                href={SMS}
                className="glass glass-hover mono-plate mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-full px-6 py-3 font-semibold text-cream"
              >
                OR TEXT — A HUMAN ANSWERS
              </a>
            </div>
          </Reveal>
        </section>

        {/* ============ TICKER ============ */}
        <section
          aria-hidden="true"
          className="relative border-y border-white/10 bg-white/[0.02]"
        >
          <div className="overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
            <div className="marquee-track">
              {[...TICKER, ...TICKER].map((trade, i) => (
                <span
                  key={`${trade}-${i}`}
                  className="mono-plate flex items-center gap-6 pr-6 text-cream/50"
                >
                  {trade}
                  <span className="text-hivis">·</span>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ============ WHAT I BUILD ============ */}
        <section className="mx-auto w-full max-w-[1100px] px-4 py-16 md:px-6 md:py-24">
          <Reveal>
            <h2 className="display-line spark-under text-[clamp(1.6rem,5vw,2.4rem)] text-cream">
              What I build.
            </h2>
          </Reveal>
          <Reveal delay={70}>
            <p className="mt-6 max-w-xl text-cream/75">
              Three lanes. One number for all of them. Text me which one
              you&apos;re in, and the work starts today.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-3 md:gap-6">
            {LANES.map((lane, i) => (
              <Reveal key={lane.title} delay={i * 90}>
                <article className="glass glass-hover flex h-full flex-col rounded-2xl p-6">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl border border-hivis/30 bg-hivis/10">
                    <lane.icon
                      className="size-5 text-hivis"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </span>
                  <h3 className="mono-plate mt-5 font-semibold text-cream">
                    {lane.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-cream/70">
                    {lane.body}
                  </p>
                  <p className="mono-plate mt-5 border-t border-white/10 pt-4 text-sparkamber">
                    {lane.tag}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ============ STATS ============ */}
        <section className="mx-auto w-full max-w-[1100px] px-4 pb-16 md:px-6 md:pb-24">
          <dl className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 70}>
                <div className="glass glass-hover rounded-2xl p-5 text-left">
                  <dd className="display-line text-ember text-[clamp(2rem,7vw,3rem)]">
                    {stat.value}
                  </dd>
                  <dt className="mono-plate mt-2 text-cream/60">{stat.label}</dt>
                </div>
              </Reveal>
            ))}
          </dl>
        </section>

        {/* ============ MANIFESTO ============ */}
        <section className="mx-auto w-full max-w-[1100px] px-4 pb-20 pt-4 md:px-6 md:pb-28">
          <Reveal>
            <p className="display-hero text-center text-[clamp(2rem,7vw,4rem)]">
              <span className="text-cream">THE WORK IS THE </span>
              <span className="text-spark">PROOF.</span>
            </p>
          </Reveal>
          <Reveal delay={70}>
            <p className="mx-auto mt-6 max-w-2xl text-center text-cream/75">
              No contracts with fine print. No design committee. You text me,
              I build, you watch it work, then you decide. If it&apos;s not
              right, you owe nothing. Baltimore born and built.
            </p>
          </Reveal>
        </section>
      </main>

      <div className="relative z-10">
        <ClosingPlate label="ONE NUMBER. ONE HUMAN. CALL OR TEXT." />
        <MicroFooter />
      </div>
    </div>
  );
}
