import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { BrandLogo } from "@/components/layout/BrandLogo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface-dark text-white">
      <div className="container-premium pb-7 pt-8 sm:pb-8 sm:pt-9">
        <div className="grid gap-7 sm:gap-8 md:grid-cols-[minmax(0,1.35fr)_auto_auto] md:items-start md:gap-x-10 lg:gap-x-12">
          <div className="max-w-md space-y-3.5">
            <BrandLogo size={48} className="gap-3" wordmarkClassName="!text-base sm:!text-lg" />
            <p className="text-sm leading-relaxed text-white/80">
              Samsun&apos;da güvenilir elektrik çözümleri. Tesisat, arıza, pano,
              LED, kamera, uydu ve çanak sistemleri.
            </p>
          </div>

          <div>
            <h3 className="mb-3.5 font-heading text-sm font-bold tracking-[0.12em] text-white uppercase">
              Sayfalar
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 transition-colors touch-manipulation hover:text-primary active:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3.5 font-heading text-sm font-bold tracking-[0.12em] text-white uppercase">
              İletişim
            </h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center gap-2 touch-manipulation transition-colors hover:text-primary active:text-primary"
                >
                  <Phone className="size-4 text-primary" strokeWidth={1.75} />
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li className="inline-flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={1.75} />
                {SITE.address.full}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {}
      <div className="border-t border-white/10 pb-[max(1.25rem,env(safe-area-inset-bottom,0px))] pt-4 md:pb-5 md:pt-5">
        <div className="container-premium flex flex-col items-center gap-1 text-center text-xs text-white/55 sm:flex-row sm:justify-between sm:gap-4 sm:text-left">
          <p>
            © {year} {SITE.name}. Tüm hakları saklıdır.
          </p>
          <p>Samsun / Türkiye</p>
        </div>
      </div>
    </footer>
  );
}
