# Humanus — Landing

Landing institucional de **Humanus — Salud y rehabilitación** (San Nicolás de los Arroyos). Implementación en Next.js del handoff de `design_handoff_humanus_landing/`.

## Stack

Next.js 16 (App Router, Cache Components) · React 19 · TypeScript estricto · Tailwind CSS 4 · `next/font` (Nunito Sans + Pacifico) · `next/image` · Lucide React.

## Comandos

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build && npm start
```

## Configuración

| Variable | Uso |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Dominio de producción (p. ej. `https://humanus.com.ar`). Activa `metadataBase`, canonical, imagen Open Graph/Twitter, `url`/`image` en JSON-LD y las URL del sitemap. Sin ella no se publican URL absolutas. |

## Estructura

```
src/
  app/            layout (fuentes, metadata, JSON-LD), page, sitemap, robots, íconos
  config/
    site.ts       ÚNICA fuente de teléfono, dirección, horarios, enlaces y mensajes de WhatsApp
    content.ts    textos, servicios, áreas, galería
  components/
    layout/       Header (cliente), Footer
    sections/     Hero, About, Services, RehabilitationAreas, PilatesSection, Gallery, LocationContact, FinalCTA
    ui/           Button, Icon, Logo, PhotoFrame, SectionHeading, ServiceCard, Reveal (cliente), MapFacade (cliente), WhatsAppButton
public/
  images/         fotos del handoff
  logos/          marca "h" oficial (SVG azul y blanca)
  og-image.jpg    1200×630 generada desde kine-1.jpg
```

JavaScript de cliente solo en: Header (scroll, link activo, menú), observer del reveal y carga diferida del mapa.

## Decisiones respecto del handoff

- **Galería:** el handoff usa una galería editorial asimétrica (cada foto con su proporción, filas desparejas). Con las fotos reales quedaba desprolija, así que pasó a una grilla de 12 columnas que mantiene el ritmo angosta/ancha · ancha/angosta pero con todas las fotos de una fila a la misma altura en desktop, y cuadradas en mobile y tablet. La foto real de la entrada (vertical) ocupa la columna angosta.
- **Mapa:** el iframe de Google se carga solo cuando la sección de contacto se acerca a la pantalla, no en la carga inicial (recomendación de rendimiento de §6.8).
- **Header < 400px:** el botón de WhatsApp queda solo con ícono (con `aria-label`) para que no desborde a 320px.
- **Reveal del hero:** animación CSS al cargar, sin depender de JS (no retrasa el LCP). El resto usa IntersectionObserver; sin JS nada queda oculto.
- **Íconos de marca:** Lucide v1 no incluye Instagram/WhatsApp; se usan los mismos trazos de la referencia (lucide-static 0.468 y Simple Icons) como SVG inline.

## Pendientes (confirmar con el cliente — handoff §11)

1. Lockup oficial del logotipo (el wordmark "HUMANUS / SALUD Y REHABILITACIÓN" es tipográfico y provisional).
2. Tipografías y colores oficiales (Nunito Sans/Pacifico y los hex son sustitutos).
3. Confirmar qué fotos son realmente de Humanus (la de la entrada, `entrada.jpg`, ya es la real).
4. Aprobación del copy de "Nosotros".
5. Días de atención (no se publican; JSON-LD sin `openingHoursSpecification`).
6. Dominio de producción → `NEXT_PUBLIC_SITE_URL`.
