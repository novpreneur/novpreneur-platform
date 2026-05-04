"use client";

const subs = [
  { id: "SUB-101", user: "Suraj Kumar", challenge: "RPS-025: Product Prototype", domain: "Engineering", submitted: "May 3, 2026", status: "Pending" },
  { id: "SUB-102", user: "Priya Sharma", challenge: "RPS-026: Financial Model", domain: "Finance", submitted: "May 3, 2026", status: "Pending" },
  { id: "SUB-103", user: "Ankit Verma", challenge: "RPS-024: Market Research", domain: "Marketing", submitted: "May 2, 2026", status: "Pending" },
  { id: "SUB-100", user: "Karan Singh", challenge: "RPS-023: User Interview", domain: "Design", submitted: "May 1, 2026", status: "Reviewed" },
];

export default function RPSApprovalPage() {
  return (
    <div className="p-8 max-w-[1100px]">
      <div className="mb-8">
        <h1 className="text-[22px] font-bold text-black">RPS Approval</h1>
        <p className="text-[13px] text-gray-500 mt-1">Review and score RPS submissions.</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        {[{ l: "Pending", v: "3" }, { l: "Reviewed Today", v: "1" }, { l: "Avg Score Given", v: "76" }].map((s, i) => (
          <div key={i} className="p-4 bg-white border border-gray-200 rounded-[6px]">
            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">{s.l}</p>
            <p className="text-[22px] font-bold text-black mt-1">{s.v}</p>
          </div>
        ))}
      </div>

      <div className="overflow-x-auto bg-white border border-gray-200 rounded-[6px]">
        <table className="w-full text-left min-w-[700px]">
          <thead><tr className="border-b border-gray-200 bg-gray-50">
            <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-4 py-3">ID</th>
            <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-4 py-3">User</th>
            <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-4 py-3">Challenge</th>
            <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-4 py-3">Domain</th>
            <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-4 py-3">Status</th>
            <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-4 py-3 w-[120px]">Actions</th>
          </tr></thead>
          <tbody>{subs.map((s, i) => (
            <tr key={i} className="border-b border-gray-100 last:border-0">
              <td className="px-4 py-3 text-[12px] font-mono text-gray-400">{s.id}</td>
              <td className="px-4 py-3 text-[13px] font-medium text-black">{s.user}</td>
              <td className="px-4 py-3 text-[12px] text-gray-500">{s.challenge}</td>
              <td className="px-4 py-3 text-[12px] text-gray-500">{s.domain}</td>
              <td className="px-4 py-3"><span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-[3px] border ${s.status === "Pending" ? "bg-yellow-50 text-yellow-700 border-yellow-200" : "bg-green-50 text-green-700 border-green-200"}`}>{s.status}</span></td>
              <td className="px-4 py-3 flex gap-2">
                <button className="h-7 px-3 text-[11px] font-semibold text-white bg-[#4A9FE5] rounded-[3px] hover:bg-[#3B8DD6] transition-colors">Review</button>
              </td>
            </tr>
          ))}</tbody>
        </table>
      </div>
    </div>
  );
}
