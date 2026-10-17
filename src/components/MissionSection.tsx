"use client";

export default function MissionSection() {
  const tags = ["Organic Farming", "Precision Agriculture", "Sustainable Practices"];

  return (
    <section className="w-full bg-[#EDF5EE] text-[#111813] pt-16 sm:pt-20 pb-12 sm:pb-16 px-6 sm:px-10 lg:px-16 border-b border-[#111813]/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        
        {/* LEFT COLUMN: Year & Tags */}
        <div className="lg:col-span-5 flex flex-col items-start">
          <span className="text-3xl sm:text-4xl font-serif font-semibold text-[#111813] block mb-5 tracking-tight">
            2025
          </span>

          <div className="flex flex-wrap items-center gap-2.5">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-full border border-[#111813]/15 bg-white/60 backdrop-blur-sm text-xs font-medium text-zinc-700 hover:bg-white hover:border-[#111813]/30 transition-all shadow-sm cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Editorial Mission Statement */}
        <div className="lg:col-span-7">
          <p className="text-2xl sm:text-3xl lg:text-[2.25rem] font-serif font-semibold text-[#111813] leading-[1.25] tracking-tight">
            Honoring The Wisdom Of Generations, We Integrate Cutting-Edge Technology To Cultivate Smarter, Greener, And More Abundant Harvests For The Future.
          </p>
        </div>

      </div>
    </section>
  );
}
