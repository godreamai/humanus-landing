import type { ReactNode } from "react";
import { CONTACT } from "@/config/content";
import { SITE, WA_MSG, mapsLink, waLink } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { MapFacade } from "@/components/ui/MapFacade";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Fila del <dl>: ícono en círculo de 44px + dt/dd (grid 44px 1fr, gap 14px). */
function ContactRow({ icon, term, children }: { icon: IconName; term: string; children: ReactNode }) {
  return (
    <div className="relative min-h-11 pl-[58px]">
      <span
        aria-hidden="true"
        className="absolute top-0 left-0 grid size-11 place-items-center rounded-full bg-hu-blue-100 text-hu-blue-700"
      >
        <Icon name={icon} size={20} />
      </span>
      <dt className="text-[13px] font-semibold uppercase tracking-[0.1em] text-hu-ink-500">{term}</dt>
      <dd className="m-0 mt-0.5 text-[17px] text-hu-ink-900">{children}</dd>
    </div>
  );
}

const rowLink = "text-hu-ink-900 underline hover:text-hu-blue-800";

export function LocationContact() {
  return (
    <section id="contacto" aria-labelledby="contacto-title" className="bg-surface-warm py-[var(--section-y)]">
      <div className="container-hu grid grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] items-stretch gap-[clamp(40px,5vw,64px)]">
        <div data-reveal="0" className="flex flex-col gap-8">
          <SectionHeading id="contacto-title" mobileCenter {...CONTACT} />

          {/* En mobile el bloque se centra, pero cada fila mantiene el texto al lado del ícono */}
          <dl className="m-0 flex flex-col gap-5 max-md:mx-auto max-md:w-fit max-md:max-w-full">
            <ContactRow icon="map-pin" term="Dirección">
              {SITE.address.full}
            </ContactRow>
            <ContactRow icon="clock" term="Horario">
              {SITE.hours}
            </ContactRow>
            <ContactRow icon="whatsapp" term="WhatsApp">
              <a href={waLink(WA_MSG.general)} target="_blank" rel="noopener noreferrer" className={rowLink}>
                {SITE.phoneDisplay}
              </a>
            </ContactRow>
            <ContactRow icon="instagram" term="Instagram">
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className={rowLink}>
                {SITE.instagramHandle}
              </a>
            </ContactRow>
          </dl>

          <div className="flex flex-wrap gap-3 max-md:justify-center">
            <Button size="lg" icon="whatsapp" wa="general" blockOnMobile>
              Escribir por WhatsApp
            </Button>
            <Button size="lg" variant="secondary" icon="map-pin" href={mapsLink} external blockOnMobile>
              Cómo llegar
            </Button>
            <Button size="lg" variant="ghost" icon="instagram" href={SITE.instagram} external blockOnMobile>
              Ver Instagram
            </Button>
          </div>
        </div>

        <div data-reveal="1">
          <MapFacade />
        </div>
      </div>
    </section>
  );
}
