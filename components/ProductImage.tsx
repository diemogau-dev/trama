import Image from "next/image";
import type { GalleryImage } from "@/lib/catalog";

/**
 * Imagen a sangre dentro de una caja de producto (la caja es el padre, con position:relative).
 * Las fotos por color ya traen el fondo de la caja (TONE), así que se ven continuas.
 */
export default function ProductImage({
  image,
  sizes,
  alt = "",
  preload,
}: {
  image: GalleryImage;
  sizes: string;
  alt?: string;
  preload?: boolean;
}) {
  return <Image src={image.src} alt={alt} fill sizes={sizes} preload={preload} className="object-cover" />;
}
