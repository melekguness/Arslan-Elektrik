"use client";

import { useEffect, useState } from "react";
import { useReducedMotion, type Transition } from "framer-motion";

export const pressTransition: Transition = {
  duration: 0.12,
  ease: "easeOut",
};

export const pressHoverTransition: Transition = {
  duration: 0.2,
  ease: "easeOut",
};

export const pressTap = { scale: 0.97 };
export const pressTapStrong = { scale: 0.95 };

export const pressHover = {
  scale: 1.03,
  y: -2,
  transition: pressHoverTransition,
};
export const pressHoverStrong = {
  scale: 1.05,
  y: -4,
  transition: pressHoverTransition,
};
export const pressHoverHero = {
  scale: 1.04,
  transition: pressHoverTransition,
};

export const pressCss = "press-feedback";
export const pressCssHero = "press-feedback press-feedback--hero";
export const pressCssStrong = "press-feedback press-feedback--strong";

export type PressMode = "default" | "strong" | "hero";

function resolveMode(arg: boolean | PressMode = false): PressMode {
  if (arg === true || arg === "strong") return "strong";
  if (arg === "hero") return "hero";
  return "default";
}

export function useCanHover() {
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setCanHover(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return canHover;
}

export function usePressMotion(strongOrMode: boolean | PressMode = false) {
  const reduced = useReducedMotion();
  const canHover = useCanHover();
  const mode = resolveMode(strongOrMode);

  if (reduced) {
    return {
      reduced: true as const,
      whileHover: undefined,
      whileTap: undefined,
      transition: pressTransition,
      css: "" as string,
    };
  }

  const whileHoverValue =
    mode === "hero"
      ? pressHoverHero
      : mode === "strong"
        ? pressHoverStrong
        : pressHover;
  const whileTap = mode === "strong" ? pressTapStrong : pressTap;
  const css =
    mode === "hero"
      ? pressCssHero
      : mode === "strong"
        ? pressCssStrong
        : pressCss;

  return {
    reduced: false as const,
    
    whileHover: canHover ? whileHoverValue : undefined,
    whileTap,
    transition: pressTransition,
    css,
  };
}
