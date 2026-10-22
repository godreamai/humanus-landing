/* eslint-disable @next/next/no-img-element -- SVG oficial: next/image no aporta optimización para vectores */
type LogoProps = {
  tone?: "blue" | "white";
  /** Tamaño de la caja de la marca en px (el SVG tiene aire propio; el glifo ocupa ≈55%). */
  size?: number;
  wordmark?: boolean;
  tagline?: boolean;
  className?: string;
};

/**
 * Marca "h" oficial + wordmark tipográfico (core/Logo.jsx).
 * El wordmark "HUMANUS / SALUD Y REHABILITACIÓN" es provisional hasta recibir el lockup oficial.
 */
export function Logo({ tone = "blue", size = 56, wordmark = true, tagline = true, className }: LogoProps) {
  const white = tone === "white";
  return (
    <span className={["inline-flex items-center leading-none", className].filter(Boolean).join(" ")} style={{ gap: Math.round(size * 0.02) }}>
      <img
        src={white ? "/logos/humanus-mark-white.svg" : "/logos/humanus-mark-blue.svg"}
        alt={wordmark ? "" : "Humanus"}
        width={size}
        height={size}
        className="block shrink-0"
        style={{ width: size, height: size, margin: -size * 0.14 }}
      />
      {wordmark && (
        <span className="flex flex-col whitespace-nowrap" style={{ gap: size * 0.07 }}>
          <span
            className="font-semibold"
            style={{ fontSize: size * 0.34, letterSpacing: "0.18em", color: white ? "var(--hu-white)" : "var(--hu-blue-800)" }}
          >
            HUMANUS
          </span>
          {tagline && (
            <span
              className="font-medium"
              style={{
                fontSize: Math.max(9, size * 0.165),
                letterSpacing: "0.12em",
                color: white ? "var(--text-on-brand-soft)" : "var(--text-muted)",
              }}
            >
              SALUD Y REHABILITACIÓN
            </span>
          )}
        </span>
      )}
    </span>
  );
}
