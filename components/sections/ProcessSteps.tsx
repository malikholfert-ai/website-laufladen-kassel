const steps = [
  {
    nr: "01",
    title: "Alte Schuhe mitbringen",
    description:
      "Deine alten Laufschuhe erzählen uns deine Laufgeschichte. Das Abnutzungsmuster zeigt uns mehr über deinen Laufstil als jede Befragung — wo du belastest, wie du abrollst, ob Überpronation vorliegt.",
    aside: "Empfohlen: Laufschuhe der letzten 1–2 Jahre",
  },
  {
    nr: "02",
    title: "Analyse auf dem Bürgersteig",
    description:
      "Wir beobachten dich beim Laufen draußen vor dem Laden — auf dem echten Bürgersteig, unter deinen echten Bedingungen. Kein Laufband, kein Labor, kein Algorithmus. Geschulte Augen, die den Unterschied sehen.",
    aside: "Kein Laufband — bewusste Entscheidung",
  },
  {
    nr: "03",
    title: "Individuelle Beratung",
    description:
      "Wir beraten nach deinem Gewicht, deinem Laufstil und deinen Zielen — nicht nach Bestseller-Listen oder Testergebnissen. Was für den einen richtig ist, passt dem anderen überhaupt nicht.",
    aside: "Kein Einheitsschuh, kein Upselling",
  },
  {
    nr: "04",
    title: "Draußen testen",
    description:
      "Jeden Kandidaten testest du auf der echten Strecke vor dem Laden — bevor du entscheidest. Ein Schuh muss sich auf Asphalt beweisen, nicht auf Teppich. Nur wenn er sich richtig anfühlt, kaufst du ihn.",
    aside: "Auf echter Strecke, vor der Tür",
  },
];

export function ProcessSteps() {
  return (
    <div className="space-y-0">
      {steps.map(({ nr, title, description, aside }) => (
        <div
          key={nr}
          className="grid grid-cols-[48px_1fr] lg:grid-cols-[64px_1fr_220px] gap-5 lg:gap-8 py-8 border-b border-brand-border last:border-0"
        >
          {/* Nummer */}
          <div className="pt-1">
            <span
              className="block text-2xl lg:text-3xl leading-none text-brand-muted font-display font-bold"
            >
              {nr}
            </span>
          </div>

          {/* Inhalt */}
          <div>
            <h3 className="h3 text-brand-midnight mb-2">
              {title}
            </h3>
            <p className="text-brand-slate text-sm leading-relaxed">
              {description}
            </p>
          </div>

          {/* Aside — nur Desktop */}
          <div className="hidden lg:flex items-start pt-1">
            <span className="inline-block px-3 py-1.5 bg-brand-surface rounded-lg text-brand-muted text-xs font-sans leading-snug border border-brand-border">
              {aside}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
