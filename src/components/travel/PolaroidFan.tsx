"use client";

import { AnimatePresence } from "framer-motion";
import type { CSSProperties } from "react";
import type { TravelPhoto } from "@/lib/travel-types";
import { PolaroidCard } from "./PolaroidCard";

type Props = { placeName: string; photos: TravelPhoto[]; onPhotoOpen: (index: number, previewUrl: string) => void; reduceMotion: boolean };
const MAX_FAN_PHOTOS = 7;

function getFanLayout(count: number) {
  const presets = [
    { arc: 0, spacing: 0, edgeDrop: 0, cardSize: 360 },
    { arc: 16, spacing: 175, edgeDrop: 10, cardSize: 330 },
    { arc: 24, spacing: 165, edgeDrop: 14, cardSize: 310 },
    { arc: 30, spacing: 145, edgeDrop: 17, cardSize: 290 },
    { arc: 34, spacing: 126, edgeDrop: 20, cardSize: 270 },
    { arc: 39, spacing: 108, edgeDrop: 22, cardSize: 250 },
    { arc: 44, spacing: 96, edgeDrop: 24, cardSize: 230 }
  ];

  return presets[Math.max(0, Math.min(count - 1, MAX_FAN_PHOTOS - 1))];
}

export function PolaroidFan({ placeName, photos, onPhotoOpen, reduceMotion }: Props) {
  const fanPhotos = photos.slice(0, MAX_FAN_PHOTOS);
  const center = (fanPhotos.length - 1) / 2;
  const layout = getFanLayout(fanPhotos.length);
  const rotationStep = fanPhotos.length <= 1 ? 0 : layout.arc / (fanPhotos.length - 1);
  const cardStyle = {
    "--polaroid-size": `${layout.cardSize}px`,
    "--polaroid-half": `${layout.cardSize / 2}px`,
    "--polaroid-gutter": `${Math.round(layout.cardSize * 0.042)}px`,
    "--polaroid-caption": `${Math.round(layout.cardSize * 0.17)}px`
  } as CSSProperties;
  return (
    <div className="polaroid-fan" style={cardStyle} aria-label={`${photos.length} photos from ${placeName}`}>
      <AnimatePresence>
        {fanPhotos.map((photo, index) => {
          const distanceFromCenter = Math.abs(index - center);
          const normalizedDistance = center === 0 ? 0 : distanceFromCenter / center;
          return <PolaroidCard key={photo.url} photo={photo} placeName={placeName} index={index} total={photos.length} cardSize={layout.cardSize} rotation={(index - center) * rotationStep} offsetX={(index - center) * layout.spacing} offsetY={normalizedDistance * layout.edgeDrop} revealDelay={reduceMotion ? 0 : 0.1 + distanceFromCenter * 0.07} isOverflowCard={photos.length > MAX_FAN_PHOTOS && index === fanPhotos.length - 1} onOpen={(previewUrl) => onPhotoOpen(index, previewUrl)} reduceMotion={reduceMotion} />;
        })}
      </AnimatePresence>
    </div>
  );
}
