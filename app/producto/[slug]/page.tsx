import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductView, { RelatedCard } from "@/components/ProductView";
import { CATS, PRODUCTS, fullName, getProduct } from "@/lib/catalog";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  const img = p.gallery.find((g) => g.kind === "photo") ?? p.gallery[0];
  return {
    title: `${fullName(p)} · ${p.dims}`,
    description: p.desc,
    openGraph: img ? { images: [{ url: img.src, alt: fullName(p) }] } : undefined,
  };
}

export default async function ProductoPage({ params }: Props) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();
  const related = PRODUCTS.filter((x) => x.cat === p.cat && x.id !== p.id).slice(0, 4);
  const catHref = `/tienda/${p.cat}`;
  return (
    <main className="bg-hormigon pt-[clamp(32px,4vw,56px)] pb-[clamp(80px,9vw,140px)]">
      <div className="shell">
        <div className="mb-7 flex flex-wrap gap-2 text-[14px] text-muted">
          <Link href="/tienda" className="text-muted">Tienda</Link>
          <span>/</span>
          <Link href={catHref} className="text-muted">{CATS[p.cat].name}</Link>
          <span>/</span>
          <span className="text-carbon">{p.name}</span>
        </div>
        <ProductView key={p.id} p={p} />
        <div className="mt-[clamp(80px,9vw,140px)]">
          <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="t2">{p.cat === "revestimientos" ? "Otros revestimientos" : "Otros cobogós"}</h2>
            <Link href={catHref} className="text-[16px] font-medium text-carbon hover:text-terracota">
              Ver todos →
            </Link>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,260px),1fr))] gap-x-[clamp(16px,2vw,28px)] gap-y-[clamp(36px,3vw,48px)]">
            {related.map((x) => (
              <RelatedCard key={x.id} p={x} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
