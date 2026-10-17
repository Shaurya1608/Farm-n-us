"use client";

import Link from "next/link";
import { ArrowUpRight, Droplet, Sprout } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function PartnerSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-12 sm:py-20 border-t border-neutral-100">
      <div className="max-w-[1560px] mx-auto px-4 sm:px-10 lg:px-12 xl:px-14">
        
        {/* Main Card Container with Subtle Off-White Background */}
        <ScrollReveal
          direction="up"
          distance={36}
          duration={800}
          className="bg-[#FAFCF8] rounded-3xl p-5 sm:p-12 lg:p-14 border border-neutral-100 shadow-[0_4px_28px_rgba(0,0,0,0.02)]"
        >
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-10">
            <div>
              <span className="text-[12px] sm:text-[13px] font-extrabold tracking-wider text-[#111812] uppercase mb-2 block">
                #SOLUTIONS SPOTLIGHT
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#111812] tracking-[-0.03em] leading-[1.1] font-sans">
                Precision irrigation &amp; <br className="hidden sm:block" />
                <span className="text-[#2D7324]">living soil architecture.</span>
              </h2>
            </div>

            <Link
              href="/grow-with-us"
              className="inline-flex items-center gap-2 bg-[#2D7324] hover:bg-[#25631D] text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all shadow-xs active:scale-95 shrink-0"
            >
              <span>Explore Methods</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            
            {/* Left Column: Full-Height Real Farm Photo Card */}
            <ScrollReveal
              direction="right"
              distance={28}
              delay={100}
              className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-sm group min-h-[300px]"
            >
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1000"
                alt="Productive farm land with precision irrigation"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-300">
                  Field Practice
                </span>
                <p className="text-sm font-semibold mt-1">
                  Custom drip irrigation installed across 200+ acres of living orchards.
                </p>
              </div>
            </ScrollReveal>

            {/* Right Column: 2 Stacked Value Cards */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-5">
              
              {/* 1. Water Conservation Metric Card */}
              <ScrollReveal
                direction="left"
                distance={28}
                delay={150}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-neutral-100 shadow-[0_2px_16px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#F2F5F2] text-[#2D7324] flex items-center justify-center">
                    <Droplet className="w-5 h-5 fill-current" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                    Resource Stewardship
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111812] tracking-tight font-sans">
                  Up to <AnimatedCounter value="90%" duration={1600} /> Water Savings
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#525B53] leading-relaxed">
                  Through customized root-zone micro-irrigation and mulch management, our farms conserve up to 90% more water compared to flood irrigation — ensuring resilience through dry seasons.
                </p>
              </ScrollReveal>

              {/* 2. Sustainable Land Stewardship Card (From Brief Section 05) */}
              <ScrollReveal
                direction="left"
                distance={28}
                delay={250}
                className="bg-[#356E26] rounded-2xl p-6 sm:p-7 text-white shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2 text-emerald-200">
                    <Sprout className="w-4 h-4" />
                    <span className="text-[10.5px] font-bold uppercase tracking-widest">
                      Our Guiding Ethos
                    </span>
                  </div>
                  <p className="text-sm sm:text-base font-medium leading-relaxed text-white/95">
                    &ldquo;Productive agriculture and responsible stewardship of the land should go hand in hand. Grow today. Leave more growing behind.&rdquo;
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-xs text-emerald-100">
                  <span>Farm &apos;N&apos; Us Sustainability Commitment</span>
                  <span className="font-semibold text-white">80,000+ Native Trees</span>
                </div>
              </ScrollReveal>

            </div>

          </div>

        </ScrollReveal>

      </div>
    </section>
  );
}
