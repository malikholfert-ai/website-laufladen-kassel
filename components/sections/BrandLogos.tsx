import { SectionLabel } from "@/components/ui/SectionLabel";

const brands = [
  { name: "adidas", display: "adidas" },
  { name: "ASICS", display: "ASICS" },
  { name: "Brooks", display: "Brooks" },
  { name: "Diadora", display: "Diadora" },
  { name: "Mizuno", display: "Mizuno" },
  { name: "New Balance", display: "New Balance" },
  { name: "Nike", display: "Nike" },
  { name: "On Running", display: "On Running" },
  { name: "Puma", display: "Puma" },
  { name: "Saucony", display: "Saucony" },
  { name: "Exel", display: "Exel" },
  { name: "Leki", display: "Leki" },
];

export function BrandLogos() {
  return (
    <section
      className="bg-white py-20 border-y border-gray-100"
      data-navbar-theme="light"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <SectionLabel>Sortiment</SectionLabel>
          <h2 className="h2 text-brand-text">
            Die besten Marken im Laufsport
          </h2>
          <p className="text-brand-slate mt-3 text-sm max-w-md mx-auto">
            Wir führen alle relevanten Marken — und beraten dich, welche zu
            deinem Fuß und deinem Laufstil passt.
          </p>
        </div>

        {/* Brand-Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 reveal-group">
          {brands.map(({ name, display }) => (
            <div
              key={name}
              className="reveal flex items-center justify-center h-16 px-4 rounded-xl border border-gray-100 hover:border-brand-tint hover:bg-brand-bg transition-all duration-200 group"
            >
              <span
                className="text-brand-muted group-hover:text-brand-navy font-semibold text-sm tracking-tight transition-colors font-sans text-center"
              >
                {display}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-brand-muted text-xs mt-8 reveal">
          Nordic Walking: Exel & Leki — Stöcke, Beratung und Kürzungsservice
        </p>
      </div>
    </section>
  );
}
