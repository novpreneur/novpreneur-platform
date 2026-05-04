import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.novpreneur.com"),
  title: {
    default: "Novpreneur — We don't teach startups. We build founders.",
    template: "%s — Novpreneur",
  },
  description:
    "Novpreneur is a founder infrastructure platform that converts students into execution-ready startup teams through a structured pipeline: NexGen → Infinity → NovStay → NovCredibility, powered by NIS.",
  keywords: [
    "novpreneur",
    "founder infrastructure",
    "startup pipeline",
    "execution system",
    "startup incubator",
    "student startups",
    "NexGen program",
    "startup accelerator India",
    "founder building platform",
  ],
  authors: [{ name: "Novpreneur" }],
  creator: "Novpreneur",
  publisher: "Novpreneur",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Novpreneur — We don't teach startups. We build founders.",
    description:
      "A founder infrastructure platform that converts students into execution-ready startup teams through structured programs.",
    url: "https://www.novpreneur.com",
    siteName: "Novpreneur",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Novpreneur — Founder Infrastructure Platform",
    description:
      "We don't teach startups. We build founders. Apply now to join the pipeline.",
    creator: "@novpreneur",
  },
  alternates: {
    canonical: "https://www.novpreneur.com",
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || "",
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
