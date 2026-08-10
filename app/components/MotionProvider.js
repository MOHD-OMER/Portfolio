"use client";

import { MotionConfig } from "framer-motion";

/**
 * The `prefers-reduced-motion` block in globals.css only neutralises CSS
 * animations — every Framer Motion animation on this site is driven from JS
 * and sailed straight past it. MotionConfig with `reducedMotion="user"` makes
 * Framer Motion skip transform/layout animations for users who ask for less
 * motion, while still allowing opacity cross-fades.
 */
export default function MotionProvider({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
