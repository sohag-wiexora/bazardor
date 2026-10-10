import { Suspense } from "react";
import ProductDetailsContent from "./ProductDetailsContent";

type ProductDetailsPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function ProductDetailsSkeleton() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      {/* Data load howar somoy temporary skeleton dekhabo. */}
      <section className="animate-pulse rounded-2xl border border-[#e5e5e5] bg-white p-6">
        <div className="h-16 w-16 rounded-xl bg-[#eeeeee]" />

        <div className="mt-6 h-4 w-24 rounded bg-[#eeeeee]" />

        <div className="mt-3 h-9 w-72 rounded bg-[#eeeeee]" />

        <div className="mt-4 h-4 w-20 rounded bg-[#eeeeee]" />

        <div className="mt-8 h-10 w-32 rounded bg-[#eeeeee]" />
      </section>
    </main>
  );
}

export default function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  return (
    <Suspense fallback={<ProductDetailsSkeleton />}>
      {/* URL params Suspense boundary-r vitore resolve korchi. */}
      <ProductDetailsContent params={params} />
    </Suspense>
  );
}