import Link from "next/link";

interface LogoProps {
  /** 'light' = weißes Logo (auf dunklem BG), 'dark' = Navy-Logo (auf hellem BG) */
  variant?: "light" | "dark";
  className?: string;
}

/**
 * SVG-Platzhalter Logo.
 * Läufer-Silhouette + Wortmarke.
 * Austausch: SVG-Pfad durch echte Vektordatei ersetzen — Komponente bleibt identisch.
 */
export function Logo({ variant = "dark", className = "" }: LogoProps) {
  const primaryColor = variant === "light" ? "#FFFFFF" : "#1A3F6F";
  const accentColor = variant === "light" ? "#5B8CC4" : "#2D6FA3";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 no-underline ${className}`}
      aria-label="Laufladen Kassel — Startseite"
    >
      {/* Läufer-Signet */}
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Kopf */}
        <circle cx="22" cy="6" r="3" fill={primaryColor} />
        {/* Körper / Laufbewegung */}
        <path
          d="M22 9 L18 18 L12 24 M18 18 L24 22 L28 30 M15 15 L10 12"
          stroke={primaryColor}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Dynamik-Linie */}
        <path
          d="M8 28 L20 28 L32 28"
          stroke={accentColor}
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>

      {/* Wortmarke */}
      <span
        className="flex flex-col leading-none"
        style={{ fontFamily: "var(--font-sans)" }}
      >
        <span
          className="text-[15px] font-700 tracking-tight"
          style={{ color: primaryColor, fontWeight: 700 }}
        >
          Laufladen
        </span>
        <span
          className="text-[10px] uppercase tracking-[0.12em] font-500"
          style={{ color: accentColor, fontWeight: 500 }}
        >
          Kassel
        </span>
      </span>
    </Link>
  );
}
