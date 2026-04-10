"use server";

import { z } from "zod";
import { Resend } from "resend";

const ContactSchema = z.object({
  name: z.string().min(2, "Bitte gib deinen Namen ein."),
  email: z.string().email("Bitte gib eine gültige E-Mail-Adresse ein."),
  nachricht: z.string().min(10, "Bitte schreib mindestens 10 Zeichen.").max(2000),
  website: z.string().max(0, "Bot-Anfrage abgelehnt."),
});

export type ContactFormData = z.infer<typeof ContactSchema>;

export type ContactResult =
  | { success: true }
  | { success: false; errors: Partial<Record<keyof ContactFormData, string>>; general?: string };

export async function submitContact(
  formData: ContactFormData
): Promise<ContactResult> {
  const parsed = ContactSchema.safeParse(formData);
  if (!parsed.success) {
    const errors: Partial<Record<keyof ContactFormData, string>> = {};
    parsed.error.issues.forEach((e) => {
      const field = e.path[0] as keyof ContactFormData;
      errors[field] = e.message;
    });
    return { success: false, errors };
  }

  const { name, email, nachricht } = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL ?? "kassel@laufladen.de";

  if (!apiKey) {
    console.log("[DEV] Kontaktanfrage:", { name, email, nachricht });
    return { success: true };
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: "Laufladen Kassel Website <noreply@laufladen.de>",
    to: [contactEmail],
    replyTo: email,
    subject: `Kontaktanfrage von ${name}`,
    html: `
      <h2>Neue Kontaktanfrage</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>E-Mail:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Nachricht:</strong></p>
      <p style="white-space:pre-wrap;background:#f7f9fc;padding:16px;border-radius:8px">${nachricht}</p>
      <p style="margin-top:24px;color:#718096;font-size:13px">Gesendet über laufladen.de/kontakt</p>
    `,
  });

  if (error) {
    return {
      success: false,
      errors: {},
      general: "Beim Senden ist ein Fehler aufgetreten. Bitte ruf uns direkt an: (0561) 10 44 75",
    };
  }

  return { success: true };
}
