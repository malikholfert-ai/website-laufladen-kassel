"use client";

import { Phone, Mail, MapPin, Ticket } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";
import { getTodayIndex } from "@/lib/utils";

const hours = [
  { day: "Montag", short: "Mo", opens: "10:00", closes: "18:00" },
  { day: "Dienstag", short: "Di", opens: "10:00", closes: "18:00" },
  { day: "Mittwoch", short: "Mi", opens: "10:00", closes: "18:00" },
  { day: "Donnerstag", short: "Do", opens: "10:00", closes: "18:00" },
  { day: "Freitag", short: "Fr", opens: "10:00", closes: "19:00" },
  { day: "Samstag", short: "Sa", opens: "10:00", closes: "16:00" },
  { day: "Sonntag", short: "So", opens: null, closes: null },
];

// Wochentag-Index: 0 = So, 1 = Mo ... 6 = Sa → auf hours-Array mappen
// hours[0] = Mo = JS-Index 1
function getTodayHoursIndex(): number {
  const jsDay = getTodayIndex(); // 0=So, 1=Mo...6=Sa
  if (jsDay === 0) return 6; // Sonntag = hours[6]
  return jsDay - 1; // Mo=0, Di=1 ...
}

export function Oeffnungszeiten() {
  const todayIdx = getTodayHoursIndex();

  return (
    <section
      className="bg-brand-bg py-20 lg:py-28"
      data-navbar-theme="light"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Öffnungszeiten */}
          <div className="reveal">
            <SectionLabel>Besuche uns</SectionLabel>
            <h2 className="h2 text-brand-text mb-8">Öffnungszeiten</h2>

            <div className="bg-white rounded-2xl border border-brand-tint overflow-hidden">
              {hours.map(({ day, opens, closes }, idx) => {
                const isToday = idx === todayIdx;
                const isClosed = !opens;

                return (
                  <div
                    key={day}
                    className={`
                      flex items-center justify-between px-6 py-4 border-b border-gray-50 last:border-0
                      ${isToday ? "bg-brand-tint" : "hover:bg-brand-bg/50"}
                      transition-colors
                    `}
                  >
                    <div className="flex items-center gap-3">
                      {isToday && (
                        <div className="w-2 h-2 rounded-full bg-brand-cta shrink-0" />
                      )}
                      <span
                        className={`font-sans text-sm ${isToday ? "font-semibold text-brand-navy" : "text-brand-slate"}`}
                      >
                        {day}
                        {isToday && (
                          <span className="ml-2 text-xs text-brand-blue font-normal">
                            Heute
                          </span>
                        )}
                      </span>
                    </div>
                    <span
                      className={`font-sans text-sm ${isClosed ? "text-brand-muted" : isToday ? "font-semibold text-brand-navy" : "text-brand-slate"}`}
                    >
                      {isClosed ? "Geschlossen" : `${opens} – ${closes} Uhr`}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Parkticket Badge */}
            <div className="mt-6 flex items-start gap-3 bg-brand-cta-light rounded-xl p-4 border border-brand-cta/20">
              <Ticket size={18} className="text-brand-cta shrink-0 mt-0.5" />
              <div>
                <p className="text-brand-cta font-semibold text-sm">
                  Parkticket-Erstattung
                </p>
                <p className="text-brand-slate text-xs mt-1">
                  Ab 40 € Einkaufswert erstatten wir dein Parkticket bis zu
                  3,00 €. Einfach an der Kasse vorlegen.
                </p>
              </div>
            </div>
          </div>

          {/* Kontakt & Karte */}
          <div className="reveal space-y-6">
            <div>
              <SectionLabel>Kontakt & Anfahrt</SectionLabel>
              <h2 className="h2 text-brand-text mb-6">Wo du uns findest</h2>
            </div>

            {/* Kontaktdaten */}
            <div className="bg-white rounded-2xl border border-brand-tint p-6 space-y-4">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-brand-blue shrink-0" />
                <div>
                  <p className="font-semibold text-brand-navy text-sm">
                    Laufladen Kassel
                  </p>
                  <p className="text-brand-slate text-sm">
                    Friedrichsplatz 12, 34117 Kassel
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-50" />
              <a
                href="tel:+4956110447-5"
                className="flex items-center gap-3 hover:text-brand-navy transition-colors group"
              >
                <Phone size={18} className="text-brand-blue shrink-0" />
                <span className="text-brand-slate group-hover:text-brand-navy text-sm transition-colors">
                  (0561) 10 44 75
                </span>
              </a>
              <a
                href="mailto:kassel@laufladen.de"
                className="flex items-center gap-3 hover:text-brand-navy transition-colors group"
              >
                <Mail size={18} className="text-brand-blue shrink-0" />
                <span className="text-brand-slate group-hover:text-brand-navy text-sm transition-colors">
                  kassel@laufladen.de
                </span>
              </a>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-2xl overflow-hidden border border-brand-tint bg-brand-tint h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2471.012!2d9.4797!3d51.3127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDE4JzQ1LjciTiA5wrAyOCc0Ni45IkU!5e0!3m2!1sde!2sde!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Laufladen Kassel — Friedrichsplatz 12"
                aria-label="Karte: Laufladen Kassel, Friedrichsplatz 12"
              />
            </div>

            <p className="text-brand-muted text-xs">
              Anfahrt: A49 Abfahrt Kassel-Auestadion → Richtung Innenstadt →
              Friedrichsplatz
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
