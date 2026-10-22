/**
 * Pill button / link. Pass waMessage to turn it into a WhatsApp deep link with a prefilled message.
 * @startingPoint section="Core" subtitle="Pill buttons incl. WhatsApp CTAs" viewport="700x320"
 */
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'light' | 'outlineLight';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  /** Prefilled WhatsApp text. When set, links to https://wa.me/543364599242?text=… in a new tab. "" = no text. */
  waMessage?: string;
  /** Lucide icon name or "whatsapp", placed before the label */
  icon?: string;
  /** Icon after the label; nudges right on hover (use "arrow-right") */
  iconRight?: string;
  full?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
