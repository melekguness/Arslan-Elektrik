"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { Reveal, Stagger, fadeUp } from "@/components/ui/reveal";

const images = [
  {
    src: "/images/about-biz-2.jpg?v=3",
    alt: "Teknisyen çatıda çanak anten LNB ayarı ve sinyal ölçümü yapıyor",
    objectPos: "object-center",
    fit: "contain" as const,
  },
  {
    src: "/images/about-biz-3.jpg?v=7",
    alt: "Teknisyen dış cepheye IP güvenlik kamerası montajı yapıyor",
    objectPos: "object-[48%_42%]",
  },
  {
    src: "/images/about-biz-1.jpg",
    alt: "Elektrik teknisyeni sigorta panosunda ölçü aletiyle kontrol yapıyor",
    objectPos: "object-[42%_48%]",
  },
];

export function WhoWeAre() {
  return (
    <section
      id="hakkimizda"
      className="relative overflow-x-hidden bg-white py-8 sm:py-12 md:py-14 lg:py-14"
    >
      <div className="mx-auto grid max-w-[1200px] min-w-0 grid-cols-1 items-center gap-7 px-4 sm:gap-8 sm:px-5 md:px-6 lg:grid-cols-2 lg:gap-10">
        <Reveal effect="down" className="order-1 min-w-0 lg:order-2">
          <p className="type-eyebrow mb-3 inline-flex items-center gap-2 text-[#DC2626]">
            <Zap className="size-4 shrink-0 text-[#DC2626]" strokeWidth={2.25} aria-hidden />
            Biz Kimiz
          </p>

          <h2 className="font-heading text-[clamp(1.3rem,4.2vw,2rem)] font-bold leading-[1.2] tracking-tight text-[#111] break-words">
            Elektrik sorunlarınıza kalıcı çözümler sunuyoruz
          </h2>

          <p className="mt-4 border-l-[3px] border-[#DC2626] pl-3 text-[13px] font-semibold leading-snug text-[#DC2626] sm:mt-5 sm:text-[15px]">
            Atakum ve çevresinde konut, işletme ve ofis elektrik hizmetleri.
          </p>

          <p className="mt-4 text-[14px] leading-relaxed text-[#666] sm:mt-5 sm:text-[15px] sm:leading-[1.7]">
            ARSLAN ELEKTRİK; elektrik tesisatı, pano montajı, LED
            aydınlatma, kamera, uydu ve çanak sistemlerinde güvenilir işçilik sunar. Her
            projede güvenlik, temizlik ve zamanında teslim önceliğimizdir.
          </p>
        </Reveal>

        <Stagger
          className="order-2 grid min-w-0 grid-cols-3 gap-2 sm:gap-3 lg:order-1 lg:gap-4"
          stagger={0.1}
        >
          {images.map((img, i) => {
            const contain = "fit" in img && img.fit === "contain";
            return (
              <motion.div
                key={`${img.src}-${i}`}
                variants={fadeUp}
                className={`relative aspect-[4/5] min-w-0 overflow-hidden bg-[#2a3340] ${
                  i === 1 ? "lg:translate-y-6" : ""
                }`}
              >
                {contain ? (
                  <>
                    <Image
                      src={img.src}
                      alt=""
                      fill
                      unoptimized
                      aria-hidden
                      className="scale-110 object-cover object-center blur-2xl brightness-[0.65] saturate-[0.85]"
                      sizes="(max-width: 640px) 33vw, (max-width: 1024px) 28vw, 280px"
                    />
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      unoptimized
                      quality={95}
                      className="object-contain object-center"
                      sizes="(max-width: 640px) 33vw, (max-width: 1024px) 28vw, 280px"
                    />
                  </>
                ) : (
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    unoptimized
                    quality={95}
                    className={`object-cover ${img.objectPos}`}
                    sizes="(max-width: 640px) 33vw, (max-width: 1024px) 28vw, 280px"
                  />
                )}
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                  aria-hidden
                />
              </motion.div>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
