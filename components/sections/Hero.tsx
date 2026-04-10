import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { MapPin, Star } from "lucide-react";

export function Hero() {
  return (
    <section
      className="relative bg-brand-navy min-h-[90vh] flex items-center overflow-hidden"
      data-navbar-theme="dark"
    >
      {/* Hintergrund-Textur — subtiler Tiefeneffekt */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 80%, #5B8CC4 0%, transparent 50%), radial-gradient(circle at 80% 20%, #2D6FA3 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text-Seite */}
          <div className="reveal">
            {/* Trust Signal */}
            <div className="flex items-center gap-3 mb-8">
              <Badge variant="navy">
                <Star size={10} className="mr-1" />
                Seit 1984 in Kassel
              </Badge>
              <div className="flex items-center gap-1.5 text-white/50 text-xs">
                <MapPin size={12} />
                <span>Friedrichsplatz 12</span>
              </div>
            </div>

            {/* Hauptheadline */}
            <h1 className="hero-headline text-white mb-6">
              Dein Laufspezialist
              <br />
              <span className="text-brand-sky">in Kassel.</span>
            </h1>

            {/* Subline */}
            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-lg font-sans">
              Individuelle Laufanalyse auf dem echten Bürgersteig — persönlich,
              fachkundig, ohne Laufband. 30+ Jahre Erfahrung, aktiv laufendes
              Beratungsteam.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button as="link" href="/beratung" variant="primary" size="lg">
                Termin vereinbaren
              </Button>
              <Button
                as="link"
                href="/laufschuhe"
                variant="ghost"
                size="lg"
              >
                Sortiment entdecken
              </Button>
            </div>

            {/* Mobile Kontakt */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 lg:hidden">
              <a
                href="tel:+4956110447-5"
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                → (0561) 10 44 75
              </a>
              <a
                href="mailto:kassel@laufladen.de"
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                → kassel@laufladen.de
              </a>
            </div>
          </div>

          {/* Bild-Seite */}
          <div className="relative reveal">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-brand-blue/20">
              <Image
                src="/images/hero-laufladen.jpg"
                alt="Laufanalyse vor dem Laufladen Kassel am Friedrichsplatz"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Fallback Platzhalter wenn kein Bild */}
              <div className="absolute inset-0 flex items-center justify-center bg-brand-blue/30">
                <div className="text-center text-white/40 p-8">
                  <div className="text-6xl mb-3">🏃</div>
                  <p className="text-sm font-sans">
                    Foto: Laufanalyse Friedrichsplatz
                  </p>
                  <p className="text-xs mt-1">800 × 600px</p>
                </div>
              </div>
            </div>

            {/* Floating Info Card */}
            <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-lg p-4 max-w-[200px]">
              <p className="text-brand-navy font-semibold text-sm font-sans">
                Kein Laufband.
              </p>
              <p className="text-brand-slate text-xs mt-1 leading-relaxed">
                Analyse auf dem echten Bürgersteig vor dem Laden.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll-Hinweis */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/20" aria-hidden="true" />
        <p className="text-white/30 text-xs uppercase tracking-widest rotate-0">
          Scroll
        </p>
      </div>
    </section>
  );
}
