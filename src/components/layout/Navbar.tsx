
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getCategories } from "@/lib/api";
import type { Category } from "@/types/category";
import BanglaDate from "@/components/layout/BanglaDate";
import AuthActions from "@/components/layout/AuthActions";

export default function Navbar() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);

  // API theke category load kori.
  useEffect(() => {
    getCategories()
      .then(setCategories)
      .catch((error) => {
        console.error("Category load korte problem:", error);
      });
  }, []);

  return (
    <header className="relative z-50 w-full border-b border-[#e8e3d8] bg-[#fffdf8]">
      <div className="mx-auto w-full max-w-6xl px-3 sm:px-6">
        {/* Logo, date and mobile hamburger */}
        <div className="flex min-h-16 items-center justify-between gap-3 py-3">
          <Link
            href="/"
            aria-label="বাজার দর হোম পেজ"
            className="flex min-w-0 flex-col"
            onClick={() => setMenuOpen(false)}
          >
            <span className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl" aria-hidden="true">
                🛒
              </span>
              <span className="whitespace-nowrap text-xl font-bold tracking-tight sm:text-2xl">
                বাজার দর
              </span>
            </span>
            <BanglaDate />
          </Link>

          {/* Desktop authentication buttons */}
          <div className="hidden sm:block">
            <AuthActions />
          </div>

          {/* Three-line hamburger button: mobile only */}
          <button
            type="button"
            aria-label={menuOpen ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 rounded-md border border-[#d8d2c6] sm:hidden"
          >
            <span
              className={`h-0.5 w-5 bg-[#171717] transition-transform ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-[#171717] transition-opacity ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-[#171717] transition-transform ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-[#eee9df] py-3 sm:hidden"
          >
            <div className="mb-3">
              <AuthActions />
            </div>

            <nav
              aria-label="মোবাইল পণ্যের ক্যাটাগরি"
              className="flex flex-col gap-1"
            >
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-semibold text-[#0f766e] hover:bg-[#f3efe6]"
              >
                সব পণ্য
              </Link>

              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/category/${category.slug}`}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-md px-3 py-2.5 text-sm text-[#55514a] hover:bg-[#f3efe6]"
                >
                  <span className="mr-2" aria-hidden="true">
                    {category.icon}
                  </span>
                  {category.nameBn}
                </Link>
              ))}
            </nav>
          </div>
        )}

        {/* Desktop category navigation */}
        <nav
          aria-label="পণ্যের ক্যাটাগরি"
          className="hidden overflow-x-auto border-t border-[#eee9df] sm:block"
        >
          <div className="flex w-max min-w-full items-center gap-1 py-2">
            <Link
              href="/"
              className="shrink-0 whitespace-nowrap rounded-md px-3 py-2 text-sm font-semibold text-[#0f766e] hover:bg-[#f3efe6]"
            >
              সব
            </Link>

            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/category/${category.slug}`}
                className="shrink-0 whitespace-nowrap rounded-md px-3 py-2 text-sm text-[#55514a] hover:bg-[#f3efe6] hover:text-[#0f766e]"
              >
                <span className="mr-1" aria-hidden="true">
                  {category.icon}
                </span>
                {category.nameBn}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
