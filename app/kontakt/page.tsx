import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/sections/ContactForm";
import { OeffnungszeitenTabelle } from "@/components/sections/OeffnungszeitenTabelle";
import { Phone, Mail, MapPin, Car, Navigation2 } from "lucide-react";

export const metadata: Metadata = createPageMetadata(
  "Kontakt & Anfahrt — Laufladen Kassel",
  "Laufladen Kassel am Friedrichsplatz 12, 34117 Kassel. Tel: (0561) 10 44 75. Öffnungszeiten, Google Maps, Anfahrt und Kontaktformular.",
  "/kontakt"
);

export default function KontaktPage() {
  return (
    <div className="min-h-screen">

      {/* ── 1. Hero ── */}
      <section className="bg-brand-navy py-28 lg:py-36" data-navbar-theme="dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel variant="light">Kontakt & Anfahrt</SectionLabel>
          <h1 className="h1 text-white mt-2 max-w-2xl">
            Wir sind für dich da.
          </h1>
          <p className="text-white/70 mt-6 max-w-xl leading-relaxed font-sans">
            Komm vorbei, ruf an oder schreib uns — wir freuen uns auf dich.
            Du findest uns mitten in Kassel am Friedrichsplatz.
          </p>
        </div>
      </section>

      {/* ── 2. Kontakt-Kacheln ── */}
      <section className="py-16 bg-brand-bg" data-navbar-theme="light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Telefon */}
            <a
              href="tel:+4956110447-5"
              className="group flex items-start gap-4 p-6 bg-white rounded-2xl border border-brand-tint hover:border-brand-blue hover:shadow-md transition-all duration-200"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-tint flex items-center justify-center group-hover:bg-brand-blue/10 transition-colors">
                <Phone size={22} className="text-brand-navy" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-brand-muted font-sans mb-1">Telefon</p>
                <p className="text-lg font-semibold text-brand-navy font-sans">(0561) 10 44 75</p>
                <p className="text-xs text-brand-slate font-sans mt-1">Mo–Fr 10–18 · Sa 10–16 Uhr</p>
              </div>
            </a>

            {/* E-Mail */}
            <a
              href="mailto:kassel@laufladen.de"
              className="group flex items-start gap-4 p-6 bg-white rounded-2xl border border-brand-tint hover:border-brand-blue hover:shadow-md transition-all duration-200"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-tint flex items-center justify-center group-hover:bg-brand-blue/10 transition-colors">
                <Mail size={22} className="text-brand-navy" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-brand-muted font-sans mb-1">E-Mail</p>
                <p className="text-lg font-semibold text-brand-navy font-sans">kassel@laufladen.de</p>
                <p className="text-xs text-brand-slate font-sans mt-1">Antwort innerhalb von 24 h</p>
              </div>
            </a>

            {/* Adresse */}
            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-brand-tint">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-tint flex items-center justify-center">
                <MapPin size={22} className="text-brand-navy" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-brand-muted font-sans mb-1">Adresse</p>
                <p className="text-lg font-semibold text-brand-navy font-sans">Friedrichsplatz 12</p>
                <p className="text-sm text-brand-slate font-sans">34117 Kassel</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. Google Maps + Öffnungszeiten ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Google Maps */}
            <div className="rounded-2xl overflow-hidden border border-brand-tint shadow-sm aspect-[4/3]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2476.8!2d9.47972!3d51.31268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bb0aa9c73f0f73%3A0x0!2sFriedrichsplatz%2012%2C%2034117%20Kassel!5e0!3m2!1sde!2sde!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Laufladen Kassel auf Google Maps"
              />
            </div>

            {/* Öffnungszeiten */}
            <div>
              <SectionLabel>Öffnungszeiten</SectionLabel>
              <h2 className="h2 text-brand-navy mb-6">Wann du uns findest</h2>
              <OeffnungszeitenTabelle />
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. Kontaktformular ── */}
      <section className="py-20 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Erklärungs-Text */}
            <div>
              <SectionLabel>Schreib uns</SectionLabel>
              <h2 className="h2 text-brand-navy mb-4">Hast du eine Frage?</h2>
              <p className="text-brand-slate leading-relaxed font-sans mb-6">
                Ob Schuhanpassung, Laufanalyse, Beratung oder einfach eine kurze Frage —
                schreib uns und wir melden uns schnellstmöglich.
              </p>
              <ul className="space-y-3">
                {[
                  "Schuhberatung & Anpassung",
                  "Laufanalyse-Termin anfragen",
                  "Produktverfügbarkeit prüfen",
                  "Allgemeine Fragen",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-brand-slate font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cta shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Formular-Card */}
            <div className="bg-white rounded-2xl border border-brand-tint p-8 shadow-sm">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. Anfahrt + Parkinfo-Kacheln ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>Anfahrt</SectionLabel>
          <h2 className="h2 text-brand-navy mb-8">So findest du uns</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Anfahrtstext */}
            <div>
              <p className="text-brand-slate leading-relaxed font-sans">
                Auswärtige bevorzugen die BAB-Abfahrt „Kassel-Auestadion" der A&nbsp;49.
                In Richtung Innenstadt an der ersten großen Kreuzung rechts in die
                Frankfurter Straße einbiegen, Beschilderung Parkhaus „Friedrichsplatz"
                folgen (ca. 2&nbsp;km geradeaus). Nach ca. 400&nbsp;m Berg weiter geradeaus,
                an der nächsten Ampel links oder ins Parkhaus abbiegen.
                Gegenüber: Museum Friedericianum. Schräg gegenüber: Staatstheater Kassel.
              </p>
            </div>

            {/* 2 Parkinfo-Kacheln */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex items-start gap-4 p-5 bg-brand-bg rounded-2xl border border-brand-tint">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-brand-tint">
                  <Car size={20} className="text-brand-navy" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-navy font-sans">Parkhaus Friedrichsplatz</p>
                  <p className="text-xs text-brand-slate font-sans mt-1 leading-relaxed">
                    Direkt nebenan — erste Stunde kostenlos mit Parkkarte.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-brand-bg rounded-2xl border border-brand-tint">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-brand-tint">
                  <Navigation2 size={20} className="text-brand-navy" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-navy font-sans">ÖPNV</p>
                  <p className="text-xs text-brand-slate font-sans mt-1 leading-relaxed">
                    Straßenbahn Linie 1, 3, 4 · Haltestelle Friedrichsplatz.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 6. Social CTA ── */}
      <section className="py-20 bg-brand-navy" data-navbar-theme="dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionLabel variant="light">Social Media</SectionLabel>
          <h2 className="h2 text-white mt-2 mb-4">Folge uns auf Instagram</h2>
          <p className="text-white/70 font-sans max-w-md mx-auto mb-8">
            Lauftipps, neue Produkte und Aktionen — bleib auf dem Laufenden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as="link" href="https://instagram.com/laufladen_kassel" variant="primary" size="lg">
              @laufladen_kassel
            </Button>
            <Button as="link" href="/laufanalyse" variant="ghost" size="lg">
              Laufanalyse anfragen
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
