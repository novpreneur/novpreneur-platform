import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Novpreneur — Founder Infrastructure Platform",
    template: "%s — Novpreneur",
  },
  description:
    "Novpreneur converts students into execution-ready startup teams through a structured pipeline: NexGen → Infinity → NovStay → NovCredibility, powered by NIS.",
  keywords: [
    "founder infrastructure",
    "startup pipeline",
    "execution system",
    "NexGen",
    "Infinity",
    "NovStay",
    "NovCredibility",
  ],
  openGraph: {
    title: "Novpreneur — Founder Infrastructure Platform",
    description:
      "We don't teach startups. We build founders.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
