import { motion } from "framer-motion";
import type { City } from "@/lib/travel-types";
import { motionTokens } from "@/lib/motion";

type Props = { city: City; isLeaving: boolean; isSelected: boolean; onSelect: (city: City) => void; reduceMotion: boolean };

export function CityMarker({ city, isLeaving, isSelected, onSelect, reduceMotion }: Props) {
  const isKyoto = city.slug === "kyoto";
  const country = isKyoto ? "Japan" : "Germany";
  const label = isKyoto ? "Kyoto" : "Munich";

  return (
    <motion.button className={`universe-city-marker universe-city-marker--${city.slug}${isSelected ? " universe-city-marker--selected" : ""}`} type="button" onClick={() => onSelect(city)} disabled={isLeaving} aria-label={`Explore ${label}, ${country}`} initial={{ opacity: 0, y: reduceMotion ? 0 : (isKyoto ? 12 : -12) }} animate={isLeaving ? (isSelected ? { opacity: 1, scale: reduceMotion ? 1 : 1.055 } : { opacity: 0.25, scale: 0.98 }) : { opacity: 1, y: 0, scale: 1 }} transition={{ duration: reduceMotion ? motionTokens.duration.reduced : motionTokens.duration.slow, delay: reduceMotion ? 0 : (isKyoto ? 0.28 : 0.4), ease: motionTokens.easing.standard }} whileHover={isLeaving || reduceMotion ? undefined : { y: isKyoto ? -4 : -3, scale: 1.035 }} whileFocus={isLeaving || reduceMotion ? undefined : { scale: 1.035 }}>
      <span className="universe-city-marker__landmark" aria-hidden="true">{isKyoto ? <Torii /> : <Tower />}</span>
      <span className="universe-city-marker__copy"><span className="universe-city-marker__name">{label}</span><span className="universe-city-marker__country">{country}</span><span className="universe-city-marker__explore">Explore {label} <b aria-hidden="true">↗</b></span></span>
    </motion.button>
  );
}

function Torii() { return <svg viewBox="0 0 46 48" focusable="false"><path d="M4 12h38M8 7h30M13 12v29M33 12v29M8 23h30M7 42h32" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" /></svg>; }
function Tower() { return <svg viewBox="0 0 46 48" focusable="false"><path d="M7 42h32M12 42V21h22v21M9 21h28l-4-7H13l-4 7ZM17 14V6l6-4 6 4v8M16 27h14M19 32h8" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2.2" /></svg>; }
