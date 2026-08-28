"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { usePressMotion } from "@/lib/motion-press";

const buttonVariants = cva(
  cn(
    "cta-shine inline-flex items-center justify-center gap-2 whitespace-nowrap text-xs font-bold uppercase tracking-[0.08em] leading-none",
    "min-h-12 touch-manipulation rounded-lg shadow-sm",
    "transition-[transform,background-color,color,border-color,box-shadow] duration-200 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:-translate-y-px",
    "group"
  ),
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-white hover:!bg-black hover:!text-white active:!bg-black active:!text-white",
        secondary:
          "border border-black/10 bg-white text-primary hover:!bg-black hover:!text-white hover:!border-black active:!bg-black active:!text-white active:!border-black",
        dark: "bg-surface-dark text-white hover:!bg-black hover:!text-white active:!bg-black active:!text-white",
        outline:
          "border-2 border-primary bg-transparent text-primary hover:!border-black hover:!bg-black hover:!text-white active:!border-black active:!bg-black active:!text-white",
        ghost:
          "bg-transparent text-foreground shadow-none hover:!bg-black hover:!text-white active:!bg-black active:!text-white",
        whatsapp:
          "bg-[#178C46] text-white hover:!bg-[#136F3A] active:!bg-[#136F3A]",
        slant:
          "bg-primary text-white hover:!bg-black hover:!text-white active:!bg-black active:!text-white btn-slant",
      },
      size: {
        default: "h-12 min-h-12 px-6",
        sm: "h-12 min-h-12 px-4 text-xs",
        lg: "h-14 min-h-14 px-8 text-sm",
        xl: "h-16 min-h-16 px-10 text-base",
        pill: "h-12 min-h-12 px-8 rounded-full",
        icon: "h-12 w-12 min-h-12 min-w-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

type MotionButtonProps = Omit<
  HTMLMotionProps<"button">,
  "children" | "className" | "disabled" | "ref"
>;

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof MotionButtonProps>,
    MotionButtonProps,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, disabled, ...props }, ref) => {
    const press = usePressMotion();
    const classes = cn(
      buttonVariants({ variant, size }),
      !disabled && press.css,
      className
    );

    if (asChild) {
      return (
        <Slot
          className={classes}
          ref={ref}
          {...(props as React.ComponentPropsWithoutRef<typeof Slot>)}
        />
      );
    }

    return (
      <motion.button
        className={classes}
        ref={ref}
        disabled={disabled}
        whileHover={disabled || press.reduced ? undefined : press.whileHover}
        whileTap={disabled || press.reduced ? undefined : press.whileTap}
        transition={press.transition}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
