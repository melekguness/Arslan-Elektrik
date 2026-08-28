"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";

const steps = [
  { label: "Akım akıyor", detail: "Sistem taranıyor" },
  { label: "Sorun tespit", detail: "Anomali yakalandı" },
  { label: "Onarım", detail: "Müdahale başladı" },
  { label: "Güç restore", detail: "Sistem stabil" },
];

export function ProcessStory() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!inView) return;
    setStep(0);
    const timers = [
      setTimeout(() => setStep(1), 900),
      setTimeout(() => setStep(2), 2000),
      setTimeout(() => setStep(3), 3200),
    ];
    const loop = setInterval(() => {
      setStep(0);
      setTimeout(() => setStep(1), 900);
      setTimeout(() => setStep(2), 2000);
      setTimeout(() => setStep(3), 3200);
    }, 5000);
    return () => {
      timers.forEach(clearTimeout);
      clearInterval(loop);
    };
  }, [inView]);

  const progress = ((step + 1) / 4) * 100;

  return (
    <section className="relative section-pad overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />
      <div className="container-wide relative" ref={ref}>
        <Reveal className="mb-9 text-center max-w-2xl mx-auto">
          <p className="type-eyebrow mb-3 text-[#DC2626]">
            Metodoloji
          </p>
          <h2 className="type-h2 text-balance text-[#111]">
            Elektrik Sorununu Nasıl Çözüyoruz?
          </h2>
          <p className="type-body mt-4">
            Teşhisten restorasyona — her adım ölçülebilir, görünür ve kontrollü.
          </p>
        </Reveal>

        <div className="relative mx-auto max-w-5xl rounded-3xl border border-white/8 bg-surface/60 p-6 md:p-12 overflow-hidden">
          <div className="pcb-pattern absolute inset-0" />

          <svg
            viewBox="0 0 900 160"
            className="relative w-full h-auto"
            aria-hidden
          >
            <defs>
              <filter id="processGlow">
                <feGaussianBlur stdDeviation="4" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {}
            <path
              d="M40 80 H860"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M40 80 H860"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="14"
              strokeLinecap="round"
            />

            {}
            <motion.path
              d="M40 80 H860"
              stroke="#D90429"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="40 200"
              filter="url(#processGlow)"
              animate={{
                strokeDashoffset: step >= 3 ? 0 : -400,
                opacity: step === 2 ? 0.35 : 1,
              }}
              transition={{
                strokeDashoffset: {
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "linear",
                },
                opacity: { duration: 0.4 },
              }}
            />

            {}
            <motion.circle
              cx="450"
              cy="80"
              r="10"
              fill="#D90429"
              animate={{
                opacity: step === 1 || step === 2 ? [0.3, 1, 0.3] : 0,
                scale: step === 1 || step === 2 ? [1, 1.4, 1] : 0.5,
              }}
              transition={{ duration: 0.8, repeat: Infinity }}
              style={{ filter: "url(#processGlow)" }}
            />

            {}
            {step >= 2 && (
              <motion.path
                d="M430 55 Q450 20 470 55"
                stroke="#FF304F"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.9 }}
                transition={{ duration: 0.6 }}
              />
            )}

            {}
            {[120, 300, 450, 600, 780].map((x, i) => (
              <motion.circle
                key={x}
                cx={x}
                cy={80}
                r="5"
                fill={step >= 3 ? "#D90429" : "rgba(255,255,255,0.25)"}
                animate={{
                  opacity: step >= 3 ? 1 : 0.5,
                  filter:
                    step >= 3
                      ? "drop-shadow(0 0 8px rgba(217,4,41,0.8))"
                      : "none",
                }}
                transition={{ delay: i * 0.05 }}
              />
            ))}
          </svg>

          <div className="relative mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {steps.map((s, i) => (
              <div
                key={s.label}
                className={`rounded-2xl border p-4 transition-all duration-500 ${
                  step >= i
                    ? "border-primary/40 bg-primary/10"
                    : "border-white/8 bg-white/[0.02]"
                }`}
              >
                <p className="type-eyebrow mb-1 text-[10px] tracking-[0.16em] text-primary">
                  0{i + 1}
                </p>
                <p className="font-heading text-sm text-white">{s.label}</p>
                <p className="text-xs text-gray mt-1">{s.detail}</p>
              </div>
            ))}
          </div>

          <div className="relative mt-6 h-1 rounded-full bg-white/5 overflow-hidden">
            <motion.div
              className="h-full bg-primary shadow-[0_0_12px_rgba(217,4,41,0.6)]"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
