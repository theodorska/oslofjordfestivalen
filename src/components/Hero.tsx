import Image from "next/image";
import Countdown from "./Countdown";
import WaveDivider from "./WaveDivider";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-off-dark overflow-hidden">
      {/* Decorative sun glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-off-orange/5 blur-3xl" />

      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
        {/* Logo */}
        <Image
          src="/off-logo.jpg"
          alt="Oslofjord Festival"
          width={160}
          height={160}
          className="rounded-2xl shadow-2xl"
          priority
        />

        {/* Main title */}
        <h1 className="font-[family-name:var(--font-display)] font-bold uppercase leading-none">
          <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-off-orange animate-fade-in">
            OSLOFJORD
          </span>
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-off-cream mt-2 animate-fade-in-delay">
            FESTIVAL
          </span>
        </h1>

        {/* Subtitle */}
        <p className="font-[family-name:var(--font-display)] text-off-cream/70 text-lg md:text-xl tracking-[0.3em] uppercase">
          17. Juli 2026 &middot; Vippetangen, Oslo
        </p>

        {/* Countdown */}
        <Countdown />

        {/* CTA */}
        <a
          href="#info"
          className="mt-4 bg-off-orange text-off-cream px-10 py-4 font-[family-name:var(--font-display)] font-bold text-lg md:text-xl uppercase tracking-wider rounded-sm hover:bg-off-orange-light hover:scale-105 transition-all duration-200 shadow-lg shadow-off-orange/20"
        >
          Kjøp Billetter
        </a>
      </div>

      {/* Wave divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <WaveDivider />
      </div>
    </section>
  );
}
