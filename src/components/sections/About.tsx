import { ABOUT } from "@/config/content";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="nosotros" aria-labelledby="nosotros-title" className="bg-surface-warm py-[var(--section-y)]">
      <div className="container-hu grid grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] items-center gap-[clamp(48px,7vw,112px)]">
        <div data-reveal="0" className="relative w-full max-w-[520px] max-md:mx-auto">
          <div
            aria-hidden="true"
            className="absolute top-[-6%] left-[-8%] h-[78%] w-[70%] border-[14px] border-hu-blue-700 opacity-90"
            style={{ borderRadius: "var(--radius-organic)" }}
          />
          <PhotoFrame
            src={ABOUT.image.src}
            alt={ABOUT.image.alt}
            shape="organic"
            ratio="1 / 1"
            sizes="(min-width: 900px) 520px, 100vw"
            className="relative"
          />
        </div>
        <div data-reveal="1" className="flex max-w-[540px] flex-col gap-7 max-md:mx-auto max-md:text-center">
          <SectionHeading id="nosotros-title" mobileCenter eyebrow={ABOUT.eyebrow} title={ABOUT.title} script={ABOUT.script} />
          <p className="text-lead leading-[1.55] text-hu-ink-900">{ABOUT.lead}</p>
          <p className="text-[17px] leading-[1.65] text-hu-ink-700">{ABOUT.body}</p>
        </div>
      </div>
    </section>
  );
}
