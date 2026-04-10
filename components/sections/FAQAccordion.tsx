"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Wie lange dauert die Laufanalyse?",
    answer:
      "Plane rund 45 Minuten ein. Wir nehmen uns die Zeit, die du brauchst — keine Hetze, kein nächster Kunde im Nacken. Wenn dein Fall komplexer ist (z.B. Verletzungshistorie, Orthesen), kann es auch etwas länger dauern.",
  },
  {
    question: "Kostet die Laufanalyse etwas?",
    answer:
      "Nein — die Laufanalyse ist vollständig kostenlos und unverbindlich. Du kaufst nur, wenn du den richtigen Schuh gefunden hast. Kein Upselling, keine versteckten Kosten.",
  },
  {
    question: "Brauche ich einen Termin?",
    answer:
      "Ein Termin ist empfohlen, damit wir uns Zeit für dich nehmen können. Du kannst aber auch ohne Termin vorbeikommen — wenn kein anderer Kunde gerade analysiert wird, machen wir das sofort. Ruf am besten kurz an, bevor du losläufst: (0561) 10 44 75.",
  },
  {
    question: "Soll ich meine alten Laufschuhe mitbringen?",
    answer:
      "Ja — unbedingt. Das Abnutzungsmuster deiner alten Schuhe verrät uns enorm viel über deinen Laufstil: Wie du abrollst, wo du belastest, ob du Überpronation oder Supination hast. Das ist oft aufschlussreicher als jede Analyse.",
  },
  {
    question: "Warum kein Laufband — macht das nicht jeder so?",
    answer:
      "Viele machen das so — aber nicht wir. Wir haben jahrelang Erfahrung mit Laufbandanalysen gesammelt und uns dann bewusst dagegen entschieden. Das Laufband verändert dein natürliches Laufverhalten: Die Fortbewegung ist mechanisch anders, du hältst dich unbewusst anders, die Schrittfrequenz passt sich an den Bandrhythmus an. Wir analysieren draußen, auf dem Bürgersteig — mit geschulten Augen, die den Unterschied sehen.",
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function FAQItem({ question, answer, isOpen, onToggle, index }: FAQItemProps) {
  const id = `faq-answer-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        id={buttonId}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={id}
        className={cn(
          "w-full flex items-start justify-between gap-4 py-5 text-left",
          "font-sans text-[15px] font-semibold transition-colors min-h-[44px]",
          isOpen ? "text-brand-navy" : "text-brand-text hover:text-brand-navy"
        )}
      >
        <span>{question}</span>
        <span className="shrink-0 mt-0.5">
          {isOpen ? (
            <Minus size={18} className="text-brand-blue" />
          ) : (
            <Plus size={18} className="text-brand-muted" />
          )}
        </span>
      </button>

      <div
        id={id}
        role="region"
        aria-labelledby={buttonId}
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <p className="pb-5 text-brand-slate text-sm leading-relaxed pr-8">
          {answer}
        </p>
      </div>
    </div>
  );
}

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 px-6 py-2">
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          index={index}
        />
      ))}
    </div>
  );
}
