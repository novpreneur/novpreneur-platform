"use client";

const stats = [
  { label: "Current Level", value: "L2", sub: "Builder" },
  { label: "NexCoins", value: "1,240", sub: "+80 this week" },
  { label: "RPS Completed", value: "7", sub: "Avg score: 74" },
  { label: "Team Status", value: "Forming", sub: "2/3 matched" },
];

const missions = [
  { name: "Complete Product Prototype RPS", domain: "Engineering", progress: 65, coins: "120", deadline: "May 8, 2026" },
  { name: "Market Sizing Analysis", domain: "Marketing", progress: 30, coins: "80", deadline: "May 12, 2026" },
];

const activity = [
  { action: "RPS-024 scored: 87/100", time: "2 hours ago", coins: "+80" },
  { action: "Level advanced: L1 → L2", time: "Yesterday", coins: "" },
  { action: "RPS-023 scored: 71/100", time: "3 days ago", coins: "+60" },
  { action: "Profile completed", time: "1 week ago", coins: "+20" },
];

export default function DashboardPage() {
  return (
    <div className="p-8 max-w-[1000px]">
      <div className="mb-8">
        <h1 className="text-[22px] font-bold text-black">Overview</h1>
        <p className="text-[13px] text-gray-500 mt-1">Your current status in the Novpreneur system.</p>
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

      {/* Active Missions */}
      <div className="mb-8">
        <h2 className="text-[15px] font-semibold text-black mb-4">Active Missions</h2>
        <div className="space-y-3">
          {missions.map((m, i) => (
            <div key={i} className="p-5 bg-white border border-gray-200 rounded-[6px]">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="text-[14px] font-semibold text-black">{m.name}</h3>
                  <p className="text-[12px] text-gray-400 mt-0.5">{m.domain} · {m.coins} NexCoins · Due {m.deadline}</p>
                </div>
                <span className="text-[12px] font-mono text-gray-500">{m.progress}%</span>
              </div>
              <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#4A9FE5] rounded-full transition-all duration-300" style={{ width: `${m.progress}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Activity */}
      <div>
        <h2 className="text-[15px] font-semibold text-black mb-4">Recent Activity</h2>
        <div className="bg-white border border-gray-200 rounded-[6px] overflow-hidden">
          {activity.map((a, i) => (
            <div key={i} className={`flex items-center justify-between px-5 py-3.5 ${i < activity.length - 1 ? "border-b border-gray-100" : ""}`}>
              <div>
                <p className="text-[13px] text-black">{a.action}</p>
                <p className="text-[11px] text-gray-400 mt-0.5">{a.time}</p>
              </div>
              {a.coins && <span className="text-[12px] font-semibold text-green-600 font-mono">{a.coins}</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
