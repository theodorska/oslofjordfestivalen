"use client";

import { useState } from "react";
import WaveDivider from "./WaveDivider";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
  };

  return (
    <>
      <WaveDivider fillTop="var(--color-off-cream)" fillBottom="var(--color-off-dark)" />
      <footer className="bg-off-dark py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Newsletter */}
          <h3 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-off-cream uppercase tracking-tight mb-4">
            Hold deg oppdatert
          </h3>
          <p className="text-off-cream/60 mb-8">
            Få nyheter om lineup, billetter og mer rett i innboksen.
          </p>

          {submitted ? (
            <p className="text-off-orange font-[family-name:var(--font-display)] font-bold text-xl uppercase mb-16">
              Takk! Du er påmeldt.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-16">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="din@epost.no"
                className="flex-1 px-4 py-3 bg-off-dark border border-off-cream/20 text-off-cream rounded-sm focus:border-off-orange focus:outline-none placeholder:text-off-cream/30"
              />
              <button
                type="submit"
                className="bg-off-orange text-off-cream px-6 py-3 font-[family-name:var(--font-display)] font-bold uppercase tracking-wider rounded-sm hover:bg-off-orange-light transition-colors"
              >
                Meld på
              </button>
            </form>
          )}

          {/* Social links */}
          <div className="flex justify-center gap-8 mb-12">
            {[
              { label: "Instagram", href: "#", icon: "IG" },
              { label: "Facebook", href: "#", icon: "FB" },
              { label: "TikTok", href: "#", icon: "TT" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="font-[family-name:var(--font-display)] text-off-cream/40 hover:text-off-orange text-sm uppercase tracking-widest transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Wave motif */}
          <div className="flex justify-center mb-8">
            <svg width="80" height="16" viewBox="0 0 80 16" className="text-off-orange/30">
              <path
                d="M0,8 C13,0 27,16 40,8 C53,0 67,16 80,8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* Copyright */}
          <div className="text-off-cream/30 text-sm space-y-1">
            <p>kontakt@oslofjordfestivalen.no</p>
            <p>&copy; 2026 Oslofjordfestivalen. Alle rettigheter reservert.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
