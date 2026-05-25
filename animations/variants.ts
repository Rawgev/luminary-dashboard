import type { Variants, Transition } from "framer-motion";

// ── Spring physics presets ──────────────────────────────────────────
export const springSnappy: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 24,
};

export const springGentle: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 25,
};

export const springBouncy: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 15,
};

export const easeFast: Transition = {
  type: "tween",
  duration: 0.2,
  ease: [0.4, 0, 0.2, 1],
};

// ── Page-load stagger container ────────────────────────────────────
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// ── Individual card reveal ─────────────────────────────────────────
export const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
};

// ── Slide-in from left ─────────────────────────────────────────────
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: springGentle,
  },
};

// ── Sidebar collapse ───────────────────────────────────────────────
export const sidebarVariants: Variants = {
  expanded: {
    opacity: 1,
    x: 0,
    transition: springSnappy,
  },
  collapsed: {
    opacity: 1,
    x: 0,
    transition: springSnappy,
  },
};

// ── Fade in ────────────────────────────────────────────────────────
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// ── Hover scale for cards ──────────────────────────────────────────
export const cardHoverScale = {
  scale: 1.015,
  transition: springSnappy,
};

// ── Progress bar fill ──────────────────────────────────────────────
export const progressVariants: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  show: (progress: number) => ({
    scaleX: progress / 100,
    originX: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 14,
      delay: 0.3,
    },
  }),
};

// ── Text reveal ───────────────────────────────────────────────────
export const textReveal: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
  },
};

// ── Mobile nav ────────────────────────────────────────────────────
export const mobileNavVariants: Variants = {
  hidden: { y: 80, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: springGentle,
  },
};

// ── Tooltip ───────────────────────────────────────────────────────
export const tooltipVariants: Variants = {
  hidden: { opacity: 0, x: -8, scale: 0.9 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: easeFast,
  },
};
