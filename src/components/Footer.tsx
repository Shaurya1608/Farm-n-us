"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Leaf } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/", desc: "Overview & vision" },
  { label: "Grow With Us", href: "/grow-with-us", desc: "Our 3 farm engagement models" },
  { label: "From Our Farms", href: "/from-our-farms", desc: "Cultivars, harvest & produce" },
  { label: "Worth Knowing", href: "/worth-knowing", desc: "Field journals & research" },
  { label: "Our Story", href: "/our-story", desc: "Land ethics & stewardship" },
  { label: "Contact & Desk", href: "/contact", desc: "Consultations & land evaluation" },
];

const models = [
  {
    num: "01",
    title: "Turnkey Development",
    role: "Build",
    desc: "Complete farm setup — soil enrichment, precision drip irrigation, fencing, and saplings. Ready for independent management.",
    href: "/grow-with-us#build",
  },
  {
    num: "02",
    title: "Co-Farming Stewardship",
    role: "Build + Manage",
    desc: "End-to-end plantation development with our full-time agronomy crew managing cultivation, inputs, and harvest yields.",
    href: "/grow-with-us#manage",
  },
  {
    num: "03",
    title: "Agronomy & Advisory",
    role: "Support",
    desc: "On-demand scientific guidance, soil diagnostics, organic nutrition plans, and skilled seasonal agricultural labor.",
    href: "/grow-with-us#support",
  },
];

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#0D1310] text-neutral-400 border-t border-white/[0.06] mt-auto">

      {/* ── TOP CTA BAND ── */}
      <div className="border-b border-white/[0.06]">
        <div className="max-w-[1560px] mx-auto px-4 sm:px-10 lg:px-12 xl:px-14 py-8 sm:py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#5BAD4E] mb-1.5">
              Ready to begin?
            </p>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
              Turn your land into something <br className="hidden sm:block" />
              <span className="text-[#5BAD4E]">alive and productive.</span>
            </h3>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#2D7324] hover:bg-[#25631D] text-white font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-[#2D7324]/20 hover:shadow-[#2D7324]/40 transition-all duration-300 shrink-0"
          >
            Start a Conversation
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>
        </div>
      </div>

      {/* ── MAIN FOOTER GRID ── */}
      <div className="max-w-[1560px] mx-auto px-4 sm:px-10 lg:px-12 xl:px-14 pt-10 sm:pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 sm:gap-10 lg:gap-12">

          {/* ── BRAND COLUMN ── */}
          <div className="sm:col-span-2 md:col-span-4 flex flex-col gap-6">
            <div>
              <Link href="/" className="flex items-center gap-2.5 group w-fit">
                <div className="w-9 h-9 flex items-center justify-center text-[#2D7324] transition-transform group-hover:scale-105">
                  <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 2.5L28 9.5V22.5L16 29.5L4 22.5V9.5L16 2.5Z" stroke="#2D7324" strokeWidth="2.2" strokeLinejoin="round" />
                    <path d="M16 23V11" stroke="#2D7324" strokeWidth="2" strokeLinecap="round" />
                    <path d="M16 15C13 15 11 13 11 10C13.5 10 15.5 12 16 15Z" fill="#2D7324" />
                    <path d="M16 13C19 13 21 11 21 8C18.5 8 16.5 10 16 13Z" fill="#2D7324" />
                  </svg>
                </div>
                <span className="text-[22px] font-bold tracking-tight text-white font-sans">
                  Farm <span className="text-[#2D7324]">&apos;N&apos;</span> Us
                </span>
              </Link>
              <p className="mt-2 text-[11.5px] text-neutral-400 leading-snug">
                A venture by <span className="text-neutral-200 font-semibold">GSPCL</span>{" "}
                <span className="text-neutral-500 text-[11px] block mt-0.5">
                  (formed under the Government of India&apos;s Central Sector Scheme)
                </span>
              </p>
            </div>

            <p className="text-[13px] text-neutral-400 leading-relaxed max-w-[320px]">
              Making land productive. Making farming possible. Bringing good harvests to more people.
            </p>

            <div className="flex flex-col gap-2.5">
              <div className="inline-flex items-start gap-2 text-[12px] text-neutral-300">
                <MapPin className="w-3.5 h-3.5 text-[#5BAD4E] shrink-0 mt-0.5" />
                <span>Ghaghra, Gumla, Jharkhand, India</span>
              </div>
              <a
                href="mailto:grow@farmnus.com"
                className="inline-flex items-center gap-2 text-[12px] text-neutral-400 hover:text-white transition-colors w-fit"
              >
                <Mail className="w-3.5 h-3.5 text-[#5BAD4E] shrink-0" />
                <span>grow@farmnus.com</span>
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[
                { label: "Instagram", Icon: InstagramIcon },
                { label: "X / Twitter", Icon: XIcon },
                { label: "YouTube", Icon: YoutubeIcon },
              ].map(({ label, Icon }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-8 h-8 rounded-full border border-white/10 bg-white/5 hover:bg-[#2D7324]/20 hover:border-[#2D7324]/40 flex items-center justify-center text-neutral-400 hover:text-[#5BAD4E] transition-all duration-200 cursor-pointer"
                >
                  <Icon />
                </button>
              ))}
            </div>
          </div>

          {/* ── NAVIGATION ── */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] font-semibold text-neutral-400 uppercase tracking-[0.14em] mb-4">
              Directory
            </h4>
            <ul className="space-y-3.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group block transition-colors"
                  >
                    <span className="text-[13px] font-medium text-neutral-300 group-hover:text-emerald-400 transition-colors">
                      {link.label}
                    </span>
                    {link.desc && (
                      <span className="block text-[11px] text-neutral-500 font-normal mt-0.5 group-hover:text-neutral-400 transition-colors">
                        {link.desc}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── PARTNERSHIP MODELS (WAYS TO GROW) ── */}
          <div className="sm:col-span-2 md:col-span-5">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-[11px] font-semibold text-neutral-400 uppercase tracking-[0.14em]">
                Partnership Models
              </h4>
              <Link
                href="/grow-with-us"
                className="text-[11px] text-emerald-400/90 hover:text-emerald-300 font-medium inline-flex items-center gap-1 transition-colors"
              >
                <span>View all models</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
              {models.map((m) => (
                <Link
                  key={m.num}
                  href={m.href}
                  className="group block py-3.5 first:pt-3.5 last:pb-3.5 transition-colors"
                >
                  <div className="flex items-baseline justify-between gap-3 mb-1">
                    <div className="flex items-baseline gap-2.5">
                      <span className="font-mono text-[11px] text-emerald-500/80 font-medium">
                        {m.num}
                      </span>
                      <h5 className="text-[13px] font-semibold text-neutral-200 group-hover:text-emerald-400 transition-colors">
                        {m.title}
                      </h5>
                    </div>
                    <span className="text-[10px] tracking-wider uppercase text-neutral-500 font-mono">
                      {m.role}
                    </span>
                  </div>
                  <p className="text-[12px] text-neutral-400 leading-relaxed pl-6 group-hover:text-neutral-300 transition-colors">
                    {m.desc}
                  </p>
                </Link>
              ))}
            </div>

            {/* Direct Consultation / Advisory Desk */}
            <div className="mt-4 pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="text-[10.5px] uppercase tracking-wider text-neutral-500 font-medium">
                  Land Evaluation Desk
                </p>
                <a
                  href="mailto:grow@farmnus.com"
                  className="text-[12.5px] text-neutral-300 hover:text-emerald-400 transition-colors font-medium"
                >
                  grow@farmnus.com
                </a>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-[11.5px] font-medium text-emerald-400 hover:text-emerald-300 transition-colors group w-fit"
              >
                <span>Request site visit</span>
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-[1560px] mx-auto px-4 sm:px-10 lg:px-12 xl:px-14 py-5 flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-3 text-[11px] text-neutral-500">
          <div className="flex items-center gap-2">
            <Leaf className="w-3 h-3 text-[#2D7324] shrink-0" />
            <span className="tracking-wide font-medium text-neutral-400">
              OM SHRI GANESHAYE NAMAH · GSPCL · GHAGHRA, GUMLA, JHARKHAND
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-4 text-center sm:text-right">
            <span>© 2026 Farm &apos;N&apos; Us · A venture by GSPCL</span>
            <span className="hidden sm:block text-neutral-700">·</span>
            <span>Central Sector Scheme, Govt. of India</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
