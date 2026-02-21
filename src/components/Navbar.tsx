"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Lineup", href: "#lineup" },
  { label: "Info", href: "#info" },
  { label: "Om OFF", href: "#om" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-off-cream/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <Image src="/off-logo.jpg" alt="OFF" width={40} height={40} className="rounded" />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-[family-name:var(--font-display)] font-bold text-sm uppercase tracking-widest transition-colors ${
                scrolled
                  ? "text-off-dark hover:text-off-orange"
                  : "text-off-cream hover:text-off-orange"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#info"
            className="bg-off-orange text-off-cream px-5 py-2 font-[family-name:var(--font-display)] font-bold text-sm uppercase tracking-wider rounded-sm hover:bg-off-orange-light transition-colors"
          >
            Billetter
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Meny"
        >
          <span
            className={`block w-6 h-0.5 transition-all ${
              scrolled ? "bg-off-dark" : "bg-off-cream"
            } ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all ${
              scrolled ? "bg-off-dark" : "bg-off-cream"
            } ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all ${
              scrolled ? "bg-off-dark" : "bg-off-cream"
            } ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-off-dark/95 backdrop-blur-sm">
          <div className="px-6 py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-[family-name:var(--font-display)] font-bold text-2xl uppercase tracking-wider text-off-cream hover:text-off-orange transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#info"
              onClick={() => setMenuOpen(false)}
              className="bg-off-orange text-off-cream px-5 py-3 font-[family-name:var(--font-display)] font-bold text-lg uppercase tracking-wider text-center rounded-sm hover:bg-off-orange-light transition-colors"
            >
              Kjøp Billetter
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
