import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Infinity — Startup Execution System",
  description: "Infinity is Novpreneur's accelerator for execution-ready teams.",
};

const criteria = [
  { c: "Team Level", r: "All members ≥ L4", w: "25%" },
  { c: "MVP Status", r: "Functional product live", w: "30%" },
  { c: "User Validation", r: "≥ 20 user interviews", w: "20%" },
  { c: "RPS Average", r: "Team avg ≥ 75/100", w: "15%" },
  { c: "Revenue Signal", r: "Any pre-revenue indicator", w: "10%" },
];

const stages = [
  { s: "VALIDATION", d: "Weeks 1–4", f: "Problem-solution fit verified with data", o: "Validation report + user evidence" },
  { s: "BUILDING", d: "Weeks 5–10", f: "Product development with user feedback loops", o: "Working product + early users" },
  { s: "TRACTION", d: "Weeks 11–16", f: "Growth mechanics and revenue experiments", o: "MRR or clear growth trajectory" },
  { s: "SCALE", d: "Weeks 17–24", f: "Market expansion and fundraising preparation", o: "Investor-ready metrics + deck" },
];

export default function InfinityPage() {
  return (
    <>
      <Navbar />
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 py-20 md:py-28">
          <p className="text-[12px] font-semibold text-gray-400 uppercase tracking-widest mb-3">System Module 02</p>
          <h1 className="text-[36px] md:text-[48px] font-bold text-black leading-[1.1] tracking-tight">Infinity</h1>
          <p className="mt-4 text-[17px] text-gray-500 max-w-[500px] leading-relaxed">
            The accelerator for teams that have already proven execution. Infinity doesn&apos;t accept ideas. It accepts evidence.
          </p>
          <p className="mt-6 text-[14px] font-semibold text-black border-l-2 border-black pl-4">
            We don&apos;t invest in pitches. We invest in execution records.
          </p>
        </div>
      </section>

      {/* Selection */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20">
          <p className="text-[12px] font-semibold text-gray-400 uppercase tracking-widest mb-3">Selection</p>
          <h2 className="text-[24px] md:text-[30px] font-bold text-black">Entry is earned. Not applied for.</h2>
          <p className="mt-2 text-[14px] text-gray-500 max-w-[500px]">Selection is algorithmic. The system evaluates your entire NexGen execution record.</p>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[500px] text-left">
              <thead><tr className="border-b border-gray-300">
                <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider py-3 pr-4">Criteria</th>
                <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider py-3 pr-4">Requirement</th>
                <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider py-3 w-[80px]">Weight</th>
              </tr></thead>
              <tbody>{criteria.map((c, i) => (
                <tr key={i} className="border-b border-gray-200">
                  <td className="py-3.5 pr-4 text-[13px] font-semibold text-black">{c.c}</td>
                  <td className="py-3.5 pr-4 text-[13px] text-gray-500">{c.r}</td>
                  <td className="py-3.5 text-[13px] font-mono text-gray-400">{c.w}</td>
                </tr>
              ))}</tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Equity */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20">
          <p className="text-[12px] font-semibold text-gray-400 uppercase tracking-widest mb-3">Equity Model</p>
          <h2 className="text-[24px] md:text-[30px] font-bold text-black">Aligned incentives. Not charity.</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { v: "2–5%", l: "Equity Range", d: "Based on stage, traction, and resource usage" },
              { v: "₹0", l: "Upfront Cost", d: "No fees. Equity only. Risk is shared." },
              { v: "24w", l: "Program Length", d: "4 stages of 4–6 weeks each" },
            ].map((x, i) => (
              <div key={i} className="p-6 border border-gray-200 rounded-[6px]">
                <p className="text-[28px] font-bold text-black">{x.v}</p>
                <p className="text-[13px] font-semibold text-black mt-1">{x.l}</p>
                <p className="text-[12px] text-gray-500 mt-1">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stages */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20">
          <h2 className="text-[24px] md:text-[30px] font-bold text-black">Four stages. Metrics at every gate.</h2>
          <div className="mt-10 space-y-4">
            {stages.map((s, i) => (
              <div key={i} className="p-6 bg-white border border-gray-200 rounded-[6px] flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                <div className="shrink-0 w-[90px]">
                  <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">{s.d}</p>
                  <p className="text-[14px] font-bold font-mono text-black mt-0.5">{s.s}</p>
                </div>
                <div className="flex-1"><p className="text-[13px] text-gray-600">{s.f}</p></div>
                <div className="shrink-0 md:text-right">
                  <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-0.5">Output</p>
                  <p className="text-[12px] text-gray-500">{s.o}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20 text-center">
          <h2 className="text-[24px] font-bold text-black">Infinity selects from NexGen.</h2>
          <p className="mt-2 text-[14px] text-gray-500">Start at NexGen. Prove execution. The system will find you.</p>
          <Link href="/nexgen" className="inline-flex items-center h-11 px-7 mt-6 text-[14px] font-semibold text-white bg-[#4A9FE5] rounded-[4px] hover:bg-[#3B8DD6] transition-colors duration-150">Start at NexGen</Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
