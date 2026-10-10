import type { Category } from "@/types/category";
import type { Product } from "@/types/product";

// Bazar Dor API-er main address ek jaygay rakhlam.
// Pore API URL change hole sudhu ekhanei change korte hobe.

const BASE_URL = "https://api.api-store.workers.dev/api/bazardor";

// API theke sob product anar function.
// Home page, price ticker, riser/faller section—onek jaygay eta reuse hobe.

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(`${BASE_URL}/products`, {
    // API data cache korle Next.js prerender-er somoy
    // uncached-data niye blocking error dibe na.
    cache: "force-cache",
  });

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
  const response = await fetch(`${BASE_URL}/products/${id}`, {
    // Product details-o cache kore rakhchi,
    // jate dynamic route prerender-er somoy blocking issue na hoy.
    cache: "force-cache",
  });

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
  const response = await fetch(`${BASE_URL}/categories`, {
    // Category list-o cache kore rakhlam,
    // karon category data frequently change korar kotha na.
    cache: "force-cache",
  });

  // API error hole clear error throw korbo.
  
  if (!response.ok) {
    throw new Error("Category data load korte problem hoyeche.");
  }

  const data: Category[] = await response.json();

  return data;
}

// URL-er slug diye product khuje ber korchi.
// API direct slug endpoint na dile all products theke matching slug ber korbo.

export async function getProductBySlug(
  slug: string,
): Promise<Product | null> {
  const products = await getProducts();

  // Matching product na pele null return korbo.
  // Pore page-e eta diye friendly 404 show kora jabe.
 
  return products.find((product) => product.slug === slug) ?? null;
}

// Category page-er jonno specific category-r product gulo ber korchi.
// Filter endpoint rate-limit korleo all products endpoint diye kaj cholbe.
export async function getProductsByCategory(
  categorySlug: string,
): Promise<Product[]> {
  const products = await getProducts();

  // API theke asa sob product-er moddhe matching category khujchi.
  return products.filter((product) => product.category === categorySlug);
}