import type { Category } from "@/types/category";
import type { Product } from "@/types/product";


const BASE_URL = "https://api.api-store.workers.dev/api/bazardor";


export async function getProducts(): Promise<Product[]> {
  const response = await fetch(`${BASE_URL}/products`, {

    cache: "force-cache",
  });

  
  if (!response.ok) {
    throw new Error("Product data load korte problem hoyeche.");
  }

  const data: Product[] = await response.json();

  return data;
}


export async function getProductById(id: number): Promise<Product> {
  const response = await fetch(`${BASE_URL}/products/${id}`, {

    cache: "force-cache",
  });


  
  if (!response.ok) {
    throw new Error("Product details load korte problem hoyeche.");
  }

  const data: Product = await response.json();

  return data;
}


export async function getCategories(): Promise<Category[]> {
  const response = await fetch(`${BASE_URL}/categories`, {

    cache: "force-cache",
  });

  if (!response.ok) {
    throw new Error("Category data load korte problem hoyeche.");
  }

  const data: Category[] = await response.json();

  return data;
}


export async function getProductBySlug(
  slug: string,
): Promise<Product | null> {
  const products = await getProducts();

 
  return products.find((product) => product.slug === slug) ?? null;
}

export async function getProductsByCategory(
  categorySlug: string,
): Promise<Product[]> {
  const products = await getProducts();

  return products.filter((product) => product.category === categorySlug);
}