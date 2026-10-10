export default function Loading() {
  return (
    <main className="min-h-screen bg-[#fffdf8] px-4 py-10">
      <div className="mx-auto max-w-6xl">
        
        {/* Next.js route loading-er somoy ei skeleton dekhabe. */}
        
        <div className="h-10 w-64 animate-pulse rounded bg-[#e8e3d8]" />

        <div className="mt-3 h-5 w-96 max-w-full animate-pulse rounded bg-[#eee9df]" />

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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