import { motion } from "framer-motion";
import { motionTokens } from "@/lib/motion";

const stars = [
  [7, 14, "small"], [12, 63, "medium"], [17, 30, "tiny"], [22, 84, "small"], [28, 12, "cross"], [35, 71, "tiny"],
  [42, 8, "small"], [50, 23, "tiny"], [57, 78, "medium"], [63, 11, "cross"], [68, 47, "tiny"], [73, 26, "small"],
  [78, 88, "tiny"], [83, 16, "medium"], [88, 59, "cross"], [91, 37, "small"], [94, 75, "tiny"], [5, 43, "cross"],
  [31, 45, "tiny"], [46, 91, "small"], [72, 69, "tiny"], [97, 8, "small"], [9, 78, "small"], [19, 18, "medium"],
  [26, 57, "small"], [39, 32, "cross"], [54, 5, "tiny"], [61, 63, "small"], [75, 5, "medium"], [82, 43, "tiny"],
  [87, 82, "small"], [98, 51, "medium"]
] as const;

type Props = { reduceMotion: boolean; isLeaving: boolean };

export function StarField({ reduceMotion, isLeaving }: Props) {
  return (
    <div className="universe-stars" aria-hidden="true">
      {stars.map(([left, top, size], index) => (
        <motion.span key={`${left}-${top}`} className={`universe-star universe-star--${size}`} style={{ left: `${left}%`, top: `${top}%` }} animate={isLeaving ? { opacity: 0.18 } : reduceMotion ? { opacity: 1 } : { opacity: [0.45, 0.9, 0.55], scale: index % 6 === 0 ? [1, 1.08, 1] : 1 }} transition={isLeaving || reduceMotion ? { duration: reduceMotion ? motionTokens.duration.reduced : motionTokens.duration.slow, ease: motionTokens.easing.exit } : { duration: 3.4 + (index % 4) * 0.75, delay: (index % 7) * 0.37, repeat: Infinity, ease: "easeInOut" }} />
      ))}
    </div>
  );
}
