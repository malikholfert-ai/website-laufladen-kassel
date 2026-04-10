@AGENTS.md

# Laufladen Kassel — KOMPLETT-REDESIGN v2

## Warum ein Redesign?

Die v1 hat mehrere systematische Fehler:
- Grüner CTA-Button wirkt wie Apotheke, nicht wie Laufspezialist
- DM Serif Display = Anwaltskanzlei-Energie, kein Sport
- Navy-Monochromatik: kein visueller Akzent, keine Spannung
- CTA "Termin buchen" auf jeder Seite = aggressiver als ein Callcenter
- Instagram-Section mit 6 grauen Platzhalter-Boxen = kaputt wirkend
- Hero zu statisch: Laufen = Bewegung, der Hero hat null Energie

---

## Neues Design System (verbindlich)

### Farben — globals.css komplett ersetzen

```css
@theme {
  /* Neues Farbsystem — Swiss Modernism + Trust & Authority */
  --color-brand-midnight:   #0F172A;  /* Primär — Navbar, Hero-BG, dunkle Sektionen */
  --color-brand-ink:        #1E3A5F;  /* Sekundär — Cards auf dunklem BG, Hover */
  --color-brand-electric:   #3B82F6;  /* CTA — Buttons, Links, Akzente (KEIN GRÜN MEHR) */
  --color-brand-blue-tint:  #DBEAFE;  /* Hover-BG, Badge-BG */
  --color-brand-surface:    #F8FAFC;  /* Sektionshintergründe hell */
  --color-brand-border:     #E2E8F0;  /* Borders auf hellem BG */
  --color-brand-orange:     #F97316;  /* Akzent NUR für: Laufanalyse-Badge, Zahl-Highlights */
  --color-brand-orange-bg:  #FFF7ED;  /* Orange-Tint Background */
  --color-brand-text:       #0F172A;  /* Headlines auf hellem BG */
  --color-brand-slate:      #475569;  /* Body Text */
  --color-brand-muted:      #94A3B8;  /* Labels, Captions */
  --color-brand-white:      #FFFFFF;

  /* Typografie — BARLOW statt DM Serif */
  --font-display: "Barlow Condensed", "Arial Narrow", sans-serif;
  --font-sans:    "Barlow", system-ui, sans-serif;
}
```

### Fonts laden (layout.tsx)

```tsx
import { Barlow_Condensed, Barlow } from 'next/font/google';

const barlowCondensed = Barlow_Condensed({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const barlow = Barlow({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});
```

### Typografie-Skala (globals.css)

```css
/* Display: Barlow Condensed Bold Uppercase — das ist die neue Marken-Stimme */
.display-xl {
  font-family: var(--font-display);
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 700;
  line-height: 1.0;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

/* H1: condensed, groß */
.h1 {
  font-family: var(--font-display);
  font-size: clamp(2.25rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: 0.01em;
  text-transform: uppercase;
}

/* H2: condensed, mittel */
.h2 {
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 600;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 0.01em;
}

/* H3: sans, semibold — Barlow Regular */
.h3 {
  font-family: var(--font-sans);
  font-size: clamp(1.1rem, 2vw, 1.35rem);
  font-weight: 600;
  line-height: 1.4;
}

/* Stats: Tabular, monospaced-ähnlich */
.stats-num {
  font-family: var(--font-display);
  font-variant-numeric: tabular-nums;
  font-weight: 800;
  letter-spacing: -0.02em;
}
```

---

## Button.tsx — komplett neu (kein Grün)

```tsx
const variantClasses = {
  /** Electric Blue — primäre Aktionen */
  primary: "bg-brand-electric text-white hover:bg-blue-600 active:scale-95 shadow-sm",
  /** Outline Midnight — sekundäre Aktionen auf hellem BG */
  secondary: "border border-brand-electric text-brand-electric hover:bg-brand-blue-tint",
  /** Ghost White — auf dunklem BG (Midnight/Ink) */
  ghost: "border border-white/30 text-white hover:border-white/70 hover:bg-white/10",
  /** Ghost Dark — auf hellem BG, dezent */
  quiet: "text-brand-slate hover:text-brand-midnight underline-offset-4 hover:underline",
};
```

**Kein grüner Button mehr, nirgends.**

---

## Startseite — neue Sektionen

### Sektion 1: Hero — Statement

Kein Split-Layout mehr. Fullwidth, Midnight-BG.

```tsx
<section className="relative bg-brand-midnight min-h-[85vh] flex items-end pb-16 lg:pb-24 overflow-hidden">
  {/* Dünne diagonale Akzentlinie als Hintergrund-Detail */}
  {/* Große Condensed Headline */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
    <p className="text-brand-orange text-xs font-display uppercase tracking-[0.2em] mb-4">
      Friedrichsplatz 12 · Kassel · seit 1984
    </p>
    <h1 className="display-xl text-white mb-6 max-w-4xl">
      Dein Laufschuh.<br/>
      <span className="text-brand-electric">Gefunden.</span>
    </h1>
    <p className="text-white/60 text-lg max-w-xl mb-10 font-sans font-light">
      Individuelle Laufanalyse auf dem Bürgersteig. Kein Laufband,
      kein Algorithmus. 40 Jahre Erfahrung.
    </p>
    {/* NUR ein CTA — klein, kein Schreien */}
    <a href="/laufschuhe"
       className="inline-flex items-center gap-2 text-white/80 hover:text-white font-sans text-sm font-medium transition-colors group">
      Sortiment entdecken
      <span className="group-hover:translate-x-1 transition-transform">→</span>
    </a>
  </div>
</section>
```

### Sektion 2: Stats Strip

```tsx
<section className="bg-brand-electric py-4" data-navbar-theme="dark">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-wrap justify-between gap-6 text-white">
      {[
        { num: '40+', label: 'Jahre Erfahrung' },
        { num: '12', label: 'Top-Marken' },
        { num: '0€', label: 'Laufanalyse kostet' },
        { num: '1', label: 'Standort Kassel' },
      ].map(({ num, label }) => (
        <div key={label} className="flex items-baseline gap-2">
          <span className="stats-num text-2xl">{num}</span>
          <span className="text-white/70 text-sm font-sans">{label}</span>
        </div>
      ))}
    </div>
  </div>
</section>
```

### Sektion 3: Laufanalyse — Editorial

```tsx
<section className="bg-white py-24 lg:py-32" data-navbar-theme="light">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-7">
        {/* Orange Akzent-Label */}
        <p className="text-brand-orange text-xs font-display uppercase tracking-[0.2em] mb-4">Unsere Methode</p>
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
        {/* Quiet Link statt großem Button */}
        <a href="/beratung" className="inline-flex items-center gap-2 text-brand-electric font-sans font-medium text-sm hover:underline">
          Wie es funktioniert →
        </a>
      </div>
      <div className="lg:col-span-5">
        {/* 4 Prozess-Schritte kompakt */}
        {[
          { nr: '01', text: 'Alte Schuhe mitbringen' },
          { nr: '02', text: 'Laufstil-Analyse draußen' },
          { nr: '03', text: 'Individuelle Beratung' },
          { nr: '04', text: 'Schuhe draußen testen' },
        ].map(({ nr, text }) => (
          <div key={nr} className="flex items-center gap-4 py-4 border-b border-brand-border last:border-0">
            <span className="font-display font-700 text-brand-muted text-lg w-8 shrink-0">{nr}</span>
            <span className="text-brand-text font-sans font-medium text-sm">{text}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
```

### Sektion 4: Marken — Auto-Scroll Strip

```tsx
// globals.css hinzufügen:
// @keyframes scroll-brands {
//   0% { transform: translateX(0); }
//   100% { transform: translateX(-50%); }
// }
// .brands-track { animation: scroll-brands 20s linear infinite; }

<section className="bg-brand-midnight py-12 overflow-hidden" data-navbar-theme="dark">
  <div className="flex">
    <div className="brands-track flex gap-16 items-center whitespace-nowrap">
      {/* Brands doppelt für nahtloses Looping */}
      {[...brands, ...brands].map((b, i) => (
        <span key={i} className="text-white/30 hover:text-white/70 transition-colors font-display font-600 text-xl uppercase tracking-widest">{b}</span>
      ))}
    </div>
  </div>
</section>
```

### Sektion 5: Kategorien — 4 große Kacheln

```tsx
const kategorien = [
  { title: 'Straßen-laufen', sub: 'Asphalt, Park, Wettkampf', href: '/laufschuhe#strasse', accent: 'bg-brand-blue-tint' },
  { title: 'Trail-running', sub: 'Wald, Gelände, Off-Road', href: '/laufschuhe#trail', accent: 'bg-brand-orange-bg' },
  { title: 'Nordic Walking', sub: 'Exel & Leki, Beratung', href: '/nordic-walking', accent: 'bg-brand-surface' },
  { title: 'Leicht-athletik', sub: 'Spike-Schuhe, Vereine', href: '/laufschuhe#la', accent: 'bg-brand-surface' },
];
// 2x2 Grid, jede Kachel mit Bild-Placeholder, Titel H2-condensed, Subtext, Link
```

### Sektion 6: Öffnungszeiten — kompakt (2-Spalten, kein Maps)

```tsx
// Links: Zeiten-Tabelle (wie bisher, aber Highlight = brand-electric statt brand-cta)
// Rechts: 3 Kontakt-Kacheln (Telefon, Mail, Adresse) + Parkticket-Info
// Kein Google Maps Embed — das gehört auf /kontakt
```

### Sektion 7: Testimonial-Banner (statt Instagram-Grid)

```tsx
<section className="bg-brand-midnight py-24" data-navbar-theme="dark">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <p className="text-brand-orange text-xs font-display uppercase tracking-[0.2em] mb-8">Was Kunden sagen</p>
    <blockquote className="h1 text-white mb-6">
      "Der Schuh passt wie angegossen."
    </blockquote>
    <p className="text-white/50 text-sm">— Thomas W., Freizeitläufer aus Baunatal</p>
  </div>
</section>
```

---

## Navbar.tsx — Anpassungen

- Scrolled BG: `bg-brand-midnight/95` statt `bg-brand-navy/95`
- Kein "Termin buchen"-Button in der Nav
- Logo-Text: Barlow Condensed Bold Uppercase statt serif
- Links: weißer Text auf dunklem BG, `brand-slate` auf hellem BG

---

## Alle Unterseiten-Heroes — neues Muster

```tsx
// Einheitlich für /laufschuhe, /beratung, /team, /nordic-walking, /kontakt:
<section className="bg-brand-midnight pt-28 pb-16" data-navbar-theme="dark">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <p className="text-brand-orange text-xs font-display uppercase tracking-[0.2em] mb-4">{category}</p>
    <h1 className="h1 text-white max-w-2xl">{title}</h1>
    <p className="text-white/60 mt-4 max-w-xl leading-relaxed">{subtitle}</p>
    {/* NUR auf /beratung: CTA Button */}
  </div>
</section>
```

**Kein CTA auf Seiten-Heroes außer /beratung.**

---

## Reihenfolge der Umsetzung

1. `app/globals.css` — Tokens + Fonts + Utility-Klassen komplett ersetzen
2. `app/layout.tsx` — Barlow Condensed + Barlow laden
3. `components/ui/Button.tsx` — Varianten neu, kein Grün
4. `components/layout/Navbar.tsx` — Midnight-BG, kein Termin-Button
5. `app/page.tsx` — Alle 7 Sektionen neu schreiben
6. `components/sections/Hero.tsx` — neu
7. `components/sections/StatsStrip.tsx` — neu
8. `components/sections/LaufanalyseEditorial.tsx` — ersetzt LaufanalyseTeaser
9. `components/sections/BrandScroll.tsx` — ersetzt BrandLogos
10. `components/sections/Kategorien.tsx` — neu
11. `components/sections/Oeffnungszeiten.tsx` — brand-electric statt brand-cta, Maps raus
12. `components/sections/TestimonialBanner.tsx` — ersetzt InstagramTeaser
13. Alle 5 Unterseiten-Heroes anpassen
14. `npm run build` — TypeScript-Fehler beheben

---

## Was NICHT geändert wird

- Seitenstruktur (6 Seiten + Legal bleiben)
- `ContactForm.tsx` — bleibt
- `BookingForm.tsx` — bleibt (auf /beratung)
- `FAQAccordion.tsx` — bleibt
- `ProcessSteps.tsx` — bleibt
- Alle Server Actions (actions.ts)
- SEO / Metadata
- Legal Pages
- Security Headers

---

## Kontext

- Stack: Next.js 16.2, React 19, TypeScript strict, Tailwind v4 (@theme in globals.css)
- Tailwind v4: KEIN tailwind.config.ts, alle Tokens in globals.css @theme
- Kunde: Jürgen Thomas Fried · kassel@laufladen.de · (0561) 10 44 75

**START: globals.css zuerst. Dann layout.tsx. Dann Button.tsx. Dann in der Reihenfolge oben. Vollständige Files. Keine Trunkierungen.**


## Projektstand

Stack: Next.js 16.2 · React 19 · TypeScript strict · Tailwind v4 (`@theme` in `app/globals.css`, **kein** `tailwind.config.ts`) · Resend · Vercel

**7/8 Seiten fertig.** Einzige offene Seite: `app/kontakt/page.tsx` — nur Hero, Rest Placeholder.

Alle Komponenten die du brauchst **existieren bereits**:
- `components/sections/ContactForm.tsx` — `"use client"`, react-hook-form + zod + honeypot
- `app/kontakt/actions.ts` — `submitContact()` Server Action fertig
- `components/ui/Button.tsx` — `variant="primary|secondary|ghost"`, `as="link" href="..."` oder `as="button"`
- `components/ui/SectionLabel.tsx` — `variant="default|light"`
- `components/ui/Badge.tsx` — `variant="default|cta|navy|outline"`
- `lib/utils.ts` — `getTodayIndex()` gibt `new Date().getDay()` zurück (0=So, 1=Mo...6=Sa)

---

## Aufgabe 1 — Kontakt-Seite vollständig bauen

### Schritt A: neue Datei `components/sections/OeffnungszeitenTabelle.tsx`

Client Component. Zeigt Öffnungszeiten-Tabelle mit aktuellem Tag hervorgehoben + Geöffnet/Geschlossen-Badge + Parkticket-Box.

```tsx
"use client";
import { getTodayIndex } from "@/lib/utils";
import { Ticket } from "lucide-react";

const ZEITEN = [
  { label: "Montag",     time: "10:00 – 18:00 Uhr", day: 1 },
  { label: "Dienstag",   time: "10:00 – 18:00 Uhr", day: 2 },
  { label: "Mittwoch",   time: "10:00 – 18:00 Uhr", day: 3 },
  { label: "Donnerstag", time: "10:00 – 18:00 Uhr", day: 4 },
  { label: "Freitag",    time: "10:00 – 19:00 Uhr", day: 5 },
  { label: "Samstag",    time: "10:00 – 16:00 Uhr", day: 6 },
  { label: "Sonntag",    time: "Geschlossen",         day: 0 },
];

function isOpen(day: number): boolean {
  const t = new Date().getHours() * 60 + new Date().getMinutes();
  if (day === 0) return false;
  if (day === 5) return t >= 600 && t < 1140;
  if (day === 6) return t >= 600 && t < 960;
  return t >= 600 && t < 1080;
}

export function OeffnungszeitenTabelle() {
  const today = getTodayIndex();
  const offen = isOpen(today);
  return (
    <div>
      <div className="mb-4">
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-sans ${
          offen ? "bg-brand-cta-light text-brand-cta border border-brand-cta/20" : "bg-brand-bg text-brand-muted border border-brand-tint"
        }`}>
          <span className={`w-1.5 h-1.5 rounded-full ${offen ? "bg-brand-cta" : "bg-brand-muted"}`} />
          {offen ? "Jetzt geöffnet" : "Aktuell geschlossen"}
        </span>
      </div>
      <div className="bg-white rounded-2xl border border-brand-tint overflow-hidden">
        {ZEITEN.map(({ label, time, day }) => {
          const isToday = day === today;
          return (
            <div key={day} className={`flex justify-between items-center px-5 py-3.5 border-b border-brand-tint last:border-0 ${
              isToday ? "bg-brand-cta-light" : ""
            }`}>
              <span className={`text-sm font-sans ${isToday ? "text-brand-navy font-semibold" : "text-brand-slate"}`}>
                {label}
                {isToday && <span className="ml-2 text-[10px] uppercase tracking-[0.08em] text-brand-cta font-semibold">Heute</span>}
              </span>
              <span className={`text-sm font-sans ${isToday ? "text-brand-navy font-semibold" : "text-brand-navy"}`}>
                {time}
              </span>
            </div>
          );
        })}
      </div>
      <div className="mt-4 flex items-start gap-3 p-4 rounded-xl bg-brand-cta-light border border-brand-cta/20">
        <Ticket size={18} className="text-brand-cta shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-semibold text-brand-navy font-sans">Parkticket-Erstattung</p>
          <p className="text-xs text-brand-slate mt-1 leading-relaxed">
            Ab 40 € Einkaufswert erstatten wir dein Parkticket bis zu 3,00 €.
            Parkhaus Friedrichsplatz — erste Stunde kostenlos mit Parkkarte.
          </p>
        </div>
      </div>
    </div>
  );
}
```

### Schritt B: `app/kontakt/page.tsx` vollständig ersetzen

Server Component. Importiert `OeffnungszeitenTabelle` und `ContactForm`. Sektionen:
1. Hero (bereits vorhanden — behalten, leicht erweitern)
2. 3 Kontakt-Kacheln: Telefon (`tel:+4956110447-5`), E-Mail (`mailto:kassel@laufladen.de`), Adresse
3. Google Maps Embed + OeffnungszeitenTabelle (2-Spalten-Grid)
4. Kontaktformular (2-Spalten: Erklärungs-Text links, `<ContactForm />` in white card rechts)
5. Anfahrt (echter Text aus laufladen.de) + 2 Parkinfo-Kacheln nebeneinander
6. Social CTA auf brand-navy: Instagram @laufladen_kassel + Button ghost Laufanalyse

Google Maps iframe src:
```
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2476.8!2d9.47972!3d51.31268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bb0aa9c73f0f73%3A0x0!2sFriedrichsplatz%2012%2C%2034117%20Kassel!5e0!3m2!1sde!2sde!4v1700000000000
```

Anfahrtstext (wörtlich):
```
Auswärtige bevorzugen die BAB-Abfahrt „Kassel-Auestadion" der A 49.
In Richtung Innenstadt an der ersten großen Kreuzung rechts in die
Frankfurter Straße einbiegen, Beschilderung Parkhaus „Friedrichsplatz"
folgen (ca. 2 km geradeaus). Nach ca. 400 m Berg weiter geradeaus,
an der nächsten Ampel links oder ins Parkhaus abbiegen.
Gegenüber: Museum Friedericianum. Schräg gegenüber: Staatstheater Kassel.
```

Metadata:
```tsx
export const metadata: Metadata = createPageMetadata(
  "Kontakt & Anfahrt — Laufladen Kassel",
  "Laufladen Kassel am Friedrichsplatz 12, 34117 Kassel. Tel: (0561) 10 44 75. Öffnungszeiten, Google Maps, Anfahrt und Kontaktformular.",
  "/kontakt"
);
```

**Hinweis Icons:** Prüfe ob `Ticket`, `Navigation2` in lucide-react v1.7 existieren. Falls nicht: `Tag` statt `Ticket`, `Navigation` statt `Navigation2`.

---

## Aufgabe 2 — Build

```bash
cd /Users/malikholfert/projects/website-laufladen-kassel && npm run build
```

Tailwind v4: keine tailwind.config.ts — alle brand-* Tokens kommen aus `app/globals.css` @theme.
`OeffnungszeitenTabelle` ist `"use client"` — `page.tsx` bleibt Server Component.
Zeige vollständigen Build-Output.

---

## Aufgabe 3 — Git Push

```bash
cd /Users/malikholfert/projects/website-laufladen-kassel
git init
git add .
git commit -m "feat: complete website — 8 Seiten, Legal, Formulare, Laufanalyse"
git branch -M main
git remote add origin https://github.com/malikholfert-ai/website-laufladen-kassel.git
git push -u origin main
```

Falls remote bereits gesetzt: `git remote set-url origin https://github.com/malikholfert-ai/website-laufladen-kassel.git`

---

## Aufgabe 4 — Public-Ordner

```bash
mkdir -p /Users/malikholfert/projects/website-laufladen-kassel/public/images
```

Erstelle `public/images/README.md` mit Tabelle: hero-laufladen.jpg (800×600), og-image.jpg (1200×630), team-*.jpg (400×400).

---

## Vercel Env Vars (nach Deploy setzen)

```
RESEND_API_KEY=re_...
CONTACT_EMAIL=kassel@laufladen.de
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=laufladen.de
```

---

## Kontext

- `brand-navy` #1A3F6F · `brand-cta` #2E7D32 (nur primäre Buttons)
- Fonts: DM Serif Display (Headlines) · Plus Jakarta Sans (Body)
- Kunde: Jürgen Thomas Fried · kassel@laufladen.de · (0561) 10 44 75 · Friedrichsplatz 12, 34117 Kassel
- GitHub: https://github.com/malikholfert-ai/website-laufladen-kassel.git

**START: Aufgabe 1 zuerst. Vollständige Files. Keine Trunkierungen.**

# Laufladen Kassel — Nächste Aufgabe: Kontakt-Seite + Build + Git Push

## Projektstand

Stack: Next.js 16.2 · React 19 · TypeScript strict · Tailwind v4 (`@theme` in `app/globals.css`, **kein** `tailwind.config.ts`) · Resend · Vercel

**7/8 Seiten fertig.** Einzige offene Seite: `app/kontakt/page.tsx` — nur Hero, Rest Placeholder.

Alle Komponenten die du brauchst **existieren bereits**:
- `components/sections/ContactForm.tsx` — `"use client"`, react-hook-form + zod + honeypot
- `app/kontakt/actions.ts` — `submitContact()` Server Action fertig
- `components/ui/Button.tsx` — `variant="primary|secondary|ghost"`, `as="link" href="..."` oder `as="button"`
- `components/ui/SectionLabel.tsx` — `variant="default|light"`
- `components/ui/Badge.tsx` — `variant="default|cta|navy|outline"`
- `lib/utils.ts` — `getTodayIndex()` gibt `new Date().getDay()` zurück (0=So, 1=Mo...6=Sa)

---

## Aufgabe 1 — Kontakt-Seite vollständig bauen

### Schritt A: neue Datei `components/sections/OeffnungszeitenTabelle.tsx`

Client Component. Zeigt Öffnungszeiten-Tabelle mit aktuellem Tag hervorgehoben + Geöffnet/Geschlossen-Badge + Parkticket-Box.

```tsx
"use client";
import { getTodayIndex } from "@/lib/utils";
import { Ticket } from "lucide-react";

const ZEITEN = [
  { label: "Montag",     time: "10:00 – 18:00 Uhr", day: 1 },
  { label: "Dienstag",   time: "10:00 – 18:00 Uhr", day: 2 },
  { label: "Mittwoch",   time: "10:00 – 18:00 Uhr", day: 3 },
  { label: "Donnerstag", time: "10:00 – 18:00 Uhr", day: 4 },
  { label: "Freitag",    time: "10:00 – 19:00 Uhr", day: 5 },
  { label: "Samstag",    time: "10:00 – 16:00 Uhr", day: 6 },
  { label: "Sonntag",    time: "Geschlossen",         day: 0 },
];

function isOpen(day: number): boolean {
  const t = new Date().getHours() * 60 + new Date().getMinutes();
  if (day === 0) return false;
  if (day === 5) return t >= 600 && t < 1140;
  if (day === 6) return t >= 600 && t < 960;
  return t >= 600 && t < 1080;
}

export function OeffnungszeitenTabelle() {
  const today = getTodayIndex();
  const offen = isOpen(today);
  return (
    <div>
      <div className="mb-4">
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-sans ${
          offen ? "bg-brand-cta-light text-brand-cta border border-brand-cta/20" : "bg-brand-bg text-brand-muted border border-brand-tint"
        }`}>
          <span className={`w-1.5 h-1.5 rounded-full ${offen ? "bg-brand-cta" : "bg-brand-muted"}`} />
          {offen ? "Jetzt geöffnet" : "Aktuell geschlossen"}
        </span>
      </div>
      <div className="bg-white rounded-2xl border border-brand-tint overflow-hidden">
        {ZEITEN.map(({ label, time, day }) => {
          const isToday = day === today;
          return (
            <div key={day} className={`flex justify-between items-center px-5 py-3.5 border-b border-brand-tint last:border-0 ${
              isToday ? "bg-brand-cta-light" : ""
            }`}>
              <span className={`text-sm font-sans ${isToday ? "text-brand-navy font-semibold" : "text-brand-slate"}`}>
                {label}
                {isToday && <span className="ml-2 text-[10px] uppercase tracking-[0.08em] text-brand-cta font-semibold">Heute</span>}
              </span>
              <span className={`text-sm font-sans ${isToday ? "text-brand-navy font-semibold" : "text-brand-navy"}`}>
                {time}
              </span>
            </div>
          );
        })}
      </div>
      <div className="mt-4 flex items-start gap-3 p-4 rounded-xl bg-brand-cta-light border border-brand-cta/20">
        <Ticket size={18} className="text-brand-cta shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-semibold text-brand-navy font-sans">Parkticket-Erstattung</p>
          <p className="text-xs text-brand-slate mt-1 leading-relaxed">
            Ab 40 € Einkaufswert erstatten wir dein Parkticket bis zu 3,00 €.
            Parkhaus Friedrichsplatz — erste Stunde kostenlos mit Parkkarte.
          </p>
        </div>
      </div>
    </div>
  );
}
```

### Schritt B: `app/kontakt/page.tsx` vollständig ersetzen

Server Component. Importiert `OeffnungszeitenTabelle` und `ContactForm`. Sektionen:
1. Hero (bereits vorhanden — behalten, leicht erweitern)
2. 3 Kontakt-Kacheln: Telefon (`tel:+4956110447-5`), E-Mail (`mailto:kassel@laufladen.de`), Adresse
3. Google Maps Embed + OeffnungszeitenTabelle (2-Spalten)
4. Kontaktformular (2-Spalten: Erklärungs-Text links, `<ContactForm />` in white card rechts)
5. Anfahrt (echter Text aus laufladen.de) + 2 Parkinfo-Kacheln (2-Spalten)
6. Social CTA: Instagram `@laufladen_kassel` + Button ghost Laufanalyse

Google Maps iframe src:
```
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2476.8!2d9.47972!3d51.31268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bb0aa9c73f0f73%3A0x0!2sFriedrichsplatz%2012%2C%2034117%20Kassel!5e0!3m2!1sde!2sde!4v1700000000000
```

Anfahrtstext (wörtlich):
```
Auswärtige bevorzugen die BAB-Abfahrt „Kassel-Auestadion" der A 49.
In Richtung Innenstadt an der ersten großen Kreuzung rechts in die
Frankfurter Straße einbiegen, Beschilderung Parkhaus „Friedrichsplatz"
folgen (ca. 2 km geradeaus). Nach ca. 400 m Berg weiter geradeaus,
an der nächsten Ampel links oder ins Parkhaus abbiegen.
Gegenüber: Museum Friedericianum. Schräg gegenüber: Staatstheater Kassel.
```

Metadata:
```tsx
export const metadata: Metadata = createPageMetadata(
  "Kontakt & Anfahrt — Laufladen Kassel",
  "Laufladen Kassel am Friedrichsplatz 12, 34117 Kassel. Tel: (0561) 10 44 75. Öffnungszeiten, Google Maps, Anfahrt und Kontaktformular.",
  "/kontakt"
);
```

**Hinweis Icons:** Prüfe ob `Ticket`, `Navigation2` in lucide-react v1.7 existieren. Falls nicht: `Tag` statt `Ticket`, `Navigation` statt `Navigation2`.

---

## Aufgabe 2 — Build

```bash
cd /Users/malikholfert/projects/website-laufladen-kassel && npm run build
```

Tailwind v4: keine tailwind.config.ts, alle brand-* Tokens aus `app/globals.css` @theme.
`OeffnungszeitenTabelle` ist `"use client"` — `page.tsx` bleibt Server Component.
Zeige vollständigen Build-Output.

---

## Aufgabe 3 — Git Push

```bash
cd /Users/malikholfert/projects/website-laufladen-kassel
git init
git add .
git commit -m "feat: complete website — 8 Seiten, Legal, Formulare, Laufanalyse"
git branch -M main
git remote add origin https://github.com/malikholfert-ai/website-laufladen-kassel.git
git push -u origin main
```

Falls remote bereits gesetzt: `git remote set-url origin https://github.com/malikholfert-ai/website-laufladen-kassel.git`

---

## Aufgabe 4 — Public-Ordner

```bash
mkdir -p /Users/malikholfert/projects/website-laufladen-kassel/public/images
```

Erstelle `public/images/README.md` mit Tabelle der benötigten Fotos:
hero-laufladen.jpg (800×600), og-image.jpg (1200×630), team-*.jpg (400×400 je Mitarbeiter).

---

## Vercel Env Vars

```
RESEND_API_KEY=re_...
CONTACT_EMAIL=kassel@laufladen.de
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=laufladen.de
```

---

## Kontext

- `brand-navy` #1A3F6F · `brand-cta` #2E7D32 (nur Buttons)
- Fonts: DM Serif Display (Headlines) · Plus Jakarta Sans (Body)
- Kunde: Jürgen Thomas Fried · kassel@laufladen.de · (0561) 10 44 75
- GitHub: https://github.com/malikholfert-ai/website-laufladen-kassel.git

**START: Aufgabe 1 zuerst. Vollständige Files. Keine Trunkierungen.**
