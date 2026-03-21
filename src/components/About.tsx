"use client";

import { AnimateIn } from "./AnimateIn";

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <AnimateIn>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-3 text-center">
            Who We Are
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-center text-cream mb-14">
            THE SHOP
          </h2>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
          <AnimateIn>
            {/* Placeholder for shop interior photo */}
            <div className="aspect-[4/3] rounded-xl gold-border overflow-hidden bg-[#111] flex items-center justify-center">
              <div className="text-center p-4">
                <svg
                  className="w-10 h-10 mx-auto mb-3 text-muted/30"
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
                  Shop Interior
                </span>
              </div>
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
              <div className="pt-2">
                <div className="inline-flex items-center gap-3 gold-border rounded-lg px-5 py-3">
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
