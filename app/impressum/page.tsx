import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-brand-midnight pt-28 pb-16" data-navbar-theme="dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="h1 text-white">Impressum</h1>
        </div>
      </section>
      <section className="py-16" data-navbar-theme="light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate">
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            Laufladen Kassel<br />
            Inhaber: Jürgen Thomas Fried<br />
            Friedrichsplatz 12<br />
            34117 Kassel
          </p>
          <h2>Kontakt</h2>
          <p>
            Telefon: (0561) 10 44 75<br />
            Fax: (0561) 77 18 55<br />
            E-Mail:{" "}
            <a href="mailto:kassel@laufladen.de">kassel@laufladen.de</a>
          </p>
          <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>
            Jürgen Thomas Fried<br />
            Friedrichsplatz 12<br />
            34117 Kassel
          </p>
          <h2>Umsatzsteuer-ID</h2>
          <p>
            <strong>[PLACEHOLDER — VOM INHABER EINZUTRAGEN]</strong>
          </p>
          <h2>Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ec.europa.eu/consumers/odr
            </a>
            . Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
          <p>
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </div>
      </section>
    </div>
  );
}
