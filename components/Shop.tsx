import Link from "next/link";
import { CATEGORY_IDS, CATS, PRODUCTS, type CategoryId } from "@/lib/catalog";
import { GALLERY, GALLERY_COBOGOS, GALLERY_REVESTIMIENTOS } from "@/lib/content";
import Gallery from "./Gallery";
import ProductCard from "./ProductCard";

const TABS: { key: CategoryId | "todos"; label: string; href: string }[] = [
  { key: "todos", label: "Todo", href: "/tienda" },
  { key: "revestimientos", label: "Revestimientos", href: "/tienda/revestimientos" },
  { key: "cobogos", label: "Cobogós", href: "/tienda/cobogos" },
];

export default function Shop({ active }: { active: CategoryId | "todos" }) {
  const groups = CATEGORY_IDS.filter((k) => active === "todos" || active === k);
  return (
    <main className="min-h-[70vh] bg-hormigon pt-[clamp(32px,4vw,56px)] pb-[clamp(80px,9vw,140px)]">
      <div className="shell">
        <div className="mb-7 flex gap-2 text-[14px] text-muted">
          <Link href="/" className="text-muted">Inicio</Link>
          <span>/</span>
          <span className="text-carbon">Tienda</span>
        </div>
        <div className="mb-9 flex flex-wrap items-end justify-between gap-x-16 gap-y-5">
          <h1 className="display">Tienda</h1>
          <p className="copy max-w-[480px]">
            Todas las piezas se fabrican sobre pedido en 5 colores. Seña del 50% al confirmar y entrega en 30 días. Armá tu
            carrito y te pasamos el presupuesto por WhatsApp.
          </p>
        </div>
        <div className="mb-[clamp(40px,4vw,56px)] flex flex-wrap gap-[10px] border-b border-[rgba(43,23,16,.18)] pb-7">
          {TABS.map((t) => {
            const on = t.key === active;
            const count = t.key === "todos" ? PRODUCTS.length : PRODUCTS.filter((p) => p.cat === t.key).length;
            return (
              <Link
                key={t.key}
                href={t.href}
                aria-current={on ? "page" : undefined}
                className={`flex h-[46px] items-center gap-[10px] rounded-full border-[1.5px] border-carbon px-[22px] text-[16px] font-medium ${
                  on ? "bg-carbon text-hormigon hover:text-hormigon" : "bg-transparent text-carbon hover:text-carbon"
                }`}
              >
                {t.label}
                <span className="text-[13px] opacity-75">{count}</span>
              </Link>
            );
          })}
        </div>
        {groups.map((k) => (
          <section key={k} className="mb-[clamp(64px,7vw,104px)]">
            <div className="mb-8 flex flex-wrap items-baseline justify-between gap-x-10 gap-y-3">
              <h2 className="t2">{CATS[k].name}</h2>
              <p className="max-w-[520px] text-[16px] leading-[1.45] text-muted">{CATS[k].desc}</p>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,280px),1fr))] gap-x-[clamp(16px,2vw,28px)] gap-y-[clamp(36px,3vw,48px)]">
              {PRODUCTS.filter((p) => p.cat === k).map((p) => (
                <ProductCard key={p.id} p={p} />
              ))}
            </div>
          </section>
        ))}
        {/* Fotos de obras: cambian según la pestaña (Todo = mezcla, como en la home). */}
        <section id="obras" className="mt-[clamp(80px,9vw,140px)]">
          <div className="mb-[clamp(40px,5vw,64px)] flex flex-wrap items-end justify-between gap-x-16 gap-y-6">
            <h2 className="t1 max-w-[780px]">
              Muros con <span className="text-terracota">presencia</span>.
            </h2>
            <p className="lede max-w-[440px]">
              Casas, locales y jardines donde el muro deja de ser fondo y pasa a ser protagonista.
            </p>
          </div>
          <Gallery
            key={active}
            rows={active === "revestimientos" ? GALLERY_REVESTIMIENTOS : active === "cobogos" ? GALLERY_COBOGOS : GALLERY}
          />
        </section>
      </div>
    </main>
  );
}
