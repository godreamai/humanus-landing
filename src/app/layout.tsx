import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Nunito_Sans, Pacifico } from "next/font/google";
import { SITE, SITE_URL } from "@/config/site";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  weight: "400",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const TITLE = "Humanus | Kinesiología, rehabilitación y Pilates en San Nicolás de los Arroyos";
const DESCRIPTION =
  "Humanus es un centro de salud y rehabilitación en San Nicolás de los Arroyos. Kinesiología y fisiatría, Pilates y consultorios para profesionales. De La Nación 394.";
const OG_TITLE = "Humanus | Salud y rehabilitación en San Nicolás";
const OG_DESCRIPTION = "Kinesiología y fisiatría, Pilates y consultorios en De La Nación 394, San Nicolás de los Arroyos.";
const OG_IMAGE = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Espacio de kinesiología y Pilates de Humanus",
};

// Las URL absolutas (canonical, imagen OG) se publican solo cuando el dominio está definido.
export const metadata: Metadata = {
  ...(SITE_URL ? { metadataBase: new URL(SITE_URL), alternates: { canonical: "/" } } : {}),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: SITE.shortName,
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: SITE.name,
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    ...(SITE_URL ? { url: "/", images: [OG_IMAGE] } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    ...(SITE_URL ? { images: [OG_IMAGE] } : {}),
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#FAF8F4",
  colorScheme: "light",
};

// Solo datos verificados: sin openingHoursSpecification (días no confirmados), sin reseñas ni ratings.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: SITE.name,
  telephone: SITE.phoneE164,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  sameAs: [SITE.instagram],
  ...(SITE_URL ? { url: SITE_URL, image: `${SITE_URL}${OG_IMAGE.url}` } : {}),
};

/** Marca <html> con .js antes del primer pintado: habilita el estado inicial del reveal on scroll. */
const JS_FLAG = "document.documentElement.classList.add('js')";

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es-AR" className={`${nunitoSans.variable} ${pacifico.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: JS_FLAG }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
