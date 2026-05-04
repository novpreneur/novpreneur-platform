"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/dashboard";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [needsVerification, setNeedsVerification] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.needsVerification) {
          setNeedsVerification(true);
          setError("Please verify your email before signing in.");
          return;
        }
        throw new Error(data.error || "Login failed");
      }

      router.push(redirect);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 h-14 flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Novpreneur" width={28} height={28} className="rounded-full" />
            <span className="text-[17px] font-bold tracking-tight text-black">Novpreneur</span>
          </Link>
        </div>
      </header>

      {/* Form */}
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-[400px]">
          <div className="text-center mb-8">
            <h1 className="text-[28px] font-bold text-black">Sign in</h1>
            <p className="mt-2 text-[14px] text-gray-500">
              Access your Novpreneur dashboard.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[12px] font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-10 px-3 text-[14px] border border-gray-200 rounded-[4px] focus:outline-none focus:border-gray-400 bg-white"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-[12px] font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-10 px-3 text-[14px] border border-gray-200 rounded-[4px] focus:outline-none focus:border-gray-400 bg-white"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-[4px]">
                <p className="text-[13px] text-red-600">{error}</p>
                {needsVerification && (
                  <Link
                    href={`/verify-email?email=${encodeURIComponent(email)}`}
                    className="text-[12px] font-semibold text-red-700 underline mt-1 inline-block"
                  >
                    Go to verification →
                  </Link>
                )}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full h-11 text-[14px] font-semibold text-white bg-[#4A9FE5] rounded-[4px] hover:bg-[#3B8DD6] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-[13px] text-gray-500">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="text-black font-semibold hover:underline"
              >
                Create one
              </Link>
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <Link
              href="/"
              className="text-[12px] text-gray-400 hover:text-gray-600 transition-colors"
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50" />}>
      <LoginContent />
    </Suspense>
  );
}
