import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import { ArrowUpRight, CheckCircle2, Heart, Sparkles, Sun, Droplets, Sprout } from "lucide-react";

export default function FromOurFarmsPage() {
  const harvestItems = [
    {
      name: "Heritage Mangoes",
      variety: "Alphonso, Kesar & Dasheri",
      season: "Peak Summer Harvest",
      image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=800",
      description: "Sun-ripened on mature trees, naturally cured without carbide or artificial gas. Incomparable sweetness and floral bouquet.",
      attributes: ["100% Tree-Ripened", "Carbide-Free", "Rich Organic Soil"],
    },
    {
      name: "Pink & White Guavas",
      variety: "VNR Bihi & Allahabad Safeda",
      season: "Autumn & Winter Harvest",
      image: "https://images.unsplash.com/photo-1536511157201-526462a49390?auto=format&fit=crop&q=80&w=800",
      description: "Crisp, fragrant flesh with dense Vitamin C content. Grown under precision drip irrigation with living mulch groundcover.",
      attributes: ["Zero Chemical Sprays", "Hand-Graded", "High Natural Pectin"],
    },
    {
      name: "Seasonal Vegetables & Greens",
      variety: "Heirloom Greens, Root Crops, Gourds",
      season: "Year-Round Fresh Cycles",
      image: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&q=80&w=800",
      description: "Harvested at dawn and delivered crisp. Nutrient-dense varieties cultivated in chemical-free, living biologically active soil.",
      attributes: ["Harvested Same-Day", "Native Seeds", "Living Soil Nutrition"],
    },
    {
      name: "Wild Native Forest Honey",
      variety: "Multi-Flora Raw Honey",
      season: "Seasonal Natural Extraction",
      image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=800",
      description: "Unfiltered, unheated honey from pollinator hives placed within our flowering orchards and natural boundary hedgerows.",
      attributes: ["Unprocessed & Raw", "Pollinator Sanctuary", "Zero Added Sugar"],
    },
    {
      name: "Cold-Pressed Oils & Seeds",
      variety: "Traditional Wood-Pressed Mustard & Sesame",
      season: "Winter Harvest Extraction",
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=800",
      description: "Crushed at low temperatures using traditional cold methods, retaining raw vitamins, essential fatty acids, and authentic pungency.",
      attributes: ["Cold Churned", "Single-Farm Origin", "Zero Solvents"],
    },
    {
      name: "Sweet Citrus & Mosambi",
      variety: "Malta & Local Sweet Lime",
      season: "Winter Orchard Season",
      image: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&q=80&w=800",
      description: "Juicy, thin-skinned citrus grown in mineral-rich soil. Packed with natural hydration, balancing sweetness and gentle zest.",
      attributes: ["High Natural Juice", "Direct From Tree", "Soil-Fed Minerals"],
    },
  ];

  const journeySteps = [
    {
      number: "01",
      title: "Soil & Living Seeds",
      desc: "Everything starts below ground. We enrich soil with natural biomass, bio-char, and native seed varieties.",
      icon: Sprout,
    },
    {
      number: "02",
      title: "Micro-Irrigation & Care",
      desc: "Water is conserved with precision root-level drip systems, paired with organic foliar sprays and companion planting.",
      icon: Droplets,
    },
    {
      number: "03",
      title: "Sun-Drenched Maturity",
      desc: "Produce is allowed to mature naturally on the branch rather than forced ripened in storage warehouses.",
      icon: Sun,
    },
    {
      number: "04",
      title: "Direct Table Connection",
      desc: "From the farm straight to households and culinary partners — 100% transparent and traceable from seed to plate.",
      icon: Heart,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#EDF5EE]">
      <Header />
      
      <main className="flex-grow pt-24 sm:pt-28">
        {/* Page Hero Header */}
        <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-8 pb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E2EEE3] border border-emerald-800/10 text-emerald-800 text-[11px] font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>06 — From Our Farms</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#141815] tracking-tight mt-2">
            And then, something begins to grow.
          </h1>
          
          <p className="mt-4 text-zinc-600 text-base sm:text-xl max-w-3xl mx-auto font-sans leading-relaxed">
            Mangoes. Guavas. Seasonal vegetables. And more. Every harvest begins with land, care, and time — and ends with something real to share.
          </p>

          <p className="mt-2 text-emerald-900 font-serif italic text-base sm:text-lg">
            “Good land should grow good things.”
          </p>
        </section>

        {/* Harvest Showcase Grid */}
        <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {harvestItems.map((item, idx) => (
              <div
                key={idx}
                className="group rounded-3xl bg-white border border-[#C8DEC9]/70 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-[#141815]/85 backdrop-blur-md px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                      {item.season}
                    </div>
                  </div>

                  <div className="p-6 sm:p-7">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                      {item.variety}
                    </span>
                    <h3 className="text-2xl font-bold font-serif text-[#141815] mt-1 group-hover:text-emerald-900 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 mt-3 leading-relaxed font-sans">
                      {item.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.attributes.map((attr, aIdx) => (
                        <span
                          key={aIdx}
                          className="text-[10px] font-semibold text-emerald-900 bg-[#E8F2E8] px-2.5 py-1 rounded-full"
                        >
                          ✓ {attr}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-semibold text-emerald-900">
                    <span>Responsibly Grown & Traceable</span>
                    <span className="text-neutral-400 font-mono text-[11px]">Farm Direct</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The Produce Journey */}
        <section className="w-full bg-[#162E20] text-white py-20 px-6 sm:px-10 lg:px-16 my-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">
                The Journey
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold mt-2">
                How Fresh Produce Reaches You
              </h2>
              <p className="mt-3 text-zinc-300 text-sm sm:text-base">
                As our network of farms grows, we&apos;re building ways to bring fresh, responsibly grown produce closer to businesses and households.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {journeySteps.map((st, sIdx) => {
                const Icon = st.icon;
                return (
                  <div
                    key={sIdx}
                    className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-white/10 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-mono font-bold text-emerald-400">
                          {st.number}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold font-serif text-white">
                        {st.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-300 mt-2.5 leading-relaxed font-sans">
                        {st.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
