import { motion } from "framer-motion";

type Props = { reduceMotion: boolean };

export function Traveler({ reduceMotion }: Props) {
  return (
    <motion.div className="universe-traveler" aria-label="A traveling girl in a cream beret" role="img" animate={reduceMotion ? undefined : { x: [0, 8, 0], y: [0, -3, 0], rotate: [0, 0.7, 0] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}>
      <span className="universe-traveler__art" />
    </motion.div>
  );
}
