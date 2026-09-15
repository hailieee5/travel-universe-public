"use client";

import { useCallback, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { City, PhotoManifest, Place } from "@/lib/travel-types";
import { motionTokens } from "@/lib/motion";
import { useMotionPreference } from "@/lib/use-motion-preference";
import { IllustratedMap } from "./IllustratedMap";
import { MemoryOverlay } from "./MemoryOverlay";
import { PhotoViewer } from "./PhotoViewer";

type Props = { city: City; photoManifest: PhotoManifest };

export function CityMapExperience({ city, photoManifest }: Props) {
  const router = useRouter();
  const reduceMotion = useMotionPreference();
  const backLocked = useRef(false);
  const [activePlace, setActivePlace] = useState<Place | null>(null); const [viewerIndex, setViewerIndex] = useState<number | null>(null); const [viewerPreviewUrl, setViewerPreviewUrl] = useState<string | null>(null); const [isLeaving, setIsLeaving] = useState(false);
  const activePhotos = activePlace ? photoManifest[activePlace.id] ?? [] : [];
  const closeMemory = useCallback(() => { setViewerIndex(null); setViewerPreviewUrl(null); setActivePlace(null); }, []);
  const closeViewer = useCallback(() => { setViewerIndex(null); setViewerPreviewUrl(null); }, []); const changeViewer = useCallback((index: number) => { setViewerIndex(index); setViewerPreviewUrl(null); }, []);
  const openViewer = useCallback((index: number, previewUrl: string) => { setViewerPreviewUrl(previewUrl || null); setViewerIndex(index); }, []);
  const returnToUniverse = useCallback(() => {
    if (backLocked.current) return;
    backLocked.current = true;
    setIsLeaving(true);
    window.setTimeout(() => router.push("/"), (reduceMotion ? motionTokens.duration.reducedRoute : 0.42) * 1000);
  }, [reduceMotion, router]);
  return <main className="city-map-page">
    <IllustratedMap city={city} onSelect={setActivePlace} isOverlayOpen={Boolean(activePlace)} isLeaving={isLeaving} onBack={returnToUniverse} reduceMotion={reduceMotion} />
    <MemoryOverlay place={activePlace} photos={activePhotos} isViewerOpen={viewerIndex !== null} onClose={closeMemory} onPhotoOpen={openViewer} reduceMotion={reduceMotion} />
    <PhotoViewer placeName={activePlace?.displayName ?? activePlace?.name ?? ""} photos={activePhotos} activeIndex={viewerIndex} previewUrl={viewerPreviewUrl} onClose={closeViewer} onChange={changeViewer} reduceMotion={reduceMotion} />
  </main>;
}
