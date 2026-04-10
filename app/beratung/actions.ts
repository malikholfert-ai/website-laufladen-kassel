"use server";

import { z } from "zod";
import { Resend } from "resend";

const BookingSchema = z.object({
  name: z.string().min(2, "Bitte gib deinen Namen ein."),
  email: z.string().email("Bitte gib eine gültige E-Mail-Adresse ein."),
  telefon: z.string().min(5, "Bitte gib eine Telefonnummer ein."),
  datum: z.string().min(1, "Bitte wähle ein Wunschdatum."),
  anmerkungen: z.string().max(1000).optional(),
  // Honeypot — muss leer bleiben
  website: z.string().max(0, "Bot-Anfrage abgelehnt."),
});

export type BookingFormData = z.infer<typeof BookingSchema>;

export type BookingResult =
  | { success: true }
  | { success: false; errors: Partial<Record<keyof BookingFormData, string>>; general?: string };

export async function submitBooking(
  formData: BookingFormData
): Promise<BookingResult> {
  // Zod-Validierung
  const parsed = BookingSchema.safeParse(formData);
  if (!parsed.success) {
    const errors: Partial<Record<keyof BookingFormData, string>> = {};
    parsed.error.issues.forEach((e) => {
      const field = e.path[0] as keyof BookingFormData;
      errors[field] = e.message;
    });
    return { success: false, errors };
  }

  const { name, email, telefon, datum, anmerkungen } = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL ?? "kassel@laufladen.de";

  if (!apiKey) {
    // Im Dev-Modus ohne API Key: Anfrage simulieren (kein Fehler für Devs)
    console.log("[DEV] Buchungsanfrage:", { name, email, telefon, datum, anmerkungen });
    return { success: true };
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "Laufladen Kassel Website <noreply@laufladen.de>",
    to: [contactEmail],
    replyTo: email,
    subject: `Laufanalyse-Anfrage von ${name} — ${datum}`,
    html: `
      <h2>Neue Laufanalyse-Anfrage</h2>
      <table style="border-collapse:collapse;width:100%;max-width:500px">
        <tr><td style="padding:8px;font-weight:bold;color:#4A5568">Name</td><td style="padding:8px">${name}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;color:#4A5568">E-Mail</td><td style="padding:8px"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:8px;font-weight:bold;color:#4A5568">Telefon</td><td style="padding:8px"><a href="tel:${telefon}">${telefon}</a></td></tr>
        <tr><td style="padding:8px;font-weight:bold;color:#4A5568">Wunschdatum</td><td style="padding:8px">${datum}</td></tr>
        ${anmerkungen ? `<tr><td style="padding:8px;font-weight:bold;color:#4A5568">Anmerkungen</td><td style="padding:8px">${anmerkungen}</td></tr>` : ""}
      </table>
      <p style="margin-top:24px;color:#718096;font-size:13px">Gesendet über laufladen.de/beratung</p>
    `,
  });

  if (error) {
    console.error("[Resend] Fehler beim Senden:", error);
    return {
      success: false,
      errors: {},
      general:
        "Beim Senden ist ein Fehler aufgetreten. Bitte ruf uns direkt an: (0561) 10 44 75",
    };
  }

  return { success: true };
}
