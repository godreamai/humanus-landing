import { cacheLife } from "next/cache";
import { FOOTER } from "@/config/content";
import { NAV_LINKS, SITE, WA_MSG, waLink } from "@/config/site";
import { Logo } from "@/components/ui/Logo";

async function getYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

const columnTitle = "mb-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-white";
const footerLink = "text-white no-underline hover:text-hu-blue-300";

/** Footer institucional. El padding inferior extra evita que el botón flotante tape contenido. */
export async function Footer() {
  const year = await getYear();
  return (
    <footer className="bg-surface-deep pt-[72px] pb-[104px] text-hu-blue-200">
      <div className="container-hu">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-10 max-md:text-center">
          <div className="flex flex-col gap-4 max-md:items-center">
            <Logo tone="white" size={64} />
            <p className="hu-script origin-left -rotate-2 max-md:origin-center text-[26px] leading-[1.4] text-hu-blue-300">{FOOTER.claim}</p>
          </div>

          <nav aria-label="Secciones">
            <h3 className={columnTitle}>Secciones</h3>
            <ul className="m-0 flex list-none flex-col gap-2 p-0 text-[15px]">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={footerLink}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className={columnTitle}>Contacto</h3>
            <ul className="m-0 flex list-none flex-col gap-2 p-0 text-[15px]">
              <li>
                <a href={waLink(WA_MSG.general)} target="_blank" rel="noopener noreferrer" className={footerLink}>
                  WhatsApp · {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className={footerLink}>
                  Instagram · {SITE.instagramHandle}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={columnTitle}>Visitanos</h3>
            <address className="flex flex-col gap-2 text-[15px] not-italic">
              <span>{SITE.address.street}</span>
              <span>
                {SITE.address.city}, {SITE.address.region}
              </span>
              <span>{SITE.hours}</span>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap justify-between gap-3 max-md:flex-col max-md:items-center max-md:text-center border-t border-white/[.14] pt-6 text-[13px]">
          <span>
            © {year} {SITE.name}.
          </span>
          <span>{FOOTER.legal}</span>
        </div>
      </div>
    </footer>
  );
}
