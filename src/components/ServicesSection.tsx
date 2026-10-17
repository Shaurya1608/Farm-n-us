"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Hammer,
  Compass,
  Wrench,
  Sparkles,
  Clock,
  ShieldCheck,
  Layers,
  HelpCircle,
  UserCheck,
  Sprout,
  Activity,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<number>(1); // Default to Model 02 (Recommended)

  const models = [
    {
      id: "build",
      number: "01",
      badge: "MODEL 01 · TURNKEY DEVELOPMENT",
      tagline: "Turnkey Setup",
      icon: Hammer,
      title: "BUILD",
      subtitle: "We develop it. You take it forward.",
      description:
        "We turn raw or underutilized land into a fully engineered, productive agricultural asset. From land profiling, contouring, and soil rejuvenation to precision micro-irrigation and sapling plantation — we deliver a living farm ready for your independent management.",
      ownerRole: "Independent Operator (You manage operations after handover)",
      idealFor: "Landowners & investors ready to take full operational control once infrastructure is built.",
      commitment: "One-Time Turnkey Handover (Typically 60–90 days)",
      image:
        "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=1200",
      imageCaption: "Turnkey drip irrigation & precision sapling grid",
      stats: [
        { label: "Handover Horizon", value: "60-90 Days" },
        { label: "Water Architecture", value: "Micro-Drip" },
        { label: "Sapling Survival", value: "98% Target" },
      ],
      features: [
        {
          title: "Land Profiling & Soil Biology Enrichment",
          desc: "Soil testing, organic compost enrichment, land leveling, and biophilic windbreak planning.",
        },
        {
          title: "Precision Micro-Irrigation & Fertigation",
          desc: "Bespoke drip grids, solar or automated pump manifolds, root-zone efficiency design.",
        },
        {
          title: "Sapling Sourcing & High-Density Plantation",
          desc: "Certified climate-resilient cultivars, mother-bed selection, and root-stimulant treatments.",
        },
        {
          title: "Turnkey Handover & Operating Playbook",
          desc: "Complete SOP manuals, seasonal spray calendars, and agronomic management guide.",
        },
      ],
      cta: "Explore Build Model",
      href: "/grow-with-us#build",
      highlight: false,
    },
    {
      id: "build-manage",
      number: "02",
      badge: "MODEL 02 · FULL PARTNERSHIP",
      tagline: "End-to-End Co-Stewardship",
      icon: Compass,
      title: "BUILD + MANAGE",
      subtitle: "We develop it. We manage it. We grow it with you.",
      description:
        "Our flagship partnership model. We handle 100% of farm establishment, daily operations, seasonal labor, agronomic diagnostics, and harvest logistics. You enjoy hassle-free land stewardship and direct harvest revenue while we handle the work.",
      ownerRole: "100% Hands-Off & Passive (Zero daily operational friction)",
      idealFor: "Landowners wanting continuous passive returns, capital appreciation, and living ecological value without daily effort.",
      commitment: "Continuous Multi-Season Partnership (Long-term agreement)",
      image:
        "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=1200",
      imageCaption: "Thriving orchards managed by dedicated Farm 'N' Us crews",
      stats: [
        { label: "Owner Effort", value: "Zero Burden" },
        { label: "Agronomy Visits", value: "Weekly / 24/7" },
        { label: "Harvest Linkage", value: "Direct-to-Market" },
      ],
      features: [
        {
          title: "Complete Land Development & Plantation",
          desc: "Full execution of all earthwork, water manifolds, high-yield saplings, and living soil preparation.",
        },
        {
          title: "Dedicated On-Site Farm Workforce & Supervision",
          desc: "Full daily weeding, pruning, mulch management, and supervised seasonal workforce deployment.",
        },
        {
          title: "Senior Agronomist Oversight & Pest Defense",
          desc: "Regular field diagnostics, leaf analysis, biological pest controls, and organic nutrition schedules.",
        },
        {
          title: "Harvest Logistics & Direct Market Sales",
          desc: "Post-harvest packing, cold-chain transport, and premium price discovery across wholesale & retail channels.",
        },
      ],
      cta: "Explore Managed Farming",
      href: "/grow-with-us#build-manage",
      highlight: true,
      popularBadge: "MOST POPULAR · RECOMMENDED",
    },
    {
      id: "support",
      number: "03",
      badge: "MODEL 03 · ADVISORY & LABOR",
      tagline: "On-Demand AgTech",
      icon: Wrench,
      title: "SUPPORT",
      subtitle: "You manage it. We help you do it well.",
      description:
        "Built for active farm owners who already have land in cultivation but need specialized technical support, dependable farm crews, irrigation servicing, or soil health turnaround to maximize their productivity.",
      ownerRole: "Active Land Manager (You retain steering while we supply horsepower)",
      idealFor: "Existing farm owners needing trusted agronomists, seasonal harvesting labor, or irrigation upgrades.",
      commitment: "Flexible On-Demand / Monthly Advisory Retainer",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200",
      imageCaption: "Field agronomist consultations & micro-irrigation maintenance",
      stats: [
        { label: "Engagement", value: "On-Demand" },
        { label: "Specialist Support", value: "Certified AgTech" },
        { label: "Labor Availability", value: "Seasonal Crews" },
      ],
      features: [
        {
          title: "Scheduled Agronomist Diagnostic Visits",
          desc: "Comprehensive crop health audits, soil nutrient mapping, and corrective organic spray formulas.",
        },
        {
          title: "Vetted & Skilled Farm Labor Deployment",
          desc: "Access reliable manpower for critical windows: planting, canopy pruning, weeding, and mass harvests.",
        },
        {
          title: "Irrigation Audit, Pump Servicing & Upgrades",
          desc: "Pressure testing, dripper descaling, filter backwashing, and automation retrofits.",
        },
        {
          title: "Targeted Organic Bio-Inputs & Nutrients",
          desc: "Delivery of vetted bio-stimulants, vermicompost extracts, and beneficial microbial inoculants.",
        },
      ],
      cta: "Explore Farm Support",
      href: "/grow-with-us#support",
      highlight: false,
    },
  ];

  const currentModel = models[activeTab];

  return (
    <section
      id="services"
      className="relative w-full bg-[#FFFFFF] py-12 sm:py-16 lg:py-20 overflow-hidden border-t border-neutral-150/80"
    >
      {/* Ambient background glows */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[480px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-100/50 via-emerald-50/20 to-transparent pointer-events-none -z-10 blur-3xl opacity-80"
      />

      <div className="max-w-[1560px] mx-auto px-4 sm:px-10 lg:px-12 xl:px-14">
        {/* Section Header */}
        <ScrollReveal direction="up" distance={28} className="text-center max-w-3xl mx-auto mb-7 sm:mb-9">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2F7F0] border border-[#2D7324]/20 text-[#2D7324] text-[10.5px] font-bold tracking-widest uppercase mb-3 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2D7324] animate-pulse" />
            <span>#04 — OUR SOLUTION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#111812] tracking-[-0.03em] leading-[1.08] font-sans">
            Your land.{" "}
            <span className="bg-gradient-to-r from-[#2D7324] via-[#356E26] to-[#1E5218] bg-clip-text text-transparent">
              Your way.
            </span>
          </h2>

          <p className="mt-2.5 text-[#525B53] text-xs sm:text-sm lg:text-[15px] leading-relaxed max-w-2xl mx-auto">
            You bring the idea. We&apos;ll help bring it to life. Choose the partnership tier that matches your commitment.
          </p>

          {/* Quick Credibility Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-4 text-[11.5px] text-[#525B53] font-medium">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F7F9F6] border border-neutral-200/70">
              <ShieldCheck className="w-3 h-3 text-[#2D7324]" />
              <span>Full Soil &amp; Water Feasibility</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F7F9F6] border border-neutral-200/70">
              <Layers className="w-3 h-3 text-[#2D7324]" />
              <span>100% Scalable Infrastructure</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F7F9F6] border border-neutral-200/70">
              <Sparkles className="w-3 h-3 text-[#2D7324]" />
              <span>Zero Agronomic Guesswork</span>
            </span>
          </div>
        </ScrollReveal>

        {/* ── INTERACTIVE MODERN MODEL SELECTOR (TABS) ── */}
        <div className="flex justify-center mb-8 sm:mb-10 px-2">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#F2F6F0] border border-neutral-200/90 shadow-xs overflow-x-auto max-w-full gap-1.5">
            {models.map((m, idx) => {
              const Icon = m.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={m.id}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-2.5 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-[13px] font-bold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-[#1C4818] text-white shadow-md shadow-emerald-950/20 -translate-y-0.5"
                      : "text-neutral-600 hover:text-neutral-900 hover:bg-white/80"
                  }`}
                >
                  <span
                    className={`font-mono text-[10px] font-extrabold px-1.5 py-0.5 rounded-md ${
                      isActive ? "bg-white/20 text-emerald-200" : "bg-neutral-200/70 text-neutral-600"
                    }`}
                  >
                    {m.number}
                  </span>
                  <Icon className={`w-4 h-4 ${isActive ? "text-emerald-300" : "text-[#2D7324]"}`} />
                  <span>{m.title}</span>
                  {m.highlight && (
                    <span
                      className={`text-[9.5px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        isActive
                          ? "bg-emerald-500/30 text-emerald-200 border border-emerald-400/30"
                          : "bg-[#2D7324]/10 text-[#2D7324]"
                      }`}
                    >
                      Popular
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── LARGE FORMAT EDITORIAL SHOWCASE CARD ── */}
        <ScrollReveal direction="up" distance={20} className="w-full">
          <div
            id={currentModel.id}
            className="w-full rounded-[30px] sm:rounded-[36px] bg-white border border-neutral-200/90 shadow-[0_16px_50px_rgba(0,0,0,0.05)] overflow-hidden transition-all duration-500"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              {/* Left Column: Rich Editorial & Deliverables (7 Cols) */}
              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col justify-between">
                <div>
                  {/* Top Badges */}
                  <div className="flex flex-wrap items-center gap-2.5 mb-4">
                    <span className="text-[10.5px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-[#EBF4E8] text-[#2D7324] border border-[#2D7324]/20">
                      {currentModel.badge}
                    </span>
                    {currentModel.highlight && (
                      <span className="text-[10.5px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-[#1C4818] text-white flex items-center gap-1.5 shadow-xs">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
                        <span>Recommended Model</span>
                      </span>
                    )}
                  </div>

                  {/* Main Title & Subtitle */}
                  <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#111812] tracking-tight font-sans leading-[1.08]">
                    {currentModel.title}
                  </h3>
                  <p className="text-base sm:text-[17px] font-semibold text-[#2D7324] mt-2">
                    {currentModel.subtitle}
                  </p>

                  <p className="mt-3 text-[#525B53] text-sm sm:text-[14.5px] leading-relaxed max-w-2xl">
                    {currentModel.description}
                  </p>

                  {/* Role & Timeline Details: Sleek, un-boxed cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-6">
                    <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-[#F6FAF5] border border-[#2D7324]/12">
                      <div className="w-10 h-10 rounded-xl bg-white border border-[#2D7324]/15 flex items-center justify-center shrink-0 text-[#2D7324] shadow-xs">
                        <UserCheck className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#2D7324]/80 block">
                          Your Involvement
                        </span>
                        <p className="text-xs sm:text-[12.5px] font-bold text-[#141814] mt-0.5 leading-snug">
                          {currentModel.ownerRole}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-[#F8FAF7] border border-neutral-200/70">
                      <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200/80 flex items-center justify-center shrink-0 text-neutral-600 shadow-xs">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-400 block">
                          Timeline Commitment
                        </span>
                        <p className="text-xs sm:text-[12.5px] font-bold text-[#141814] mt-0.5 leading-snug">
                          {currentModel.commitment}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Core Deliverables: Open, breathable 2-column cards without truncation */}
                  <div className="my-6">
                    <div className="flex items-center justify-between mb-3.5">
                      <span className="text-[10.5px] font-extrabold uppercase tracking-widest text-neutral-400">
                        Core Included Deliverables
                      </span>
                      <span className="text-[11px] font-semibold text-[#2D7324] bg-[#EBF4E8] px-2.5 py-0.5 rounded-full">
                        Included In Model
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                      {currentModel.features.map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          className="p-3.5 sm:p-4 rounded-xl bg-[#FAFCF9] border border-neutral-200/80 hover:border-[#2D7324]/40 hover:bg-white hover:shadow-xs transition-all duration-200 group/feat flex flex-col justify-start"
                        >
                          <div className="flex items-start gap-2.5">
                            <div className="w-5 h-5 rounded-full bg-[#EBF4E8] group-hover/feat:bg-[#2D7324] text-[#2D7324] group-hover/feat:text-white flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </div>
                            <div>
                              <h5 className="text-[13px] font-bold text-[#141814] leading-snug">
                                {feat.title}
                              </h5>
                              <p className="text-[11.5px] text-[#525B53] mt-1 leading-relaxed">
                                {feat.desc}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom CTA Row: Spacious & balanced */}
                <div className="pt-6 border-t border-neutral-200/80 flex flex-col sm:flex-row items-center gap-4 justify-between mt-auto">
                  <div className="text-xs sm:text-[12.5px] text-[#525B53] flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#EBF4E8] text-[#2D7324] flex items-center justify-center shrink-0">
                      <Sprout className="w-3 h-3" />
                    </div>
                    <span>Complete soil, water &amp; crop feasibility assessment included</span>
                  </div>

                  <Link
                    href={currentModel.href}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#2D7324] hover:bg-[#235c1c] text-white text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow-md transition-all active:scale-95 shrink-0 group/cta"
                  >
                    <span>{currentModel.cta}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Visual Photo & Live Metrics (5 Cols) */}
              <div className="lg:col-span-5 relative bg-neutral-900 overflow-hidden flex flex-col justify-between min-h-[320px] sm:min-h-[400px] lg:min-h-full">
                <img
                  src={currentModel.image}
                  alt={currentModel.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 pointer-events-none" />

                {/* Top Overlay Badge */}
                <div className="relative z-10 p-5 sm:p-6 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-300 bg-black/45 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 shadow-sm">
                    Live Field Standard
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20 shadow-sm">
                    <Activity className="w-4 h-4 text-emerald-300 animate-pulse" />
                  </div>
                </div>

                {/* Bottom Content & Key Metrics Pill */}
                <div className="relative z-10 p-5 sm:p-6 text-white">
                  <p className="text-xs sm:text-[13.5px] font-semibold text-white/95 mb-3 leading-snug drop-shadow-sm">
                    {currentModel.imageCaption}
                  </p>

                  {/* 3 Metric Pills with more breathing room */}
                  <div className="grid grid-cols-3 gap-2.5 p-3.5 rounded-2xl bg-black/40 backdrop-blur-md border border-white/15 shadow-lg">
                    {currentModel.stats.map((s, sIdx) => (
                      <div key={sIdx} className="text-center px-1">
                        <span className="text-xs sm:text-sm font-black text-emerald-300 block tracking-tight">
                          {s.value}
                        </span>
                        <span className="text-[9.5px] uppercase tracking-wider text-white/80 font-semibold block mt-0.5 truncate">
                          {s.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>
        </ScrollReveal>



        {/* ── BOTTOM CONSULTATION BANNER ── */}
        <ScrollReveal direction="up" distance={20} delay={200} className="mt-10 sm:mt-12">
          <div className="rounded-3xl bg-[#F8FAF6] border border-[#2D7324]/15 p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-2xs">
            <div className="flex items-start sm:items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-2xl bg-[#2D7324]/10 text-[#2D7324] flex items-center justify-center shrink-0 hidden sm:flex">
                <HelpCircle className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm sm:text-base font-bold text-[#111812]">
                  Unsure which farming approach fits your land size or water availability?
                </p>
                <p className="text-xs sm:text-sm text-[#525B53] mt-1">
                  We perform customized soil profiling, microclimate analysis, and financial feasibility assessments.
                </p>
              </div>
            </div>

            <Link
              href="/grow-with-us"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2D7324] hover:bg-[#25631D] text-white text-xs font-bold uppercase tracking-wider shrink-0 transition-all shadow-xs hover:shadow-md active:scale-95"
            >
              <span>Schedule Farm Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
