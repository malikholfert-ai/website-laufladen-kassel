import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Mountain, Zap, PersonStanding, Footprints } from "lucide-react";

export const metadata: Metadata = createPageMetadata(
  "Laufschuhe & Sortiment — Straßenlauf, Trail, Nordic Walking",
  "Straßenlauf, Trailrunning, Nordic Walking, Leichtathletik — alle Top-Marken: Adidas, Asics, Brooks, ON Running, Saucony und mehr. Persönliche Beratung am Friedrichsplatz Kassel.",
  "/laufschuhe"
);

const categories = [
  {
    icon: Footprints,
    title: "Straßenlaufen",
    subtitle: "Der Klassiker",
    description:
      "Von der Joggingrunde im Park bis zum Marathon — Straßenlaufschuhe sind unsere Kernkompetenz. Wir führen alle relevanten Modelle in verschiedenen Stabilitätsstufen und Dämpfungsgraden.",
    brands: ["Brooks", "ON Running", "Asics", "Saucony", "New Balance", "adidas"],
    hint: "Für asphaltierte Wege, Stadtläufe, Wettkämpfe",
  },
  {
    icon: Mountain,
    title: "Trailrunning",
    subtitle: "Off the beaten path",
    description:
      "Für alle, die den Wald der Straße vorziehen. Trail-Schuhe brauchen anderen Grip, andere Stabilität, andere Sprengung. Wir beraten dich auch hier auf Basis deines Laufstils — nicht nach Katalog.",
    brands: ["Asics", "Brooks", "Saucony", "New Balance", "Mizuno"],
    hint: "Für Waldwege, Trails, unebenes Gelände",
  },
  {
    icon: PersonStanding,
    title: "Nordic Walking",
    subtitle: "Wir waren die Ersten in Kassel",
    description:
      "Nordic Walking braucht anderen Schuh und anderen Stock als Wandern. Wir kennen den Unterschied — seit den Anfängen der Sportart in Kassel. Exel und Leki Stöcke, passendes Schuhwerk, Stocklängen-Beratung.",
    brands: ["Asics", "Brooks", "New Balance", "Exel", "Leki"],
    hint: "Stöcke, Schuhwerk, Kürzungsservice",
    link: "/nordic-walking",
  },
  {
    icon: Zap,
    title: "Leichtathletik",
    subtitle: "Für den Wettkampf",
    description:
      "Spike-Schuhe für Kurzstrecke, Mittelstrecke und Weitsprung. Vereinsausstattung auf Anfrage. Wir beliefern auch Laufvereine und Schulen — einfach ansprechen.",
    brands: ["adidas", "Nike", "Asics", "Puma"],
    hint: "Spike-Schuhe, Vereinsanfragen willkommen",
  },
];

const brands = [
  { name: "adidas",      note: "Runfalcon, Ultraboost, Adizero" },
  { name: "ASICS",       note: "Gel-Kayano, Gel-Nimbus, GT-Serie" },
  { name: "Brooks",      note: "Ghost, Adrenaline, Glycerin" },
  { name: "Diadora",     note: "Mythos, Reevo, Strada" },
  { name: "Mizuno",      note: "Wave Rider, Wave Inspire" },
  { name: "New Balance", note: "1080, 860, Fresh Foam" },
  { name: "Nike",        note: "React, Pegasus, Air Zoom" },
  { name: "ON Running",  note: "Cloudmonster, Cloudstratus, Cloudrunner" },
  { name: "Puma",        note: "Velocity Nitro, Deviate" },
  { name: "Saucony",     note: "Ride, Guide, Kinvara" },
];

const accessories = [
  { name: "Einlegesohlen",        desc: "Orthopädisch geprüfte Einlagen, Vollfußeinlagen" },
  { name: "Laufsocken",           desc: "Blasenfrei — funktionale Socken für lange Distanzen" },
  { name: "GPS-Uhren",            desc: "Garmin und weitere Laufuhren zur Auswahl" },
  { name: "Sporternährung",       desc: "Gels, Riegel, Drinks für Training und Wettkampf" },
  { name: "Kompressionsbekleidung", desc: "Strümpfe und Hosen für Regeneration" },
  { name: "Laufbekleidung",       desc: "Funktionsshirts, Jacken, Tights — wetterfest" },
];

export default function LaufschuhePage() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="bg-brand-midnight pt-28 pb-16 lg:pt-36 lg:pb-24" data-navbar-theme="dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-orange text-xs font-display uppercase tracking-[0.2em] mb-4">
            Sortiment
          </p>
          <h1 className="h1 text-white max-w-2xl">
            Laufschuhe & Ausrüstung für jeden Laufstil
          </h1>
          <p className="text-white/60 mt-4 max-w-xl leading-relaxed">
            Straßenlauf, Trailrunning, Nordic Walking, Leichtathletik — wir
            führen alle relevanten Marken und beraten dich individuell. Kein
            Sortiment von der Stange.
          </p>
        </div>
      </section>

      {/* Kategorien */}
      <section className="bg-white py-20 lg:py-28" data-navbar-theme="light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionLabel>Kategorien</SectionLabel>
            <h2 className="h2 text-brand-text mt-2">
              Vier Disziplinen — ein Fachgeschäft
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map(({ icon: Icon, title, subtitle, description, brands: catBrands, hint, link }) => (
              <div
                key={title}
                className="group bg-white rounded-2xl border border-brand-border p-8 hover:border-brand-electric/20 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-blue-tint">
                    <Icon size={22} className="text-brand-electric" strokeWidth={1.5} />
                  </div>
                  {link && (
                    <Button as="link" href={link} variant="secondary" size="sm">
                      Mehr erfahren
                      <ArrowRight size={14} />
                    </Button>
                  )}
                </div>

                <p className="text-xs text-brand-electric font-semibold uppercase tracking-[0.08em] mb-1">
                  {subtitle}
                </p>
                <h3 className="h3 text-brand-midnight mb-3">{title}</h3>
                <p className="text-brand-slate text-sm leading-relaxed mb-5">
                  {description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {catBrands.map((b) => (
                    <span
                      key={b}
                      className="px-2 py-1 bg-brand-surface rounded-lg text-xs text-brand-slate font-medium"
                    >
                      {b}
                    </span>
                  ))}
                </div>

                <p className="text-brand-muted text-xs border-t border-brand-border pt-4">
                  {hint}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marken */}
      <section className="bg-brand-surface py-20 lg:py-28" data-navbar-theme="light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionLabel>Unsere Marken</SectionLabel>
            <h2 className="h2 text-brand-text mt-2">
              Alle relevanten Marken im Laufsport
            </h2>
            <p className="text-brand-slate mt-3 max-w-xl leading-relaxed">
              Wir führen ein breites Sortiment — aber wir empfehlen nicht den
              meistbewerteten Test-Sieger, sondern den richtigen Schuh für
              deinen Fuß.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {brands.map(({ name, note }) => (
              <div
                key={name}
                className="bg-white rounded-xl border border-brand-border p-5 hover:border-brand-electric/20 hover:shadow-sm transition-all duration-200"
              >
                <p className="font-semibold text-brand-midnight font-sans mb-1.5">{name}</p>
                <p className="text-brand-muted text-xs leading-relaxed">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beratungshinweis */}
      <section className="bg-brand-midnight py-20" data-navbar-theme="dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <Badge variant="navy" className="mb-5 border border-white/20">
              Kostenlose Beratung
            </Badge>
            <h2 className="h2 text-white mb-5">
              Nicht sicher welcher Schuh passt?
            </h2>
            <p className="text-white/60 leading-relaxed mb-8">
              Lass dich persönlich beraten — mit Laufanalyse auf dem
              Bürgersteig, ohne Zeitdruck und ohne Kaufzwang.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button as="link" href="/beratung" variant="primary" size="lg">
                Termin vereinbaren
              </Button>
              <Button as="link" href="/beratung" variant="ghost" size="lg">
                Wie läuft die Analyse ab?
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Zubehör */}
      <section className="bg-white py-20 lg:py-28" data-navbar-theme="light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionLabel>Zubehör</SectionLabel>
            <h2 className="h2 text-brand-text mt-2">Alles rund ums Laufen</h2>
            <p className="text-brand-slate mt-3 max-w-md leading-relaxed">
              Ein guter Schuh braucht die richtige Socke, die richtige Einlage
              und manchmal die richtige Uhr.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {accessories.map(({ name, desc }) => (
              <div
                key={name}
                className="flex gap-4 p-5 rounded-xl border border-brand-border hover:border-brand-blue-tint hover:bg-brand-surface/50 transition-all duration-200"
              >
                <div className="w-1.5 h-full min-h-[40px] rounded-full bg-brand-blue-tint shrink-0" />
                <div>
                  <p className="font-semibold text-brand-midnight text-sm font-sans mb-1">{name}</p>
                  <p className="text-brand-muted text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
