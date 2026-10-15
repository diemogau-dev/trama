import Image from "next/image";
import { GALLERY } from "@/lib/content";

/**
 * Filas justificadas: en desktop las 3 fotos de cada fila comparten altura
 * (flex-grow proporcional al aspecto: horizontales 3:2, verticales 4:5).
 * En mobile la horizontal va a ancho completo y las dos verticales debajo, lado a lado.
 */
export default function Gallery() {
  return (
    <div className="flex flex-col gap-[clamp(10px,1.2vw,16px)]">
      {GALLERY.map((row, r) => (
        <div key={r} className="grid grid-cols-2 gap-[clamp(10px,1.2vw,16px)] md:flex">
          {row.map((ph) => (
            <figure
              key={ph.src}
              className={`relative m-0 overflow-hidden rounded-[20px] bg-placeholder ${
                ph.wide ? "order-first col-span-2 aspect-[3/2] md:order-none md:flex-[1.5_1_0%]" : "aspect-[4/5] md:flex-[0.8_1_0%]"
              }`}
            >
              <Image
                src={ph.src}
                alt={ph.alt}
                fill
                sizes={ph.wide ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                style={{ objectPosition: ph.pos }}
              />
            </figure>
          ))}
        </div>
      ))}
    </div>
  );
}
