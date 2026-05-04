const stats = [
  { label: "Total Users", value: "142", sub: "+12 this week" },
  { label: "Active Learners", value: "89", sub: "Across 3 batches" },
  { label: "Active Startups", value: "8", sub: "4 in Infinity" },
  { label: "NexCoin Minted", value: "48,200", sub: "This month" },
];

const actions = [
  { action: "Approved Team Delta formation", admin: "Super Admin", time: "2 hours ago" },
  { action: "Scored RPS-024 for Suraj Kumar: 87/100", admin: "Evaluator", time: "3 hours ago" },
  { action: "Minted 500 NexCoins for Batch 3", admin: "Super Admin", time: "Yesterday" },
  { action: "Rejected Team Gamma — insufficient coverage", admin: "Super Admin", time: "2 days ago" },
  { action: "Promoted 3 users to L3", admin: "System (NIS)", time: "3 days ago" },
];

const health = [
  { system: "NIS Pipeline", status: "Operational" },
  { system: "RPS Evaluation Queue", status: "3 pending" },
  { system: "NexCoin Ledger", status: "Operational" },
  { system: "Team Matching", status: "Operational" },
];

export default function AdminDashboard() {
  return (
    <div className="p-8 max-w-[1000px]">
      <div className="mb-8">
        <h1 className="text-[22px] font-bold text-black">Admin Dashboard</h1>
        <p className="text-[13px] text-gray-500 mt-1">System overview and recent activity.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((s, i) => (
          <div key={i} className="p-4 bg-white border border-gray-200 rounded-[6px]">
            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">{s.label}</p>
            <p className="text-[24px] font-bold text-black mt-1 leading-none">{s.value}</p>
            <p className="text-[11px] text-gray-400 mt-1">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-[15px] font-semibold text-black mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-2">
          {["Review RPS Queue", "Mint NexCoins", "Approve Teams", "View Analytics"].map((a) => (
            <button key={a} className="h-9 px-4 text-[12px] font-semibold text-black border border-gray-300 rounded-[4px] hover:bg-gray-50 transition-colors">{a}</button>
          ))}
        </div>
      </div>

      {/* Recent Actions */}
      <div className="mb-8">
        <h2 className="text-[15px] font-semibold text-black mb-4">Recent Admin Actions</h2>
        <div className="bg-white border border-gray-200 rounded-[6px] overflow-hidden">
          {actions.map((a, i) => (
            <div key={i} className={`flex items-center justify-between px-5 py-3.5 ${i < actions.length - 1 ? "border-b border-gray-100" : ""}`}>
              <div>
                <p className="text-[13px] text-black">{a.action}</p>
                <p className="text-[11px] text-gray-400 mt-0.5">{a.admin} · {a.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* System Health */}
      <div>
        <h2 className="text-[15px] font-semibold text-black mb-4">System Health</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {health.map((h, i) => (
            <div key={i} className="p-4 bg-white border border-gray-200 rounded-[6px]">
              <p className="text-[12px] font-medium text-black">{h.system}</p>
              <p className={`text-[11px] mt-1 font-medium ${h.status === "Operational" ? "text-green-600" : "text-yellow-600"}`}>{h.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
