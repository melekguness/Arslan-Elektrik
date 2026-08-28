import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  size?: number;
  showWordmark?: boolean;
  className?: string;
  wordmarkClassName?: string;
  priority?: boolean;
};

export function BrandLogo({
  size = 48,
  showWordmark = true,
  className,
  wordmarkClassName,
  priority = false,
}: BrandLogoProps) {
  return (
    <Link
      href="/"
      className={cn("inline-flex min-w-0 items-center gap-2.5 sm:gap-3", className)}
      aria-label="Arslan Elektrik ana sayfa"
    >
      <span
        className="relative inline-flex shrink-0 items-center justify-center rounded-full bg-[#DC2626]/40 p-[2px]"
        style={{ width: size + 4, height: size + 4 }}
      >
        <span
          className="relative block overflow-hidden rounded-full bg-black"
          style={{ width: size, height: size }}
        >
          <Image
            src="/logo.png"
            alt="Arslan Elektrik logo"
            width={size * 2}
            height={size * 2}
            priority={priority}
            unoptimized
            className="h-full w-full object-contain p-[1px]"
          />
        </span>
      </span>
      {showWordmark ? (
        <span
          className={cn(
            "font-heading truncate text-[17px] font-bold tracking-tight text-white sm:text-[21px]",
            wordmarkClassName
          )}
        >
          Arslan<span className="text-[#DC2626]">Elektrik</span>
        </span>
      ) : null}
    </Link>
  );
}
