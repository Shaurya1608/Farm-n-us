"use client";

import { X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 transition-all">
      <div className="relative w-full max-w-4xl bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-zinc-700/50">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 hover:bg-black text-white transition-colors"
          aria-label="Close video"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="relative aspect-video w-full flex items-center justify-center bg-black">
          {/* High quality HTML5 farm background video simulation */}
          <iframe
            className="w-full h-full"
            src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0"
            title="Our Agricultural Journey"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-6 bg-zinc-900 text-white">
          <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">
            Our Mission & Impact
          </span>
          <h3 className="text-xl font-bold mt-1">
            Turn Land Into Productive, Living Farms
          </h3>
          <p className="text-zinc-400 text-sm mt-2">
            See how our team works directly with soil, irrigation systems, and local farmers to build sustainable agricultural ecosystems.
          </p>
        </div>
      </div>
    </div>
  );
}
