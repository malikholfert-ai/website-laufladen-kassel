import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  detail: string;
}

export function TestimonialCard({ quote, author, detail }: TestimonialCardProps) {
  return (
    <figure className="bg-white rounded-2xl border border-brand-tint p-7 flex flex-col gap-5 hover:border-brand-blue/20 hover:shadow-md transition-all duration-200">
      {/* Sterne */}
      <div className="flex gap-1" aria-label="5 von 5 Sternen">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className="fill-amber-400 text-amber-400"
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Zitat */}
      <blockquote className="text-brand-slate text-sm leading-relaxed flex-1">
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Autor */}
      <figcaption className="flex items-center gap-3">
        {/* Avatar Placeholder */}
        <div
          className="w-9 h-9 rounded-full bg-brand-tint flex items-center justify-center text-brand-blue font-semibold text-sm font-sans shrink-0"
          aria-hidden="true"
        >
          {author.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-brand-navy text-sm font-sans">
            {author}
          </p>
          <p className="text-brand-muted text-xs">{detail}</p>
        </div>
      </figcaption>
    </figure>
  );
}
