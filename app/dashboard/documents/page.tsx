"use client";

const docs = [
  { name: "Validation Report v1", type: "Report", date: "Apr 28, 2026", status: "Final" },
  { name: "Pitch Deck Draft", type: "Pitch Deck", date: "Apr 25, 2026", status: "Draft" },
  { name: "Market Analysis", type: "Report", date: "Apr 20, 2026", status: "Final" },
  { name: "Financial Projections", type: "Spreadsheet", date: "Apr 18, 2026", status: "Draft" },
];

export default function DocumentsPage() {
  return (
    <div className="p-8 max-w-[1000px]">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-[22px] font-bold text-black">Documents</h1>
          <p className="text-[13px] text-gray-500 mt-1">Your reports, decks, and files.</p>
        </div>
        <button className="h-9 px-5 text-[13px] font-semibold text-white bg-[#4A9FE5] rounded-[4px] hover:bg-[#3B8DD6] transition-colors">Upload</button>
      </div>

      <div className="overflow-x-auto bg-white border border-gray-200 rounded-[6px]">
        <table className="w-full text-left">
          <thead><tr className="border-b border-gray-200 bg-gray-50">
            <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-4 py-3">Name</th>
            <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-4 py-3">Type</th>
            <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-4 py-3">Date</th>
            <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-4 py-3">Status</th>
            <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-4 py-3 w-[80px]">Action</th>
          </tr></thead>
          <tbody>{docs.map((d, i) => (
            <tr key={i} className="border-b border-gray-100 last:border-0">
              <td className="px-4 py-3 text-[13px] font-medium text-black">{d.name}</td>
              <td className="px-4 py-3 text-[12px] text-gray-500">{d.type}</td>
              <td className="px-4 py-3 text-[12px] text-gray-400">{d.date}</td>
              <td className="px-4 py-3"><span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-[3px] border ${d.status === "Final" ? "bg-green-50 text-green-700 border-green-200" : "bg-yellow-50 text-yellow-700 border-yellow-200"}`}>{d.status}</span></td>
              <td className="px-4 py-3"><button className="text-[12px] font-medium text-gray-500 hover:text-black transition-colors">View</button></td>
            </tr>
          ))}</tbody>
        </table>
      </div>
    </div>
  );
}
