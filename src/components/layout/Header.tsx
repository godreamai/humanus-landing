"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { NAV_LINKS } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";

const MENU_ID = "menu-principal";
const SECTION_IDS = ["inicio", "nosotros", "servicios", "rehabilitacion", "pilates", "espacio", "contacto"];
/** Secciones sin link propio que se marcan con el link más cercano. */
const ACTIVE_ALIAS: Record<string, string> = { rehabilitacion: "#servicios", pilates: "#servicios" };

/** Header sticky (navigation/SiteHeader.jsx). Completo desde 1040px; debajo, logo + WhatsApp + menú. */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#inicio");
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Estado "scrolled" con listener pasivo
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Link activo según la sección visible
  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          setActive(ACTIVE_ALIAS[id] ?? `#${id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const close = useCallback((restoreFocus = false) => {
    setOpen(false);
    if (restoreFocus) toggleRef.current?.focus();
  }, []);

  // Navegación interna precisa (menú desktop, menú mobile, logo, footer y CTAs con "#…"):
  // el destino se calcula con la altura real del header en ese momento, así la sección
  // queda exactamente debajo del header en cualquier tamaño de pantalla.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
      const hash = link?.getAttribute("href");
      if (!hash || hash.length < 2) return;
      const target = document.getElementById(hash.slice(1));
      if (!target) return;

      e.preventDefault();
      setOpen(false);
      if (NAV_LINKS.some((l) => l.href === hash)) setActive(hash);

      const headerH = headerRef.current?.offsetHeight ?? 0;
      // Secciones sin padding superior propio (p. ej. "Nuestro espacio") reciben un respiro bajo el header.
      const gap = parseFloat(getComputedStyle(target).paddingTop) > 0 ? 0 : 32;
      const top = hash === "#inicio" ? 0 : target.getBoundingClientRect().top + window.scrollY - headerH - gap;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: Math.max(0, Math.round(top)), behavior: reduce ? "auto" : "smooth" });
      history.pushState(null, "", hash);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // Menú abierto: Esc cierra, foco atrapado en el header, cierre al pasar a desktop
  useEffect(() => {
    const root = document.documentElement;
    if (!open) {
      delete root.dataset.menuOpen;
      return;
    }
    root.dataset.menuOpen = "";
    menuRef.current?.querySelector<HTMLElement>("a")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close(true);
        return;
      }
      if (e.key !== "Tab" || !headerRef.current) return;
      const focusables = Array.from(
        headerRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
      ).filter((el) => el.offsetParent !== null);
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    const mq = window.matchMedia("(min-width: 1040px)");
    const onMq = () => mq.matches && close();

    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
      delete root.dataset.menuOpen;
    };
  }, [open, close]);

  return (
    <header ref={headerRef} className="site-header" data-scrolled={scrolled} data-open={open}>
      <div className="container-hu flex h-[68px] items-center justify-between gap-6 nav:h-[var(--header-h)]">
        <a href="#inicio" aria-label="Humanus — inicio" className="flex rounded-md no-underline">
          <span className="flex nav:hidden">
            <Logo size={50} tagline={false} />
          </span>
          <span className="hidden nav:flex">
            <Logo size={58} />
          </span>
        </a>

        {/* Desktop */}
        <nav aria-label="Principal" className="hidden items-center gap-1.5 nav:flex">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav-link" aria-current={active === l.href ? "true" : undefined}>
              {l.label}
            </a>
          ))}
          <Button size="sm" icon="whatsapp" wa="general" className="ml-3">
            Consultanos
          </Button>
        </nav>

        {/* Compacto */}
        <div className="flex items-center gap-2 nav:hidden">
          <Button size="sm" icon="whatsapp" wa="general" aria-label="Consultanos por WhatsApp" className="max-[399px]:gap-0 max-[399px]:px-3">
            <span className="max-[399px]:sr-only">WhatsApp</span>
          </Button>
          <button
            ref={toggleRef}
            type="button"
            aria-expanded={open}
            aria-controls={MENU_ID}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((o) => !o)}
            className="grid size-11 cursor-pointer place-items-center rounded-full border-[1.5px] border-hu-cream-300 bg-white text-hu-blue-800"
          >
            <Icon name={open ? "x" : "menu"} size={20} />
          </button>
        </div>
      </div>

      <div id={MENU_ID} className="mobile-menu nav:hidden" ref={menuRef}>
        <nav aria-label="Principal (móvil)" className="overflow-hidden">
          <ul className="container-hu m-0 flex list-none flex-col gap-0.5 pt-2 pb-6">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="mobile-nav-link"
                  aria-current={active === l.href ? "true" : undefined}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
