"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";

type MusicPlayerContextValue = {
  isPlaying: boolean;
  toggle: () => void;
};

const MusicPlayerContext = createContext<MusicPlayerContextValue | null>(null);

export function MusicPlayerProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.15;

    const markPlaying = () => setIsPlaying(true);
    const markPaused = () => setIsPlaying(false);

    audio.addEventListener("play", markPlaying);
    audio.addEventListener("pause", markPaused);
    return () => {
      audio.removeEventListener("play", markPlaying);
      audio.removeEventListener("pause", markPaused);
    };
  }, []);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      void audio.play().catch(() => setIsPlaying(false));
      return;
    }

    audio.pause();
  }, []);

  const value = useMemo(() => ({ isPlaying, toggle }), [isPlaying, toggle]);

  return (
    <MusicPlayerContext.Provider value={value}>
      <audio ref={audioRef} src="/audio/gymnopedie-no-1.mp3" loop preload="none" />
      {children}
    </MusicPlayerContext.Provider>
  );
}

export function MusicToggle({ className = "" }: { className?: string }) {
  const context = useContext(MusicPlayerContext);
  if (!context) throw new Error("MusicToggle must be rendered within MusicPlayerProvider.");

  const { isPlaying, toggle } = context;
  const action = isPlaying ? "Pause" : "Play";

  return (
    <button
      type="button"
      className={`music-toggle ${isPlaying ? "music-toggle--playing" : ""} ${className}`.trim()}
      onClick={toggle}
      aria-label={`${action} background music: Gymnopédie No. 1`}
      aria-pressed={isPlaying}
      title={`${action} Gymnopédie No. 1`}
    >
      <span aria-hidden="true">♪</span>
      <span className="sr-only">{action} background music</span>
    </button>
  );
}
