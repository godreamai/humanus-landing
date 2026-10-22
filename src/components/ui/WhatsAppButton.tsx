import { WA_MSG, waLink } from "@/config/site";
import { Icon } from "./Icon";

/**
 * Botón flotante de WhatsApp (navigation/FloatingWhatsApp.jsx). Único uso del verde WhatsApp.
 * En reposo muestra solo el ícono; con hover o foco aparece la etiqueta. Solo CSS, sin JS.
 */
export function WhatsAppButton() {
  return (
    <a
      href={waLink(WA_MSG.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Consultanos por WhatsApp"
      className="wa-float"
    >
      <Icon name="whatsapp" size={24} />
      <span className="wa-float-label" aria-hidden="true">
        Consultanos
      </span>
    </a>
  );
}
