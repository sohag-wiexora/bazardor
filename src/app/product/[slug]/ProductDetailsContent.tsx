import { notFound } from "next/navigation";
import Link from "next/link";

import { getProductBySlug } from "@/lib/api";

type ProductDetailsContentProps = {
  params: Promise<{
    slug: string;
  }>;
};

function formatPrice(value: number) {
  
  // Akhane Ami Price-ke Bangla digit-e dekhacchi jeno UI-ta requirement-er sathe match kore.

  return value.toLocaleString("bn-BD");
}

function getUnitLabel(unit: string) {

  const units: Record<string, string> = {
    kg: "কেজি",
    liter: "লিটার",
    litre: "লিটার",
    dozen: "ডজন",
    piece: "পিস",
    pcs: "পিস",
  };

  return units[unit.toLowerCase()] ?? unit;
}

export default async function ProductDetailsContent({
  params,
}: ProductDetailsContentProps) {
  const { slug } = await params;

  
  const product = await getProductBySlug(slug);

 
  if (!product) {
    notFound();
  }

  const isUp = product.change.dir === "up";
  const isDown = product.change.dir === "down";

  const changeColor = isUp
    ? "bg-green-50 text-green-700"
    : isDown
      ? "bg-red-50 text-red-600"
      : "bg-gray-100 text-gray-600";

  const changeIcon = isUp ? "▲" : isDown ? "▼" : "—";

  const minimumPrice = Math.min(
    ...product.markets.map((market) => market.min),
  );

  const maximumPrice = Math.max(
    ...product.markets.map((market) => market.max),
  );


  const averagePrice =
    product.markets.reduce(
      (total, market) => total + (market.min + market.max) / 2,
      0,
    ) / product.markets.length;

  return (
    <main className="min-h-screen bg-[#fffdf8] text-[#171717]">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">

        {/* Back button */}

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#0f766e] transition hover:gap-3"
        >
          ← হোম পেজে ফিরে যান
        </Link>

        {/* Product summary */}

        <section className="mt-6 overflow-hidden rounded-3xl border border-[#e8e3d8] bg-white shadow-sm">
          <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[280px_1fr] lg:p-10">

            {/* Product illustration */}

            <div className="flex min-h-64 items-center justify-center rounded-2xl bg-[#f7f3ea]">
              <span
                className="text-8xl"
                aria-hidden="true"
              >
                {product.image}
              </span>
            </div>

            {/* Product information */}

            <div className="flex flex-col justify-center">

              {/* Category + unit */}

              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-[#f5efe3] px-3 py-1.5 text-sm font-semibold text-[#625a4d]">
                  {product.categoryIcon} {product.categoryNameBn}
                </span>

                <span className="rounded-full bg-[#f1f1f1] px-3 py-1.5 text-sm font-semibold text-[#666]">
                  প্রতি {getUnitLabel(product.unit)}
                </span>
              </div>

              <h1 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                {product.nameBn}
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-[#6b6b6b]">
                {product.nameBn}-এর আজকের বাজারদর এবং বিভিন্ন বাজারে
                সম্ভাব্য মূল্যপরিসর এক নজরে দেখুন।
              </p>

              {/* Today's price */}

              <div className="mt-7 flex flex-wrap items-end gap-5">

                <div>
                  <p className="text-sm font-medium text-[#77736c]">
                    আজকের দাম
                  </p>

                  <p className="mt-1 text-4xl font-black">
                    {formatPrice(product.today)} টাকা
                  </p>

                  <p className="mt-1 text-sm text-[#77736c]">
                    প্রতি {getUnitLabel(product.unit)}
                  </p>
                </div>

                {/* Change badge */}

                <span
                  className={`rounded-full px-4 py-2 text-sm font-bold ${changeColor}`}
                >
                  {changeIcon}{" "}
                  {product.change.pct.toLocaleString("bn-BD", {
                    minimumFractionDigits: 1,
                    maximumFractionDigits: 1,
                  })}
                  %
                </span>
              </div>

              {/* Historical price information */}

              <div className="mt-7 grid max-w-xl grid-cols-3 gap-3">

                <div className="rounded-xl bg-[#faf8f3] p-3">
                  <p className="text-xs text-[#888]">গতকাল</p>
                  <p className="mt-1 font-bold">
                    {formatPrice(product.yesterday)}
                  </p>
                </div>

                <div className="rounded-xl bg-[#faf8f3] p-3">
                  <p className="text-xs text-[#888]">গত সপ্তাহ</p>
                  <p className="mt-1 font-bold">
                    {formatPrice(product.lastWeek)}
                  </p>
                </div>

                <div className="rounded-xl bg-[#faf8f3] p-3">
                  <p className="text-xs text-[#888]">গত মাস</p>
                  <p className="mt-1 font-bold">
                    {formatPrice(product.lastMonth)}
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Price summary */}

        <section className="mt-8">
          <div className="mb-5">
            <p className="text-sm font-bold text-[#0f766e]">
              মূল্য সারাংশ
            </p>

            <h2 className="mt-1 text-2xl font-black sm:text-3xl">
              আজকের বাজার মূল্য
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">

            <div className="rounded-2xl border border-[#e8e3d8] bg-white p-5 shadow-sm">
              <p className="text-sm text-[#77736c]">
                সর্বনিম্ন দাম
              </p>

              <p className="mt-2 text-2xl font-black">
                {formatPrice(minimumPrice)} টাকা
              </p>
            </div>

            <div className="rounded-2xl border border-[#e8e3d8] bg-white p-5 shadow-sm">
              <p className="text-sm text-[#77736c]">
                গড় দাম
              </p>

              <p className="mt-2 text-2xl font-black">
                {formatPrice(Math.round(averagePrice))} টাকা
              </p>
            </div>

            <div className="rounded-2xl border border-[#e8e3d8] bg-white p-5 shadow-sm">
              <p className="text-sm text-[#77736c]">
                সর্বোচ্চ দাম
              </p>

              <p className="mt-2 text-2xl font-black">
                {formatPrice(maximumPrice)} টাকা
              </p>
            </div>

          </div>
        </section>

        {/* Market-wise price */}

        <section className="mt-10">

          <div className="mb-5">
            <p className="text-sm font-bold text-[#0f766e]">
              বাজারভিত্তিক তথ্য
            </p>

            <h2 className="mt-1 text-2xl font-black sm:text-3xl">
              বাজারভিত্তিক আজকের দাম
            </h2>

            <p className="mt-2 text-sm leading-6 text-[#6b6b6b]">
              বিভিন্ন বাজারে আজকের সম্ভাব্য সর্বনিম্ন ও সর্বোচ্চ দাম।
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#e8e3d8] bg-white shadow-sm">

            {/* Desktop/tablet view */}
            
            <div className="hidden overflow-x-auto md:block">
              <table className="w-full min-w-[650px]">
                <thead className="bg-[#f7f3ea]">
                  <tr className="text-left text-sm text-[#5f5a52]">
                    <th className="px-5 py-4 font-bold">
                      বাজার
                    </th>

                    <th className="px-5 py-4 font-bold">
                      বিভাগ
                    </th>

                    <th className="px-5 py-4 font-bold">
                      সর্বনিম্ন
                    </th>

                    <th className="px-5 py-4 font-bold">
                      সর্বোচ্চ
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-[#eee9df]">
                  {product.markets.map((market) => (
                    <tr
                      key={`${market.market}-${market.division}`}
                      className="transition hover:bg-[#fffdf8]"
                    >
                      <td className="px-5 py-4 font-semibold">
                        {market.market}
                      </td>

                      <td className="px-5 py-4 text-[#6b6b6b]">
                        {market.division}
                      </td>

                      <td className="px-5 py-4 font-semibold">
                        {formatPrice(market.min)} টাকা
                      </td>

                      <td className="px-5 py-4 font-semibold">
                        {formatPrice(market.max)} টাকা
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile view */}

            <div className="divide-y divide-[#eee9df] md:hidden">
              {product.markets.map((market) => (
                <article
                  key={`${market.market}-${market.division}`}
                  className="p-5"
                >
                  <div className="flex items-start justify-between gap-4">

                    <div>
                      <h3 className="font-bold">
                        {market.market}
                      </h3>

                      <p className="mt-1 text-sm text-[#6b6b6b]">
                        {market.division}
                      </p>
                    </div>

                    <span className="rounded-full bg-[#f5efe3] px-2.5 py-1 text-xs font-semibold">
                      প্রতি {getUnitLabel(product.unit)}
                    </span>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">

                    <div className="rounded-xl bg-[#f7f3ea] p-3">
                      <p className="text-xs text-[#77736c]">
                        সর্বনিম্ন
                      </p>

                      <p className="mt-1 font-bold">
                        {formatPrice(market.min)} টাকা
                      </p>
                    </div>

                    <div className="rounded-xl bg-[#f7f3ea] p-3">
                      <p className="text-xs text-[#77736c]">
                        সর্বোচ্চ
                      </p>

                      <p className="mt-1 font-bold">
                        {formatPrice(market.max)} টাকা
                      </p>
                    </div>

                  </div>
                </article>
              ))}
            </div>

          </div>
        </section>

        {/* Disclaimer */}

        <p className="mt-7 pb-4 text-center text-xs leading-5 text-[#8a857d]">
          সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে
          পরিবর্তিত হতে পারে।
        </p>
      </div>
    </main>
  );
}