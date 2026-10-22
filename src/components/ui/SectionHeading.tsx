import type { ReactNode } from "react";

/** Títulos de sección más grandes en mobile (< 768px). */
export const MOBILE_TITLE = "max-md:text-[length:clamp(36px,10vw,44px)]";

type SectionHeadingProps = {
  /** id del título, para section[aria-labelledby] */
  id: string;
  eyebrow?: string;
  title: ReactNode;
  /** Frase expresiva en script bajo el título (2–5 palabras) */
  script?: string;
  lead?: string;
  align?: "left" | "center";
  /** En mobile (< 768px): bloque centrado y título más grande */
  mobileCenter?: boolean;
  tone?: "light" | "dark";
  as?: "h2" | "h3";
};

/** Bloque de título de sección (sections/SectionHeading.jsx): eyebrow + título sans + acento script + lead. */
export function SectionHeading({
  id,
  eyebrow,
  title,
  script,
  lead,
  align = "left",
  mobileCenter,
  tone = "light",
  as: H = "h2",
}: SectionHeadingProps) {
  const dark = tone === "dark";
  const center = align === "center";
  return (
    <div
      className={[
        "flex max-w-[760px] flex-col gap-[18px]",
        center ? "mx-auto items-center text-center" : "items-start text-left",
        mobileCenter && "max-md:mx-auto max-md:items-center max-md:text-center",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {eyebrow && (
        <span className="hu-eyebrow" style={dark ? { color: "var(--text-on-brand-soft)" } : undefined}>
          {eyebrow}
        </span>
      )}
      <H
        id={id}
        className={["text-h2", mobileCenter && MOBILE_TITLE].filter(Boolean).join(" ")}
        style={{ lineHeight: "var(--lh-heading)", color: dark ? "var(--hu-white)" : "var(--text-strong)" }}
      >
        {title}
        {script && (
          <span
            className={[
              "hu-script block",
              center ? "origin-center" : "origin-left",
              mobileCenter && "max-md:origin-center",
            ]
              .filter(Boolean)
              .join(" ")}
            style={{
              fontSize: "1em",
              lineHeight: 1.25,
              color: dark ? "var(--hu-blue-300)" : "var(--text-brand)",
              marginTop: "0.08em",
              transform: "rotate(-2deg)",
            }}
          >
            {script}
          </span>
        )}
      </H>
      {lead && (
        <p
          className="max-w-[var(--container-text)] text-lead"
          style={{ lineHeight: 1.55, color: dark ? "var(--text-on-brand-soft)" : "var(--text-body)" }}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
