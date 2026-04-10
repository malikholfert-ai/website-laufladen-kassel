const stats = [
  { num: "40+", label: "Jahre Erfahrung" },
  { num: "12",  label: "Top-Marken" },
  { num: "0€",  label: "Laufanalyse kostet" },
  { num: "1",   label: "Standort Kassel" },
];

export function StatsStrip() {
  return (
    <section className="bg-brand-electric py-4" data-navbar-theme="dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between gap-6 text-white">
          {stats.map(({ num, label }) => (
            <div key={label} className="flex items-baseline gap-2">
              <span className="stats-num text-2xl">{num}</span>
              <span className="text-white/70 text-sm font-sans">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
