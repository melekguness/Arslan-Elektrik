"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/constants";
import { MotionAnchor, MotionLink } from "@/components/ui/interactive";
import { cn } from "@/lib/utils";

export function ElectrixBanner() {
  return (
    <section className="relative overflow-x-clip bg-[#DC2626]">
      <div className="relative mx-auto max-w-[780px] px-5 pb-10 pt-[max(3.25rem,calc(var(--header-offset)*0.25+2.75rem))] text-center sm:px-8 sm:pb-12 md:pb-14">
        <motion.h2
          initial={{ opacity: 0, y: -28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-balance text-[clamp(1.5rem,3.8vw,2.35rem)] font-bold leading-[1.2] tracking-tight text-white"
        >
          Güvenilir ve Profesyonel Elektrik Çözümleri
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 flex justify-center sm:mt-8"
        >
          <MotionLink
            href="/#iletisim"
            className={cn(
              "cta-shine inline-flex h-[48px] min-h-12 items-center justify-center rounded-full bg-white px-9 text-[15px] font-semibold text-[#DC2626] shadow-sm sm:h-[52px] sm:px-11 sm:text-[16px] touch-manipulation",
              "hover:!bg-black hover:!text-white active:!bg-black active:!text-white"
            )}
          >
            Keşif Randevusu Alın
          </MotionLink>
        </motion.div>

        <MotionAnchor
          href={SITE.phoneHref}
          aria-label={`Hemen ara: ${SITE.phoneDisplay}`}
          className="mt-6 inline-flex items-center justify-center gap-2 text-[15px] font-medium text-white transition-colors hover:text-white/90 active:text-white/90 sm:mt-7 sm:text-[16px] touch-manipulation"
        >
          <Phone className="size-[18px] shrink-0" strokeWidth={1.85} />
          {SITE.phoneDisplay}
        </MotionAnchor>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-4%", amount: 0.2 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full rounded-t-[28px] bg-white sm:rounded-t-[44px] md:rounded-t-[56px]"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="mx-auto w-full max-w-[1100px] px-3 pb-4 pt-4 sm:px-8 sm:pb-8 sm:pt-8 md:px-8 md:pb-10 md:pt-10">
          <Image
            src="/images/kesif-sistem.jpg"
            alt="Elektrik dağıtım panosu, çanak anten, kamera sistemi ve kablo kanalı kurulumu"
            width={1600}
            height={1200}
            sizes="(max-width: 1100px) 100vw, 1100px"
            className="h-auto w-full rounded-md"
            priority={false}
          />
        </div>
      </motion.div>
    </section>
  );
}
