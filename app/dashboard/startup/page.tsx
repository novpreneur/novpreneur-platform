"use client";

const milestones = [
  { name: "Problem validated", done: true },
  { name: "20 user interviews", done: true },
  { name: "MVP built", done: false, active: true },
  { name: "First 10 users", done: false },
  { name: "Revenue ≥ ₹1,000", done: false },
  { name: "Infinity eligible", done: false },
];

const sprintTasks = [
  { task: "Complete landing page", status: "Done" },
  { task: "Integrate payment gateway", status: "In Progress" },
  { task: "User onboarding flow", status: "In Progress" },
  { task: "Analytics dashboard", status: "Todo" },
];

export default function StartupPage() {
  return (
    <div className="p-8 max-w-[1000px]">
      <div className="mb-8">
        <h1 className="text-[22px] font-bold text-black">Startup</h1>
        <p className="text-[13px] text-gray-500 mt-1">MVP progress, revenue, and milestones.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { l: "Stage", v: "MVP" },
          { l: "Users", v: "42" },
          { l: "MRR", v: "₹2,400" },
          { l: "Runway", v: "—" },
        ].map((s, i) => (
          <div key={i} className="p-4 bg-white border border-gray-200 rounded-[6px]">
            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">{s.l}</p>
            <p className="text-[22px] font-bold text-black mt-1">{s.v}</p>
          </div>
        ))}
      </div>

      {/* Milestones */}
      <div className="mb-8">
        <h2 className="text-[15px] font-semibold text-black mb-4">Milestones</h2>
        <div className="p-5 bg-white border border-gray-200 rounded-[6px]">
          <div className="space-y-3">
            {milestones.map((m, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${m.done ? "bg-[#4A9FE5] border-[#4A9FE5]" : m.active ? "border-gray-400" : "border-gray-200"}`}>
                  {m.done && <span className="text-white text-[10px]">✓</span>}
                  {m.active && <div className="w-2 h-2 bg-gray-400 rounded-full" />}
                </div>
                <p className={`text-[13px] ${m.done ? "text-gray-400 line-through" : m.active ? "text-black font-semibold" : "text-gray-400"}`}>{m.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sprint */}
      <div>
        <h2 className="text-[15px] font-semibold text-black mb-4">Current Sprint</h2>
        <div className="overflow-x-auto bg-white border border-gray-200 rounded-[6px]">
          <table className="w-full text-left">
            <thead><tr className="border-b border-gray-200 bg-gray-50">
              <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-4 py-3">Task</th>
              <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-4 py-3 w-[120px]">Status</th>
            </tr></thead>
            <tbody>{sprintTasks.map((t, i) => (
              <tr key={i} className="border-b border-gray-100 last:border-0">
                <td className="px-4 py-3 text-[13px] text-black">{t.task}</td>
                <td className="px-4 py-3"><span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-[3px] border ${t.status === "Done" ? "bg-green-50 text-green-700 border-green-200" : t.status === "In Progress" ? "bg-yellow-50 text-yellow-700 border-yellow-200" : "bg-gray-100 text-gray-500 border-gray-200"}`}>{t.status}</span></td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
