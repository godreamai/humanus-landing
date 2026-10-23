/* eslint-disable @next/next/no-img-element -- marca de agua SVG decorativa */
import Image from "next/image";
import { PILATES } from "@/config/content";
import { Button } from "@/components/ui/Button";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PilatesSection() {
  const [archPhoto, softPhoto] = PILATES.photos;
  return (
    <section id="pilates" aria-labelledby="pilates-title" className="pb-[var(--section-y)]">
      <div className="container-hu">
        <div
          data-reveal="0"
          className="relative overflow-hidden rounded-[32px] bg-surface-deep p-[clamp(36px,6vw,88px)] sm:rounded-[var(--radius-xl)]"
        >
          {/* Capas: foto → velo azul → marca "h" */}
          <Image src={PILATES.background} alt="" fill sizes="(min-width: 1240px) 1144px, 92vw" className="object-cover" />
          <div aria-hidden="true" className="absolute inset-0" style={{ background: "var(--overlay-photo)" }} />
          <img
            src="/logos/humanus-mark-white.svg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute top-[-30%] right-[-18%] w-[min(70vw,820px)] max-w-none opacity-[.09]"
          />

          <div className="relative grid grid-cols-[repeat(auto-fit,minmax(min(100%,360px),1fr))] items-center gap-[clamp(40px,5vw,72px)]">
            <div className="flex flex-col gap-7 max-md:items-center max-md:text-center">
              <SectionHeading
                id="pilates-title"
                mobileCenter
                tone="dark"
                eyebrow={PILATES.eyebrow}
                title={PILATES.title}
                script={PILATES.script}
              />
              <p className="max-w-[460px] max-md:mx-auto text-lead leading-[1.45] text-hu-cream-50 italic">{PILATES.subtitle}</p>
              <p className="max-w-[460px] max-md:mx-auto text-[17px] leading-[1.65] text-hu-blue-200">{PILATES.body}</p>
              <div>
                <Button variant="light" size="lg" icon="whatsapp" wa="pilates" blockOnMobile>
                  {PILATES.cta}
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 items-end gap-3.5">
              <PhotoFrame
                src={archPhoto.src}
                alt={archPhoto.alt}
                shape="arch"
                ratio="3 / 4"
                sizes="(min-width: 1240px) 260px, (min-width: 900px) 22vw, 45vw"
              />
              <PhotoFrame
                src={softPhoto.src}
                alt={softPhoto.alt}
                shape="soft"
                ratio="1 / 1"
                sizes="(min-width: 1240px) 260px, (min-width: 900px) 22vw, 45vw"
                className="mb-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
