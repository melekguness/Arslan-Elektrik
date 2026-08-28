import { IMAGES } from "@/data/images";

export type Project = {
  id: string;
  title: string;
  location: string;
  category: string;
  services: string[];
  description: string;
  image: string;
  gallery: string[];
  before?: string;
  after?: string;
  year: string;
};

export const projects: Project[] = [
  {
    id: "atakum-residence",
    title: "Atakum Rezidans Tesisatı",
    location: "Atakum, Samsun",
    category: "Konut",
    services: ["Elektrik Tesisatı", "LED Aydınlatma", "Uydu ve Çanak"],
    description:
      "72 dairelik yeni rezidansta komple elektrik altyapısı, LED aydınlatma ve uydu / çanak altyapısı.",
    image: IMAGES.projects.panelDetail,
    gallery: [
      IMAGES.projects.panelDetail,
      IMAGES.projects.circuitBoard,
      IMAGES.projects.interiorLed,
    ],
    before: IMAGES.projects.construction,
    after: IMAGES.projects.interiorLed,
    year: "2025",
  },
  {
    id: "ilkadin-restaurant",
    title: "İlkadım Restoran Aydınlatma",
    location: "İlkadım, Samsun",
    category: "Ticari",
    services: ["LED Aydınlatma", "Elektrik Panosu Montajı", "Kamera Sistemleri"],
    description:
      "Premium restoran için atmosferik LED senaryoları, mutfak panosu revizyonu ve güvenlik kamerası entegrasyonu.",
    image: IMAGES.projects.ledLighting,
    gallery: [
      IMAGES.projects.ledLighting,
      IMAGES.projects.retailLight,
      IMAGES.projects.panelDetail,
    ],
    year: "2025",
  },
  {
    id: "tekkekoy-factory",
    title: "Tekkeköy Fabrika Panosu",
    location: "Tekkeköy, Samsun",
    category: "Endüstriyel",
    services: ["Elektrik Panosu Montajı", "Jeneratör", "Bakım"],
    description:
      "Üretim hattı için kompanzasyonlu dağıtım panosu, ATS'li jeneratör bağlantısı ve yıllık bakım sözleşmesi.",
    image: IMAGES.projects.factoryFloor,
    gallery: [
      IMAGES.projects.factoryFloor,
      IMAGES.projects.serverRoom,
      IMAGES.projects.panelDetail,
    ],
    before: IMAGES.projects.construction,
    after: IMAGES.projects.factoryFloor,
    year: "2024",
  },
  {
    id: "canik-office",
    title: "Canik Ofis Kampüsü",
    location: "Canik, Samsun",
    category: "Ofis",
    services: ["Elektrik Tesisatı", "Kamera Sistemleri", "LED Aydınlatma"],
    description:
      "Açık ofis ve toplantı salonlarında structured cabling, dimlenebilir LED ve merkezi güvenlik izleme.",
    image: IMAGES.projects.modernOffice,
    gallery: [
      IMAGES.projects.modernOffice,
      IMAGES.projects.architecture,
      IMAGES.projects.serverRoom,
    ],
    year: "2024",
  },
  {
    id: "bafra-market",
    title: "Bafra Market Zinciri",
    location: "Bafra, Samsun",
    category: "Ticari",
    services: ["LED Aydınlatma", "Elektrik Panosu Montajı", "Arıza Servisi"],
    description:
      "Üç şubeli market zincirinde soğuk zincir panosu, raf LED aydınlatması ve acil müdahale protokolü.",
    image: IMAGES.projects.retailLight,
    gallery: [
      IMAGES.projects.retailLight,
      IMAGES.projects.ledLighting,
      IMAGES.projects.panelDetail,
    ],
    year: "2024",
  },
  {
    id: "carsamba-villa",
    title: "Çarşamba Villa Projesi",
    location: "Çarşamba, Samsun",
    category: "Konut",
    services: ["Uydu ve Çanak", "LED Aydınlatma", "Kamera Sistemleri"],
    description:
      "Lüks villada uydu / çanak kurulumu, peyzaj aydınlatması ve çevre güvenlik kameraları.",
    image: IMAGES.projects.architecture,
    gallery: [
      IMAGES.projects.architecture,
      IMAGES.projects.nightBuilding,
      IMAGES.projects.interiorLed,
    ],
    before: IMAGES.projects.construction,
    after: IMAGES.projects.architecture,
    year: "2025",
  },
];
