import { REHAB, REHAB_AREAS } from "@/config/content";
import { Button } from "@/components/ui/Button";
import { MOBILE_TITLE } from "@/components/ui/SectionHeading";

export function RehabilitationAreas() {
  return (
    <section id="rehabilitacion" aria-labelledby="rehabilitacion-title" className="pb-[var(--section-y)]">
      <div className="container-hu">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,360px),1fr))] items-start gap-[clamp(40px,6vw,96px)] border-t border-hu-cream-200 pt-[var(--section-y)]">
          <div data-reveal="0" className="flex max-w-[440px] flex-col gap-7 max-md:mx-auto max-md:items-center max-md:text-center">
            <span className="hu-eyebrow">{REHAB.eyebrow}</span>
            <h2
              id="rehabilitacion-title"
              className={`text-h2 ${MOBILE_TITLE}`}
              style={{ lineHeight: 1.08, letterSpacing: "-0.025em", color: "var(--hu-blue-700)" }}
            >
              {REHAB.title} <em className="font-normal italic text-hu-blue-500">{REHAB.titleEm}</em>
            </h2>
            <p className="text-lead leading-[1.55] text-hu-ink-700">{REHAB.lead}</p>
            <div className="max-md:flex max-md:w-full max-md:justify-center">
              <Button icon="whatsapp" wa="kine" blockOnMobile>
                {REHAB.cta}
              </Button>
            </div>
          </div>

          <ol className="m-0 flex list-none flex-col p-0">
            {REHAB_AREAS.map((area) => (
              <li
                key={area.n}
                data-reveal="0"
                className="grid grid-cols-[56px_minmax(0,1fr)] gap-4 border-b border-hu-cream-300 py-8 max-md:grid-cols-1 max-md:gap-2 max-md:text-center"
              >
                <span aria-hidden="true" className="pt-2.5 max-md:pt-0 text-[15px] font-semibold tracking-[0.08em] text-hu-blue-500">
                  {area.n}
                </span>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-[clamp(24px,2.4vw,30px)]" style={{ letterSpacing: "-0.02em" }}>
                    {area.name}
                  </h3>
                  <p className="max-w-[560px] max-md:mx-auto text-[17px] leading-[1.6] text-hu-ink-700">{area.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
