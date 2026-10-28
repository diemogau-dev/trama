"use client";

import Link from "next/link";
import { useState } from "react";
import {
  CATS,
  COLORS,
  TONE,
  calc,
  colorImage,
  colorName,
  fmtDec,
  fmtN,
  fullName,
  step,
  type ColorId,
  type Mode,
  type Product,
} from "@/lib/catalog";
import { cart, useCart } from "@/lib/cart";
import { waLink } from "@/lib/whatsapp";
import { WhatsappIcon } from "./Icons";
import ProductImage from "./ProductImage";

const segOn = "bg-carbon text-hormigon";
const segOff = "bg-transparent text-carbon";

export default function ProductView({ p }: { p: Product }) {
  const { waste } = useCart();
  const [color, setColor] = useState<ColorId>("gris");
  const [mode, setMode] = useState<Mode>("m2");
  const [qty, setQty] = useState("10");
  // null = la foto del color elegido; número = una foto extra de la galería
  const [extra, setExtra] = useState<number | null>(null);

  const c = calc(p, mode, qty, waste);
  const isRev = p.cat === "revestimientos";
  const main = extra === null ? colorImage(p, color) : p.gallery[extra];
  const name = fullName(p);
  const specs = [
    ["Medidas", p.dims],
    ["Rinde", `${fmtDec(p.perM2)} ${p.unit} por m²`],
    ["Colores", `${COLORS.length} colores en la masa`],
    ["Uso", CATS[p.cat].use],
    ["Material", "Concreto de alta performance"],
    ["Fórmula", "Según uso: interior o exterior"],
  ];
  const wa = waLink(
    `¡Hola Trama! Quiero presupuesto para ${isRev ? "el revestimiento" : "el cobogó"} ${p.name} (${p.dims}) en ${colorName(color)}: ${fmtDec(c.m2)} m² (${fmtN(c.pieces)} ${p.unit}). La obra queda en: `,
  );

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-start gap-[clamp(40px,5vw,80px)]">
      <div className="flex flex-col gap-[14px]">
        <div className="relative aspect-square overflow-hidden rounded-[28px]" style={{ background: TONE }}>
          <ProductImage image={main} alt={name} sizes="(max-width: 960px) 100vw, 50vw" preload />
        </div>
        <div className="grid grid-cols-5 gap-[10px]">
          {COLORS.map((col) => {
            const on = extra === null && col.id === color;
            return (
              <Thumb key={col.id} on={on} label={`Ver en ${col.name}`} onClick={() => { setColor(col.id); setExtra(null); }}>
                <ProductImage image={colorImage(p, col.id)} sizes="120px" />
              </Thumb>
            );
          })}
          {p.gallery.map((g, i) => (
            <Thumb key={g.src} on={extra === i} label={`Ver foto ${i + 1}`} onClick={() => setExtra(i)}>
              <ProductImage image={g} sizes="120px" />
            </Thumb>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-4">
          <span className="kicker">{CATS[p.cat].single} de concreto</span>
          <h1 className="text-[clamp(44px,5.4vw,72px)] leading-none font-medium tracking-[-0.03em]">{p.name}</h1>
          <p className="lede">{p.desc}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="flex items-center gap-[10px] rounded-full bg-carbon px-4 py-[10px] text-[14px] text-hormigon">
            <span className="h-2 w-[18px] rounded-[4px] bg-terracota" />
            Sobre pedido · Seña 50% · Entrega en 30 días
          </span>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-[18px] border-y border-[rgba(43,23,16,.18)] py-6">
          {specs.map(([k, v]) => (
            <div key={k} className="flex flex-col gap-1">
              <span className="text-[13px] font-medium tracking-[.14em] text-muted uppercase">{k}</span>
              <span className="text-[18px] leading-[1.35]">{v}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-[13px] font-medium tracking-[.14em] text-muted uppercase">Color · {colorName(color)}</span>
          <div className="flex flex-wrap gap-[10px]">
            {COLORS.map((col) => {
              const on = col.id === color;
              return (
                <button
                  type="button"
                  key={col.id}
                  onClick={() => {
                    setColor(col.id);
                    setExtra(null);
                  }}
                  aria-pressed={on}
                  className="flex h-[46px] cursor-pointer items-center gap-[10px] rounded-full border-[1.5px] pr-[18px] pl-2 text-[15px]"
                  style={{ borderColor: on ? "#2B1710" : "rgba(43,23,16,.25)", background: on ? "#FFFFFF" : "transparent" }}
                >
                  <span className="h-[30px] w-[30px] rounded-full border border-[rgba(43,23,16,.2)]" style={{ background: col.sw }} />
                  {col.name}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-5 rounded-[24px] bg-white p-[clamp(20px,2.4vw,28px)]">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-[20px] font-medium">Calculá tu muro</span>
            <div className="flex rounded-full bg-hormigon p-1">
              <button
                type="button"
                onClick={() => {
                  if (mode === "m2") return;
                  setMode("m2");
                  setQty("10");
                }}
                className={`h-9 cursor-pointer rounded-full border-none px-4 text-[14px] font-medium ${mode === "m2" ? segOn : segOff}`}
              >
                Por m²
              </button>
              <button
                type="button"
                onClick={() => {
                  if (mode === "u") return;
                  setMode("u");
                  setQty(String(Math.max(1, c.pieces)));
                }}
                className={`h-9 cursor-pointer rounded-full border-none px-4 text-[14px] font-medium ${mode === "u" ? segOn : segOff}`}
              >
                Por pieza
              </button>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-[14px]">
            <div className="flex h-14 items-center rounded-full border-[1.5px] border-carbon">
              <button type="button" onClick={() => setQty((q) => step(q, -1, mode))} aria-label="Menos" className="h-full w-[52px] cursor-pointer border-none bg-transparent text-[22px]">
                −
              </button>
              <input
                value={qty}
                onChange={(e) => setQty(e.target.value)}
                inputMode="decimal"
                aria-label="Cantidad"
                className="w-[72px] border-none bg-transparent text-center text-[20px] font-medium text-carbon outline-none"
              />
              <button type="button" onClick={() => setQty((q) => step(q, 1, mode))} aria-label="Más" className="h-full w-[52px] cursor-pointer border-none bg-transparent text-[22px]">
                +
              </button>
            </div>
            <span className="text-[17px]">{mode === "m2" ? "m² de muro" : p.unit}</span>
          </div>
          <div className="flex flex-col gap-[10px] border-t border-[rgba(43,23,16,.14)] pt-[18px] text-[16px]">
            <div className="flex justify-between gap-3">
              <span className="text-muted">{p.unit.charAt(0).toUpperCase() + p.unit.slice(1)}</span>
              <span className="text-[22px] font-medium">{fmtN(c.pieces)}</span>
            </div>
            <div className="flex justify-between gap-3">
              <span className="text-muted">Superficie</span>
              <span className="text-[22px] font-medium">{fmtDec(c.m2)} m²</span>
            </div>
            {mode === "m2" && waste && <span className="text-[14px] text-muted">Incluye 5% extra por cortes y roturas.</span>}
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[10px]">
            <button
              type="button"
              onClick={() => cart.add(p.id, color, mode, qty)}
              className="h-14 cursor-pointer rounded-full border-none bg-carbon text-[16px] font-medium text-hormigon hover:bg-terracota hover:text-white"
            >
              Agregar al carrito
            </button>
            <a
              href={wa}
              target="_blank"
              rel="noopener"
              className="flex h-14 items-center justify-center gap-[10px] rounded-full bg-terracota text-[16px] font-medium text-white hover:bg-carbon hover:text-hormigon"
            >
              <WhatsappIcon size={18} />
              Cotizar por WhatsApp
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-[10px] pt-2">
          <span className="text-[20px] font-medium">Colocación</span>
          <p className="text-[16px] leading-[1.55] text-pretty">{CATS[p.cat].place}</p>
        </div>
      </div>
    </div>
  );
}

export function RelatedCard({ p }: { p: Product }) {
  return (
    <Link href={`/producto/${p.id}`} className="flex flex-col gap-4 text-carbon hover:text-terracota">
      <div className="relative aspect-square overflow-hidden rounded-[20px]" style={{ background: TONE }}>
        <ProductImage image={colorImage(p, "gris")} alt={fullName(p)} sizes="(max-width: 640px) 100vw, 25vw" />
      </div>
      <div className="flex flex-col gap-[6px]">
        <span className="text-[22px] leading-[1.2] font-medium">{fullName(p)}</span>
        <span className="text-[14px] text-muted">{p.dims}</span>
      </div>
    </Link>
  );
}

function Thumb({ on, label, onClick, children }: { on: boolean; label: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="relative aspect-square cursor-pointer overflow-hidden rounded-[14px] border-2 p-0"
      style={{ background: TONE, borderColor: on ? "#2B1710" : "transparent" }}
    >
      {children}
    </button>
  );
}
