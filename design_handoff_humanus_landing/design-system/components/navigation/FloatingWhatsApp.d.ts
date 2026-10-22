/** Floating WhatsApp button (bottom-right). Icon-only at rest, reveals a short label on hover/focus. */
export interface FloatingWhatsAppProps {
  message?: string;
  label?: string;
  /** Force the label open (e.g. near the footer); undefined = hover-driven */
  expanded?: boolean;
  position?: 'fixed' | 'static' | 'relative';
  style?: React.CSSProperties;
}
export declare function FloatingWhatsApp(props: FloatingWhatsAppProps): JSX.Element;
