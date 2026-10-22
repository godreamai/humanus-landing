/** Typographic capsule — used for kinesiology specialties and small labels (inspired by Humanus social posts). */
export interface PillProps {
  tone?: 'outline' | 'soft' | 'solid' | 'onDark';
  /** lg = 52px capsule for specialty lists; md = 34px label */
  size?: 'md' | 'lg';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Pill(props: PillProps): JSX.Element;
