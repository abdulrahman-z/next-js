import { getProduct } from "@/app/prisma-db";
import { Product } from "../page";
import { notFound } from "next/navigation";
import ProductsEditFormPage from "./products-edit";

export default async function ProductEdit({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product: Product | null = await getProduct(Number(id));

  if (!product) {
    notFound();
  }
  return (
    <div>
      <ProductsEditFormPage product={product} />
    </div>
  );
}
