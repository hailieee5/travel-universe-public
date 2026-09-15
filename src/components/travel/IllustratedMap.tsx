import Image from "next/image";
import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import type { City, Place } from "@/lib/travel-types";
import { motionTokens } from "@/lib/motion";
import { PlaceSticker } from "./PlaceSticker";
import { MusicToggle } from "./MusicPlayer";

type Props = { city: City; onSelect: (place: Place) => void; isOverlayOpen: boolean; isLeaving: boolean; onBack: () => void; reduceMotion: boolean };

export function IllustratedMap({ city, onSelect, isOverlayOpen, isLeaving, onBack, reduceMotion }: Props) {
  return (
    <div className="illustrated-map__scroll">
      <motion.section className="illustrated-map" style={{ aspectRatio: String(city.mapAspectRatio), "--map-aspect-ratio": city.mapAspectRatio } as CSSProperties} aria-label={`${city.displayName} illustrated map`} initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.025 }} animate={isLeaving ? { opacity: 0, scale: reduceMotion ? 1 : 0.985 } : isOverlayOpen ? { opacity: 0.72, filter: reduceMotion ? "blur(0px)" : "blur(2px)" } : { opacity: 1, scale: 1, filter: "blur(0px)" }} transition={{ duration: reduceMotion ? motionTokens.duration.reducedRoute : isLeaving ? 0.42 : motionTokens.duration.slow, ease: isLeaving ? motionTokens.easing.exit : motionTokens.easing.enter }}>
        <Image src={city.mapAsset} alt={`${city.displayName} illustrated travel map`} fill priority sizes="(max-width: 1600px) calc(100vw - 96px), 1560px" />
        <button type="button" className="map-back-button" onClick={onBack} disabled={isLeaving} aria-label="Back to city selection"><span className="sr-only">Back</span></button>
        <MusicToggle className="map-music-button" />
        <div className="illustrated-map__hotspots" aria-label="Places with photos">
          {city.places.map((place, index) => <PlaceSticker key={place.id} place={place} index={index} onSelect={onSelect} reduceMotion={reduceMotion} />)}
        </div>
      </motion.section>
    </div>
  );
}
