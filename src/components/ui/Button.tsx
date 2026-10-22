import type { AnchorHTMLAttributes, ReactNode } from "react";
import { WA_MSG, waLink, type WaMessageKey } from "@/config/site";
import { Icon, type IconName } from "./Icon";

type ButtonProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children"> & {
  variant?: "primary" | "secondary" | "ghost" | "light";
  size?: "sm" | "md" | "lg";
  /** Enlace interno o externo. Ignorado si se pasa `wa`. */
  href?: string;
  /** Mensaje predefinido de WhatsApp: convierte el botón en enlace a wa.me en una pestaña nueva. */
  wa?: WaMessageKey;
  /** Abre en una pestaña nueva (enlaces externos que no son WhatsApp). */
  external?: boolean;
  icon?: IconName;
  /** Ícono a la derecha; se desplaza 3px en hover (usar "arrow-right"). */
  iconRight?: IconName;
  /** Ancho completo por debajo de 520px. */
  blockOnMobile?: boolean;
  children: ReactNode;
};

const ICON_SIZE = { sm: 16, md: 18, lg: 20 } as const;

/** Botón pill (core/Button.jsx). Siempre es un enlace: todas las acciones del sitio navegan. */
export function Button({
  variant = "primary",
  size = "md",
  href,
  wa,
  external,
  icon,
  iconRight,
  blockOnMobile,
  className,
  children,
  ...rest
}: ButtonProps) {
  const target = wa ? waLink(WA_MSG[wa]) : href;
  const isExternal = Boolean(wa) || external;
  const classes = ["btn", `btn-${variant}`, `btn-${size}`, blockOnMobile && "btn-block-mobile", className]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      href={target}
      className={classes}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {icon && <Icon name={icon} size={ICON_SIZE[size]} />}
      <span>{children}</span>
      {iconRight && <Icon name={iconRight} size={ICON_SIZE[size]} className="btn-icon-right" />}
    </a>
  );
}
