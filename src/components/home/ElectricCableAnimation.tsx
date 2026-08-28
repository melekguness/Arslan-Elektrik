"use client";

import { motion } from "framer-motion";

export function ElectricCableAnimation({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 400"
      className={`pointer-events-none absolute inset-x-0 bottom-0 w-full opacity-70 ${className}`}
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="cableStroke" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.18)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
        </linearGradient>
        <filter id="cableGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {}
      <path
        d="M0 280 C 180 220, 280 340, 480 260 S 780 180, 980 250 S 1100 310, 1200 240"
        fill="none"
        stroke="url(#cableStroke)"
        strokeWidth="3"
      />
      <path
        d="M0 310 C 200 360, 340 250, 520 300 S 820 360, 1020 280 S 1120 250, 1200 300"
        fill="none"
        stroke="url(#cableStroke)"
        strokeWidth="2.5"
      />
      <path
        d="M0 200 C 160 160, 300 240, 460 190 S 760 140, 960 200 S 1100 240, 1200 180"
        fill="none"
        stroke="url(#cableStroke)"
        strokeWidth="2"
      />

      {}
      <motion.path
        d="M0 280 C 180 220, 280 340, 480 260 S 780 180, 980 250 S 1100 310, 1200 240"
        fill="none"
        stroke="#D90429"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="28 320"
        filter="url(#cableGlow)"
        initial={{ strokeDashoffset: 0 }}
        animate={{ strokeDashoffset: -700 }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
      />
      <motion.path
        d="M0 310 C 200 360, 340 250, 520 300 S 820 360, 1020 280 S 1120 250, 1200 300"
        fill="none"
        stroke="#FF304F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="18 280"
        filter="url(#cableGlow)"
        initial={{ strokeDashoffset: 0 }}
        animate={{ strokeDashoffset: 600 }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "linear", delay: 0.6 }}
      />
      <motion.path
        d="M0 200 C 160 160, 300 240, 460 190 S 760 140, 960 200 S 1100 240, 1200 180"
        fill="none"
        stroke="#D90429"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeDasharray="12 240"
        filter="url(#cableGlow)"
        initial={{ strokeDashoffset: 0 }}
        animate={{ strokeDashoffset: -500 }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "linear", delay: 1.1 }}
      />
    </svg>
  );
}
