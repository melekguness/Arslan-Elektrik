"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/content";
import { Reveal } from "@/components/ui/reveal";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4500, stopOnInteraction: true })]
  );
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="section-pad bg-white">
      <div className="container-premium">
        <Reveal className="mb-8 text-center max-w-2xl mx-auto">
          <p className="type-eyebrow mb-3 inline-flex items-center justify-center gap-2 text-[#DC2626]">
            <span className="inline-block h-2 w-2 rounded-full bg-primary" />
            Müşteri Yorumları
          </p>
          <h2 className="type-h2 text-[#111]">
            Müşterilerimiz Ne Diyor?
          </h2>
        </Reveal>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-5">
              {testimonials.map((t) => (
                <article
                  key={t.id}
                  className="relative min-w-0 shrink-0 grow-0 basis-full md:basis-[calc(50%-10px)] lg:basis-[calc(33.333%-14px)] bg-surface border border-black/5 p-7"
                >
                  <Quote className="absolute right-6 top-6 size-10 text-primary/20" />
                  <div className="flex gap-1 mb-4" aria-label={`${t.rating} yıldız`}>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="size-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-sm text-gray leading-relaxed mb-8 min-h-[6.5rem]">
                    “{t.quote}”
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#DC2626] text-xs font-bold text-white">
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">{t.name}</p>
                      <p className="text-xs text-gray">{t.role} · {t.company}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  aria-label={`Yorum ${i + 1}`}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`h-2 rounded-full transition-all ${
                    selected === i ? "w-8 bg-primary" : "w-2 bg-black/15 hover:bg-black/30 active:bg-black/30"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button type="button" onClick={() => emblaApi?.scrollPrev()} className="flex h-10 w-10 items-center justify-center border border-black/10 bg-white touch-manipulation hover:border-primary hover:text-primary active:border-primary active:text-primary" aria-label="Önceki">
                <ChevronLeft className="size-4" />
              </button>
              <button type="button" onClick={() => emblaApi?.scrollNext()} className="flex h-10 w-10 items-center justify-center border border-black/10 bg-white touch-manipulation hover:border-primary hover:text-primary active:border-primary active:text-primary" aria-label="Sonraki">
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
