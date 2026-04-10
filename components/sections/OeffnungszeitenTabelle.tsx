"use client";
import { getTodayIndex } from "@/lib/utils";
import { Ticket } from "lucide-react";

const ZEITEN = [
  { label: "Montag",     time: "10:00 – 18:00 Uhr", day: 1 },
  { label: "Dienstag",   time: "10:00 – 18:00 Uhr", day: 2 },
  { label: "Mittwoch",   time: "10:00 – 18:00 Uhr", day: 3 },
  { label: "Donnerstag", time: "10:00 – 18:00 Uhr", day: 4 },
  { label: "Freitag",    time: "10:00 – 19:00 Uhr", day: 5 },
  { label: "Samstag",    time: "10:00 – 16:00 Uhr", day: 6 },
  { label: "Sonntag",    time: "Geschlossen",         day: 0 },
];

function isOpen(day: number): boolean {
  const t = new Date().getHours() * 60 + new Date().getMinutes();
  if (day === 0) return false;
  if (day === 5) return t >= 600 && t < 1140;
  if (day === 6) return t >= 600 && t < 960;
  return t >= 600 && t < 1080;
}

export function OeffnungszeitenTabelle() {
  const today = getTodayIndex();
  const offen = isOpen(today);
  return (
    <div>
      <div className="mb-4">
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-sans ${
          offen ? "bg-brand-cta-light text-brand-cta border border-brand-cta/20" : "bg-brand-bg text-brand-muted border border-brand-tint"
        }`}>
          <span className={`w-1.5 h-1.5 rounded-full ${offen ? "bg-brand-cta" : "bg-brand-muted"}`} />
          {offen ? "Jetzt geöffnet" : "Aktuell geschlossen"}
        </span>
      </div>
      <div className="bg-white rounded-2xl border border-brand-tint overflow-hidden">
        {ZEITEN.map(({ label, time, day }) => {
          const isToday = day === today;
          return (
            <div key={day} className={`flex justify-between items-center px-5 py-3.5 border-b border-brand-tint last:border-0 ${
              isToday ? "bg-brand-cta-light" : ""
            }`}>
              <span className={`text-sm font-sans ${isToday ? "text-brand-navy font-semibold" : "text-brand-slate"}`}>
                {label}
                {isToday && <span className="ml-2 text-[10px] uppercase tracking-[0.08em] text-brand-cta font-semibold">Heute</span>}
              </span>
              <span className={`text-sm font-sans ${isToday ? "text-brand-navy font-semibold" : "text-brand-navy"}`}>
                {time}
              </span>
            </div>
          );
        })}
      </div>
      <div className="mt-4 flex items-start gap-3 p-4 rounded-xl bg-brand-cta-light border border-brand-cta/20">
        <Ticket size={18} className="text-brand-cta shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-semibold text-brand-navy font-sans">Parkticket-Erstattung</p>
          <p className="text-xs text-brand-slate mt-1 leading-relaxed">
            Ab 40 € Einkaufswert erstatten wir dein Parkticket bis zu 3,00 €.
            Parkhaus Friedrichsplatz — erste Stunde kostenlos mit Parkkarte.
          </p>
        </div>
      </div>
    </div>
  );
}
