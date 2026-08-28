"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { COVERAGE_AREAS } from "@/lib/constants";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { pressCss } from "@/lib/motion-press";

export function CoverageMap() {
  const [active, setActive] = useState<string>("atakum");
  const hub = COVERAGE_AREAS.find((a) => a.hub)!;

  return (
    <section id="bolgeler" className="section-pad bg-surface max-md:pb-5">
      <div className="container-premium flex flex-col items-center">
        <Reveal className="mb-6 w-full max-w-2xl text-center sm:mb-9 md:mb-10">
          <p className="type-eyebrow mb-3 inline-flex items-center justify-center gap-2 text-primary">
            <span className="inline-block h-2 w-2 rounded-full bg-primary" aria-hidden />
            Hizmet Alanı
          </p>
          <h2 className="type-h2 text-[#111]">Hizmet Bölgelerimiz</h2>
        </Reveal>

        <div className="mx-auto grid w-full max-w-4xl items-center gap-5 sm:gap-8 lg:max-w-none lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-9 xl:grid-cols-[minmax(0,340px)_1fr]">
          <Reveal className="flex justify-center lg:justify-start">
            <div className="relative aspect-square w-full max-w-[240px] overflow-hidden border border-black/10 bg-[#0f0f0f] sm:max-w-[300px] lg:max-w-none">
              <svg
                viewBox="0 0 100 100"
                className="coverage-map-svg h-full w-full"
                role="img"
                aria-label="Samsun hizmet bölgesi — merkez Atakum"
              >
                <defs>
                  <pattern
                    id="pcbGrid"
                    width="5"
                    height="5"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 5 0 L 0 0 0 5"
                      fill="none"
                      stroke="rgba(220,38,38,0.06)"
                      strokeWidth="0.15"
                    />
                  </pattern>
                  <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#DC2626" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#DC2626" stopOpacity="0" />
                  </radialGradient>
                </defs>

                <rect width="100" height="100" fill="url(#pcbGrid)" />

                {COVERAGE_AREAS.filter((a) => !a.hub).map((area) => {
                  const isActive = active === area.id;
                  const midX = area.x;
                  const midY = hub.y;
                  return (
                    <g key={`wire-${area.id}`}>
                      <path
                        d={`M ${hub.x} ${hub.y} L ${midX} ${midY} L ${area.x} ${area.y}`}
                        fill="none"
                        stroke={
                          isActive
                            ? "#DC2626"
                            : active === "atakum"
                              ? "rgba(220,38,38,0.4)"
                              : "rgba(255,255,255,0.12)"
                        }
                        strokeWidth={isActive ? 0.4 : 0.25}
                        strokeLinejoin="miter"
                        strokeLinecap="square"
                        style={{ pointerEvents: "none" }}
                      />
                      <circle
                        cx={midX}
                        cy={midY}
                        r="0.4"
                        fill={isActive ? "#DC2626" : "rgba(255,255,255,0.22)"}
                        style={{ pointerEvents: "none" }}
                      />
                    </g>
                  );
                })}

                {COVERAGE_AREAS.filter((a) => !a.hub).map((area) => {
                  const isActive = active === area.id;
                  const pad = isActive ? 1.35 : 1.1;
                  return (
                    <g
                      key={area.id}
                      className="cursor-pointer outline-none focus:outline-none"
                      style={{ outline: "none" }}
                      onClick={() => setActive(area.id)}
                      onMouseEnter={() => setActive(area.id)}
                    >
                      <circle cx={area.x} cy={area.y} r="5" fill="transparent" />
                      <rect
                        x={area.x - pad}
                        y={area.y - pad}
                        width={pad * 2}
                        height={pad * 2}
                        rx="0.2"
                        fill={isActive ? "#DC2626" : "#1a1a1a"}
                        stroke={isActive ? "#f87171" : "rgba(255,255,255,0.3)"}
                        strokeWidth="0.25"
                        style={{ pointerEvents: "none" }}
                      />
                      <circle
                        cx={area.x}
                        cy={area.y}
                        r="0.5"
                        fill={isActive ? "#fff" : "rgba(220,38,38,0.85)"}
                        style={{ pointerEvents: "none" }}
                      />
                      <text
                        x={area.x}
                        y={area.y - 3.2}
                        textAnchor="middle"
                        fill={isActive ? "#ffffff" : "rgba(255,255,255,0.55)"}
                        style={{
                          fontSize: "2px",
                          fontFamily: "var(--font-plus-jakarta), sans-serif",
                          fontWeight: isActive ? 700 : 500,
                          pointerEvents: "none",
                        }}
                      >
                        {area.name}
                      </text>
                    </g>
                  );
                })}

                <g
                  className="cursor-pointer outline-none focus:outline-none"
                  style={{ outline: "none" }}
                  onClick={() => setActive("atakum")}
                  onMouseEnter={() => setActive("atakum")}
                >
                  <circle cx={hub.x} cy={hub.y} r="9" fill="url(#hubGlow)" />
                  <circle cx={hub.x} cy={hub.y} r="8" fill="transparent" />
                  <circle
                    cx={hub.x}
                    cy={hub.y}
                    r="4.2"
                    fill="none"
                    stroke="#DC2626"
                    strokeWidth="0.35"
                  />
                  <circle
                    cx={hub.x}
                    cy={hub.y}
                    r="3.1"
                    fill="#DC2626"
                    stroke="#ffffff"
                    strokeWidth="0.3"
                  />
                  <path
                    d={`M ${hub.x + 0.15} ${hub.y - 1.55}
                        L ${hub.x - 0.7} ${hub.y + 0.1}
                        L ${hub.x + 0.1} ${hub.y + 0.1}
                        L ${hub.x - 0.15} ${hub.y + 1.55}
                        L ${hub.x + 0.7} ${hub.y - 0.1}
                        L ${hub.x - 0.1} ${hub.y - 0.1} Z`}
                    fill="#ffffff"
                    style={{ pointerEvents: "none" }}
                  />
                  <text
                    x={hub.x}
                    y={hub.y - 6.2}
                    textAnchor="middle"
                    fill="#ffffff"
                    style={{
                      fontSize: "2.3px",
                      fontFamily: "var(--font-plus-jakarta), sans-serif",
                      fontWeight: 800,
                      pointerEvents: "none",
                    }}
                  >
                    Atakum
                  </text>
                  <text
                    x={hub.x}
                    y={hub.y + 7.4}
                    textAnchor="middle"
                    fill="#DC2626"
                    style={{
                      fontSize: "1.55px",
                      fontFamily: "var(--font-plus-jakarta), sans-serif",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      pointerEvents: "none",
                    }}
                  >
                    MERKEZ
                  </text>
                </g>
              </svg>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="w-full min-w-0">
            <ul className="fab-center-safe mx-auto grid grid-cols-1 gap-3 md:max-w-none md:grid-cols-2 md:gap-3.5">
              {COVERAGE_AREAS.map((area) => {
                const isActive = active === area.id;
                const isHub = Boolean(area.hub);
                return (
                  <li key={area.id} className="min-w-0">
                    <button
                      type="button"
                      onMouseEnter={() => setActive(area.id)}
                      onFocus={() => setActive(area.id)}
                      onClick={() => setActive(area.id)}
                      aria-pressed={isActive}
                      className={cn(
                        "flex min-h-12 w-full items-center gap-2.5 rounded-md border px-3.5 py-3.5 text-left leading-none transition-colors touch-manipulation sm:min-h-14 sm:gap-3 sm:px-4 sm:py-4",
                        pressCss,
                        isActive
                          ? "border-primary bg-primary text-white"
                          : isHub
                            ? "border-primary/25 bg-white text-[#111] hover:border-primary/50 active:border-primary/50"
                            : "border-black/8 bg-white text-[#111] hover:border-primary/35 active:border-primary/35"
                      )}
                    >
                      <MapPin
                        className={cn(
                          "size-4 shrink-0 sm:size-[18px]",
                          isActive ? "text-white" : "text-primary"
                        )}
                        strokeWidth={1.75}
                        aria-hidden
                      />
                      <span className="font-heading flex min-w-0 flex-1 items-center justify-between gap-2 text-[14px] font-bold sm:text-[15px]">
                        <span className="truncate">{area.name}</span>
                        {isHub ? (
                          <span
                            className={cn(
                              "inline-flex shrink-0 whitespace-nowrap rounded-sm px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider sm:text-[10px]",
                              isActive
                                ? "bg-white/20 text-white"
                                : "bg-primary/10 text-primary"
                            )}
                          >
                            Merkez
                          </span>
                        ) : null}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
