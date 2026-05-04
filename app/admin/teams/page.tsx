"use client";

const teams = [
  { id: "TEAM-009", name: "Team Alpha", members: "Suraj K, Priya S, Ankit V", status: "Pending", avgLevel: "L2.7", formed: "May 1, 2026" },
  { id: "TEAM-010", name: "Team Beta", members: "Riya P, Karan S, Neha M", status: "Pending", avgLevel: "L2.3", formed: "May 2, 2026" },
  { id: "TEAM-008", name: "Team Delta", members: "Rahul K, Aisha T, Dev P", status: "Approved", avgLevel: "L3.0", formed: "Apr 28, 2026" },
];

export default function TeamApprovalsPage() {
  return (
    <div className="p-8 max-w-[1100px]">
      <div className="mb-8">
        <h1 className="text-[22px] font-bold text-black">Team Approvals</h1>
        <p className="text-[13px] text-gray-500 mt-1">Review and approve team formations.</p>
      </div>

      <div className="space-y-4">
        {teams.map((t, i) => (
          <div key={i} className="p-5 bg-white border border-gray-200 rounded-[6px]">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-[15px] font-semibold text-black">{t.name}</h3>
                  <span className="text-[10px] font-mono text-gray-400">{t.id}</span>
                  <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-[3px] border ${t.status === "Pending" ? "bg-yellow-50 text-yellow-700 border-yellow-200" : "bg-green-50 text-green-700 border-green-200"}`}>{t.status}</span>
                </div>
                <p className="text-[12px] text-gray-500">Members: {t.members}</p>
                <p className="text-[11px] text-gray-400 mt-0.5">Avg Level: {t.avgLevel} · Formed: {t.formed}</p>
              </div>
              {t.status === "Pending" && (
                <div className="flex gap-2 shrink-0">
                  <button className="h-8 px-4 text-[12px] font-semibold text-white bg-[#4A9FE5] rounded-[4px] hover:bg-[#3B8DD6] transition-colors">Approve</button>
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
