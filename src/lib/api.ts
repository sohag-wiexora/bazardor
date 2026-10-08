import type { Category } from "@/types/category";
import type { Product } from "@/types/product";

// Bazar Dor API-er main address ek jaygay rakhlam.
// Pore API URL change hole sudhu ekhanei change korte hobe.

const BASE_URL = "https://api.api-store.workers.dev/api/bazardor";

// API theke sob product anar function.
// Home page, price ticker, riser/faller section—onek jaygay eta reuse hobe.

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(`${BASE_URL}/products`);

  // Server error hole silently continue korbo na.
  
  if (!response.ok) {
    throw new Error("Product data load korte problem hoyeche.");
  }

  const data: Product[] = await response.json();

  return data;
}

// Ekta specific product-er details anar function.
// Product Details page-e ei function use korbo.

export async function getProductById(id: number): Promise<Product> {
  const response = await fetch(`${BASE_URL}/products/${id}`);

  // Product na paile ba API error dile clear error throw korbo.
  
  if (!response.ok) {
    throw new Error("Product details load korte problem hoyeche.");
  }

  const data: Product = await response.json();

  return data;
}

// API theke sob category anar function.
// Navbar ebong Category page-e ei data reuse korbo.

export async function getCategories(): Promise<Category[]> {
  const response = await fetch(`${BASE_URL}/categories`);

  // API error hole clear error throw korbo.
  
  if (!response.ok) {
    throw new Error("Category data load korte problem hoyeche.");
  }

  const data: Category[] = await response.json();

  return data;
}