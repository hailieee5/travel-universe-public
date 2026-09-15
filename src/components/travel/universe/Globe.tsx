import { motion } from "framer-motion";
import Image from "next/image";
import type { City } from "@/lib/travel-types";
import { motionTokens } from "@/lib/motion";

type Props = { reduceMotion: boolean; selectedCity: City | null };

export function Globe({ reduceMotion, selectedCity }: Props) {
  const isKyoto = selectedCity?.slug === "kyoto";
  const travelTarget = selectedCity && !reduceMotion
    ? { scale: 1.16, x: isKyoto ? -42 : 38, y: isKyoto ? 28 : -30, rotate: isKyoto ? -1.6 : 1.4 }
    : { scale: 1, x: 0, y: 0, rotate: 0 };

  return (
    <motion.div
      className="universe-globe"
      aria-hidden="true"
      animate={travelTarget}
      transition={{ duration: reduceMotion ? motionTokens.duration.reducedRoute : motionTokens.duration.slow, ease: motionTokens.easing.exit }}
    >
      <motion.div className="universe-globe__breath" animate={reduceMotion ? undefined : { y: [0, -4, 0] }} transition={{ duration: 7.6, repeat: Infinity, ease: "easeInOut" }}>
        <span className="universe-globe__glow" />
        <Image src="/illustrations/watercolor-earth-v1.png" alt="" fill priority sizes="(min-width: 1200px) 49vw, 620px" />
      </motion.div>
    </motion.div>
  );
}
