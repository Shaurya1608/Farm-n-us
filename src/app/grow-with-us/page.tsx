import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import ProofSection from "@/components/ProofSection";
import FinalCTA from "@/components/FinalCTA";

export default function GrowWithUsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#EDF5EE]">
      <Header />
      <main className="flex-grow pt-8">
        {/* Page Title — tight, no extra vertical gap */}
        <div className="px-6 sm:px-10 lg:px-16 pt-10 pb-0 max-w-5xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest text-emerald-700 font-semibold">
            Grow With Us
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#141815] mt-3 leading-tight">
            Three ways to turn<br />
            <span className="text-[#2D5A38] font-light italic">land into a farm.</span>
          </h1>
          <p className="mt-4 text-zinc-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            You decide how involved you want to be. We bring the expertise, labor, and systems. Choose your path below.
          </p>
        </div>

        {/* ServicesSection already has py-20 internally */}
        <ServicesSection />
        <ProofSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
