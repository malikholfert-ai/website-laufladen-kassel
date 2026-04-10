import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { Hero } from "@/components/sections/Hero";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { LaufanalyseEditorial } from "@/components/sections/LaufanalyseEditorial";
import { BrandScroll } from "@/components/sections/BrandScroll";
import { Kategorien } from "@/components/sections/Kategorien";
import { Oeffnungszeiten } from "@/components/sections/Oeffnungszeiten";
import { TestimonialBanner } from "@/components/sections/TestimonialBanner";

export const metadata: Metadata = createPageMetadata(
  "Laufladen Kassel — Laufschuhberatung & Laufanalyse seit 1984",
  "Dein Laufspezialist am Friedrichsplatz Kassel. Individuelle Laufanalyse auf dem echten Bürgersteig, 40 Jahre Erfahrung. Adidas, Asics, Brooks, ON Running, Saucony und mehr.",
  "/"
);

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <LaufanalyseEditorial />
      <BrandScroll />
      <Kategorien />
      <Oeffnungszeiten />
      <TestimonialBanner />
    </>
  );
}
