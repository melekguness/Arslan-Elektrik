
export const siteConfig = {
  name: "ARSLAN ELEKTRİK",
  shortName: "Arslan Elektrik",
  tagline: "Samsun'un Güvenilir Elektrik Markası",
  description:
    "Samsun'da profesyonel elektrikçi ve tadilat hizmetleri. Elektrik tesisatı, arıza tespiti, pano montajı, LED aydınlatma, kamera, uydu ve çanak sistemleri.",
  url: "https://samsunarslanelektrik.com",
  locale: "tr_TR",
  phone: "+905426764600",
  /** User-facing TR spacing: `0xxx xxx xx xx`. Keep href/whatsapp digits-only. */
  phoneDisplay: "0542 676 46 00",
  phoneHref: "tel:+905426764600",
  phone2: "+905333446555",
  phone2Display: "0533 344 65 55",
  phone2Href: "tel:+905333446555",
  whatsapp: "905426764600",
  whatsappHref:
    "https://wa.me/905426764600?text=Merhaba%2C%20elektrik%20hizmeti%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.",
  email: "info@arslanelektrik.com",
  address: {
    street: "Atakent Mahallesi",
    city: "Atakum",
    region: "Samsun",
    country: "TR",
    postalCode: "55200",
    full: "Atakent, Atakum / Samsun",
  },
  hours: {
    weekdays: "08:00 – 19:00",
    saturday: "09:00 – 17:00",
    sunday: "Kapalı",
    emergency: "Yerinde keşif imkânı",
  },
  social: {
    instagram: "https://instagram.com/arslanelektrik",
    facebook: "https://facebook.com/arslanelektrik",
    youtube: "https://youtube.com/@arslanelektrik",
  },
  
  geo: {
    lat: 41.3401,
    lng: 36.2337,
  },
} as const;

export type SiteConfig = typeof siteConfig;
