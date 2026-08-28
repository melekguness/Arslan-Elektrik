export { siteConfig, type SiteConfig } from "@/lib/siteConfig";
export { siteConfig as SITE } from "@/lib/siteConfig";

export const NAV_LINKS = [
  { href: "/#anasayfa", id: "anasayfa", label: "Ana Sayfa" },
  { href: "/#hakkimizda", id: "hakkimizda", label: "Hakkımızda" },
  { href: "/#hizmetler", id: "hizmetler", label: "Hizmetler" },
  { href: "/#bolgeler", id: "bolgeler", label: "Bölgeler" },
  { href: "/#iletisim", id: "iletisim", label: "İletişim" },
] as const;

export const COVERAGE_AREAS = [
  { id: "atakum", name: "Atakum", x: 48, y: 48, hub: true },
  { id: "19mayis", name: "19 Mayıs", x: 30, y: 40, hub: false },
  { id: "ilkadin", name: "İlkadım", x: 64, y: 54, hub: false },
  { id: "canik", name: "Canik", x: 70, y: 72, hub: false },
] as const;
