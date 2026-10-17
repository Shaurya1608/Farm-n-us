"use client";

import Link from "next/link";
import { ArrowUpRight, Trees, Compass, Wrench, Apple } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ProblemSection() {
  const pathways = [
    {
      icon: Trees,
      tag: "Landowners",
      title: "I have land to put to better use.",
      desc: "Turn unused or underutilised acreage into a living, high-value productive farm with expert planning.",
      cta: "Explore Farm Development",
      href: "/grow-with-us#build",
    },
    {
      icon: Compass,
      tag: "Aspiring Farmers",
      title: "I want to build a farm of my own.",
      desc: "Start a managed farm without the burden of handling daily manual labour and operations yourself.",
      cta: "Explore Managed Farming",
      href: "/grow-with-us#build-manage",
    },
    {
      icon: Wrench,
      tag: "Active Farms",
      title: "I already have a farm and need support.",
      desc: "Access specialized agronomists, reliable farm resources, micro-irrigation systems, and skilled manpower.",
      cta: "Explore Farm Support",
      href: "/grow-with-us#support",
    },
    {
      icon: Apple,
      tag: "Food & Markets",
      title: "I'm interested in genuine harvests.",
      desc: "Connect directly with fresh fruit orchards, seasonal vegetables, and transparent harvest journeys.",
      cta: "Explore Our Produce",
      href: "/from-our-farms",
    },
  ];

  return (
    <section className="w-full bg-[#FFFFFF] py-14 sm:py-20 border-t border-neutral-100">
      <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-14">
        
        {/* Section Header */}
        <ScrollReveal direction="up" distance={28} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 sm:mb-14">
          <div className="lg:col-span-7">
            <span className="text-[12px] sm:text-[13px] font-extrabold tracking-wider text-[#111812] uppercase mb-2.5 block">
              #03 — HELPING VISITORS SEE THEMSELVES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#111812] tracking-[-0.03em] leading-[1.08] font-sans">
              Wherever you begin, <br />
              <span className="text-[#2D7324]">there is room to grow.</span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[#525B53] text-sm sm:text-base leading-relaxed">
              Perhaps you have land sitting unused, or have always wanted a farm but never knew where to begin.
              You don&apos;t need to have everything figured out before you start.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Interactive Pathways with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pathways.map((p, idx) => {
            const IconComponent = p.icon;
            return (
              <ScrollReveal
                key={idx}
                delay={idx * 100}
                direction="up"
                distance={30}
              >
                <Link
                  href={p.href}
                  className="bg-white rounded-2xl p-6 border border-neutral-150 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-[#2D7324]/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer h-full"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-xl bg-[#F2F5F2] text-[#2D7324] flex items-center justify-center group-hover:bg-[#2D7324] group-hover:text-white transition-colors duration-300">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[10.5px] font-bold uppercase tracking-wider text-neutral-400">
                        {p.tag}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#111812] leading-snug group-hover:text-[#2D7324] transition-colors">
                      {p.title}
                    </h3>

                    <p className="text-xs text-[#6B7280] mt-2.5 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-[#2D7324]">
                    <span>{p.cta}</span>
                    <div className="w-6 h-6 rounded-full bg-[#F2F5F2] flex items-center justify-center group-hover:bg-[#2D7324] group-hover:text-white transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
