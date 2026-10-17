"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function FinalCTA() {
  return (
    <section className="w-full bg-[#FFFFFF] py-12 sm:py-20 border-t border-neutral-100">
      <div className="max-w-[1560px] mx-auto px-4 sm:px-10 lg:px-12 xl:px-14">
        <ScrollReveal
          direction="up"
          distance={36}
          duration={800}
          className="relative rounded-3xl bg-[#356E26] text-white p-6 sm:p-14 lg:p-18 overflow-hidden shadow-xl"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <span className="text-[12px] sm:text-[13px] font-extrabold tracking-wider text-emerald-200 uppercase mb-3 block">
              #09 — FINAL INVITATION
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold tracking-[-0.03em] leading-[1.08] font-sans text-white">
              Have land? Have an idea? <br />
              <span className="text-emerald-200">Let&apos;s see what it can grow.</span>
            </h2>

            <p className="mt-4 sm:mt-5 text-white/90 text-sm sm:text-base leading-relaxed">
              You don&apos;t need to have everything figured out. Tell us what you&apos;re thinking.
              We&apos;ll explore what might be possible together.
            </p>

            <div className="mt-8 sm:mt-9 flex flex-wrap items-center gap-3.5">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-neutral-100 text-[#2D6623] text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-95 group"
              >
                <span>Start a Conversation</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                href="/grow-with-us"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/15 hover:bg-white/20 text-white text-xs font-semibold tracking-wide transition-colors"
              >
                <span>Explore What We Do</span>
              </Link>
            </div>
          </div>

        </ScrollReveal>
      </div>
    </section>
  );
}
