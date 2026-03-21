"use client";

import { services } from "@/config/services";
import { AnimateIn, AnimateItem } from "./AnimateIn";

export default function Services() {
  return (
    <section id="services" className="section-padding max-w-6xl mx-auto">
      <AnimateIn>
        <p className="font-body text-[11px] tracking-[0.35em] uppercase text-quartz/70 mb-3 text-center">
          What We Offer
        </p>
        <h2 className="font-display text-5xl md:text-7xl text-center text-cream mb-16">
          SERVICES &amp; PRICING
        </h2>
      </AnimateIn>

      <AnimateIn stagger className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
        {services.map((service) => (
          <AnimateItem key={service.name}>
            <div className="quartz-border-hover rounded-2xl p-5 md:p-7 bg-surface/50 hover:bg-surface-raised/80 transition-all duration-300 group h-full flex flex-col">
              <h3 className="font-body font-semibold text-cream text-sm md:text-base mb-2 group-hover:text-quartz transition-colors duration-300">
                {service.name}
              </h3>
              <p className="font-body text-muted text-xs md:text-sm mb-5 flex-grow leading-relaxed">
                {service.description}
              </p>
              <p className="font-display text-2xl md:text-3xl text-quartz">
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
