import type { WaMessageKey } from "./site";
import type { PhotoShape } from "@/components/ui/PhotoFrame";

/** Textos de la landing. Fuente: handoff de diseño + HUMANUS_DESIGN_SYSTEM.md. */

export const HERO = {
  eyebrow: "Salud · Rehabilitación · Movimiento",
  title: "Tu bienestar",
  script: "en cada paso.",
  description:
    "En Humanus te acompañamos a cuidar tu salud y conectar con tu cuerpo a través de la kinesiología, la rehabilitación y el movimiento consciente.",
  ctaPrimary: "Consultanos por WhatsApp",
  ctaSecondary: "Conocé nuestros servicios",
  addressShort: "De La Nación 394, San Nicolás",
  image: {
    src: "/images/kine-1.jpg",
    alt: "Profesional de Humanus acompañando un ejercicio en el reformer de Pilates",
  },
};

// Propuesta editorial: pendiente de aprobación del cliente.
export const ABOUT = {
  eyebrow: "Nosotros",
  title: "Estamos",
  script: "en cada paso.",
  lead: "En Humanus entendemos la salud como un proceso que merece atención, acompañamiento y movimiento consciente.",
  body: "Buscamos que cada persona encuentre un espacio cercano y profesional para cuidar su bienestar.",
  image: { src: "/images/kine-2.jpg", alt: "Sala de kinesiología de Humanus con camillas" },
};

export type Service = {
  index: string;
  title: string;
  text: string;
  image: string;
  alt: string;
  shape: PhotoShape;
  ctaLabel: string;
  wa: WaMessageKey;
};

export const SERVICES_HEADING = {
  eyebrow: "Servicios",
  title: "Un espacio para tu bienestar.",
  lead: "Conocé las áreas que forman parte de Humanus.",
};

export const SERVICES: Service[] = [
  {
    index: "01",
    title: "Kinesiología y rehabilitación",
    text: "Tratamientos personalizados y acompañamiento profesional para cuidar tu salud.",
    image: "/images/kine-3.jpg",
    alt: "Sesión de kinesiología en Humanus",
    shape: "rounded",
    ctaLabel: "Consultar por kinesiología",
    wa: "kine",
  },
  {
    index: "02",
    title: "Pilates",
    text: "Movimiento consciente para conectar con tu cuerpo, fortalecerlo y mejorar tu movilidad.",
    image: "/images/pilates-1.jpg",
    alt: "Clase de Pilates en Humanus",
    shape: "arch",
    ctaLabel: "Consultar por Pilates",
    wa: "pilates",
  },
  {
    index: "03",
    title: "Consultorios",
    text: "Espacios para profesionales de la salud, equipados para recibir la mejor atención integral.",
    image: "/images/consul-1.jpg",
    alt: "Consultorio equipado de Humanus",
    shape: "rounded",
    ctaLabel: "Consultar por consultorios",
    wa: "consul",
  },
];

export const REHAB = {
  eyebrow: "Kinesiología",
  title: "La kinesiología",
  titleEm: "va más allá.",
  lead: "En Humanus trabajamos diferentes áreas de rehabilitación para acompañar en cada etapa de recuperación.",
  cta: "Consultar por kinesiología",
};

// Textos literales del documento de marca: no modificar sin revisión profesional.
export const REHAB_AREAS = [
  {
    n: "01",
    name: "Respiratoria",
    text: "Busca mejorar la función respiratoria mediante técnicas y ejercicios específicos, ayudando a disminuir síntomas, aumentar la tolerancia al esfuerzo y favorecer la autonomía del paciente.",
  },
  {
    n: "02",
    name: "Cardiovascular",
    text: "Orientada a mejorar la capacidad física y funcional de personas con enfermedades cardiovasculares mediante ejercicios supervisados que favorecen la recuperación y la calidad de vida.",
  },
  {
    n: "03",
    name: "Traumatológica",
    text: "Enfocada en recuperar movilidad, fuerza y funcionalidad después de lesiones, traumatismos o cirugías, aliviando dolor y facilitando el retorno a las actividades cotidianas.",
  },
  {
    n: "04",
    name: "Neurológica",
    text: "Enfocada en recuperación y mejora de funciones motoras afectadas por enfermedades o lesiones del sistema nervioso, con tratamientos personalizados que buscan favorecer movilidad, autonomía y calidad de vida.",
  },
];

export const PILATES = {
  eyebrow: "Pilates",
  title: "Cada movimiento",
  script: "tiene una intención.",
  subtitle: "Pilates es mucho más que hacer ejercicios en una máquina.",
  body: "Trabajamos el movimiento consciente, la fuerza, el control corporal y la coordinación, priorizando la calidad de cada movimiento.",
  cta: "Consultá por nuestras clases",
  background: "/images/pilates-3.jpg",
  photos: [
    { src: "/images/pilates-2.jpg", alt: "Ejercicio de Pilates en colchoneta" },
    { src: "/images/pilates-1.jpg", alt: "Sala de Pilates de Humanus" },
  ],
};

export type GalleryItem = {
  /** Sin src se muestra el placeholder rayado: nunca reemplazar por foto de stock. */
  src?: string;
  alt?: string;
  placeholder?: string;
  caption: string;
  /** Ancho en desktop: angosta (5/12) o ancha (7/12) */
  size: "wide" | "narrow";
  /** object-position de la foto */
  position?: string;
};

export const GALLERY_HEADING = { eyebrow: "Nuestro espacio", title: "Un espacio", script: "pensado para vos." };

export const GALLERY: GalleryItem[] = [
  // La entrada es vertical: va en una columna angosta, encuadrada desde arriba para mostrar el arco.
  {
    src: "/images/entrada.jpg",
    alt: "Puerta de entrada de madera con arco de Humanus en De La Nación 394",
    caption: "Entrada · De La Nación 394",
    size: "narrow",
    position: "center 15%",
  },
  { src: "/images/consul-3.jpg", alt: "Espacio de atención de Humanus", caption: "Espacios de atención", size: "wide" },
  { src: "/images/consul-2.jpg", alt: "Instalaciones de Humanus", caption: "Instalaciones", size: "wide" },
  { src: "/images/pilates-2.jpg", alt: "Equipamiento de la sala de Pilates", caption: "Sala de Pilates", size: "narrow" },
];

export const CONTACT = {
  eyebrow: "Ubicación y contacto",
  title: "Te esperamos",
  script: "en Humanus.",
};

export const FINAL_CTA = {
  title: "Tu bienestar",
  script: "merece acompañamiento.",
  text: "Estamos para ayudarte a encontrar el espacio y la atención que necesitás.",
  cta: "Hablemos por WhatsApp",
};

export const FOOTER = {
  claim: "Estamos en cada paso.",
  legal: "La información de este sitio no reemplaza la consulta con un profesional.",
};
