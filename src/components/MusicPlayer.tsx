"use client";

import { useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/amore-senza-fine.mp3"
      />

      <button
        onClick={toggleMusic}
        className="mt-4 rounded-full border border-white/40 bg-white/10 px-8 py-3 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105"
      >
        {playing
          ? "⏸ Metti in pausa"
          : "♫ Ascolta la nostra canzone"}
      </button>
    </>
  );
}