/**
 * Humanus brush-script "h" mark with an optional typeset wordmark.
 * Image path = window.HUMANUS_ASSET_BASE (default "/assets/logo/") + humanus-mark-{blue|white}.png.
 */
export interface LogoProps {
  tone?: 'blue' | 'white';
  /** Mark box size in px (the PNG has built-in padding; visible glyph ≈ 55%) */
  size?: number;
  wordmark?: boolean;
  tagline?: boolean;
  style?: React.CSSProperties;
}
export declare function Logo(props: LogoProps): JSX.Element;
