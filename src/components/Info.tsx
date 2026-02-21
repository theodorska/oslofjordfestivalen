"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import WaveDivider from "./WaveDivider";

const infoItems = [
  { icon: "\u{1F4C5}", title: "Dato", detail: "17. juli 2026" },
  { icon: "\u{1F4CD}", title: "Sted", detail: "Vippetangen, Oslo" },
  { icon: "\u{1F550}", title: "Dørene åpner", detail: "Kl. 14:00" },
  { icon: "\u{1F3AB}", title: "Billetter", detail: "250 - 350 NOK" },
  { icon: "\u{1F51E}", title: "Aldersgrense", detail: "18 år" },
  { icon: "\u{1F687}", title: "Transport", detail: "Tog/buss til Bjørvika" },
];

export default function Info() {
  const ref = useScrollReveal();

  return (
    <>
      <WaveDivider fillTop="var(--color-off-cream)" fillBottom="var(--color-off-dark)" />
      <section id="info" className="bg-off-dark py-24 md:py-32 px-6" ref={ref}>
        <div className="max-w-5xl mx-auto">
          <h2 className="fade-in-up font-[family-name:var(--font-display)] text-5xl md:text-7xl font-bold text-off-cream uppercase mb-16 tracking-tight text-center">
            Info
          </h2>

          <div className="fade-in-up grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {infoItems.map((item) => (
              <div
                key={item.title}
                className="border border-off-cream/10 rounded-sm p-8 text-center hover:border-off-orange/50 transition-colors"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-[family-name:var(--font-display)] text-off-cream/60 text-sm uppercase tracking-widest mb-2">
                  {item.title}
                </h3>
                <p className="font-[family-name:var(--font-display)] text-off-cream text-xl md:text-2xl font-bold">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
