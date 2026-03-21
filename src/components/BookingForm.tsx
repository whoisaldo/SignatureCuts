"use client";

import { useState, useMemo, useCallback } from "react";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import { services } from "@/config/services";
import { hours, getTimeSlots } from "@/config/hours";
import { siteConfig } from "@/config/siteConfig";
import { composeMessage, getWhatsAppURL, getSMSURL } from "@/lib/booking";
import { AnimateIn } from "./AnimateIn";

interface FormErrors {
  name?: string;
  service?: string;
  date?: string;
  time?: string;
}

export default function BookingForm() {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [showActions, setShowActions] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const timeSlots = useMemo(() => {
    if (!date) return [];
    const dayIndex = new Date(date + "T12:00:00").getDay();
    return getTimeSlots(dayIndex);
  }, [date]);

  const closedDay = useMemo(() => {
    if (!date) return false;
    const dayIndex = new Date(date + "T12:00:00").getDay();
    const day = hours.find((h) => h.dayIndex === dayIndex);
    return !day || day.open === null;
  }, [date]);

  const validate = useCallback((): boolean => {
    const newErrors: FormErrors = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!service) newErrors.service = "Select a service";
    if (!date) newErrors.date = "Select a date";
    else if (date < today) newErrors.date = "Date cannot be in the past";
    if (!time && !closedDay) newErrors.time = "Select a time";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [name, service, date, time, today, closedDay]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setShowActions(true);
  };

  const message = useMemo(() => {
    return composeMessage({ name, service, date, time, notes });
  }, [name, service, date, time, notes]);

  const whatsappUrl = getWhatsAppURL(siteConfig.phone, message);
  const smsUrl = getSMSURL(siteConfig.phone, message);

  const resetForm = () => {
    setName("");
    setService("");
    setDate("");
    setTime("");
    setNotes("");
    setErrors({});
    setShowActions(false);
  };

  return (
    <section id="booking" className="section-padding max-w-2xl mx-auto">
      <AnimateIn>
        <p className="font-body text-[11px] tracking-[0.35em] uppercase text-quartz/70 mb-3 text-center">
          Reserve Your Spot
        </p>
        <h2 className="font-display text-5xl md:text-7xl text-center text-cream mb-4">
          BOOK NOW
        </h2>
        <p className="font-body text-sm text-muted text-center mb-12">
          Walk-ins always welcome — or book ahead to secure your time.
        </p>
      </AnimateIn>

      <AnimateIn>
        <form
          onSubmit={handleSubmit}
          noValidate
          className="quartz-border rounded-2xl p-6 md:p-10 bg-surface/50 space-y-5"
        >
          <div>
            <label
              htmlFor="booking-name"
              className="block font-body text-xs text-muted tracking-wider uppercase mb-2"
            >
              Your Name
            </label>
            <input
              id="booking-name"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name) setErrors((p) => ({ ...p, name: undefined }));
              }}
              placeholder="John Doe"
              className={`input-field ${errors.name ? "!border-red-500/50" : ""}`}
              required
            />
            {errors.name && (
              <p className="text-red-400 text-xs mt-1 font-body">{errors.name}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="booking-service"
              className="block font-body text-xs text-muted tracking-wider uppercase mb-2"
            >
              Service
            </label>
            <select
              id="booking-service"
              value={service}
              onChange={(e) => {
                setService(e.target.value);
                if (errors.service)
                  setErrors((p) => ({ ...p, service: undefined }));
              }}
              className={`input-field appearance-none ${errors.service ? "!border-red-500/50" : ""} ${!service ? "text-muted/50" : ""}`}
              required
            >
              <option value="">Select a service</option>
              {services.map((s) => (
                <option key={s.name} value={s.name}>
                  {s.name} — ${s.price}
                  {s.prefix ? "+" : ""}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="text-red-400 text-xs mt-1 font-body">
                {errors.service}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="booking-date"
              className="block font-body text-xs text-muted tracking-wider uppercase mb-2"
            >
              Preferred Date
            </label>
            <input
              id="booking-date"
              type="date"
              value={date}
              min={today}
              onChange={(e) => {
                setDate(e.target.value);
                setTime("");
                if (errors.date) setErrors((p) => ({ ...p, date: undefined }));
              }}
              className={`input-field ${errors.date ? "!border-red-500/50" : ""} ${!date ? "text-muted/50" : ""}`}
              required
            />
            {errors.date && (
              <p className="text-red-400 text-xs mt-1 font-body">{errors.date}</p>
            )}
            {closedDay && date && (
              <p className="text-quartz/80 text-xs mt-1 font-body">
                We&apos;re closed on this day. Please select another date.
              </p>
            )}
          </div>

          {date && !closedDay && timeSlots.length > 0 && (
            <div>
              <label className="block font-body text-xs text-muted tracking-wider uppercase mb-3">
                Preferred Time
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => {
                      setTime(slot);
                      if (errors.time)
                        setErrors((p) => ({ ...p, time: undefined }));
                    }}
                    className={`py-2.5 px-2 rounded-xl font-body text-xs transition-all duration-200 border ${
                      time === slot
                        ? "border-quartz bg-quartz/10 text-quartz"
                        : "border-white/10 text-muted hover:border-white/20 hover:text-cream"
                    }`}
                    aria-pressed={time === slot}
                  >
                    {slot}
                  </button>
                ))}
              </div>
              {errors.time && (
                <p className="text-red-400 text-xs mt-1 font-body">
                  {errors.time}
                </p>
              )}
            </div>
          )}

          <div>
            <label
              htmlFor="booking-notes"
              className="block font-body text-xs text-muted tracking-wider uppercase mb-2"
            >
              Notes{" "}
              <span className="text-muted/40 normal-case tracking-normal">
                (optional)
              </span>
            </label>
            <textarea
              id="booking-notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Any special requests..."
              rows={3}
              className="input-field resize-none"
            />
          </div>

          <LazyMotion features={domAnimation}>
            <AnimatePresence mode="wait">
              {!showActions ? (
                <m.button
                  key="submit"
                  type="submit"
                  className="btn-quartz w-full text-base py-4 mt-2"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  Confirm Booking
                </m.button>
              ) : (
                <m.div
                  key="actions"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-3 mt-2"
                >
                  <p className="font-body text-sm text-cream text-center mb-4">
                    How would you like to send your booking request?
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full py-4 rounded-xl font-body font-semibold text-sm text-white transition-all duration-300 hover:opacity-90 active:scale-[0.98]"
                    style={{ backgroundColor: "#25D366" }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Send via WhatsApp
                  </a>
                  <a
                    href={smsUrl}
                    className="flex items-center justify-center gap-3 w-full py-4 rounded-xl font-body font-semibold text-sm border border-white/20 text-cream transition-all duration-300 hover:border-white/30 active:scale-[0.98]"
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
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    Send via Text Message
                  </a>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="w-full py-2 font-body text-xs text-muted hover:text-cream transition-colors"
                  >
                    Start Over
                  </button>
                </m.div>
              )}
            </AnimatePresence>
          </LazyMotion>
        </form>
      </AnimateIn>
    </section>
  );
}
