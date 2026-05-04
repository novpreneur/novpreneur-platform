"use client";

const applicants = [
  { team: "Team Alpha", ceo: "Suraj Kumar", members: 3, avgLevel: "L2.7", avgRPS: 82, interviews: 24, status: "Under Review" },
  { team: "Team Beta", ceo: "Riya Patel", members: 3, avgLevel: "L2.3", avgRPS: 71, interviews: 18, status: "Under Review" },
  { team: "Team Delta", ceo: "Rahul K", members: 3, avgLevel: "L3.0", avgRPS: 88, interviews: 32, status: "Selected" },
];

export default function InfinitySelectionPage() {
  return (
    <div className="p-8 max-w-[1100px]">
      <div className="mb-8">
        <h1 className="text-[22px] font-bold text-black">Infinity Selection</h1>
        <p className="text-[13px] text-gray-500 mt-1">Review teams for Infinity accelerator admission.</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        {[{ l: "Applicants", v: "3" }, { l: "Selected", v: "1" }, { l: "Acceptance Rate", v: "33%" }].map((s, i) => (
          <div key={i} className="p-4 bg-white border border-gray-200 rounded-[6px]">
            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">{s.l}</p>
            <p className="text-[22px] font-bold text-black mt-1">{s.v}</p>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        {applicants.map((a, i) => (
          <div key={i} className="p-5 bg-white border border-gray-200 rounded-[6px]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-[15px] font-semibold text-black">{a.team}</h3>
                  <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-[3px] border ${a.status === "Selected" ? "bg-green-50 text-green-700 border-green-200" : "bg-yellow-50 text-yellow-700 border-yellow-200"}`}>{a.status}</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-1">
                  <div><p className="text-[10px] text-gray-400 uppercase tracking-wider">CEO</p><p className="text-[12px] font-medium text-black">{a.ceo}</p></div>
                  <div><p className="text-[10px] text-gray-400 uppercase tracking-wider">Members</p><p className="text-[12px] font-medium text-black">{a.members}</p></div>
                  <div><p className="text-[10px] text-gray-400 uppercase tracking-wider">Avg Level</p><p className="text-[12px] font-mono text-black">{a.avgLevel}</p></div>
                  <div><p className="text-[10px] text-gray-400 uppercase tracking-wider">Avg RPS</p><p className="text-[12px] font-mono text-black">{a.avgRPS}</p></div>
                  <div><p className="text-[10px] text-gray-400 uppercase tracking-wider">Interviews</p><p className="text-[12px] font-mono text-black">{a.interviews}</p></div>
                </div>
              </div>
              {a.status !== "Selected" && (
                <div className="flex gap-2 shrink-0">
                  <button className="h-8 px-4 text-[12px] font-semibold text-white bg-[#4A9FE5] rounded-[4px] hover:bg-[#3B8DD6] transition-colors">Select</button>
                  <button className="h-8 px-4 text-[12px] font-semibold text-gray-600 border border-gray-300 rounded-[4px] hover:bg-gray-50 transition-colors">Reject</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
