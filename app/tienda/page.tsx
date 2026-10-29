import type { Metadata } from "next";
import Shop from "@/components/Shop";

export const metadata: Metadata = {
  title: "Tienda",
  description:
    "Revestimientos y cobogós de concreto en 4 colores, fabricados sobre pedido. Precios con IVA incluido; el flete te lo confirmamos por WhatsApp.",
};

export default function TiendaPage() {
  return <Shop active="todos" />;
}
