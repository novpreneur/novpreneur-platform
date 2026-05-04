import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "NexGen — This is not learning. This is filtering.",
  description:
    "NexGen is the entry module of the Novpreneur system. Structured levels, real problem solving challenges, and data-driven team formation.",
};

const levels = [
  { level: "L0", name: "Observer", desc: "Profile created. No activity. System is watching.", criteria: "Sign up" },
  { level: "L1", name: "Explorer", desc: "First RPS attempt submitted. Clock starts.", criteria: "1 RPS submitted" },
  { level: "L2", name: "Builder", desc: "Consistent execution across domains. Patterns emerge.", criteria: "5 RPS completed, avg score ≥ 60" },
  { level: "L3", name: "Operator", desc: "Cross-domain competence proven. Team-eligible.", criteria: "12 RPS completed, avg score ≥ 70, 2+ domains" },
  { level: "L4", name: "Leader", desc: "Team formed. MVP in progress. Execution is the metric.", criteria: "Active team, MVP milestone started" },
  { level: "L5", name: "Founder", desc: "MVP shipped. Traction proven. Infinity-eligible.", criteria: "MVP live, user validation data" },
];

export default function NexGenPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 py-20 md:py-28">
          <p className="text-[12px] font-semibold text-gray-400 uppercase tracking-widest mb-3">
            System Module 01
          </p>
          <h1 className="text-[36px] md:text-[48px] font-bold text-black leading-[1.1] tracking-tight max-w-[600px]">
            NexGen
          </h1>
          <p className="mt-4 text-[17px] text-gray-500 max-w-[500px] leading-relaxed">
            The entry point of the Novpreneur system. You don&apos;t learn here.
            You prove you can execute.
          </p>
          <p className="mt-6 text-[14px] font-semibold text-black border-l-2 border-black pl-4">
            This is not learning. This is filtering.
          </p>
        </div>
      </section>

      {/* Level Table */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20">
          <p className="text-[12px] font-semibold text-gray-400 uppercase tracking-widest mb-3">
            Progression
          </p>
          <h2 className="text-[24px] md:text-[30px] font-bold text-black">
            Six levels. Earned, not given.
          </h2>
          <p className="mt-2 text-[14px] text-gray-500 max-w-[450px]">
            Each level unlocks through execution data. The system decides when
            you advance — not you, not a mentor.
          </p>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[700px] text-left">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider py-3 pr-4 w-[60px]">Level</th>
                  <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider py-3 pr-4 w-[100px]">Name</th>
                  <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider py-3 pr-4">Description</th>
                  <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider py-3 w-[220px]">Criteria</th>
                </tr>
              </thead>
              <tbody>
                {levels.map((l, i) => (
                  <tr key={i} className="border-b border-gray-200">
                    <td className="py-3.5 pr-4 text-[14px] font-bold font-mono text-black">{l.level}</td>
                    <td className="py-3.5 pr-4 text-[13px] font-semibold text-black">{l.name}</td>
                    <td className="py-3.5 pr-4 text-[13px] text-gray-500">{l.desc}</td>
                    <td className="py-3.5 text-[12px] text-gray-400 font-mono">{l.criteria}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* RPS */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20">
          <p className="text-[12px] font-semibold text-gray-400 uppercase tracking-widest mb-3">
            Core Mechanism
          </p>
          <h2 className="text-[24px] md:text-[30px] font-bold text-black">
            Real Problem Solving (RPS)
          </h2>
          <p className="mt-2 text-[14px] text-gray-500 max-w-[500px]">
            Not case studies. Not hypotheticals. Real problems from real
            domains.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-200 rounded-[6px]">
              <p className="text-[12px] font-semibold text-gray-400 uppercase tracking-widest mb-2">Input</p>
              <h3 className="text-[15px] font-semibold text-black mb-1.5">Problem Brief</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">
                A real problem from a real domain — marketing, engineering,
                design, operations, or finance. Context is provided. Hand-holding
                is not.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-[6px]">
              <p className="text-[12px] font-semibold text-gray-400 uppercase tracking-widest mb-2">Process</p>
              <h3 className="text-[15px] font-semibold text-black mb-1.5">Submission & Evaluation</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">
                You submit a solution. It gets scored on depth, feasibility, and
                originality. Scores feed into your execution profile.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-[6px]">
              <p className="text-[12px] font-semibold text-gray-400 uppercase tracking-widest mb-2">Output</p>
              <h3 className="text-[15px] font-semibold text-black mb-1.5">NexCoins + Level Progress</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">
                High-quality submissions earn NexCoins and advance your level.
                Low-quality submissions earn nothing. The system is honest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Formation */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20">
          <p className="text-[12px] font-semibold text-gray-400 uppercase tracking-widest mb-3">
            Team Formation
          </p>
          <h2 className="text-[24px] md:text-[30px] font-bold text-black">
            Teams are data-driven, not social.
          </h2>
          <p className="mt-2 text-[14px] text-gray-500 max-w-[500px]">
            The system matches founders based on execution data, domain
            coverage, and complementary skill profiles. You don&apos;t pick your
            co-founder at a networking event.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-gray-200 rounded-[6px]">
              <h3 className="text-[15px] font-semibold text-black mb-2">
                Matching Criteria
              </h3>
              <ul className="space-y-2">
                {[
                  "Complementary domain scores (marketing + engineering + design)",
                  "Consistent execution record (not one-time performers)",
                  "Minimum L3 level for team eligibility",
                  "Communication and collaboration signals from RPS history",
                ].map((item, i) => (
                  <li key={i} className="text-[13px] text-gray-500 flex items-start gap-2">
                    <span className="text-[10px] text-gray-300 mt-1.5">▪</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-[6px]">
              <h3 className="text-[15px] font-semibold text-black mb-2">
                What Happens After Matching
              </h3>
              <ul className="space-y-2">
                {[
                  "Admin reviews and approves team formation",
                  "Team enters MVP development phase",
                  "Progress is tracked through milestones, not time",
                  "Teams that don't ship get dissolved. No exceptions.",
                ].map((item, i) => (
                  <li key={i} className="text-[13px] text-gray-500 flex items-start gap-2">
                    <span className="text-[10px] text-gray-300 mt-1.5">▪</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20 text-center">
          <h2 className="text-[24px] font-bold text-black">
            Ready to be tested?
          </h2>
          <p className="mt-2 text-[14px] text-gray-500">
            NexGen is the entry point. Everything starts here.
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center h-11 px-7 mt-6 text-[14px] font-semibold text-white bg-[#4A9FE5] rounded-[4px] hover:bg-[#3B8DD6] transition-colors duration-150"
          >
            Apply to NexGen
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
