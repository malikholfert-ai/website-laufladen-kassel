const kategorien = [
  {
    title: "Straßen-\nlaufen",
    sub: "Asphalt, Park, Wettkampf",
    href: "/laufschuhe",
    accent: "bg-brand-blue-tint",
    accentText: "text-brand-electric",
  },
  {
    title: "Trail-\nrunning",
    sub: "Wald, Gelände, Off-Road",
    href: "/laufschuhe",
    accent: "bg-brand-orange-bg",
    accentText: "text-brand-orange",
  },
  {
    title: "Nordic\nWalking",
    sub: "Exel & Leki, Beratung",
    href: "/nordic-walking",
    accent: "bg-brand-surface",
    accentText: "text-brand-midnight",
  },
  {
    title: "Leicht-\nathletik",
    sub: "Spike-Schuhe, Vereine",
    href: "/laufschuhe",
    accent: "bg-brand-surface",
    accentText: "text-brand-midnight",
  },
];

export function Kategorien() {
  return (
    <section className="bg-brand-surface py-16 lg:py-20" data-navbar-theme="light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-brand-muted text-xs font-display uppercase tracking-[0.2em] mb-2">
            Sortiment
          </p>
          <h2 className="h2 text-brand-text">Vier Disziplinen.</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {kategorien.map(({ title, sub, href, accent, accentText }) => (
            <a
              key={title}
              href={href}
              className={`group flex flex-col justify-between p-6 rounded-2xl border border-brand-border hover:border-brand-electric/30 hover:shadow-md transition-all duration-200 min-h-[160px] ${accent}`}
            >
              <h3
                className={`h2 leading-tight mb-4 ${accentText}`}
                style={{ whiteSpace: "pre-line" }}
              >
                {title}
              </h3>
              <div className="flex items-center justify-between">
                <p className="text-brand-slate text-xs font-sans">{sub}</p>
                <span className="text-brand-muted group-hover:text-brand-electric group-hover:translate-x-1 transition-all text-sm">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
