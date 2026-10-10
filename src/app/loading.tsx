export default function Loading() {
  // API data load howar somoy user-ke blank screen na dekhiye
  // ei skeleton layout-ta dekhabo.
  return (
    <main className="min-h-screen bg-[#fffdf8]">
      {/* Navbar skeleton */}
      <div className="border-b border-[#e8e3d8] bg-[#fffdf8]">
        <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <div className="h-7 w-32 animate-pulse rounded bg-[#e8e3d8]" />
              <div className="h-3 w-24 animate-pulse rounded bg-[#eee9df]" />
            </div>

            <div className="flex gap-2">
              <div className="h-10 w-20 animate-pulse rounded bg-[#e8e3d8]" />
              <div className="h-10 w-20 animate-pulse rounded bg-[#e8e3d8]" />
            </div>
          </div>

          {/* Category navigation skeleton */}
          <div className="mt-5 flex gap-2 overflow-hidden">
            {Array.from({ length: 7 }).map((_, index) => (
              <div
                key={index}
                className="h-9 w-20 shrink-0 animate-pulse rounded bg-[#eee9df]"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Hero skeleton */}
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-16">
        <div className="space-y-5">
          <div className="h-4 w-36 animate-pulse rounded bg-[#e8e3d8]" />
          <div className="h-12 w-full max-w-xl animate-pulse rounded bg-[#e8e3d8]" />
          <div className="h-12 w-4/5 max-w-md animate-pulse rounded bg-[#e8e3d8]" />
          <div className="h-16 w-full max-w-xl animate-pulse rounded bg-[#eee9df]" />
          <div className="h-12 w-36 animate-pulse rounded bg-[#e8e3d8]" />
        </div>

        <div className="min-h-72 animate-pulse rounded-2xl bg-[#eee9df] sm:min-h-96" />
      </section>

      {/* Product cards skeleton */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="mb-7 space-y-3">
          <div className="h-8 w-56 animate-pulse rounded bg-[#e8e3d8]" />
          <div className="h-4 w-80 max-w-full animate-pulse rounded bg-[#eee9df]" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border border-[#e8e3d8] bg-white p-4"
            >
              <div className="h-32 animate-pulse rounded-lg bg-[#eee9df]" />

              <div className="mt-4 space-y-3">
                <div className="h-5 w-3/5 animate-pulse rounded bg-[#e8e3d8]" />
                <div className="h-4 w-2/5 animate-pulse rounded bg-[#eee9df]" />
                <div className="h-7 w-1/2 animate-pulse rounded bg-[#e8e3d8]" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}