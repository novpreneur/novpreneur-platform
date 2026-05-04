"use client";

const tasks = [
  { id: "RPS-024", title: "Market Research Sprint", domain: "Marketing", status: "COMPLETED", score: "87/100", coins: "+80" },
  { id: "RPS-025", title: "Product Prototype Build", domain: "Engineering", status: "IN PROGRESS", score: "—", coins: "120" },
  { id: "RPS-026", title: "Financial Model v1", domain: "Finance", status: "NOT STARTED", score: "—", coins: "100" },
  { id: "RPS-023", title: "User Interview Design", domain: "Design", status: "COMPLETED", score: "71/100", coins: "+60" },
  { id: "RPS-022", title: "Competitive Analysis", domain: "Marketing", status: "COMPLETED", score: "65/100", coins: "+50" },
];

const statusColor: Record<string, string> = {
  COMPLETED: "bg-green-50 text-green-700 border-green-200",
  "IN PROGRESS": "bg-yellow-50 text-yellow-700 border-yellow-200",
  "NOT STARTED": "bg-gray-100 text-gray-500 border-gray-200",
};

export default function NexGenDashboard() {
  return (
    <div className="p-8 max-w-[1000px]">
      <div className="mb-8">
        <h1 className="text-[22px] font-bold text-black">NexGen</h1>
        <p className="text-[13px] text-gray-500 mt-1">RPS challenges and progress tracking.</p>
      </div>

      {/* Progress stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { l: "Completed", v: "5" },
          { l: "In Progress", v: "1" },
          { l: "Avg Score", v: "74" },
        ].map((s, i) => (
          <div key={i} className="p-4 bg-white border border-gray-200 rounded-[6px]">
            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">{s.l}</p>
            <p className="text-[22px] font-bold text-black mt-1">{s.v}</p>
          </div>
        ))}
      </div>

      {/* RPS Table */}
      <div className="mb-8">
        <h2 className="text-[15px] font-semibold text-black mb-4">RPS Challenges</h2>
        <div className="overflow-x-auto bg-white border border-gray-200 rounded-[6px]">
          <table className="w-full text-left min-w-[600px]">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-4 py-3">ID</th>
                <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-4 py-3">Challenge</th>
                <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-4 py-3">Domain</th>
                <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-4 py-3">Status</th>
                <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-4 py-3">Score</th>
                <th className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-4 py-3">Coins</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((t, i) => (
                <tr key={i} className="border-b border-gray-100 last:border-0">
                  <td className="px-4 py-3 text-[12px] font-mono text-gray-400">{t.id}</td>
                  <td className="px-4 py-3 text-[13px] font-medium text-black">{t.title}</td>
                  <td className="px-4 py-3 text-[12px] text-gray-500">{t.domain}</td>
                  <td className="px-4 py-3"><span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-[3px] border ${statusColor[t.status]}`}>{t.status}</span></td>
                  <td className="px-4 py-3 text-[13px] font-mono text-gray-500">{t.score}</td>
                  <td className="px-4 py-3 text-[12px] font-semibold text-gray-600">{t.coins}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Submission */}
      <div>
        <h2 className="text-[15px] font-semibold text-black mb-4">Submit RPS Solution</h2>
        <div className="p-6 bg-white border border-gray-200 rounded-[6px]">
          <div className="mb-4">
            <label className="block text-[12px] font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Active Challenge</label>
            <p className="text-[14px] font-medium text-black">RPS-025: Product Prototype Build</p>
          </div>
          <div className="mb-4">
            <label className="block text-[12px] font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Your Solution</label>
            <textarea className="w-full h-28 px-3 py-2 text-[13px] border border-gray-200 rounded-[4px] resize-none focus:outline-none focus:border-gray-400 bg-gray-50" placeholder="Describe your solution approach, methodology, and results..." />
          </div>
          <div className="mb-4">
            <label className="block text-[12px] font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Attachments</label>
            <div className="border-2 border-dashed border-gray-200 rounded-[6px] p-6 text-center">
              <p className="text-[13px] text-gray-400">Drop files here or click to upload</p>
              <p className="text-[11px] text-gray-300 mt-1">PDF, DOCX, or images. Max 10MB.</p>
            </div>
          </div>
          <button className="h-9 px-5 text-[13px] font-semibold text-white bg-[#4A9FE5] rounded-[4px] hover:bg-[#3B8DD6] transition-colors">
            Submit Solution
          </button>
        </div>
      </div>
    </div>
  );
}
