"use client";

const VIEWER_WIDTH = 2048;
const VIEWER_QUALITY = 80;
const preloadedViewerUrls = new Set<string>();

export function getViewerPhotoUrl(photoUrl: string) {
  return `/_next/image?url=${encodeURIComponent(photoUrl)}&w=${VIEWER_WIDTH}&q=${VIEWER_QUALITY}`;
}

export function preloadViewerPhoto(photoUrl: string) {
  const viewerUrl = getViewerPhotoUrl(photoUrl);
  if (preloadedViewerUrls.has(viewerUrl)) return;

  preloadedViewerUrls.add(viewerUrl);
  const image = new Image();
  image.decoding = "async";
  image.src = viewerUrl;
}
