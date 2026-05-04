"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

type SectionItem = { type: "section"; label: string };
type LinkItem = { href: string; label: string; icon: string };
type NavItem = SectionItem | LinkItem;

const navItems: NavItem[] = [
  { type: "section", label: "Overview" },
  { href: "/admin", label: "Dashboard", icon: "◻" },
  { href: "/admin/analytics", label: "Analytics", icon: "◈" },
  { type: "section", label: "Users & Cohorts" },
  { href: "/admin/applications", label: "Applications", icon: "◎" },
  { href: "/admin/users", label: "User Control", icon: "▸" },
  { href: "/admin/teams", label: "Team Approvals", icon: "▹" },
  { type: "section", label: "Operations" },
  { href: "/admin/rps", label: "RPS Approval", icon: "△" },
  { href: "/admin/nexcoin", label: "NexCoin Mgmt", icon: "◇" },
  { type: "section", label: "Programs" },
  { href: "/admin/startups", label: "Startup Tracking", icon: "▫" },
  { href: "/admin/infinity", label: "Infinity Selection", icon: "⬡" },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[240px] min-h-screen bg-white border-r border-gray-200 flex flex-col shrink-0">
      {/* Logo */}
      <div className="h-14 flex items-center justify-between px-5 border-b border-gray-200">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Novpreneur" width={24} height={24} className="rounded-full" />
          <span className="text-[15px] font-bold text-black tracking-tight">Novpreneur</span>
        </Link>
        <span className="text-[10px] font-semibold text-white bg-[#4A9FE5] px-2 py-0.5 rounded-[3px] uppercase tracking-wider">
          Admin
        </span>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-3 px-3">
        {navItems.map((item, i) => {
          if ("type" in item) {
            return (
              <p
                key={i}
                className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest px-2 pt-5 pb-1.5 first:pt-1"
              >
                {item.label}
              </p>
            );
          }

          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2.5 px-2.5 py-[7px] rounded-[4px] text-[13px] font-medium transition-colors duration-100 ${
                active
                  ? "bg-gray-100 text-black"
                  : "text-gray-600 hover:text-black hover:bg-gray-50"
              }`}
            >
              <span className="text-[10px] opacity-50">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Admin user */}
      <div className="border-t border-gray-200 px-4 py-3 space-y-3">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-[#4A9FE5] flex items-center justify-center text-[11px] font-semibold text-white">
            A
          </div>
          <div>
            <p className="text-[12px] font-medium text-black leading-tight">
              Super Admin
            </p>
            <p className="text-[11px] text-gray-400">Full Access</p>
          </div>
        </div>
        <button
          onClick={async () => {
            await fetch("/api/auth/logout", { method: "POST" });
            window.location.href = "/login";
          }}
          className="w-full h-8 text-[12px] font-semibold text-gray-500 border border-gray-200 rounded-[4px] hover:text-red-600 hover:border-red-200 hover:bg-red-50 transition-colors"
        >
          Sign out
        </button>
      </div>
    </aside>
  );
}
