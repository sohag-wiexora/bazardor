"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!name.trim() || !email.trim() || !password || !confirmPassword) {
      setError("সবগুলো তথ্য পূরণ করুন।");
      return;
    }

    if (password !== confirmPassword) {
      setError("পাসওয়ার্ড দুটি একই নয়।");
      return;
    }

    if (password.length < 8) {
      setError("পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে।");
      return;
    }

    setLoading(true);

    try {
      const result = await authClient.signUp.email({
        name: name.trim(),
        email: email.trim(),
        password,
        callbackURL: "/",
      });

      if (result.error) {
        setError(result.error.message || "অ্যাকাউন্ট তৈরি করা যায়নি।");
        return;
      }

      router.push("/");
      router.refresh();
    } catch (error) {
      console.error(error);
      setError("কিছু সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#fffdf8] px-4 py-10">
      <div className="mx-auto max-w-md">
        <div className="rounded-xl border border-[#e8e3d8] bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-[#171717]">
              অ্যাকাউন্ট তৈরি করুন
            </h1>
            <p className="mt-2 text-sm text-[#6b6b6b]">
              বাজার দর-এ নতুন অ্যাকাউন্ট তৈরি করুন
            </p>
          </div>

          {error && (
            <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-[#333]"
              >
                নাম
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="আপনার নাম"
                className="w-full rounded-lg border border-[#d8d2c6] px-4 py-3 outline-none transition focus:border-[#0f766e]"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-[#333]"
              >
                ইমেইল
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-lg border border-[#d8d2c6] px-4 py-3 outline-none transition focus:border-[#0f766e]"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-1.5 block text-sm font-medium text-[#333]"
              >
                পাসওয়ার্ড
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="কমপক্ষে ৮ অক্ষর"
                className="w-full rounded-lg border border-[#d8d2c6] px-4 py-3 outline-none transition focus:border-[#0f766e]"
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-1.5 block text-sm font-medium text-[#333]"
              >
                পাসওয়ার্ড নিশ্চিত করুন
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                placeholder="পাসওয়ার্ড আবার লিখুন"
                className="w-full rounded-lg border border-[#d8d2c6] px-4 py-3 outline-none transition focus:border-[#0f766e]"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-[#0f766e] px-4 py-3 font-semibold text-white transition hover:bg-[#0b5f59] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "অ্যাকাউন্ট তৈরি হচ্ছে..." : "সাইন আপ"}
            </button>
          </form>

          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-[#e8e3d8]" />
            <span className="text-sm text-[#888]">অথবা</span>
            <div className="h-px flex-1 bg-[#e8e3d8]" />
          </div>

          <button
            type="button"
            onClick={() =>
              authClient.signIn.social({
                provider: "google",
                callbackURL: "/",
              })
            }
            className="flex w-full items-center justify-center gap-3 rounded-lg border border-[#d8d2c6] px-4 py-3 font-semibold text-[#171717] transition hover:bg-[#f3efe6]"
          >
            <span className="text-lg" aria-hidden="true">
              G
            </span>
            Continue with Google
          </button>

          <button
            type="button"
            onClick={() =>
              authClient.signIn.social({
                provider: "github",
                callbackURL: "/",
              })
            }
            className="mt-3 flex w-full items-center justify-center gap-3 rounded-lg border border-[#d8d2c6] bg-[#171717] px-4 py-3 font-semibold text-white transition hover:bg-[#2b2b2b]"
          >
            <span className="text-lg" aria-hidden="true">
              GitHub
            </span>
            Continue with GitHub
          </button>

          <p className="mt-6 text-center text-sm text-[#666]">
            আগে থেকেই অ্যাকাউন্ট আছে?{" "}
            <Link
              href="/signin"
              className="font-semibold text-[#0f766e] hover:underline"
            >
              সাইন ইন করুন
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}