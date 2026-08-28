"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { MotionAnchor } from "@/components/ui/interactive";
import { pressCss } from "@/lib/motion-press";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("anasayfa");

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const html = document.documentElement;
    if (open) {
      html.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      html.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      html.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.id);
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  const isActive = (id: string) =>
    pathname === "/" || pathname === "" ? activeId === id : false;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-shadow duration-300",
        open && "z-[100]",
        scrolled && !open && "nav-scrolled"
      )}
    >
      <div className="nav-safe-top relative z-[110] bg-[#1F2937]">
        <div className="nav-safe-x relative mx-auto flex h-14 max-w-[1200px] items-center justify-between gap-2 overflow-visible sm:h-[72px] sm:gap-4 md:h-[80px]">
          <BrandLogo
            size={38}
            priority
            className="ml-1.5 min-w-0 max-w-[calc(100%-3.75rem)] sm:ml-1 sm:max-w-none lg:ml-0"
            wordmarkClassName="!text-[15px] tracking-[-0.01em] sm:!text-[20px] md:!text-[22px] lg:!text-[24px]"
          />

          <nav className="ml-auto hidden items-center gap-0.5 lg:flex" aria-label="Ana menü">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-2.5 py-2 text-[12px] font-bold uppercase tracking-[0.06em] transition-colors touch-manipulation xl:px-3.5 xl:text-[13px] xl:tracking-[0.08em]",
                  isActive(link.id)
                    ? "text-[#DC2626]"
                    : "text-white hover:text-[#DC2626] active:text-[#DC2626]"
                )}
              >
                {link.label}
                {isActive(link.id) ? (
                  <span className="absolute inset-x-2.5 -bottom-0.5 h-0.5 bg-[#DC2626] xl:inset-x-3.5" />
                ) : null}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className={cn(
              "relative z-[120] flex h-12 w-12 min-h-12 min-w-12 shrink-0 items-center justify-center rounded-lg border border-white/25 bg-[#1F2937] text-white shadow-sm touch-manipulation lg:hidden",
              "hover:!bg-black hover:!border-black hover:!text-white active:!bg-black active:!border-black active:!text-white",
              pressCss
            )}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav-panel"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          >
            {open ? <X className="size-6" strokeWidth={2.25} /> : <Menu className="size-5" strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      {}
      <div
        id="mobile-nav-panel"
        className={cn(
          "fixed inset-0 z-[90] flex flex-col lg:hidden",
          open ? "pointer-events-auto visible" : "pointer-events-none invisible"
        )}
        aria-hidden={!open}
      >
        <button
          type="button"
          className={cn(
            "absolute inset-0 bg-black/50 transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0"
          )}
          aria-label="Menüyü kapat"
          tabIndex={open ? 0 : -1}
          onClick={() => setOpen(false)}
        />

        <div
          className={cn(
            "relative z-10 ml-auto flex h-full w-full max-w-md flex-col bg-[#1F2937] shadow-2xl transition-transform duration-300",
            "pt-[calc(3.5rem+env(safe-area-inset-top,0px))] sm:pt-[calc(4.5rem+env(safe-area-inset-top,0px))] md:pt-[calc(5rem+env(safe-area-inset-top,0px))]",
            open ? "translate-x-0" : "translate-x-full"
          )}
          inert={!open ? true : undefined}
        >
          <nav
            className="flex flex-1 flex-col overflow-y-auto overscroll-contain px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-2 scrollbar-dark"
            aria-label="Mobil menü"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "border-b border-white/10 py-4 text-base font-bold uppercase tracking-wide touch-manipulation transition-colors duration-200",
                  isActive(link.id)
                    ? "text-[#DC2626]"
                    : "text-white hover:text-[#DC2626] active:text-[#DC2626]",
                  pressCss
                )}
              >
                {link.label}
              </Link>
            ))}
            <MotionAnchor
              href={SITE.phoneHref}
              aria-label={`Hemen ara: ${SITE.phoneDisplay}`}
              className={cn(
                "cta-shine mt-6 flex h-12 min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#DC2626] text-sm font-bold uppercase text-white shadow-sm touch-manipulation",
                "hover:!bg-black hover:!text-white active:!bg-black active:!text-white",
                pressCss
              )}
            >
              <Phone className="relative z-[1] size-4" strokeWidth={1.75} />
              <span className="relative z-[1]">Hemen Ara</span>
            </MotionAnchor>
            <MotionAnchor
              href={SITE.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "cta-shine mt-3 flex h-12 min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#178C46] text-sm font-bold uppercase text-white shadow-sm touch-manipulation",
                "hover:!bg-[#136F3A] active:!bg-[#136F3A]",
                pressCss
              )}
            >
              <span className="relative z-[1]">WhatsApp</span>
            </MotionAnchor>
          </nav>
        </div>
      </div>
    </header>
  );
}
