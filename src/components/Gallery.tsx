"use client";

import { galleryImages } from "@/config/gallery";
import { AnimateIn, AnimateItem } from "./AnimateIn";

const aspectMap = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
} as const;

export default function Gallery() {
  return (
    <section id="gallery" className="section-padding max-w-6xl mx-auto">
      <AnimateIn>
        <p className="font-body text-[11px] tracking-[0.35em] uppercase text-quartz/70 mb-3 text-center">
          Our Work
        </p>
        <h2 className="font-display text-5xl md:text-7xl text-center text-cream mb-16">
          THE CRAFT
        </h2>
      </AnimateIn>

      <AnimateIn
        stagger
        className="columns-2 md:columns-3 gap-3 md:gap-4 space-y-3 md:space-y-4"
      >
        {galleryImages.map((image, i) => (
          <AnimateItem key={i}>
            <div
              className={`${aspectMap[image.aspectRatio]} relative overflow-hidden rounded-2xl group break-inside-avoid`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </AnimateItem>
        ))}
      </AnimateIn>

      <AnimateIn className="text-center mt-12">
        <p className="font-body text-sm text-muted">
          Follow{" "}
          <a
            href="https://instagram.com/signature_cuts413"
            target="_blank"
            rel="noopener noreferrer"
            className="text-quartz hover:text-quartz-light transition-colors"
          >
            @signature_cuts413
          </a>{" "}
          for more
        </p>
      </AnimateIn>
    </section>
  );
}
