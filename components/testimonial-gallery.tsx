'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles, X } from 'lucide-react';

interface TestimonialItem {
  id: number;
  src: string;
  alt: string;
  title: string;
  desc: string;
  fit: string;
}

interface TestimonialGalleryProps {
  testimonials: TestimonialItem[];
}

export function TestimonialGallery({ testimonials }: TestimonialGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {testimonials.map((dep) => (
          <div
            key={dep.id}
            onClick={() => setSelectedImage(dep.src)}
            className="group cursor-pointer bg-card-dark border border-slate-800 hover:border-secondary/50 rounded-2xl p-3 sm:p-4 shadow-xl hover:shadow-secondary/10 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-slate-950 mb-4 border border-slate-800 flex items-center justify-center">
              <Image
                src={dep.src}
                alt={dep.alt}
                fill
                quality={80}
                loading="lazy"
                className={`${dep.fit} group-hover:scale-105 transition-transform duration-300`}
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 30vw, 360px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
              
              <div className="absolute bottom-3 left-3 right-3 bg-background-dark/90 backdrop-blur-md px-3 py-2 rounded-lg border border-white/10 text-center">
                <span className="text-xs font-semibold text-secondary flex items-center justify-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Clique para expandir
                </span>
              </div>
            </div>

            <div>
              <h3 className="font-sans text-base sm:text-lg font-bold text-white mb-1 group-hover:text-secondary transition-colors">
                {dep.title}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                {dep.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors"
              aria-label="Fechar modal"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative w-full h-[80vh] rounded-2xl overflow-hidden border border-white/20">
              <Image
                src={selectedImage}
                alt="Depoimento expandido"
                fill
                quality={90}
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
