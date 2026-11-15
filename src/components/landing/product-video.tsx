"use client";

import { useState } from "react";
import { Play } from "lucide-react";

const VIDEO_ID = "Ns5WLxYbWKg";

/**
 * Video About-the-Product. Muestra el fotograma hasta que el visitante pulsa
 * reproducir; recién entonces carga el reproductor de YouTube (sin cookies).
 */
export function ProductVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-[0_40px_120px_-20px_rgba(236,72,153,0.35)] ring-1 ring-white/10">
      {playing ? (
        <iframe
          className="absolute inset-0 size-full"
          src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
          title="Talki · About the Product"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 size-full cursor-pointer"
          aria-label="Reproducir el video de Talki"
        >
          {/* El fotograma ya está optimizado (1280 px, ~66 KB); next/image no aporta aquí. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/about-the-product.jpg"
            alt="Talki Live Coach durante una defensa de tesis, con transcripción en vivo y consejo del coach"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 size-full object-cover transition duration-500 group-hover:scale-[1.02] group-hover:brightness-90"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <span className="absolute left-1/2 top-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 via-pink-500 to-orange-500 text-white shadow-2xl transition duration-300 group-hover:scale-110 sm:size-24">
            <Play className="ml-1 size-8 fill-white sm:size-10" />
          </span>
          <span className="absolute bottom-4 left-5 text-sm font-medium text-white/90 sm:bottom-6 sm:left-7 sm:text-base">
            Talki en 71 segundos
          </span>
        </button>
      )}
    </div>
  );
}
