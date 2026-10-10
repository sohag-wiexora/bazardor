import { Suspense } from "react";
import { notFound } from "next/navigation";

import { getCategories, getProductsByCategory } from "@/lib/api";

import CategoryProducts from "./CategoryProducts";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

function CategoryPageSkeleton() {
  return (
    <main className="min-h-screen bg-[#fffdf8] px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="h-10 w-64 animate-pulse rounded bg-[#e8e3d8]" />

        <div className="mt-3 h-5 w-96 max-w-full animate-pulse rounded bg-[#eee9df]" />

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="h-72 animate-pulse rounded-2xl bg-[#eee9df]"
            />
          ))}
        </div>
      </div>
    </main>
  );
}

async function CategoryPageContent({
  params,
}: CategoryPageProps) {
  // Dynamic route-er slug ta Suspense boundary-r vitore resolve korchi.
  const { slug } = await params;

  const categories = await getCategories();

  // URL-er slug-er sathe matching category khujchi.
  const category = categories.find(
    (item) => item.slug === slug,
  );

  // Category valid na hole Next.js-er 404 page dekhabe.
  if (!category) {
    notFound();
  }

  const products = await getProductsByCategory(slug);

  return (
    <CategoryProducts
      category={category}
      products={products}
    />
  );
}

export default function CategoryPage({
  params,
}: CategoryPageProps) {
  return (
    <Suspense fallback={<CategoryPageSkeleton />}>
      <CategoryPageContent params={params} />
    </Suspense>
  );
}