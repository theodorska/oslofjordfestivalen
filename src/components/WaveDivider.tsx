export default function WaveDivider({
  fillTop = "var(--color-off-dark)",
  fillBottom = "var(--color-off-cream)",
  className = "",
}: {
  fillTop?: string;
  fillBottom?: string;
  className?: string;
}) {
  return (
    <div className={`w-full overflow-hidden leading-none ${className}`} style={{ backgroundColor: fillBottom }}>
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full h-16 md:h-24"
        style={{ display: "block" }}
      >
        <path
          d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,0 L0,0 Z"
          fill={fillTop}
        />
      </svg>
    </div>
  );
}
