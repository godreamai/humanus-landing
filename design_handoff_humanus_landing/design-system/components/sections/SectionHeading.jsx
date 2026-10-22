import React from 'react';
export function SectionHeading({ eyebrow, title, script, lead, align = 'left', tone = 'light', as = 'h2', size = 'h2', style }) {
  const H = as;
  const dark = tone === 'dark';
  const center = align === 'center';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: center ? 'center' : 'flex-start', textAlign: center ? 'center' : 'left', gap: 18, maxWidth: 760, marginInline: center ? 'auto' : undefined, ...style }}>
      {eyebrow && <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-caption)', fontWeight: 600, letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', color: dark ? 'var(--text-on-brand-soft)' : 'var(--text-brand)' }}>{eyebrow}</span>}
      <H style={{ margin: 0, fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: size === 'h1' ? 'var(--fs-h1)' : 'var(--fs-h2)', lineHeight: size === 'h1' ? 'var(--lh-tight)' : 'var(--lh-heading)', letterSpacing: 'var(--ls-heading)', color: dark ? 'var(--hu-white)' : 'var(--text-strong)', textWrap: 'balance' }}>
        {title}
        {script && <span style={{ display: 'block', fontFamily: 'var(--font-script)', fontWeight: 400, fontSize: '1em', lineHeight: 1.25, letterSpacing: 0, color: dark ? 'var(--hu-blue-300)' : 'var(--text-brand)', marginTop: '0.08em', transform: 'rotate(-2deg)', transformOrigin: center ? 'center' : 'left' }}>{script}</span>}
      </H>
      {lead && <p style={{ margin: 0, fontSize: 'var(--fs-lead)', lineHeight: 1.55, color: dark ? 'var(--text-on-brand-soft)' : 'var(--text-body)', maxWidth: 'var(--container-text)', textWrap: 'pretty' }}>{lead}</p>}
    </div>
  );
}
