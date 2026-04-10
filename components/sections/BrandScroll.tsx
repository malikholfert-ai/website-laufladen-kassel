const brands = [
  "Adidas",
  "ASICS",
  "Brooks",
  "Diadora",
  "Mizuno",
  "New Balance",
  "Nike",
  "ON Running",
  "Puma",
  "Saucony",
  "Exel",
  "Leki",
];

export function BrandScroll() {
  return (
    <section
      className="bg-brand-midnight py-12 overflow-hidden"
      data-navbar-theme="dark"
      aria-label="Unsere Marken"
    >
      <div className="flex">
        <div className="brands-track flex gap-16 items-center whitespace-nowrap">
          {/* Brands doppelt für nahtloses Looping */}
          {[...brands, ...brands].map((b, i) => (
            <span
              key={i}
              className="text-white/30 hover:text-white/70 transition-colors font-display font-semibold text-xl uppercase tracking-widest cursor-default"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
