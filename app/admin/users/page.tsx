"use client";

const users = [
  { id: "USR-001", name: "Suraj Kumar", email: "suraj@example.com", level: "L2", role: "Learner", status: "Active", joined: "Mar 15, 2026" },
  { id: "USR-002", name: "Priya Sharma", email: "priya@example.com", level: "L3", role: "Learner", status: "Active", joined: "Mar 10, 2026" },
  { id: "USR-003", name: "Ankit Verma", email: "ankit@example.com", level: "L3", role: "Learner", status: "Active", joined: "Mar 8, 2026" },
  { id: "USR-004", name: "Riya Patel", email: "riya@example.com", level: "L1", role: "Learner", status: "Inactive", joined: "Mar 20, 2026" },
  { id: "USR-005", name: "Karan Singh", email: "karan@example.com", level: "L3", role: "Learner", status: "Active", joined: "Mar 5, 2026" },
];

export default function UsersPage() {
  return (
    <div className="p-8 max-w-[1100px]">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-[22px] font-bold text-black">User Control</h1>
          <p className="text-[13px] text-gray-500 mt-1">{users.length} total users</p>
        </div>
        <input type="text" placeholder="Search users..." className="h-9 w-[240px] px-3 text-[13px] border border-gray-200 rounded-[4px] focus:outline-none focus:border-gray-400 bg-white" />
      </div>

      <div className="overflow-x-auto bg-white border border-gray-200 rounded-[6px]">
        <table className="w-full text-left min-w-[700px]">
          <thead><tr className="border-b border-gray-200 bg-gray-50">
            <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-4 py-3">ID</th>
            <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-4 py-3">Name</th>
            <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-4 py-3">Email</th>
            <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-4 py-3">Level</th>
            <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-4 py-3">Status</th>
            <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-4 py-3">Joined</th>
            <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-4 py-3 w-[100px]">Actions</th>
          </tr></thead>
          <tbody>{users.map((u, i) => (
            <tr key={i} className="border-b border-gray-100 last:border-0">
              <td className="px-4 py-3 text-[12px] font-mono text-gray-400">{u.id}</td>
              <td className="px-4 py-3 text-[13px] font-medium text-black">{u.name}</td>
              <td className="px-4 py-3 text-[12px] text-gray-500">{u.email}</td>
              <td className="px-4 py-3 text-[12px] font-mono font-semibold text-black">{u.level}</td>
              <td className="px-4 py-3"><span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-[3px] border ${u.status === "Active" ? "bg-green-50 text-green-700 border-green-200" : "bg-gray-100 text-gray-500 border-gray-200"}`}>{u.status}</span></td>
              <td className="px-4 py-3 text-[12px] text-gray-400">{u.joined}</td>
              <td className="px-4 py-3 flex gap-2">
                <button className="text-[11px] font-medium text-gray-500 hover:text-black transition-colors">Edit</button>
                <button className="text-[11px] font-medium text-gray-500 hover:text-black transition-colors">View</button>
              </td>
            </tr>
          ))}</tbody>
        </table>
      </div>
    </div>
  );
}
