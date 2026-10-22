/**
 * Site header: logo left, section links + WhatsApp CTA right. Collapses to logo + WhatsApp + menu under 1040px (container width).
 * @startingPoint section="Navigation" subtitle="Responsive header with WhatsApp CTA" viewport="1200x200"
 */
export interface SiteHeaderProps {
  links?: { label: string; href: string }[];
  /** href of the active link */
  active?: string;
  /** Adds blurred cream background + hairline after scrolling */
  scrolled?: boolean;
  waMessage?: string;
  onNavigate?: (link: { label: string; href: string }, e: React.MouseEvent) => void;
  position?: 'sticky' | 'fixed' | 'relative' | 'static';
  style?: React.CSSProperties;
}
export declare function SiteHeader(props: SiteHeaderProps): JSX.Element;
