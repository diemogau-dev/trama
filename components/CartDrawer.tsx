"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  COLORS,
  TONE,
  calc,
  colorName,
  fmtDec,
  fmtN,
  fullName,
  getProduct,
  step,
} from "@/lib/catalog";
import { cart, useCart } from "@/lib/cart";
import { waLink } from "@/lib/whatsapp";
import { WhatsappIcon } from "./Icons";
import ProductImage from "./ProductImage";

const segOn = "bg-carbon text-hormigon";
const segOff = "bg-transparent text-carbon";

export default function CartDrawer() {
  const { items, waste, open } = useCart();
  const router = useRouter();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && cart.close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  const lines = items.flatMap((l) => {
    const p = getProduct(l.id);
    return p ? [{ l, p, c: calc(p, l.mode, l.qty, waste) }] : [];
  });
  const tot = lines.reduce((a, { c }) => ({ m2: a.m2 + c.m2, pieces: a.pieces + c.pieces }), { m2: 0, pieces: 0 });
  const waCart = waLink(
    [
      "¡Hola Trama! Quiero pedir presupuesto para:",
      "",
      ...lines.map(
        ({ l, p, c }) => `• ${fullName(p)} (${p.dims}) · ${colorName(l.color)} — ${fmtDec(c.m2)} m² (${fmtN(c.pieces)} piezas)`,
      ),
      "",
      waste ? "(Incluye 5% extra por cortes)" : "",
      "La obra queda en: ",
      "¿Me pasan presupuesto con flete?",
    ].join("\n"),
  );

  return (
    <div className="fixed inset-0 z-60 flex justify-end">
      <div onClick={() => cart.close()} className="absolute inset-0 bg-[rgba(43,23,16,.5)]" />
      <aside
        role="dialog"
        aria-label="Tu pedido"
        className="relative flex h-full w-[min(100%,500px)] flex-col bg-hormigon shadow-[-20px_0_60px_rgba(43,23,16,.25)]"
      >
        <div className="flex items-center justify-between border-b border-[rgba(43,23,16,.16)] px-6 py-[22px]">
          <div className="flex items-baseline gap-3">
            <span className="text-[28px] font-medium tracking-[-0.01em]">Tu pedido</span>
            <span className="text-[15px] text-muted">{lines.length === 1 ? "1 producto" : `${lines.length} productos`}</span>
          </div>
          <button
            type="button"
            onClick={() => cart.close()}
            aria-label="Cerrar"
            className="h-11 w-11 cursor-pointer rounded-full border-[1.5px] border-carbon bg-transparent text-[20px] hover:bg-carbon hover:text-hormigon"
          >
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6">
          {lines.length === 0 && (
            <div className="flex flex-col items-center gap-[18px] px-3 py-20 text-center">
              <Image src="/images/logo/trama-carbon.svg" alt="" width={104} height={13} className="h-auto w-[104px] opacity-50" />
              <span className="text-[22px] font-medium">Tu carrito está vacío</span>
              <span className="max-w-[300px] text-[16px] leading-[1.5] text-muted">
                Elegí un revestimiento o un cobogó, el color, y cargá los m² de tu muro.
              </span>
              <button
                type="button"
                onClick={() => {
                  cart.close();
                  router.push("/tienda");
                }}
                className="mt-2 h-[52px] cursor-pointer rounded-full border-none bg-carbon px-7 text-[16px] font-medium text-hormigon hover:bg-terracota hover:text-white"
              >
                Ir a la tienda
              </button>
            </div>
          )}

          {lines.map(({ l, p, c }) => {
            const upd = (patch: Parameters<typeof cart.update>[1]) => cart.update(l.key, patch);
            return (
              <div key={l.key} className="grid grid-cols-[76px_minmax(0,1fr)] gap-4 border-b border-[rgba(43,23,16,.16)] py-[22px]">
                <div className="relative h-[76px] w-[76px] overflow-hidden rounded-[14px]" style={{ background: TONE }}>
                  <ProductImage product={p} image={p.gallery[0]} inset="8%" scale={0.6} sizes="76px" />
                </div>
                <div className="flex min-w-0 flex-col gap-3">
                  <div className="flex items-start justify-between gap-[10px]">
                    <div className="flex flex-col gap-[2px]">
                      <span className="text-[18px] font-medium">{fullName(p)}</span>
                      <span className="text-[14px] text-muted">
                        {p.dims} · {colorName(l.color)}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => cart.remove(l.key)}
                      className="cursor-pointer border-none bg-transparent px-0 py-[2px] text-[14px] text-muted underline underline-offset-[3px] hover:text-terracota"
                    >
                      Quitar
                    </button>
                  </div>
                  <div className="flex gap-2">
                    {COLORS.map((col) => (
                      <button
                        type="button"
                        key={col.id}
                        onClick={() => upd({ color: col.id })}
                        title={col.name}
                        aria-label={col.name}
                        className="h-[30px] w-[30px] cursor-pointer rounded-full border-2 bg-transparent p-[2px]"
                        style={{ borderColor: col.id === l.color ? "#2B1710" : "transparent" }}
                      >
                        <span className="block h-full w-full rounded-full" style={{ background: col.sw }} />
                      </button>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center gap-[10px]">
                    <div className="flex rounded-full bg-white p-[3px]">
                      <button
                        type="button"
                        onClick={() => l.mode !== "m2" && upd({ mode: "m2", qty: String(Math.max(0.5, Math.round(c.m2 * 10) / 10)) })}
                        className={`h-8 cursor-pointer rounded-full border-none px-3 text-[13px] font-medium ${l.mode === "m2" ? segOn : segOff}`}
                      >
                        m²
                      </button>
                      <button
                        type="button"
                        onClick={() => l.mode !== "u" && upd({ mode: "u", qty: String(Math.max(1, c.pieces)) })}
                        className={`h-8 cursor-pointer rounded-full border-none px-3 text-[13px] font-medium ${l.mode === "u" ? segOn : segOff}`}
                      >
                        piezas
                      </button>
                    </div>
                    <div className="flex h-10 items-center rounded-full border-[1.5px] border-carbon">
                      <button type="button" onClick={() => upd({ qty: step(l.qty, -1, l.mode) })} aria-label="Menos" className="h-full w-9 cursor-pointer border-none bg-transparent text-[18px]">
                        −
                      </button>
                      <input
                        value={l.qty}
                        onChange={(e) => upd({ qty: e.target.value })}
                        inputMode="decimal"
                        aria-label="Cantidad"
                        className="w-[52px] border-none bg-transparent text-center text-[16px] font-medium text-carbon outline-none"
                      />
                      <button type="button" onClick={() => upd({ qty: step(l.qty, 1, l.mode) })} aria-label="Más" className="h-full w-9 cursor-pointer border-none bg-transparent text-[18px]">
                        +
                      </button>
                    </div>
                    <span className="text-[14px] text-muted">{l.mode === "m2" ? "m² de muro" : p.unit}</span>
                  </div>
                  <span className="text-[14px] text-muted">
                    {fmtN(c.pieces)} {p.unit} · {fmtDec(c.m2)} m²
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {lines.length > 0 && (
          <div className="flex flex-col gap-[14px] border-t border-[rgba(43,23,16,.16)] bg-white px-6 pt-5 pb-6">
            <button
              type="button"
              role="switch"
              aria-checked={waste}
              onClick={() => cart.toggleWaste()}
              className="flex cursor-pointer items-center gap-3 border-none bg-transparent p-0 text-left text-[15px]"
            >
              <span className="relative h-6 w-10 shrink-0 rounded-full" style={{ background: waste ? "#C35B36" : "rgba(43,23,16,.25)" }}>
                <span className="absolute top-[3px] h-[18px] w-[18px] rounded-full bg-white" style={{ left: waste ? 19 : 3 }} />
              </span>
              Sumar 5% por cortes y roturas
            </button>
            <div className="flex flex-col gap-[6px] text-[15px]">
              <div className="flex justify-between">
                <span className="text-muted">Superficie total</span>
                <span className="font-medium">{fmtDec(tot.m2)} m²</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Piezas</span>
                <span className="font-medium">{fmtN(tot.pieces)}</span>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-[14px] bg-hormigon px-4 py-[14px] text-[14px] leading-[1.5]">
              <span className="mt-[6px] h-2 w-[18px] shrink-0 rounded-[4px] bg-terracota" />
              Fabricación sobre pedido. Seña del 50% al confirmar y entrega en 30 días. Te enviamos el presupuesto con flete por WhatsApp.
            </div>
            <a
              href={waCart}
              target="_blank"
              rel="noopener"
              className="flex h-[58px] items-center justify-center gap-[10px] rounded-full bg-terracota text-[17px] font-medium text-white hover:bg-carbon hover:text-hormigon"
            >
              <WhatsappIcon size={20} />
              Pedir presupuesto por WhatsApp
            </a>
          </div>
        )}
      </aside>
    </div>
  );
}
