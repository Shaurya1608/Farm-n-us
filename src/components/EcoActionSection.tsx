"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Trees,
  Users,
  TrendingUp,
  ShieldCheck,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function EcoActionSection() {
  const pillars = [
    {
      icon: Trees,
      stat: "80,000+",
      title: "Native Trees Planted",
      badge: "Biodiversity & Carbon",
      desc: "Restoring living biodiversity, establishing natural orchard windbreaks, and locking permanent organic carbon into soil.",
      image: "/images/eco/planting-tree.jpg",
    },
    {
      icon: Users,
      stat: "2,500+",
      title: "Farmer Families Supported",
      badge: "Rural Livelihoods",
      desc: "Connecting rural farming households with steady seasonal livelihoods, scientific inputs, and equitable market access.",
      image: null,
    },
    {
      icon: TrendingUp,
      stat: "₹15M+",
      title: "Economic Value Created",
      badge: "Yield Optimization",
      desc: "Direct economic value generated through produce aggregation, cold-chain logistics, and premium harvest price discovery.",
      image: null,
    },
    {
      icon: ShieldCheck,
      stat: "100%",
      title: "Regenerative Soil Care",
      badge: "Living Ecology",
      desc: "Nourishing billions of beneficial microbes per handful, saving up to 90% water via micro-drip, and eliminating toxic runoff.",
      image: null,
    },
  ];

  return (
    <section className="w-full bg-[#FFFFFF] py-8 sm:py-12 border-t border-neutral-100">
      <div className="max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-10 xl:px-12">
        
        {/* Main Bento Container with Deep Agrarian Forest Palette */}
        <ScrollReveal
          direction="up"
          distance={30}
          duration={700}
          className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0D2213] via-[#14321B] to-[#0A1A0E] text-white p-5 sm:p-7 lg:p-8 xl:p-9 overflow-hidden shadow-[0_20px_50px_rgba(13,34,19,0.22)] border border-emerald-900/50"
        >
          {/* Luminous Ambient Background Glows */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#356E26]/15 rounded-full blur-3xl pointer-events-none" />

          {/* ── TOP SECTION: EDITORIAL HEADER + HUMAN FIELD SPOTLIGHT ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
            
            {/* Left 7 Cols: Headline & Narrative */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-emerald-300 text-[10px] font-bold tracking-widest uppercase mb-2.5 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>#GROWING TOGETHER · COLLECTIVE IMPACT</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-[-0.025em] leading-[1.15] font-sans text-white">
                Agriculture is not built <br />
                <span className="bg-gradient-to-r from-emerald-300 via-emerald-200 to-teal-100 bg-clip-text text-transparent">
                  by land alone.
                </span>
              </h2>

              <p className="mt-2.5 sm:mt-3 text-white/80 text-xs sm:text-sm lg:text-[14px] leading-relaxed max-w-xl font-sans">
                It grows through the people who work it, the knowledge they share, and the opportunities they create together. When people grow together, agriculture can go further.
              </p>
            </div>

            {/* Right 5 Cols: Human Connection Snapshot Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 p-3 sm:p-4 shadow-md group hover:border-emerald-400/40 transition-all duration-300">
                <div className="flex items-center gap-3.5">
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 border border-white/20 shadow-xs">
                    <img
                      src="/images/editorial/team.jpg"
                      alt="Dedicated Farm 'N' Us farm crew"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="text-[9px] font-extrabold uppercase tracking-widest text-emerald-300 block">
                      Field Community
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-white mt-0.5 truncate">
                      Our On-Site Agronomy Crews
                    </h4>
                    <p className="text-[11px] text-white/70 mt-0.5 leading-snug line-clamp-2">
                      Full-time trained cultivators, agronomists, and local farmer cooperatives active across Gumla &amp; regional clusters.
                    </p>
                    <div className="flex items-center gap-1.5 mt-1.5 text-[10px] font-semibold text-emerald-200">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>100% Direct Rural Impact</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* ── 4 IMPACT BENTO CARDS ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 mt-6 sm:mt-7 relative z-10">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              const hasBgImage = !!p.image;

              return (
                <ScrollReveal
                  key={idx}
                  delay={80 + idx * 60}
                  direction="up"
                  distance={20}
                  className="h-full"
                >
                  <div
                    className={`relative rounded-xl sm:rounded-2xl p-4 sm:p-4.5 border transition-all duration-300 flex flex-col justify-between h-full group hover:-translate-y-1 overflow-hidden ${
                      hasBgImage
                        ? "bg-neutral-900 border-white/20 shadow-md"
                        : "bg-white/[0.08] backdrop-blur-xl border-white/15 hover:bg-white/[0.13] hover:border-emerald-400/40 shadow-sm"
                    }`}
                  >
                    {/* Background image for Card 1 (Trees) with rich gradient overlay */}
                    {hasBgImage && (
                      <>
                        <img
                          src={p.image!}
                          alt={p.title}
                          className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A0E] via-[#0A1A0E]/85 to-[#0A1A0E]/60 pointer-events-none" />
                      </>
                    )}

                    <div className="relative z-10 flex flex-col h-full">
                      {/* Top Row: Icon + Badge */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-8 h-8 rounded-lg bg-white/15 backdrop-blur-md text-emerald-300 border border-white/15 flex items-center justify-center shadow-2xs group-hover:scale-105 group-hover:bg-[#2D7324] group-hover:text-white transition-all duration-300">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[9.5px] font-bold uppercase tracking-wider text-emerald-200/90 bg-white/10 px-2 py-0.5 rounded-full border border-white/10">
                          {p.badge}
                        </span>
                      </div>

                      {/* Animated Counter Stat */}
                      <div className="text-2xl sm:text-[28px] font-extrabold text-white font-sans tracking-tight leading-none">
                        <AnimatedCounter value={p.stat} duration={1400} />
                      </div>

                      {/* Title */}
                      <h3 className="text-xs sm:text-[13.5px] font-bold text-emerald-100 mt-1.5 leading-snug">
                        {p.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[11.5px] text-white/75 mt-1.5 leading-relaxed">
                        {p.desc}
                      </p>
                    </div>

                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* ── BOTTOM COLLABORATIVE CTA BAR ── */}
          <div className="mt-6 sm:mt-7 pt-4 sm:pt-5 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-white/15 text-emerald-300 flex items-center justify-center shrink-0 border border-white/15 hidden sm:flex">
                <HeartHandshake className="w-3.5 h-3.5" />
              </div>
              <p className="text-xs text-white/80 font-medium leading-relaxed max-w-xl">
                Looking to collaborate on collective agriculture, agroforestry, or farmer producer community development?
              </p>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto shrink-0">
              <Link
                href="/our-story"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#15341C] hover:bg-neutral-100 text-[11px] font-bold uppercase tracking-wider px-4.5 py-2.5 rounded-xl transition-all shadow-sm active:scale-95 group/btn"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center gap-1 text-[11px] font-bold text-emerald-300 hover:text-white px-3 py-2 rounded-xl hover:bg-white/10 transition-colors"
              >
                <span>Connect With Us</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

        </ScrollReveal>

      </div>
    </section>
  );
}
