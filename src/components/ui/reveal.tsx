"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

export const wipeLeft: Variants = {
  hidden: { opacity: 0, x: -36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const wipeDown: Variants = {
  hidden: { opacity: 0, y: -32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const slideLeft = wipeLeft;
export const slideDown = wipeDown;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: -22, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variants?: Variants;
  once?: boolean;
  
  effect?: "down" | "wipe" | "slide" | "up";
};

const effectMap = {
  down: wipeDown,
  wipe: wipeLeft,
  slide: wipeLeft,
  up: fadeUp,
} as const;

export function Reveal({
  children,
  className,
  delay = 0,
  variants,
  once = true,
  effect = "down",
}: RevealProps) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.18, margin: "0px 0px -32px 0px" }}
      variants={variants ?? effectMap[effect]}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  stagger = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -32px 0px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}
