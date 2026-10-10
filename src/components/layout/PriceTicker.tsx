import { getProducts } from "@/lib/api";

// Price ticker-er data API theke nibo.
// Tai product manually list kore rakhar dorkar nei.
export default async function PriceTicker() {
  const products = await getProducts();

  // Infinite marquee effect smooth rakhar jonno same item list
  // duibar render korchi. Second list sesh hole first list-er
  // sathe seamlessly abar continue korbe.
  const tickerItems = [...products, ...products];

  return (
    <div className="overflow-hidden border-b border-[#e8e3d8] bg-[#f7f3ea]">
      <div className="flex w-max animate-[marquee_60s_linear_infinite]">
        {tickerItems.map((product, index) => {
          const isUp = product.change.dir === "up";
          const isDown = product.change.dir === "down";

          return (
            <div
              key={`${product.id}-${index}`}
              className="flex shrink-0 items-center gap-2 border-r border-[#ddd6c8] px-5 py-3 text-sm"
            >
              {/* Product-er emoji/icon */}
              <span aria-hidden="true">{product.image}</span>

              {/* Product name */}
              <span className="font-semibold text-[#25231f]">
                {product.nameBn}
              </span>

              {/* Current price */}
              <span className="text-[#55514a]">
                {product.today.toLocaleString("bn-BD")} টাকা/{product.unit}
              </span>

              {/* Price movement */}
              <span
                className={
                  isUp
                    ? "font-semibold text-green-700"
                    : isDown
                      ? "font-semibold text-red-600"
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
            </div>
          );
        })}
      </div>
    </div>
  );
}