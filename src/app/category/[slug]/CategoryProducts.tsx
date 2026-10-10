"use client";

import { useMemo, useState } from "react";

import type { Category } from "@/types/category";
import type { Product } from "@/types/product";

import ProductCard from "@/components/product/ProductCard";

type CategoryProductsProps = {
  category: Category;
  products: Product[];
};

type SortOption = "default" | "low-high" | "high-low";

export default function CategoryProducts({
  category,
  products,
}: CategoryProductsProps) {
  const [sort, setSort] = useState<SortOption>("default");

  // User je sort option select korbe,
  // tar upor base kore product list arrange korchi.
  
  const sortedProducts = useMemo(() => {
    const productList = [...products];

    if (sort === "low-high") {
      return productList.sort((a, b) => a.today - b.today);
    }

    if (sort === "high-low") {
      return productList.sort((a, b) => b.today - a.today);
    }

    return productList;
  }, [products, sort]);

  return (
    <main className="min-h-screen bg-[#fffdf8] px-4 py-10">
      <div className="mx-auto max-w-6xl">
        
        {/* Category heading */}

        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-4xl" aria-hidden="true">
              {category.icon}
            </div>

            <h1 className="mt-3 text-3xl font-bold text-[#171717] sm:text-4xl">
              {category.nameBn}
            </h1>

            <p className="mt-2 text-sm text-[#6b6b6b]">
              {category.nameBn} ক্যাটাগরির আজকের বাজার দর দেখুন।
            </p>
          </div>

          {/* Price sorting */}

          <div className="flex items-center gap-3">
            <label
              htmlFor="price-sort"
              className="text-sm font-medium text-[#4d4d4d]"
            >
              সাজান:
            </label>

            <select
              id="price-sort"
              value={sort}
              onChange={(event) =>
                setSort(event.target.value as SortOption)
              }
              className="rounded-lg border border-[#ddd7ca] bg-white px-3 py-2 text-sm text-[#222] outline-none focus:border-[#b98b3d]"
            >
              <option value="default">ডিফল্ট</option>
              <option value="low-high">কম থেকে বেশি</option>
              <option value="high-low">বেশি থেকে কম</option>
            </select>
          </div>
        </div>

        {/* Product list */}

        {sortedProducts.length > 0 ? (
          <section className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </section>
        ) : (
          <div className="mt-10 rounded-2xl border border-[#e4ded2] bg-white p-10 text-center">
            <p className="text-lg font-semibold text-[#222]">
              এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।
            </p>

            <p className="mt-2 text-sm text-[#777]">
              পরে আবার চেষ্টা করুন।
            </p>
          </div>
        )}
      </div>
    </main>
  );
}