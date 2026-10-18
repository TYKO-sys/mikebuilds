const SMS = "sms:+14105754192";

/**
 * Door header v2: sticky glass bar + gradient TEXT MIKE button.
 * No nav. No links between doors. Ever.
 */
export function DoorHeader({ plate }: { plate: string }) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1100px] items-center justify-between gap-4 px-4 py-3 md:px-6">
        <p className="mono-plate text-cream/70">{plate}</p>
        <a
          href={SMS}
          className="group cta-spark mono-plate relative inline-flex min-h-12 items-center justify-center whitespace-nowrap overflow-hidden rounded-full px-5 py-3 text-center font-semibold text-ink md:px-6"
        >
          <span className="shimmer-sweep" aria-hidden="true" />
          TEXT MIKE
        </a>
      </div>
    </header>
  );
}

/**
 * Section heading with the spark underline.
 */
export function SectionHeading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`display-line spark-under text-[clamp(1.6rem,5vw,2.4rem)] text-cream ${className}`}
    >
      {children}
    </h2>
  );
}

/**
 * The big tap-to-call plate used mid-page and at closing.
 * Glass card, breathing glow, ember-gradient number.
 * Whole plate is the tel link. Tall by construction.
 */
export function PhonePlate({
  label = "CALL OR TEXT",
  number = "410-575-4192",
}: {
  label?: string;
  number?: string;
}) {
  return (
    <a
      href="tel:+14105754192"
      aria-label={`Call Mike at ${number}`}
      className="glass glass-hover glow-breathe group block rounded-2xl px-6 py-7 text-center active:translate-y-px"
    >
      <span className="mono-plate block text-cream/60">{label}</span>
      <span className="display-line text-ember mt-2 block text-[clamp(2rem,7vw,3rem)]">
        {number}
      </span>
    </a>
  );
}

/**
 * Closing plate: midnight band, ambient orbs, ember number huge,
 * live "A HUMAN ANSWERS" badge, glass SMS button.
 */
export function ClosingPlate({
  label = "CALL OR TEXT — A HUMAN ANSWERS",
}: {
  label?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink">
      {/* Ambient orbs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="animate-orb absolute -top-24 left-1/2 size-[30rem] -translate-x-[70%] rounded-full bg-hivis/15 blur-[130px]" />
        <div className="animate-orb-slow absolute -bottom-32 left-1/2 size-[26rem] translate-x-[20%] rounded-full bg-sparkrose/10 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1100px] px-4 py-16 text-center md:px-6 md:py-24">
        {/* Live badge */}
        <p className="mono-plate inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-cream/70">
          <span className="relative flex size-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-hivis opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-hivis" />
          </span>
          {label}
        </p>

        <a
          href="tel:+14105754192"
          aria-label="Call Mike at 410-575-4192"
          className="display-hero text-ember mt-6 block text-[clamp(2.75rem,11vw,6rem)] transition-transform duration-200 hover:scale-[1.02] active:scale-[1.01]"
        >
          410-575-4192
        </a>

        <a
          href={SMS}
          className="glass glass-hover mono-plate mt-8 inline-flex min-h-12 items-center rounded-full px-6 py-3 font-semibold text-cream"
        >
          OR TEXT — A HUMAN ANSWERS
        </a>
      </div>
    </section>
  );
}

/**
 * Micro footer for door pages. No links. Ever.
 */
export function MicroFooter() {
  return (
    <footer className="relative z-10 mt-auto border-t border-white/10 bg-ink">
      <div className="mx-auto max-w-[1100px] px-4 pb-24 pt-8 text-center md:px-6 md:pb-10">
        <p className="mono-plate text-cream/60">MIKE BUILDS — BALTIMORE, MD</p>
        <p className="mono-plate mt-2 text-cream/60">
          EST. 2026 · ONE-MAN SHOP · THE WORK IS THE PROOF
        </p>
      </div>
    </footer>
  );
}

/**
 * Spec list: glass spec-plate rows with hairline dividers.
 */
export function SpecList({ items }: { items: string[] }) {
  return (
    <ul className="border-t border-white/10">
      {items.map((item, i) => (
        <li
          key={item}
          className="flex items-baseline gap-4 border-b border-white/10 py-4 transition-colors duration-200 hover:bg-white/[0.03]"
        >
          <span
            className="mono-plate shrink-0 text-sparkamber"
            aria-hidden="true"
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="mono-plate text-cream/80">{item}</span>
        </li>
      ))}
    </ul>
  );
}
