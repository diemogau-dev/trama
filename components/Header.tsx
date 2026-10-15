"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { cart, useCart } from "@/lib/cart";
import { WA_GENERAL } from "@/lib/whatsapp";
import { BagIcon, MenuIcon, WhatsappIcon } from "./Icons";

const NAV = [
  { href: "/tienda", label: "Tienda" },
  { href: "/socios", label: "Socios Trama" },
  { href: "/#faq", label: "Preguntas" },
];

export default function Header() {
  const { items, menuOpen } = useCart();
  const pathname = usePathname();

  // Al cambiar de página se cierran el carrito y el menú.
  useEffect(() => {
    cart.closeAll();
  }, [pathname]);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-[10px] bg-carbon px-5 py-[11px] text-center text-[14px] leading-[1.3] text-hormigon">
        <span>Fabricación sobre pedido · Seña 50% · Entrega en 30 días</span>
        <Link href="/socios" className="text-hormigon underline underline-offset-[3px] hover:text-white">
          ¿Sos arquitecto o revendedor?
        </Link>
      </div>

      <header className="sticky top-0 z-40 border-b border-[rgba(43,23,16,.14)] bg-hormigon">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between gap-6 px-[clamp(20px,4vw,64px)]">
          <div className="flex items-center gap-[clamp(28px,3.6vw,56px)]">
            <Link href="/" className="flex shrink-0" onClick={() => cart.closeAll()}>
              <Image src="/images/logo/trama-carbon.svg" alt="Trama" width={116} height={15} className="block h-auto w-[116px]" preload />
            </Link>
            <nav className="hidden items-center gap-8 text-[16px] min-[900px]:flex">
              {NAV.map((n) => (
                <Link key={n.href} href={n.href} className="text-carbon hover:text-terracota">
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-[10px]">
            <button
              type="button"
              onClick={() => cart.open()}
              aria-label="Abrir carrito"
              className="flex h-11 cursor-pointer items-center gap-2 rounded-full border-[1.5px] border-carbon bg-transparent px-4 text-[15px] font-medium hover:bg-carbon hover:text-hormigon"
            >
              <BagIcon />
              <span>Carrito · {items.length}</span>
            </button>
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noopener"
              className="hidden h-11 items-center gap-[9px] rounded-full bg-terracota px-5 text-[15px] font-medium text-white hover:bg-carbon hover:text-hormigon min-[900px]:flex"
            >
              <WhatsappIcon size={17} />
              Cotizar por WhatsApp
            </a>
            <button
              type="button"
              onClick={() => cart.toggleMenu()}
              aria-label="Menú"
              aria-expanded={menuOpen}
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border-none bg-carbon text-hormigon min-[900px]:hidden"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="flex flex-col border-t border-[rgba(43,23,16,.14)] px-[clamp(20px,4vw,64px)] pt-2 pb-6 text-[22px] font-medium min-[900px]:hidden">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => cart.closeAll()} className="py-3 text-carbon">
                {n.label}
              </Link>
            ))}
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noopener"
              className="mt-3 flex justify-center rounded-full bg-terracota p-4 text-[17px] text-white"
            >
              Cotizar por WhatsApp
            </a>
          </nav>
        )}
      </header>
    </>
  );
}
