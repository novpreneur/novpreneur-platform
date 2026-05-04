"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ApplyPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    currentStatus: "",
    college: "",
    linkedIn: "",
    portfolio: "",
    whyNovpreneur: "",
    whatBuilt: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [appId, setAppId] = useState("");
  const [error, setError] = useState("");

  function update(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const res = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      const data = await res.json();
      setAppId(data.id);
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Submission failed");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <>
        <Navbar />
        <section className="bg-white min-h-[70vh] flex items-center justify-center">
          <div className="max-w-[500px] mx-auto px-6 text-center">
            <div className="w-14 h-14 rounded-full bg-[#4A9FE5] flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-[20px]">✓</span>
            </div>
            <h1 className="text-[28px] font-bold text-black">Application Submitted</h1>
            <p className="mt-3 text-[15px] text-gray-500 leading-relaxed">
              Your application has been received. Our team will review it within 72 hours.
              Not everyone gets in.
            </p>
            <p className="mt-4 text-[13px] font-mono text-gray-400">
              Reference: {appId}
            </p>
            <a
              href="/"
              className="inline-flex items-center h-10 px-6 mt-8 text-[13px] font-semibold text-black border border-gray-300 rounded-[4px] hover:bg-gray-50 transition-colors"
            >
              Back to Home
            </a>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-[580px] mx-auto px-6 py-20 md:py-28">
          <p className="text-[12px] font-semibold text-gray-400 uppercase tracking-widest mb-3">
            Application
          </p>
          <h1 className="text-[30px] md:text-[40px] font-bold text-black leading-[1.1] tracking-tight">
            Apply to Novpreneur
          </h1>
          <p className="mt-4 text-[15px] text-gray-500 leading-relaxed">
            This is not open enrollment. We filter for people who are ready to
            execute — not learn. If you&apos;re looking for courses, motivation,
            or hand-holding, look elsewhere.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-[12px] font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                Full Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                required
                value={form.fullName}
                onChange={(e) => update("fullName", e.target.value)}
                className="w-full h-10 px-3 text-[14px] border border-gray-200 rounded-[4px] focus:outline-none focus:border-gray-400 bg-gray-50"
                placeholder="Your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-[12px] font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className="w-full h-10 px-3 text-[14px] border border-gray-200 rounded-[4px] focus:outline-none focus:border-gray-400 bg-gray-50"
                placeholder="you@example.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-[12px] font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                Phone Number
              </label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                className="w-full h-10 px-3 text-[14px] border border-gray-200 rounded-[4px] focus:outline-none focus:border-gray-400 bg-gray-50"
                placeholder="+91 99999 99999"
              />
            </div>

            {/* Current Status */}
            <div>
              <label className="block text-[12px] font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                Current Status
              </label>
              <select
                value={form.currentStatus}
                onChange={(e) => update("currentStatus", e.target.value)}
                className="w-full h-10 px-3 text-[14px] border border-gray-200 rounded-[4px] focus:outline-none focus:border-gray-400 bg-gray-50"
              >
                <option value="">Select...</option>
                <option value="student">Student</option>
                <option value="recent-grad">Recent Graduate</option>
                <option value="working">Working Professional</option>
                <option value="founder">Already a Founder</option>
              </select>
            </div>

            {/* College */}
            <div>
              <label className="block text-[12px] font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                College / University
              </label>
              <input
                type="text"
                value={form.college}
                onChange={(e) => update("college", e.target.value)}
                className="w-full h-10 px-3 text-[14px] border border-gray-200 rounded-[4px] focus:outline-none focus:border-gray-400 bg-gray-50"
                placeholder="Your institution"
              />
            </div>

            {/* LinkedIn */}
            <div>
              <label className="block text-[12px] font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                LinkedIn Profile
              </label>
              <input
                type="url"
                value={form.linkedIn}
                onChange={(e) => update("linkedIn", e.target.value)}
                className="w-full h-10 px-3 text-[14px] border border-gray-200 rounded-[4px] focus:outline-none focus:border-gray-400 bg-gray-50"
                placeholder="https://linkedin.com/in/yourname"
              />
            </div>

            {/* Portfolio / Link */}
            <div>
              <label className="block text-[12px] font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                Link to anything you&apos;ve built
              </label>
              <input
                type="url"
                value={form.portfolio}
                onChange={(e) => update("portfolio", e.target.value)}
                className="w-full h-10 px-3 text-[14px] border border-gray-200 rounded-[4px] focus:outline-none focus:border-gray-400 bg-gray-50"
                placeholder="GitHub, portfolio, product URL, etc."
              />
            </div>

            {/* Why Novpreneur */}
            <div>
              <label className="block text-[12px] font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                Why Novpreneur? <span className="text-red-400">*</span>
              </label>
              <textarea
                required
                rows={4}
                value={form.whyNovpreneur}
                onChange={(e) => update("whyNovpreneur", e.target.value)}
                className="w-full px-3 py-2 text-[14px] border border-gray-200 rounded-[4px] focus:outline-none focus:border-gray-400 bg-gray-50 resize-none"
                placeholder="Be specific. What have you tried? What failed? Why do you think a system — not a course — is what you need?"
              />
            </div>

            {/* What have you built */}
            <div>
              <label className="block text-[12px] font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                What have you built or shipped?
              </label>
              <textarea
                rows={3}
                value={form.whatBuilt}
                onChange={(e) => update("whatBuilt", e.target.value)}
                className="w-full px-3 py-2 text-[14px] border border-gray-200 rounded-[4px] focus:outline-none focus:border-gray-400 bg-gray-50 resize-none"
                placeholder="Products, projects, side hustles — anything you've actually shipped. 'Nothing yet' is a valid answer."
              />
            </div>

            {error && (
              <p className="text-[13px] text-red-500 font-medium">{error}</p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full h-11 text-[14px] font-semibold text-white bg-[#4A9FE5] rounded-[4px] hover:bg-[#3B8DD6] transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            >
              {submitting ? "Submitting..." : "Submit Application"}
            </button>

            <p className="text-[12px] text-gray-400 text-center mt-4">
              Applications are reviewed within 72 hours. Not everyone gets in.
            </p>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
