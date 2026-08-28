"use client";

import { motion, useReducedMotion } from "framer-motion";
import { services } from "@/data/services";
import { Reveal, Stagger, fadeUp } from "@/components/ui/reveal";
import { IconBadge } from "@/components/ui/icon";
import { useCanHover } from "@/lib/motion-press";
import { cn } from "@/lib/utils";

export function ServicesGrid({
  limit,
  showHeader = true,
}: {
  limit?: number;
  showHeader?: boolean;
}) {
  const items = limit ? services.slice(0, limit) : services;
  const reduced = useReducedMotion();
  const canHover = useCanHover();

  return (
    <section id="hizmetler" className="relative overflow-x-clip bg-[#f6f6f6] pt-10 pb-14 sm:py-14 md:py-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent sm:h-32" aria-hidden />
      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-5 md:px-6">
        {showHeader && (
          <Reveal className="mx-auto mb-7 max-w-[min(100%,calc(100%-3.25rem))] text-center sm:mb-9 sm:max-w-none md:mb-10">
            <p className="type-eyebrow mb-3 inline-flex items-center gap-2 text-[#DC2626]">
              <span className="h-px w-6 bg-[#DC2626] sm:w-8" />
              Hizmetlerimiz
              <span className="h-px w-6 bg-[#DC2626] sm:w-8" />
            </p>
            <h2 className="type-h2 break-words px-1 text-[#111]">
              Profesyonel Elektrik Hizmetleri
            </h2>
            <p className="type-body mx-auto mt-3 max-w-xl break-words px-1 sm:mt-4">
              Konuttan işletmeye — her projede net süreç, şeffaf fiyat ve yazılı garanti.
            </p>
          </Reveal>
        )}

        <Stagger
          className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6 lg:grid-cols-6"
          stagger={0.09}
        >
          {items.map((service, index) => {
            const Icon = service.icon;
            const rem = items.length % 3;
            const isFirstOfLastPair =
              rem === 2 && index === items.length - 2;
            const isLoneLast = rem === 1 && index === items.length - 1;

            return (
              <motion.div
                key={service.id}
                variants={fadeUp}
                whileHover={
                  reduced || !canHover
                    ? undefined
                    : { y: -4, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }
                }
                whileTap={
                  reduced
                    ? undefined
                    : {
                        y: -4,
                        scale: 0.99,
                        transition: { duration: 0.12 },
                      }
                }
                className={cn(
                  "premium-card group flex h-full min-h-[13.5rem] w-full flex-col overflow-hidden p-4 text-left sm:min-h-[14.5rem] sm:p-5 md:min-h-[15.5rem] md:p-6",
                  "lg:col-span-2",
                  isFirstOfLastPair && "lg:col-start-2",
                  isLoneLast && "lg:col-start-3"
                )}
                onPointerDown={(e) => {
                  if (e.pointerType === "mouse") return;
                  e.currentTarget.dataset.pressY = String(e.clientY);
                  e.currentTarget.classList.add("is-pressed");
                }}
                onPointerMove={(e) => {
                  if (!e.currentTarget.classList.contains("is-pressed")) return;
                  const startY = Number(e.currentTarget.dataset.pressY || 0);
                  if (Math.abs(e.clientY - startY) > 12) {
                    e.currentTarget.classList.remove("is-pressed");
                    delete e.currentTarget.dataset.pressY;
                  }
                }}
                onPointerUp={(e) => {
                  e.currentTarget.classList.remove("is-pressed");
                  delete e.currentTarget.dataset.pressY;
                }}
                onPointerCancel={(e) => {
                  e.currentTarget.classList.remove("is-pressed");
                  delete e.currentTarget.dataset.pressY;
                }}
                onPointerLeave={(e) => {
                  e.currentTarget.classList.remove("is-pressed");
                  delete e.currentTarget.dataset.pressY;
                }}
              >
                <IconBadge icon={Icon} className="mb-4 shrink-0 group-hover:bg-[#111] group-active:bg-[#111] group-[.is-pressed]:bg-[#111] sm:mb-5" />
                <h3 className="type-h3 mb-2 break-words text-[#111] sm:mb-2.5 sm:text-[1.25rem]">
                  {service.title}
                </h3>
                <p className="min-w-0 flex-1 break-words text-sm font-normal leading-relaxed text-[#4b5563] sm:text-[15px]">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
