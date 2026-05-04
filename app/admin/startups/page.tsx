"use client";

const startups = [
  { name: "SkillForge", team: "Team Delta", stage: "VALIDATION", mrr: "₹2,400", users: 42, lead: "Rahul K" },
  { name: "DataPulse", team: "Team Echo", stage: "BUILDING", mrr: "₹0", users: 8, lead: "Aisha T" },
  { name: "GreenRoute", team: "Team Foxtrot", stage: "TRACTION", mrr: "₹8,200", users: 156, lead: "Dev P" },
  { name: "PayBridge", team: "Team Golf", stage: "SCALE", mrr: "₹24,000", users: 340, lead: "Neha M" },
];

const stageColor: Record<string, string> = {
  VALIDATION: "bg-blue-50 text-blue-700 border-blue-200",
  BUILDING: "bg-yellow-50 text-yellow-700 border-yellow-200",
  TRACTION: "bg-green-50 text-green-700 border-green-200",
  SCALE: "bg-purple-50 text-purple-700 border-purple-200",
};

export default function StartupTrackingPage() {
  return (
    <div className="p-8 max-w-[1100px]">
      <div className="mb-8">
        <h1 className="text-[22px] font-bold text-black">Startup Tracking</h1>
        <p className="text-[13px] text-gray-500 mt-1">All startups in the Novpreneur pipeline.</p>
      </div>

      <div className="overflow-x-auto bg-white border border-gray-200 rounded-[6px]">
        <table className="w-full text-left min-w-[700px]">
          <thead><tr className="border-b border-gray-200 bg-gray-50">
            <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-4 py-3">Startup</th>
            <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-4 py-3">Team</th>
            <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-4 py-3">Stage</th>
            <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-4 py-3">MRR</th>
            <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-4 py-3">Users</th>
            <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-4 py-3">Lead</th>
            <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-4 py-3 w-[80px]">Action</th>
          </tr></thead>
          <tbody>{startups.map((s, i) => (
            <tr key={i} className="border-b border-gray-100 last:border-0">
              <td className="px-4 py-3 text-[13px] font-semibold text-black">{s.name}</td>
              <td className="px-4 py-3 text-[12px] text-gray-500">{s.team}</td>
              <td className="px-4 py-3"><span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-[3px] border ${stageColor[s.stage]}`}>{s.stage}</span></td>
              <td className="px-4 py-3 text-[13px] font-mono text-black">{s.mrr}</td>
              <td className="px-4 py-3 text-[13px] text-gray-600">{s.users}</td>
              <td className="px-4 py-3 text-[12px] text-gray-500">{s.lead}</td>
              <td className="px-4 py-3"><button className="text-[11px] font-medium text-gray-500 hover:text-black transition-colors">View</button></td>
            </tr>
          ))}</tbody>
        </table>
      </div>
    </div>
  );
}
