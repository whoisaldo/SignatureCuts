"use client";

import { useEffect, useState } from "react";
import { hours, type DayHours } from "@/config/hours";
import { siteConfig } from "@/config/siteConfig";
import { AnimateIn, AnimateItem } from "./AnimateIn";

export default function Hours() {
  const [todayIndex, setTodayIndex] = useState<number>(-1);

  useEffect(() => {
    setTodayIndex(new Date().getDay());
  }, []);

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(siteConfig.fullAddress)}`;
  const mapsEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(siteConfig.fullAddress)}&zoom=15`;

  return (
    <section id="hours" className="section-padding max-w-6xl mx-auto">
      <AnimateIn>
        <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-3 text-center">
          Visit Us
        </p>
        <h2 className="font-display text-5xl md:text-7xl text-center text-cream mb-14">
          HOURS & LOCATION
        </h2>
      </AnimateIn>

      <div className="grid md:grid-cols-2 gap-8 md:gap-14">
        {/* Hours */}
        <AnimateIn>
          <div className="gold-border rounded-xl p-6 md:p-8 bg-white/[0.02]">
            <h3 className="font-display text-2xl text-cream mb-6">HOURS</h3>
            <AnimateIn stagger>
              <div className="space-y-0">
                {hours.map((day: DayHours) => {
                  const isToday = day.dayIndex === todayIndex;
                  return (
                    <AnimateItem key={day.day}>
                      <div
                        className={`flex justify-between items-center py-3 border-b border-white/5 last:border-0 ${
                          isToday ? "text-gold" : "text-cream/70"
                        }`}
                      >
                        <span className="font-body text-sm font-medium flex items-center gap-2">
                          {day.day}
                          {isToday && (
                            <span className="text-[10px] bg-gold/20 text-gold px-2 py-0.5 rounded-full uppercase tracking-wider">
                              Today
                            </span>
                          )}
                        </span>
                        <span className="font-body text-sm">
                          {day.open
                            ? `${day.open} – ${day.close}`
                            : "Closed"}
                        </span>
                      </div>
                    </AnimateItem>
                  );
                })}
              </div>
            </AnimateIn>
          </div>
        </AnimateIn>

        {/* Location */}
        <AnimateIn delay={0.1}>
          <div className="space-y-6">
            <div className="gold-border rounded-xl overflow-hidden aspect-[4/3] bg-[#111]">
              <iframe
                title="Signature Cuts 413 Location"
                src={mapsEmbedUrl}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="space-y-4">
              <div>
                <p className="font-body text-cream text-sm font-medium">
                  {siteConfig.address.street}
                </p>
                <p className="font-body text-muted text-sm">
                  {siteConfig.address.city}, {siteConfig.address.state}{" "}
                  {siteConfig.address.zip}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold text-sm px-5 py-2.5"
                  aria-label="Get directions to Signature Cuts 413"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Get Directions
                </a>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="btn-outline text-sm px-5 py-2.5"
                  aria-label={`Call ${siteConfig.phoneDisplay}`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  {siteConfig.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
