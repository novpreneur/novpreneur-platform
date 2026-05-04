"use client";

import { useState, useEffect, useCallback } from "react";

interface Application {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  currentStatus: string;
  college: string;
  linkedIn: string;
  portfolio: string;
  whyNovpreneur: string;
  whatBuilt: string;
  status: "pending" | "approved" | "rejected";
  submittedAt: string;
}

const statusColor: Record<string, string> = {
  pending: "bg-yellow-50 text-yellow-700 border-yellow-200",
  approved: "bg-green-50 text-green-700 border-green-200",
  rejected: "bg-red-50 text-red-600 border-red-200",
};

const statusLabel: Record<string, string> = {
  student: "Student",
  "recent-grad": "Recent Grad",
  working: "Working",
  founder: "Founder",
};

export default function ApplicationsPage() {
  const [apps, setApps] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const fetchApps = useCallback(async () => {
    try {
      const res = await fetch("/api/applications");
      const data = await res.json();
      setApps(data);
    } catch {
      console.error("Failed to fetch applications");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchApps();
  }, [fetchApps]);

  async function updateStatus(id: string, status: string) {
    try {
      await fetch("/api/applications", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });
      setApps((prev) =>
        prev.map((a) =>
          a.id === id ? { ...a, status: status as Application["status"] } : a
        )
      );
    } catch {
      console.error("Failed to update status");
    }
  }

  const filtered =
    filter === "all" ? apps : apps.filter((a) => a.status === filter);

  const counts = {
    all: apps.length,
    pending: apps.filter((a) => a.status === "pending").length,
    approved: apps.filter((a) => a.status === "approved").length,
    rejected: apps.filter((a) => a.status === "rejected").length,
  };

  function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  return (
    <div className="p-8 max-w-[1100px]">
      <div className="mb-8">
        <h1 className="text-[22px] font-bold text-black">Applications</h1>
        <p className="text-[13px] text-gray-500 mt-1">
          Review and manage incoming applications.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { l: "Total", v: counts.all, c: "" },
          { l: "Pending", v: counts.pending, c: "text-yellow-600" },
          { l: "Approved", v: counts.approved, c: "text-green-600" },
          { l: "Rejected", v: counts.rejected, c: "text-red-500" },
        ].map((s, i) => (
          <div key={i} className="p-4 bg-white border border-gray-200 rounded-[6px]">
            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
              {s.l}
            </p>
            <p className={`text-[22px] font-bold mt-1 ${s.c || "text-black"}`}>
              {s.v}
            </p>
          </div>
        ))}
      </div>

      {/* Filter tabs */}
      <div className="flex gap-1 mb-6 p-1 bg-gray-100 rounded-[6px] w-fit">
        {(["all", "pending", "approved", "rejected"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 text-[12px] font-semibold rounded-[4px] transition-colors capitalize ${
              filter === f
                ? "bg-white text-black shadow-sm"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {f} ({counts[f]})
          </button>
        ))}
      </div>

      {/* Applications list */}
      {loading ? (
        <div className="py-20 text-center">
          <p className="text-[14px] text-gray-400">Loading applications...</p>
        </div>
      ) : filtered.length === 0 ? (
        <div className="py-20 text-center border border-dashed border-gray-200 rounded-[6px]">
          <p className="text-[14px] text-gray-400">
            {filter === "all"
              ? "No applications yet."
              : `No ${filter} applications.`}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((app) => (
            <div
              key={app.id}
              className="bg-white border border-gray-200 rounded-[6px] overflow-hidden"
            >
              {/* Header row */}
              <div
                className="p-5 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() =>
                  setExpanded(expanded === app.id ? null : app.id)
                }
              >
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-[13px] font-semibold text-gray-600">
                    {app.fullName
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()
                      .slice(0, 2)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-[14px] font-semibold text-black">
                        {app.fullName}
                      </p>
                      <span className="text-[10px] font-mono text-gray-400">
                        {app.id}
                      </span>
                      <span
                        className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-[3px] border ${statusColor[app.status]}`}
                      >
                        {app.status}
                      </span>
                    </div>
                    <p className="text-[12px] text-gray-400 mt-0.5">
                      {app.email}
                      {app.currentStatus &&
                        ` · ${statusLabel[app.currentStatus] || app.currentStatus}`}
                      {app.college && ` · ${app.college}`}
                      {" · "}
                      {formatDate(app.submittedAt)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-300 text-[12px]">
                    {expanded === app.id ? "▲" : "▼"}
                  </span>
                </div>
              </div>

              {/* Expanded detail */}
              {expanded === app.id && (
                <div className="border-t border-gray-100 px-5 py-5 bg-gray-50">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Contact */}
                    <div>
                      <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">
                        Contact Details
                      </p>
                      <div className="space-y-1.5">
                        <p className="text-[13px] text-gray-600">
                          <span className="text-gray-400">Email:</span>{" "}
                          {app.email}
                        </p>
                        <p className="text-[13px] text-gray-600">
                          <span className="text-gray-400">Phone:</span>{" "}
                          {app.phone || "—"}
                        </p>
                        <p className="text-[13px] text-gray-600">
                          <span className="text-gray-400">LinkedIn:</span>{" "}
                          {app.linkedIn ? (
                            <a
                              href={app.linkedIn}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-black underline"
                            >
                              {app.linkedIn}
                            </a>
                          ) : (
                            "—"
                          )}
                        </p>
                        <p className="text-[13px] text-gray-600">
                          <span className="text-gray-400">Portfolio:</span>{" "}
                          {app.portfolio ? (
                            <a
                              href={app.portfolio}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-black underline"
                            >
                              {app.portfolio}
                            </a>
                          ) : (
                            "—"
                          )}
                        </p>
                      </div>
                    </div>

                    {/* Background */}
                    <div>
                      <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">
                        Background
                      </p>
                      <div className="space-y-1.5">
                        <p className="text-[13px] text-gray-600">
                          <span className="text-gray-400">Status:</span>{" "}
                          {statusLabel[app.currentStatus] ||
                            app.currentStatus ||
                            "—"}
                        </p>
                        <p className="text-[13px] text-gray-600">
                          <span className="text-gray-400">College:</span>{" "}
                          {app.college || "—"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Why Novpreneur */}
                  <div className="mt-5">
                    <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Why Novpreneur?
                    </p>
                    <p className="text-[13px] text-gray-600 leading-relaxed bg-white p-4 border border-gray-200 rounded-[4px]">
                      {app.whyNovpreneur}
                    </p>
                  </div>

                  {/* What Built */}
                  {app.whatBuilt && (
                    <div className="mt-4">
                      <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">
                        What they&apos;ve built
                      </p>
                      <p className="text-[13px] text-gray-600 leading-relaxed bg-white p-4 border border-gray-200 rounded-[4px]">
                        {app.whatBuilt}
                      </p>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="mt-5 flex items-center gap-2 pt-4 border-t border-gray-200">
                    {app.status !== "approved" && (
                      <button
                        onClick={() => updateStatus(app.id, "approved")}
                        className="h-8 px-4 text-[12px] font-semibold text-white bg-[#4A9FE5] rounded-[4px] hover:bg-[#3B8DD6] transition-colors"
                      >
                        Approve
                      </button>
                    )}
                    {app.status !== "rejected" && (
                      <button
                        onClick={() => updateStatus(app.id, "rejected")}
                        className="h-8 px-4 text-[12px] font-semibold text-gray-600 border border-gray-300 rounded-[4px] hover:bg-white transition-colors"
                      >
                        Reject
                      </button>
                    )}
                    {app.status !== "pending" && (
                      <button
                        onClick={() => updateStatus(app.id, "pending")}
                        className="h-8 px-4 text-[12px] font-medium text-gray-500 hover:text-black transition-colors"
                      >
                        Reset to Pending
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
