"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function StatsBar() {
  const stats = [
    { number: "5+", label: "Productive Farms Developed" },
    { number: "200+", label: "Acres Under Micro-Irrigation" },
    { number: "80,000+", label: "Native Trees Planted" },
    { number: "2,500+", label: "Farmer Families Reached" },
  ];

  return (
    <section className="w-full bg-[#FFFFFF] border-y border-neutral-100/90 py-6 sm:py-10">
      <div className="max-w-[1560px] mx-auto px-4 sm:px-10 lg:px-12 xl:px-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-0 md:divide-x divide-neutral-100">
          {stats.map((stat, idx) => (
            <ScrollReveal
              key={idx}
              delay={idx * 100}
              direction="up"
              distance={20}
              className="flex flex-col items-center text-center px-2 sm:px-4 md:px-8 group"
            >
              <span className="text-[26px] sm:text-4xl lg:text-[2.85rem] font-sans font-extrabold text-[#111812] tracking-[-0.03em] leading-none group-hover:text-[#2D7324] transition-colors duration-300">
                <AnimatedCounter value={stat.number} duration={1600} />
              </span>
              <span className="mt-1.5 sm:mt-2 text-[11px] sm:text-[13.5px] text-neutral-500 font-medium tracking-normal leading-tight">
                {stat.label}
              </span>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
