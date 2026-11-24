import type { Transition } from "motion/react";

export const easeExpo = [0.22, 1, 0.36, 1] as const;
export const easeInOut = [0.65, 0, 0.35, 1] as const;
export const softSpring = {
  type: "spring",
  stiffness: 260,
  damping: 28,
  mass: 0.8,
} as const;
export const cursorSpring = { stiffness: 500, damping: 40 };
export const dialogSpring = {
  type: "spring",
  stiffness: 300,
  damping: 32,
  visualDuration: 0.45,
} as const;
export const fade: Transition = { duration: 0.2 };
export const timings = {
  logo: 0.6,
  heroWordStart: 0.15,
  heroWordStep: 0.055,
  heroWord: 0.9,
  highlightStart: 1,
  highlight: 0.7,
  heroIconGap: 0.1,
  heroIcon: 0.5,
  heroContentStart: 0.7,
  heroContentStep: 0.1,
  heroContent: 0.7,
  headerAction: 0.9,
  sparkleSpin: 14,
  sparklePulse: 3,
  flowerSpin: 18,
  iconHover: 0.6,
  reveal: 0.8,
  revealStep: 0.09,
  sectionLabel: 0.5,
  card: 0.9,
  cursor: 0.2,
  marquee: 40,
  portraitInterval: 6,
  overlay: 0.25,
  dialogContent: 0.2,
  dialogStep: 0.06,
  lenis: 1.1,
} as const;
