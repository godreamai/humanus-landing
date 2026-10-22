"use client";

import { useEffect, useRef, useState } from "react";
import { SITE, mapsEmbed } from "@/config/site";
import { Icon } from "./Icon";

/**
 * Mapa de Google Maps que se carga solo, cuando la sección se acerca a la pantalla.
 * Así no pesa en la carga inicial de la página (el iframe de Google es pesado),
 * pero la persona lo ve listo al llegar a "Ubicación y contacto" sin tener que tocar nada.
 */
export function MapFacade() {
  const ref = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setLoaded(true);
          io.disconnect();
        }
      },
      { rootMargin: "600px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative h-full min-h-[400px] overflow-hidden rounded-[var(--radius-lg)] border border-hu-cream-200 bg-hu-blue-100"
    >
      {/* Mientras carga se ve la dirección; el iframe se superpone al terminar */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-8 text-center" aria-hidden={loaded}>
        <span aria-hidden="true" className="grid size-16 place-items-center rounded-full bg-hu-blue-700 text-white">
          <Icon name="map-pin" size={28} />
        </span>
        <p className="max-w-[300px] text-[17px] leading-[1.5] text-hu-ink-900">
          {SITE.address.street}
          <br />
          <span className="text-hu-ink-500">
            {SITE.address.city}, {SITE.address.region}
          </span>
        </p>
      </div>
      {loaded && (
        <iframe
          title={`Mapa: Humanus, ${SITE.address.full}`}
          src={mapsEmbed}
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 block h-full w-full border-0"
        />
      )}
    </div>
  );
}
