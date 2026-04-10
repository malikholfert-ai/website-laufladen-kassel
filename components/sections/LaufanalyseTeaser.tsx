import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CheckCircle } from "lucide-react";

const highlights = [
  "Kostenlos — keine versteckten Kosten",
  "Analyse unter echten Laufbedingungen, nicht im Labor",
  "Alte Laufschuhe mitbringen — wir lesen darin deine Geschichte",
  "Jeden Schuh draußen testen, bevor du kaufst",
];

export function LaufanalyseTeaser() {
  return (
    <section
      className="bg-brand-navy py-24 lg:py-32"
      data-navbar-theme="dark"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div className="reveal">
            <SectionLabel variant="light">Laufanalyse</SectionLabel>
            <h2 className="h1 text-white mb-6">
              Kein Laufband.
              <br />
              Echter Bürgersteig.
            </h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Wir haben jahrelang Erfahrung mit Laufbandanalysen gesammelt —
              und uns bewusst dagegen entschieden. Das Laufband verfälscht das
              natürliche Laufverhalten: Die Fortbewegung ist mechanisch anders,
              die Körperhaltung verändert sich, die Schrittfrequenz passt sich
              an den Band-Rhythmus an.
            </p>
            <p className="text-white/70 leading-relaxed mb-10">
              Wir analysieren draußen, auf dem Bürgersteig vor dem Laden — mit
              geschulten Augen, die wissen, worauf es ankommt. Dein Laufstil,
              unter deinen echten Bedingungen.
            </p>

            <ul className="space-y-3 mb-10">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="text-brand-cta shrink-0 mt-0.5"
                  />
                  <span className="text-white/80 text-sm">{h}</span>
                </li>
              ))}
            </ul>

            <Button as="link" href="/beratung" variant="primary" size="lg">
              Jetzt Termin vereinbaren
            </Button>
          </div>

          {/* Prozess-Vorschau */}
          <div className="reveal">
            <div className="space-y-4">
              {[
                {
                  nr: "01",
                  title: "Alte Schuhe mitbringen",
                  desc: "Wir lesen darin deine Laufgeschichte — Abnutzungsmuster zeigen alles.",
                },
                {
                  nr: "02",
                  title: "Analyse auf dem Bürgersteig",
                  desc: "Unter echten Laufbedingungen — nicht auf einem Laufband im Laden.",
                },
                {
                  nr: "03",
                  title: "Individuelle Beratung",
                  desc: "Dein Gewicht, dein Laufstil, deine Ziele — kein Einheitsschuh.",
                },
                {
                  nr: "04",
                  title: "Draußen testen",
                  desc: "Jeden Kandidaten auf der echten Strecke vor dem Laden ausprobieren.",
                },
              ].map(({ nr, title, desc }) => (
                <div
                  key={nr}
                  className="flex gap-5 p-5 rounded-xl bg-white/5 hover:bg-white/8 border border-white/10 transition-colors"
                >
                  <span className="text-brand-sky font-display text-2xl leading-none shrink-0 mt-0.5">
                    {nr}
                  </span>
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-1 font-sans">
                      {title}
                    </h3>
                    <p className="text-white/50 text-xs leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
