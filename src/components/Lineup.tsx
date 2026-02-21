"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const headliners = [
  "FAYE VILDHAVEN",
  "HUMLEBARNA",
];

const artists = [
  "DIM GRAU",
  "FUNK FÖR SKOG",
  "HEAVE BLOOD & CRY",
  "VY KAI",
  "JUSTAD",
];

export default function Lineup() {
  const ref = useScrollReveal();

  return (
    <section id="lineup" className="bg-off-cream py-24 md:py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="fade-in-up font-[family-name:var(--font-display)] text-5xl md:text-7xl font-bold text-off-dark uppercase mb-16 tracking-tight">
          Lineup
        </h2>

        {/* Headliners */}
        <div className="fade-in-up space-y-4 mb-12">
          {headliners.map((name) => (
            <div
              key={name}
              className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-off-dark uppercase tracking-tight hover:text-off-orange hover:scale-[1.02] transition-all duration-200 cursor-pointer"
            >
              {name}
            </div>
          ))}
        </div>

        {/* Divider wave */}
        <div className="flex justify-center mb-12">
          <svg width="120" height="20" viewBox="0 0 120 20" className="text-off-orange">
            <path
              d="M0,10 C20,0 40,20 60,10 C80,0 100,20 120,10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            />
          </svg>
        </div>

        {/* Other artists */}
        <div className="fade-in-up space-y-3">
          {artists.map((name) => (
            <div
              key={name}
              className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-off-dark/80 uppercase tracking-tight hover:text-off-orange hover:scale-[1.01] transition-all duration-200 cursor-pointer"
            >
              {name}
            </div>
          ))}
        </div>

        {/* More coming */}
        <p className="fade-in-up mt-12 font-[family-name:var(--font-display)] text-xl md:text-2xl text-off-orange uppercase tracking-widest">
          + Flere Kommer...
        </p>
      </div>
    </section>
  );
}
