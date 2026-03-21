"use client";

import { AnimateIn } from "./AnimateIn";

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <AnimateIn>
          <p className="font-body text-[11px] tracking-[0.35em] uppercase text-quartz/70 mb-3 text-center">
            Who We Are
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-center text-cream mb-16">
            THE SHOP
          </h2>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
          <AnimateIn>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="/images/Store-images/StoreFront.jpg"
                alt="Signature Cuts 413 storefront"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <div className="space-y-5">
              <p className="font-body text-base md:text-lg text-cream/90 leading-relaxed">
                Signature Cuts 413 isn&apos;t just a barbershop — it&apos;s where
                precision meets personality. Located on Memorial Drive in
                Chicopee, we&apos;ve built a spot where every cut is a craft and
                every client leaves sharper than they walked in.
              </p>
              <p className="font-body text-sm md:text-base text-muted leading-relaxed">
                Whether you need a clean fade, a fresh lineup, or a full
                transformation, we take the time to get it right. No rush, no
                shortcuts. Walk-ins are always welcome — pull up and see the
                difference.
              </p>
              <div className="pt-3">
                <div className="inline-flex items-center gap-3 quartz-border rounded-xl px-5 py-3 bg-surface/50">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-body text-sm text-cream">
                    Walk-ins Welcome
                  </span>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
