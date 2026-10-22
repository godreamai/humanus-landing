/** Section title block: eyebrow + sans heading + optional script accent line + lead. */
export interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  /** Short expressive phrase rendered in the script face under the title (2–5 words) */
  script?: string;
  lead?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
  as?: 'h1' | 'h2' | 'h3';
  size?: 'h1' | 'h2';
  style?: React.CSSProperties;
}
export declare function SectionHeading(props: SectionHeadingProps): JSX.Element;
