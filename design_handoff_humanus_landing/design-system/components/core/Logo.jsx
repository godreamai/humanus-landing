import React from 'react';
export function Logo({ tone = 'blue', size = 56, wordmark = true, tagline = true, style }) {
  const src = (tone === 'white' ? 'humanus-mark-white' : 'humanus-mark-blue') + '.png';
  const base = (typeof window !== 'undefined' && window.HUMANUS_ASSET_BASE) || '/assets/logo/';
  const fg = tone === 'white' ? 'var(--hu-white)' : 'var(--hu-blue-800)';
  const sub = tone === 'white' ? 'var(--text-on-brand-soft)' : 'var(--text-muted)';
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: Math.round(size * 0.02), lineHeight: 1, ...style }}>
      <img src={base + src} alt={wordmark ? '' : 'Humanus'} width={size} height={size} style={{ display: 'block', width: size, height: size, margin: -size * 0.14 }} />
      {wordmark && (
        <span style={{ display: 'flex', flexDirection: 'column', gap: size * 0.07, whiteSpace: 'nowrap' }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: size * 0.34, letterSpacing: '0.18em', color: fg }}>HUMANUS</span>
          {tagline && <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: Math.max(9, size * 0.165), letterSpacing: '0.12em', color: sub }}>SALUD Y REHABILITACIÓN</span>}
        </span>
      )}
    </span>
  );
}
