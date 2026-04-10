import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { Hero } from "@/components/sections/Hero";
import { USPs } from "@/components/sections/USPs";
import { LaufanalyseTeaser } from "@/components/sections/LaufanalyseTeaser";
import { BrandLogos } from "@/components/sections/BrandLogos";
import { Oeffnungszeiten } from "@/components/sections/Oeffnungszeiten";
import { InstagramTeaser } from "@/components/sections/InstagramTeaser";

export const metadata: Metadata = createPageMetadata(
  "Laufladen Kassel — Laufschuhberatung & Laufanalyse seit 1984",
  "Dein Laufspezialist am Friedrichsplatz Kassel. Individuelle Laufanalyse auf dem echten Bürgersteig, 30+ Jahre Erfahrung. Adidas, Asics, Brooks, ON Running, Saucony und mehr.",
  "/"
);

export default function HomePage() {
  return (
    <>
      <Hero />
      <USPs />
      <LaufanalyseTeaser />
      <BrandLogos />
      <Oeffnungszeiten />
      <InstagramTeaser />
    </>
  );
}
