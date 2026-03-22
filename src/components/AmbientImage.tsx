"use client";

import { AnimateIn } from "./AnimateIn";

export default function AmbientImage() {
  return (
    <AnimateIn>
      <div className="relative w-full min-h-[18rem] md:min-h-[28rem] overflow-hidden bg-surface-raised rounded-2xl">
        <img
          src="/images/OtherStoreImageAssets/AestheticPicture.jpg"
          alt="Interior decor at Signature Cuts 413"
          loading="lazy"
          className="w-full h-full object-contain object-center"
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
