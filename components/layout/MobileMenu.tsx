"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X, Phone, Mail, MapPin } from "lucide-react";
import { Logo } from "@/components/Logo";

interface NavItem {
  label: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

export function MobileMenu({ isOpen, onClose, navItems }: MobileMenuProps) {
  // Scrolling sperren wenn Menü offen
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // ESC-Taste schließt Menü
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Slide-In Drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
        className={`
          fixed top-0 right-0 z-50 h-full w-80 max-w-[90vw]
          flex flex-col
          bg-brand-navy text-white
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <Logo variant="light" />
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Menü schließen"
          >
            <X size={22} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-6 py-8 overflow-y-auto">
          <ul className="space-y-1" role="list">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="
                    flex items-center py-3.5 px-4 rounded-lg
                    text-white/90 hover:text-white hover:bg-white/10
                    font-sans text-[17px] font-medium
                    transition-colors min-h-[44px]
                  "
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA im Menü */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <Link
              href="/beratung"
              onClick={onClose}
              className="
                block w-full text-center py-3.5 px-6 rounded-lg
                bg-brand-cta text-white font-semibold
                hover:opacity-90 transition-opacity min-h-[44px]
              "
            >
              Termin vereinbaren
            </Link>
          </div>
        </nav>

        {/* Kontakt-Footer im Menü */}
        <div className="px-6 py-6 border-t border-white/10 space-y-3">
          <a
            href="tel:+4956110447-5"
            className="flex items-center gap-3 text-white/70 hover:text-white text-sm transition-colors min-h-[44px]"
          >
            <Phone size={16} />
            <span>(0561) 10 44 75</span>
          </a>
          <a
            href="mailto:kassel@laufladen.de"
            className="flex items-center gap-3 text-white/70 hover:text-white text-sm transition-colors min-h-[44px]"
          >
            <Mail size={16} />
            <span>kassel@laufladen.de</span>
          </a>
          <div className="flex items-center gap-3 text-white/70 text-sm">
            <MapPin size={16} />
            <span>Friedrichsplatz 12, Kassel</span>
          </div>
        </div>
      </div>
    </>
  );
}
