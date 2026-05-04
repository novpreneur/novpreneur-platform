"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/#system", label: "System" },
  { href: "/nexgen", label: "NexGen" },
  { href: "/infinity", label: "Infinity" },
  { href: "/novstay", label: "NovStay" },
  { href: "/novcredibility", label: "NovCredibility" },
  { href: "/nis", label: "NIS" },
];

interface AuthUser {
  id: string;
  fullName: string;
  email: string;
  role: string;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((r) => r.json())
      .then((d) => { if (d.user) setUser(d.user); })
      .catch(() => {});
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-[1200px] mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <Image src="/logo.png" alt="Novpreneur" width={28} height={28} className="rounded-full" />
          <span className="text-[17px] font-bold tracking-tight text-black">Novpreneur</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-gray-600 hover:text-black transition-colors duration-150"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <>
              <Link
                href="/dashboard"
                className="text-[13px] font-medium text-gray-600 hover:text-black transition-colors duration-150"
              >
                Dashboard
              </Link>
              <button
                onClick={async () => {
                  await fetch("/api/auth/logout", { method: "POST" });
                  window.location.href = "/login";
                }}
                className="text-[13px] font-medium text-gray-400 hover:text-red-600 transition-colors duration-150"
              >
                Sign out
              </button>
              <div className="w-7 h-7 rounded-full bg-[#4A9FE5] flex items-center justify-center text-[11px] font-semibold text-white">
                {user.fullName.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)}
              </div>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-[13px] font-medium text-gray-600 hover:text-black transition-colors duration-150"
              >
                Sign in
              </Link>
              <Link
                href="/apply"
                className="inline-flex items-center h-8 px-4 text-[13px] font-semibold text-white bg-[#4A9FE5] rounded-[4px] hover:bg-[#3B8DD6] transition-colors duration-150"
              >
                Apply Now
              </Link>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-[5px] p-1"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-[1.5px] bg-black transition-transform duration-200 ${open ? "rotate-45 translate-y-[6.5px]" : ""}`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-black transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-black transition-transform duration-200 ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="max-w-[1200px] mx-auto px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-[14px] font-medium text-gray-700 hover:text-black py-1"
              >
                {link.label}
              </Link>
            ))}
            <hr className="border-gray-200 my-1" />
            {user ? (
              <>
                <Link
                  href="/dashboard"
                  onClick={() => setOpen(false)}
                  className="text-[14px] font-medium text-gray-700 hover:text-black py-1"
                >
                  Dashboard
                </Link>
                <button
                  onClick={async () => {
                    await fetch("/api/auth/logout", { method: "POST" });
                    window.location.href = "/login";
                  }}
                  className="inline-flex items-center justify-center h-9 text-[14px] font-semibold text-red-600 border border-red-200 rounded-[4px] hover:bg-red-50 mt-1"
                >
                  Sign out
                </button>
              </>

            ) : (
              <>
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="text-[14px] font-medium text-gray-700 hover:text-black py-1"
                >
                  Sign in
                </Link>
                <Link
                  href="/apply"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center h-9 text-[14px] font-semibold text-white bg-[#4A9FE5] rounded-[4px] hover:bg-[#3B8DD6] mt-1"
                >
                  Apply Now
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
