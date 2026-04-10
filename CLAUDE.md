@AGENTS.md

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
