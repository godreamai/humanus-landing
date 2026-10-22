/** Monochrome icon. Lucide (stroke 2) for UI glyphs, Simple Icons for the WhatsApp mark. Colored via currentColor. */
export interface IconProps {
  /** Lucide icon name (e.g. "arrow-right", "map-pin", "clock", "instagram", "menu", "x") or "whatsapp" */
  name: string;
  size?: number;
  color?: string;
  /** Accessible label; omit for decorative icons */
  label?: string;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;
