import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-base-100 px-5 py-16">
      <div className="mx-auto w-full max-w-2xl text-center">
        <div className="relative mx-auto mb-8 flex h-48 w-48 items-center justify-center rounded-full bg-green-50">
          <div className="absolute inset-4 rounded-full border border-dashed border-green-200" />

          <div className="relative flex flex-col items-center">
            <svg
              viewBox="0 0 120 100"
              fill="none"
              className="mb-2 h-20 w-24 text-green-800"
              aria-hidden="true"
            >
              <path
                d="M18 36h84l-8 49H26L18 36Z"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinejoin="round"
              />
              <path
                d="M34 36 46 12h28l12 24"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M42 52v16m18-16v16m18-16v16"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M14 25 8 19m98 6 6-6"
                stroke="#D9A441"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>

            <span className="text-5xl font-black tracking-tight text-green-900">
              404
            </span>
          </div>
        </div>

        <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-amber-600">
          Page Not Found
        </p>

        <h1 className="text-2xl font-extrabold leading-relaxed text-base-content sm:text-4xl">
          ওহ! পেজটি খুঁজে পাওয়া যায়নি
        </h1>

        <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-base-content/65 sm:text-base">
          আপনি যে পেজটি খুঁজছেন সেটি সরানো হয়েছে, ঠিকানাটি ভুল হতে পারে,
          অথবা পেজটি আর উপলব্ধ নেই।
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-green-800 px-6 py-3 font-semibold text-white transition hover:bg-green-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="m3 10 9-7 9 7" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5 9v12h14V9M9 21v-7h6v7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            হোম পেজে ফিরে যান
          </Link>

          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-base-300 px-6 py-3 font-semibold text-base-content transition hover:border-green-800 hover:text-green-800"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <circle cx="10.5" cy="10.5" r="6.5" />
              <path d="m16 16 5 5" strokeLinecap="round" />
            </svg>
            পণ্য খুঁজুন
          </Link>
        </div>

        <div className="mx-auto mt-12 max-w-md border-t border-base-300 pt-5">
          <p className="text-sm text-base-content/50">
            আপনার বিশ্বস্ত অনলাইন বাজার
          </p>
          <p className="mt-2 text-xs text-base-content/40">
            © 2026 Bazar Dor. সর্বস্বত্ব সংরক্ষিত।
          </p>
        </div>
      </div>
    </main>
  );
}