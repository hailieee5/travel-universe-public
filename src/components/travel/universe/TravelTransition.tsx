import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { City } from "@/lib/travel-types";
import { motionTokens } from "@/lib/motion";

type Props = { city: City | null; reduceMotion: boolean; onComplete: (city: City) => void };

export function TravelTransition({ city, reduceMotion, onComplete }: Props) {
  const routedCity = useRef<string | null>(null);

  useEffect(() => {
    if (!city || routedCity.current === city.slug) return;
    routedCity.current = city.slug;
    const timer = window.setTimeout(() => onComplete(city), (reduceMotion ? motionTokens.duration.reducedRoute : motionTokens.duration.page) * 1000);
    return () => window.clearTimeout(timer);
  }, [city, onComplete, reduceMotion]);

  return <AnimatePresence>{city && <motion.div className="travel-transition" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduceMotion ? motionTokens.duration.reducedRoute : motionTokens.duration.slow, delay: reduceMotion ? 0 : 0.3, ease: motionTokens.easing.exit }} />}</AnimatePresence>;
}
