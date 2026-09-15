"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { TravelPhoto } from "@/lib/travel-types";
import { motionTokens } from "@/lib/motion";
import { preloadViewerPhoto } from "@/lib/photo-loading";

type Props = { photo: TravelPhoto; placeName: string; index: number; total: number; cardSize: number; rotation: number; offsetX: number; offsetY: number; revealDelay: number; isOverflowCard: boolean; onOpen: (previewUrl: string) => void; reduceMotion: boolean };

export function PolaroidCard({ photo, placeName, index, total, cardSize, rotation, offsetX, offsetY, revealDelay, isOverflowCard, onOpen, reduceMotion }: Props) {
  return (
    <motion.button
      type="button" className="polaroid-card" aria-label={`Open photo ${index + 1} of ${total} for ${placeName}${photo.dateRange ? `, ${photo.dateRange}` : ""}`} onClick={(event) => onOpen(event.currentTarget.querySelector("img")?.currentSrc ?? "")}
      onMouseEnter={() => preloadViewerPhoto(photo.url)} onFocus={() => preloadViewerPhoto(photo.url)}
      initial={{ opacity: 0, x: 0, y: reduceMotion ? offsetY : 32, rotate: reduceMotion ? rotation : 0 }} animate={{ opacity: 1, x: offsetX, y: offsetY, rotate: rotation }} exit={{ opacity: 0, x: 0, y: reduceMotion ? offsetY : 24, rotate: reduceMotion ? rotation : 0 }}
      whileHover={reduceMotion ? undefined : { y: offsetY - 24, scale: 1.03, zIndex: 200 }} whileFocus={reduceMotion ? undefined : { y: offsetY - 18, scale: 1.03, zIndex: 200 }}
      transition={{ duration: reduceMotion ? motionTokens.duration.reduced : 0.42, ease: motionTokens.easing.standard, delay: revealDelay }} style={{ zIndex: 100 - Math.round(offsetY) }}
    >
      <span className="polaroid-card__image"><Image src={photo.url} alt={`${placeName}, photo ${index + 1}`} fill sizes={`${cardSize}px`} quality={65} loading={index < 3 ? "eager" : "lazy"} decoding="async" /></span>
      {photo.dateRange && <span className="polaroid-card__date">{photo.dateRange}</span>}
      {isOverflowCard && <span className="polaroid-card__more">+{total - 7}</span>}
    </motion.button>
  );
}
