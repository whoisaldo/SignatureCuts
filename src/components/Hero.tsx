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
      {/* Animated accent line — minimal barber pole effect */}
      <div
        className="absolute left-6 md:left-12 top-0 bottom-0 w-[2px] opacity-20"
        style={{
          background:
            "repeating-linear-gradient(180deg, #C9A84C 0px, #C9A84C 10px, transparent 10px, transparent 20px, #F5F5F5 20px, #F5F5F5 30px, transparent 30px, transparent 40px)",
          backgroundSize: "2px 60px",
          animation: "poleStripe 3s linear infinite",
        }}
        aria-hidden="true"
      />

      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(201,168,76,0.06) 0%, transparent 70%)",
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
            <p className="font-body text-xs md:text-sm tracking-[0.3em] uppercase text-gold mb-6 md:mb-8">
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
            <span className="text-gradient-gold">CUTS</span>
          </m.h1>

          <m.p
            className="font-body text-sm md:text-base text-muted tracking-wider mb-10 md:mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            Walk-ins Welcome&ensp;•&ensp;Chicopee, MA
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <button
              onClick={scrollToBooking}
              className="btn-gold text-base px-10 py-4 rounded-lg"
              aria-label="Book an appointment"
            >
              Book Now
            </button>
          </m.div>
        </div>
      </LazyMotion>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-body text-[10px] tracking-[0.2em] uppercase text-muted">
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-gold/60 to-transparent" />
      </div>
    </section>
  );
}
