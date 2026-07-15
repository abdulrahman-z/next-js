import { PrismaClient } from "../../prisma/generated/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL,
});
const prisma = new PrismaClient({ adapter });

const seedProducts = async () => {
  const count = await prisma.product.count();
  if (count === 0) {
    await prisma.product.createMany({
      data: [
        { title: "Iphone 12", price: 65000, desc: "Apple iphone 12" },
        {
          title: "Macbook Air m4",
          price: 145000,
          desc: "Apple Macbook Air M5 Chip",
        },
        { title: "Airpods 2", price: 25000, desc: "Apple Airpods 2" },
      ],
    });
  }
};

seedProducts();

export const getProducts = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return prisma.product.findMany();
};

export const getProduct = async (id: number) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return prisma.product.findUnique({
    where: { id },
  });
};

export const addProduct = async (
  title: string,
  price: number,
  desc: string,
) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return prisma.product.create({
    data: { title, price, desc },
  });
};

export const updateProduct = async (
  id: number,
  title: string,
  price: number,
  desc: string,
) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return prisma.product.update({
    where: { id },
    data: { title, price, desc },
  });
};

export const deleteProduct = async (id: number) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return prisma.product.delete({
    where: { id },
  });
};
