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
import { FanOut } from "@/components/site/fan-out";

export const metadata: Metadata = {
  title: "Content Packs for Agents — One Video, Thirty Posts",
  description:
    "One long video becomes a month of ready-to-post material: captions, clips with timecodes, article draft, quote cards, show notes. $297/mo. 410-575-4192.",
  openGraph: {
    title: "One video a month. Thirty days of posts. — Mike Builds",
    description:
      "Done-for-you content repurposing for real estate agents. Call or text 410-575-4192.",
  },
};

/**
 * THE REALTOR DOOR — AssetForge.
 * One page, one pitch. No plumber mentions. No automation mentions. Ever.
 */
export default function RealtorDoor() {
  return (
    <div className="relative flex min-h-dvh flex-col bg-ink font-body text-cream">
      <DoorHeader plate="MIKE BUILDS · CONTENT FOR AGENTS" />
      <StickyBar />

      {/* Ambient per-door wash — rose for the content lane */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="animate-orb absolute -top-32 left-1/2 size-[32rem] -translate-x-[75%] rounded-full bg-sparkrose/10 blur-[130px]" />
        <div className="animate-orb-slow absolute right-[-8rem] top-1/3 size-[24rem] rounded-full bg-hivis/10 blur-[130px]" />
      </div>

      <main className="relative z-10 flex-1">
        {/* HERO */}
        <section className="mx-auto max-w-[1100px] px-4 pb-16 pt-16 md:px-6 md:pb-24 md:pt-28">
          <div className="max-w-3xl">
            <Reveal>
              <h1 className="display-hero text-[clamp(2.4rem,7vw,4.5rem)] text-cream">
                One video a month.
                <br />
                <span className="text-spark">Thirty days of posts.</span>
              </h1>
            </Reveal>
            <Reveal delay={70}>
              <p className="mt-6 max-w-xl text-cream/75 md:text-lg">
                You hand over one long video — a podcast, a property tour, a
                webinar. I turn it into a month of ready-to-post material. You
                approve it. That&apos;s your whole job.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-10 max-w-sm">
                <PhonePlate />
              </div>
            </Reveal>
          </div>
        </section>

        {/* THE PROBLEM */}
        <section className="relative overflow-hidden border-t border-white/10 bg-white/[0.03]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div className="animate-orb absolute -bottom-24 left-1/2 size-[26rem] -translate-x-1/2 rounded-full bg-sparkrose/10 blur-[130px]" />
          </div>
          <div className="relative z-10 mx-auto max-w-[1100px] px-4 py-16 md:px-6 md:py-24">
            <Reveal>
              <p className="mono-plate text-sparkrose">THE PROBLEM</p>
            </Reveal>
            <Reveal delay={70}>
              <p className="display-line mt-4 text-[clamp(1.6rem,5vw,2.4rem)] text-cream">
                Your best content dies the day you post it.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <p className="display-line mt-4 text-[clamp(1.6rem,5vw,2.4rem)] text-cream/60">
                Pulling it apart by hand takes six to ten hours an episode — so
                it never happens.
              </p>
            </Reveal>
          </div>
        </section>

        {/* WHAT'S IN THE PACK */}
        <section className="border-t border-white/10">
          <div className="mx-auto max-w-[1100px] px-4 py-16 md:px-6 md:py-24">
            <Reveal>
              <SectionHeading>What&apos;s in the pack.</SectionHeading>
            </Reveal>
            <Reveal delay={70} className="mt-8">
              <SpecList
                items={[
                  "ARTICLE DRAFT, 600–1,000 WORDS",
                  "SOCIAL CAPTIONS, READY TO PASTE",
                  "POST TEXT + QUOTE-GRAPHICS TEXT",
                  "CLIP SUGGESTIONS WITH EXACT TIMECODES",
                  "AUDIO SHOW NOTES",
                ]}
              />
            </Reveal>
          </div>
        </section>

        {/* THE FAN-OUT */}
        <section className="border-t border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-[1100px] px-4 py-16 md:px-6 md:py-24">
            <Reveal>
              <SectionHeading>Watch the math.</SectionHeading>
            </Reveal>
            <Reveal delay={70} className="mt-10">
              <FanOut />
            </Reveal>
          </div>
        </section>

        {/* PRICING */}
        <section className="border-t border-white/10">
          <div className="mx-auto max-w-[1100px] px-4 py-16 md:px-6 md:py-24">
            <Reveal>
              <SectionHeading>Pick a pace.</SectionHeading>
            </Reveal>

            <div className="mt-10 grid gap-4 md:grid-cols-2 md:gap-6">
              <Reveal>
                <div className="glass glass-hover glow-breathe rounded-2xl border-hivis/50 bg-hivis/[0.06] p-6 md:p-8">
                  <p className="mono-plate text-sparkamber">STARTER</p>
                  <p className="display-line text-ember mt-4 text-[clamp(2rem,7vw,3rem)]">
                    $297<span className="text-cream/60">/MO</span>
                  </p>
                  <p className="mono-plate mt-4 text-cream/60">
                    TWO EPISODES A MONTH
                  </p>
                </div>
              </Reveal>
              <Reveal delay={70}>
                <div className="glass glass-hover rounded-2xl p-6 md:p-8">
                  <p className="mono-plate text-cream/60">FULL PACE</p>
                  <p className="display-line mt-4 text-[clamp(2rem,7vw,3rem)] text-cream">
                    $497<span className="text-cream/60">/MO</span>
                  </p>
                  <p className="mono-plate mt-4 text-cream/60">
                    FOUR EPISODES A MONTH
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={140}>
              <p className="mono-plate mt-8 max-w-xl leading-relaxed text-cream/70">
                Cancel anytime. The first pack comes with a walkthrough of
                every piece, so you can see exactly what you&apos;re approving.
              </p>
            </Reveal>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="border-t border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-[1100px] px-4 py-16 md:px-6 md:py-24">
            <Reveal>
              <SectionHeading>How it works.</SectionHeading>
            </Reveal>
            <ol className="mt-10 space-y-0 border-t border-white/10">
              {[
                "Send the video. A link is fine.",
                "The pack lands in your inbox, ready to schedule.",
                "You approve or adjust. Revisions are plain-English.",
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
