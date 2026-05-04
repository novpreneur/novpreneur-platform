import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Novpreneur — We don't teach startups. We build founders.",
  description:
    "A Founder Infrastructure Platform that converts students into execution-ready startup teams through a structured pipeline.",
};

const problems = [
  {
    title: "Students learn but don't execute",
    desc: "Courses, bootcamps, and workshops produce knowledge — not startups. The gap between learning and execution is where 99% of potential founders die.",
  },
  {
    title: "Founders have ideas but no validation system",
    desc: "Ideas without structured validation are just opinions. Most early-stage founders skip the hardest part: proving the problem exists before building the solution.",
  },
  {
    title: "Accelerators ignore early-stage builders",
    desc: "YC, Techstars, and most accelerators select teams that already have traction. Pre-traction founders have nowhere to go.",
  },
  {
    title: "Innovation is disconnected from market",
    desc: "University research and student projects exist in a vacuum. There's no pipeline connecting innovation to revenue.",
  },
];

const steps = [
  {
    num: "01",
    title: "Enter NexGen",
    desc: "Start solving real problems through structured challenges. Skills are tested, not taught.",
  },
  {
    num: "02",
    title: "Solve Real Problems (RPS)",
    desc: "Complete Real Problem Solving challenges across domains. Every submission is evaluated. No participation trophies.",
  },
  {
    num: "03",
    title: "Form a Team",
    desc: "The system matches builders based on complementary skills and execution records. Teams are earned, not chosen.",
  },
  {
    num: "04",
    title: "Build an MVP",
    desc: "Ship a working product. Not a prototype. Not a mockup. A product that people can use.",
  },
  {
    num: "05",
    title: "Enter Infinity",
    desc: "Teams with validated MVPs and real traction enter the Infinity accelerator. Selection is based on execution metrics, not pitch decks.",
  },
  {
    num: "06",
    title: "Scale or Research",
    desc: "Scale your startup through Infinity, or move to NovStay for deep R&D and future-tech development.",
  },
];

const traction = [
  { metric: "System Modules", value: "5", desc: "NexGen · Infinity · NovStay · NovCredibility · NIS" },
  { metric: "Pipeline Stages", value: "6", desc: "From raw skill to revenue generation" },
  { metric: "Evaluation Layers", value: "3", desc: "Skill · Execution · Market validation" },
  { metric: "Selection Rate", value: "<10%", desc: "Infinity accepts execution, not intent" },
];

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* ─── HERO ──────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 py-24 md:py-32">
          <h1 className="text-[40px] md:text-[56px] font-bold text-black leading-[1.08] tracking-tight max-w-[700px]">
            We don&apos;t teach startups.
            <br />
            We build founders.
          </h1>
          <p className="mt-5 text-[17px] md:text-[19px] text-gray-500 leading-relaxed max-w-[520px]">
            A structured pipeline that takes you from raw skill to startup
            revenue. No courses. No mentorship programs. Just a system that
            works.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Link
              href="/apply"
              className="inline-flex items-center h-11 px-7 text-[14px] font-semibold text-white bg-[#4A9FE5] rounded-[4px] hover:bg-[#3B8DD6] transition-colors duration-150"
            >
              Apply Now
            </Link>
            <Link
              href="#system"
              className="inline-flex items-center h-11 px-7 text-[14px] font-semibold text-[#4A9FE5] border border-[#4A9FE5]/30 rounded-[4px] hover:border-[#4A9FE5] hover:bg-[#4A9FE5]/5 transition-colors duration-150"
            >
              View System
            </Link>
          </div>
          <p className="mt-6 text-[12px] text-gray-400 font-mono">
            skill → startup → revenue → innovation
          </p>
        </div>

        {/* Hero Image */}
        <div className="max-w-[1200px] mx-auto px-6 pb-16">
          <div className="relative w-full aspect-[21/9] rounded-[8px] overflow-hidden border border-gray-200">
            <Image
              src="/hero-founders.png"
              alt="Novpreneur founders collaborating on startup strategy at a whiteboard"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="mt-3 text-[11px] text-gray-400 text-center">
            Founders building at Novpreneur — strategy, execution, and real problem solving.
          </p>
        </div>
      </section>

      {/* ─── PROBLEM ───────────────────────────────────── */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 py-20 md:py-24">
          <p className="text-[12px] font-semibold text-gray-400 uppercase tracking-widest mb-3">
            The Problem
          </p>
          <h2 className="text-[28px] md:text-[34px] font-bold text-black leading-tight max-w-[600px]">
            The startup ecosystem is broken at the foundation.
          </h2>
          <p className="mt-3 text-[15px] text-gray-500 max-w-[500px]">
            If you want motivation, this is not for you.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((p, i) => (
              <div
                key={i}
                className="p-6 bg-white border border-gray-200 rounded-[6px]"
              >
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-2">
                  Problem {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-[16px] font-semibold text-black mb-2">
                  {p.title}
                </h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SYSTEM (MOST IMPORTANT) ───────────────────── */}
      <section id="system" className="bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 py-20 md:py-24">
          <p className="text-[12px] font-semibold text-gray-400 uppercase tracking-widest mb-3">
            The System
          </p>
          <h2 className="text-[28px] md:text-[34px] font-bold text-black leading-tight max-w-[600px]">
            An operating system for building founders.
          </h2>
          <p className="mt-3 text-[15px] text-gray-500 max-w-[520px]">
            This is not a program. It&apos;s infrastructure. Each module has a
            defined input, process, and output.
          </p>

          {/* Team collaboration image */}
          <div className="mt-10 relative w-full aspect-[21/9] rounded-[8px] overflow-hidden border border-gray-200">
            <Image
              src="/team-collaboration.png"
              alt="Two founders brainstorming product wireframes at a co-working space"
              fill
              className="object-cover"
            />
          </div>

          {/* System diagram */}
          <div className="mt-14">
            {/* Main pipeline */}
            <div className="flex flex-col md:flex-row items-stretch gap-0">
              {/* NEXGEN */}
              <div className="flex-1 border border-gray-200 bg-gray-50 p-6 md:rounded-l-[6px] md:rounded-r-none rounded-t-[6px] md:rounded-t-none md:rounded-tl-[6px]">
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1">
                  Stage 01
                </p>
                <h3 className="text-[18px] font-bold text-black">NexGen</h3>
                <p className="text-[12px] text-gray-500 mt-2 leading-relaxed">
                  Skill building → Problem solving → Team formation
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {["L0–L5 Levels", "RPS Challenges", "Team Match"].map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-medium text-gray-600 bg-white border border-gray-200 px-2 py-0.5 rounded-[3px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center w-10 border-y border-gray-200 bg-gray-50">
                <span className="text-gray-300 text-[18px]">→</span>
              </div>
              <div className="flex md:hidden items-center justify-center h-8 border-x border-gray-200 bg-gray-50 mx-auto w-[1px] relative">
                <span className="text-gray-300 text-[18px] absolute">↓</span>
              </div>

              {/* INFINITY */}
              <div className="flex-1 border border-gray-200 bg-gray-50 p-6">
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1">
                  Stage 02
                </p>
                <h3 className="text-[18px] font-bold text-black">Infinity</h3>
                <p className="text-[12px] text-gray-500 mt-2 leading-relaxed">
                  Accelerator → Scaling → Revenue
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {["Selection", "Equity Model", "Market Entry"].map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-medium text-gray-600 bg-white border border-gray-200 px-2 py-0.5 rounded-[3px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center w-10 border-y border-gray-200 bg-gray-50">
                <span className="text-gray-300 text-[18px]">→</span>
              </div>
              <div className="flex md:hidden items-center justify-center h-8 border-x border-gray-200 bg-gray-50 mx-auto w-[1px] relative">
                <span className="text-gray-300 text-[18px] absolute">↓</span>
              </div>

              {/* NOVSTAY */}
              <div className="flex-1 border border-gray-200 bg-gray-50 p-6 md:rounded-r-[6px] md:rounded-l-none rounded-b-[6px] md:rounded-b-none md:rounded-br-[6px]">
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1">
                  Stage 03
                </p>
                <h3 className="text-[18px] font-bold text-black">NovStay</h3>
                <p className="text-[12px] text-gray-500 mt-2 leading-relaxed">
                  R&D Lab → Deep Tech → Future Innovation
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {["Research Tracks", "IP Pipeline", "Lab Access"].map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-medium text-gray-600 bg-white border border-gray-200 px-2 py-0.5 rounded-[3px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* NOVCREDIBILITY - horizontal backbone */}
            <div className="mt-3 border border-gray-300 bg-white p-5 rounded-[6px] flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-0.5">
                  Horizontal Backbone
                </p>
                <h3 className="text-[16px] font-bold text-black">
                  NovCredibility
                </h3>
                <p className="text-[12px] text-gray-500 mt-1">
                  Trust & proof engine. Runs across all stages — validation
                  reports, scoring, pitch preparation.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["Scoring System", "Validation Reports", "Pitch Decks"].map(
                  (t) => (
                    <span
                      key={t}
                      className="text-[10px] font-medium text-gray-600 bg-gray-50 border border-gray-200 px-2 py-0.5 rounded-[3px]"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* NIS - intelligence layer */}
            <div className="mt-3 border border-dashed border-gray-300 bg-gray-50 p-4 rounded-[6px] flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-0.5">
                  Intelligence Layer
                </p>
                <h3 className="text-[14px] font-bold text-gray-700">
                  NIS — Novpreneur Intelligence System
                </h3>
                <p className="text-[12px] text-gray-500 mt-1">
                  Tracks execution across all modules. Does not replace
                  thinking.
                </p>
              </div>
              <span className="text-[11px] font-mono text-gray-400 whitespace-nowrap">
                Powering all stages ↑
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ──────────────────────────────── */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 py-20 md:py-24">
          <p className="text-[12px] font-semibold text-gray-400 uppercase tracking-widest mb-3">
            How It Works
          </p>
          <h2 className="text-[28px] md:text-[34px] font-bold text-black leading-tight max-w-[500px]">
            Six steps. No shortcuts.
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-gray-200 rounded-[6px] overflow-hidden bg-white">
            {steps.map((s, i) => (
              <div
                key={i}
                className={`p-6 ${i < 3 ? "md:border-b md:border-gray-200" : ""} ${i % 3 !== 2 ? "md:border-r md:border-gray-200" : ""} ${i < steps.length - 1 ? "border-b md:border-b-0 border-gray-200" : ""} ${i === 3 || i === 4 ? "lg:border-b-0" : ""}`}
              >
                <p className="text-[24px] font-bold text-gray-200 mb-3 font-mono">
                  {s.num}
                </p>
                <h3 className="text-[15px] font-semibold text-black mb-1.5">
                  {s.title}
                </h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CREDIBILITY ───────────────────────────────── */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 py-20 md:py-24">
          <p className="text-[12px] font-semibold text-gray-400 uppercase tracking-widest mb-3">
            Early Traction
          </p>
          <h2 className="text-[28px] md:text-[34px] font-bold text-black leading-tight max-w-[520px]">
            Built to run. Not to impress.
          </h2>
          <p className="mt-3 text-[15px] text-gray-500 max-w-[460px]">
            No fake testimonials. No vanity metrics. Here&apos;s what the system
            looks like.
          </p>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {traction.map((t, i) => (
              <div key={i} className="p-5 border border-gray-200 rounded-[6px]">
                <p className="text-[32px] font-bold text-black leading-none">
                  {t.value}
                </p>
                <p className="text-[13px] font-semibold text-black mt-2">
                  {t.metric}
                </p>
                <p className="text-[11px] text-gray-400 mt-1">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOUNDER SPOTLIGHT ──────────────────────── */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 py-20 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-[8px] overflow-hidden border border-gray-200">
              <Image
                src="/pitch-presentation.png"
                alt="Founder presenting startup pitch to evaluation panel"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-[12px] font-semibold text-gray-400 uppercase tracking-widest mb-3">
                The Output
              </p>
              <h2 className="text-[28px] md:text-[34px] font-bold text-black leading-tight">
                From student to founder.
              </h2>
              <p className="mt-4 text-[15px] text-gray-500 leading-relaxed">
                The system doesn&apos;t produce graduates. It produces founders who
                can pitch, build, and ship — with validated traction and real
                market data behind them.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Validated MVPs", "Revenue Traction", "Investor-Ready Decks", "Execution Proof"].map((tag) => (
                  <span key={tag} className="text-[11px] font-medium text-gray-600 bg-gray-100 border border-gray-200 px-3 py-1 rounded-[4px]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e]">
        <div className="max-w-[1200px] mx-auto px-6 py-20 md:py-24 text-center">
          <h2 className="text-[28px] md:text-[36px] font-bold text-white leading-tight">
            Apply. Don&apos;t just watch.
          </h2>
          <p className="mt-3 text-[15px] text-[#4A9FE5]/70 max-w-[400px] mx-auto">
            This system is not for everyone. If you&apos;re ready to execute,
            not just learn — apply.
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center h-12 px-8 mt-8 text-[14px] font-semibold text-white bg-[#4A9FE5] rounded-[4px] hover:bg-[#3B8DD6] transition-colors duration-150"
          >
            Apply Now
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
