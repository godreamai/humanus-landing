import Image from "next/image";
import type { CSSProperties } from "react";

export type PhotoShape = "rounded" | "soft" | "organic" | "organicAlt" | "arch";

const RADIUS: Record<PhotoShape, string> = {
  rounded: "var(--radius-lg)",
  soft: "var(--radius-md)",
  organic: "var(--radius-organic)",
  organicAlt: "var(--radius-organic-alt)",
  arch: "999px 999px var(--radius-lg) var(--radius-lg)",
};

type PhotoFrameProps = {
  src?: string;
  alt?: string;
  shape?: PhotoShape;
  /** CSS aspect-ratio, p. ej. "4 / 5". `null` = sin ratio fijo (lo define className) */
  ratio?: string | null;
  /** Texto del placeholder rayado cuando no hay foto */
  placeholder?: string;
  /** object-position */
  position?: string;
  /** Atributo sizes de next/image */
  sizes: string;
  /** Imagen principal (LCP): carga inmediata con prioridad alta */
  priority?: boolean;
  className?: string;
  style?: CSSProperties;
};

/** Foto con formas de marca (sections/PhotoFrame.jsx). Sin src muestra un placeholder claramente pendiente. */
export function PhotoFrame({
  src,
  alt = "",
  shape = "rounded",
  ratio = "4 / 3",
  placeholder = "Foto pendiente",
  position = "center",
  sizes,
  priority,
  className,
  style,
}: PhotoFrameProps) {
  return (
    <div
      className={["photo-frame", className].filter(Boolean).join(" ")}
      style={{ ...(ratio ? { aspectRatio: ratio } : {}), borderRadius: RADIUS[shape], ...style }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          preload={priority}
          className="object-cover"
          style={{ objectPosition: position }}
        />
      ) : (
        <div className="photo-placeholder" role="img" aria-label={placeholder}>
          <span className="rounded-full bg-surface-page px-3.5 py-2 text-center text-[13px] font-semibold uppercase tracking-[0.08em] text-hu-blue-800">
            {placeholder}
          </span>
        </div>
      )}
    </div>
  );
}
