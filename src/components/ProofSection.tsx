"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function ProofSection() {
  const metrics = [
    { number: "5+", label: "Farms Developed" },
    { number: "200+", label: "Acres Under Micro-Irrigation" },
    { number: "80,000+", label: "Native Trees Planted" },
    { number: "₹15M+", label: "Economic Value Generated" },
    { number: "2,500+", label: "Farmer Families Reached" },
    { number: "100%", label: "Living, Working Farms" },
  ];

  const gallery = [
    {
      title: "Orchard Development",
      location: "Fruit Groves & Plantation",
      img: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Micro-Irrigation Systems",
      location: "Precision Water Management",
      img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Harvests & Farm Livelihoods",
      location: "Real Work, Real Seasons",
      img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1000",
    },
  ];

  return (
    <section className="w-full bg-[#FFFFFF] py-14 sm:py-20 border-t border-neutral-100">
      <div className="max-w-[1560px] mx-auto px-4 sm:px-10 lg:px-12 xl:px-14">
        
        {/* Section Header */}
        <ScrollReveal direction="up" distance={28} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div className="max-w-2xl">
            <span className="text-[12px] sm:text-[13px] font-extrabold tracking-wider text-[#111812] uppercase mb-2.5 block">
              #05 — PROOF IN THE FIELD
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#111812] tracking-[-0.03em] leading-[1.08] font-sans">
              A good idea deserves to grow <br />
              <span className="text-[#2D7324]">into something real.</span>
            </h2>
            <p className="mt-3 text-[#525B53] text-sm sm:text-base leading-relaxed">
              We&apos;ve already been in the field, learning what it takes to turn land into working farms.
              Different places. Different purposes. Real lessons.
            </p>
          </div>
          <Link
            href="/grow-with-us"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2D7324] text-white text-xs font-semibold tracking-wide hover:bg-[#25631D] transition-all shadow-xs active:scale-95 shrink-0"
          >
            <span>See Our Farms</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>

        {/* Big Numbers Grid with Staggered Count-Up */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-14">
          {metrics.map((m, idx) => (
            <ScrollReveal
              key={idx}
              delay={idx * 75}
              direction="up"
              distance={20}
              className="p-3.5 sm:p-5 rounded-2xl bg-[#FAFCF8] border border-neutral-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col justify-center group hover:border-[#2D7324]/40 hover:-translate-y-1 transition-all"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111812] tracking-tight group-hover:text-[#2D7324] transition-colors font-sans">
                <AnimatedCounter value={m.number} duration={1600} />
              </div>
              <div className="text-[11.5px] font-medium text-[#6B7280] mt-1.5 leading-snug">
                {m.label}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Visual Gallery with Staggered Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {gallery.map((item, idx) => (
            <ScrollReveal
              key={idx}
              delay={idx * 120}
              direction="up"
              distance={32}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-neutral-100 shadow-sm border border-neutral-100"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="text-[10.5px] font-bold uppercase tracking-wider text-emerald-300">
                  {item.location}
                </span>
                <h3 className="text-lg font-bold font-sans mt-1">
                  {item.title}
                </h3>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Note */}
        <ScrollReveal direction="up" distance={16} delay={200} className="mt-10 text-center max-w-xl mx-auto">
          <p className="text-xs sm:text-[13px] text-[#525B53] font-medium">
            &ldquo;Every farm has its own story, and no two pieces of land grow in exactly the same way.&rdquo;
          </p>
        </ScrollReveal>

      </div>
    </section>
  );
}
