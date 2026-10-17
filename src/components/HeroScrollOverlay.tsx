"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface HeroScrollOverlayProps {
  hero: ReactNode;
  children: ReactNode;
}

export default function HeroScrollOverlay({
  hero,
  children,
}: HeroScrollOverlayProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const [stickyTop, setStickyTop] = useState<string>("0px");

  useEffect(() => {
    const calculateStickyTop = () => {
      if (!heroRef.current) return;
      const heroHeight = heroRef.current.offsetHeight;
      const vh = window.innerHeight;

      // If the Hero + StatsBar section is taller than the viewport,
      // it scrolls naturally until the bottom of the number section hits
      // the bottom of the viewport, then it sticks in place!
      if (heroHeight > vh) {
        setStickyTop(`${vh - heroHeight}px`);
      } else {
        // If the entire Hero + StatsBar fits inside the viewport,
        // it sticks cleanly at the top (top: 0px)
        setStickyTop("0px");
      }
    };

    calculateStickyTop();

    // Recalculate on window resize or when layout shifts
    window.addEventListener("resize", calculateStickyTop);

    // Also observe size changes of the hero container
    const resizeObserver = new ResizeObserver(() => {
      calculateStickyTop();
    });

    if (heroRef.current) {
      resizeObserver.observe(heroRef.current);
    }

    return () => {
      window.removeEventListener("resize", calculateStickyTop);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="relative w-full">
      {/* ── BASE LAYER: HERO & METRICS (STICKY UNTIL OVERLAID) ── */}
      <div
        ref={heroRef}
        style={{ top: stickyTop }}
        className="sticky z-0 w-full will-change-transform"
      >
        {hero}
      </div>

      {/* ── OVERLAY LAYER: THE CONNECTION & SUBSEQUENT SECTIONS ── */}
      {/* Slides UP and OVER the hero & statsbar with rounded top and deep shadow */}
      <div className="relative z-10 w-full bg-white rounded-t-[32px] sm:rounded-t-[44px] shadow-[0_-25px_60px_-15px_rgba(0,0,0,0.18)] border-t border-neutral-200/80">
        {/* Subtle decorative curtain pull indicator for enhanced tactile feel */}
        <div className="w-full flex justify-center pt-3 pb-1" aria-hidden="true">
          <div className="w-12 h-1 rounded-full bg-neutral-200/80" />
        </div>
        {children}
      </div>
    </div>
  );
}
