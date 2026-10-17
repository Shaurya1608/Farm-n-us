"use client";

import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function WorthKnowingSection() {
  const articles = [
    {
      publisher: "Times of India",
      title: "Prominent personalities turning to farming",
      snippet:
        "How a growing movement of individuals and professionals are returning to the land to grow organic food and connect with soil.",
      category: "Culture & Land",
      link: "https://timesofindia.indiatimes.com/",
    },
    {
      publisher: "Journal of Agrarian Change",
      title: "Ageing, youth and farming in India: A new hope for land",
      snippet:
        "Research examining how young individuals and families are bringing fresh perspectives and modern management into agriculture.",
      category: "Research & Trends",
      link: "https://onlinelibrary.wiley.com/journal/14710366",
    },
    {
      publisher: "World Health Organization",
      title: "Pesticide residues in food & clean agricultural choices",
      snippet:
        "Understanding public health impacts and why pesticide-free, responsibly managed agricultural ecosystems matter for every household.",
      category: "Health & Food",
      link: "https://www.who.int/news-room/fact-sheets/detail/pesticide-residues-in-food",
    },
    {
      publisher: "The Indian Express",
      title: "Farmers' Column: Enterprise stories from the field",
      snippet:
        "An inspiring story of resilience, field determination, and how land development transforms economic livelihoods for rural communities.",
      category: "Field Stories",
      link: "https://indianexpress.com/",
    },
  ];

  return (
    <section className="w-full bg-[#FFFFFF] py-14 sm:py-20 border-t border-neutral-100">
      <div className="max-w-[1560px] mx-auto px-4 sm:px-10 lg:px-12 xl:px-14">
        
        {/* Section Header */}
        <ScrollReveal direction="up" distance={28} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div>
            <span className="text-[12px] sm:text-[13px] font-extrabold tracking-wider text-[#111812] uppercase mb-2.5 block">
              #08 — WORTH KNOWING
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#111812] tracking-[-0.03em] leading-[1.08] font-sans">
              Worth knowing. <br />
              <span className="text-[#2D7324]">Worth growing.</span>
            </h2>
            <p className="mt-3 text-[#525B53] text-sm sm:text-base max-w-2xl leading-relaxed">
              Explore stories, ideas and discoveries about food, farming and the land that feeds us.
            </p>
          </div>
          <Link
            href="/worth-knowing"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2D7324] hover:bg-[#25631D] text-white text-xs font-semibold tracking-wide transition-all shadow-xs active:scale-95 shrink-0"
          >
            <span>View All Stories</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>

        {/* 4 Article Cards with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {articles.map((art, idx) => (
            <ScrollReveal
              key={idx}
              delay={idx * 100}
              direction="up"
              distance={30}
              className="h-full"
            >
              <a
                href={art.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl bg-white border border-neutral-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-[#2D7324]/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#2D7324] bg-[#F2F5F2] px-3 py-1 rounded-full">
                      {art.category}
                    </span>
                    <BookOpen className="w-4 h-4 text-neutral-400 group-hover:text-[#2D7324] transition-colors" />
                  </div>
                  <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider block">
                    {art.publisher}
                  </span>
                  <h3 className="text-base font-bold text-[#111812] font-sans mt-2 group-hover:text-[#2D7324] transition-colors leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-xs text-[#6B7280] mt-2.5 leading-relaxed">
                    {art.snippet}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-[#2D7324]">
                  <span>Read Story</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
