"use client";

import Image from "next/image";
import Link from "next/link";
import { cart } from "@/lib/cart";
import { WA_GENERAL, WHATSAPP_DISPLAY } from "@/lib/whatsapp";

const link = "text-hormigon hover:text-terracota";

export default function Footer() {
  return (
    <footer className="bg-carbon text-hormigon">
      <div className="mx-auto max-w-[1440px] px-[clamp(20px,4vw,64px)] pt-[clamp(72px,8vw,120px)] pb-8">
        <div className="flex flex-wrap items-end justify-between gap-8 border-b border-[rgba(236,233,228,.22)] pb-[clamp(48px,5vw,72px)]">
          <h2 className="t1 max-w-[720px]">
            ¿Tenés una obra en mente? <span className="text-terracota">Contanos.</span>
          </h2>
          <a
            href={WA_GENERAL}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-[10px] rounded-full bg-terracota px-8 py-[18px] text-[17px] font-medium text-white hover:bg-hormigon hover:text-carbon"
          >
            Escribinos por WhatsApp
          </a>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-10 py-[clamp(48px,5vw,64px)] text-[16px] leading-[1.4]">
          <div className="flex flex-col items-start gap-[18px]">
            <Image src="/images/logo/trama-hormigon.svg" alt="Trama" width={116} height={15} className="block h-auto w-[116px]" />
            <span className="max-w-[240px] text-[15px] leading-[1.5] text-arena">
              Cobogós y revestimientos de concreto, fabricados en Asunción.
            </span>
          </div>
          <div className="flex flex-col gap-[14px]">
            <span className="text-[13px] font-medium tracking-[.16em] text-arena uppercase">Tienda</span>
            <Link href="/tienda/revestimientos" className={link}>Revestimientos</Link>
            <Link href="/tienda/cobogos" className={link}>Cobogós</Link>
            <button type="button" onClick={() => cart.open()} className={`cursor-pointer border-none bg-transparent p-0 text-left text-hormigon hover:text-terracota`}>
              Carrito
            </button>
          </div>
          <div className="flex flex-col gap-[14px]">
            <span className="text-[13px] font-medium tracking-[.16em] text-arena uppercase">Trama</span>
            <Link href="/#nosotros" className={link}>Nosotros</Link>
            <Link href="/socios" className={link}>Socios Trama</Link>
            <Link href="/#como-comprar" className={link}>Cómo comprar</Link>
            <Link href="/#faq" className={link}>Preguntas frecuentes</Link>
          </div>
          <div className="flex flex-col gap-[14px]">
            <span className="text-[13px] font-medium tracking-[.16em] text-arena uppercase">Contacto</span>
            <a href={WA_GENERAL} target="_blank" rel="noopener" className={link}>WhatsApp {WHATSAPP_DISPLAY}</a>
            <a href="https://instagram.com/tramapy" target="_blank" rel="noopener" className={link}>Instagram @tramapy</a>
            <a href="mailto:tramapy@gmail.com" className={link}>tramapy@gmail.com</a>
            <span>Taller en Asunción, Paraguay</span>
            <span>Envíos a todo el país</span>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-3 border-t border-[rgba(236,233,228,.22)] pt-6 text-[14px] text-arena">
          <span>© 2026 Trama · Hecho a mano en Paraguay</span>
          <span>trama.com.py</span>
        </div>
      </div>
    </footer>
  );
}
