"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { MapPin, X, ChevronLeft, ChevronRight } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { Reveal, Stagger, fadeUp } from "@/components/ui/reveal";
import { BeforeAfterSlider } from "@/components/projects/BeforeAfterSlider";
import { useCanHover } from "@/lib/motion-press";

export function ProjectGallery({
  limit,
  showHeader = true,
}: {
  limit?: number;
  showHeader?: boolean;
}) {
  const items = limit ? projects.slice(0, limit) : projects;
  const [active, setActive] = useState<Project | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const reduced = useReducedMotion();
  const canHover = useCanHover();

  const open = (project: Project) => {
    setActive(project);
    setGalleryIndex(0);
  };

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowLeft")
        setGalleryIndex((i) => (i - 1 + active.gallery.length) % active.gallery.length);
      if (e.key === "ArrowRight")
        setGalleryIndex((i) => (i + 1) % active.gallery.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <section id="calismalar" className="section-pad bg-white">
      <div className="container-premium">
        {showHeader && (
          <Reveal className="mx-auto mb-8 max-w-2xl text-center">
            <p className="type-eyebrow mb-3 inline-flex items-center justify-center gap-2 text-[#DC2626]">
              <span className="inline-block h-2 w-2 rounded-full bg-primary" />
              Çalışmalarımız
            </p>
            <h2 className="type-h2 text-[#111]">Tamamlanan İşlerimiz</h2>
            <p className="type-body mt-3">
              Konut, ticari ve endüstriyel projelerden seçkiler.
            </p>
          </Reveal>
        )}

        <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((project) => (
            <motion.button
              key={project.id}
              type="button"
              variants={fadeUp}
              whileHover={
                reduced || !canHover
                  ? undefined
                  : { y: -3, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }
              }
              whileTap={
                reduced
                  ? undefined
                  : { y: -3, scale: 0.99, transition: { duration: 0.12 } }
              }
              onClick={() => open(project)}
              className="group relative overflow-hidden border border-black/5 bg-surface text-left shadow-sm transition-shadow duration-300 hover:shadow-md active:shadow-md focus-visible:ring-2 focus-visible:ring-primary touch-manipulation"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover:scale-105 group-active:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-primary">
                    {project.category}
                  </p>
                  <h3 className="font-heading text-lg">{project.title}</h3>
                  <p className="mt-1 flex items-center gap-1 text-xs text-white/80">
                    <MapPin className="size-3.5" />
                    {project.location}
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </Stagger>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal
            aria-label={active.title}
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/70"
              onClick={() => setActive(null)}
              aria-label="Kapat"
            />
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              className="relative z-10 max-h-[92dvh] w-full max-w-4xl overflow-y-auto rounded-t-2xl bg-white shadow-2xl sm:rounded-sm"
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center bg-black/50 text-white hover:bg-primary active:bg-primary touch-manipulation"
                aria-label="Kapat"
              >
                <X className="size-5" />
              </button>
              <div className="relative aspect-video">
                <Image
                  src={active.gallery[galleryIndex]}
                  alt={active.title}
                  fill
                  className="object-cover"
                  sizes="900px"
                />
                {active.gallery.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setGalleryIndex(
                          (i) => (i - 1 + active.gallery.length) % active.gallery.length
                        )
                      }
                      className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-white text-[#111] transition-colors touch-manipulation hover:bg-primary hover:text-white active:bg-primary active:text-white"
                      aria-label="Önceki"
                    >
                      <ChevronLeft className="size-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setGalleryIndex((i) => (i + 1) % active.gallery.length)
                      }
                      className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-white text-[#111] transition-colors touch-manipulation hover:bg-primary hover:text-white active:bg-primary active:text-white"
                      aria-label="Sonraki"
                    >
                      <ChevronRight className="size-5" />
                    </button>
                  </>
                )}
              </div>
              <div className="space-y-5 p-6 md:p-8">
                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
                    {active.category} · {active.year}
                  </p>
                  <h3 className="font-heading text-2xl md:text-3xl">{active.title}</h3>
                  <p className="mt-2 flex items-center gap-1.5 text-sm text-gray">
                    <MapPin className="size-4" />
                    {active.location}
                  </p>
                  <p className="mt-4 leading-relaxed text-gray">{active.description}</p>
                </div>
                {active.before && active.after && (
                  <div>
                    <h4 className="font-heading mb-4 text-lg">Öncesi / Sonrası</h4>
                    <BeforeAfterSlider
                      before={active.before}
                      after={active.after}
                      alt={active.title}
                    />
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
