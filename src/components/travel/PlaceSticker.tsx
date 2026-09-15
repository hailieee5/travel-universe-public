"use client";

import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import type { Place } from "@/lib/travel-types";
import { motionTokens } from "@/lib/motion";

type Props = { place: Place; index: number; onSelect: (place: Place) => void; reduceMotion: boolean };

export function PlaceSticker({ place, index, onSelect, reduceMotion }: Props) {
  if (!place.mapVisible || place.mapX === null || place.mapY === null) return null;
  const label = place.displayName ?? place.name;
  const style = {
    left: `${place.mapX}%`, top: `${place.mapY}%`,
    "--sticker-scale": place.stickerScale ?? 1,
    "--sticker-offset-x": `${place.stickerOffsetX ?? 0}px`,
    "--sticker-offset-y": `${place.stickerOffsetY ?? 0}px`
  } as CSSProperties;

  return (
    <div className="place-sticker-anchor" style={style}>
      <motion.button
        type="button" className="place-sticker"
        data-sticker-source={place.stickerAsset ?? undefined}
        data-testid={`place-sticker-${place.slug}`}
        aria-label={`Open ${label}, ${place.photoCount} photos`}
        onClick={() => onSelect(place)}
        initial={{ opacity: 0, y: reduceMotion ? 0 : 4 }} animate={{ opacity: 1, y: 0 }}
        whileHover={reduceMotion ? undefined : { scale: 1.035, y: -2 }} whileFocus={reduceMotion ? undefined : { scale: 1.035, y: -2 }}
        transition={{ duration: reduceMotion ? motionTokens.duration.reduced : motionTokens.duration.fast, delay: reduceMotion ? 0 : 0.3 + index * 0.05, ease: motionTokens.easing.standard }}
      >
        <span className="place-sticker__hit-area" aria-hidden="true" />
        <span className="place-sticker__label"><strong>{label}</strong><span>{place.photoCount} photos <svg className="place-sticker__camera" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 5.25h2l.85-1.5h5.3l.85 1.5h2A1.5 1.5 0 0 1 15 6.75v5.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.25v-5.5a1.5 1.5 0 0 1 1.5-1.5Zm5.5 1.5A2.25 2.25 0 1 0 8 11.25 2.25 2.25 0 0 0 8 6.75Z" /></svg></span></span>
      </motion.button>
    </div>
  );
}
