import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Logo } from "@/components/Logo";

const shopLinks = [
  { label: "Laufschuhe & Sortiment", href: "/laufschuhe" },
  { label: "Laufanalyse & Beratung", href: "/beratung" },
  { label: "Nordic Walking", href: "/nordic-walking" },
  { label: "Team & Geschichte", href: "/team" },
];

const serviceLinks = [
  { label: "Kontakt & Anfahrt", href: "/kontakt" },
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];

const brands = [
  "Adidas", "Asics", "Brooks", "Diadora",
  "Mizuno", "New Balance", "Nike", "ON Running",
  "Puma", "Saucony",
];

export function Footer() {
  return (
    <footer
      className="bg-brand-midnight text-white"
      data-navbar-theme="dark"
      role="contentinfo"
    >
      {/* Hauptbereich */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Spalte 1 — Marke & Kontakt */}
          <div className="lg:col-span-1">
            <Logo variant="light" className="mb-6" />
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Dein Laufspezialist am Friedrichsplatz Kassel. Individuelle
              Beratung und Laufanalyse auf der Straße — seit 1984.
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+4956110447-5"
                  className="flex items-center gap-2.5 text-white/70 hover:text-white text-sm transition-colors"
                >
                  <Phone size={14} className="shrink-0" />
                  (0561) 10 44 75
                </a>
              </li>
              <li>
                <a
                  href="mailto:kassel@laufladen.de"
                  className="flex items-center gap-2.5 text-white/70 hover:text-white text-sm transition-colors"
                >
                  <Mail size={14} className="shrink-0" />
                  kassel@laufladen.de
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-white/70 text-sm">
                  <MapPin size={14} className="shrink-0 mt-0.5" />
                  <span>Friedrichsplatz 12<br />34117 Kassel</span>
                </div>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/laufladen_kassel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-white/70 hover:text-white text-sm transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  @laufladen_kassel
                </a>
              </li>
            </ul>
          </div>

          {/* Spalte 2 — Navigation */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.1em] text-white/40 font-semibold mb-5">
              Sortiment
            </h3>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-xs uppercase tracking-[0.1em] text-white/40 font-semibold mb-5 mt-8">
              Service
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Spalte 3 — Öffnungszeiten */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.1em] text-white/40 font-semibold mb-5">
              Öffnungszeiten
            </h3>
            <ul className="space-y-2.5">
              {[
                { day: "Montag – Donnerstag", time: "10:00 – 18:00 Uhr" },
                { day: "Freitag", time: "10:00 – 19:00 Uhr" },
                { day: "Samstag", time: "10:00 – 16:00 Uhr" },
                { day: "Sonntag", time: "Geschlossen" },
              ].map(({ day, time }) => (
                <li key={day} className="flex justify-between gap-4 text-sm">
                  <span className="text-white/60">{day}</span>
                  <span className="text-white/90 whitespace-nowrap">{time}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-start gap-2 bg-white/5 rounded-lg p-3.5">
              <Clock size={14} className="shrink-0 mt-0.5 text-brand-electric" />
              <p className="text-xs text-white/60 leading-relaxed">
                Parkticket-Erstattung ab 40 € Einkaufswert (bis 3,00 €)
              </p>
            </div>
          </div>

          {/* Spalte 4 — Marken */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.1em] text-white/40 font-semibold mb-5">
              Unsere Marken
            </h3>
            <div className="flex flex-wrap gap-2">
              {brands.map((brand) => (
                <span
                  key={brand}
                  className="px-2.5 py-1 bg-white/10 rounded text-xs text-white/70 font-medium"
                >
                  {brand}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <p className="text-xs text-white/40 leading-relaxed">
                Mitglied im Sport2000 Händlerverbund
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Unterer Streifen */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Laufladen Kassel — Jürgen Thomas Fried
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/impressum"
              className="text-sm text-white/70 hover:text-white font-medium transition-colors underline underline-offset-2"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-sm text-white/70 hover:text-white font-medium transition-colors underline underline-offset-2"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
