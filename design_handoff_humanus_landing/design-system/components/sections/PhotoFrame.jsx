import React from 'react';
const R = { rounded: 'var(--radius-lg)', organic: 'var(--radius-organic)', organicAlt: 'var(--radius-organic-alt)', arch: '999px 999px var(--radius-lg) var(--radius-lg)', soft: 'var(--radius-md)' };
export function PhotoFrame({ src, alt = '', shape = 'rounded', ratio = '4 / 3', placeholder = 'Foto pendiente', position = 'center', style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ position: 'relative', overflow: 'hidden', aspectRatio: ratio, borderRadius: R[shape] || R.rounded, background: 'var(--surface-soft)', ...style }}>
      {src ? (
        <img src={src} alt={alt} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: position, display: 'block', transform: hover ? 'scale(1.03)' : 'scale(1)', transition: 'transform var(--dur-slow) var(--ease-out)' }} />
      ) : (
        <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', background: 'repeating-linear-gradient(135deg, var(--hu-blue-100) 0 12px, var(--hu-cream-100) 12px 24px)' }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--hu-blue-800)', background: 'var(--surface-page)', padding: '8px 14px', borderRadius: 'var(--radius-pill)' }}>{placeholder}</span>
        </div>
      )}
    </div>
  );
}
