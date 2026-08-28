"use client";

import { motion } from "framer-motion";
import { IMAGES } from "@/data/images";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#B91C1C] md:bg-[#DC2626]">
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `url(${IMAGES.textures.industrial})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#B91C1C] via-[#B91C1C]/95 to-[#B91C1C]/70 md:from-[#DC2626] md:via-[#DC2626]/95 md:to-[#DC2626]/70" />
      <div className="container-premium relative pb-16 pt-[max(4rem,calc(var(--header-offset)*0.35+3rem))] md:pb-20">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="type-eyebrow mb-3 text-white"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="type-h1 max-w-3xl text-[clamp(2rem,6vw,3.6rem)] text-white"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white"
          style={{ opacity: 0.92 }}
        >
          {description}
        </motion.p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-white [clip-path:polygon(0_100%,100%_0,100%_100%)]" />
    </section>
  );
}
