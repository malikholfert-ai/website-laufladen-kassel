import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { BookingForm } from "@/components/sections/BookingForm";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { TestimonialCard } from "@/components/sections/TestimonialCard";
import { CheckCircle, Phone } from "lucide-react";

export const metadata: Metadata = createPageMetadata(
  "Laufanalyse & Beratung — Kein Laufband, echter Bürgersteig",
  "Individuelle Laufanalyse auf dem echten Bürgersteig — kostenlos, ohne Laufband. 30+ Jahre Erfahrung. Termin online anfragen oder direkt anrufen: (0561) 10 44 75.",
  "/beratung"
);

const testimonials = [
  {
    quote:
      "Ich bin seit Jahren Kunde und würde nie woanders hingehen. Die Beratung hier ist einfach anders — die wissen wirklich, wovon sie reden. Mein letztes Paar Brooks läuft sich nach 800 km immer noch perfekt.",
    author: "Markus T.",
    detail: "Läufer seit 12 Jahren, Kassel",
  },
  {
    quote:
      "Endlich mal jemand der nicht einfach den teuersten Schuh empfiehlt. Die Analyse auf dem Bürgersteig hat mir die Augen geöffnet — ich hatte nie verstanden, warum meine Knie immer gezickt haben. Nach dem richtigen Schuh: keine Probleme mehr.",
    author: "Sabine R.",
    detail: "Halbmarathon-Läuferin",
  },
  {
    quote:
      "Ich bin Jürgen Pfaff sehr dankbar — er hat sich wirklich Zeit genommen und mich nicht abgewimmelt, obwohl ich kurz vor Feierabend reingekommen bin. Der Schuh passt wie angegossen.",
    author: "Thomas W.",
    detail: "Freizeitläufer, Baunatal",
  },
];

export default function BeratungPage() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="bg-brand-navy pt-28 pb-20 lg:pt-36 lg:pb-28" data-navbar-theme="dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionLabel variant="light">Laufanalyse</SectionLabel>
            <h1 className="hero-headline text-white mt-3 mb-6">
              Kein Algorithmus.
              <br />
              <span className="text-brand-sky">Kein Laufband.</span>
              <br />
              Echte Augen.
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-xl">
              Wir analysieren deinen Laufstil auf dem echten Bürgersteig vor dem
              Laden — kostenlos, persönlich, ohne Terminzwang. Bewusste
              Entscheidung gegen das Laufband, seit über 10 Jahren.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              {[
                "Kostenlos & unverbindlich",
                "Ca. 45 Minuten",
                "Schuhe draußen testen",
                "30+ Jahre Erfahrung",
              ].map((text) => (
                <div key={text} className="flex items-center gap-1.5 text-white/60 text-sm">
                  <CheckCircle size={14} className="text-brand-cta shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prozess */}
      <section className="bg-white py-20 lg:py-28" data-navbar-theme="light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-12">
            <SectionLabel>So läuft es ab</SectionLabel>
            <h2 className="h2 text-brand-text mt-2">
              Vier Schritte zum richtigen Schuh
            </h2>
            <p className="text-brand-slate mt-3 leading-relaxed">
              Kein Zeitdruck, kein Standardprogramm — jede Analyse ist so
              individuell wie dein Laufstil.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <ProcessSteps />
          </div>
        </div>
      </section>

      {/* Buchungsformular */}
      <section className="bg-brand-bg py-20 lg:py-28" data-navbar-theme="light" id="termin">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Links — Text */}
            <div>
              <SectionLabel>Termin anfragen</SectionLabel>
              <h2 className="h2 text-brand-text mt-2 mb-6">
                Wann passt es dir?
              </h2>
              <p className="text-brand-slate leading-relaxed mb-8">
                Füll das Formular aus — wir melden uns innerhalb eines
                Werktages. Du kannst natürlich auch einfach anrufen oder
                direkt vorbeikommen.
              </p>

              {/* Kontakt-Alternativen */}
              <div className="space-y-4">
                <a
                  href="tel:+4956110447-5"
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-brand-tint hover:border-brand-blue/30 hover:shadow-sm transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-tint flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-brand-blue" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-navy text-sm font-sans group-hover:text-brand-blue transition-colors">
                      Direkt anrufen
                    </p>
                    <p className="text-brand-muted text-xs">(0561) 10 44 75</p>
                  </div>
                </a>

                <div className="p-4 bg-brand-cta-light rounded-xl border border-brand-cta/20">
                  <p className="text-brand-cta font-semibold text-sm font-sans">
                    Kein Termin? Auch okay.
                  </p>
                  <p className="text-brand-slate text-xs mt-1 leading-relaxed">
                    Du kannst auch ohne Termin vorbeikommen — wenn gerade
                    jemand frei ist, machen wir die Analyse sofort. Kurz
                    anrufen empfiehlt sich trotzdem.
                  </p>
                </div>
              </div>

              {/* Öffnungszeiten Reminder */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-brand-muted text-xs uppercase tracking-[0.08em] font-semibold mb-3">
                  Öffnungszeiten
                </p>
                <div className="space-y-1.5 text-sm">
                  {[
                    ["Mo – Do", "10:00 – 18:00 Uhr"],
                    ["Freitag", "10:00 – 19:00 Uhr"],
                    ["Samstag", "10:00 – 16:00 Uhr"],
                  ].map(([day, time]) => (
                    <div key={day} className="flex justify-between">
                      <span className="text-brand-slate">{day}</span>
                      <span className="text-brand-navy">{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Rechts — Formular */}
            <div className="bg-white rounded-2xl border border-brand-tint p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-brand-navy font-sans">
                  Terminanfrage
                </h3>
                <Badge variant="cta">Kostenlos</Badge>
              </div>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 lg:py-28" data-navbar-theme="light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="mb-10">
              <SectionLabel>Häufige Fragen</SectionLabel>
              <h2 className="h2 text-brand-text mt-2">
                Alles was du wissen musst
              </h2>
            </div>
            <FAQAccordion />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-brand-bg py-20 lg:py-28" data-navbar-theme="light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel>Kundenstimmen</SectionLabel>
            <h2 className="h2 text-brand-text mt-2">
              Was unsere Kunden sagen
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.author} {...t} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
