import type { Metadata } from "next";
import { Reveal } from "@/components/site/reveal";
import { StickyBar } from "@/components/site/sticky-bar";
import {
  DoorHeader,
  SectionHeading,
  PhonePlate,
  ClosingPlate,
  MicroFooter,
  SpecList,
} from "@/components/site/door-parts";
import { DemoPhone } from "@/components/site/demo-phone";

export const metadata: Metadata = {
  title: "Websites for Trades — Flat Fee, Built First",
  description:
    "Your website is already built. I build it, send you a 60-second video of it on a phone, and you pay only if you like it. $500–800 flat. Baltimore. 410-575-4192.",
  openGraph: {
    title: "Your website is already built. — Mike Builds",
    description:
      "Flat fee. Built before payment. You own it outright. Call or text 410-575-4192.",
  },
};

/**
 * THE PLUMBER DOOR — Charm City Sites.
 * One page, one pitch. No automation mentions. Ever.
 */
export default function PlumberDoor() {
  return (
    <div className="relative flex min-h-dvh flex-col bg-ink font-body text-cream">
      <DoorHeader plate="MIKE BUILDS · WEBSITES FOR TRADES" />
      <StickyBar />

      {/* Ambient per-door wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="animate-orb absolute -top-32 left-1/2 size-[32rem] -translate-x-[75%] rounded-full bg-hivis/10 blur-[130px]" />
        <div className="animate-orb-slow absolute right-[-8rem] top-1/3 size-[24rem] rounded-full bg-sparkamber/10 blur-[130px]" />
      </div>

      <main className="relative z-10 flex-1">
        {/* HERO */}
        <section className="mx-auto max-w-[1100px] px-4 pb-16 pt-16 md:px-6 md:pb-24 md:pt-28">
          <div className="max-w-3xl">
            <Reveal>
              <h1 className="display-hero text-[clamp(2.4rem,7vw,4.5rem)]">
                <span className="text-cream">Your website is </span>
                <span className="text-spark">already built.</span>
              </h1>
            </Reveal>
            <Reveal delay={70}>
              <p className="mt-6 max-w-xl text-cream/75 md:text-lg">
                I build it first. Then I send you a 60-second video of it
                scrolling on a phone. You pay only if you like it. Flat price.
                You own it outright. No monthly fees.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-10 max-w-sm">
                <PhonePlate />
              </div>
            </Reveal>
          </div>
        </section>

        {/* PROOF — the demo phone */}
        <section className="relative overflow-x-clip border-t border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-[1100px] px-4 py-16 md:px-6 md:py-24">
            <Reveal>
              <SectionHeading>The proof, scrolling.</SectionHeading>
            </Reveal>
            <Reveal delay={70} className="mt-10">
              <DemoPhone />
            </Reveal>
          </div>
        </section>

        {/* WHAT'S IN IT */}
        <section className="border-t border-white/10">
          <div className="mx-auto max-w-[1100px] px-4 py-16 md:px-6 md:py-24">
            <Reveal>
              <SectionHeading>What&apos;s in it.</SectionHeading>
            </Reveal>
            <Reveal delay={70} className="mt-8">
              <SpecList
                items={[
                  "MOBILE-FIRST LAYOUT",
                  "TAP-TO-CALL BUTTON",
                  "SERVICES LIST, PLAIN WORDS",
                  "SEARCH-READY DETAILS",
                  "YOUR NUMBER WHERE THUMBS CAN REACH IT",
                ]}
              />
            </Reveal>
          </div>
        </section>

        {/* PRICE LADDER — ascending steps */}
        <section className="border-t border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-[1100px] px-4 py-16 md:px-6 md:py-24">
            <Reveal>
              <SectionHeading>The price ladder.</SectionHeading>
            </Reveal>

            <div className="mt-10 flex flex-col-reverse gap-4 md:flex-row md:items-end md:gap-6">
              {/* Third step — tallest */}
              <Reveal delay={140} className="flex-1">
                <div className="glass glass-hover rounded-2xl p-6 pt-16 text-center md:pt-24">
                  <p className="mono-plate text-cream/60">THIRD</p>
                  <p className="display-line mt-2 text-[clamp(2rem,7vw,3rem)] text-cream">
                    $800
                  </p>
                </div>
              </Reveal>
              {/* Second step */}
              <Reveal delay={70} className="flex-1">
                <div className="glass glass-hover rounded-2xl p-6 pt-12 text-center md:pt-16">
                  <p className="mono-plate text-cream/60">SECOND</p>
                  <p className="display-line mt-2 text-[clamp(2rem,7vw,3rem)] text-cream">
                    $650
                  </p>
                </div>
              </Reveal>
              {/* First step — carries the spark */}
              <Reveal className="flex-1">
                <div className="glass glass-hover glow-breathe rounded-2xl border-hivis/50 bg-hivis/[0.06] p-6 pt-8 text-center md:pt-8">
                  <p className="mono-plate text-sparkamber">FIRST CLIENT</p>
                  <p className="display-line text-ember mt-2 text-[clamp(2rem,7vw,3rem)]">
                    $500
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={210}>
              <p className="mono-plate mt-8 max-w-xl leading-relaxed text-cream/70">
                The price climbs on purpose. The first one sells at a friend
                price — no track record yet. By the third there are live
                examples, and $800 still reads as a bargain next to a $2,000
                agency quote.
              </p>
            </Reveal>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="border-t border-white/10">
          <div className="mx-auto max-w-[1100px] px-4 py-16 md:px-6 md:py-24">
            <Reveal>
              <SectionHeading>How it works.</SectionHeading>
            </Reveal>
            <ol className="mt-10 space-y-0 border-t border-white/10">
              {[
                "Text me your business name. That's the whole form.",
                "Within a day you get a 60-second video of your site already scrolling on a phone.",
                "You like it, you pay. You don't, you owe nothing.",
              ].map((step, i) => (
                <Reveal
                  key={step}
                  delay={i * 70}
                  as="li"
                  className="flex gap-4 border-b border-white/10 py-6"
                >
                  <span className="display-line text-ember shrink-0 text-3xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="pt-1 text-cream/75">{step}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>
      </main>

      <ClosingPlate />
      <MicroFooter />
    </div>
  );
}
