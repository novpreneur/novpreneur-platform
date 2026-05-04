"use client";

const txns = [
  { id: "TXN-041", type: "Earned", desc: "RPS-024: Market Research Sprint", amount: "+80", date: "May 2, 2026" },
  { id: "TXN-040", type: "Earned", desc: "RPS-023: User Interview Design", amount: "+60", date: "Apr 29, 2026" },
  { id: "TXN-039", type: "Spent", desc: "Premium template unlock", amount: "-200", date: "Apr 27, 2026" },
  { id: "TXN-038", type: "Earned", desc: "RPS-022: Competitive Analysis", amount: "+50", date: "Apr 25, 2026" },
  { id: "TXN-037", type: "Earned", desc: "Profile completion bonus", amount: "+20", date: "Apr 22, 2026" },
  { id: "TXN-036", type: "Earned", desc: "RPS-021: Strategy Brief", amount: "+70", date: "Apr 20, 2026" },
];

export default function NexCoinPage() {
  return (
    <div className="p-8 max-w-[1000px]">
      <div className="mb-8">
        <h1 className="text-[22px] font-bold text-black">NexCoin</h1>
        <p className="text-[13px] text-gray-500 mt-1">Your wallet and transaction history.</p>
      </div>

      {/* Balance */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="p-5 bg-white border border-gray-200 rounded-[6px]">
          <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Balance</p>
          <p className="text-[28px] font-bold text-black mt-1">1,240</p>
          <p className="text-[11px] text-gray-400 mt-0.5">NexCoins available</p>
        </div>
        <div className="p-5 bg-white border border-gray-200 rounded-[6px]">
          <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Total Earned</p>
          <p className="text-[28px] font-bold text-green-600 mt-1">1,440</p>
          <p className="text-[11px] text-gray-400 mt-0.5">Lifetime earnings</p>
        </div>
        <div className="p-5 bg-white border border-gray-200 rounded-[6px]">
          <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Total Spent</p>
          <p className="text-[28px] font-bold text-gray-500 mt-1">200</p>
          <p className="text-[11px] text-gray-400 mt-0.5">On system services</p>
        </div>
      </div>

      {/* History */}
      <div>
        <h2 className="text-[15px] font-semibold text-black mb-4">Transaction History</h2>
        <div className="overflow-x-auto bg-white border border-gray-200 rounded-[6px]">
          <table className="w-full text-left">
            <thead><tr className="border-b border-gray-200 bg-gray-50">
              <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-4 py-3">ID</th>
              <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-4 py-3">Type</th>
              <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-4 py-3">Description</th>
              <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-4 py-3">Amount</th>
              <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-4 py-3">Date</th>
            </tr></thead>
            <tbody>{txns.map((t, i) => (
              <tr key={i} className="border-b border-gray-100 last:border-0">
                <td className="px-4 py-3 text-[12px] font-mono text-gray-400">{t.id}</td>
                <td className="px-4 py-3"><span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-[3px] border ${t.type === "Earned" ? "bg-green-50 text-green-700 border-green-200" : "bg-red-50 text-red-600 border-red-200"}`}>{t.type}</span></td>
                <td className="px-4 py-3 text-[13px] text-gray-600">{t.desc}</td>
                <td className="px-4 py-3 text-[13px] font-semibold font-mono" style={{ color: t.amount.startsWith("+") ? "#16a34a" : "#666" }}>{t.amount}</td>
                <td className="px-4 py-3 text-[12px] text-gray-400">{t.date}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
