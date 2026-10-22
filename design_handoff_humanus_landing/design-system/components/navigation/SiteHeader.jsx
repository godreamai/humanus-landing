import React from 'react';
import { Logo } from '../core/Logo.jsx';
import { Button } from '../core/Button.jsx';
import { Icon } from '../core/Icon.jsx';
const DEFAULT_LINKS = [{ label: 'Inicio', href: '#inicio' }, { label: 'Servicios', href: '#servicios' }, { label: 'Nuestro espacio', href: '#espacio' }, { label: 'Contacto', href: '#contacto' }];
export function SiteHeader({ links = DEFAULT_LINKS, active, scrolled = false, waMessage = 'Hola, quisiera hacer una consulta sobre los servicios de Humanus.', onNavigate, position = 'sticky', style }) {
  const ref = React.useRef(null);
  const [w, setW] = React.useState(1200);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current || typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver(([e]) => setW(e.contentRect.width));
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);
  const compact = w < 1040;
  const go = (l, e) => { setOpen(false); onNavigate && onNavigate(l, e); };
  return (
    <header ref={ref} style={{ position, top: 0, zIndex: 'var(--z-header)', background: scrolled || open ? 'rgba(250,248,244,.92)' : 'transparent', backdropFilter: scrolled ? 'blur(14px)' : 'none', WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none', borderBottom: '1px solid ' + (scrolled ? 'var(--border-subtle)' : 'transparent'), transition: 'background var(--dur-base) var(--ease-soft), border-color var(--dur-base)', ...style }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)', height: compact ? 68 : 'var(--header-h)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
        <a href="#inicio" onClick={(e) => go(links[0], e)} aria-label="Humanus — inicio" style={{ textDecoration: 'none', display: 'flex' }}><Logo size={compact ? 50 : 58} tagline={!compact} /></a>
        {!compact && (
          <nav aria-label="Principal" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={(e) => go(l, e)} aria-current={active === l.href ? 'true' : undefined}
                style={{ padding: '10px 14px', borderRadius: 'var(--radius-pill)', fontSize: 15, fontWeight: 500, whiteSpace: 'nowrap', textDecoration: 'none', color: active === l.href ? 'var(--text-brand)' : 'var(--text-strong)', background: active === l.href ? 'var(--surface-soft)' : 'transparent', transition: 'color var(--dur-fast), background var(--dur-fast)' }}>{l.label}</a>
            ))}
            <Button size="sm" icon="whatsapp" waMessage={waMessage} style={{ marginLeft: 12 }}>Consultar por WhatsApp</Button>
          </nav>
        )}
        {compact && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Button size="sm" icon="whatsapp" waMessage={waMessage} aria-label="Consultar por WhatsApp" style={{ padding: '0 16px' }}>WhatsApp</Button>
            <button type="button" aria-expanded={open} aria-label={open ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setOpen(!open)}
              style={{ width: 44, height: 44, borderRadius: 'var(--radius-pill)', border: '1.5px solid var(--border-strong)', background: 'var(--surface-card)', color: 'var(--hu-blue-800)', display: 'grid', placeItems: 'center', cursor: 'pointer' }}>
              <Icon name={open ? 'x' : 'menu'} size={20} />
            </button>
          </div>
        )}
      </div>
      {compact && open && (
        <nav aria-label="Principal" style={{ padding: '8px var(--gutter) 24px', display: 'flex', flexDirection: 'column', gap: 2 }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={(e) => go(l, e)} style={{ padding: '14px 4px', fontSize: 22, fontWeight: 500, letterSpacing: '-0.02em', textDecoration: 'none', color: 'var(--text-strong)', borderBottom: '1px solid var(--border-subtle)' }}>{l.label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}
