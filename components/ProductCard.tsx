"use client";

import Link from "next/link";
import { useState } from "react";
import { COLORS, TONE, colorImage, fmtDec, fmtGs, fullName, priceM2, type ColorId, type Product } from "@/lib/catalog";
import { cart } from "@/lib/cart";
import ProductImage from "./ProductImage";

export default function ProductCard({ p }: { p: Product }) {
  const [color, setColor] = useState<ColorId>("gris");
  const href = `/producto/${p.id}`;
  const name = fullName(p);
  return (
    <article className="flex flex-col gap-4">
      <Link href={href} className="relative block aspect-square overflow-hidden rounded-[20px] hover:opacity-[.92]" style={{ background: TONE }}>
        <ProductImage image={colorImage(p, color)} alt={`${name} en ${COLORS.find((c) => c.id === color)?.name}`} sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 25vw" />
      </Link>
      <div className="flex flex-col gap-2">
        <Link href={href} className="text-[22px] leading-[1.2] font-medium text-carbon hover:text-terracota">
          {name}
        </Link>
        <span className="text-[14px] leading-[1.4] text-muted">
          {p.dims} · {fmtDec(p.perM2)} {p.unit}/m²
        </span>
        <span className="flex flex-wrap items-baseline gap-x-2 text-[17px] font-medium">
          {fmtGs(p.price)}
          <span className="text-[14px] font-normal text-muted">c/u · {fmtGs(priceM2(p))}/m²</span>
        </span>
        <div className="flex items-center gap-[6px]">
          {COLORS.map((c) => (
            <button
              type="button"
              key={c.id}
              title={c.name}
              aria-label={`Ver en ${c.name}`}
              aria-pressed={c.id === color}
              onClick={() => setColor(c.id)}
              onMouseEnter={() => setColor(c.id)}
              className="h-[22px] w-[22px] cursor-pointer rounded-full border-[1.5px] bg-transparent p-[2px]"
              style={{ borderColor: c.id === color ? "#2B1710" : "transparent" }}
            >
              <span className="block h-full w-full rounded-full border border-[rgba(43,23,16,.18)]" style={{ background: c.sw }} />
            </button>
          ))}
          <span className="ml-1 text-[13px] text-muted">{COLORS.length} colores</span>
        </div>
      </div>
      <button
        type="button"
        onClick={() => cart.add(p.id, color)}
        className="h-[46px] cursor-pointer rounded-full border-none bg-carbon text-[15px] font-medium text-hormigon hover:bg-terracota hover:text-white"
      >
        Agregar al carrito
      </button>
    </article>
  );
}
