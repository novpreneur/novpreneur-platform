import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "NovCredibility — Trust & Proof Engine",
  description: "NovCredibility provides structured validation, scoring, and professional documentation for Novpreneur founders.",
};

const scoring = [
  { dim: "Execution Score", src: "RPS completions, scores, consistency", range: "0–100" },
  { dim: "Domain Breadth", src: "Number of domains with proven competence", range: "1–6" },
  { dim: "Team Contribution", src: "Peer evaluations, collaboration signals", range: "0–100" },
  { dim: "Market Validation", src: "User interviews, survey data, revenue signals", range: "0–100" },
  { dim: "Innovation Index", src: "Originality of solutions, IP potential", range: "0–100" },
];

const tiers = [
  { tier: "Verified", range: "Score 40–59", access: "Basic validation report, NexGen completion badge" },
  { tier: "Credible", range: "Score 60–79", access: "Full validation report, pitch deck template, investor intro eligibility" },
  { tier: "Proven", range: "Score 80+", access: "Custom pitch deck, due diligence package, direct investor introductions" },
];

export default function NovCredibilityPage() {
  return (
    <>
      <Navbar />
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 py-20 md:py-28">
          <p className="text-[12px] font-semibold text-gray-400 uppercase tracking-widest mb-3">Horizontal Backbone</p>
          <h1 className="text-[36px] md:text-[48px] font-bold text-black leading-[1.1] tracking-tight">NovCredibility</h1>
          <p className="mt-4 text-[17px] text-gray-500 max-w-[500px] leading-relaxed">
            The trust and proof layer of the Novpreneur system. Credibility is computed, not claimed.
          </p>
          <p className="mt-6 text-[14px] font-semibold text-black border-l-2 border-black pl-4">
            Your credibility score is your execution history — compressed into a number.
          </p>
        </div>
      </section>

      {/* Scoring */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20">
          <p className="text-[12px] font-semibold text-gray-400 uppercase tracking-widest mb-3">Scoring System</p>
          <h2 className="text-[24px] md:text-[30px] font-bold text-black">Five dimensions. Zero subjectivity.</h2>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[500px] text-left">
              <thead><tr className="border-b border-gray-300">
                <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider py-3 pr-4">Dimension</th>
                <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider py-3 pr-4">Data Source</th>
                <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider py-3 w-[80px]">Range</th>
              </tr></thead>
              <tbody>{scoring.map((s, i) => (
                <tr key={i} className="border-b border-gray-200">
                  <td className="py-3.5 pr-4 text-[13px] font-semibold text-black">{s.dim}</td>
                  <td className="py-3.5 pr-4 text-[13px] text-gray-500">{s.src}</td>
                  <td className="py-3.5 text-[13px] font-mono text-gray-400">{s.range}</td>
                </tr>
              ))}</tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20">
          <p className="text-[12px] font-semibold text-gray-400 uppercase tracking-widest mb-3">Credibility Tiers</p>
          <h2 className="text-[24px] md:text-[30px] font-bold text-black">Access scales with proof.</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((t, i) => (
              <div key={i} className="p-6 border border-gray-200 rounded-[6px]">
                <p className="text-[18px] font-bold text-black">{t.tier}</p>
                <p className="text-[12px] font-mono text-gray-400 mt-1">{t.range}</p>
                <p className="text-[13px] text-gray-500 mt-3 leading-relaxed">{t.access}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20">
          <p className="text-[12px] font-semibold text-gray-400 uppercase tracking-widest mb-3">Professional Services</p>
          <h2 className="text-[24px] md:text-[30px] font-bold text-black">Deliverables, not advice.</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { t: "Validation Reports", d: "Structured analysis of problem-solution fit, market size, competitive landscape. Data-backed, not opinion-based." },
              { t: "Pitch Deck Preparation", d: "Investor-ready decks built on real execution data. Not templates — custom narratives from your system data." },
              { t: "Due Diligence Packages", d: "Complete founder and startup evaluation packages for investors. Every claim backed by system data." },
              { t: "Credibility Certificates", d: "Verifiable credentials for founders who complete the NexGen pipeline. Linked to on-chain execution records." },
            ].map((x, i) => (
              <div key={i} className="p-6 bg-white border border-gray-200 rounded-[6px]">
                <h3 className="text-[15px] font-semibold text-black mb-1.5">{x.t}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20 text-center">
          <h2 className="text-[24px] font-bold text-black">Credibility is earned through the system.</h2>
          <p className="mt-2 text-[14px] text-gray-500">Start at NexGen. Your execution data builds your credibility score automatically.</p>
          <Link href="/nexgen" className="inline-flex items-center h-11 px-7 mt-6 text-[14px] font-semibold text-white bg-[#4A9FE5] rounded-[4px] hover:bg-[#3B8DD6] transition-colors duration-150">Start Building Credibility</Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
