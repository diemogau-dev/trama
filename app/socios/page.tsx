import type { Metadata } from "next";
import Image from "next/image";
import { WA_PARTNERS } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Socios Trama",
  description:
    "Para arquitectos, diseñadores, constructoras y casas de materiales: precio diferenciado, muestras y soporte técnico en cobogós y revestimientos de concreto.",
};

const ARQ = [
  "Precio especial para especificar en obra",
  "Muestras físicas en los 5 colores",
  "Fichas técnicas y bloques CAD",
  "Asesoramiento en modulación y colocación",
  "Producción y entregas por etapas de obra",
];
const REV = [
  "Precio mayorista por volumen",
  "Muestrario para exhibir en tu local",
  "Fotos y fichas listas para vender",
  "Entregas coordinadas en todo el país",
  "Atención directa por WhatsApp",
];
const PASOS = [
  ["01", "Escribinos", "Contanos quién sos, tu estudio o tu local, y en qué zona trabajás."],
  ["02", "Recibí tu kit", "Te enviamos lista de precios para socios, catálogo técnico y coordinamos muestras."],
  ["03", "Especificá o revendé", "Te acompañamos en cada obra o venta, desde la modulación hasta la entrega."],
];

function Benefits({ title, items, dot }: { title: string; items: string[]; dot: string }) {
  return (
    <div className="flex flex-col gap-5 rounded-[20px] bg-white p-8">
      <h3 className="text-[clamp(24px,2.2vw,30px)] leading-[1.2] font-medium">{title}</h3>
      <div className="flex flex-col gap-[14px] text-[17px] leading-[1.45]">
        {items.map((t) => (
          <span key={t} className="grid grid-cols-[22px_1fr] items-baseline gap-3">
            <span className="pill-dot" style={{ background: dot }} />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SociosPage() {
  return (
    <main className="bg-hormigon">
      <section className="pt-[clamp(48px,6vw,88px)] pb-[clamp(72px,9vw,140px)]">
        <div className="shell grid grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))] items-stretch gap-[clamp(24px,3vw,40px)]">
          <div className="relative flex min-h-[560px] flex-col justify-between gap-12 overflow-hidden rounded-[28px] bg-terracota p-[clamp(32px,4vw,56px)] text-white">
            <Image
              src="/images/logo/letra-a-hormigon.svg"
              alt=""
              width={81}
              height={57}
              className="pointer-events-none absolute right-[-12%] bottom-[-18%] h-auto w-[78%] opacity-[.16]"
            />
            <div className="relative flex flex-col gap-6">
              <span className="self-start rounded-full bg-carbon px-4 py-[9px] text-[13px] font-medium tracking-[.16em] text-hormigon uppercase">
                Socios Trama
              </span>
              <h1 className="text-[clamp(48px,6vw,84px)] leading-none font-medium tracking-[-0.03em] text-balance">
                Tu obra, nuestras piezas.
              </h1>
            </div>
            <div className="relative flex flex-col gap-5">
              <p className="max-w-[480px] text-[clamp(20px,1.8vw,26px)] leading-[1.35] font-medium">
                Para arquitectos, diseñadores, constructoras y casas de materiales.
              </p>
              <a
                href={WA_PARTNERS}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-[10px] self-start rounded-full bg-carbon px-[30px] py-[18px] text-[17px] font-medium text-hormigon hover:bg-hormigon hover:text-carbon"
              >
                Quiero ser socio →
              </a>
            </div>
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-[28px] bg-placeholder">
            <Image
              src="/images/obras/obra-casa-terracota.jpg"
              alt="Fachada con cobogó terracota"
              fill
              preload
              sizes="(max-width: 960px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="shell mt-[clamp(56px,6vw,96px)] flex flex-col gap-[clamp(28px,3vw,40px)]">
          <p className="max-w-[820px] text-[clamp(18px,1.6vw,22px)] leading-[1.5] text-pretty">
            Si especificás materiales en tus proyectos o tenés un local de venta, trabajamos con vos con precio
            diferenciado, muestras y soporte técnico. Escribinos y en el día te pasamos tu lista de precios para socios.
          </p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-5">
            <Benefits title="Arquitectos y estudios" items={ARQ} dot="#C35B36" />
            <Benefits title="Revendedores" items={REV} dot="#2B1710" />
          </div>
        </div>
      </section>
      <section className="section bg-white">
        <div className="shell">
          <h2 className="t1 mb-[clamp(40px,5vw,72px)]">
            Cómo <span className="text-terracota">sumarte</span>.
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-[clamp(32px,3vw,40px)]">
            {PASOS.map(([n, t, d]) => (
              <div key={n} className="flex flex-col gap-[18px] border-t-[1.5px] border-carbon pt-6">
                <span className="num text-[clamp(40px,4vw,56px)]">{n}</span>
                <h3 className="text-[clamp(22px,2vw,28px)] font-medium">{t}</h3>
                <p className="copy">{d}</p>
              </div>
            ))}
          </div>
          <a
            href={WA_PARTNERS}
            target="_blank"
            rel="noopener"
            className="mt-[clamp(48px,5vw,72px)] inline-flex items-center gap-[10px] rounded-full bg-terracota px-8 py-[18px] text-[17px] font-medium text-white hover:bg-carbon hover:text-hormigon"
          >
            Quiero ser socio →
          </a>
        </div>
      </section>
    </main>
  );
}
