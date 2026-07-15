"use client";

import Link from "next/link";
import { Product } from "./page";
import { removeProduct } from "@/actions/product";
import { useOptimistic } from "react";

export default function ProductsPage({ products }: { products: Product[] }) {
  const [optimisticProducts, setOptimisticProducts] = useOptimistic(
    products,
    (currentProducts, productId) => {
      return currentProducts.filter((p) => p.id != productId);
    },
  );

  const removeProductWithId = async (productId: number) => {
    setOptimisticProducts(productId);
    await removeProduct(productId);
  };

  return (
    <>
      {optimisticProducts?.map((product: Product) => {
        return (
          <div style={{ marginBottom: "24px" }} key={product.id}>
            <p>
              <Link href={`/products-db/${product.id}`}>{product.title}</Link>
            </p>
            <p>{product.price}</p>
            <p>{product.desc}</p>
            <form action={removeProductWithId.bind(null, product.id)}>
              <button
                style={{
                  border: "1px solid #fff",
                  padding: "8px 16px",
                  margin: "12px 0",
                }}
                type='submit'
              >
                Delete
              </button>
            </form>
          </div>
        );
      })}
    </>
  );
}
