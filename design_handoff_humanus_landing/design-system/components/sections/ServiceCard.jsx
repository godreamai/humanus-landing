import React from 'react';
import { PhotoFrame } from './PhotoFrame.jsx';
import { Button } from '../core/Button.jsx';
export function ServiceCard({ index, title, text, image, alt, ctaLabel = 'Consultar', waMessage, shape = 'rounded', ratio = '4 / 5', style }) {
  return (
    <article style={{ display: 'flex', flexDirection: 'column', gap: 22, ...style }}>
      <PhotoFrame src={image} alt={alt || title} shape={shape} ratio={ratio} placeholder={'Foto: ' + title} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingInline: 4 }}>
        {index && <span style={{ fontFamily: 'var(--font-script)', fontWeight: 400, fontSize: 24, lineHeight: 1.2, color: 'var(--text-brand)' }}>{index}</span>}
        <h3 style={{ margin: 0, fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 'var(--fs-h3)', lineHeight: 1.15, letterSpacing: '-0.02em', color: 'var(--text-strong)' }}>{title}</h3>
        <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: 'var(--text-body)', textWrap: 'pretty' }}>{text}</p>
      </div>
      {waMessage != null && <div style={{ paddingInline: 4 }}><Button variant="secondary" size="sm" icon="whatsapp" waMessage={waMessage}>{ctaLabel}</Button></div>}
    </article>
  );
}
