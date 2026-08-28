"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  a: number;
};

export function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let w = 0;
    let h = 0;
    let frame = 0;
    let particles: Particle[] = [];
    let offset = 0;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      const count = Math.min(70, Math.floor((w * h) / 28000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.4,
        a: Math.random() * 0.4 + 0.1,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      
      offset += 0.15;
      const g = ctx.createRadialGradient(
        w * 0.7 + Math.sin(offset * 0.01) * 40,
        h * 0.35,
        0,
        w * 0.5,
        h * 0.5,
        Math.max(w, h) * 0.8
      );
      g.addColorStop(0, "rgba(217,4,41,0.06)");
      g.addColorStop(0.45, "rgba(11,11,11,0)");
      g.addColorStop(1, "rgba(11,11,11,0.4)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      
      for (let i = 0; i < 3; i++) {
        const sx = w * (0.2 + i * 0.28) + Math.sin(offset * 0.008 + i) * 30;
        const sy = h * 0.7 + Math.cos(offset * 0.006 + i) * 20;
        const sg = ctx.createRadialGradient(sx, sy, 0, sx, sy, 180);
        sg.addColorStop(0, "rgba(180,180,180,0.05)");
        sg.addColorStop(1, "transparent");
        ctx.fillStyle = sg;
        ctx.beginPath();
        ctx.arc(sx, sy, 180, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!prefersReduced) {
        particles.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0) p.x = w;
          if (p.x > w) p.x = 0;
          if (p.y < 0) p.y = h;
          if (p.y > h) p.y = 0;
          ctx.beginPath();
          ctx.fillStyle = `rgba(255,255,255,${p.a})`;
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      frame = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden
    />
  );
}
