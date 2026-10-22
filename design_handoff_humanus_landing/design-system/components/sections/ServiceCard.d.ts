/**
 * Service block: photo, title, short copy and a contextual WhatsApp CTA. No card chrome — photography carries it.
 * @startingPoint section="Sections" subtitle="Service block with contextual WhatsApp CTA" viewport="700x560"
 */
export interface ServiceCardProps {
  /** Small script numeral/label above the title, e.g. "01" */
  index?: string;
  title: string;
  text: string;
  image?: string;
  alt?: string;
  ctaLabel?: string;
  /** Prefilled WhatsApp message for this service; omit to hide the CTA */
  waMessage?: string;
  shape?: 'rounded' | 'soft' | 'organic' | 'organicAlt' | 'arch';
  ratio?: string;
  style?: React.CSSProperties;
}
export declare function ServiceCard(props: ServiceCardProps): JSX.Element;
