import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import CartDrawer from "@/components/CartDrawer";
import Fab from "@/components/Fab";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-hanken",
  display: "swap",
});

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

const description =
  "Cobogós y placas de concreto de alta performance, fabricados a mano en nuestro taller de Asunción. Sobre pedido, entrega en 30 días y envíos a todo el Paraguay.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Trama · Cobogós y revestimientos de concreto",
    template: "%s · Trama",
  },
  description,
  openGraph: {
    title: "Trama · Cobogós y revestimientos de concreto",
    description,
    locale: "es_PY",
    type: "website",
    siteName: "Trama",
    images: [
      {
        url: "/images/og/trama-logo.png",
        width: 1200,
        height: 630,
        alt: "Trama",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trama · Cobogós y revestimientos de concreto",
    description,
    images: ["/images/og/trama-logo.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-PY" className={hanken.variable}>
      <body>
        <Header />
        {children}
        <Footer />
        <Fab />
        <CartDrawer />
      </body>
    </html>
  );
}
