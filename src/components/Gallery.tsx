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
        <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-3 text-center">
          Our Work
        </p>
        <h2 className="font-display text-5xl md:text-7xl text-center text-cream mb-14">
          THE CRAFT
        </h2>
      </AnimateIn>

      <AnimateIn
        stagger
        className="columns-2 md:columns-3 gap-4 space-y-4"
      >
        {galleryImages.map((image, i) => (
          <AnimateItem key={i}>
            <div
              className={`${aspectMap[image.aspectRatio]} relative overflow-hidden rounded-xl gold-border group break-inside-avoid`}
            >
              <div className="absolute inset-0 bg-[#111] flex items-center justify-center">
                <div className="text-center p-4">
                  <svg
                    className="w-8 h-8 mx-auto mb-2 text-muted/30"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.41a2.25 2.25 0 013.182 0l2.909 2.91m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                  <span className="font-body text-xs text-muted/40 tracking-wider uppercase">
                    Add Photo
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/5 transition-colors duration-500" />
            </div>
          </AnimateItem>
        ))}
      </AnimateIn>

      <AnimateIn className="text-center mt-10">
        <p className="font-body text-sm text-muted">
          Follow{" "}
          <a
            href="https://instagram.com/signature_cuts413"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold-light transition-colors"
          >
            @signature_cuts413
          </a>{" "}
          for more
        </p>
      </AnimateIn>
    </section>
  );
}
