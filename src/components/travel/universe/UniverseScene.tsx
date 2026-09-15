import { motion } from "framer-motion";
import type { City } from "@/lib/travel-types";
import { Cat } from "./Cat";
import { CityMarker } from "./CityMarker";
import { Globe } from "./Globe";
import { GlobeDecorations } from "./GlobeDecorations";
import { Orbit } from "./Orbit";
import { StarField } from "./StarField";
import { Traveler } from "./Traveler";
import { TravelTransition } from "./TravelTransition";
import { motionTokens } from "@/lib/motion";
import { MusicToggle } from "../MusicPlayer";

type Props = { cities: City[]; leavingCity: City | null; onCitySelect: (city: City) => void; onTravelComplete: (city: City) => void; reduceMotion: boolean };

export function UniverseScene({ cities, leavingCity, onCitySelect, onTravelComplete, reduceMotion }: Props) {
  return (
    <main className={`universe-home${leavingCity ? " universe-home--leaving" : ""}`}>
      <StarField reduceMotion={reduceMotion} isLeaving={Boolean(leavingCity)} />
      <p className="universe-home__brand">my travel universe <span className="universe-home__star" aria-hidden="true">✦</span><MusicToggle className="universe-home__music" /></p>
      <motion.section className="universe-scene" aria-label="Travel universe" animate={leavingCity ? { opacity: 0 } : { opacity: 1 }} transition={{ duration: reduceMotion ? motionTokens.duration.reducedRoute : motionTokens.duration.slow, delay: reduceMotion ? 0 : 0.42, ease: motionTokens.easing.exit }}>
        <Orbit /><GlobeDecorations reduceMotion={reduceMotion} isLeaving={Boolean(leavingCity)} /><Globe reduceMotion={reduceMotion} selectedCity={leavingCity} />
        <div className="universe-scene__travelers"><Traveler reduceMotion={reduceMotion} /><Cat reduceMotion={reduceMotion} /></div>
        {cities.map((city) => <CityMarker key={city.id} city={city} isLeaving={Boolean(leavingCity)} isSelected={leavingCity?.id === city.id} onSelect={onCitySelect} reduceMotion={reduceMotion} />)}
      </motion.section>
      <TravelTransition city={leavingCity} reduceMotion={reduceMotion} onComplete={onTravelComplete} />
    </main>
  );
}
