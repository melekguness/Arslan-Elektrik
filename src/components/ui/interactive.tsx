"use client";

import Link from "next/link";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { usePressMotion, type PressMode } from "@/lib/motion-press";

const MotionNextLink = motion.create(Link);

type MotionLinkProps = Omit<
  React.ComponentProps<typeof Link>,
  "onAnimationStart" | "onDrag" | "onDragStart" | "onDragEnd"
> & {
  strong?: boolean;
  
  hero?: boolean;
};

function pressMode(strong?: boolean, hero?: boolean): boolean | PressMode {
  if (hero) return "hero";
  if (strong) return "strong";
  return false;
}

export function MotionLink({
  className,
  children,
  strong,
  hero,
  ...props
}: MotionLinkProps) {
  const press = usePressMotion(pressMode(strong, hero));
  return (
    <MotionNextLink
      className={cn(
        "group inline-flex items-center justify-center",
        press.css,
        className
      )}
      whileHover={press.whileHover}
      whileTap={press.whileTap}
      transition={press.transition}
      {...props}
    >
      {children}
    </MotionNextLink>
  );
}

type MotionAnchorProps = Omit<
  HTMLMotionProps<"a">,
  "whileHover" | "whileTap" | "transition"
> & {
  strong?: boolean;
  hero?: boolean;
};

export function MotionAnchor({
  className,
  children,
  strong,
  hero,
  ...props
}: MotionAnchorProps) {
  const press = usePressMotion(pressMode(strong, hero));
  return (
    <motion.a
      className={cn(
        "group inline-flex items-center justify-center",
        press.css,
        className
      )}
      whileHover={press.whileHover}
      whileTap={press.whileTap}
      transition={press.transition}
      {...props}
    >
      {children}
    </motion.a>
  );
}
