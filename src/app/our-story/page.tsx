import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import { ArrowUpRight, Sparkles, Users, Sprout, ShieldCheck, TreePine } from "lucide-react";

export default function OurStoryPage() {
  const impactStats = [
    { number: "5+", label: "Farms Developed" },
    { number: "200+", label: "Acres Under Micro-Irrigation" },
    { number: "80,000+", label: "Trees Planted" },
    { number: "₹15M+", label: "Economic Value Generated Among Farmers" },
    { number: "2,500+", label: "Farmer Families Reached" },
    { number: "XX+", label: "Tonnes of Produce Harvested" },
  ];

  const clientStories = [
    {
      quote: "We had the land for over six years. We just didn't know where to begin or how to handle irrigation.",
      client: "Client, Farm Development Project",
      project: "15-Acre Multi-Fruit Orchard (Build)",
      image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=600",
    },
    {
      quote: "They helped us bring everything together — from organic inputs to day-to-day operations and harvesting.",
      client: "Client, Farm Management Project",
      project: "Managed 30-Acre Mango & Agroforestry (Build + Manage)",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=600",
    },
    {
      quote: "We wanted our children to touch real soil and eat clean food grown on our own land. Farmnus made it possible.",
      client: "Family Farm Partner",
      project: "8-Acre Family Farm Retreat (Support)",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=600",
    },
  ];

  const communityPartners = [
    "Farmers & Local Cultivators",
    "Agricultural Cooperatives",
    "Farmer Producer Organisations (FPOs)",
    "Rural Agricultural Communities",
    "Individuals & Private Landowners",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#EDF5EE]">
      <Header />
      
      <main className="flex-grow pt-24 sm:pt-28">
        {/* ── 01. EDITORIAL HEADER ── */}
        <section className="max-w-5xl mx-auto px-6 sm:px-10 py-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E2EEE3] border border-emerald-800/10 text-emerald-800 text-[11px] font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>Our Story • Why We Started</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-[4.2rem] font-serif font-bold text-[#141815] tracking-tight leading-[1.08]">
            We started in the field.
          </h1>

          <p className="mt-6 text-zinc-600 text-base sm:text-xl max-w-3xl mx-auto font-sans leading-relaxed">
            Our journey began by working with farmers, cooperatives, and agricultural communities — seeing first-hand what it takes to make agriculture work, from the soil to the market.
          </p>

          <p className="mt-4 text-zinc-600 text-sm sm:text-base max-w-2xl mx-auto font-sans leading-relaxed">
            Along the way, we also met people who had land, resources, and a genuine desire to grow, but didn&apos;t always have the time, knowledge, people, or systems needed to turn that intent into a working farm.
          </p>

          {/* Simple Central Question Pill */}
          <div className="mt-10 inline-block bg-white border border-[#C8DEC9] px-8 py-4 rounded-3xl shadow-sm">
            <span className="text-xs uppercase tracking-widest text-emerald-800 font-bold block mb-1">
              Our Starting Point
            </span>
            <p className="text-lg sm:text-xl font-serif italic text-[#162E20]">
              “What if growing a farm could be easier?”
            </p>
          </div>
        </section>

        {/* ── 02. THE PROBLEM & OUR ANSWER (EDITORIAL SPLIT) ── */}
        <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* The Problem Card */}
            <div className="p-8 sm:p-12 rounded-[2.5rem] bg-white border border-[#C8DEC9]/70 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
                  The Problem
                </span>
                <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#141815] mt-3 leading-snug">
                  Having land is easy. <br />
                  <span className="text-neutral-500 font-normal italic">
                    Making it grow is different.
                  </span>
                </h2>
                <p className="text-zinc-600 text-sm sm:text-base mt-5 leading-relaxed font-sans">
                  A farm needs much more than seeds. Land, water, knowledge, reliable people, resources, and markets. Bringing all of it together — and keeping it thriving across dry seasons and monsoon cycles — can be difficult.
                </p>
                <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-neutral-700">
                  <span className="bg-[#EDF5EE] px-3 py-1 rounded-full">Land & Legal</span>
                  <span className="bg-[#EDF5EE] px-3 py-1 rounded-full">Water Architecture</span>
                  <span className="bg-[#EDF5EE] px-3 py-1 rounded-full">Agronomy</span>
                  <span className="bg-[#EDF5EE] px-3 py-1 rounded-full">Manpower</span>
                  <span className="bg-[#EDF5EE] px-3 py-1 rounded-full">Markets</span>
                </div>
              </div>
              <p className="mt-8 pt-6 border-t border-zinc-100 text-xs font-medium text-emerald-900">
                We saw the gap. So we decided to build the bridge.
              </p>
            </div>

            {/* Our Answer Card */}
            <div className="p-8 sm:p-12 rounded-[2.5rem] bg-[#162E20] text-white shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                  Our Answer
                </span>
                <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white mt-3 leading-snug">
                  We bring the farm together.
                </h2>
                <p className="text-zinc-300 text-sm sm:text-base mt-5 leading-relaxed font-sans">
                  From land preparation and legal support to agronomy, irrigation, plantation, cultivation, farm operations, resources, monitoring, harvesting, and market linkages — we bring the agricultural ecosystem together.
                </p>
                <div className="mt-6 p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                  <p className="text-sm font-serif italic text-emerald-200">
                    You bring the land and the intent. We help bring it to life.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/15 flex items-center justify-between text-xs font-semibold text-emerald-300 relative z-10">
                <span>Build • Manage • Support</span>
                <Link href="/grow-with-us" className="inline-flex items-center gap-1 hover:text-white transition-colors">
                  <span>Explore Models</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* ── 03. GROWING TOGETHER: INDIVIDUAL FARMS TO COMMUNITIES ── */}
        <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12">
          <div className="p-8 sm:p-14 rounded-[2.5rem] bg-[#E2EEE3] border border-[#C8DEC9] shadow-sm">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
                Growing Together
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#141815] mt-2 leading-tight">
                From individual farms to farming communities.
              </h2>
              <p className="mt-4 text-zinc-700 text-sm sm:text-base leading-relaxed font-sans">
                Our work spans both individual farms and collective agriculture. We help connect knowledge, resources, production, and markets — because agriculture grows differently when people grow together.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-8">
              {communityPartners.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-white shadow-xs text-center flex flex-col items-center justify-center"
                >
                  <Users className="w-5 h-5 text-emerald-800 mb-2" />
                  <span className="text-xs font-bold text-neutral-800 leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 04. OUR IMPACT (HIGHLY VISUAL NUMBERS SECTION) ── */}
        <section className="w-full bg-[#EDF5EE] py-20 px-6 sm:px-10 lg:px-16 my-12 border-y border-[#C8DFC9]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold">
                Our Impact
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#141815] mt-2">
                The Work Speaks For Itself.
              </h2>
              <p className="text-[#4A6350] text-sm mt-3 font-serif italic">
                Real work. Real farms. Real people. Real impact.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {impactStats.map((st, idx) => (
                <div
                  key={idx}
                  className="p-8 sm:p-10 rounded-3xl bg-white/70 border border-[#C8DFC9] text-center hover:shadow-lg hover:border-emerald-500/40 transition-all duration-300"
                >
                  <div className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#162E20] tracking-tight font-sans">
                    {st.number}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-[#4A6350] mt-3 font-sans">
                    {st.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 05. HOW IT FEELS GROWING WITH US (GENUINE CLIENT STORIES) ── */}
        <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold">
              Stories From The Field
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#141815] mt-2">
              How it feels growing with us.
            </h2>
            <p className="mt-3 text-zinc-600 text-sm sm:text-base leading-relaxed font-sans">
              Every farm has a story. Different land, different dreams, different reasons for growing. Some wanted to make their land productive. Some wanted to grow food. Some simply wanted to create something of their own.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientStories.map((st, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-[#C8DEC9]/70 shadow-sm flex flex-col justify-between hover:shadow-xl transition-shadow"
              >
                <div>
                  <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-neutral-100">
                    <img
                      src={st.image}
                      alt={st.project}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-3xl text-emerald-800/40 font-serif block -mb-2">“</span>
                  <p className="text-sm sm:text-base font-serif italic text-[#162E20] leading-relaxed">
                    {st.quote}
                  </p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-zinc-100">
                  <div className="text-xs font-bold text-[#141815]">{st.client}</div>
                  <div className="text-[11px] text-emerald-800 font-medium mt-0.5">{st.project}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 06. SUSTAINABILITY & CLOSING STATEMENT ── */}
        <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12 mb-8">
          <div className="p-8 sm:p-14 lg:p-20 rounded-[2.8rem] bg-[#162E20] text-white shadow-2xl relative overflow-hidden">
            <div className="max-w-3xl">
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">
                Sustainability
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold mt-3 leading-tight">
                What we grow should leave something behind.
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base mt-6 leading-relaxed font-sans">
                For us, sustainability means growing in a way that respects water, soil, trees, climate, and livelihoods. It means using resources wisely, strengthening agricultural communities, supporting resilient farming, and creating value that lasts beyond a single harvest.
              </p>
              
              <div className="mt-10 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 inline-block">
                <p className="text-xl sm:text-2xl font-serif italic text-emerald-200">
                  “Grow today. Leave more growing behind.”
                </p>
              </div>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
