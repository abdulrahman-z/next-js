"use client";

import { createProduct, FormState } from "@/actions/product";
import { useActionState } from "react";

export default function ProductsFormPage() {
  const initialState: FormState = {
    errors: {},
  };
  const [state, formAction, isPending] = useActionState(
    createProduct,
    initialState,
  );
  return (
    <>
      <form action={formAction}>
        <div>
          <input type='text' name='title' placeholder='title' />
          {state.errors.title && <p>{state.errors.title}</p>}
        </div>
        <div>
          <input type='number' name='price' placeholder='price' />
          {state.errors.price && <p>{state.errors.price}</p>}
        </div>
        <div>
          <input type='text' name='desc' placeholder='desc' />
          {state.errors.desc && <p>{state.errors.desc}</p>}
        </div>

        <div>
          <button disabled={isPending}>Submit</button>
        </div>
      </form>
    </>
  );
}
