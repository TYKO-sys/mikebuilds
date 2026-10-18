import type { Metadata } from "next";
import { Reveal } from "@/components/site/reveal";
import { StickyBar } from "@/components/site/sticky-bar";
import {
  DoorHeader,
  SectionHeading,
  PhonePlate,
  ClosingPlate,
  MicroFooter,
} from "@/components/site/door-parts";
import {
  IconDrip,
  IconWrench,
  IconReceipt,
  IconBell,
} from "@/components/site/icons";

export const metadata: Metadata = {
  title: "The Automation Mechanic — Back Office, Handled",
  description:
    "Missed-call texter, review robot, invoice chaser, 24/7 receptionist. Flat prices, you own it outright. Baltimore trades, text Mike: 410-575-4192.",
  openGraph: {
    title: "Your back office runs itself. — Mike Builds",
    description:
      "The quiet software that handles the missed calls, the reviews, the invoices. Text Mike — 410-575-4192. A human answers.",
  },
};

/**
 * THE AUTOMATION DOOR — The Automation Mechanic.
 * COPY IS VERBATIM. Character for character. Do not "improve".
 * Phone number appears: mid-page plate + closing plate + sticky bar.
 */
export default function AutomationDoor() {
  return (
    <div className="relative flex min-h-dvh flex-col bg-ink font-body text-cream">
      <DoorHeader plate="MIKE BUILDS · FOR BALTIMORE TRADES" />
      <StickyBar />

      {/* Ambient per-door wash — cool violet for the machine lane */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="animate-orb absolute -top-32 left-1/2 size-[32rem] -translate-x-[75%] rounded-full bg-hivis/10 blur-[130px]" />
        <div className="animate-orb-slow absolute right-[-8rem] top-1/3 size-[24rem] rounded-full bg-violet-500/10 blur-[130px]" />
      </div>

      <main className="relative z-10 flex-1">
        {/* HERO — VERBATIM */}
        <section className="mx-auto max-w-[1100px] px-4 pb-16 pt-16 md:px-6 md:pb-24 md:pt-28">
          <div className="max-w-3xl">
            <Reveal>
              <p className="mono-plate text-cream/60">FOR BALTIMORE TRADES</p>
            </Reveal>
            <Reveal delay={70}>
              <h1 className="display-hero mt-4 text-[clamp(2.4rem,7vw,4.5rem)]">
                <span className="text-cream">Your back office </span>
                <span className="text-spark">runs itself.</span>
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-xl text-cream/75 md:text-lg">
                You answer calls, fix pipes, and get home before dark. I build
                the quiet software that handles everything else — the missed
                calls, the reviews nobody replies to, the invoices nobody
                chases.
              </p>
            </Reveal>
            <Reveal delay={210}>
              <p className="mono-plate mt-6 text-cream/70">
                One flat price. No monthly fees. You own it outright.
              </p>
            </Reveal>
          </div>
        </section>

        {/* PARTS LIST — VERBATIM */}
        <section className="relative border-t border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-[1100px] px-4 py-16 md:px-6 md:py-24">
            <Reveal>
              <SectionHeading>Pick your leak.</SectionHeading>
            </Reveal>

            <ul className="mt-10 border-t border-white/10">
              {PARTS.map((part, i) => (
                <Reveal
                  key={part.name}
                  delay={i * 70}
                  as="li"
                  className="border-b border-white/10"
                >
                  <div className="flex gap-4 py-6 transition-colors duration-200 hover:bg-white/[0.03] md:gap-6 md:py-8">
                    <part.icon className="mt-1 h-7 w-7 shrink-0 text-hivis" />
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-cream">
                        <span className="font-semibold">{part.name}</span>
                        {part.lead}
                      </p>
                      <p className="mt-2 text-cream/70">{part.rest}</p>
                    </div>
                    <div className="shrink-0 text-right">
                      <p className="mono-plate font-semibold text-sparkamber">
                        {part.price}
                      </p>
                      <p className="mono-plate mt-1 text-cream/60">{part.per}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* HOW IT WORKS — VERBATIM */}
        <section className="border-t border-white/10">
          <div className="mx-auto max-w-[1100px] px-4 py-16 md:px-6 md:py-24">
            <Reveal>
              <SectionHeading>How it works</SectionHeading>
            </Reveal>
            <ol className="mt-10 space-y-0 border-t border-white/10">
              {[
                'Text me what\u2019s bugging you. One sentence is enough. \u201CI miss calls all day\u201D counts.',
                "Within a day you get a 90-second video of it already working, on a fake version of your business. You watch it fix the problem before you\u2019ve paid a dollar.",
                "You like it, I flip it on for real. Most things are live within 48 hours. If it\u2019s not running in 7 days, you don\u2019t pay.",
              ].map((step, i) => (
                <Reveal
                  key={i}
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

        {/* FAQ — VERBATIM, native details */}
        <section className="border-t border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-[1100px] px-4 py-16 md:px-6 md:py-24">
            <Reveal>
              <SectionHeading>Fair questions</SectionHeading>
            </Reveal>

            <div className="mt-10 border-t border-white/10">
              {FAQ.map((item, i) => (
                <Reveal key={item.q} delay={i * 70}>
                  <details className="group border-b border-white/10">
                    <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-6 text-cream [&::-webkit-details-marker]:hidden">
                      <span className="font-medium text-cream md:text-lg">
                        {item.q}
                      </span>
                      <span
                        aria-hidden="true"
                        className="mono-plate shrink-0 text-lg font-semibold text-cream/60 transition-transform duration-200 group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <p className="max-w-2xl pb-6 text-cream/70">{item.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* MID-PAGE PLATE — the number, one thumb-length away */}
        <section className="border-t border-white/10">
          <div className="mx-auto max-w-[1100px] px-4 py-16 md:px-6 md:py-24">
            <Reveal>
              <PhonePlate label="QUESTIONS FIRST?" />
            </Reveal>
          </div>
        </section>
      </main>

      {/* CLOSING PLATE — VERBATIM */}
      <section className="relative overflow-hidden border-t border-white/10 bg-ink">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="animate-orb absolute -top-24 left-1/2 size-[30rem] -translate-x-[70%] rounded-full bg-hivis/15 blur-[130px]" />
          <div className="animate-orb-slow absolute -bottom-32 left-1/2 size-[26rem] translate-x-[20%] rounded-full bg-sparkrose/10 blur-[130px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1100px] px-4 py-16 text-center md:px-6 md:py-24">
          <p className="mono-plate inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-cream/70">
            <span className="relative flex size-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-hivis opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-hivis" />
            </span>
            TEXT MIKE
          </p>
          <a
            href="sms:+14105754192"
            aria-label="Text Mike at 410-575-4192"
            className="display-hero text-ember mt-6 block text-[clamp(2.75rem,11vw,6rem)] transition-transform duration-200 hover:scale-[1.02] active:scale-[1.01]"
          >
            410-575-4192
          </a>
          <p className="mono-plate mt-5 text-cream/60">A HUMAN ANSWERS.</p>
        </div>
      </section>

      <MicroFooter />
    </div>
  );
}

/* ---------- VERBATIM DATA — character for character ---------- */

const PARTS = [
  {
    icon: IconDrip,
    name: "The Missed-Call Texter",
    lead: " — $400 once.",
    rest: "Someone calls, you\u2019re elbow-deep in a job, they hang up and dial the next name on Google. This texts them back in ten seconds and holds the job for you.",
    price: "$400",
    per: "ONCE",
  },
  {
    icon: IconWrench,
    name: "The Review Robot",
    lead: " — $300 once.",
    rest: "Your Google reviews sit there unanswered, and it makes you look closed. This replies to every one, in your voice, within the hour — even at 2 a.m.",
    price: "$300",
    per: "ONCE",
  },
  {
    icon: IconReceipt,
    name: "The Invoice Chaser",
    lead: " — $300\u2013500 once.",
    rest: "The polite robot that reminds customers about unpaid invoices on a schedule, so you never make the awkward money call again.",
    price: "$300\u2013500",
    per: "ONCE",
  },
  {
    icon: IconBell,
    name: "The 24/7 Receptionist",
    lead: " — $297/month.",
    rest: "A friendly voice that answers every call you miss, quotes your service fee, and books the job on your calendar. She never sleeps and never has a bad Monday.",
    price: "$297",
    per: "PER MONTH",
  },
];

const FAQ = [
  {
    q: "Is this AI?",
    a: "Some of it. It\u2019s the boring kind — it follows your rules exactly and doesn\u2019t improvise. You approve the words before a single customer sees them.",
  },
  {
    q: "Will it spam my customers?",
    a: "No. Every message uses your voice, and every message stops the second someone says stop. It\u2019s a polite employee, not a marketer.",
  },
  {
    q: "I already have a website.",
    a: "Great — none of this touches your website. It bolts onto the side of your business, not your site.",
  },
  {
    q: "Why is there no monthly fee?",
    a: "Because you pay me once and it keeps working. That\u2019s the whole point. (The receptionist is the one exception — she\u2019s answering calls around the clock, so she\u2019s on salary.)",
  },
  {
    q: "What if it breaks?",
    a: "Text me. Fixes are free for the first 30 days, and fast after that.",
  },
];
