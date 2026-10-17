"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ProduceSection() {
  const produceItems = [
    {
      name: "Fresh Mangoes",
      season: "Summer Harvest",
      img: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=800",
      desc: "Rich, carefully nurtured mango varieties cultivated in living orchards under dedicated care.",
    },
    {
      name: "Guavas & Citrus",
      season: "Year-Round",
      img: "https://images.unsplash.com/photo-1536511157201-526462a49390?auto=format&fit=crop&q=80&w=800",
      desc: "Crisp, nutrient-dense fruits grown with micro-irrigation and zero harmful chemical residues.",
    },
    {
      name: "Seasonal Vegetables",
      season: "Fresh Cycles",
      img: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&q=80&w=800",
      desc: "Responsibly cultivated farm vegetables and root crops connecting harvest directly to households.",
    },
  ];

  return (
    <section className="w-full bg-[#FFFFFF] py-14 sm:py-20 border-t border-neutral-100">
      <div className="max-w-[1560px] mx-auto px-4 sm:px-10 lg:px-12 xl:px-14">
        
        {/* Section Header */}
        <ScrollReveal direction="up" distance={28} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div>
            <span className="text-[12px] sm:text-[13px] font-extrabold tracking-wider text-[#111812] uppercase mb-2.5 block">
              #06 — FROM OUR FARMS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#111812] tracking-[-0.03em] leading-[1.08] font-sans">
              First, something grows. <br />
              <span className="text-[#2D7324]">Then, something good comes from it.</span>
            </h2>
            <p className="mt-3 text-[#525B53] text-sm sm:text-base max-w-2xl leading-relaxed">
              Mangoes. Guavas. Seasonal vegetables. And more. Every harvest has a journey — from the land and people that bring it to life to the tables that enjoy its produce.
            </p>
          </div>
          <Link
            href="/from-our-farms"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2D7324] hover:bg-[#25631D] text-white text-xs font-semibold tracking-wide transition-all shadow-xs active:scale-95 shrink-0"
          >
            <span>Explore Produce Journey</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>

        {/* 3 Produce Cards with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {produceItems.map((item, idx) => (
            <ScrollReveal
              key={idx}
              delay={idx * 120}
              direction="up"
              distance={32}
              className="group rounded-2xl bg-white border border-neutral-100 overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-[#2D7324]/30 hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-full text-[10.5px] font-bold uppercase tracking-wider text-[#111812] shadow-xs">
                  {item.season}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-lg font-bold font-sans text-[#111812] group-hover:text-[#2D7324] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#6B7280] mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-[#2D7324]">
                  <span>Living Land Care</span>
                  <span className="text-neutral-400 font-medium">Field to Table</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
