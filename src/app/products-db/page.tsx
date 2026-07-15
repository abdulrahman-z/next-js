import { getProducts } from "../prisma-db";
import ProductsPage from "./products-info";

export type Product = {
  id: number;
  title: string;
  price: number;
  desc?: string | null;
};

export default async function ProductsDBPage() {
  const products: Product[] = await getProducts();

  return (
    <>
      <ProductsPage products={products} />
    </>
  );
}
