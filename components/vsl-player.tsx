'use client';

import React, { useState, useEffect } from 'react';
import { VolumeX } from 'lucide-react';

export function VSLPlayer({ url }: { url: string }) {
  const [isMounted, setIsMounted] = useState(false);
  const [hasUnmuted, setHasUnmuted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Extract video ID from URL
  const getVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getVideoId(url);

  const handleUnmute = () => {
    setHasUnmuted(true);
  };

  if (!isMounted || !videoId) {
    return <div className="w-full max-w-sm mx-auto aspect-[9/16] bg-black rounded-3xl animate-pulse"></div>;
  }

  // When muted, we autoplay with no controls.
  // When unmuted, we autoplay with sound and controls.
  const iframeSrc = hasUnmuted 
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=0&rel=0&showinfo=0&playsinline=1`
    : `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&rel=0&showinfo=0&loop=1&playlist=${videoId}&playsinline=1`;

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <div className="relative w-full aspect-[9/16] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black group">
        <div className="absolute top-0 left-1/2 w-[316%] h-full -translate-x-1/2">
          <iframe
            src={iframeSrc}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
        
        {!hasUnmuted && (
          <div 
            className="absolute inset-0 z-10 bg-black/20 flex items-center justify-center cursor-pointer"
            onClick={handleUnmute}
          >
            <button 
              className="flex items-center justify-center gap-3 bg-[#E7AA1B] text-[#021526] px-6 py-4 rounded-full font-bold text-sm sm:text-lg shadow-[0_0_30px_rgba(231,170,27,0.8)] animate-pulse hover:scale-105 transition-transform"
            >
              <VolumeX className="w-5 h-5 sm:w-6 sm:h-6" />
              CLIQUE PARA ATIVAR O SOM
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
