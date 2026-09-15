"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Place, TravelPhoto } from "@/lib/travel-types";
import { motionTokens } from "@/lib/motion";
import { PolaroidFan } from "./PolaroidFan";

type Props = {
  place: Place | null;
  photos: TravelPhoto[];
  isViewerOpen: boolean;
  onClose: () => void;
  onPhotoOpen: (index: number, previewUrl: string) => void;
  reduceMotion: boolean;
};

export function MemoryOverlay({ place, photos, isViewerOpen, onClose, onPhotoOpen, reduceMotion }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!place || isViewerOpen) return;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const dialog = dialogRef.current;
    dialog?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab" || !dialog) return;
      const focusable = Array.from(dialog.querySelectorAll<HTMLElement>("button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"));
      if (!focusable.length) return;
      const first = focusable[0]; const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => { document.removeEventListener("keydown", onKeyDown); previousFocus?.focus(); };
  }, [isViewerOpen, onClose, place]);

  return <AnimatePresence>{place && (
    <motion.div className="memory-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduceMotion ? motionTokens.duration.reduced : motionTokens.duration.normal, ease: motionTokens.easing.standard }} onMouseDown={onClose}>
      <motion.section ref={dialogRef} className="memory-overlay__panel" role="dialog" aria-modal="true" aria-hidden={isViewerOpen} aria-label={`${place.displayName ?? place.name} memories`} tabIndex={-1}
        initial={{ opacity: 0, y: reduceMotion ? 0 : 18, scale: reduceMotion ? 1 : 0.985 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: reduceMotion ? 0 : 14, scale: reduceMotion ? 1 : 0.985 }} transition={{ duration: reduceMotion ? motionTokens.duration.reduced : motionTokens.duration.normal, ease: motionTokens.easing.standard }} onMouseDown={(event) => event.stopPropagation()}>
        <header className="memory-overlay__header"><div><p>Memory collection</p><h2>{place.displayName ?? place.name}</h2><span>{photos.length} photos</span></div><button type="button" className="icon-button" onClick={onClose} aria-label="Close place memories">×</button></header>
        <PolaroidFan placeName={place.displayName ?? place.name} photos={photos} onPhotoOpen={onPhotoOpen} reduceMotion={reduceMotion} />
      </motion.section>
    </motion.div>
  )}</AnimatePresence>;
}
