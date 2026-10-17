"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowUpRight, ArrowRight, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroSection() {
  const pathways = [
    {
      index: "01",
      tag: "Landowners",
      question: "I have land to put to better use.",
      description: "Turn unused or underutilised acreage into a living, high-value productive farm.",
      cta: "Explore Farm Development",
      href: "/grow-with-us#build",
      modelBadge: "Model 01 · Build",
    },
    {
      index: "02",
      tag: "Aspiring Farmers",
      question: "I want to build a farm of my own.",
      description: "Start a managed farm without the burden of handling daily manual labour and operations yourself.",
      cta: "Explore Managed Farming",
      href: "/grow-with-us#build-manage",
      modelBadge: "Model 02 · Build + Manage",
    },
    {
      index: "03",
      tag: "Active Land Managers",
      question: "I already have a farm and need support.",
      description: "Access specialized agronomists, reliable farm resources, micro-irrigation systems, and skilled manpower.",
      cta: "Explore Farm Support",
      href: "/grow-with-us#support",
      modelBadge: "Model 03 · Support",
    },
    {
      index: "04",
      tag: "Food & Markets",
      question: "I'm interested in good produce and where it comes from.",
      description: "Connect directly with fresh fruit orchards, seasonal vegetables, and transparent harvest journeys.",
      cta: "Explore Our Produce",
      href: "/from-our-farms",
      modelBadge: "Fresh Harvests",
    },
  ];

  const [pathwayIndex, setPathwayIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setPathwayIndex((prev) => (prev + 1) % pathways.length);
        setIsFading(false);
      }, 350);
    }, 4200);

    return () => clearInterval(interval);
  }, [isPaused, pathways.length]);

  const handleSelectPathway = (idx: number) => {
    if (idx === pathwayIndex) return;
    setIsFading(true);
    setTimeout(() => {
      setPathwayIndex(idx);
      setIsFading(false);
    }, 180);
  };

  const handleNextPathway = () => {
    setIsFading(true);
    setTimeout(() => {
      setPathwayIndex((prev) => (prev + 1) % pathways.length);
      setIsFading(false);
    }, 180);
  };

  const handlePrevPathway = () => {
    setIsFading(true);
    setTimeout(() => {
      setPathwayIndex((prev) => (prev - 1 + pathways.length) % pathways.length);
      setIsFading(false);
    }, 180);
  };

  const currentPathway = pathways[pathwayIndex];
  return (
    <section className="relative w-full bg-[#FFFFFF] overflow-hidden select-none">
      
      {/* ── MAIN CONTENT CONTAINER ── */}
      <div className="max-w-[1560px] mx-auto px-4 sm:px-10 lg:px-12 xl:px-14 pt-2 sm:pt-4 lg:pt-5 pb-8 sm:pb-12 lg:pb-14">
        
        {/* ── TOP SECTION: HERO TEXT & HANGING PLANT GRAPHIC ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 items-center min-h-[auto] lg:min-h-[380px]">
          
          {/* LEFT: TEXT HEADLINE & CTAS */}
          <div className="lg:col-span-6 z-10 flex flex-col items-start pr-0 lg:pr-2 order-1">
            
            {/* Tag / Category Badge (From Brief: Brand essence) */}
            <span className="inline-flex items-center gap-1.5 text-[11.5px] sm:text-[13px] font-extrabold tracking-wider text-[#111812] uppercase mb-2 sm:mb-3">
              <span>#MAKING FARMING POSSIBLE</span>
            </span>

            {/* Giant Display Headline (From Brief 01: Turn land into life. Bring goodness to the table.) */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[66px] xl:text-[72px] font-extrabold text-[#111812] tracking-[-0.035em] leading-[1.08] sm:leading-[1.05] font-sans">
              Turn Land Into <br />
              <span className="text-[#2D7324]">Living</span> Farms
            </h1>

            {/* Subtitle / Description (Directly from Brief 01) */}
            <p className="mt-3 sm:mt-4 text-[#525B53] text-sm sm:text-base leading-relaxed max-w-[440px]">
              We help people turn underutilised land into productive farms — bringing together
              the knowledge, people and resources to grow good food.
            </p>

            {/* CTA Buttons (From Brief 01: Explore What We Do → / Have land or an idea? Let's talk →) */}
            <div className="mt-5 sm:mt-7 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <Link
                href="/grow-with-us"
                className="inline-flex items-center gap-2 bg-[#FF8A3D] hover:bg-[#F57B23] text-white font-semibold text-xs sm:text-[14.5px] px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl shadow-[0_4px_14px_rgba(255,138,61,0.25)] hover:shadow-[0_6px_20px_rgba(255,138,61,0.35)] transition-all duration-200 cursor-pointer active:scale-95"
              >
                <span>Explore What We Do</span>
                <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 bg-[#F2F5F2] hover:bg-[#E5ECE4] text-[#1D2B1E] font-semibold text-xs sm:text-[14.5px] px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl transition-all duration-200 cursor-pointer active:scale-95"
              >
                <span>Have Land? Let&apos;s Talk</span>
                <ArrowUpRight className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#2D7324]" />
              </Link>
            </div>
          </div>

          {/* RIGHT: SUSPENDED PLANT VISUAL + CIRCULAR ORBIT + 5+ FARMS BADGE */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end min-h-[240px] sm:min-h-[320px] lg:min-h-[390px] order-2 mt-2 sm:mt-0">
            
            {/* Cluster Wrapper shifted slightly */}
            <div className="relative flex items-center justify-center lg:translate-x-3 xl:translate-x-6 w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px]">
            <div className="absolute w-[240px] h-[240px] sm:w-[340px] sm:h-[340px] lg:w-[390px] lg:h-[390px] rounded-full border border-neutral-200/90 pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-subtle">
              
              {/* Orbit Node 1: Soil & Seed (~10:30 o'clock) */}
              <div
                className="absolute w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white shadow-md border border-neutral-100 flex items-center justify-center text-[#2D7324] -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-110"
                style={{ top: "18%", left: "12%" }}
                title="Soil & Seed"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3 4 3c3.28 0 6-2.5 11-8.5z" />
                </svg>
              </div>

              {/* Orbit Node 2: Cultivation & Growth (~1:30 o'clock) */}
              <div
                className="absolute w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white shadow-md border border-neutral-100 flex items-center justify-center text-[#2D7324] -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-110"
                style={{ top: "18%", left: "91%" }}
                title="Living Cultivation"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2a10 10 0 0 0-1.8 19.84V16a4 4 0 0 1-4-4H4a8 8 0 0 1 8-8m0 0a8 8 0 0 1 8 8h-2.2a4 4 0 0 1-4 4v5.84A10 10 0 0 0 12 2Z" />
                </svg>
              </div>

              {/* Orbit Node 3: Real Harvest (~5:00 o'clock) */}
              <div
                className="absolute w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white shadow-md border border-neutral-100 flex items-center justify-center text-[#2D7324] -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-110"
                style={{ top: "84%", left: "86%" }}
                title="Fresh Harvest"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 19a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2l1-9h12l1 9ZM12 3a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4Z" />
                </svg>
              </div>
            </div>

            {/* Suspended Thriving Plant Visual with Gentle Float */}
            <div className="relative z-10 flex flex-col items-center -mt-6 sm:-mt-8 lg:-mt-10 animate-float">
              <img
                src="/images/inplant/hanging-plant.png"
                alt="Thriving Living Plantation Foliage"
                className="w-[210px] sm:w-[320px] lg:w-[360px] xl:w-[380px] h-auto object-contain select-none pointer-events-none drop-shadow-sm transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>

            {/* Frosted Glass Floating Badge: "5+ Farms Developed" (From Brief Section 05: Proof) */}
            <div className="absolute left-1 sm:left-1 lg:left-[-16px] top-[48%] -translate-y-1/2 z-20 bg-white/85 backdrop-blur-md rounded-2xl p-2 sm:p-2.5 lg:p-3 shadow-[0_12px_32px_rgba(0,0,0,0.06)] border border-white/90 flex items-center gap-2.5 sm:gap-3 max-w-[215px] sm:max-w-[260px] transition-transform duration-300 hover:scale-105">
              
              {/* Badge Icon: Green Laurel Wreath with "5+" */}
              <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-neutral-100/90 flex items-center justify-center text-[#2D7324] shrink-0">
                <svg
                  className="w-7 h-7"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Left Wreath Branch */}
                  <path
                    d="M13.5 28C9.5 24.5 8 18 9 10"
                    stroke="#2D7324"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path d="M9 11C7 9.5 6 12 7.5 13C9 14 10 13 9 11Z" fill="#2D7324" />
                  <path d="M8 15.5C6 14.5 5 17 6.5 18C8 19 9 17.5 8 15.5Z" fill="#2D7324" />
                  <path d="M8.5 20.5C6.5 20 6 22.5 7.5 23.5C9 24.5 9.5 22.5 8.5 20.5Z" fill="#2D7324" />
                  <path d="M10.5 25C9 25 9 27.5 10.5 28C12 28.5 12 26.5 10.5 25Z" fill="#2D7324" />

                  {/* Right Wreath Branch */}
                  <path
                    d="M22.5 28C26.5 24.5 28 18 27 10"
                    stroke="#2D7324"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path d="M27 11C29 9.5 30 12 28.5 13C27 14 26 13 27 11Z" fill="#2D7324" />
                  <path d="M28 15.5C30 14.5 31 17 29.5 18C28 19 27 17.5 28 15.5Z" fill="#2D7324" />
                  <path d="M27.5 20.5C29.5 20 30 22.5 28.5 23.5C27 24.5 26.5 22.5 27.5 20.5Z" fill="#2D7324" />
                  <path d="M25.5 25C27 25 27 27.5 25.5 28C24 28.5 24 26.5 25.5 25Z" fill="#2D7324" />

                  {/* Verified 5+ in center */}
                  <text
                    x="18"
                    y="22.5"
                    textAnchor="middle"
                    fill="#2D7324"
                    fontSize="11.5"
                    fontWeight="800"
                    fontFamily="sans-serif"
                  >
                    5+
                  </text>
                </svg>
              </div>

              {/* Text Info (From Brief Section 05: Proof) */}
              <div className="flex flex-col">
                <span className="text-[12.5px] font-bold text-[#141814] leading-snug">
                  5+ Farms Developed
                </span>
                <span className="text-[10.5px] text-neutral-500 leading-tight mt-0.5">
                  200+ acres turned productive across regions.
                </span>
              </div>
            </div>

            {/* End Cluster Wrapper */}
            </div>

          </div>
        </div>

        {/* ── BOTTOM SECTION: PATHWAY CARDS ── */}
        <div className="mt-6 sm:mt-10 lg:mt-11 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.85fr_1fr_1fr] gap-4 sm:gap-5 items-stretch" style={{perspective: '1000px'}}>
          
          {/* COMBINED INTERACTIVE BOX: "What brings you here?" with Fading Dynamic Questions */}
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="bg-gradient-to-br from-white via-[#FCFDFC] to-[#F5F8F2] rounded-2xl p-4 sm:p-5 relative shadow-[0_4px_22px_rgba(0,0,0,0.03)] border border-neutral-200/80 hover:border-[#2D7324]/35 hover:shadow-[0_12px_36px_rgba(45,115,36,0.12)] flex flex-col justify-between min-h-[168px] group overflow-hidden transition-all duration-300 sm:col-span-2 lg:col-span-1"
          >
            {/* Background Tall Plant Visual on Right */}
            <div className="w-24 sm:w-28 lg:w-30 h-44 -mt-10 -mb-2 shrink-0 flex items-end pointer-events-none select-none absolute right-1 sm:right-2 bottom-0 z-0 opacity-90 group-hover:scale-105 transition-transform duration-300 hidden md:block">
              <img
                src="/images/inplant/tall-plant.png"
                alt="Living plant aesthetic"
                className="w-full h-full object-contain object-bottom drop-shadow-xs"
              />
            </div>

            {/* Top Bar: Question Header & Interactive Prev/Next Step Controls */}
            <div className="flex items-center justify-between relative z-10">
              <span className="text-xs sm:text-sm font-extrabold text-[#111812] tracking-tight">
                What brings you here?
              </span>

              {/* Prev / Next & Step Indicator Controls */}
              <div className="flex items-center gap-1 bg-neutral-100/90 px-1 py-0.5 rounded-full border border-neutral-200/60 shadow-2xs">
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); handlePrevPathway(); }}
                  aria-label="Previous pathway"
                  className="w-5 h-5 rounded-full hover:bg-white text-neutral-500 hover:text-[#111812] flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-3 h-3" />
                </button>
                <span className="text-[10px] font-bold text-neutral-600 px-1 tracking-wider">
                  <span className="text-[#2D7324] font-black">{currentPathway.index}</span> / 04
                </span>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); handleNextPathway(); }}
                  aria-label="Next pathway"
                  className="w-5 h-5 rounded-full hover:bg-white text-neutral-500 hover:text-[#111812] flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Dynamic Animated Content: Question Fades in & out */}
            <div className="relative z-10 my-2">
              <div
                className={`transition-all duration-300 ease-out ${
                  isFading
                    ? "opacity-0 -translate-y-1 scale-[0.99]"
                    : "opacity-100 translate-y-0 scale-100"
                }`}
              >
                <div className="mb-1.5">
                  <span className="text-[10.5px] font-extrabold uppercase tracking-wider text-[#2D7324]">
                    {currentPathway.tag}
                  </span>
                </div>

                <h4 className="text-[#141814] font-extrabold text-base sm:text-[17.5px] lg:text-[18.5px] leading-snug tracking-tight max-w-full md:max-w-[78%]">
                  {currentPathway.question}
                </h4>

                <p className="text-neutral-500 text-[11px] sm:text-xs leading-relaxed mt-1 max-w-full md:max-w-[78%] line-clamp-2">
                  {currentPathway.description}
                </p>

                <div className="mt-2.5 flex items-center gap-3">
                  <Link
                    href={currentPathway.href}
                    className="inline-flex items-center gap-1.5 bg-[#FF8A3D] hover:bg-[#F57B23] text-white text-xs font-bold px-4 py-1.5 rounded-lg shadow-[0_2px_12px_rgba(255,138,61,0.25)] hover:shadow-[0_4px_18px_rgba(255,138,61,0.38)] hover:-translate-y-0.5 transition-all duration-200 active:scale-95 cursor-pointer group/btn"
                  >
                    <span>{currentPathway.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Progress Bars: Clickable indicators with plant safe-zone */}
            <div className="flex items-center justify-between pt-2 border-t border-neutral-150/70 relative z-10 pr-0 md:pr-28">
              <div className="flex items-center gap-2">
                {pathways.map((p, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectPathway(idx)}
                    aria-label={`Select ${p.tag}`}
                    className="group/indicator flex items-center gap-1.5 transition-all duration-300 cursor-pointer py-1"
                  >
                    <span
                      className={`h-1.5 rounded-full transition-all duration-300 block ${
                        pathwayIndex === idx
                          ? "w-7 bg-[#2D7324] shadow-xs"
                          : "w-2 bg-neutral-200 hover:bg-neutral-300"
                      }`}
                    />
                    {pathwayIndex === idx && (
                      <span className="text-[10px] font-bold text-[#2D7324] hidden sm:inline-block">
                        {p.tag}
                      </span>
                    )}
                  </button>
                ))}
              </div>

              {isPaused ? (
                <span className="text-[9px] uppercase tracking-wider font-extrabold text-[#2D7324] bg-[#EBF4E8] px-2 py-0.5 rounded-full border border-[#2D7324]/15">
                  Paused
                </span>
              ) : (
                <span className="text-[9.5px] uppercase font-bold text-neutral-400 tracking-wider hidden sm:inline-block">
                  Auto-cycling
                </span>
              )}
            </div>
          </div>

          {/* CARD 2: SUPPORT (Farm Support) */}
          <Link
            href="/grow-with-us#support"
            className="bg-white hover:bg-[#356E26] rounded-2xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-neutral-100/90 hover:border-[#356E26] flex items-center justify-between hover:shadow-[0_16px_40px_rgba(45,115,36,0.22)] sm:hover:scale-[1.05] transition-all duration-300 ease-out relative min-h-[140px] sm:min-h-[160px] group cursor-pointer will-change-transform"
          >
            {/* Agronomy Support Plant */}
            <div className="w-22 sm:w-24 h-30 shrink-0 flex items-center justify-center">
              <img
                src="/images/inplant/monstera-vase.png"
                alt="Farm Support & Agronomy"
                className="w-full h-full object-contain drop-shadow-xs select-none transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Info (From Brief 04: Support) */}
            <div className="flex-1 pl-2.5 flex flex-col justify-between h-full py-0.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 group-hover:text-emerald-200 transition-colors duration-300">
                  Model 03
                </span>
                <div className="w-5 h-5 rounded-full bg-neutral-100 group-hover:bg-white/20 flex items-center justify-center text-neutral-500 group-hover:text-white transition-colors duration-300">
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </div>

              <div>
                <h4 className="font-bold text-[#141814] group-hover:text-white text-[13px] sm:text-sm transition-colors duration-300">
                  Farm Support
                </h4>
                <p className="text-neutral-500 group-hover:text-white/75 text-[11px] leading-relaxed mt-0.5 line-clamp-2 transition-colors duration-300">
                  Already farming? Access agronomy expertise, resources &amp; manpower.
                </p>
                <div className="font-semibold text-neutral-700 group-hover:text-emerald-100 text-xs mt-2 transition-colors duration-300">
                  Expert Advisory
                </div>
              </div>
            </div>
          </Link>

          {/* CARD 4: FROM OUR FARMS (Fresh Harvests) */}
          <Link
            href="/from-our-farms"
            className="bg-white hover:bg-[#356E26] rounded-2xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-neutral-100/90 hover:border-[#356E26] flex items-center justify-between hover:shadow-[0_16px_40px_rgba(45,115,36,0.22)] sm:hover:scale-[1.05] transition-all duration-300 ease-out relative min-h-[140px] sm:min-h-[160px] group cursor-pointer will-change-transform"
          >
            {/* Harvest Crop Image */}
            <div className="w-20 sm:w-22 h-30 shrink-0 flex items-center justify-center">
              <img
                src="/images/inplant/hybrid-cactus.png"
                alt="From Our Farms Harvests"
                className="w-full h-full object-contain drop-shadow-xs select-none transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Info (From Brief 06: Mangoes, Guavas, Seasonal Produce) */}
            <div className="flex-1 pl-2 flex flex-col justify-between h-full py-0.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 group-hover:text-emerald-200 transition-colors duration-300">
                  Produce
                </span>
                <div className="w-5 h-5 rounded-full bg-neutral-100 group-hover:bg-white/20 flex items-center justify-center text-neutral-500 group-hover:text-white transition-colors duration-300">
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </div>

              <div>
                <h4 className="font-bold text-[#141814] group-hover:text-white text-[13px] sm:text-sm transition-colors duration-300">
                  From Our Farms
                </h4>
                <p className="text-neutral-500 group-hover:text-white/75 text-[11px] leading-relaxed mt-0.5 line-clamp-2 transition-colors duration-300">
                  Connecting genuine harvests — mangoes, guavas &amp; seasonal crops to market.
                </p>
                <div className="font-semibold text-[#2D7324] group-hover:text-emerald-100 text-xs mt-2 transition-colors duration-300">
                  Fresh Harvests
                </div>
              </div>
            </div>
          </Link>

        </div>

      </div>
    </section>
  );
}
