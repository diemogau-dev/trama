import Image from "next/image";
import { jointPattern, type GalleryImage, type Product } from "@/lib/catalog";

/**
 * Imagen dentro de una caja de producto (la caja es el padre, con position:relative).
 * - cut: recorte sobre blanco, contain + multiply con margen interno.
 * - photo: cover a sangre.
 * - sin imagen: grilla de juntas a escala.
 */
export default function ProductImage({
  product,
  image,
  inset,
  scale,
  sizes,
  alt = "",
  preload,
}: {
  product: Product;
  image: GalleryImage | undefined;
  inset: string;
  scale: number;
  sizes: string;
  alt?: string;
  preload?: boolean;
}) {
  if (!image) return <div className="absolute inset-0" style={jointPattern(product, scale)} />;
  if (image.kind === "cut")
    return (
      <div className="absolute" style={{ inset }}>
        <Image src={image.src} alt={alt} fill sizes={sizes} preload={preload} className="object-contain mix-blend-multiply" />
      </div>
    );
  return <Image src={image.src} alt={alt} fill sizes={sizes} preload={preload} className="object-cover" />;
}
