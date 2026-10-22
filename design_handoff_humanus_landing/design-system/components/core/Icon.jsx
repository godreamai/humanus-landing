import React from 'react';
const LUCIDE = 'https://cdn.jsdelivr.net/npm/lucide-static@0.468.0/icons/';
const BRAND = { whatsapp: 'https://cdn.jsdelivr.net/npm/simple-icons@13.21.0/icons/whatsapp.svg' };
export function Icon({ name, size = 20, color = 'currentColor', label, style }) {
  const url = BRAND[name] || LUCIDE + name + '.svg';
  const mask = 'url(' + url + ') center / contain no-repeat';
  return (
    <span role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true}
      style={{ display: 'inline-block', flex: 'none', width: size, height: size, background: color, WebkitMask: mask, mask, ...style }} />
  );
}
