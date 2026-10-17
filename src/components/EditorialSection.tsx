"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function EditorialSection() {
  const tags = ["Organic Farming", "Precision Agriculture", "Sustainable Practices"];

  const photos = [
    {
      src: "/images/editorial/robot.jpg",
      alt: "Autonomous agricultural technology in the field",
    },
    {
      src: "/images/editorial/planting.jpg",
      alt: "Farmer planting fresh produce seedlings in fertile soil",
    },
    {
      src: "/images/editorial/harvest.jpg",
      alt: "Fresh harvest of organic vegetables",
    },
    {
      src: "/images/editorial/team.jpg",
      alt: "Smiling team of sustainable farming experts",
    },
  ];

  return (
    <section className="w-full bg-[#EDF5EE] text-[#111813] py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-5 flex flex-col justify-between self-stretch">
            {/* Top Info: Year & Tags */}
            <div>
              <span className="text-2xl sm:text-3xl font-serif font-semibold text-[#111813] block mb-5 tracking-tight">
                2025
              </span>

              {/* Tags row with polished styling */}
              <div className="flex flex-wrap items-center gap-2.5">
                {tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-full border border-[#111813]/10 bg-white/60 backdrop-blur-sm text-xs font-medium text-zinc-700 hover:bg-white hover:border-[#111813]/25 transition-all shadow-sm cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Content: Partner CTA */}
            <div className="mt-16 lg:mt-32 pt-8 border-t border-[#111813]/10">
              <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-serif font-semibold text-[#111813] tracking-tight leading-[1.2]">
                Partner For A Brighter Harvest.
              </h2>
              <p className="mt-3.5 text-xs sm:text-sm text-zinc-600 leading-relaxed max-w-sm">
                Join Our Network To Access Advanced Resources, Expert Insights, And Sustainable Farming Solutions.
              </p>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#111813] text-white text-xs font-semibold hover:bg-[#203D27] transition-all duration-300 shadow-md group"
                >
                  <span>Contact Our Team</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Editorial Statement matching hero serif typography */}
            <p className="text-2xl sm:text-3xl lg:text-[2.1rem] font-serif font-semibold text-[#111813] leading-[1.25] tracking-tight mb-8 sm:mb-10">
              Honoring The Wisdom Of Generations, We Integrate Cutting-Edge Technology To Cultivate Smarter, Greener, And More Abundant Harvests For The Future.
            </p>

            {/* 2x2 Photo Grid */}
            <div className="grid grid-cols-2 gap-3.5 sm:gap-4 lg:gap-5">
              {photos.map((photo, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-zinc-200/50 shadow-sm border border-[#111813]/5"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
