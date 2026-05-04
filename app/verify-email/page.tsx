"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

function VerifyEmailContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const emailParam = searchParams.get("email") || "";
  const codeParam = searchParams.get("code") || "";

  const [email] = useState(emailParam);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);
  const [resending, setResending] = useState(false);

  async function handleVerify(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/verify-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Verification failed");
      }

      setVerified(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Verification failed");
    } finally {
      setLoading(false);
    }
  }

  async function handleResend() {
    setResending(true);
    setError("");

    try {
      const res = await fetch("/api/auth/verify-email", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to resend");
      }

      setError("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to resend code");
    } finally {
      setResending(false);
    }
  }

  if (verified) {
    return (
      <div className="text-center">
        <div className="w-14 h-14 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center mx-auto mb-6">
          <span className="text-green-600 text-[22px]">✓</span>
        </div>
        <h1 className="text-[28px] font-bold text-black">Email Verified</h1>
        <p className="mt-3 text-[14px] text-gray-500">
          Your email has been verified. You can now sign in.
        </p>
        <button
          onClick={() => router.push("/login")}
          className="inline-flex items-center h-11 px-7 mt-6 text-[14px] font-semibold text-white bg-[#4A9FE5] rounded-[4px] hover:bg-[#3B8DD6] transition-colors"
        >
          Sign in
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[400px]">
      <div className="text-center mb-8">
        <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
          <span className="text-[22px]">📧</span>
        </div>
        <h1 className="text-[28px] font-bold text-black">Verify your email</h1>
        <p className="mt-2 text-[14px] text-gray-500">
          We sent a 6-digit code to <strong className="text-black">{email}</strong>.
          Enter it below.
        </p>
      </div>

      {/* Dev helper — show code */}
      {codeParam && (
        <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-[6px]">
          <p className="text-[11px] font-semibold text-yellow-700 uppercase tracking-wider mb-1">
            Development Mode
          </p>
          <p className="text-[13px] text-yellow-800">
            Your verification code is: <strong className="font-mono text-[15px]">{codeParam}</strong>
          </p>
          <p className="text-[11px] text-yellow-600 mt-1">
            In production, this would be sent via email.
          </p>
        </div>
      )}

      <form onSubmit={handleVerify} className="space-y-4">
        <div>
          <label className="block text-[12px] font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
            Verification Code
          </label>
          <input
            type="text"
            required
            maxLength={6}
            value={code}
            onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
            className="w-full h-12 px-4 text-[20px] font-mono text-center tracking-[0.5em] border border-gray-200 rounded-[4px] focus:outline-none focus:border-gray-400 bg-white"
            placeholder="000000"
          />
        </div>

        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-[4px]">
            <p className="text-[13px] text-red-600">{error}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={loading || code.length !== 6}
          className="w-full h-11 text-[14px] font-semibold text-white bg-[#4A9FE5] rounded-[4px] hover:bg-[#3B8DD6] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Verifying..." : "Verify Email"}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-[13px] text-gray-500">
          Didn&apos;t receive the code?{" "}
          <button
            onClick={handleResend}
            disabled={resending}
            className="text-black font-semibold hover:underline disabled:opacity-50"
          >
            {resending ? "Sending..." : "Resend code"}
          </button>
        </p>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200 text-center">
        <Link
          href="/login"
          className="text-[12px] text-gray-400 hover:text-gray-600 transition-colors"
        >
          ← Back to sign in
        </Link>
      </div>
    </div>
  );
}

export default function VerifyEmailPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 h-14 flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Novpreneur" width={28} height={28} className="rounded-full" />
            <span className="text-[17px] font-bold tracking-tight text-black">Novpreneur</span>
          </Link>
        </div>
      </header>

      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <Suspense fallback={<div className="text-gray-400">Loading...</div>}>
          <VerifyEmailContent />
        </Suspense>
      </div>
    </div>
  );
}
