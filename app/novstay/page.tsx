import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "NovStay — Research & Innovation Lab",
  description: "NovStay is Novpreneur's R&D lab for deep tech, future innovation, and long-term research.",
};

const tracks = [
  { name: "Applied AI Systems", desc: "Building AI that solves domain-specific problems — not general-purpose chatbots. Focus on automation, decision support, and data pipelines.", status: "Active" },
  { name: "Climate & Sustainability", desc: "Tech solutions for measurable environmental impact. Energy, waste, supply chain optimization.", status: "Active" },
  { name: "HealthTech Infrastructure", desc: "Systems-level solutions for healthcare delivery, diagnostics, and patient data management.", status: "Planned" },
  { name: "FinTech Primitives", desc: "Core financial infrastructure — payments, lending, insurance — built for underserved markets.", status: "Planned" },
];

export default function NovStayPage() {
  return (
    <>
      <Navbar />
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 py-20 md:py-28">
          <p className="text-[12px] font-semibold text-gray-400 uppercase tracking-widest mb-3">System Module 03</p>
          <h1 className="text-[36px] md:text-[48px] font-bold text-black leading-[1.1] tracking-tight">NovStay</h1>
          <p className="mt-4 text-[17px] text-gray-500 max-w-[500px] leading-relaxed">
            The R&D lab for problems that need more than a sprint. NovStay is where validated ideas become deep-tech innovation.
          </p>
          <p className="mt-6 text-[14px] font-semibold text-black border-l-2 border-black pl-4">
            This is a lab, not a hackathon.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20">
          <p className="text-[12px] font-semibold text-gray-400 uppercase tracking-widest mb-3">Pipeline</p>
          <h2 className="text-[24px] md:text-[30px] font-bold text-black">From validated problem to research output.</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { n: "01", t: "Problem Selection", d: "Problems sourced from NexGen RPS data and Infinity post-mortems." },
              { n: "02", t: "Research Design", d: "Structured research methodology. Hypotheses, experiments, data collection." },
              { n: "03", t: "Prototype & Test", d: "Build functional prototypes. Test with real users. Iterate with data." },
              { n: "04", t: "IP & Publication", d: "Patentable innovations are filed. Research is published or spun off." },
            ].map((s, i) => (
              <div key={i} className="p-5 bg-white border border-gray-200 rounded-[6px]">
                <p className="text-[22px] font-bold text-gray-200 font-mono mb-2">{s.n}</p>
                <h3 className="text-[14px] font-semibold text-black mb-1">{s.t}</h3>
                <p className="text-[12px] text-gray-500 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Tracks */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20">
          <p className="text-[12px] font-semibold text-gray-400 uppercase tracking-widest mb-3">Research Tracks</p>
          <h2 className="text-[24px] md:text-[30px] font-bold text-black">Focused domains. Not everything at once.</h2>
          <div className="mt-10 space-y-4">
            {tracks.map((t, i) => (
              <div key={i} className="p-6 bg-gray-50 border border-gray-200 rounded-[6px] flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1.5">
                    <h3 className="text-[15px] font-semibold text-black">{t.name}</h3>
                    <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-[3px] ${t.status === "Active" ? "bg-green-50 text-green-700 border border-green-200" : "bg-gray-100 text-gray-500 border border-gray-200"}`}>{t.status}</span>
                  </div>
                  <p className="text-[13px] text-gray-500 leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20">
          <h2 className="text-[24px] md:text-[30px] font-bold text-black">What makes NovStay different.</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { t: "Problem-first, not tech-first", d: "Every research track starts with a validated market problem, not a technology looking for application." },
              { t: "Data from the system", d: "NovStay has access to RPS data, user interviews, and market signals from NexGen and Infinity." },
              { t: "IP pipeline built in", d: "Patentable innovations are identified early. Legal and filing support is part of the system." },
              { t: "Spin-off ready", d: "Research that shows market potential is spun off into Infinity-track startups." },
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
          <h2 className="text-[24px] font-bold text-black">NovStay is invitation-only.</h2>
          <p className="mt-2 text-[14px] text-gray-500">Teams and researchers are selected based on NexGen and Infinity data.</p>
          <Link href="/nexgen" className="inline-flex items-center h-11 px-7 mt-6 text-[14px] font-semibold text-white bg-[#4A9FE5] rounded-[4px] hover:bg-[#3B8DD6] transition-colors duration-150">Enter through NexGen</Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
