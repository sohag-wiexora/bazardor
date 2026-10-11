"use client";

import { useEffect, useState } from "react";
import { getProducts } from "@/lib/api";
import type { Product } from "@/types/product";

export default function PriceTicker() {
  const [products, setProducts] = useState<Product[]>([]);

  // Component load hole API theke latest product price niye asbe.
  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch((error) => {
        console.error("Price ticker load failed:", error);
      });
  }, []);

  // Price ebong percentage Bangla number format-e dekhabe.
  const formatPrice = (price: number) =>
    new Intl.NumberFormat("bn-BD").format(price);

  // Data ashar age ticker-er jaygay loading message dekhabe.
  if (products.length === 0) {
    return (
      <div className="border-b border-[#e8e3d8] bg-[#f7f3ea] px-4 py-3">
        <p className="text-center text-sm text-[#777064]">
          আজকের বাজারদর লোড হচ্ছে...
        </p>
      </div>
    );
  }

  // Same products duibar rakhar karone marquee continuously cholbe.
  const tickerItems = [...products, ...products];

  return (
    <section
      aria-label="আজকের বাজারদরের আপডেট"
      className="mx-auto w-full max-w-6xl px-3 sm:px-6overflow-hidden border-b border-[#e8e3d8] bg-[#f7f3ea]"
    >
      <div className="flex items-center">
        {/* Ticker-er fixed label; eta scroll korbe na. */}
        <span className="z-10 shrink-0 border-r border-[#f0a70b] bg-[#22ff05] px-4 py-3 text-sm font-bold text-[#211a0b] sm:px-5">
          লাইভ বাজারদর
        </span>

        {/* Ei container-er vitore sudhu product list scroll korbe. */}
        <div className="min-w-0 flex-1 overflow-hidden py-3">
          <div className="flex w-max animate-[marketTicker_60s_linear_infinite] hover:[animation-play-state:paused]">
            {tickerItems.map((product, index) => {
              const isUp = product.change.dir === "up";
              const isDown = product.change.dir === "down";

              return (
                <span
                  key={`${product.id}-${index}`}
                  className="mx-5 inline-flex shrink-0 items-center gap-2 border-r border-[#ddd6c8] pr-5 text-sm"
                >
                  {/* Product-er category icon. */}
                  <span aria-hidden="true">
                    {product.categoryIcon}
                  </span>

                  {/* Product-er Bangla name. */}
                  <span className="font-semibold text-[#25231f]">
                    {product.nameBn}
                  </span>

                  {/* Current market price ebong unit. */}
                  <span className="font-bold text-[#55514a]">
                    ৳{formatPrice(product.today)}/{product.unit}
                  </span>

                  {/* Price barle lal, komle sobuj. */}
                  <span
                    className={
                      isUp
                        ? "font-semibold text-red-600"
                        : isDown
                          ? "font-semibold text-green-700"
                          : "font-semibold text-gray-500"
                    }
                  >
                    {isUp ? "▲" : isDown ? "▼" : "—"}{" "}
                    {product.change.pct.toLocaleString("bn-BD", {
                      minimumFractionDigits: 1,
                      maximumFractionDigits: 1,
                    })}
                    %
                  </span>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
