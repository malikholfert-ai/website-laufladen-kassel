export function Hero() {
  return (
    <section
      className="relative bg-brand-midnight min-h-[85vh] flex items-end pb-16 lg:pb-24 overflow-hidden"
      data-navbar-theme="dark"
    >
      {/* Diagonale Akzentlinie */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute top-0 h-full w-px bg-brand-electric/15"
          style={{ right: "20%" }}
        />
        <div className="absolute bottom-0 left-0 w-full h-px bg-brand-electric/10" />
      </div>

      {/* Hintergrund-Verlauf */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 80% 20%, rgba(59,130,246,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <p className="text-brand-orange text-xs font-display uppercase tracking-[0.2em] mb-4">
          Friedrichsplatz 12 · Kassel · seit 1984
        </p>
        <h1 className="display-xl text-white mb-6 max-w-4xl">
          Dein Laufschuh.<br />
          <span className="text-brand-electric">Gefunden.</span>
        </h1>
        <p className="text-white/60 text-lg max-w-xl mb-10 font-sans font-light leading-relaxed">
          Individuelle Laufanalyse auf dem Bürgersteig. Kein Laufband,
          kein Algorithmus. 40 Jahre Erfahrung.
        </p>
        <a
          href="/laufschuhe"
          className="inline-flex items-center gap-2 text-white/70 hover:text-white font-sans text-sm font-medium transition-colors group"
        >
          Sortiment entdecken
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </section>
  );
}
