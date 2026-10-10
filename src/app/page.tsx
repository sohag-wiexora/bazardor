import Navbar from "@/components/layout/Navbar";
import PriceTicker from "@/components/layout/PriceTicker";
import Hero from "@/components/home/Hero";
import ProductCard from "@/components/product/ProductCard";
import { getProducts } from "@/lib/api";
import Footer from "@/components/layout/Footer";

export default async function Home() {
  // Home page-er main product data ekbar fetch korchi.
  // Ei same data theke riser, faller ebong all products section
  // dynamically তৈরি হবে.
  const products = await getProducts();

  // Jader price up, tader moddhe highest percentage change
  // age rekhe top 6 riser ber korchi.
  const risers = products
    .filter((product) => product.change.dir === "up")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);

  // Jader price down, tader moddhe highest percentage fall
  // age rekhe top 6 faller ber korchi.
  const fallers = products
    .filter((product) => product.change.dir === "down")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);

  return (
    <div className="min-h-screen bg-[#fffdf8] text-[#171717]">
      <Navbar />

      <PriceTicker />

      <main>
        <Hero />

        {/* Section A — Top 6 products whose price increased today */}
        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
          <div className="mb-7">
            <h2 className="text-2xl font-bold sm:text-3xl">
              আজ দাম বেড়েছে <span className="text-green-700">▲</span>
            </h2>

            <p className="mt-2 text-sm text-[#6b6b6b] sm:text-base">
              আজকের বাজারে যেসব পণ্যের দাম সবচেয়ে বেশি বেড়েছে।
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {risers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Section B — Top 6 products whose price decreased today */}
        <section className="border-y border-[#e8e3d8] bg-[#faf7f0]">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
            <div className="mb-7">
              <h2 className="text-2xl font-bold sm:text-3xl">
                আজ দাম কমেছে <span className="text-red-600">▼</span>
              </h2>

              <p className="mt-2 text-sm text-[#6b6b6b] sm:text-base">
                আজকের বাজারে যেসব পণ্যের দাম কমেছে।
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {fallers.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Section C — Every product returned by the API */}
        <section
          id="সব-পণ্য"
          className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16"
        >
          <div className="mb-7">
            <h2 className="text-2xl font-bold sm:text-3xl">সব পণ্য</h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-[#6b6b6b] sm:text-base">
              বাজারের প্রয়োজনীয় সব পণ্যের আজকের দাম, ইউনিট এবং দামের
              পরিবর্তন এক জায়গায় দেখুন।
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>

<Footer />
    </div>
  );
}