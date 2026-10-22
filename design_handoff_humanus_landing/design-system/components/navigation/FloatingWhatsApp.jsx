import React from 'react';
import { Icon } from '../core/Icon.jsx';
const WA = 'https://wa.me/543364599242';
export function FloatingWhatsApp({ message = 'Hola, quisiera hacer una consulta sobre los servicios de Humanus.', label = 'Escribinos', expanded, position = 'fixed', style }) {
  const [hover, setHover] = React.useState(false);
  const show = expanded ?? hover;
  return (
    <a href={WA + '?text=' + encodeURIComponent(message)} target="_blank" rel="noopener" aria-label="Consultar por WhatsApp"
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onFocus={() => setHover(true)} onBlur={() => setHover(false)}
      style={{ position, right: position === 'fixed' ? 'max(16px, env(safe-area-inset-right))' : undefined, bottom: position === 'fixed' ? 'max(16px, env(safe-area-inset-bottom))' : undefined, zIndex: 'var(--z-float)',
        display: 'inline-flex', alignItems: 'center', gap: show ? 10 : 0, height: 56, padding: show ? '0 22px 0 16px' : '0 16px', borderRadius: 'var(--radius-pill)',
        background: 'var(--hu-whatsapp)', color: 'var(--hu-whatsapp-ink)', boxShadow: 'var(--shadow-float)', textDecoration: 'none', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 15,
        transition: 'gap var(--dur-base) var(--ease-out), padding var(--dur-base) var(--ease-out)', ...style }}>
      <Icon name="whatsapp" size={24} />
      <span style={{ maxWidth: show ? 140 : 0, overflow: 'hidden', whiteSpace: 'nowrap', transition: 'max-width var(--dur-base) var(--ease-out)' }}>{label}</span>
    </a>
  );
}
