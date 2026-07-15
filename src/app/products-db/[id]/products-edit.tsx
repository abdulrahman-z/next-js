"use client";

import { editProduct, FormState } from "@/actions/product";
import { useActionState } from "react";
import { Product } from "../page";

export default function ProductsEditFormPage({
  product,
}: {
  product: Product;
}) {
  const initialState: FormState = {
    errors: {},
  };

  const editProductWithId = editProduct.bind(null, product.id);
  const [state, formAction, isPending] = useActionState(
    editProductWithId,
    initialState,
  );
  return (
    <>
      <form action={formAction}>
        <div>
          <input
            type='text'
            name='title'
            placeholder='title'
            defaultValue={product.title}
          />
          {state.errors.title && <p>{state.errors.title}</p>}
        </div>
        <div>
          <input
            type='number'
            name='price'
            placeholder='price'
            defaultValue={product.price}
          />
          {state.errors.price && <p>{state.errors.price}</p>}
        </div>
        <div>
          <input
            type='text'
            name='desc'
            placeholder='desc'
            defaultValue={product.desc ?? ""}
          />
          {state.errors.desc && <p>{state.errors.desc}</p>}
        </div>

        <div>
          <button disabled={isPending}>Submit</button>
        </div>
      </form>
    </>
  );
}
