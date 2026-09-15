import type { Transition } from "framer-motion";

/** Shared, editorial motion vocabulary for the travel experience. */
export const motionTokens = {
  duration: {
    fast: 0.18,
    normal: 0.32,
    slow: 0.6,
    page: 0.9,
    reduced: 0.16,
    reducedRoute: 0.18,
  },
  easing: {
    standard: [0.22, 1, 0.36, 1],
    enter: [0.16, 1, 0.3, 1],
    exit: [0.32, 0, 0.2, 1],
  },
} as const;

export function fadeTransition(reduceMotion: boolean, duration = motionTokens.duration.normal): Transition {
  return {
    duration: reduceMotion ? motionTokens.duration.reduced : duration,
    ease: motionTokens.easing.standard,
  };
}
