"use client";

import Link from "next/link";
import { ArrowUpRight, Trees, Users, HeartHandshake, ShieldCheck } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function EcoActionSection() {
  const pillars = [
    {
      icon: Trees,
      stat: "80,000+",
      title: "Native Trees Planted",
      desc: "Restoring biodiversity, windbreaks, and long-term soil carbon across productive acreage.",
    },
    {
      icon: Users,
      stat: "2,500+",
      title: "Farmer Families Supported",
      desc: "Connecting rural farming households with steady livelihoods, resources, and fair markets.",
    },
    {
      icon: HeartHandshake,
      stat: "₹15M+",
      title: "Economic Value Created",
      desc: "Direct value generated through crop aggregation, yield optimization, and market linkages.",
    },
    {
      icon: ShieldCheck,
      stat: "100%",
      title: "Regenerative Soil Care",
      desc: "Nourishing living microorganisms, reducing chemical reliance, and preserving ground water.",
    },
  ];

  return (
    <section className="w-full bg-[#FFFFFF] py-16 sm:py-20 border-t border-neutral-100">
      <div className="max-w-[1560px] mx-auto px-4 sm:px-10 lg:px-12 xl:px-14">
        
        {/* Main Banner Container */}
        <ScrollReveal
          direction="up"
          distance={36}
          duration={800}
          className="bg-[#356E26] rounded-3xl p-5 sm:p-10 lg:p-16 text-white relative overflow-hidden shadow-xl"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="max-w-2xl relative z-10">
            <span className="text-[12px] sm:text-[13px] font-extrabold tracking-wider uppercase text-emerald-200 mb-2.5 block">
              #GROWING TOGETHER
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-[-0.03em] leading-[1.08] font-sans text-white">
              Agriculture is not built <br />
              <span className="text-emerald-200">by land alone.</span>
            </h2>
            <p className="mt-4 text-white/85 text-sm sm:text-base leading-relaxed">
              It grows through the people who work it, the knowledge they share, and the opportunities they create together. When people grow together, agriculture can go further.
            </p>
          </div>

          {/* 4 Impact Pillars with Staggered Reveal */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-10 sm:mt-12 relative z-10">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <ScrollReveal
                  key={idx}
                  delay={100 + idx * 80}
                  direction="up"
                  distance={24}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-white/15 hover:bg-white/15 transition-all flex flex-col justify-between hover:-translate-y-1"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
                      {p.stat}
                    </div>
                    <h3 className="text-sm font-bold text-emerald-100 mt-1">
                      {p.title}
                    </h3>
                    <p className="text-xs text-white/80 mt-2 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* CTA Row */}
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-white/15 relative z-10">
            <span className="text-xs sm:text-[13px] text-white/80 font-medium">
              Want to collaborate on community agriculture or farm development?
            </span>
            <Link
              href="/our-story"
              className="inline-flex items-center gap-2 bg-white text-[#2D6623] hover:bg-neutral-100 text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-all shadow-md active:scale-95"
            >
              <span>Read Our Full Story</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </ScrollReveal>

      </div>
    </section>
  );
}
