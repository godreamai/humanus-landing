import React from 'react';
import { Icon } from './Icon.jsx';
const WA = 'https://wa.me/543364599242';
const V = {
  primary:   { bg: 'var(--action-primary)', bgH: 'var(--action-primary-hover)', fg: 'var(--text-on-brand)', bd: 'transparent' },
  secondary: { bg: 'transparent', bgH: 'var(--surface-soft)', fg: 'var(--text-brand)', bd: 'var(--hu-blue-300)' },
  ghost:     { bg: 'transparent', bgH: 'var(--surface-soft)', fg: 'var(--text-brand)', bd: 'transparent' },
  light:     { bg: 'var(--hu-white)', bgH: 'var(--hu-blue-100)', fg: 'var(--hu-blue-800)', bd: 'transparent' },
  outlineLight: { bg: 'transparent', bgH: 'rgba(255,255,255,.12)', fg: 'var(--hu-white)', bd: 'rgba(255,255,255,.55)' },
};
const S = { sm: { h: 40, px: 16, fs: 14, ic: 16 }, md: { h: 48, px: 22, fs: 15, ic: 18 }, lg: { h: 56, px: 28, fs: 16, ic: 20 } };
export function Button({ variant = 'primary', size = 'md', href, waMessage, icon, iconRight, full, disabled, onClick, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const v = V[variant] || V.primary, s = S[size] || S.md;
  const link = waMessage != null ? WA + (waMessage ? '?text=' + encodeURIComponent(waMessage) : '') : href;
  const Tag = link && !disabled ? 'a' : 'button';
  const external = waMessage != null;
  return (
    <Tag href={Tag === 'a' ? link : undefined} target={external ? '_blank' : undefined} rel={external ? 'noopener' : undefined}
      type={Tag === 'button' ? 'button' : undefined} disabled={Tag === 'button' ? disabled : undefined} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}
      style={{
        display: full ? 'flex' : 'inline-flex', width: full ? '100%' : undefined, alignItems: 'center', justifyContent: 'center', gap: 10,
        minHeight: s.h, padding: '0 ' + s.px + 'px', borderRadius: 'var(--radius-pill)', boxSizing: 'border-box',
        background: hover && !disabled ? v.bgH : v.bg, color: v.fg, border: '1.5px solid ' + v.bd,
        fontFamily: 'var(--font-sans)', fontSize: s.fs, fontWeight: 600, letterSpacing: '0.005em', lineHeight: 1.2, textDecoration: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1, whiteSpace: 'nowrap',
        transform: press && !disabled ? 'scale(0.98)' : 'none',
        transition: 'background var(--dur-base) var(--ease-soft), transform var(--dur-fast) var(--ease-soft)', ...style,
      }} {...rest}>
      {icon && <Icon name={icon} size={s.ic} />}
      <span>{children}</span>
      {iconRight && <Icon name={iconRight} size={s.ic} style={{ transform: hover ? 'translateX(3px)' : 'none', transition: 'transform var(--dur-base) var(--ease-out)' }} />}
    </Tag>
  );
}
