"use client";

import { useCart } from "@/lib/cart";
import { WA_GENERAL } from "@/lib/whatsapp";
import { WhatsappIcon } from "./Icons";

export default function Fab() {
  const { open } = useCart();
  if (open) return null;
  return (
    <a
      href={WA_GENERAL}
      target="_blank"
      rel="noopener"
      aria-label="Escribinos por WhatsApp"
      className="fixed right-[clamp(16px,2vw,28px)] bottom-[clamp(16px,2vw,28px)] z-50 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-terracota text-white shadow-[0_10px_30px_rgba(43,23,16,.28)] hover:bg-carbon"
    >
      <WhatsappIcon size={30} />
    </a>
  );
}
