"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";

export default function Hero() {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden px-5"
    >
      <div
        className="absolute left-6 md:left-12 top-0 bottom-0 w-[1px] opacity-10"
        style={{
          background:
            "repeating-linear-gradient(180deg, #D4C5B0 0px, #D4C5B0 8px, transparent 8px, transparent 24px)",
          backgroundSize: "1px 32px",
          animation: "poleStripe 4s linear infinite",
        }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 35%, rgba(212,197,176,0.04) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <LazyMotion features={domAnimation}>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="font-body text-[11px] md:text-xs tracking-[0.35em] uppercase text-quartz/70 mb-6 md:mb-8">
              Premium Barbershop
            </p>
          </m.div>

          <m.h1
            className="font-display text-[clamp(4rem,15vw,12rem)] leading-[0.85] tracking-tight text-cream mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            SIGNATURE
            <br />
            <span className="text-gradient-quartz">CUTS</span>
          </m.h1>

          <m.p
            className="font-body text-sm md:text-base text-muted tracking-wider mb-10 md:mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            Walk-ins Welcome&ensp;&middot;&ensp;Chicopee, MA
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <button
              onClick={scrollToBooking}
              className="btn-quartz text-base px-10 py-4"
              aria-label="Book an appointment"
            >
              Book Now
            </button>
          </m.div>
        </div>
      </LazyMotion>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="font-body text-[10px] tracking-[0.2em] uppercase text-muted">
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-quartz/40 to-transparent" />
      </div>
    </section>
  );
}
