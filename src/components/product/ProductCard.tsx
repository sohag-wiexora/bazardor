import Link from "next/link";
import type { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
};


export default function ProductCard({ product }: ProductCardProps) {
  const isUp = product.change.dir === "up";
  const isDown = product.change.dir === "down";

  const changeColor = isUp
    ? "text-green-700 bg-green-50"
    : isDown
      ? "text-red-600 bg-red-50"
      : "text-gray-500 bg-gray-100";

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block rounded-xl border border-[#e8e3d8] bg-white p-4 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
    >
      {/* Product-er visual area.
          API-te image currently emoji hisebe ashe, tai img tag use korchi na. */}

      <div className="flex h-32 items-center justify-center rounded-lg bg-[#f7f3ea]">
        <span
          className="text-6xl transition-transform duration-200 group-hover:scale-110"
          aria-hidden="true"
        >
          {product.image}
        </span>
      </div>

      {/* Product information */}

      <div className="mt-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-bold text-[#171717]">{product.nameBn}</h3>

            <p className="mt-1 text-sm text-[#6b6b6b]">
              প্রতি {product.unit === "kg" ? "কেজি" : product.unit}
            </p>
          </div>

          <span
            className={`shrink-0 rounded-full px-2 py-1 text-xs font-semibold ${changeColor}`}
          >
            {isUp ? "▲" : isDown ? "▼" : "—"}{" "}
            {product.change.pct.toLocaleString("bn-BD", {
              minimumFractionDigits: 1,
              maximumFractionDigits: 1,
            })}
            %
          </span>
        </div>

        {/* Current price */}
        
        <div className="mt-4 flex items-end justify-between gap-3">
          <div>
            <p className="text-xs text-[#77736c]">আজকের দাম</p>

            <p className="mt-1 text-xl font-bold text-[#171717]">
              {product.today.toLocaleString("bn-BD")} টাকা
            </p>
          </div>

          <span className="text-sm font-medium text-[#0f766e] transition group-hover:translate-x-1">
            দেখুন →
          </span>
        </div>
      </div>
    </Link>
  );
}