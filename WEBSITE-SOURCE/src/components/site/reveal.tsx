"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "p" | "span" | "article";
};

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

const MOTION = {
  div: motion.div,
  section: motion.section,
  li: motion.li,
  p: motion.p,
  span: motion.span,
  article: motion.article,
} as const;

/**
 * Scroll reveal v2 — weighted expo easing via framer-motion.
 *
 * The server HTML ships fully visible. Animation arms client-side
 * only when the bundle landed fast (< 800ms after navigation start)
 * — on slow 4G the visitor is already reading, so the page stays
 * painted and nothing flashes. No JS: static and complete.
 * Reduced motion: never animates. Same contract as v1, more life.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const [armed, setArmed] = React.useState(false);

  React.useEffect(() => {
    if (reduceMotion) return;
    // Late bundle: leave the painted content alone.
    if (performance.now() > 800) return;
    setArmed(true);
  }, [reduceMotion]);

  if (!armed) {
    return <Tag className={className}>{children}</Tag>;
  }

  const M = MOTION[Tag] ?? motion.div;

  return (
    <M
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.55, delay: delay / 1000, ease: EASE }}
    >
      {children}
    </M>
  );
}
