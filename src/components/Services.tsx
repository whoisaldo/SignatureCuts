"use client";

import { services } from "@/config/services";
import { AnimateIn, AnimateItem } from "./AnimateIn";

export default function Services() {
  return (
    <section id="services" className="section-padding max-w-6xl mx-auto">
      <AnimateIn>
        <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-3 text-center">
          What We Offer
        </p>
        <h2 className="font-display text-5xl md:text-7xl text-center text-cream mb-14">
          SERVICES & PRICING
        </h2>
      </AnimateIn>

      <AnimateIn stagger className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {services.map((service) => (
          <AnimateItem key={service.name}>
            <div className="gold-border-hover rounded-xl p-5 md:p-7 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 group h-full flex flex-col">
              <h3 className="font-body font-semibold text-cream text-sm md:text-base mb-2 group-hover:text-gold transition-colors duration-300">
                {service.name}
              </h3>
              <p className="font-body text-muted text-xs md:text-sm mb-4 flex-grow">
                {service.description}
              </p>
              <p className="font-display text-2xl md:text-3xl text-gold">
                {service.prefix && (
                  <span className="text-muted text-sm font-body mr-1">
                    {service.prefix}
                  </span>
                )}
                ${service.price}
              </p>
            </div>
          </AnimateItem>
        ))}
      </AnimateIn>
    </section>
  );
}
