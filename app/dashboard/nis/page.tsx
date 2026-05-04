"use client";

const insights = [
  { label: "Execution Score", value: "74", trend: "+3 this week", status: "good" },
  { label: "Consistency", value: "82%", trend: "Stable", status: "good" },
  { label: "Domain Coverage", value: "3/6", trend: "Marketing, Engineering, Design", status: "neutral" },
  { label: "Predicted Level-Up", value: "~2 weeks", trend: "Based on current pace", status: "neutral" },
];

const signals = [
  { signal: "Strong marketing domain performance", type: "Strength", detail: "Top 15% in cohort for marketing RPS" },
  { signal: "Finance domain gap", type: "Gap", detail: "No finance RPS attempted. Consider for team balance." },
  { signal: "Submission frequency increasing", type: "Trend", detail: "3x more active in last 2 weeks vs. first 2 weeks." },
  { signal: "Collaboration readiness: High", type: "Signal", detail: "Peer evaluation data suggests strong team fit." },
];

export default function NISDashboard() {
  return (
    <div className="p-8 max-w-[1000px]">
      <div className="mb-8">
        <h1 className="text-[22px] font-bold text-black">NIS</h1>
        <p className="text-[13px] text-gray-500 mt-1">Novpreneur Intelligence System — your execution data.</p>
      </div>

      {/* Scores */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {insights.map((s, i) => (
          <div key={i} className="p-4 bg-white border border-gray-200 rounded-[6px]">
            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">{s.label}</p>
            <p className="text-[22px] font-bold text-black mt-1">{s.value}</p>
            <p className="text-[11px] text-gray-400 mt-0.5">{s.trend}</p>
          </div>
        ))}
      </div>

      {/* Signals */}
      <div className="mb-8">
        <h2 className="text-[15px] font-semibold text-black mb-4">System Signals</h2>
        <div className="space-y-3">
          {signals.map((s, i) => (
            <div key={i} className="p-4 bg-white border border-gray-200 rounded-[6px] flex items-start gap-4">
              <span className={`shrink-0 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-[3px] border mt-0.5 ${s.type === "Strength" ? "bg-green-50 text-green-700 border-green-200" : s.type === "Gap" ? "bg-red-50 text-red-600 border-red-200" : "bg-gray-100 text-gray-500 border-gray-200"}`}>{s.type}</span>
              <div>
                <p className="text-[13px] font-medium text-black">{s.signal}</p>
                <p className="text-[12px] text-gray-400 mt-0.5">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Note */}
      <div className="p-5 border border-dashed border-gray-300 rounded-[6px] bg-gray-50">
        <p className="text-[13px] text-gray-500">
          <span className="font-semibold text-gray-700">Note:</span> NIS provides data, not decisions. Use these signals to inform your own strategy. The system tracks execution — it does not replace your judgment.
        </p>
      </div>
    </div>
  );
}
