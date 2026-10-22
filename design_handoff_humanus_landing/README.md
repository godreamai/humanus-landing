# Handoff: Landing page Humanus — Salud y rehabilitación

## 1. Resumen

Landing de una sola página para **Humanus**, centro de salud y rehabilitación en De La Nación 394, San Nicolás de los Arroyos, Buenos Aires (CP 2900).

Objetivos, en orden: **conversión a WhatsApp**, branding (profesional, cercano, humano), comunicar los servicios, generar confianza (espacio, filosofía, ubicación). Principio rector: menos ruido, más claridad.

## 2. Sobre los archivos de diseño

`reference/Humanus Landing.dc.html` es una **referencia de diseño hecha en HTML**: muestra el aspecto y el comportamiento esperados. No es código de producción para copiar. La tarea es **recrear este diseño en el entorno del proyecto**. Si el repositorio está vacío, usar:

- Next.js (App Router) + TypeScript
- Tailwind CSS (mapear los tokens de §8 a `tailwind.config` / variables CSS)
- `next/font` para las fuentes, `next/image` para fotos
- Lucide React para íconos (Simple Icons solo para la marca WhatsApp)
- Animaciones con CSS + IntersectionObserver. No hace falta Motion.

`design-system/components/*.jsx` contiene la implementación de referencia de cada componente (Button, Icon, Logo, Pill, SectionHeading, PhotoFrame, ServiceCard, SiteHeader, FloatingWhatsApp), con sus tipos en `.d.ts` y notas en `.prompt.md`. Portarlos a componentes TSX.

## 3. Fidelidad

**Alta fidelidad.** Colores, tipografía, espaciado, copy e interacciones son finales, salvo lo marcado como provisional en §11.

## 4. Arquitectura sugerida

```
app/
  layout.tsx          // fuentes, metadata, JSON-LD
  page.tsx            // compone las secciones
  sitemap.ts / robots.ts
components/
  Header.tsx  Hero.tsx  About.tsx  Services.tsx  RehabilitationAreas.tsx
  PilatesSection.tsx  Gallery.tsx  LocationContact.tsx  FinalCTA.tsx  Footer.tsx
  WhatsAppButton.tsx  // flotante
  ui/ Button.tsx Icon.tsx Logo.tsx SectionHeading.tsx PhotoFrame.tsx ServiceCard.tsx Reveal.tsx
config/
  site.ts             // datos del establecimiento, enlaces, mensajes WA (ÚNICA fuente)
  content.ts          // textos, servicios, áreas
```

`config/site.ts` (no duplicar teléfono, dirección ni URLs en otro archivo):

```ts
export const SITE = {
  name: 'Humanus — Salud y rehabilitación',
  phoneE164: '+5493364599242',
  phoneDisplay: '+54 9 336 459-9242',
  waBase: 'https://wa.me/543364599242',
  instagram: 'https://www.instagram.com/humanus.salud/',
  instagramHandle: '@humanus.salud',
  address: {
    street: 'De La Nación 394',
    city: 'San Nicolás de los Arroyos',
    region: 'Buenos Aires',
    postalCode: '2900',
    country: 'AR',
    full: 'De La Nación 394, San Nicolás de los Arroyos, Buenos Aires, Argentina',
  },
  hours: '9:00 a 13:00 y 15:00 a 19:00', // NO indicar días: no están confirmados
};
export const WA_MSG = {
  general: 'Hola, ¿cómo están? Quisiera hacer una consulta en Humanus.',
  kine: 'Hola, ¿cómo están? Quisiera consultar por kinesiología en Humanus.',
  pilates: 'Hola, ¿cómo están? Quisiera consultar por las clases de Pilates.',
  consul: 'Hola, ¿cómo están? Quisiera recibir información sobre los consultorios.',
};
export const waLink = (msg?: string) =>
  msg ? `${SITE.waBase}?text=${encodeURIComponent(msg)}` : SITE.waBase;
export const mapsLink =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent('Humanus, ' + SITE.address.full);
export const mapsEmbed =
  'https://www.google.com/maps?q=' + encodeURIComponent(SITE.address.full) + '&output=embed';
```

Todos los enlaces externos llevan `target="_blank" rel="noopener"`.

## 5. Layout general

- Contenedor: `max-width: 1240px; margin: 0 auto; padding-inline: clamp(20px, 4vw, 48px)`.
- Padding vertical de sección: `clamp(72px, 10vw, 136px)`.
- Fondos alternados: crema página `#FAF8F4` y crema cálida `#F1EEE7`. Hay dos bandas azules redondeadas (Pilates y CTA final) y el footer azul profundo.
- Responsive: los grids de 2 columnas usan `repeat(auto-fit, minmax(min(100%, Xpx), 1fr))` y se apilan solos por debajo de ~900px. Breakpoints equivalentes si se usa Tailwind: `lg` (≥900px) para pasar a 2/3 columnas. Por debajo de 520px los CTA pasan a ancho completo.
- `html { scroll-behavior: smooth; scroll-padding-top: 88px }` (respeta el header sticky). Usar `auto` con `prefers-reduced-motion`.
- Sin overflow horizontal: `body { overflow-x: hidden }`. Las formas decorativas que salen del marco van dentro de contenedores con `overflow: hidden` o `position: relative`.

## 6. Secciones (en orden)

Orden de anclas: `#inicio`, `#nosotros`, `#servicios`, `#rehabilitacion`, `#pilates`, `#espacio`, `#contacto`.

### 6.1 Header — `SiteHeader`
- Sticky, `top: 0`, z-index 50, alto ~76px.
- Izquierda: Logo azul (marca "h" + wordmark provisional). Derecha: links + botón "Consultanos" (primary, ícono WhatsApp, `waLink(WA_MSG.general)`).
- Links: Inicio, Nosotros, Servicios, Nuestro espacio, Contacto.
- En reposo el fondo es transparente. Con `scrollY > 12`: crema al 92% + `backdrop-filter: blur(14px)` + borde inferior 1px `#E6E1D6`.
- Por debajo de 1040px: logo + botón WhatsApp compacto + botón menú (ícono `menu`/`x`). El menú se despliega a pantalla completa o como panel. Requisitos: `aria-expanded`, `aria-controls`, se cierra con Esc y al tocar un link, foco atrapado mientras está abierto.
- Link activo: color `#0050AD`. Resto: `#292929`. Hover: `#083F83`.

### 6.2 Hero — `#inicio`
Grid de 2 columnas (texto 1fr / imagen 1fr, `minmax(min(100%,440px),1fr)`), gap `clamp(48px,6vw,88px)`, `align-items: center`. Padding superior `clamp(24px,5vw,64px)`, inferior = padding de sección.

Columna texto (flex column, gap 28px):
- Eyebrow "SALUD · REHABILITACIÓN · MOVIMIENTO" (clase `hu-eyebrow`). **Oculto en la versión actual** (`display:none`). Mantener en el DOM opcional o eliminar.
- **H1 (único en la página):** "Tu bienestar" + salto + script "en cada paso."
  - Línea 1: Nunito Sans 500, `clamp(44px,7vw,88px)`, line-height 1.02, letter-spacing −0.025em, color `#0050AD`, `text-wrap: balance`.
  - Línea 2 (`<span>` block): Pacifico, 0.96em, line-height 1.1, `margin-top: -0.08em`, `rotate(-3deg)`, `transform-origin: left center`, color `#0050AD`. Interlineado ajustado a pedido del cliente: las dos líneas deben quedar juntas.
- Descripción: `clamp(18px,1.6vw,21px)`, lh 1.55, max-width 500px, color `#4A4A48`.
  > En Humanus te acompañamos a cuidar tu salud y conectar con tu cuerpo a través de la kinesiología, la rehabilitación y el movimiento consciente.
- CTAs (flex wrap, gap 12px): "Consultanos por WhatsApp" (primary lg, ícono whatsapp, `WA_MSG.general`) y "Conocé nuestros servicios" (secondary lg, `iconRight="arrow-right"`, `href="#servicios"`).
- Meta (flex wrap, gap 10px 28px, 14px, `#6E6C67`, íconos 16px): map-pin "De La Nación 394, San Nicolás" · clock "9:00 a 13:00 y 15:00 a 19:00".

Columna imagen (relative, max-width 540px, centrada):
- Blob azul `#0050AD`: absolute, width 62%, `aspect-ratio: 1`, right −7%, bottom −8%, `border-radius: 58% 42% 52% 48% / 46% 54% 46% 54%`, overflow hidden. Adentro, marca "h" blanca a 160% de ancho, right −50%, top −40%, opacity .16.
- Punto celeste `#96B7E2`: absolute, width 20%, `aspect-ratio: 1`, left −5%, top 7%, `border-radius: 42% 58% 38% 62% / 55% 40% 60% 45%`.
- Foto `kine-1.jpg` en `PhotoFrame shape="arch"`, ratio 4/5, `object-position: 58% center`, width 86%, relative. **Prioridad de carga** (`priority` en next/image, sin lazy).
- En mobile la imagen va debajo del texto.

### 6.3 Sobre Humanus — `#nosotros`
Fondo `#F1EEE7`. Grid 2 columnas (`minmax(min(100%,400px),1fr)`), gap `clamp(48px,7vw,112px)`, centrado vertical.
- Imagen (max 520px): anillo orgánico decorativo absolute (left −8%, top −6%, 70% × 78%, borde 14px `#0050AD`, radius orgánico, opacity .9) detrás de `kine-2.jpg` en `PhotoFrame shape="organic"` ratio 1/1.
- Texto (max 540px, gap 28px):
  - SectionHeading h2: eyebrow "Nosotros", título "Estamos", script "en cada paso."
  - Lead (fs-lead, `#292929`): "En Humanus entendemos la salud como un proceso que merece atención, acompañamiento y movimiento consciente."
  - Párrafo (17px, lh 1.65, `#4A4A48`): "Buscamos que cada persona encuentre un espacio cercano y profesional para cuidar su bienestar."
  - Nota: este texto es una propuesta editorial y el cliente tiene que aprobarlo.

### 6.4 Servicios — `#servicios`
Fondo página. Flex column, gap `clamp(40px,6vw,72px)`.
- SectionHeading h2: eyebrow "Servicios", título "Un espacio para tu bienestar.", lead "Conocé las áreas que forman parte de Humanus."
- Grid 3 columnas (`minmax(min(100%,300px),1fr)`), gap `clamp(40px,3.5vw,48px)` (filas) × `clamp(24px,3vw,40px)` (columnas), `align-items: start`. Reveal escalonado 0/100/200ms.
- `ServiceCard` (sin contenedor ni sombra: foto + índice + título + texto + CTA):

| # | Título | Texto | Foto / forma | CTA | Mensaje |
|---|---|---|---|---|---|
| 01 | Kinesiología y rehabilitación | Tratamientos personalizados y acompañamiento profesional para cuidar tu salud. | kine-3.jpg / rounded | Consultar por kinesiología | `WA_MSG.kine` |
| 02 | Pilates | Movimiento consciente para conectar con tu cuerpo, fortalecerlo y mejorar tu movilidad. | pilates-1.jpg / arch | Consultar por Pilates | `WA_MSG.pilates` |
| 03 | Consultorios | Espacios para profesionales de la salud, equipados para recibir la mejor atención integral. | consul-1.jpg / rounded | Consultar por consultorios | `WA_MSG.consul` |

### 6.5 Áreas de rehabilitación — `#rehabilitacion`
Padding superior = sección, borde superior 1px `#E6E1D6` (dentro del contenedor). Grid 2 columnas (`minmax(min(100%,360px),1fr)`), gap `clamp(40px,6vw,96px)`, `align-items: start`.
- Izquierda (max 440px, gap 28px): eyebrow "Kinesiología". H2 "La kinesiología " + `<em>` "va más allá." (h2 en 500 `#0050AD`; em en italic 400 `#3976B7`). Lead: "En Humanus trabajamos diferentes áreas de rehabilitación para acompañar en cada etapa de recuperación." Botón primary md "Consultar por kinesiología" (`WA_MSG.kine`).
- Derecha: `<ol>` sin bullets. Cada `<li>`: grid `56px 1fr`, gap 16px, padding 32px 0, borde inferior 1px `#D5CEBF`.
  - Número (15px, 600, tracking .08em, `#3976B7`, `aria-hidden`).
  - H3 (`clamp(24px,2.4vw,30px)`, 500, −0.02em, `#292929`) + párrafo (17px, lh 1.6, max 560px).
- Textos (literales del documento de marca, no modificar sin revisión profesional):
  1. **Respiratoria**: Busca mejorar la función respiratoria mediante técnicas y ejercicios específicos, ayudando a disminuir síntomas, aumentar la tolerancia al esfuerzo y favorecer la autonomía del paciente.
  2. **Cardiovascular**: Orientada a mejorar la capacidad física y funcional de personas con enfermedades cardiovasculares mediante ejercicios supervisados que favorecen la recuperación y la calidad de vida.
  3. **Traumatológica**: Enfocada en recuperar movilidad, fuerza y funcionalidad después de lesiones, traumatismos o cirugías, aliviando dolor y facilitando el retorno a las actividades cotidianas.
  4. **Neurológica**: Enfocada en recuperación y mejora de funciones motoras afectadas por enfermedades o lesiones del sistema nervioso, con tratamientos personalizados que buscan favorecer movilidad, autonomía y calidad de vida.

### 6.6 Pilates — `#pilates`
Padding inferior = sección (sin padding superior). Banda dentro del contenedor: relative, overflow hidden, fondo `#083F83`, radius 48px (32px en mobile), padding `clamp(36px,6vw,88px)`.
- Capas: foto `pilates-3.jpg` cover (decorativa, `alt=""`) → velo `rgba(8,63,131,.78)` → marca "h" blanca (width `min(70vw,820px)`, right −18%, top −30%, opacity .09).
- Grid 2 columnas (`minmax(min(100%,360px),1fr)`), gap `clamp(40px,5vw,72px)`.
  - Texto (gap 28px): SectionHeading `tone="dark"` h2, eyebrow "Pilates", título "Cada movimiento", script "tiene una intención." Subtítulo italic fs-lead `#FAF8F4`: "Pilates es mucho más que hacer ejercicios en una máquina." Párrafo 17px `#C9DAEF`: "Trabajamos el movimiento consciente, la fuerza, el control corporal y la coordinación, priorizando la calidad de cada movimiento." Botón `variant="light"` lg "Consultá por nuestras clases" (`WA_MSG.pilates`).
  - Fotos: grid 2 columnas, gap 14px, `align-items: end`. `pilates-2.jpg` arch 3/4 y `pilates-1.jpg` soft 1/1 con `margin-bottom: 40px`.

### 6.7 Nuestro espacio — `#espacio`
Padding inferior = sección. SectionHeading centrado h2: eyebrow "Nuestro espacio", título "Un espacio", script "pensado para vos."
Galería editorial asimétrica: flex wrap, gap 14px, `align-items: flex-start`. Cada `figure` tiene un `figcaption` de 14px `#6E6C67`.

| Orden | flex | Ratio | Imagen | Caption |
|---|---|---|---|---|
| 1 | 7 1 440px | 16/10 | **Placeholder**: "Foto pendiente: entrada del establecimiento" | Entrada · De La Nación 394 |
| 2 | 5 1 300px | 4/5 | consul-3.jpg | Espacios de atención |
| 3 | 5 1 300px | 4/5 | pilates-2.jpg | Sala de Pilates |
| 4 | 7 1 440px | 16/10 | consul-2.jpg | Instalaciones |

Todas con `shape="soft"`, lazy. El placeholder debe verse claramente como pendiente (rayado + etiqueta, ver `PhotoFrame.jsx`) y nunca reemplazarse por una foto de stock.

### 6.8 Ubicación y contacto — `#contacto`
Fondo `#F1EEE7`. Grid 2 columnas (`minmax(min(100%,400px),1fr)`), gap `clamp(40px,5vw,64px)`, `align-items: stretch`.
- Izquierda (gap 32px):
  - SectionHeading h2: eyebrow "Ubicación y contacto", título "Te esperamos", script "en Humanus."
  - `<dl>` (gap 20px). Cada fila es un grid `44px 1fr`, gap 14px. Ícono en un círculo de 44px con fondo `#E3ECF7` y color `#0050AD`. `dt` 13px 600 uppercase tracking .1em `#6E6C67`. `dd` 17px `#292929`.
    - Dirección: De La Nación 394, San Nicolás de los Arroyos, Buenos Aires, Argentina
    - Horario: 9:00 a 13:00 y 15:00 a 19:00
    - WhatsApp: +54 9 336 459-9242 (link)
    - Instagram: @humanus.salud (link)
  - Botones (flex wrap, gap 12px, todos lg): "Escribir por WhatsApp" (primary, `WA_MSG.general`) · "Cómo llegar" (secondary, map-pin, `mapsLink`) · "Ver Instagram" (ghost, instagram).
- Derecha: mapa embebido con radius 32px, borde 1px `#E6E1D6`, min-height 400px, `loading="lazy"`, `referrerpolicy="no-referrer-when-downgrade"` y un `title` descriptivo. **Recomendación de rendimiento y privacidad:** mostrar una imagen estática o un placeholder con el botón "Ver mapa" y cargar el iframe recién al hacer click (facade).

### 6.9 CTA final
Padding = sección. Banda centrada: fondo `#0050AD`, radius 48px, padding `clamp(56px,8vw,112px) clamp(28px,6vw,88px)`, `text-align: center`, gap 28px, overflow hidden.
- Decoración: marca "h" blanca (width `min(90vw,760px)`, left −14%, bottom −48%, opacity .1) y blob celeste de 180px arriba a la derecha (right/top −40px, opacity .5).
- H2 blanco fs-h2 "Tu bienestar" + script `#C9DAEF` "merece acompañamiento." (rotate −2deg).
- Párrafo fs-lead `#E3ECF7`, max 520px: "Estamos para ayudarte a encontrar el espacio y la atención que necesitás."
- Botón light lg "Hablemos por WhatsApp" (`WA_MSG.general`).

### 6.10 Footer
Fondo `#083F83`, texto `#C9DAEF`, padding 72px 0 104px (el espacio inferior extra evita que el botón flotante tape contenido).
- Grid `repeat(auto-fit, minmax(min(100%,200px),1fr))`, gap 40px:
  1. Logo blanco (64px) + script "Estamos en cada paso." (26px, `#96B7E2`, rotate −2deg).
  2. "Secciones": links internos (blancos, hover `#96B7E2`).
  3. "Contacto": WhatsApp · +54 9 336 459-9242 / Instagram · @humanus.salud.
  4. "Visitanos": `<address>` con dirección y horario.
- Títulos de columna: `h3` 13px 600 uppercase tracking .12em blanco.
- Línea legal: borde superior 1px `rgba(255,255,255,.14)`, mt 56px, pt 24px, 13px, flex space-between. Textos: "© {año dinámico} Humanus — Salud y rehabilitación." y "La información de este sitio no reemplaza la consulta con un profesional."

### 6.11 Botón flotante de WhatsApp — `FloatingWhatsApp`
Fixed, a 16px del borde inferior derecho, z-index 60, sombra `0 6px 20px -6px rgba(6,46,96,.28)`. Es el único lugar donde se usa el verde WhatsApp `#25D366` (ícono `#0B3D21` o blanco según el componente). En reposo muestra solo el ícono; en hover o focus aparece la etiqueta "Consultanos". `aria-label="Consultanos por WhatsApp"`. Mensaje: `WA_MSG.general`.

## 7. Interacciones y comportamiento

- **Reveal on scroll:** fade + translateY(16px) → 0, 560ms, `cubic-bezier(.22,.61,.36,1)`, escalonado de 100ms por índice (`data-reveal="0|1|2"`). Se dispara una sola vez con IntersectionObserver (threshold .12, rootMargin `0 0 -40px 0`). Lo que ya está visible al cargar anima de inmediato. Implementar sin ocultar el contenido si no hay JS (aplicar la clase inicial desde JS). Con `prefers-reduced-motion: reduce` no hay animación.
- **Botones:** forma pill. Hover primary `#0050AD` → `#083F83`. Secondary y ghost ganan fondo celeste-niebla `#E3ECF7`. El ícono de flecha a la derecha se desplaza 3px. Press `scale(.98)`. Transición 160–260ms.
- **Fotos:** zoom de 3% en 560ms en hover (dentro de un contenedor con overflow hidden).
- **Links:** hover a `#083F83` (o `#96B7E2` sobre fondos azules).
- **Foco:** `outline: 2px solid #1F66BD; outline-offset: 3px` en `:focus-visible`, en todo lo interactivo.
- **Header:** pasa a estado "scrolled" con `scrollY > 12` (listener pasivo).
- No hay modales, pop-ups, formularios, chatbot ni sistema de reservas.

## 8. Design tokens

### Colores
| Token | Hex | Uso |
|---|---|---|
| `--hu-blue-900` | #062E60 | press primario |
| `--hu-blue-800` | #083F83 | azul profundo: footer, banda Pilates, hover |
| `--hu-blue-700` | #0050AD | azul principal: títulos, botones, CTA final |
| `--hu-blue-600` | #1F66BD | anillo de foco |
| `--hu-blue-500` | #3976B7 | azul medio: numeración, itálicas |
| `--hu-blue-300` | #96B7E2 | celeste: blobs, líneas |
| `--hu-blue-200` | #C9DAEF | celeste pálido: texto sobre azul |
| `--hu-blue-100` | #E3ECF7 | celeste niebla: fondos de íconos, hover |
| `--hu-cream-50` | #FAF8F4 | fondo de página |
| `--hu-cream-100` | #F1EEE7 | fondo cálido alternado |
| `--hu-cream-200` | #E6E1D6 | hairline |
| `--hu-cream-300` | #D5CEBF | divisores fuertes |
| `--hu-ink-900` | #292929 | texto fuerte |
| `--hu-ink-700` | #4A4A48 | texto de cuerpo |
| `--hu-ink-500` | #6E6C67 | texto muted |
| `--hu-whatsapp` | #25D366 | solo en el botón flotante |
| `--overlay-photo` | rgba(8,63,131,.78) | velo sobre fotos |

Distribución orientativa: 65% crema, 25% azul, 10% celestes. Sin degradados en la UI.

### Tipografía
- Sans: **Nunito Sans** (300–900, con itálica). Títulos en 500 con −0.025em. Cuerpo en 400, 17px, lh 1.6.
- Script: **Pacifico**, solo para fragmentos emocionales de 2 a 5 palabras dentro de titulares. Tamaño ~0.96em del título, rotación −2° a −3°. Nunca para cuerpo, botones ni etiquetas.
- Escala: display `clamp(44px,7vw,88px)` · h1 `clamp(38px,5.6vw,68px)` · h2 `clamp(30px,4vw,48px)` · h3 `clamp(22px,2.4vw,28px)` · lead `clamp(18px,1.6vw,21px)` · body 17 · small 15 · caption 13.
- Eyebrow: 13px, 600, uppercase, tracking .14em, `#0050AD` (ver `.hu-eyebrow` en `design-system/tokens/base.css`).
- Line-heights: tight 1.04 · heading 1.12 · body 1.6.

### Espaciado, radios y sombras
- Escala: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 136.
- Sección `clamp(72px,10vw,136px)` · gutter `clamp(20px,4vw,48px)` · contenedor 1240px · texto 640px.
- Radios: 8 · 12 · 20 · 32 · 48 · pill 999. Orgánico `58% 42% 52% 48% / 46% 54% 46% 54%`. Orgánico alternativo `42% 58% 38% 62% / 55% 40% 60% 45%`. Arco: radio superior completo (ver `PhotoFrame.jsx`).
- Sombras: soft `0 1px 2px rgba(8,63,131,.04), 0 8px 24px -12px rgba(8,63,131,.10)` · lift `0 2px 4px rgba(8,63,131,.05), 0 18px 40px -18px rgba(8,63,131,.18)` · float `0 6px 20px -6px rgba(6,46,96,.28)`.
- Motion: fast 160ms · base 260ms · slow 560ms. Easing out `cubic-bezier(.22,.61,.36,1)`, soft `cubic-bezier(.4,0,.2,1)`.

Archivos fuente: `design-system/tokens/*.css`.

## 9. SEO local

- `<html lang="es-AR">`.
- Title: "Humanus | Kinesiología, rehabilitación y Pilates en San Nicolás de los Arroyos".
- Meta description: "Humanus es un centro de salud y rehabilitación en San Nicolás de los Arroyos. Kinesiología y fisiatría, Pilates y consultorios para profesionales. De La Nación 394."
- Open Graph: type website, locale es_AR, título "Humanus | Salud y rehabilitación en San Nicolás", descripción "Kinesiología y fisiatría, Pilates y consultorios en De La Nación 394, San Nicolás de los Arroyos.", imagen de 1200×630 (generar a partir de una foto real aprobada) con alt.
- Un único H1 (hero). Una sección = un H2. Ítems = H3.
- Canonical y `metadataBase`: agregar cuando esté definido el dominio. Generar `sitemap.ts` y `robots.ts`.
- JSON-LD (solo datos verificados; **sin** `openingHoursSpecification` porque los días no están confirmados, sin reseñas ni ratings):

```json
{"@context":"https://schema.org","@type":"MedicalBusiness","name":"Humanus — Salud y rehabilitación","telephone":"+5493364599242","address":{"@type":"PostalAddress","streetAddress":"De La Nación 394","addressLocality":"San Nicolás de los Arroyos","addressRegion":"Buenos Aires","postalCode":"2900","addressCountry":"AR"},"sameAs":["https://www.instagram.com/humanus.salud/"]}
```
Agregar `url`, `image` y `geo` cuando se conozcan.

## 10. Accesibilidad y rendimiento

- WCAG 2.2 AA: los contrastes de la paleta ya están verificados para los usos descritos. No bajar la opacidad del texto.
- HTML semántico: `header`, `nav`, `main`, `section[aria-labelledby]`, `footer`, `address`, `dl`, `ol`.
- Alt descriptivo en todas las fotos de contenido. `alt=""` + `aria-hidden` en decoraciones y marcas de agua.
- Navegación por teclado completa, incluido el menú mobile. Áreas táctiles de 44px como mínimo.
- Imágenes: `next/image` con `sizes` correctos, AVIF/WebP, dimensiones fijas (aspect-ratio). El hero con prioridad y el resto lazy.
- Fuentes con `next/font/google` (`display: swap`, subsets latin + latin-ext), sin import de CSS remoto.
- JS de cliente mínimo: solo el header (scroll y menú), el observer de reveal y la carga diferida del mapa. El resto se resuelve como Server Components.

## 11. Pendientes y elementos provisionales (confirmar con el cliente)

1. **Logotipo:** el wordmark tipográfico "HUMANUS / SALUD Y REHABILITACIÓN" es un placeholder. Usar el archivo oficial cuando llegue. Los SVG recibidos están en `assets/logo/original/` y la marca "h" en `assets/logo/humanus-mark-*.{svg,png}`.
2. **Fuentes:** Nunito Sans y Pacifico son sustitutos; las tipografías originales no están identificadas.
3. **Colores:** son aproximaciones tomadas de piezas de redes, no de un manual oficial.
4. **Fotos:** algunas parecen de stock. Confirmar cuáles son realmente de Humanus antes de publicar y reemplazar el resto. Falta la foto de la entrada.
5. **Copy de "Nosotros":** propuesta editorial pendiente de aprobación.
6. **Días de atención:** no publicarlos hasta tener confirmación.
7. **Dominio:** pendiente para canonical, OG y sitemap.

## 12. Archivos de este paquete

- `reference/Humanus Landing.dc.html`: diseño de referencia completo (abrir junto a `assets/` y el design system para verlo).
- `design-system/components/`: componentes de referencia (`.jsx`, `.d.ts`, `.prompt.md`, cards de preview).
- `design-system/tokens/`: colores, tipografía, espaciado, fuentes y CSS base.
- `assets/photos/`: kine-1..3, pilates-1..3, consul-1..3.
- `assets/logo/`: marca "h" azul y blanca (SVG/PNG) y logos originales.
- `docs/HUMANUS_DESIGN_SYSTEM.md`: documento de marca, fuente de verdad para el contenido.
