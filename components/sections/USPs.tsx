import { Footprints, Clock, Users } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const usps = [
  {
    icon: Footprints,
    title: "Laufanalyse vor Ort",
    description:
      "Kein Laufband, kein Labor. Wir analysieren deinen Laufstil auf dem echten Bürgersteig vor dem Laden — unter denselben Bedingungen, unter denen du später läufst.",
  },
  {
    icon: Clock,
    title: "30+ Jahre Erfahrung",
    description:
      "Seit 1984 im Laufsport. Unser Team läuft selbst aktiv — kein Theoretiker-Staff, sondern Berater die wissen, worüber sie sprechen.",
  },
  {
    icon: Users,
    title: "Persönliche Beratung",
    description:
      "Kein Algorithmus, keine Bestseller-Liste. Wir beraten nach deinem Gewicht, deinem Laufstil und deinen Zielen — und du testest jeden Schuh draußen.",
  },
];

export function USPs() {
  return (
    <section
      className="bg-brand-bg py-20 lg:py-28"
      data-navbar-theme="light"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <SectionLabel>Unsere Stärken</SectionLabel>
          <h2 className="h2 text-brand-text">
            Was uns von anderen unterscheidet
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal-group">
          {usps.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="reveal bg-white rounded-2xl p-8 border border-brand-tint hover:border-brand-blue/20 hover:shadow-md transition-all duration-200"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-tint mb-6">
                <Icon size={22} className="text-brand-blue" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-brand-text font-sans mb-3">
                {title}
              </h3>
              <p className="text-brand-slate text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
