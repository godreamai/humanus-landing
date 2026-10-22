import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/site";

/** Requiere NEXT_PUBLIC_SITE_URL: sin dominio no se publican URL ficticias. */
export default function sitemap(): MetadataRoute.Sitemap {
  if (!SITE_URL) return [];
  return [{ url: SITE_URL, changeFrequency: "monthly", priority: 1 }];
}
