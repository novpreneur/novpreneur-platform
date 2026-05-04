"use client";

const members = [
  { name: "Suraj Kumar", role: "CEO", level: "L2", status: "Active" },
  { name: "Priya Sharma", role: "CTO", level: "L3", status: "Active" },
];

const discover = [
  { name: "Ankit Verma", level: "L3", domains: "Design, Marketing", score: "78", match: "87%" },
  { name: "Riya Patel", level: "L2", domains: "Engineering, Finance", score: "72", match: "81%" },
  { name: "Karan Singh", level: "L3", domains: "Operations, Marketing", score: "80", match: "76%" },
];

export default function TeamPage() {
  return (
    <div className="p-8 max-w-[1000px]">
      <div className="mb-8">
        <h1 className="text-[22px] font-bold text-black">Team</h1>
        <p className="text-[13px] text-gray-500 mt-1">Your team roster and discovery.</p>
      </div>

      {/* Current Team */}
      <div className="mb-8">
        <h2 className="text-[15px] font-semibold text-black mb-4">Current Team</h2>
        <div className="overflow-x-auto bg-white border border-gray-200 rounded-[6px]">
          <table className="w-full text-left">
            <thead><tr className="border-b border-gray-200 bg-gray-50">
              <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-4 py-3">Name</th>
              <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-4 py-3">Role</th>
              <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-4 py-3">Level</th>
              <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-4 py-3">Status</th>
            </tr></thead>
            <tbody>{members.map((m, i) => (
              <tr key={i} className="border-b border-gray-100 last:border-0">
                <td className="px-4 py-3 text-[13px] font-medium text-black">{m.name}</td>
                <td className="px-4 py-3 text-[12px] text-gray-500">{m.role}</td>
                <td className="px-4 py-3 text-[12px] font-mono text-gray-500">{m.level}</td>
                <td className="px-4 py-3"><span className="text-[10px] font-semibold text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 rounded-[3px] uppercase tracking-wider">{m.status}</span></td>
              </tr>
            ))}</tbody>
          </table>
        </div>
        <p className="text-[12px] text-gray-400 mt-2">Team requires 3 members minimum for MVP phase.</p>
      </div>

      {/* Discovery */}
      <div className="mb-8">
        <h2 className="text-[15px] font-semibold text-black mb-4">Team Discovery</h2>
        <p className="text-[12px] text-gray-400 mb-4">Suggested matches based on complementary skills and execution data.</p>
        <div className="space-y-3">
          {discover.map((d, i) => (
            <div key={i} className="p-4 bg-white border border-gray-200 rounded-[6px] flex items-center justify-between">
              <div>
                <p className="text-[14px] font-medium text-black">{d.name}</p>
                <p className="text-[12px] text-gray-400 mt-0.5">{d.level} · {d.domains} · RPS avg: {d.score}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[12px] font-mono text-gray-500">{d.match} match</span>
                <button className="h-8 px-4 text-[12px] font-semibold text-black border border-gray-300 rounded-[4px] hover:bg-gray-50 transition-colors">Invite</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Invite */}
      <div>
        <h2 className="text-[15px] font-semibold text-black mb-4">Invite by Email</h2>
        <div className="p-5 bg-white border border-gray-200 rounded-[6px] flex gap-3">
          <input type="email" placeholder="email@example.com" className="flex-1 h-9 px-3 text-[13px] border border-gray-200 rounded-[4px] focus:outline-none focus:border-gray-400 bg-gray-50" />
          <button className="h-9 px-5 text-[13px] font-semibold text-white bg-[#4A9FE5] rounded-[4px] hover:bg-[#3B8DD6] transition-colors">Send Invite</button>
        </div>
      </div>
    </div>
  );
}
