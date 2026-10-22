import React from 'react';
const T = {
  outline: { bg: 'transparent', fg: 'var(--text-brand)', bd: 'var(--hu-blue-700)' },
  soft:    { bg: 'var(--surface-soft)', fg: 'var(--hu-blue-800)', bd: 'transparent' },
  solid:   { bg: 'var(--hu-blue-700)', fg: 'var(--hu-white)', bd: 'transparent' },
  onDark:  { bg: 'transparent', fg: 'var(--hu-white)', bd: 'rgba(255,255,255,.6)' },
};
export function Pill({ tone = 'outline', size = 'md', children, style }) {
  const t = T[tone] || T.outline;
  const lg = size === 'lg';
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', minHeight: lg ? 52 : 34, padding: lg ? '0 26px' : '0 16px',
      borderRadius: 'var(--radius-pill)', border: '1.5px solid ' + t.bd, background: t.bg, color: t.fg,
      fontFamily: 'var(--font-sans)', fontSize: lg ? 20 : 14, fontWeight: 500, letterSpacing: lg ? '-0.01em' : '0.01em', whiteSpace: 'nowrap', boxSizing: 'border-box', ...style }}>
      {children}
    </span>
  );
}
