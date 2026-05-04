"use client";

const history = [
  { id: "MINT-020", recipient: "Suraj Kumar", amount: 80, reason: "RPS-024 completion", admin: "Super Admin", date: "May 2, 2026" },
  { id: "MINT-019", recipient: "Batch 3 (12 users)", amount: 500, reason: "Welcome bonus", admin: "Super Admin", date: "May 1, 2026" },
  { id: "MINT-018", recipient: "Priya Sharma", amount: 60, reason: "RPS-023 completion", admin: "Evaluator", date: "Apr 29, 2026" },
];

export default function NexCoinAdmin() {
  return (
    <div className="p-8 max-w-[1100px]">
      <div className="mb-8">
        <h1 className="text-[22px] font-bold text-black">NexCoin Management</h1>
        <p className="text-[13px] text-gray-500 mt-1">Mint, distribute, and monitor NexCoin economy.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { l: "Total Supply", v: "48,200" },
          { l: "In Circulation", v: "32,100" },
          { l: "Avg per User", v: "360" },
          { l: "Minted This Week", v: "1,240" },
        ].map((s, i) => (
          <div key={i} className="p-4 bg-white border border-gray-200 rounded-[6px]">
            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">{s.l}</p>
            <p className="text-[22px] font-bold text-black mt-1">{s.v}</p>
          </div>
        ))}
      </div>

      {/* Mint */}
      <div className="mb-8">
        <h2 className="text-[15px] font-semibold text-black mb-4">Mint NexCoins</h2>
        <div className="p-6 bg-white border border-gray-200 rounded-[6px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-[12px] font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Recipient</label>
              <input type="text" placeholder="User ID or batch" className="w-full h-9 px-3 text-[13px] border border-gray-200 rounded-[4px] focus:outline-none focus:border-gray-400 bg-gray-50" />
            </div>
            <div>
              <label className="block text-[12px] font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Amount</label>
              <input type="number" placeholder="0" className="w-full h-9 px-3 text-[13px] border border-gray-200 rounded-[4px] focus:outline-none focus:border-gray-400 bg-gray-50" />
            </div>
            <div>
              <label className="block text-[12px] font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Reason</label>
              <input type="text" placeholder="e.g. RPS completion" className="w-full h-9 px-3 text-[13px] border border-gray-200 rounded-[4px] focus:outline-none focus:border-gray-400 bg-gray-50" />
            </div>
          </div>
          <button className="h-9 px-5 text-[13px] font-semibold text-white bg-[#4A9FE5] rounded-[4px] hover:bg-[#3B8DD6] transition-colors">Mint & Distribute</button>
        </div>
      </div>

      {/* History */}
      <div>
        <h2 className="text-[15px] font-semibold text-black mb-4">Distribution History</h2>
        <div className="overflow-x-auto bg-white border border-gray-200 rounded-[6px]">
          <table className="w-full text-left min-w-[600px]">
            <thead><tr className="border-b border-gray-200 bg-gray-50">
              <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-4 py-3">ID</th>
              <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-4 py-3">Recipient</th>
              <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-4 py-3">Amount</th>
              <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-4 py-3">Reason</th>
              <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-4 py-3">Date</th>
            </tr></thead>
            <tbody>{history.map((h, i) => (
              <tr key={i} className="border-b border-gray-100 last:border-0">
                <td className="px-4 py-3 text-[12px] font-mono text-gray-400">{h.id}</td>
                <td className="px-4 py-3 text-[13px] font-medium text-black">{h.recipient}</td>
                <td className="px-4 py-3 text-[13px] font-semibold text-green-600 font-mono">+{h.amount}</td>
                <td className="px-4 py-3 text-[12px] text-gray-500">{h.reason}</td>
                <td className="px-4 py-3 text-[12px] text-gray-400">{h.date}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
