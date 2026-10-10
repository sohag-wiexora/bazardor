"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function SigninPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Form submit hole Better Auth diye user login korbe.
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const result = await authClient.signIn.email({
        email,
        password,
      });

      // Login fail hole error message dekhabo.
      if (result.error) {
        setError(result.error.message || "Signin failed. Please try again.");
        return;
      }

      // Login successful hole home page-e jabe.
      router.push("/");
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
      <section className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm text-gray-600">
            Sign in to your BazarDor account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>

            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              autoComplete="current-password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {error && (
            <p
              role="alert"
              className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700"
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-[#e8e3d8]" />

          <span className="text-xs font-medium uppercase tracking-wider text-[#999999]">
            অথবা
          </span>

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
          className="flex w-full items-center justify-center gap-3 rounded-lg border border-[#d8d2c6] bg-white px-4 py-3 font-semibold text-[#333333] transition hover:bg-[#f3efe6]"
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
          className="mt-3 flex w-full items-center justify-center gap-3 rounded-lg border border-[#d8d2c6] bg-[#111111] px-4 py-3 font-semibold text-white transition hover:bg-[#222222]"
        >
          <span className="text-lg" aria-hidden="true">
            GitHub
          </span>
          Continue with GitHub
        </button>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="font-semibold text-blue-600 hover:underline"
          >
            Create account
          </Link>
        </p>
      </section>
    </main>
  );
}