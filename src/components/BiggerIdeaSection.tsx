"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function BiggerIdeaSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-12 sm:py-20 border-t border-neutral-100">
      <div className="max-w-[1560px] mx-auto px-4 sm:px-10 lg:px-12 xl:px-14">
        
        {/* Container */}
        <ScrollReveal
          direction="up"
          distance={36}
          duration={800}
          className="bg-[#FAFCF8] rounded-3xl p-6 sm:p-14 lg:p-16 border border-neutral-100 shadow-[0_4px_28px_rgba(0,0,0,0.02)] text-center max-w-4xl mx-auto relative overflow-hidden"
        >
          {/* Tag */}
          <span className="inline-flex items-center gap-1.5 text-[12px] sm:text-[13px] font-extrabold tracking-wider text-[#111812] uppercase mb-3">
            #07 — THE BIGGER IDEA
          </span>

          {/* Headline in Outfit Bold Sans (From Brief Section 07) */}
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#111812] tracking-[-0.03em] leading-[1.1] font-sans">
            Farming brings us closer <br />
            <span className="text-[#2D7324]">to the things that matter.</span>
          </h2>

          {/* Narrative (From Brief Section 07) */}
          <p className="mt-5 text-[#525B53] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            The food we eat. The land we depend on. The people who grow our food.
            Agriculture is more than a profession. It connects people, nature, livelihoods, and everyday life.
          </p>

          <p className="mt-3 text-[#6B7280] text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
            We believe land should have the opportunity to fulfil its potential, farmers should have better ways to grow and reach markets, and more people should be able to participate in agriculture.
          </p>

          {/* CTA */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link
              href="/our-story"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#2D7324] hover:bg-[#25631D] text-white text-xs font-semibold tracking-wide transition-all shadow-xs active:scale-95"
            >
              <span>Discover Our Story</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

        </ScrollReveal>

      </div>
    </section>
  );
}
