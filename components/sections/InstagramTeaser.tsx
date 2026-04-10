import Link from "next/link";
import { ArrowRight } from "lucide-react";

/** Instagram SVG — lucide-react v1 hat dieses Icon entfernt */
function InstagramIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}
import { SectionLabel } from "@/components/ui/SectionLabel";

const placeholderPosts = [
  {
    id: 1,
    alt: "Neue Kollektion ON Running",
    bgColor: "bg-brand-tint",
    label: "Neue Modelle",
  },
  {
    id: 2,
    alt: "Laufanalyse Bürgersteig",
    bgColor: "bg-brand-bg",
    label: "Laufanalyse",
  },
  {
    id: 3,
    alt: "Team Laufladen Kassel",
    bgColor: "bg-brand-tint",
    label: "Team",
  },
  {
    id: 4,
    alt: "Brooks Frühjahrskollektion",
    bgColor: "bg-brand-bg",
    label: "Brooks SS25",
  },
  {
    id: 5,
    alt: "Nordic Walking Stöcke Exel",
    bgColor: "bg-brand-tint",
    label: "Nordic Walking",
  },
  {
    id: 6,
    alt: "Asics Trailrunning",
    bgColor: "bg-brand-bg",
    label: "Trail",
  },
];

export function InstagramTeaser() {
  return (
    <section
      className="bg-white py-20 lg:py-28"
      data-navbar-theme="light"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 reveal">
          <div>
            <SectionLabel>Social Media</SectionLabel>
            <h2 className="h2 text-brand-text">
              Immer aktuell:{" "}
              <span className="text-brand-blue">@laufladen_kassel</span>
            </h2>
          </div>
          <a
            href="https://www.instagram.com/laufladen_kassel"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-brand-blue hover:text-brand-navy font-semibold text-sm transition-colors group shrink-0"
            aria-label="Laufladen Kassel auf Instagram folgen"
          >
            <InstagramIcon size={18} />
            <span>Folgen</span>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 reveal-group">
          {placeholderPosts.map(({ id, alt, bgColor, label }) => (
            <a
              key={id}
              href="https://www.instagram.com/laufladen_kassel"
              target="_blank"
              rel="noopener noreferrer"
              className="reveal group relative aspect-square rounded-xl overflow-hidden"
              aria-label={`Instagram Post: ${alt}`}
            >
              {/* Platzhalter bis echte Instagram-Bilder eingebunden */}
              <div
                className={`w-full h-full ${bgColor} flex items-center justify-center`}
              >
                <div className="text-center">
                  <InstagramIcon
                    size={24}
                    className="text-brand-blue/40 mx-auto mb-2"
                  />
                  <p className="text-brand-muted text-xs">{label}</p>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/40 transition-colors duration-200 flex items-center justify-center">
                <InstagramIcon
                  size={28}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                />
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-8 reveal">
          <p className="text-brand-muted text-sm">
            Folge uns auf Instagram für aktuelle Neuheiten, Tipps und Einblicke
            aus dem Laden.
          </p>
        </div>
      </div>
    </section>
  );
}
