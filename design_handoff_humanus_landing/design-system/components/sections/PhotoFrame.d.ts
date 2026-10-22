/** Photo container with brand shapes (rounded, organic blob, arch) and a labelled placeholder when no image exists. */
export interface PhotoFrameProps {
  src?: string;
  alt?: string;
  shape?: 'rounded' | 'soft' | 'organic' | 'organicAlt' | 'arch';
  /** CSS aspect-ratio, e.g. "4 / 3", "3 / 4", "1 / 1" */
  ratio?: string;
  /** Text shown on the striped placeholder when src is missing */
  placeholder?: string;
  /** object-position */
  position?: string;
  style?: React.CSSProperties;
}
export declare function PhotoFrame(props: PhotoFrameProps): JSX.Element;
