import type { LucideIcon, LucideProps } from "lucide-react";
import { cn } from "@/lib/utils";

export function AppIcon({
  icon: Icon,
  className,
  size = 22,
  strokeWidth = 1.5,
  ...props
}: {
  icon: LucideIcon;
  className?: string;
  size?: number;
  strokeWidth?: number;
} & Omit<LucideProps, "ref" | "size" | "strokeWidth">) {
  return (
    <Icon
      size={size}
      strokeWidth={strokeWidth}
      absoluteStrokeWidth
      className={cn("shrink-0", className)}
      aria-hidden
      {...props}
    />
  );
}

export function IconBadge({
  icon: Icon,
  className,
  iconClassName,
}: {
  icon: LucideIcon;
  className?: string;
  iconClassName?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex h-14 w-14 items-center justify-center bg-[#DC2626] text-white transition-colors duration-300 sm:h-[60px] sm:w-[60px]",
        className
      )}
    >
      <AppIcon icon={Icon} size={24} strokeWidth={1.4} className={iconClassName} />
    </span>
  );
}
