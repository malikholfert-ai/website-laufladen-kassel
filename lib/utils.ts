/** Kombiniert class names (leichtes cn ohne clsx-Dep) */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

/** Gibt den aktuellen Wochentag als Index zurück (0 = Sonntag) */
export function getTodayIndex(): number {
  return new Date().getDay();
}

/** Formatiert eine Telefonnummer für tel: Links */
export function formatTel(tel: string): string {
  return tel.replace(/\s+/g, "").replace(/[()]/g, "");
}
