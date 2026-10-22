import { SERVICES, SERVICES_HEADING } from "@/config/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";

export function Services() {
  return (
    <section id="servicios" aria-labelledby="servicios-title" className="py-[var(--section-y)]">
      <div className="container-hu flex flex-col gap-[clamp(40px,6vw,72px)]">
        <div data-reveal="0">
          <SectionHeading id="servicios-title" mobileCenter {...SERVICES_HEADING} />
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] items-start gap-x-[clamp(24px,3vw,40px)] gap-y-[clamp(40px,3.5vw,48px)]">
          {SERVICES.map((service, i) => (
            <div key={service.index} data-reveal={String(i)}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
