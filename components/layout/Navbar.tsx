"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Logo } from "@/components/Logo";
import { MobileMenu } from "./MobileMenu";

const navItems = [
  { label: "Laufschuhe", href: "/laufschuhe" },
  { label: "Laufanalyse", href: "/beratung" },
  { label: "Nordic Walking", href: "/nordic-walking" },
  { label: "Team", href: "/team" },
  { label: "Kontakt", href: "/kontakt" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const navbar = document.querySelector("nav");
      if (!navbar) return;
      const navHeight = navbar.getBoundingClientRect().height;
      const elementBelow = document.elementFromPoint(
        window.innerWidth / 2,
        navHeight + 1
      );
      if (elementBelow) {
        const section = elementBelow.closest("[data-navbar-theme]");
        const theme = section?.getAttribute("data-navbar-theme");
        setIsDarkSection(theme === "dark" || (!theme && window.scrollY < 100));
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLight = !isDarkSection;
  const navBg = isScrolled
    ? isLight
      ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-brand-border"
      : "bg-brand-midnight/95 backdrop-blur-sm shadow-sm"
    : "bg-transparent";

  const logoVariant: "light" | "dark" = isDarkSection ? "light" : "dark";
  const linkColor = isDarkSection
    ? "text-white/85 hover:text-white"
    : "text-brand-midnight/80 hover:text-brand-midnight";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${navBg}`}
        role="navigation"
        aria-label="Hauptnavigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Logo variant={logoVariant} />

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${linkColor}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className={`lg:hidden p-2 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center
                ${isDarkSection ? "hover:bg-white/10 text-white" : "hover:bg-brand-midnight/10 text-brand-midnight"}
              `}
              aria-label="Menü öffnen"
              aria-expanded={mobileOpen}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        navItems={navItems}
      />
    </>
  );
}
