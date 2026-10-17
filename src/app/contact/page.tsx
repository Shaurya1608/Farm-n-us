"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Send, CheckCircle2, Sprout } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    location: "",
    hasLand: "yes",
    area: "",
    growingGoal: "",
    serviceNeeded: "Build + Manage",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#EDF5EE]">
      <Header />
      <main className="flex-grow pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center my-10">
            <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold">
              Let&apos;s Grow
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#141815] mt-2">
              Have land? Have an idea? <br />
              <span className="text-emerald-800 font-light italic">
                Let&apos;s see what it can grow.
              </span>
            </h1>
            <p className="mt-4 text-zinc-600 text-base sm:text-lg">
              Start a conversation with our field team. We&apos;ll help turn your intent into a working farm.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-zinc-200/80 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-serif text-[#141815]">
                  Thank You, {formData.name || "Friend"}!
                </h3>
                <p className="text-zinc-600 text-sm max-w-md mx-auto">
                  We have received your details. One of our farm development specialists will reach out to discuss your land and goals.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-full bg-[#1E2522] text-white text-xs font-bold uppercase tracking-wider hover:bg-black transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 outline-none text-sm transition-all bg-zinc-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                      Phone / Email *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. +91 98765 43210 or email"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 outline-none text-sm transition-all bg-zinc-50/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                      Land Location
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Maharashtra, Karnataka, Punjab..."
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 outline-none text-sm transition-all bg-zinc-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                      Do You Have Land?
                    </label>
                    <select
                      value={formData.hasLand}
                      onChange={(e) => setFormData({ ...formData, hasLand: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 outline-none text-sm transition-all bg-zinc-50/50"
                    >
                      <option value="yes">Yes, I own land</option>
                      <option value="looking">Looking to acquire land</option>
                      <option value="family">Family land to develop</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                      Approximate Land Area
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 5 Acres, 20 Acres, 50 Acres..."
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 outline-none text-sm transition-all bg-zinc-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                      Preferred Service Model
                    </label>
                    <select
                      value={formData.serviceNeeded}
                      onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 outline-none text-sm transition-all bg-zinc-50/50"
                    >
                      <option value="Build">BUILD — Turnkey Development</option>
                      <option value="Build + Manage">BUILD + MANAGE — Managed Partnership</option>
                      <option value="Support">SUPPORT — Advisory & Resources</option>
                      <option value="Unsure">Unsure — Need Guidance</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                    What would you like to grow or build?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us a little about your vision (e.g. Mango orchard, organic vegetable farm, teak trees, weekend retreat farm)..."
                    value={formData.growingGoal}
                    onChange={(e) => setFormData({ ...formData, growingGoal: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 outline-none text-sm transition-all bg-zinc-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                    How can we help?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="What are you hoping to achieve? Any specific challenges or goals you'd like to share..."
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 outline-none text-sm transition-all bg-zinc-50/50"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-8 rounded-2xl bg-[#162E20] hover:bg-[#2D5A38] text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all"
                >
                  <Sprout className="w-4 h-4 text-[#A8D5A2]" />
                  <span>Start Conversation</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
