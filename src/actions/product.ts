"use server";

import { redirect } from "next/navigation";
import { addProduct, deleteProduct, updateProduct } from "../app/prisma-db";
import { revalidatePath } from "next/cache";

export type Errors = {
  title?: string | null;
  price?: string | null;
  desc?: string | null;
};

export type FormState = {
  errors: Errors;
};

export const createProduct = async (
  prevFormState: FormState,
  formData: FormData,
) => {
  const title = formData.get("title") as string;
  const price = formData.get("price") as string;
  const desc = formData.get("desc") as string;

  const errors: Errors = {};
  if (!title) errors.title = "Title is a Required field";
  if (!price) errors.price = "Price is a Required field";
  if (!desc) errors.desc = "Desc is a Required field";

  if (Object.keys(errors).length) return { errors };

  await addProduct(title, Number(price), desc);
  redirect("/products-db");
};

export const editProduct = async (
  id: number,
  prevFormState: FormState,
  formData: FormData,
) => {
  const title = formData.get("title") as string;
  const price = formData.get("price") as string;
  const desc = formData.get("desc") as string;

  const errors: Errors = {};
  if (!title) errors.title = "Title is a Required field";
  if (!price) errors.price = "Price is a Required field";
  if (!desc) errors.desc = "Desc is a Required field";

  if (Object.keys(errors).length) return { errors };

  await updateProduct(id, title, Number(price), desc);
  redirect("/products-db");
};

export const removeProduct = async (id: number) => {
  await deleteProduct(id);
  revalidatePath("/products-db");
};
