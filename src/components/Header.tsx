"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, Menu, X, ArrowUpRight } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-neutral-100/80">
      <div className="max-w-[1560px] mx-auto px-4 sm:px-10 lg:px-12 xl:px-14 h-16 sm:h-20 flex items-center justify-between">
        
        {/* BRAND LOGO: Farm 'N' Us with Leaf Hexagon Emblem */}
        <Link href="/" className="flex items-center gap-2 sm:gap-2.5 group">
          <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-[#2D7324] transition-transform group-hover:scale-105 shrink-0">
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Hexagonal outline */}
              <path
                d="M16 2.5L28 9.5V22.5L16 29.5L4 22.5V9.5L16 2.5Z"
                stroke="#2D7324"
                strokeWidth="2.2"
                strokeLinejoin="round"
              />
              {/* Central vertical stem */}
              <path
                d="M16 23V11"
                stroke="#2D7324"
                strokeWidth="2"
                strokeLinecap="round"
              />
              {/* Left Leaf */}
              <path
                d="M16 15C13 15 11 13 11 10C13.5 10 15.5 12 16 15Z"
                fill="#2D7324"
              />
              {/* Right Leaf */}
              <path
                d="M16 13C19 13 21 11 21 8C18.5 8 16.5 10 16 13Z"
                fill="#2D7324"
              />
            </svg>
          </div>
          <span className="text-[19px] sm:text-[22px] font-bold tracking-tight text-[#111812] font-sans whitespace-nowrap">
            Farm <span className="text-[#2D7324]">&apos;N&apos;</span> Us
          </span>
        </Link>

        {/* CENTER NAVIGATION (Brief: Home | Grow With Us | From Our Farms | Worth Knowing | Our Story) */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-[14px] font-medium text-neutral-600">
          <Link
            href="/"
            className="text-[#2D7324] font-semibold flex flex-col items-center group py-1"
          >
            <span>Home</span>
            <span className="w-5 h-[2px] bg-[#2D7324] rounded-full mt-0.5" />
          </Link>
          <Link
            href="/grow-with-us"
            className="hover:text-neutral-900 transition-colors py-1"
          >
            Grow With Us
          </Link>
          <Link
            href="/from-our-farms"
            className="hover:text-neutral-900 transition-colors py-1"
          >
            From Our Farms
          </Link>
          <Link
            href="/worth-knowing"
            className="hover:text-neutral-900 transition-colors py-1"
          >
            Worth Knowing
          </Link>
          <Link
            href="/our-story"
            className="hover:text-neutral-900 transition-colors py-1"
          >
            Our Story
          </Link>
        </nav>

        {/* RIGHT ACTION: Search & "Let's Grow" Enquiry CTA */}
        <div className="flex items-center gap-2.5 sm:gap-5 text-neutral-800">
          <button
            aria-label="Search"
            className="p-1.5 rounded-full hover:bg-neutral-100 transition-colors text-neutral-700 hover:text-black cursor-pointer hidden sm:flex"
          >
            <Search className="w-[18px] h-[18px] stroke-[2]" />
          </button>

          {/* Primary Let's Grow CTA Button (Directly from brief) */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 sm:gap-1.5 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#2D7324] hover:bg-[#25631D] text-white text-[12px] sm:text-[13px] font-semibold tracking-wide shadow-xs hover:shadow transition-all duration-200 active:scale-95 whitespace-nowrap"
          >
            <span>Let&apos;s Grow</span>
            <ArrowUpRight className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-neutral-800 hover:bg-neutral-100 rounded-lg"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-100 bg-white px-6 py-4 flex flex-col gap-2.5 shadow-lg">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#2D7324] font-semibold py-1.5"
          >
            Home
          </Link>
          <Link
            href="/grow-with-us"
            onClick={() => setMobileMenuOpen(false)}
            className="text-neutral-700 hover:text-black py-1.5"
          >
            Grow With Us
          </Link>
          <Link
            href="/from-our-farms"
            onClick={() => setMobileMenuOpen(false)}
            className="text-neutral-700 hover:text-black py-1.5"
          >
            From Our Farms
          </Link>
          <Link
            href="/worth-knowing"
            onClick={() => setMobileMenuOpen(false)}
            className="text-neutral-700 hover:text-black py-1.5"
          >
            Worth Knowing
          </Link>
          <Link
            href="/our-story"
            onClick={() => setMobileMenuOpen(false)}
            className="text-neutral-700 hover:text-black py-1.5"
          >
            Our Story
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 py-2 px-4 rounded-full bg-[#2D7324] text-white text-center font-semibold text-xs tracking-wide flex items-center justify-center gap-1.5"
          >
            <span>Let&apos;s Grow</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}
    </header>
  );
}
