import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/lib/catalog";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/tienda", "/tienda/revestimientos", "/tienda/cobogos", "/socios"];
  return [
    ...pages.map((p) => ({ url: `${SITE_URL}${p}` })),
    ...PRODUCTS.map((p) => ({ url: `${SITE_URL}/producto/${p.id}` })),
  ];
}
