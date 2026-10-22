/* eslint-disable @next/next/no-img-element -- marca de agua SVG decorativa */
import { FINAL_CTA } from "@/config/content";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section aria-labelledby="cta-title" className="py-[var(--section-y)]">
      <div className="container-hu">
        <div
          data-reveal="0"
          className="relative flex flex-col items-center gap-7 overflow-hidden rounded-[32px] bg-hu-blue-700 px-[clamp(28px,6vw,88px)] py-[clamp(56px,8vw,112px)] text-center sm:rounded-[var(--radius-xl)]"
        >
          <img
            src="/logos/humanus-mark-white.svg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[-48%] left-[-14%] w-[min(90vw,760px)] max-w-none opacity-10"
          />
          <div
            aria-hidden="true"
            className="absolute top-[-40px] right-[-40px] aspect-square w-[180px] bg-hu-blue-300 opacity-50"
            style={{ borderRadius: "var(--radius-organic)" }}
          />
          <h2 id="cta-title" className="relative text-h2 text-white" style={{ lineHeight: 1.1, color: "var(--hu-white)" }}>
            {FINAL_CTA.title}
            <span
              className="hu-script block"
              style={{ fontSize: "0.96em", lineHeight: 1.4, color: "var(--hu-blue-200)", transform: "rotate(-2deg)" }}
            >
              {FINAL_CTA.script}
            </span>
          </h2>
          <p className="relative max-w-[520px] text-lead leading-[1.55] text-hu-blue-100">{FINAL_CTA.text}</p>
          <div className="relative">
            <Button variant="light" size="lg" icon="whatsapp" wa="general" blockOnMobile>
              {FINAL_CTA.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
