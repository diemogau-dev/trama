"use client";

import Image from "next/image";
import { useState } from "react";
import { GALLERIES, GALLERY_TABS, type GalleryTab } from "@/lib/content";

/**
 * Filas justificadas: en desktop las fotos de cada fila comparten altura
 * (flex-grow proporcional al aspecto: horizontales 3:2, verticales 4:5).
 * En mobile la horizontal va a ancho completo y las verticales debajo, de a dos.
 * Dos pestañas (cobogós / revestimientos) con el mismo diseño.
 */
export default function Gallery() {
  const [tab, setTab] = useState<GalleryTab>("cobogos");
  return (
    <>
      <div role="tablist" aria-label="Tipo de obra" className="mb-[clamp(24px,3vw,40px)] flex flex-wrap gap-[10px]">
        {GALLERY_TABS.map((t) => {
          const on = t.key === tab;
          return (
            <button
              type="button"
              key={t.key}
              role="tab"
              id={`obras-tab-${t.key}`}
              aria-selected={on}
              aria-controls="obras-panel"
              onClick={() => setTab(t.key)}
              className={`h-[46px] cursor-pointer rounded-full border-[1.5px] border-carbon px-[22px] text-[16px] font-medium ${
                on ? "bg-carbon text-hormigon" : "bg-transparent text-carbon hover:bg-carbon hover:text-hormigon"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>
      <div id="obras-panel" role="tabpanel" aria-labelledby={`obras-tab-${tab}`} className="flex flex-col gap-[clamp(10px,1.2vw,16px)]">
        {GALLERIES[tab].map((row, r) => (
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
    </>
  );
}
