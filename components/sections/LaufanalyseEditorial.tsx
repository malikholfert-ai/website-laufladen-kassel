const schritte = [
  { nr: "01", text: "Alte Schuhe mitbringen" },
  { nr: "02", text: "Laufstil-Analyse draußen" },
  { nr: "03", text: "Individuelle Beratung" },
  { nr: "04", text: "Schuhe draußen testen" },
];

export function LaufanalyseEditorial() {
  return (
    <section className="bg-white py-24 lg:py-32" data-navbar-theme="light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Text-Seite */}
          <div className="lg:col-span-7">
            <p className="text-brand-orange text-xs font-display uppercase tracking-[0.2em] mb-4">
              Unsere Methode
            </p>
            <h2 className="h1 text-brand-text mb-6">Kein Laufband.</h2>
            <p className="text-brand-slate text-lg leading-relaxed mb-4 font-light">
              Wir haben zehn Jahre mit Laufbandanalysen gearbeitet — und uns dann
              bewusst dagegen entschieden. Das Laufband verfälscht dein natürliches
              Laufverhalten.
            </p>
            <p className="text-brand-slate leading-relaxed mb-8">
              Wir analysieren draußen, auf dem Bürgersteig vor dem Laden.
              Dein Laufstil, unter deinen echten Bedingungen.
            </p>
            <a
              href="/beratung"
              className="inline-flex items-center gap-2 text-brand-electric font-sans font-medium text-sm hover:underline underline-offset-4"
            >
              Wie es funktioniert →
            </a>
          </div>

          {/* Prozess-Schritte */}
          <div className="lg:col-span-5">
            {schritte.map(({ nr, text }) => (
              <div
                key={nr}
                className="flex items-center gap-4 py-4 border-b border-brand-border last:border-0"
              >
                <span className="font-display font-bold text-brand-muted text-lg w-8 shrink-0">
                  {nr}
                </span>
                <span className="text-brand-text font-sans font-medium text-sm">
                  {text}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
