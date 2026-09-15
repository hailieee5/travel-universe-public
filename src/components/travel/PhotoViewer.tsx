"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { TravelPhoto } from "@/lib/travel-types";
import { motionTokens } from "@/lib/motion";
import { getViewerPhotoUrl, preloadViewerPhoto } from "@/lib/photo-loading";

type Props = { placeName: string; photos: TravelPhoto[]; activeIndex: number | null; previewUrl: string | null; onClose: () => void; onChange: (index: number) => void; reduceMotion: boolean };

export function PhotoViewer({ placeName, photos, activeIndex, previewUrl, onClose, onChange, reduceMotion }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [highResPhotoUrl, setHighResPhotoUrl] = useState<string | null>(null);
  const isOpen = activeIndex !== null && photos[activeIndex] !== undefined;
  const currentPhoto = isOpen && activeIndex !== null ? photos[activeIndex] : null;
  const isHighResReady = currentPhoto?.url === highResPhotoUrl;
  const changePhoto = useCallback((nextIndex: number, nextDirection: 1 | -1) => {
    setDirection(nextDirection);
    onChange(nextIndex);
  }, [onChange]);

  const previousPhoto = useCallback(() => {
    if (activeIndex === null) return;
    changePhoto((activeIndex - 1 + photos.length) % photos.length, -1);
  }, [activeIndex, changePhoto, photos.length]);

  const nextPhoto = useCallback(() => {
    if (activeIndex === null) return;
    changePhoto((activeIndex + 1) % photos.length, 1);
  }, [activeIndex, changePhoto, photos.length]);

  useEffect(() => {
    if (!isOpen || activeIndex === null || !isHighResReady || photos.length < 2) return;
    preloadViewerPhoto(photos[(activeIndex - 1 + photos.length) % photos.length].url);
    preloadViewerPhoto(photos[(activeIndex + 1) % photos.length].url);
  }, [activeIndex, isHighResReady, isOpen, photos]);

  useEffect(() => {
    if (!isOpen || activeIndex === null) return;
    const dialog = dialogRef.current; dialog?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") previousPhoto();
      if (event.key === "ArrowRight") nextPhoto();
      if (event.key !== "Tab" || !dialog) return;
      const focusable = Array.from(dialog.querySelectorAll<HTMLElement>("button:not([disabled]), [href], [tabindex]:not([tabindex='-1'])"));
      if (!focusable.length) return;
      const first = focusable[0]; const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKeyDown); return () => document.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, isOpen, nextPhoto, onClose, previousPhoto]);
  return <AnimatePresence>{isOpen && currentPhoto && activeIndex !== null && (
    <motion.div className="photo-viewer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduceMotion ? motionTokens.duration.reduced : motionTokens.duration.normal, ease: motionTokens.easing.standard }} onMouseDown={onClose}>
      <motion.section ref={dialogRef} className="photo-viewer__panel" role="dialog" aria-modal="true" aria-label={`${placeName} photo viewer`} tabIndex={-1}
        initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: reduceMotion ? 1 : 0.97 }} transition={{ duration: reduceMotion ? motionTokens.duration.reduced : motionTokens.duration.normal, ease: motionTokens.easing.standard }} onMouseDown={(event) => event.stopPropagation()}>
        <button type="button" className="icon-button photo-viewer__close" onClick={onClose} aria-label="Close photo viewer">×</button>
        <button type="button" className="viewer-control viewer-control--previous" onClick={previousPhoto} aria-label="Previous photo">←</button>
        <div className="photo-viewer__image"><AnimatePresence mode="wait" initial={false}><motion.div key={currentPhoto.url} className="photo-viewer__image-motion" initial={{ opacity: 0, x: reduceMotion ? 0 : direction * 14 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: reduceMotion ? 0 : direction * -14 }} transition={{ duration: reduceMotion ? motionTokens.duration.reduced : 0.22, ease: motionTokens.easing.standard }}>
          {previewUrl && !isHighResReady && <Image className="photo-viewer__preview" src={previewUrl} alt="" aria-hidden="true" fill unoptimized sizes="1120px" decoding="async" />}
          <Image className={`photo-viewer__full${isHighResReady ? " photo-viewer__full--ready" : ""}`} src={getViewerPhotoUrl(currentPhoto.url)} alt={`${placeName}, photo ${activeIndex + 1}`} fill unoptimized sizes="1120px" decoding="async" fetchPriority="high" onLoad={() => setHighResPhotoUrl(currentPhoto.url)} />
        </motion.div></AnimatePresence></div>
        <button type="button" className="viewer-control viewer-control--next" onClick={nextPhoto} aria-label="Next photo">→</button>
        <p className="photo-viewer__counter" aria-live="polite">{activeIndex + 1} / {photos.length}</p>
      </motion.section>
    </motion.div>
  )}</AnimatePresence>;
}
