"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import WaveDivider from "./WaveDivider";

export default function About() {
  const ref = useScrollReveal();

  return (
    <>
      <WaveDivider fillTop="var(--color-off-dark)" fillBottom="var(--color-off-cream)" />
      <section id="om" className="bg-off-cream py-24 md:py-32 px-6" ref={ref}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="fade-in-up font-[family-name:var(--font-display)] text-5xl md:text-7xl font-bold text-off-dark uppercase mb-12 tracking-tight">
            Om OFF
          </h2>

          {/* Pull quote */}
          <blockquote className="fade-in-up mb-12">
            <p className="font-[family-name:var(--font-display)] text-2xl md:text-4xl lg:text-5xl font-bold text-off-dark/90 italic leading-tight">
              &ldquo;En scene for artistene du ikke har hørt ennå &mdash; men snart ikke kan leve uten.&rdquo;
            </p>
          </blockquote>

          {/* Description */}
          <div className="fade-in-up space-y-6 text-lg md:text-xl text-off-dark/70 leading-relaxed max-w-3xl mx-auto">
            <p>
              Oslofjord Festival er Oslos nye musikkfestival dedikert til å løfte frem
              morgendagens artister. Vi tror på at den beste musikken ofte finnes der du
              minst venter det — og vi gir den en scene ved fjorden.
            </p>
            <p>
              Med Vippetangen som kulisse og Oslofjorden som nabo, skaper vi en intim
              festivalopplevelse der publikum møter artistene på nært hold. Én dag,
              uforglemmelige øyeblikk.
            </p>
          </div>

          {/* Nordic Booster badge */}
          <div className="fade-in-up mt-16 inline-flex items-center gap-3 border border-off-dark/10 rounded-sm px-6 py-3">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="font-[family-name:var(--font-display)] text-sm text-off-dark/60 uppercase tracking-widest">
              Drevet av grønn energi fra Nordic Booster
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
