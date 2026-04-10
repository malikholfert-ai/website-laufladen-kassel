import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Scissors, CheckCircle, Zap } from "lucide-react";

export const metadata: Metadata = createPageMetadata(
  "Nordic Walking Kassel — Exel & Leki, Schuhwerk, Beratung",
  "Wir waren die Ersten in Kassel. Exel und Leki Stöcke, passendes Schuhwerk, Stocklängen-Beratung und Kürzungsservice. Friedrichsplatz 12.",
  "/nordic-walking"
);

/* Stocklängen-Tabelle: Körpergröße → empfohlene Stocklänge */
const stocklaengen = [
  { groesse: "150 – 155 cm", laenge: "100 cm" },
  { groesse: "155 – 160 cm", laenge: "105 cm" },
  { groesse: "160 – 165 cm", laenge: "105 – 110 cm" },
  { groesse: "165 – 170 cm", laenge: "110 cm" },
  { groesse: "170 – 175 cm", laenge: "110 – 115 cm" },
  { groesse: "175 – 180 cm", laenge: "115 cm" },
  { groesse: "180 – 185 cm", laenge: "115 – 120 cm" },
  { groesse: "185 – 190 cm", laenge: "120 cm" },
  { groesse: "190 – 195 cm", laenge: "120 – 125 cm" },
  { groesse: "195 + cm", laenge: "125 cm" },
];

const schuhMarken = [
  { name: "Asics", model: "GT-Serie, Gel-Cumulus — gute Dämpfung für lange Strecken" },
  { name: "Brooks", model: "Ghost, Adrenaline — breite Basis, stabile Abrollung" },
  { name: "New Balance", model: "Fresh Foam 1080 — weiche Dämpfung, bequemer Leisten" },
];

const stockMarken = [
  {
    name: "Exel",
    herkunft: "Finnland",
    besonderheit: "Kork-Handgriff, verschiedene Tellergrößen, sehr leicht",
    modelle: ["Exel Nordic Classic", "Exel Nordic Walker", "Exel Performance"],
  },
  {
    name: "Leki",
    herkunft: "Deutschland",
    besonderheit: "Speed-Lock-System, ergonomischer Griff, robust",
    modelle: ["Leki Walker", "Leki Instructor Lite", "Leki Traveller Carbon"],
  },
];

export default function NordicWalkingPage() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="bg-brand-navy pt-28 pb-20 lg:pt-36 lg:pb-28" data-navbar-theme="dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="navy" className="mb-5 border border-white/20">
            Pioniere in Kassel
          </Badge>
          <SectionLabel variant="light">Nordic Walking</SectionLabel>
          <h1 className="h1 text-white mt-3 max-w-2xl mb-6">
            Wir waren die Ersten in Kassel.
          </h1>
          <p className="text-white/70 leading-relaxed max-w-xl mb-8">
            Als Nordic Walking in Deutschland noch kaum jemand kannte, haben
            wir das Sortiment aufgebaut. Exel und Leki Stöcke, das richtige
            Schuhwerk und eine Beratung die den Unterschied zwischen Wandern
            und Nordic Walking kennt — seit den Anfängen der Sportart.
          </p>
          <div className="flex flex-wrap gap-4">
            {[
              "Exel & Leki Stöcke",
              "Passende Schuhberatung",
              "Stocklängen-Beratung",
              "Kürzungsservice vor Ort",
            ].map((t) => (
              <div key={t} className="flex items-center gap-2 text-white/60 text-sm">
                <CheckCircle size={14} className="text-brand-sky shrink-0" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stöcke */}
      <section className="bg-white py-20 lg:py-28" data-navbar-theme="light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionLabel>Nordic Walking Stöcke</SectionLabel>
            <h2 className="h2 text-brand-text mt-2">Exel & Leki — die Marktführer</h2>
            <p className="text-brand-slate mt-3 max-w-lg leading-relaxed">
              Wir führen beide Marktführer — und beraten dich ehrlich, welche für
              dich passt. Unterschiede in Grip, Gewicht und Handschlaufen-System
              sind entscheidend für den Langzeitspaß.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {stockMarken.map(({ name, herkunft, besonderheit, modelle }) => (
              <div
                key={name}
                className="bg-white rounded-2xl border border-gray-100 p-8 hover:border-brand-blue/20 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <h3 className="text-2xl font-semibold text-brand-navy font-sans">{name}</h3>
                    <p className="text-brand-muted text-xs mt-1">{herkunft}</p>
                  </div>
                  <Badge variant="default">{herkunft}</Badge>
                </div>
                <p className="text-brand-slate text-sm leading-relaxed mb-5">{besonderheit}</p>
                <div>
                  <p className="text-xs font-semibold text-brand-blue uppercase tracking-[0.08em] mb-2">
                    Aktuelle Modelle
                  </p>
                  <ul className="space-y-1.5">
                    {modelle.map((m) => (
                      <li key={m} className="flex items-center gap-2 text-brand-slate text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-sky shrink-0" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Kürzungsservice */}
          <div className="flex items-start gap-5 p-7 rounded-2xl bg-brand-tint border border-brand-blue/20">
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0">
              <Scissors size={22} className="text-brand-blue" />
            </div>
            <div>
              <h3 className="font-semibold text-brand-navy font-sans text-lg mb-2">
                Stocklängen-Kürzungsservice
              </h3>
              <p className="text-brand-slate leading-relaxed">
                Stöcke zu lang gekauft — oder gebraucht bekommen? Wir kürzen
                deine Nordic-Walking-Stöcke auf die richtige Länge. Einfach
                vorbeibringen, Größe angeben, fertig. Schnell und unkompliziert.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stocklängen-Tabelle */}
      <section className="bg-brand-bg py-20 lg:py-28" data-navbar-theme="light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel>Richtige Stocklänge</SectionLabel>
              <h2 className="h2 text-brand-text mt-2 mb-5">
                Orientierungstabelle
              </h2>
              <p className="text-brand-slate leading-relaxed mb-6">
                Die Faustformel: Körpergröße × 0,68 = empfohlene Stocklänge.
                Beim Halten des Stocks mit geradem Arm sollte der Ellenbogen
                einen leichten 90°-Winkel bilden. Wir passen die Länge beim
                Kauf individuell an.
              </p>
              <p className="text-brand-muted text-sm">
                Hinweis: Aktive Nordic-Walker nutzen oft 2–3 cm längere Stöcke
                als die Tabelle empfiehlt — für mehr Schub und Armarbeit.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-brand-tint overflow-hidden">
              <div className="grid grid-cols-2 bg-brand-navy px-6 py-3">
                <span className="text-white/60 text-xs font-semibold uppercase tracking-[0.08em]">Körpergröße</span>
                <span className="text-white/60 text-xs font-semibold uppercase tracking-[0.08em]">Stocklänge</span>
              </div>
              {stocklaengen.map(({ groesse, laenge }, idx) => (
                <div
                  key={groesse}
                  className={`grid grid-cols-2 px-6 py-3.5 border-b border-gray-50 last:border-0 ${idx % 2 === 0 ? "bg-white" : "bg-brand-bg/40"}`}
                >
                  <span className="text-brand-slate text-sm">{groesse}</span>
                  <span className="text-brand-navy font-semibold text-sm">{laenge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Schuhwerk */}
      <section className="bg-white py-20 lg:py-28" data-navbar-theme="light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionLabel>Schuhwerk</SectionLabel>
            <h2 className="h2 text-brand-text mt-2">
              Nordic Walking braucht anderen Schuh als Wandern
            </h2>
            <p className="text-brand-slate mt-3 max-w-xl leading-relaxed">
              Hohe Wanderstiefel bremsen die Abrollbewegung — beim Nordic
              Walking ist ein flacher, flexibler Laufschuh mit guter Dämpfung
              die richtige Wahl. Wir beraten dich nach deiner Technik und
              deinen Wegen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {schuhMarken.map(({ name, model }) => (
              <div
                key={name}
                className="p-6 rounded-2xl border border-gray-100 hover:border-brand-blue/20 hover:shadow-sm transition-all duration-200"
              >
                <h3 className="font-semibold text-brand-navy text-lg font-sans mb-2">{name}</h3>
                <p className="text-brand-slate text-sm leading-relaxed">{model}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leichtathletik */}
      <section className="bg-brand-bg py-20" data-navbar-theme="light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-navy mb-5">
                <Zap size={22} className="text-brand-sky" strokeWidth={1.5} />
              </div>
              <SectionLabel>Leichtathletik</SectionLabel>
              <h2 className="h2 text-brand-text mt-2 mb-5">
                Spike-Schuhe & Vereinsausstattung
              </h2>
              <p className="text-brand-slate leading-relaxed mb-5">
                Spike-Schuhe für Kurzstrecke, Mittelstrecke und Weitsprung.
                Adidas, Nike, Asics und Puma — jeweils mit den aktuellen
                Wettkampfmodellen. Wir beraten auch Leichtathletik-Vereine
                und Schulen bei der Sammelbestellung.
              </p>
              <p className="text-brand-slate leading-relaxed">
                Vereinsanfragen bitte direkt per Telefon oder E-Mail —
                wir machen euch ein passendes Angebot.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+4956110447-5"
                className="flex items-center gap-4 p-5 bg-white rounded-xl border border-brand-tint hover:border-brand-blue/20 hover:shadow-sm transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-tint flex items-center justify-center shrink-0 text-brand-blue font-semibold text-sm">
                  ☎
                </div>
                <div>
                  <p className="font-semibold text-brand-navy text-sm font-sans group-hover:text-brand-blue transition-colors">
                    Vereinsanfrage per Telefon
                  </p>
                  <p className="text-brand-muted text-xs">(0561) 10 44 75</p>
                </div>
              </a>
              <a
                href="mailto:kassel@laufladen.de"
                className="flex items-center gap-4 p-5 bg-white rounded-xl border border-brand-tint hover:border-brand-blue/20 hover:shadow-sm transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-tint flex items-center justify-center shrink-0 text-brand-blue font-semibold text-sm">
                  ✉
                </div>
                <div>
                  <p className="font-semibold text-brand-navy text-sm font-sans group-hover:text-brand-blue transition-colors">
                    Vereinsanfrage per E-Mail
                  </p>
                  <p className="text-brand-muted text-xs">kassel@laufladen.de</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy py-20" data-navbar-theme="dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="h2 text-white mb-4">Fragen zu Stöcken oder Schuhen?</h2>
          <p className="text-white/70 mb-8 max-w-md mx-auto">
            Komm einfach vorbei — wir beraten dich persönlich und passen
            die Stöcke direkt vor Ort an.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as="link" href="/kontakt" variant="primary" size="lg">
              Öffnungszeiten & Anfahrt
            </Button>
            <Button as="link" href="/beratung" variant="ghost" size="lg">
              Laufanalyse anfragen
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
