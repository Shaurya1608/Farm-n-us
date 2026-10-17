"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Sun,
  Droplets,
  Sprout,
  Sparkles,
  HeartHandshake,
  Utensils,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  ArrowUpRight,
  Check,
  Leaf,
  Activity,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function HookSection() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  // slideDir: 'left' = next (content slides in from left→right), 'right' = prev (content slides in from right→left)
  const [slideDir, setSlideDir] = useState<'left' | 'right'>('left');
  const [slideKey, setSlideKey] = useState<number>(0);

  const steps = [
    {
      id: "soil",
      number: "01",
      title: "Soil",
      tagline: "Living Earth & Biology",
      headline: "Everything starts in the dark, fertile depth of living soil.",
      narrative:
        "We don't treat soil as mere dirt. Through organic composting, microbial inoculation, and cover cropping, we engineer biologically active soil that stores 90% more moisture and fuels deep, resilient roots.",
      image:
        "https://images.unsplash.com/photo-1592417817098-8f3d6910985c?auto=format&fit=crop&q=80&w=1200",
      imageCaption: "Regenerative soil biology enriched with organic humus",
      metricLabel: "Soil Vitality",
      metricValue: "10B+ Microbes / Handful",
      perks: [
        "High humus organic enrichment",
        "Microbial mycorrhizae inoculation",
        "Deep root water-holding sponge",
      ],
      icon: Sprout,
      color: "#7A5835",
      accentBg: "bg-[#F7F3EE]",
      accentText: "text-[#7A5835]",
      badgeBg: "bg-[#EFE8DD] text-[#7A5835]",
    },
    {
      id: "seed",
      number: "02",
      title: "Seed",
      tagline: "Genetics & Potential",
      headline: "Resilient varieties selected for natural flavor and vigor.",
      narrative:
        "Great harvests begin with untampered genetic potential. We select native and acclimatized fruit varieties and heirloom saplings that flourish in regional microclimates with natural pest resistance.",
      image:
        "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=1200",
      imageCaption: "Certified mother-bed saplings & heirloom seeds",
      metricLabel: "Sapling Viability",
      metricValue: "98% Germination Target",
      perks: [
        "Non-GMO certified cultivars",
        "Micro-climate adapted rootstocks",
        "Organic bio-stimulant priming",
      ],
      icon: Sparkles,
      color: "#B8871E",
      accentBg: "bg-[#FDF9ED]",
      accentText: "text-[#B8871E]",
      badgeBg: "bg-[#F7EFCF] text-[#B8871E]",
    },
    {
      id: "plant",
      number: "03",
      title: "Plant",
      tagline: "Photosynthesis & Care",
      headline: "Root-zone precision hydration meets golden sunlight.",
      narrative:
        "As plants branch toward the sky, our customized micro-irrigation delivers precise droplets of water and organic nutrients directly to the root zone — eliminating water waste while cultivating vigorous foliage.",
      image:
        "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&q=80&w=1200",
      imageCaption: "Precision root-zone micro-drip fertigation",
      metricLabel: "Water Conservation",
      metricValue: "Up to 90% Saved",
      perks: [
        "Automated root-zone drip grids",
        "Mulch protection against evaporation",
        "Beneficial companion planting",
      ],
      icon: Sun,
      color: "#3B8A2F",
      accentBg: "bg-[#EFF8ED]",
      accentText: "text-[#3B8A2F]",
      badgeBg: "bg-[#DFEFDB] text-[#3B8A2F]",
    },
    {
      id: "farm",
      number: "04",
      title: "Farm",
      tagline: "Ecosystem Architecture",
      headline: "A balanced, self-sustaining polyculture landscape.",
      narrative:
        "A Farm 'N' Us property is a living sanctuary. By weaving orchard trees, nitrogen-fixing border plants, and natural windbreaks, we foster birds, bees, and beneficial predators that protect crops naturally.",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200",
      imageCaption: "200+ acres of living multi-tiered agricultural land",
      metricLabel: "Acreage Developed",
      metricValue: "200+ Acres Under Stewardship",
      perks: [
        "Multi-tiered biophilic design",
        "Zero toxic chemical runoff",
        "Natural pollinator corridors",
      ],
      icon: Droplets,
      color: "#24701B",
      accentBg: "bg-[#EAF5E7]",
      accentText: "text-[#24701B]",
      badgeBg: "bg-[#D6ECD1] text-[#24701B]",
    },
    {
      id: "harvest",
      number: "05",
      title: "Harvest",
      tagline: "Peak Ripeness & Dignity",
      headline: "Hand-picked at peak natural maturity — never force-ripened.",
      narrative:
        "Commercial farming harvests green and uses carbide gases. Our partner farms harvest fruit and vegetables strictly at tree-ripened perfection, honoring the natural sugar Brix levels and maximum nutrient density.",
      image:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1200",
      imageCaption: "Tree-ripened harvests hand-picked by trained farm crews",
      metricLabel: "Harvest Method",
      metricValue: "100% Tree-Ripened Selection",
      perks: [
        "Strict Brix sugar testing before pick",
        "Fair wages & dignity for harvest crews",
        "Zero post-harvest ripening chemicals",
      ],
      icon: HeartHandshake,
      color: "#D97706",
      accentBg: "bg-[#FFF6E9]",
      accentText: "text-[#D97706]",
      badgeBg: "bg-[#FCE7C8] text-[#D97706]",
    },
    {
      id: "food",
      number: "06",
      title: "Food on Table",
      tagline: "Nourishment & Joy",
      headline: "Honest, pure food that connects you back to the soil.",
      narrative:
        "The journey culminates where it matters most: around the dining table. Transparent, delicious, seasonal food that gives you complete peace of mind about what you and your family consume.",
      image:
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=1200",
      imageCaption: "From our soil to your family table with complete transparency",
      metricLabel: "Purity Guarantee",
      metricValue: "100% Traceable Origin",
      perks: [
        "Direct-to-consumer farm linkages",
        "Transparent harvest dates",
        "Maximum vitamin & enzyme retention",
      ],
      icon: Utensils,
      color: "#FF8A3D",
      accentBg: "bg-[#FFF1E8]",
      accentText: "text-[#FF8A3D]",
      badgeBg: "bg-[#FDE2D2] text-[#FF8A3D]",
    },
  ];

  // Auto-advance sequence timer with animated progress bar
  useEffect(() => {
    if (isPaused) return;

    const tickInterval = 50; // update progress every 50ms
    const totalDuration = 4500; // 4.5 seconds per step

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          // Auto-advance goes forward: slide from left
          setSlideDir('left');
          setSlideKey((k) => k + 1);
          setActiveStep((curr) => (curr + 1) % steps.length);
          return 0;
        }
        return prev + (tickInterval / totalDuration) * 100;
      });
    }, tickInterval);

    return () => clearInterval(timer);
  }, [isPaused, steps.length]);

  const handleStepClick = (index: number) => {
    setSlideDir(index > activeStep ? 'left' : 'right');
    setSlideKey((k) => k + 1);
    setActiveStep(index);
    setProgress(0);
  };

  const handleNext = () => {
    setSlideDir('left');
    setSlideKey((k) => k + 1);
    setActiveStep((curr) => (curr + 1) % steps.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setSlideDir('right');
    setSlideKey((k) => k + 1);
    setActiveStep((curr) => (curr - 1 + steps.length) % steps.length);
    setProgress(0);
  };

  const current = steps[activeStep];
  const StepIcon = current.icon;

  return (
    <section className="relative w-full bg-[#FFFFFF] py-10 sm:py-14 lg:py-16 overflow-hidden">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-50/50 via-amber-50/20 to-transparent pointer-events-none -z-10 blur-3xl opacity-80"
      />

      <div className="max-w-[1560px] mx-auto px-4 sm:px-10 lg:px-12 xl:px-14">
        {/* Section Header */}
        <ScrollReveal direction="up" distance={24} className="text-center max-w-3xl mx-auto mb-7 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2F7F0] border border-[#2D7324]/20 text-[#2D7324] text-[10.5px] font-bold tracking-widest uppercase mb-3 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2D7324] animate-pulse" />
            <span>#02 — THE CONNECTION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#111812] tracking-[-0.03em] leading-[1.08] font-sans">
            We all eat. <br />
            <span className="text-[#FF8A3D]">Where does our food begin?</span>
          </h2>

          <p className="mt-2.5 text-[#525B53] text-xs sm:text-sm lg:text-[15px] leading-relaxed max-w-2xl mx-auto">
            A journey of biology, water, sunlight, and responsible stewardship. Follow the living pipeline from earth to table.
          </p>
        </ScrollReveal>

        {/* ── CINEMATIC INTERACTIVE STAGE CARD ── */}
        <ScrollReveal direction="up" distance={20} className="w-full">
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="w-full rounded-[30px] sm:rounded-[36px] bg-white border border-neutral-200/90 shadow-[0_16px_50px_rgba(0,0,0,0.05)] overflow-hidden"
          >
            {/* ── Entire card slides as one unit ── */}
            <div
              key={`card-${slideKey}`}
              style={{
                animation: `hook-slide-${slideDir} 0.72s cubic-bezier(0.16, 1, 0.3, 1) both`,
              }}
              className="grid grid-cols-1 lg:grid-cols-12 items-stretch"
            >
              {/* Left Column: Stage Editorial & Details (7 cols) — shows second on mobile */}
              <div className="lg:col-span-7 bg-[#FAFDF9] border-r border-neutral-200/70 p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col justify-between order-2 lg:order-1">
                <div>
                  {/* Top Bar: Step Pill + Nav Controls */}
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="flex items-center gap-2.5">
                      <span className={`text-[10.5px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full ${current.badgeBg}`}>
                        Stage {current.number} · 06
                      </span>
                      <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                        {current.tagline}
                      </span>
                    </div>

                    {/* Prev / Next & Pause Controls */}
                    <div className="flex items-center gap-1.5 bg-white p-1 rounded-full border border-neutral-200/80 shadow-xs">
                      <button
                        type="button"
                        onClick={handlePrev}
                        aria-label="Previous stage"
                        className="w-6 h-6 rounded-full hover:bg-neutral-100 text-neutral-600 flex items-center justify-center transition-all cursor-pointer"
                      >
                        <ChevronLeft className="w-3.5 h-3.5" />
                      </button>

                      <button
                        type="button"
                        onClick={() => setIsPaused(!isPaused)}
                        aria-label={isPaused ? "Play" : "Pause"}
                        className="w-6 h-6 rounded-full hover:bg-neutral-100 text-neutral-600 flex items-center justify-center transition-all cursor-pointer"
                      >
                        {isPaused ? <Play className="w-3 h-3 fill-current" /> : <Pause className="w-3 h-3 fill-current" />}
                      </button>

                      <button
                        type="button"
                        onClick={handleNext}
                        aria-label="Next stage"
                        className="w-6 h-6 rounded-full hover:bg-neutral-100 text-neutral-600 flex items-center justify-center transition-all cursor-pointer"
                      >
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Stage Headline & Icon */}
                  <div className="flex items-center gap-3.5 mb-2.5">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-white ${current.accentText} border border-neutral-200/80 flex items-center justify-center shadow-xs shrink-0`}
                    >
                      <StepIcon className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <h3 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#111812] tracking-tight font-sans leading-none">
                      {current.title}
                    </h3>
                  </div>

                  <p className="text-base sm:text-lg lg:text-[19px] font-bold text-[#111812] mt-3 leading-snug">
                    {current.headline}
                  </p>

                  <p className="mt-2.5 text-[#525B53] text-sm sm:text-[14.5px] leading-relaxed max-w-2xl">
                    {current.narrative}
                  </p>

                  {/* 3 Value Perks as spacious individual cards */}
                  <div className="my-6">
                    <span className="text-[10.5px] font-extrabold uppercase tracking-widest text-neutral-400 block mb-3">
                      Ecological Standard &amp; Biology
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                      {current.perks.map((perk, pIdx) => (
                        <div
                          key={pIdx}
                          className="p-3 sm:p-3.5 rounded-xl bg-white border border-neutral-200/80 shadow-2xs flex items-start gap-2.5 hover:border-[#2D7324]/40 transition-colors"
                        >
                          <div className="w-4 h-4 rounded-full bg-[#EBF4E8] text-[#2D7324] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span className="text-xs font-semibold text-[#141814] leading-snug">
                            {perk}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="pt-5 border-t border-neutral-200/70 flex flex-col sm:flex-row items-center justify-between gap-4 mt-auto">
                  <div className="flex items-center gap-2 text-xs sm:text-[12.5px] text-[#525B53] font-medium">
                    <div className="w-5 h-5 rounded-full bg-[#EBF4E8] text-[#2D7324] flex items-center justify-center shrink-0">
                      <Leaf className="w-3 h-3 text-[#2D7324]" />
                    </div>
                    <span>Practiced across 200+ managed acres</span>
                  </div>

                  <Link
                    href="/grow-with-us"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#2D7324] hover:bg-[#25631D] text-white text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow-md transition-all active:scale-95 shrink-0 group/btn"
                  >
                    <span>Grow With Us</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right Column: High-Res Cinematic Image Showcase (5 cols) */}
              <div className="lg:col-span-5 relative bg-neutral-900 overflow-hidden flex flex-col justify-between min-h-[320px] sm:min-h-[400px] lg:min-h-full group/media order-1 lg:order-2">
                <img
                  src={current.image}
                  alt={current.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover/media:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/15 pointer-events-none" />

                {/* Top Overlay Badge */}
                <div className="relative z-10 p-5 sm:p-6 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/95 bg-black/45 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 shadow-sm">
                    Stage {current.number} · {current.title}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-emerald-300 border border-white/20 shadow-sm">
                    <Activity className="w-4 h-4 animate-pulse" />
                  </div>
                </div>

                {/* Bottom Overlay Info Card */}
                <div className="relative z-10 p-5 sm:p-6 text-white">
                  <p className="text-xs sm:text-[13.5px] font-semibold text-white/95 mb-3 leading-snug drop-shadow-sm">
                    {current.imageCaption}
                  </p>

                  <div className="p-3.5 rounded-2xl bg-black/45 backdrop-blur-md border border-white/15 flex items-center justify-between shadow-lg">
                    <div>
                      <span className="text-[9.5px] font-bold uppercase tracking-wider text-emerald-300 block">
                        {current.metricLabel}
                      </span>
                      <span className="text-sm font-black text-white mt-0.5 block tracking-tight">
                        {current.metricValue}
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="text-[9.5px] uppercase tracking-wider text-white/75 font-semibold block">
                        Status
                      </span>
                      <span className="text-xs font-bold text-emerald-200 flex items-center gap-1.5 mt-0.5 justify-end">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Active Cycle
                      </span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </ScrollReveal>

        {/* ── INTERACTIVE 6-STEP PIPELINE TRACK (BELOW CARD) ── */}
        <div className="mt-7 sm:mt-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-3.5">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              const isActive = activeStep === idx;
              return (
                <button
                  key={s.id}
                  onClick={() => handleStepClick(idx)}
                  className={`text-left p-3.5 sm:p-4 rounded-2xl transition-all duration-300 border flex flex-col justify-between cursor-pointer relative overflow-hidden ${
                    isActive
                      ? "bg-white border-[#2D7324] shadow-md ring-2 ring-[#2D7324]/20 -translate-y-1"
                      : "bg-[#FAFCF8] border-neutral-200/80 hover:bg-white hover:border-neutral-300 hover:shadow-xs"
                  }`}
                >
                  {/* Top Bar on Pill */}
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-[9.5px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                        isActive ? s.badgeBg : "bg-neutral-100 text-neutral-500"
                      }`}
                    >
                      Step {s.number}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                        isActive ? `${s.accentBg} ${s.accentText}` : "bg-neutral-100 text-neutral-500"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Title & Tag */}
                  <div>
                    <h4 className="text-sm font-extrabold text-[#111812] tracking-tight">
                      {s.title}
                    </h4>
                    <span className="text-[10.5px] font-medium text-neutral-500 block truncate mt-0.5">
                      {s.tagline}
                    </span>
                  </div>

                  {/* Dynamic Progress Line for Active Pill */}
                  <div className="w-full bg-neutral-150 h-1.5 rounded-full mt-3 overflow-hidden">
                    {isActive ? (
                      <div
                        className="h-full bg-[#2D7324] rounded-full transition-all duration-75 ease-linear"
                        style={{ width: `${progress}%` }}
                      />
                    ) : (
                      <div className="h-full bg-transparent" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-[#525B53] mt-3 px-1 gap-1">
            <span className="font-medium">
              Hover to pause · Click any stage to inspect the living cycle
            </span>
            <span className="font-bold text-[#2D7324]">
              {isPaused ? "Paused" : "Auto-playing next stage"}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
