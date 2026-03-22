"use client";

import { barbers, type Barber } from "@/config/barbers";
import { AnimateIn, AnimateItem } from "./AnimateIn";

function BarberCard({ barber, index }: { barber: Barber; index: number }) {
  const displayName = barber.alias
    ? barber.alias.replace("Goes by ", "")
    : barber.name.split(" ")[0];

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <article
      className="relative rounded-2xl overflow-hidden bg-white/[0.03] flex-shrink-0 snap-center w-[85vw] max-w-[380px] md:w-auto md:max-w-none"
      style={{ border: "0.5px solid rgba(212, 197, 176, 0.15)" }}
      aria-label={
        barber.isPlaceholder
          ? "New barber coming soon"
          : `${barber.name} — Barber at Signature Cuts 413`
      }
    >
      {/* Photo area */}
      <div className="relative aspect-[3/4]">
        {barber.image ? (
          <>
            <img
              src={barber.image}
              alt={
                barber.alias
                  ? `${barber.name} "${displayName}" — Barber at Signature Cuts 413`
                  : `${barber.name} — Barber at Signature Cuts 413`
              }
              loading={index === 0 ? "eager" : "lazy"}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none"
              style={{
                background: "linear-gradient(to top, #050505, transparent)",
              }}
            />
          </>
        ) : (
          <div className="absolute inset-0 bg-surface-raised flex flex-col items-center justify-center gap-3">
            <svg
              className="w-10 h-10 text-muted/20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            <span className="font-body text-[11px] text-muted/30 tracking-[0.15em] uppercase">
              Barber Photo
            </span>
          </div>
        )}
      </div>

      {/* Info area */}
      <div className="p-6 pb-7">
        {!barber.isPlaceholder ? (
          <>
            <h3 className="font-display text-2xl text-cream mb-1">
              {barber.name}
            </h3>
            {barber.alias && (
              <p className="font-body text-sm text-quartz mb-5 flex items-center gap-2">
                <span className="w-3 h-[1px] bg-quartz/50 inline-block" />
                {barber.alias}
              </p>
            )}

            <div className="space-y-3 mb-5">
              <DetailRow
                icon={<CheckIcon />}
                label="Licensed"
                value={barber.licensed}
              />
              {barber.experience && (
                <DetailRow
                  icon={<ClockIcon />}
                  label="Experience"
                  value={barber.experience}
                />
              )}
              {barber.background && (
                <DetailRow
                  icon={<PersonIcon />}
                  label="Background"
                  value={barber.background}
                />
              )}
            </div>

            {barber.specialties.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {barber.specialties.map((s) => (
                  <span
                    key={s}
                    className="font-body text-[11px] text-quartz tracking-wide px-3 py-1 rounded-full"
                    style={{
                      border: "0.5px solid rgba(212, 197, 176, 0.25)",
                      background: "rgba(212, 197, 176, 0.06)",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            )}

            <button
              onClick={scrollToBooking}
              className="w-full btn-quartz py-3.5 text-sm uppercase tracking-wider"
              aria-label={`Book an appointment with ${barber.name}`}
            >
              Book with {displayName}
            </button>
          </>
        ) : (
          <h3 className="font-display text-xl text-muted/40 text-center">
            {barber.name}
          </h3>
        )}
      </div>

      {/* Coming soon overlay */}
      {barber.isPlaceholder && (
        <div
          className="absolute inset-0 z-10 flex items-center justify-center rounded-2xl"
          style={{
            background: "rgba(5, 5, 5, 0.75)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
          }}
          aria-label="New barber coming soon"
        >
          <span
            className="font-body text-sm font-medium tracking-[0.2em] uppercase text-quartz px-6 py-3 rounded-lg"
            style={{
              border: "0.5px solid rgba(212, 197, 176, 0.25)",
            }}
          >
            Coming Soon
          </span>
        </div>
      )}
    </article>
  );
}

function DetailRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-3">
      <div className="w-4 h-4 mt-0.5 text-quartz/70 flex-shrink-0">{icon}</div>
      <div>
        <p className="font-body text-[10px] text-muted/60 uppercase tracking-[0.15em] mb-0.5">
          {label}
        </p>
        <p className="font-body text-[13px] text-cream/70 leading-relaxed">
          {value}
        </p>
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  );
}

export default function Team() {
  return (
    <section id="team" className="section-padding max-w-6xl mx-auto">
      <AnimateIn>
        <p className="font-body text-[11px] tracking-[0.35em] uppercase text-quartz/70 mb-3 text-center">
          Meet Your Barbers
        </p>
        <h2 className="font-display text-5xl md:text-7xl text-center text-cream mb-16">
          THE TEAM
        </h2>
      </AnimateIn>

      {/* Mobile: horizontal snap scroll / Desktop: grid */}
      <AnimateIn stagger>
        <div
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 md:grid md:grid-cols-3 md:overflow-visible md:pb-0 md:gap-6 team-scroll-container"
          role="region"
          aria-label="Our barbers"
        >
          {barbers.map((barber, i) => (
            <AnimateItem key={barber.id}>
              <BarberCard barber={barber} index={i} />
            </AnimateItem>
          ))}
        </div>
      </AnimateIn>

      {barbers.length > 1 && (
        <p className="font-body text-xs text-muted/40 text-center mt-4 md:hidden">
          Swipe for more &rarr;
        </p>
      )}
    </section>
  );
}
