/**
 * Datos del establecimiento: ÚNICA fuente de teléfono, dirección, enlaces y mensajes de WhatsApp.
 * No duplicar estos valores en otros archivos.
 */
export const SITE = {
  name: "Humanus — Salud y rehabilitación",
  shortName: "Humanus",
  phoneE164: "+5493364599242",
  phoneDisplay: "+54 9 336 459-9242",
  waBase: "https://wa.me/543364599242",
  instagram: "https://www.instagram.com/humanus.salud/",
  instagramHandle: "@humanus.salud",
  address: {
    street: "De La Nación 394",
    city: "San Nicolás de los Arroyos",
    region: "Buenos Aires",
    postalCode: "2900",
    country: "AR",
    full: "De La Nación 394, San Nicolás de los Arroyos, Buenos Aires, Argentina",
  },
  // NO indicar días: no están confirmados.
  hours: "9:00 a 13:00 y 15:00 a 19:00",
} as const;

/**
 * Dominio de producción. Se define con NEXT_PUBLIC_SITE_URL (p. ej. https://humanus.com.ar).
 * Mientras no exista, no se publican canonical, sitemap con URLs ni OG absolutos.
 */
export const SITE_URL: string | null = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") || null;

export const WA_MSG = {
  general: "Hola, ¿cómo están? Quisiera hacer una consulta en Humanus.",
  kine: "Hola, ¿cómo están? Quisiera consultar por kinesiología en Humanus.",
  pilates: "Hola, ¿cómo están? Quisiera consultar por las clases de Pilates.",
  consul: "Hola, ¿cómo están? Quisiera recibir información sobre los consultorios.",
} as const;

export type WaMessageKey = keyof typeof WA_MSG;

export const waLink = (msg?: string) =>
  msg ? `${SITE.waBase}?text=${encodeURIComponent(msg)}` : SITE.waBase;

export const mapsLink =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Humanus, " + SITE.address.full);

export const mapsEmbed =
  "https://www.google.com/maps?q=" + encodeURIComponent(SITE.address.full) + "&output=embed";

export const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nuestro espacio", href: "#espacio" },
  { label: "Contacto", href: "#contacto" },
] as const;
