/* eslint-disable @next/next/no-img-element -- marca de agua SVG decorativa */
import { HERO } from "@/config/content";
import { SITE } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PhotoFrame } from "@/components/ui/PhotoFrame";

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="inicio-title"
      className="container-hu grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] overflow-x-clip items-center gap-[clamp(48px,6vw,88px)] pt-[clamp(48px,7vw,96px)] pb-[var(--section-y)]"
    >
      <div className="hero-reveal flex flex-col gap-7">
        <h1
          id="inicio-title"
          className="text-display max-md:text-center max-md:text-[length:clamp(48px,14vw,64px)]"
          style={{ lineHeight: 1.02, letterSpacing: "-0.025em", color: "var(--hu-blue-700)" }}
        >
          {HERO.title}
          <span
            className="hu-script block origin-left max-md:origin-center"
            style={{
              fontSize: "0.96em",
              lineHeight: 1.1,
              marginTop: "-0.08em",
              transform: "rotate(-3deg)",
              color: "var(--hu-blue-700)",
            }}
          >
            {HERO.script}
          </span>
        </h1>

        <p className="max-w-[500px] text-lead leading-[1.55] text-hu-ink-700 max-md:mx-auto max-md:text-center">{HERO.description}</p>

        <div className="flex flex-wrap gap-3">
          <Button size="lg" icon="whatsapp" wa="general" blockOnMobile>
            {HERO.ctaPrimary}
          </Button>
          <Button size="lg" variant="secondary" href="#servicios" iconRight="arrow-right" blockOnMobile>
            {HERO.ctaSecondary}
          </Button>
        </div>

        <ul className="m-0 flex list-none flex-wrap gap-x-7 gap-y-2.5 p-0 text-[14px] text-hu-ink-500 max-md:flex-col max-md:items-center">
          <li className="inline-flex items-center gap-2">
            <Icon name="map-pin" size={16} />
            {HERO.addressShort}
          </li>
          <li className="inline-flex items-center gap-2">
            <Icon name="clock" size={16} />
            <span>
              <span className="sr-only">Horario: </span>
              {SITE.hours}
            </span>
          </li>
        </ul>
      </div>

      <div className="hero-reveal relative w-full max-w-[540px] justify-self-center" data-delay="1">
        <div
          aria-hidden="true"
          className="absolute right-[-7%] bottom-[-8%] aspect-square w-[62%] overflow-hidden bg-hu-blue-700"
          style={{ borderRadius: "var(--radius-organic)" }}
        >
          <img
            src="/logos/humanus-mark-white.svg"
            alt=""
            className="absolute top-[-40%] right-[-50%] w-[160%] max-w-none opacity-[.16]"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute top-[7%] left-[-5%] aspect-square w-[20%] bg-hu-blue-300"
          style={{ borderRadius: "var(--radius-organic-alt)" }}
        />
        <PhotoFrame
          src={HERO.image.src}
          alt={HERO.image.alt}
          shape="arch"
          ratio="4 / 5"
          position="58% center"
          sizes="(min-width: 640px) 465px, 78vw"
          priority
          className="relative mx-auto w-[86%] md:mx-0"
        />
      </div>
    </section>
  );
}
