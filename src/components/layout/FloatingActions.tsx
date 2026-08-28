"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp, MessageCircle, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { usePressMotion } from "@/lib/motion-press";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 right-0 z-[60] h-1 origin-left bg-primary"
      style={{
        scaleX,
        top: "env(safe-area-inset-top, 0px)",
      }}
      aria-hidden
    />
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  const press = usePressMotion(true);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.button
      type="button"
      initial={false}
      animate={{
        opacity: show ? 1 : 0,
        y: show ? 0 : 16,
        pointerEvents: show ? "auto" : "none",
      }}
      whileHover={
        show && press.whileHover
          ? { scale: 1.05, transition: { duration: 0.2, ease: "easeOut" as const } }
          : undefined
      }
      whileTap={show && !press.reduced ? press.whileTap : undefined}
      transition={press.transition}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "group fixed z-40 flex h-11 w-11 min-h-11 min-w-11 items-center justify-center rounded-full sm:h-12 sm:w-12",
        "right-[max(1rem,env(safe-area-inset-right,0px))]",
        "bottom-[max(11.25rem,calc(10.75rem+env(safe-area-inset-bottom,0px)))]",
        "border border-black/10 bg-white/95 text-foreground shadow-lg backdrop-blur-sm",
        "touch-manipulation hover:!bg-black hover:!text-white hover:!border-black active:!bg-black active:!text-white active:!border-black",
        press.css
      )}
      aria-label="Yukarı çık"
    >
      <ArrowUp className="size-5 transition-transform duration-200 group-hover:-translate-y-0.5 group-active:-translate-y-0.5" />
    </motion.button>
  );
}

export function FloatingWhatsApp() {
  const press = usePressMotion(true);

  return (
    <motion.a
      href={SITE.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={press.whileHover}
      whileTap={press.whileTap}
      transition={press.transition}
      className={cn(
        "fixed z-50 flex h-14 w-14 items-center justify-center rounded-full",
        "right-[max(1rem,env(safe-area-inset-right,0px))]",
        "bottom-[max(1.25rem,calc(1rem+env(safe-area-inset-bottom,0px)))]",
        "bg-[#25D366] text-white shadow-[0_8px_28px_rgba(37,211,102,0.35)]",
        "touch-manipulation hover:!bg-[#1ebe57] active:!bg-[#1ebe57]",
        press.css
      )}
      aria-label="WhatsApp ile yazın"
      title="WhatsApp"
    >
      <MessageCircle className="size-6" fill="currentColor" />
    </motion.a>
  );
}

export function CallButton() {
  const press = usePressMotion(true);

  return (
    <motion.a
      href={SITE.phoneHref}
      whileHover={press.whileHover}
      whileTap={press.whileTap}
      transition={press.transition}
      className={cn(
        "fab-attention fab-attention--call fixed z-50 flex items-center justify-center rounded-full",
        "right-[max(1rem,env(safe-area-inset-right,0px))]",
        "bottom-[max(5.75rem,calc(5.25rem+env(safe-area-inset-bottom,0px)))]",
        "h-14 w-14 bg-primary text-white shadow-lg",
        "md:h-auto md:w-auto md:gap-2 md:px-4 md:py-3 md:min-h-12",
        "touch-manipulation hover:!bg-black hover:!text-white active:!bg-black active:!text-white group",
        press.css
      )}
      aria-label={`Hemen ara: ${SITE.phoneDisplay}`}
      title={SITE.phoneDisplay}
    >
      <Phone className="size-5 md:size-4" />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-bold uppercase opacity-0 transition-all duration-200 md:inline md:group-hover:max-w-[7rem] md:group-hover:opacity-100 md:group-active:max-w-[7rem] md:group-active:opacity-100">
        Hemen Ara
      </span>
    </motion.a>
  );
}
