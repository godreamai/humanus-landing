import type { Service } from "@/config/content";
import { Button } from "./Button";
import { PhotoFrame } from "./PhotoFrame";

/** Bloque de servicio (sections/ServiceCard.jsx): sin contenedor ni sombra, la fotografía lo sostiene. */
export function ServiceCard({ index, title, text, image, alt, shape, ctaLabel, wa }: Service) {
  return (
    <article className="flex flex-col gap-[22px] max-md:text-center">
      <PhotoFrame
        src={image}
        alt={alt}
        shape={shape}
        ratio="4 / 5"
        sizes="(min-width: 1240px) 380px, (min-width: 1000px) 30vw, (min-width: 680px) 50vw, 100vw"
      />
      <div className="flex flex-col gap-2.5 px-1">
        <span className="hu-script text-[24px] leading-[1.2] text-hu-blue-700" aria-hidden="true">
          {index}
        </span>
        <h3 className="text-h3" style={{ lineHeight: 1.15, letterSpacing: "-0.02em" }}>
          {title}
        </h3>
        <p className="text-[16px] leading-[1.6] text-hu-ink-700">{text}</p>
      </div>
      <div className="px-1 max-md:flex max-md:justify-center">
        <Button variant="secondary" size="sm" icon="whatsapp" wa={wa}>
          {ctaLabel}
        </Button>
      </div>
    </article>
  );
}
