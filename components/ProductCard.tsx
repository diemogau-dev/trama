"use client";

import Link from "next/link";
import { COLORS, TONE, fmtDec, fullName, type Product } from "@/lib/catalog";
import { cart } from "@/lib/cart";
import ProductImage from "./ProductImage";

export default function ProductCard({ p }: { p: Product }) {
  const href = `/producto/${p.id}`;
  const name = fullName(p);
  return (
    <article className="flex flex-col gap-4">
      <Link href={href} className="relative block aspect-square overflow-hidden rounded-[20px] hover:opacity-[.92]" style={{ background: TONE }}>
        <ProductImage product={p} image={p.gallery[0]} inset="11%" scale={1.6} alt={name} sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 25vw" />
        {!p.gallery[0] && <ComingSoon />}
      </Link>
      <div className="flex flex-col gap-2">
        <Link href={href} className="text-[22px] leading-[1.2] font-medium text-carbon hover:text-terracota">
          {name}
        </Link>
        <span className="text-[14px] leading-[1.4] text-muted">
          {p.dims} · {fmtDec(p.perM2)} {p.unit}/m²
        </span>
        <div className="flex items-center gap-[6px]">
          {COLORS.map((c) => (
            <span key={c.id} title={c.name} className="h-4 w-4 rounded-full border border-[rgba(43,23,16,.18)]" style={{ background: c.sw }} />
          ))}
          <span className="ml-1 text-[13px] text-muted">5 colores</span>
        </div>
      </div>
      <button
        type="button"
        onClick={() => cart.add(p.id)}
        className="h-[46px] cursor-pointer rounded-full border-none bg-carbon text-[15px] font-medium text-hormigon hover:bg-terracota hover:text-white"
      >
        Agregar al carrito
      </button>
    </article>
  );
}

export function ComingSoon({ large }: { large?: boolean }) {
  return (
    <span
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-hormigon font-medium tracking-[.14em] whitespace-nowrap text-carbon uppercase ${
        large ? "px-[18px] py-[10px] text-[13px]" : "px-[14px] py-2 text-[12px]"
      }`}
    >
      Foto próximamente
    </span>
  );
}
