"use client";

import { Phone, Mail, MapPin, Ticket } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { getTodayIndex } from "@/lib/utils";

const hours = [
  { day: "Montag",     short: "Mo", opens: "10:00", closes: "18:00" },
  { day: "Dienstag",   short: "Di", opens: "10:00", closes: "18:00" },
  { day: "Mittwoch",   short: "Mi", opens: "10:00", closes: "18:00" },
  { day: "Donnerstag", short: "Do", opens: "10:00", closes: "18:00" },
  { day: "Freitag",    short: "Fr", opens: "10:00", closes: "19:00" },
  { day: "Samstag",    short: "Sa", opens: "10:00", closes: "16:00" },
  { day: "Sonntag",    short: "So", opens: null,    closes: null    },
];

function getTodayHoursIndex(): number {
  const jsDay = getTodayIndex(); // 0=So, 1=Mo...6=Sa
  if (jsDay === 0) return 6;    // Sonntag = hours[6]
  return jsDay - 1;             // Mo=0, Di=1 ...
}

export function Oeffnungszeiten() {
  const todayIdx = getTodayHoursIndex();

  return (
    <section className="bg-brand-surface py-20 lg:py-28" data-navbar-theme="light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Öffnungszeiten */}
          <div className="reveal">
            <SectionLabel>Besuche uns</SectionLabel>
            <h2 className="h2 text-brand-text mb-8">Öffnungszeiten</h2>

            <div className="bg-white rounded-2xl border border-brand-border overflow-hidden">
              {hours.map(({ day, opens, closes }, idx) => {
                const isToday = idx === todayIdx;
                const isClosed = !opens;

                return (
                  <div
                    key={day}
                    className={`
                      flex items-center justify-between px-6 py-4 border-b border-brand-border last:border-0
                      ${isToday ? "bg-brand-blue-tint" : "hover:bg-brand-surface/50"}
                      transition-colors
                    `}
                  >
                    <div className="flex items-center gap-3">
                      {isToday && (
                        <div className="w-2 h-2 rounded-full bg-brand-electric shrink-0" />
                      )}
                      <span
                        className={`font-sans text-sm ${isToday ? "font-semibold text-brand-midnight" : "text-brand-slate"}`}
                      >
                        {day}
                        {isToday && (
                          <span className="ml-2 text-xs text-brand-electric font-normal">
                            Heute
                          </span>
                        )}
                      </span>
                    </div>
                    <span
                      className={`font-sans text-sm ${isClosed ? "text-brand-muted" : isToday ? "font-semibold text-brand-midnight" : "text-brand-slate"}`}
                    >
                      {isClosed ? "Geschlossen" : `${opens} – ${closes} Uhr`}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Parkticket */}
            <div className="mt-6 flex items-start gap-3 bg-brand-blue-tint rounded-xl p-4 border border-brand-electric/20">
              <Ticket size={18} className="text-brand-electric shrink-0 mt-0.5" />
              <div>
                <p className="text-brand-midnight font-semibold text-sm">
                  Parkticket-Erstattung
                </p>
                <p className="text-brand-slate text-xs mt-1">
                  Ab 40 € Einkaufswert erstatten wir dein Parkticket bis zu
                  3,00 €. Einfach an der Kasse vorlegen.
                </p>
              </div>
            </div>
          </div>

          {/* Kontakt-Kacheln */}
          <div className="reveal space-y-6">
            <div>
              <SectionLabel>Kontakt & Anfahrt</SectionLabel>
              <h2 className="h2 text-brand-text mb-6">Wo du uns findest</h2>
            </div>

            <div className="bg-white rounded-2xl border border-brand-border p-6 space-y-4">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-brand-electric shrink-0" />
                <div>
                  <p className="font-semibold text-brand-midnight text-sm">
                    Laufladen Kassel
                  </p>
                  <p className="text-brand-slate text-sm">
                    Friedrichsplatz 12, 34117 Kassel
                  </p>
                </div>
              </div>
              <div className="border-t border-brand-border" />
              <a
                href="tel:+4956110447-5"
                className="flex items-center gap-3 hover:text-brand-midnight transition-colors group"
              >
                <Phone size={18} className="text-brand-electric shrink-0" />
                <span className="text-brand-slate group-hover:text-brand-midnight text-sm transition-colors">
                  (0561) 10 44 75
                </span>
              </a>
              <a
                href="mailto:kassel@laufladen.de"
                className="flex items-center gap-3 hover:text-brand-midnight transition-colors group"
              >
                <Mail size={18} className="text-brand-electric shrink-0" />
                <span className="text-brand-slate group-hover:text-brand-midnight text-sm transition-colors">
                  kassel@laufladen.de
                </span>
              </a>
            </div>

            <p className="text-brand-muted text-xs">
              Anfahrt: A49 Abfahrt Kassel-Auestadion → Richtung Innenstadt →
              Friedrichsplatz. Parkhaus direkt nebenan.
            </p>

            <a
              href="/kontakt"
              className="inline-flex items-center gap-2 text-brand-electric font-sans font-medium text-sm hover:underline underline-offset-4"
            >
              Vollständige Anfahrt & Maps →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
