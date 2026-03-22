"use client";

import { useEffect, useMemo, useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import { getDirectionsUrl } from "@/lib/directions";

export default function MobileBottomBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  const directionsUrl = useMemo(
    () =>
      getDirectionsUrl(
        siteConfig.fullAddress,
        typeof navigator === "undefined" ? "" : navigator.userAgent,
      ),
    [],
  );

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0"
      }`}
      role="navigation"
      aria-label="Quick actions"
    >
      <div className="glass border-t border-white/5 px-4 py-3 pb-safe">
        <div className="flex items-center gap-3 max-w-lg mx-auto">
          <button
            onClick={scrollToBooking}
            className="flex-1 btn-quartz py-3 text-sm"
            aria-label="Book an appointment"
          >
            Book Now
          </button>

          <a
            href={`tel:${siteConfig.phone}`}
            className="flex items-center justify-center w-12 h-12 rounded-xl border border-white/10 text-cream hover:text-quartz hover:border-quartz/30 transition-all duration-300"
            aria-label={`Call ${siteConfig.phoneDisplay}`}
          >
            <svg
              className="w-5 h-5"
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
          </a>

          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-xl border border-white/10 text-cream hover:text-quartz hover:border-quartz/30 transition-all duration-300"
            aria-label="Get directions"
          >
            <svg
              className="w-5 h-5"
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
          </a>
        </div>
      </div>
    </div>
  );
}
