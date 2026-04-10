import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Ticket, Users, Award } from "lucide-react";

export const metadata: Metadata = createPageMetadata(
  "Team & Geschichte — Laufladen Kassel seit 1984",
  "Seit 1984 am Friedrichsplatz. Jürgen Thomas Fried und sein Team beraten mit 30+ Jahren Erfahrung — aktiv laufend, fachkundig, persönlich.",
  "/team"
);

const team = [
  {
    initial: "U",
    name: "Unser Langer",
    role: "Laufschuh-Berater",
    since: "Im Team seit 1994",
    bio: "1,96 m, Schuhe ab Größe 47 — der Mann weiß, was es heißt, einen Schuh zu finden. Früher Handballer und Zehnkämpfer, heute aktiver Läufer. Power-Bar-Fan der ersten Stunde. Über 30 Jahre Erfahrung im Laufsport.",
    tags: ["Handball", "Zehnkampf", "Laufen", "seit 1994"],
  },
  {
    initial: "J",
    name: "Juliane",
    role: "Beratung & Laufanalyse",
    since: "Aufgewachsen mit dem Laufsport",
    bio: "Aus einer Läuferfamilie in Rotenburg/Fulda. Studium der Ernährungswissenschaft — Ernährungsberatung rund ums Laufen ist ihr Spezialgebiet. Aktiv auf dem Rennrad und im Triathlon. Die Kombination aus Sportwissen und Praxis.",
    tags: ["Triathlon", "Rennrad", "Ernährungswissenschaft"],
  },
  {
    initial: "J",
    name: "Jürgen Pfaff",
    role: "Beratung",
    since: "Langjähriger Teil des Teams",
    bio: "Von Kunden regelmäßig namentlich empfohlen — wer einmal von Jürgen Pfaff beraten wurde, kommt wieder. Ruhige, präzise Beratung, die auf den Menschen schaut, nicht auf die Marge.",
    tags: ["Laufanalyse", "Persönliche Beratung"],
  },
];

const milestones = [
  { year: "1984", text: "Gründung durch Dieter Theuermeister am Friedrichsplatz 12 in Kassel" },
  { year: "~1990", text: "Aufbau des Nordic-Walking-Sortiments — als Erste in Kassel" },
  { year: "1994", text: "Erweiterung des Teams: Unser Langer kommt dazu" },
  { year: "2016", text: "Übernahme durch Jürgen Thomas Fried — Kontinuität in der Beratungsphilosophie" },
  { year: "Heute", text: "30+ Jahre Erfahrung, aktiv laufendes Team, Mitglied im Sport2000 Händlerverbund" },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="bg-brand-navy pt-28 pb-20 lg:pt-36 lg:pb-28" data-navbar-theme="dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel variant="light">Über uns</SectionLabel>
          <h1 className="h1 text-white mt-3 max-w-2xl mb-8">
            Wir verkaufen nicht — wir beraten.
          </h1>
          <blockquote className="border-l-2 border-brand-sky pl-6 max-w-2xl">
            <p className="text-white/80 text-lg leading-relaxed italic" style={{ fontFamily: "var(--font-display)" }}>
              „Den richtigen Schuh für deinen Fuß, nicht den meistbewerteten im Test."
            </p>
            <footer className="mt-3 text-brand-sky text-sm font-sans">
              — Jürgen Thomas Fried, Inhaber
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Geschichte */}
      <section className="bg-white py-20 lg:py-28" data-navbar-theme="light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel>Geschichte</SectionLabel>
              <h2 className="h2 text-brand-text mt-2 mb-6">
                Seit 1984 am Friedrichsplatz
              </h2>
              <p className="text-brand-slate leading-relaxed mb-5">
                Dieter Theuermeister eröffnete den Laufladen Kassel 1984 am
                Friedrichsplatz 12 — zu einer Zeit, als Laufsport in Deutschland
                noch eine Nischensportart war. Was als kleines Fachgeschäft
                begann, wurde über die Jahre zur festen Größe für Läufer in
                Kassel und der Region.
              </p>
              <p className="text-brand-slate leading-relaxed mb-5">
                2016 übernahm Jürgen Thomas Fried den Laden. Keine Revolution —
                sondern Kontinuität: Dieselbe Beratungsphilosophie, dasselbe
                engagierte Team, derselbe Anspruch. Was sich geändert hat: ein
                neuer Inhaber, der selbst läuft und weiß, worauf es ankommt.
              </p>
              <p className="text-brand-slate leading-relaxed">
                Die Entscheidung gegen das Laufband und für die Analyse auf dem
                Bürgersteig traf das Team nach Jahren Erfahrung mit beiden
                Methoden. Nicht als Marketing-Gag — sondern weil es schlicht
                ehrlicher und präziser ist.
              </p>
            </div>

            {/* Timeline */}
            <div>
              <div className="space-y-0">
                {milestones.map(({ year, text }, idx) => (
                  <div key={year} className="flex gap-5 pb-8 last:pb-0 relative">
                    {/* Vertikale Linie */}
                    {idx < milestones.length - 1 && (
                      <div className="absolute left-[19px] top-8 bottom-0 w-px bg-brand-tint" aria-hidden="true" />
                    )}
                    {/* Punkt */}
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10 ${idx === milestones.length - 1 ? "bg-brand-navy" : "bg-brand-tint"}`}>
                      <div className={`w-2.5 h-2.5 rounded-full ${idx === milestones.length - 1 ? "bg-brand-sky" : "bg-brand-blue"}`} />
                    </div>
                    <div className="pt-1.5">
                      <p className="text-xs font-semibold text-brand-blue uppercase tracking-[0.08em] mb-1">{year}</p>
                      <p className="text-brand-slate text-sm leading-relaxed">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-brand-bg py-20 lg:py-28" data-navbar-theme="light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionLabel>Das Team</SectionLabel>
            <h2 className="h2 text-brand-text mt-2">
              Berater die selbst laufen
            </h2>
            <p className="text-brand-slate mt-3 max-w-lg leading-relaxed">
              Kein Theoretiker-Staff. Jeder im Team ist aktiv im Laufsport —
              das merkt man in der Beratung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map(({ initial, name, role, since, bio, tags }) => (
              <div
                key={name}
                className="bg-white rounded-2xl border border-brand-tint p-7 hover:border-brand-blue/20 hover:shadow-md transition-all duration-200"
              >
                {/* Avatar */}
                <div className="w-14 h-14 rounded-2xl bg-brand-navy flex items-center justify-center text-white text-xl font-display mb-5"
                  style={{ fontFamily: "var(--font-display)" }}>
                  {initial}
                </div>
                <h3 className="font-semibold text-brand-navy text-lg font-sans mb-0.5">{name}</h3>
                <p className="text-brand-blue text-xs font-semibold uppercase tracking-[0.08em] mb-1">{role}</p>
                <p className="text-brand-muted text-xs mb-4">{since}</p>
                <p className="text-brand-slate text-sm leading-relaxed mb-5">{bio}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Badge key={tag} variant="default">{tag}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extras: Parkticket + Sport2000 */}
      <section className="bg-white py-16" data-navbar-theme="light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Parkticket */}
            <div className="md:col-span-2 flex items-start gap-5 p-6 rounded-2xl bg-brand-cta-light border border-brand-cta/20">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0">
                <Ticket size={22} className="text-brand-cta" />
              </div>
              <div>
                <h3 className="font-semibold text-brand-navy font-sans mb-1.5">
                  Parkticket-Erstattung
                </h3>
                <p className="text-brand-slate text-sm leading-relaxed">
                  Ab 40 € Einkaufswert erstatten wir dein Parkticket bis zu
                  3,00 €. Einfach an der Kasse vorlegen — kein Aufwand, kein
                  Kleingedrucktes.
                </p>
              </div>
            </div>

            {/* Sport2000 */}
            <div className="flex items-start gap-5 p-6 rounded-2xl bg-brand-bg border border-brand-tint">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0">
                <Award size={22} className="text-brand-blue" />
              </div>
              <div>
                <h3 className="font-semibold text-brand-navy font-sans mb-1.5">
                  Sport2000 Händlerverbund
                </h3>
                <p className="text-brand-slate text-sm leading-relaxed">
                  Mitglied im Sport2000 Netzwerk — Zugang zu Marken und
                  Sortimenten, die kleinen Einzelhändlern sonst verwehrt sind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy py-20" data-navbar-theme="dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users size={32} className="text-brand-sky mx-auto mb-5" strokeWidth={1.5} />
          <h2 className="h2 text-white mb-4">Lern uns persönlich kennen</h2>
          <p className="text-white/70 mb-8 max-w-md mx-auto">
            Die beste Beratung passiert im Laden — komm vorbei, ruf an oder
            buch direkt einen Termin für die Laufanalyse.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as="link" href="/beratung" variant="primary" size="lg">
              Laufanalyse anfragen
            </Button>
            <Button as="link" href="/kontakt" variant="ghost" size="lg">
              Kontakt & Anfahrt
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
