"use client";

import { AnimateIn } from "./AnimateIn";

export default function AmbientImage() {
  return (
    <AnimateIn>
      <div className="relative w-full h-48 md:h-72 overflow-hidden">
        <img
          src="/images/OtherStoreImageAssets/AestheticPicture.jpg"
          alt="Interior decor at Signature Cuts 413"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, #050505 0%, transparent 30%, transparent 70%, #050505 100%)",
          }}
        />
      </div>
    </AnimateIn>
  );
}
