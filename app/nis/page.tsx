import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "NIS — Novpreneur Intelligence System",
  description: "NIS tracks execution across all Novpreneur modules. It does not replace thinking.",
};

const tracks = [
  { what: "RPS Submissions", desc: "Every submission, score, time-to-complete, and quality trend across all domains." },
  { what: "Level Progression", desc: "Rate of advancement, stalls, skill gaps, domain imbalances." },
  { what: "Team Dynamics", desc: "Contribution distribution, collaboration patterns, conflict signals." },
  { what: "Startup Metrics", desc: "MVP milestones, user growth, revenue trajectory, burn rate." },
  { what: "Credibility Scores", desc: "Real-time scoring across all five dimensions. Updated with every action." },
  { what: "System Health", desc: "Pipeline throughput, drop-off points, cohort performance comparisons." },
];

const notList = [
  "NIS is not a chatbot.",
  "NIS does not give advice.",
  "NIS does not make decisions for you.",
  "NIS does not replace mentors (there are none).",
  "NIS does not generate content or solutions.",
];

export default function NISPage() {
  return (
    <>
      <Navbar />
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 py-20 md:py-28">
          <p className="text-[12px] font-semibold text-gray-400 uppercase tracking-widest mb-3">Intelligence Layer</p>
          <h1 className="text-[36px] md:text-[48px] font-bold text-black leading-[1.1] tracking-tight">NIS</h1>
          <p className="mt-1 text-[16px] text-gray-400">Novpreneur Intelligence System</p>
          <p className="mt-4 text-[17px] text-gray-500 max-w-[500px] leading-relaxed">
            The data layer that powers every decision in the Novpreneur system. NIS observes, measures, and reports. It does not think for you.
          </p>
          <p className="mt-6 text-[14px] font-semibold text-black border-l-2 border-black pl-4">
            This system tracks execution, not replaces thinking.
          </p>
        </div>
      </section>

      {/* What NIS Tracks */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20">
          <p className="text-[12px] font-semibold text-gray-400 uppercase tracking-widest mb-3">Data Streams</p>
          <h2 className="text-[24px] md:text-[30px] font-bold text-black">What NIS monitors.</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            {tracks.map((t, i) => (
              <div key={i} className="p-5 bg-white border border-gray-200 rounded-[6px]">
                <h3 className="text-[14px] font-semibold text-black mb-1">{t.what}</h3>
                <p className="text-[12px] text-gray-500 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What NIS is NOT */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20">
          <p className="text-[12px] font-semibold text-gray-400 uppercase tracking-widest mb-3">Clarification</p>
          <h2 className="text-[24px] md:text-[30px] font-bold text-black">What NIS is not.</h2>
          <p className="mt-2 text-[14px] text-gray-500 max-w-[500px]">
            We are deliberately clear about this. AI hype is not part of our system.
          </p>
          <div className="mt-8 space-y-3">
            {notList.map((n, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 border border-gray-200 rounded-[6px]">
                <span className="text-[14px] text-gray-300">✕</span>
                <p className="text-[13px] text-gray-600 font-medium">{n}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20">
          <h2 className="text-[24px] md:text-[30px] font-bold text-black">How NIS integrates.</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { mod: "NexGen", role: "Tracks RPS performance, triggers level-ups, suggests team matches." },
              { mod: "Infinity", role: "Monitors startup metrics, flags risks, generates selection scores." },
              { mod: "NovStay", role: "Tracks research progress, identifies IP opportunities." },
              { mod: "NovCredibility", role: "Computes credibility scores in real-time from all data sources." },
            ].map((m, i) => (
              <div key={i} className="p-5 bg-white border border-gray-200 rounded-[6px]">
                <p className="text-[14px] font-bold text-black mb-1">{m.mod}</p>
                <p className="text-[12px] text-gray-500 leading-relaxed">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20 text-center">
          <h2 className="text-[24px] font-bold text-black">NIS powers the system. You power the execution.</h2>
          <Link href="/apply" className="inline-flex items-center h-11 px-7 mt-6 text-[14px] font-semibold text-white bg-[#4A9FE5] rounded-[4px] hover:bg-[#3B8DD6] transition-colors duration-150">Apply Now</Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
