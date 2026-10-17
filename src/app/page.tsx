import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import HeroScrollOverlay from "@/components/HeroScrollOverlay";
import HookSection from "@/components/HookSection";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import PartnerSection from "@/components/PartnerSection";
import ProofSection from "@/components/ProofSection";
import EcoActionSection from "@/components/EcoActionSection";
import ProduceSection from "@/components/ProduceSection";
import BiggerIdeaSection from "@/components/BiggerIdeaSection";
import WorthKnowingSection from "@/components/WorthKnowingSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <HeroScrollOverlay
          hero={
            <>
              {/* 01 — HERO */}
              <HeroSection />

              {/* METRICS & CREDIBILITY BAR */}
              <StatsBar />
            </>
          }
        >
          {/* 02 — THE HOOK: Cinematic sequence: soil → seed → plant → farm → harvest → food */}
          <HookSection />

          {/* 03 — THE PROBLEM: Wanting to farm vs making a farm work (Temporarily disabled) */}
          {/* <ProblemSection /> */}

          {/* 04 — THE SOLUTION: Your land. Your way. BUILD / BUILD+MANAGE / SUPPORT */}
          <ServicesSection />

          {/* SOLUTIONS SPOTLIGHT: Biophilic architecture & 90% Water Savings (Temporarily disabled) */}
          {/* <PartnerSection /> */}

          {/* 05 — PROOF: 5+ farms developed. Real work. Real seasons (Temporarily disabled) */}
          {/* <ProofSection /> */}

          {/* ECO ACTION BENTO & LIVING MARQUEE */}
          <EcoActionSection />

          {/* 06 — FROM OUR FARMS: And then, something begins to grow */}
          <ProduceSection />

          {/* 07 — THE BIGGER IDEA: Agriculture is a relationship worth rebuilding */}
          <BiggerIdeaSection />

          {/* 08 — WORTH KNOWING: Featured food & farming stories */}
          <WorthKnowingSection />

          {/* 09 — FINAL HOMEPAGE CTA: Have land? Have an idea? */}
          <FinalCTA />
        </HeroScrollOverlay>
      </main>
      <Footer />
    </div>
  );
}
