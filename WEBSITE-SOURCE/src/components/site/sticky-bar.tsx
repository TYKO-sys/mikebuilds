"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

const PHONE_DIGITS = "410-575-4192";
const TEL = "tel:+14105754192";
const SMS = "sms:+14105754192";

/**
 * Sticky mobile action bar v2 — frosted glass, gradient CALL.
 * 64px tall, appears after ~400px of scroll, mobile only.
 * Both buttons carry the digits so the number is always on screen.
 */
export function StickyBar() {
  const [show, setShow] = React.useState(false);
  const reduceMotion = useReducedMotion();

  React.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <motion.div
      initial={reduceMotion ? undefined : { y: "100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="fixed inset-x-0 bottom-0 z-50 md:hidden"
      role="navigation"
      aria-label="Contact Mike"
    >
      <div className="border-t border-white/10 bg-ink/85 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl">
        <div className="grid h-16 grid-cols-2">
          <a
            href={TEL}
            className="group cta-spark relative flex flex-col items-center justify-center overflow-hidden text-ink active:brightness-90"
          >
            <span className="shimmer-sweep" aria-hidden="true" />
            <span className="mono-plate font-semibold text-[0.625rem] text-ink">
              CALL
            </span>
            <span className="mono-plate font-semibold text-[0.8125rem]! leading-tight">
              {PHONE_DIGITS}
            </span>
          </a>
          <a
            href={SMS}
            className="flex flex-col items-center justify-center border-y border-white/15 bg-white/[0.04] text-cream active:bg-white/[0.08]"
          >
            <span className="mono-plate font-semibold text-[0.625rem] text-sparkamber">
              TEXT
            </span>
            <span className="mono-plate font-semibold text-[0.8125rem]! leading-tight">
              {PHONE_DIGITS}
            </span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
