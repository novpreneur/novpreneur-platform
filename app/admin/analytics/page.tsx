"use client";

const engagement = [
  { module: "NexGen", active: 89, total: 142, pct: 63 },
  { module: "RPS Submissions", active: 67, total: 142, pct: 47 },
  { module: "Team Formation", active: 24, total: 142, pct: 17 },
  { module: "Infinity", active: 8, total: 142, pct: 6 },
  { module: "NovStay", active: 2, total: 142, pct: 1 },
];

const funnel = [
  { stage: "Signed Up", count: 142, pct: 100 },
  { stage: "First RPS Submitted", count: 98, pct: 69 },
  { stage: "Reached L2", count: 52, pct: 37 },
  { stage: "Team Formed", count: 24, pct: 17 },
  { stage: "MVP Started", count: 12, pct: 8 },
  { stage: "Infinity Eligible", count: 4, pct: 3 },
];

export default function AnalyticsPage() {
  return (
    <div className="p-8 max-w-[1100px]">
      <div className="mb-8">
        <h1 className="text-[22px] font-bold text-black">Analytics</h1>
        <p className="text-[13px] text-gray-500 mt-1">System-wide metrics and pipeline analysis.</p>
      </div>

      {/* Top metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { l: "Total Users", v: "142", c: "+12 this week" },
          { l: "Active Rate", v: "63%", c: "89 active" },
          { l: "Avg RPS Score", v: "68", c: "Across all submissions" },
          { l: "Conversion to L2", v: "37%", c: "52 of 142 users" },
        ].map((s, i) => (
          <div key={i} className="p-4 bg-white border border-gray-200 rounded-[6px]">
            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">{s.l}</p>
            <p className="text-[22px] font-bold text-black mt-1">{s.v}</p>
            <p className="text-[11px] text-gray-400 mt-0.5">{s.c}</p>
          </div>
        ))}
      </div>

      {/* Module Engagement */}
      <div className="mb-8">
        <h2 className="text-[15px] font-semibold text-black mb-4">Module Engagement</h2>
        <div className="p-5 bg-white border border-gray-200 rounded-[6px] space-y-4">
          {engagement.map((e, i) => (
            <div key={i}>
              <div className="flex justify-between mb-1">
                <span className="text-[13px] font-medium text-black">{e.module}</span>
                <span className="text-[12px] text-gray-400">{e.active}/{e.total} users ({e.pct}%)</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#4A9FE5] rounded-full" style={{ width: `${e.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pipeline Funnel */}
      <div className="mb-8">
        <h2 className="text-[15px] font-semibold text-black mb-4">Pipeline Funnel</h2>
        <div className="p-5 bg-white border border-gray-200 rounded-[6px]">
          {funnel.map((f, i) => (
            <div key={i} className={`flex items-center gap-4 py-3 ${i < funnel.length - 1 ? "border-b border-gray-100" : ""}`}>
              <div className="w-[180px] shrink-0">
                <p className="text-[13px] font-medium text-black">{f.stage}</p>
              </div>
              <div className="flex-1">
                <div className="w-full h-5 bg-gray-50 rounded-[3px] overflow-hidden relative">
                  <div className="h-full bg-gray-900 rounded-[3px] flex items-center transition-all" style={{ width: `${f.pct}%` }}>
                    {f.pct > 15 && <span className="text-[10px] text-white font-semibold px-2">{f.count}</span>}
                  </div>
                  {f.pct <= 15 && <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[10px] text-gray-500 font-semibold">{f.count}</span>}
                </div>
              </div>
              <span className="text-[12px] font-mono text-gray-400 w-[50px] text-right">{f.pct}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* NexCoin Economy */}
      <div>
        <h2 className="text-[15px] font-semibold text-black mb-4">NexCoin Economy</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { l: "Total Minted", v: "48,200" },
            { l: "In Circulation", v: "32,100" },
            { l: "Avg Earned/User", v: "360" },
            { l: "Velocity", v: "2.3x" },
          ].map((s, i) => (
            <div key={i} className="p-4 bg-white border border-gray-200 rounded-[6px]">
              <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">{s.l}</p>
              <p className="text-[20px] font-bold text-black mt-1">{s.v}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
