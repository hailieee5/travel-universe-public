import { motion } from "framer-motion";
import Image from "next/image";
import { motionTokens } from "@/lib/motion";

type Props = { reduceMotion: boolean; isLeaving: boolean };

export function GlobeDecorations({ reduceMotion, isLeaving }: Props) {
  return (
    <motion.div
      className="universe-globe-decorations"
      aria-hidden="true"
      initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.97 }}
      animate={isLeaving ? { opacity: 0.25 } : reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, rotate: [-0.16, 0.16, -0.16] }}
      transition={reduceMotion ? { duration: motionTokens.duration.reduced, ease: motionTokens.easing.standard } : { opacity: { duration: motionTokens.duration.slow, ease: motionTokens.easing.standard }, scale: { duration: motionTokens.duration.slow, ease: motionTokens.easing.standard }, rotate: { duration: 18, repeat: Infinity, ease: "easeInOut" } }}
    >
      <Image src="/illustrations/travel-earth-ring-v1.png" alt="" fill priority sizes="(min-width: 1200px) 60vw, 760px" />
    </motion.div>
  );
}
