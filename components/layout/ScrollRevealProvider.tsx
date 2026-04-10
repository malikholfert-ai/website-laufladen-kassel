"use client";

import { useGlobalScrollReveal } from "@/lib/useScrollReveal";

/** Initialisiert Scroll-Reveal global für alle .reveal Elemente */
export function ScrollRevealProvider() {
  useGlobalScrollReveal();
  return null;
}
