"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";

type Props = {
  before: string;
  after: string;
  alt: string;
};

export function BeforeAfterSlider({ before, after, alt }: Props) {
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);
  const container = useRef<HTMLDivElement>(null);

  const update = useCallback((clientX: number) => {
    const el = container.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(98, Math.max(2, x)));
  }, []);

  return (
    <div
      ref={container}
      className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl select-none touch-none border border-white/10 cursor-ew-resize"
      onPointerDown={(e) => {
        dragging.current = true;
        e.currentTarget.setPointerCapture(e.pointerId);
        update(e.clientX);
      }}
      onPointerMove={(e) => {
        if (!dragging.current) return;
        update(e.clientX);
      }}
      onPointerUp={() => {
        dragging.current = false;
      }}
      role="slider"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pos)}
      aria-label="Öncesi sonrası karşılaştırma"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setPos((p) => Math.max(2, p - 3));
        if (e.key === "ArrowRight") setPos((p) => Math.min(98, p + 3));
      }}
    >
      <Image
        src={after}
        alt={`${alt} sonrası`}
        fill
        className="object-cover"
        sizes="800px"
        priority={false}
      />

      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src={before}
          alt={`${alt} öncesi`}
          fill
          className="object-cover"
          sizes="800px"
        />
      </div>

      <div
        className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_12px_rgba(217,4,41,0.6)]"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-primary text-white text-xs font-bold">
          ⇄
        </div>
      </div>

      <span className="absolute left-3 top-3 rounded-full bg-black/50 px-2.5 py-1 text-[10px] uppercase tracking-wider text-white">
        Önce
      </span>
      <span className="absolute right-3 top-3 rounded-full bg-black/50 px-2.5 py-1 text-[10px] uppercase tracking-wider text-white">
        Sonra
      </span>
    </div>
  );
}
