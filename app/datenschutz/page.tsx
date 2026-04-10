import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  robots: { index: false, follow: false },
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-brand-midnight pt-28 pb-16" data-navbar-theme="dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="h1 text-white">Datenschutzerklärung</h1>
        </div>
      </section>
      <section className="py-16" data-navbar-theme="light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate">
          <h2>1. Verantwortlicher</h2>
          <p>
            Jürgen Thomas Fried<br />
            Laufladen Kassel<br />
            Friedrichsplatz 12, 34117 Kassel<br />
            E-Mail:{" "}
            <a href="mailto:kassel@laufladen.de">kassel@laufladen.de</a>
          </p>

          <h2>2. Hosting</h2>
          <p>
            Diese Website wird gehostet bei Vercel Inc., 340 Pine Street Suite
            701, San Francisco, CA 94104, USA. Die Datenverarbeitung erfolgt
            auf der Grundlage von Art. 46 DSGVO (Standardvertragsklauseln).
            Beim Aufruf der Website werden Server-Log-Dateien durch Vercel
            erfasst (IP-Adresse, Browser, Betriebssystem, Zeitpunkt des
            Abrufs). Dies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
            DSGVO (berechtigtes Interesse an der technischen Bereitstellung).
          </p>

          <h2>3. Kontaktformular</h2>
          <p>
            Bei der Nutzung des Kontaktformulars werden die eingegebenen Daten
            (Name, E-Mail, Nachricht) zur Bearbeitung Ihrer Anfrage verarbeitet.
            Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
            Interesse an der Beantwortung von Anfragen). Die Daten werden nicht
            an Dritte weitergegeben und nach abschließender Bearbeitung gelöscht.
          </p>

          <h2>4. Cookies</h2>
          <p>
            Diese Website verwendet keine Marketing- oder Tracking-Cookies.
            Technisch notwendige Cookies (z.B. für das korrekte Funktionieren
            der Seite) werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
            gesetzt.
          </p>

          <h2>5. Analytics — Plausible</h2>
          <p>
            Wir nutzen Plausible Analytics (Plausible Insights OÜ, Västriku tn
            2, 50403 Tartu, Estland) zur datenschutzfreundlichen
            Reichweitenmessung. Plausible erhebt keine personenbezogenen Daten,
            setzt keine Cookies und speichert keine IP-Adressen. Ein
            Cookie-Banner ist daher nicht erforderlich. Weitere Informationen
            unter{" "}
            <a
              href="https://plausible.io/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              plausible.io/privacy
            </a>
            .
          </p>

          <h2>6. Google Maps</h2>
          <p>
            Diese Website bindet Google Maps (Google LLC, 1600 Amphitheatre
            Parkway, Mountain View, CA 94043, USA) als Kartenembedding ein.
            Beim Laden der Karte werden Daten (insb. IP-Adresse) an Google
            übertragen. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
            Informationen zur Datenverarbeitung durch Google finden Sie unter{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              policies.google.com/privacy
            </a>
            .
          </p>

          <h2>7. Ihre Rechte</h2>
          <p>
            Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung
            (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung
            (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art.
            21). Zur Wahrnehmung Ihrer Rechte wenden Sie sich an:{" "}
            <a href="mailto:kassel@laufladen.de">kassel@laufladen.de</a>
          </p>

          <h2>8. Beschwerderecht</h2>
          <p>
            Sie haben das Recht, sich bei der zuständigen Aufsichtsbehörde zu
            beschweren: Der Hessische Beauftragte für Datenschutz und
            Informationsfreiheit, Postfach 3163, 65021 Wiesbaden,{" "}
            <a
              href="https://datenschutz.hessen.de"
              target="_blank"
              rel="noopener noreferrer"
            >
              datenschutz.hessen.de
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
