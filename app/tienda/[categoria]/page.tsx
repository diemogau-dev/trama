import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Shop from "@/components/Shop";
import { CATEGORY_IDS, CATS, type CategoryId } from "@/lib/catalog";

type Props = { params: Promise<{ categoria: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return CATEGORY_IDS.map((categoria) => ({ categoria }));
}

const isCat = (c: string): c is CategoryId => c in CATS;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoria } = await params;
  if (!isCat(categoria)) return {};
  return { title: CATS[categoria].name, description: CATS[categoria].desc };
}

export default async function CategoriaPage({ params }: Props) {
  const { categoria } = await params;
  if (!isCat(categoria)) notFound();
  return <Shop active={categoria} />;
}
