"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useInView } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";

const stats = [
  { value: 10, suffix: "+", label: "Yıl Deneyim" },
  { value: 1000, suffix: "+", label: "Giderilen Arıza" },
  { value: 100, suffix: "%", label: "Müşteri Odaklılık" },
  { value: 4, suffix: "", label: "Hizmet Bölgesi" },
];

function Counter({
  value,
  suffix,
  active,
}: {
  value: number;
  suffix: string;
  active: boolean;
}) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / 1700);
      setN(Math.round(value * (1 - Math.pow(1 - t, 3))));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, value]);
  return (
    <span>
      {n}
      {suffix}
    </span>
  );
}

export function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <section className="relative overflow-hidden bg-[#DC2626] py-12 text-white sm:py-14 md:py-16">
      {}
      <Image
        src="/images/stats-bg.jpg"
        alt=""
        fill
        priority={false}
        sizes="100vw"
        className="scale-105 object-cover object-center opacity-[0.26] blur-[1.5px]"
        aria-hidden
      />
      <div className="film-grain absolute inset-0 opacity-28" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/28 via-transparent to-black/28"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_15%,rgba(0,0,0,0.22)_100%)]"
        aria-hidden
      />

      <div
        ref={ref}
        className="relative mx-auto grid max-w-[1200px] grid-cols-2 gap-x-2 gap-y-6 px-4 sm:gap-x-3 sm:gap-y-10 sm:px-5 lg:grid-cols-4 lg:gap-0"
      >
        {stats.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 0.1}
            className={`px-1 text-center lg:px-6 ${
              i < stats.length - 1 ? "lg:border-r lg:border-white/20" : ""
            }`}
          >
            <p className="font-heading text-[clamp(1.5rem,4.5vw,2.35rem)] font-bold tabular-nums tracking-tight text-white">
              <Counter value={stat.value} suffix={stat.suffix} active={inView} />
            </p>
            <p
              className="mt-2 break-words text-[11px] font-semibold uppercase leading-snug tracking-[0.12em] text-white sm:mt-3 sm:text-[13px]"
              style={{ opacity: 0.95 }}
            >
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
