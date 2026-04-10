"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, AlertCircle, Loader2, Send } from "lucide-react";
import { submitContact } from "@/app/kontakt/actions";
import { Button } from "@/components/ui/Button";

const schema = z.object({
  name:      z.string().min(2, "Bitte gib deinen Namen ein."),
  email:     z.string().email("Bitte gib eine gültige E-Mail-Adresse ein."),
  nachricht: z.string().min(10, "Bitte schreib mindestens 10 Zeichen.").max(2000),
  website:   z.string().max(0),
});

type FormData = z.infer<typeof schema>;

const inputBase =
  "w-full px-4 py-3 rounded-xl border text-brand-text text-sm font-sans bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-electric focus:border-transparent placeholder:text-brand-muted";

interface FieldProps {
  label: string;
  id: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

function Field({ label, id, error, required = false, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-brand-midnight font-sans">
        {label}
        {required && <span className="text-brand-electric ml-1" aria-hidden="true">*</span>}
      </label>
      {children}
      {error && (
        <p className="flex items-center gap-1.5 text-red-600 text-xs" role="alert">
          <AlertCircle size={12} />
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");

  const { register, handleSubmit, formState: { errors }, setError, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { website: "" },
  });

  const onSubmit = async (data: FormData) => {
    setState("loading");
    setServerError("");
    const result = await submitContact(data);
    if (result.success) {
      setState("success");
      reset();
    } else {
      if (result.errors) {
        (Object.entries(result.errors) as [keyof FormData, string][]).forEach(([field, msg]) => {
          setError(field, { type: "server", message: msg });
        });
      }
      if (result.general) setServerError(result.general);
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div className="bg-brand-blue-tint border border-brand-electric/20 rounded-2xl p-10 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-electric/10 mb-5">
          <CheckCircle size={28} className="text-brand-electric" />
        </div>
        <h3 className="text-xl font-semibold text-brand-midnight font-sans mb-3">Nachricht erhalten!</h3>
        <p className="text-brand-slate text-sm leading-relaxed max-w-sm mx-auto">
          Wir melden uns so schnell wie möglich. Bei dringenden Anfragen:{" "}
          <a href="tel:+4956110447-5" className="text-brand-electric font-semibold hover:underline">
            (0561) 10 44 75
          </a>
        </p>
        <button onClick={() => setState("idle")} className="mt-6 text-sm text-brand-electric hover:text-brand-midnight font-medium transition-colors">
          Weitere Nachricht senden
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate aria-label="Kontaktformular">
      <input type="text" tabIndex={-1} aria-hidden="true" autoComplete="off"
        className="absolute left-[-9999px] opacity-0 pointer-events-none"
        {...register("website")} />

      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field label="Dein Name" id="name" error={errors.name?.message} required>
            <input id="name" type="text" autoComplete="name" placeholder="Vorname Nachname"
              aria-required="true" aria-invalid={!!errors.name}
              className={`${inputBase} ${errors.name ? "border-red-300 bg-red-50/30" : "border-brand-border hover:border-brand-electric/50"}`}
              {...register("name")} />
          </Field>
          <Field label="E-Mail" id="email" error={errors.email?.message} required>
            <input id="email" type="email" autoComplete="email" placeholder="deine@email.de"
              aria-required="true" aria-invalid={!!errors.email}
              className={`${inputBase} ${errors.email ? "border-red-300 bg-red-50/30" : "border-brand-border hover:border-brand-electric/50"}`}
              {...register("email")} />
          </Field>
        </div>
        <Field label="Deine Nachricht" id="nachricht" error={errors.nachricht?.message} required>
          <textarea id="nachricht" rows={5} placeholder="Womit können wir dir helfen?"
            aria-required="true" aria-invalid={!!errors.nachricht}
            className={`${inputBase} resize-none ${errors.nachricht ? "border-red-300 bg-red-50/30" : "border-brand-border hover:border-brand-electric/50"}`}
            {...register("nachricht")} />
        </Field>
      </div>

      {serverError && (
        <div className="mt-5 flex items-start gap-2.5 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm" role="alert">
          <AlertCircle size={16} className="shrink-0 mt-0.5" />
          <p>{serverError}</p>
        </div>
      )}

      <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Button type="submit" variant="primary" size="lg" disabled={state === "loading"} className="w-full sm:w-auto">
          {state === "loading" ? (
            <><Loader2 size={16} className="animate-spin" />Wird gesendet…</>
          ) : (
            <><Send size={16} />Nachricht senden</>
          )}
        </Button>
        <p className="text-brand-muted text-xs">* Pflichtfelder</p>
      </div>
    </form>
  );
}
