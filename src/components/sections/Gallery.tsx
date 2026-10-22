import { GALLERY, GALLERY_HEADING } from "@/config/content";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { SectionHeading } from "@/components/ui/SectionHeading";

const SIZE = {
  wide: { span: "lg:col-span-7", sizes: "(min-width: 1240px) 670px, (min-width: 1024px) 56vw, (min-width: 640px) 50vw, 100vw" },
  narrow: { span: "lg:col-span-5", sizes: "(min-width: 1240px) 480px, (min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw" },
} as const;

/**
 * Galería: en desktop, grilla de 12 columnas con ritmo angosta/ancha · ancha/angosta y todas las
 * fotos a la misma altura. En mobile y tablet, todas cuadradas.
 */
export function Gallery() {
  return (
    <section id="espacio" aria-labelledby="espacio-title" className="pb-[var(--section-y)]">
      <div className="container-hu flex flex-col gap-[clamp(36px,5vw,64px)]">
        <div data-reveal="0">
          <SectionHeading id="espacio-title" align="center" {...GALLERY_HEADING} />
        </div>
        <div className="grid grid-cols-1 gap-x-3.5 gap-y-6 sm:grid-cols-2 lg:grid-cols-12">
          {GALLERY.map((item, i) => (
            <figure
              key={item.caption}
              data-reveal={String(i % 2)}
              className={`m-0 flex min-w-0 flex-col gap-2.5 ${SIZE[item.size].span}`}
            >
              <PhotoFrame
                src={item.src}
                alt={item.alt}
                placeholder={item.placeholder}
                position={item.position}
                ratio={null}
                shape="soft"
                sizes={SIZE[item.size].sizes}
                className="aspect-square lg:aspect-auto lg:h-[clamp(360px,34vw,460px)]"
              />
              <figcaption className="pl-1 text-[14px] text-hu-ink-500 max-md:pl-0 max-md:text-center">{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
