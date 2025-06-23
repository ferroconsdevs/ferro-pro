// components/VideoBackground.jsx

"use client";

import { useEffect, useRef } from 'react';

import { ReactNode } from 'react';

interface VideoBackgroundProps {
  src: string;
  children?: ReactNode;
}

export default function VideoBackground({ src, children }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(console.error);
    }
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src={src} type="video/mp4" />
        Tu navegador no soporta video HTML5.
      </video>
      
      {/* Overlay opcional para mejor legibilidad del contenido */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      {/* Contenido */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}