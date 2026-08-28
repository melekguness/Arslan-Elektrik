"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Phone, MessageCircle } from "lucide-react";
import { IMAGES } from "@/data/images";
import { SITE } from "@/lib/constants";
import { MotionAnchor } from "@/components/ui/interactive";
import { pressCssHero } from "@/lib/motion-press";
import { cn } from "@/lib/utils";

const slides = [
  {
    eyebrow: "Atakum’un Güvenilir Markası",
    title: "Kalite bizden, tercih sizden.",
    support: "Tesisattan acil müdahaleye — yazılı garanti.",
    image: IMAGES.hero.panelHero,
    alt: "Profesyonel elektrik panosu ve sigortalar",
    objectPos: "object-[72%_center] md:object-[68%_center]",
    kenBurns: false as const,
  },
  {
    eyebrow: "Uydu · Çanak Anten",
    title: "Net sinyal, doğru montaj.",
    support: "Çanak kurulumu, yön ayarı ve sinyal ölçümü.",
    image: "/images/hero-canak-fill-m.jpg",
    imageDesktop: "/images/hero-canak-gen.jpg",
    alt: "Çanak anten ve sinyal ölçer",
    objectPos: "object-[100%_68%] max-md:scale-[1.08] max-md:origin-right",
    objectPosDesktop: "object-[70%_48%] lg:object-[65%_45%]",
    kenBurns: false as const,
    unoptimized: true,
    fillMobile: true as const,
    fillMobileBg: "#7A90A8",
  },
  {
    eyebrow: "IP Kamera Sistemleri",
    title: "Güvenli izleme, net görüntü.",
    support: "IP kamera, NVR ve uzaktan izleme çözümleri.",
    image: "/images/hero-kamera-fill-m.jpg",
    imageDesktop: "/images/hero-kamera-ptz.jpg?v=3",
    alt: "Premium PTZ güvenlik kamerası",
    objectPos: "object-[100%_40%] max-md:scale-[1.06] max-md:origin-right",
    objectPosDesktop: "object-[82%_38%] lg:object-[78%_36%]",
    kenBurns: false as const,
    unoptimized: true,
    fillMobile: true as const,
    fillMobileBg: "#C4A882",
  },
];

const arrowBtn =
  "flex h-10 w-10 min-h-10 min-w-10 shrink-0 items-center justify-center rounded-full border border-white/45 bg-black/40 text-white backdrop-blur-md transition touch-manipulation md:h-12 md:w-12 active:scale-105 active:bg-white active:text-[#DC2626] [@media(hover:hover)_and_(pointer:fine)]:hover:scale-105 [@media(hover:hover)_and_(pointer:fine)]:hover:bg-white [@media(hover:hover)_and_(pointer:fine)]:hover:text-[#DC2626]";

const heroTextParent = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
  exit: {
    transition: { staggerChildren: 0.04, staggerDirection: -1 },
  },
};

const heroTextItem = {
  hidden: { opacity: 0, x: -36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: {
    opacity: 0,
    x: 20,
    transition: { duration: 0.25 },
  },
};

export function Hero() {
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, [index]);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  const isLayered = "layered" in slide && slide.layered === true;
  const kenBurnsOff = "kenBurns" in slide && slide.kenBurns === false;
  const skyMobile = "skyMobile" in slide && slide.skyMobile === true;
  const fillMobile =
    "fillMobile" in slide && slide.fillMobile === true;
  const fillMobileBg =
    "fillMobileBg" in slide && typeof slide.fillMobileBg === "string"
      ? slide.fillMobileBg
      : "#111";
  
  const panelWidth = "w-[50%] sm:w-[48%] md:w-[42%] lg:w-[38%]";

  const sectionBg = isLayered
    ? "bg-[#2a3550]"
    : skyMobile
      ? "bg-[#9aab90] md:bg-[#111]"
      : "bg-[#111]";

  return (
    <section
      id="anasayfa"
      className={cn(
        "relative flex min-h-0 flex-1 flex-col overflow-hidden",
        sectionBg
      )}
      aria-roledescription="carousel"
      aria-label="Ana slider"
    >
      <div className="pointer-events-none absolute h-0 w-0 overflow-hidden" aria-hidden>
        {slides.map((s) => (
          <span key={s.image}>
            <Image src={s.image} alt="" width={16} height={16} priority />
            {"imageDesktop" in s && s.imageDesktop ? (
              <Image src={s.imageDesktop} alt="" width={16} height={16} priority />
            ) : null}
          </span>
        ))}
      </div>
      <div className="relative mx-auto flex min-h-0 w-full max-w-[1400px] flex-1 flex-col overflow-hidden">
        <div className="relative isolate min-h-[min(68dvh,520px)] flex-1 overflow-hidden sm:min-h-[520px] md:min-h-[calc(100dvh-var(--header-offset))]">
          {}
          <div
            className={cn(
              "absolute inset-0 z-0",
              skyMobile
                ? "bg-[#9aab90] max-md:bg-[#9aab90] md:bg-black"
                : "bg-black"
            )}
          >
            <AnimatePresence initial={false}>
              <motion.div
                key={
                  "imageDesktop" in slide && slide.imageDesktop
                    ? `${slide.image}|${slide.imageDesktop}`
                    : slide.image
                }
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  className="absolute inset-0"
                  initial={kenBurnsOff ? false : { scale: 1.04 }}
                  animate={kenBurnsOff ? { scale: 1 } : { scale: 1.12 }}
                  transition={
                    kenBurnsOff
                      ? { duration: 0 }
                      : { duration: 6.5, ease: "linear" }
                  }
                >
                  {isLayered ? (
                    <>
                      <Image
                        src={slide.image}
                        alt={slide.alt}
                        fill
                        priority
                        quality={100}
                        unoptimized
                        className={cn("object-cover md:hidden", slide.objectPos)}
                        sizes="100vw"
                      />
                      <div className="absolute inset-0 hidden md:block" aria-hidden>
                        <Image
                          src={slide.image}
                          alt=""
                          fill
                          priority
                          quality={100}
                          unoptimized
                          className="scale-125 object-cover object-left blur-2xl brightness-[1.05] saturate-[1.05]"
                          sizes="100vw"
                        />
                      </div>
                      <div className="hero-canak-fg absolute inset-y-0 right-0 hidden w-[54%] md:block lg:w-[50%] xl:w-[48%]">
                        <Image
                          src={slide.image}
                          alt={slide.alt}
                          fill
                          priority
                          quality={100}
                          unoptimized
                          className="object-cover object-[88%_52%]"
                          sizes="55vw"
                        />
                      </div>
                    </>
                  ) : fillMobile ? (
                    <>
                      {}
                      <div
                        className="absolute inset-0 md:hidden"
                        style={{ background: fillMobileBg }}
                        aria-hidden
                      />
                      <Image
                        src={slide.image}
                        alt={slide.alt}
                        fill
                        priority
                        quality={100}
                        unoptimized
                        className={cn(
                          "object-cover md:hidden",
                          slide.objectPos ?? "object-right object-center"
                        )}
                        sizes="100vw"
                      />
                      <Image
                        src={
                          "imageDesktop" in slide && slide.imageDesktop
                            ? slide.imageDesktop
                            : slide.image
                        }
                        alt={slide.alt}
                        fill
                        priority
                        quality={100}
                        unoptimized
                        className={cn(
                          "hidden object-cover md:block",
                          slide.objectPosDesktop ?? "object-right"
                        )}
                        sizes="100vw"
                      />
                    </>
                  ) : skyMobile ? (
                    <>
                      <div
                        className="absolute inset-0 md:hidden"
                        style={{
                          background:
                            "linear-gradient(180deg, #c4a882 0%, #8a9a88 55%, #6a7a70 100%)",
                        }}
                        aria-hidden
                      />
                      <Image
                        src={slide.image}
                        alt={slide.alt}
                        fill
                        priority
                        quality={100}
                        unoptimized
                        className="object-cover object-right object-[center_38%] md:hidden"
                        sizes="100vw"
                      />
                      <Image
                        src={
                          "imageDesktop" in slide && slide.imageDesktop
                            ? slide.imageDesktop
                            : slide.image
                        }
                        alt={slide.alt}
                        fill
                        priority
                        quality={100}
                        unoptimized
                        className={cn(
                          "hidden object-cover md:block",
                          slide.objectPosDesktop ?? "object-right"
                        )}
                        sizes="100vw"
                      />
                    </>
                  ) : (
                    <>
                      <Image
                        src={slide.image}
                        alt={slide.alt}
                        fill
                        priority
                        quality={100}
                        unoptimized={
                          "unoptimized" in slide ? !!slide.unoptimized : false
                        }
                        className={cn(
                          "object-cover",
                          slide.objectPos,
                          "imageDesktop" in slide && slide.imageDesktop
                            ? "md:hidden"
                            : ""
                        )}
                        sizes="100vw"
                      />
                      {"imageDesktop" in slide && slide.imageDesktop ? (
                        <Image
                          src={slide.imageDesktop}
                          alt={slide.alt}
                          fill
                          priority
                          quality={100}
                          unoptimized
                          className={cn(
                            "hidden object-cover md:block",
                            slide.objectPosDesktop ?? "object-right"
                          )}
                          sizes="100vw"
                        />
                      ) : null}
                    </>
                  )}
                </motion.div>
              </motion.div>
            </AnimatePresence>
            {}
            {!isLayered && (
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(0,0,0,0.04) 45%, rgba(0,0,0,0.1) 100%)",
                }}
                aria-hidden
              />
            )}
          </div>

          {}
          <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden" aria-hidden>
            <div
              className={cn(
                "hero-diagonal absolute inset-y-0 left-0 bg-[#DC2626] shadow-[10px_0_32px_rgba(0,0,0,0.18)]",
                panelWidth
              )}
            />
            {}
            <div
              className={cn(
                "hero-diagonal absolute inset-y-0 left-0",
                panelWidth
              )}
              style={{
                background:
                  "linear-gradient(105deg, transparent 0%, transparent 96.5%, rgba(255,255,255,0.4) 98%, transparent 100%)",
              }}
            />
          </div>

          {}
          <div className="relative z-20 flex h-full min-h-[min(68dvh,520px)] items-start overflow-x-clip pl-[max(0.875rem,env(safe-area-inset-left))] pr-2 pb-[5.5rem] pt-[max(4.25rem,calc(env(safe-area-inset-top,0px)+3.25rem))] sm:min-h-[520px] sm:items-center sm:overflow-visible sm:px-6 sm:pb-14 sm:pt-[max(1.25rem,env(safe-area-inset-top,0px))] md:min-h-[calc(100dvh-var(--header-offset))] md:pl-[max(1.75rem,calc((100vw-1200px)/2))] md:pr-10 md:pb-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.title}
                className="min-w-0 max-w-[min(7.75rem,calc(50vw*0.72-1.15rem))] overflow-hidden text-white sm:max-w-[240px] md:max-w-[280px] lg:max-w-[320px]"
                variants={heroTextParent}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.p
                  variants={heroTextItem}
                  className="mb-1.5 inline-flex max-w-full items-center gap-2 text-[9px] font-bold uppercase leading-snug tracking-[0.06em] text-white/95 sm:mb-3 sm:text-[11px] sm:tracking-[0.1em] md:mb-5 md:text-[12px] md:tracking-[0.16em]"
                >
                  <span className="hidden h-px w-8 shrink-0 bg-white/70 sm:block md:w-10" />
                  <span className="min-w-0 break-words hyphens-auto">{slide.eyebrow}</span>
                </motion.p>
                <motion.h1
                  variants={heroTextItem}
                  className="font-heading text-[clamp(1.05rem,4.8vw,2.55rem)] font-bold leading-[1.15] tracking-tight text-white break-words hyphens-auto"
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  variants={heroTextItem}
                  className="mt-1.5 max-w-full break-words text-[11px] leading-snug text-white/95 sm:mt-3 sm:text-[15px] sm:leading-relaxed md:mt-5"
                >
                  {slide.support}
                </motion.p>
                <motion.div
                  variants={heroTextItem}
                  className="mt-3.5 flex w-full min-w-0 flex-col gap-2 sm:mt-7 sm:w-[12rem] sm:gap-2.5 md:mt-9"
                  role="group"
                  aria-label="İletişim seçenekleri"
                >
                  <MotionAnchor
                    href={SITE.phoneHref}
                    hero
                    className={cn(
                      "cta-shine inline-flex h-11 min-h-11 w-full min-w-0 origin-left items-center justify-center gap-1 overflow-hidden rounded-lg bg-white px-1.5 text-[10px] font-bold uppercase leading-none tracking-[0.02em] text-[#DC2626] shadow-sm touch-manipulation sm:origin-center sm:h-[3.25rem] sm:gap-2 sm:px-3 sm:text-xs sm:tracking-[0.06em]",
                      pressCssHero,
                      "hover:!bg-black hover:!text-white active:!bg-black active:!text-white"
                    )}
                  >
                    <Phone className="relative z-[1] size-3.5 shrink-0 sm:size-4" strokeWidth={2} aria-hidden />
                    <span className="relative z-[1] min-w-0 truncate">Hemen Ara</span>
                  </MotionAnchor>
                  <MotionAnchor
                    href={SITE.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    hero
                    className={cn(
                      "cta-shine inline-flex h-11 min-h-11 w-full min-w-0 origin-left items-center justify-center gap-1 overflow-hidden rounded-lg bg-[#1FA855] px-1.5 text-[10px] font-bold uppercase leading-none tracking-[0.02em] text-white shadow-sm touch-manipulation sm:origin-center sm:h-[3.25rem] sm:gap-2 sm:px-3 sm:text-xs sm:tracking-[0.06em]",
                      pressCssHero,
                      "hover:!bg-[#178C46] active:!bg-[#178C46]"
                    )}
                  >
                    <MessageCircle className="relative z-[1] size-3.5 shrink-0 sm:size-4" strokeWidth={2} aria-hidden />
                    <span className="relative z-[1] min-w-0 truncate">Mesaj Gönder</span>
                  </MotionAnchor>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {}
          <div className="absolute inset-x-0 bottom-0 z-30 flex items-center justify-center gap-3 px-3 pb-3 pt-10 md:hidden">
            <button type="button" onClick={prev} className={arrowBtn} aria-label="Önceki">
              <ChevronLeft className="size-4" strokeWidth={1.75} />
            </button>
            <div className="flex items-center gap-2.5 rounded-full border border-white/25 bg-black/45 px-3 py-1.5 backdrop-blur-md">
              <p className="whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.16em] text-white/95">
                0{index + 1} — 0{slides.length}
              </p>
              <div className="flex items-center gap-1.5" role="tablist" aria-label="Slaytlar">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Slayt ${i + 1}`}
                    aria-current={i === index}
                    onClick={() => setIndex(i)}
                    className={`h-1.5 rounded-full transition-all touch-manipulation ${
                      i === index
                        ? "w-6 bg-white"
                        : "w-1.5 bg-white/45 active:bg-white/75"
                    }`}
                  />
                ))}
              </div>
            </div>
            <button type="button" onClick={next} className={arrowBtn} aria-label="Sonraki">
              <ChevronRight className="size-4" strokeWidth={1.75} />
            </button>
          </div>

          {}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 hidden justify-center pb-8 pt-12 md:flex">
            <div className="pointer-events-auto flex items-center gap-3 rounded-full border border-white/25 bg-black/40 px-4 py-2 backdrop-blur-md">
              <p className="whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.16em] text-white/95 md:text-[12px]">
                0{index + 1} — 0{slides.length}
              </p>
              <div className="flex items-center gap-2" role="tablist" aria-label="Slaytlar">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Slayt ${i + 1}`}
                    aria-current={i === index}
                    onClick={() => setIndex(i)}
                    className={`h-1.5 rounded-full transition-all touch-manipulation ${
                      i === index
                        ? "w-9 bg-white"
                        : "w-2 bg-white/45 active:bg-white/75 [@media(hover:hover)_and_(pointer:fine)]:hover:bg-white/75"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={prev}
            className={`${arrowBtn} absolute left-[40%] top-1/2 z-30 hidden -translate-y-1/2 md:flex`}
            aria-label="Önceki"
          >
            <ChevronLeft className="size-5" strokeWidth={1.75} />
          </button>
          <button
            type="button"
            onClick={next}
            className={`${arrowBtn} absolute right-6 top-1/2 z-30 hidden -translate-y-1/2 md:flex`}
            aria-label="Sonraki"
          >
            <ChevronRight className="size-5" strokeWidth={1.75} />
          </button>
        </div>
      </div>
    </section>
  );
}
