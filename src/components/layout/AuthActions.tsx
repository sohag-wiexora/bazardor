
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function AuthActions() {
  const router = useRouter();


  const { data: session, isPending } = authClient.useSession();

  async function handleSignOut() {
    await authClient.signOut();

    router.push("/signin");
    router.refresh();
  }

  //Akhane Session load howar somoy layout jeno jump na kore.

  if (isPending) {
    return (
      <div
        className="h-10 w-24 shrink-0 animate-pulse rounded-md bg-[#eee9df]"
        aria-label="Authentication loading"
      />
    );
  }

  //Ata holo  Logged-in user-er jonno sign out button.

  if (session) {
    return (
      <div className="flex w-full min-w-0 items-center justify-end gap-2 sm:w-auto sm:gap-3">
        <span className="hidden max-w-40 truncate text-sm font-medium text-[#55514a] md:block">
          {session.user.name || session.user.email}
        </span>

        <button
          type="button"
          onClick={handleSignOut}
          className="shrink-0 whitespace-nowrap rounded-md border border-[#d8d2c6] px-3 py-2 text-sm font-medium transition hover:bg-[#f3efe6] sm:px-4"
        >
          সাইন আউট
        </button>
      </div>
    );
  }

  // Ata holo Logged-out user-er jonno sign in ebong sign up links.

  return (
    <div className="flex w-full min-w-0 items-center gap-2 sm:w-auto sm:gap-3">
      <Link
        href="/signin"
        className="flex-1 whitespace-nowrap rounded-md border border-[#d8d2c6] px-3 py-2 text-center text-sm font-medium transition hover:bg-[#f3efe6] sm:flex-none sm:px-4"
      >
        সাইন ইন
      </Link>

      <Link
        href="/signup"
        className="flex-1 whitespace-nowrap rounded-md bg-[#0f766e] px-3 py-2 text-center text-sm font-medium text-white transition hover:bg-[#0b5f59] sm:flex-none sm:px-4"
      >
        সাইন আপ
      </Link>
    </div>
  );
}
