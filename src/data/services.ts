import {
  Cable,
  CircuitBoard,
  LampCeiling,
  Cctv,
  Satellite,
  Wrench,
  Hammer,
  Siren,
  type LucideIcon,
} from "lucide-react";

export type ServiceCategory =
  | "tesisat"
  | "ariza"
  | "aydinlatma"
  | "pano"
  | "guvenlik"
  | "diger";

export type Service = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  features: string[];
  category: ServiceCategory;
};

export const services: Service[] = [
  {
    id: "elektrik-tesisati",
    title: "Elektrik Tesisatı",
    description:
      "Konut, ofis ve ticari alanlarda sıfırdan profesyonel elektrik tesisatı kurulumu.",
    longDescription:
      "Yeni inşaat ve renovasyon projelerinde standartlara uygun kablo yönetimi, priz-anahtar yerleşimi ve güvenlik sistemleri ile eksiksiz elektrik tesisatı.",
    icon: Cable,
    features: ["Konut tesisatı", "Ticari tesisat", "Endüstriyel hatlar", "Güvenli montaj"],
    category: "tesisat",
  },
  {
    id: "elektrik-pano",
    title: "Elektrik Panosu Montajı",
    description:
      "Dağıtım, kompanzasyon ve otomasyon panolarının tasarımı ve montajı.",
    longDescription:
      "Güvenli, düzenli ve bakımı kolay pano sistemleri — konuttan fabrikaya ölçeklenebilir çözümler.",
    icon: CircuitBoard,
    features: ["Dağıtım panosu", "Kompanzasyon", "Otomasyon", "Revizyon"],
    category: "pano",
  },
  {
    id: "led-aydinlatma",
    title: "LED Aydınlatma",
    description:
      "Enerji verimli, estetik ve uzun ömürlü LED aydınlatma çözümleri.",
    longDescription:
      "İç ve dış mekan aydınlatmasında enerji tasarrufu sağlayan premium LED sistemleri ve sahne/dekoratif uygulamalar.",
    icon: LampCeiling,
    features: ["İç mekan", "Dış cephe", "Peyzaj", "Enerji tasarrufu"],
    category: "aydinlatma",
  },
  {
    id: "kamera-sistemleri",
    title: "Kamera Sistemleri",
    description:
      "IP kamera, NVR ve uzaktan izleme ile güvenli gözetim altyapısı.",
    longDescription:
      "Yüksek çözünürlüklü IP kameralar, gece görüşü ve mobil erişim ile iş yerinizi ve evinizi güvende tutun.",
    icon: Cctv,
    features: ["IP kamera", "NVR kayıt", "Mobil izleme", "Gece görüş"],
    category: "guvenlik",
  },
  {
    id: "uydu-canak",
    title: "Uydu ve Çanak",
    description:
      "Uydu anteni ve çanak montajı, yön ayarı ve sinyal optimizasyonu.",
    longDescription:
      "Konut ve iş yerlerinde uydu çanağı kurulumu, LNB bağlantısı, çoklu uydu yönlendirmesi ve net görüntü için profesyonel sinyal ayarı. Mevcut sistemlerde arıza tespiti ve yenileme de yapıyoruz.",
    icon: Satellite,
    features: ["Çanak montajı", "Yön ayarı", "LNB / kablo", "Sinyal ölçümü"],
    category: "diger",
  },
  {
    id: "bakim",
    title: "Bakım & Onarım",
    description:
      "Periyodik kontrol, ölçüm ve önleyici bakım programları.",
    longDescription:
      "Arızayı beklemeden; termal tarama, bağlantı sıkılığı ve kaçak akım testleriyle proaktif elektrik bakımı.",
    icon: Wrench,
    features: ["Periyodik bakım", "Termal tarama", "Raporlama", "Sözleşmeli hizmet"],
    category: "diger",
  },
  {
    id: "tamirat-tadilat",
    title: "Tamirat & Tadilat",
    description:
      "Ev ve iş yerlerinde tamirat, tadilat ve yenileme işleri.",
    longDescription:
      "Ev ve işyeri tadilatında priz, anahtar, kablo ve aydınlatma yenilemesi — Samsun genelinde.",
    icon: Hammer,
    features: ["Priz / anahtar", "Kablo yenileme", "Aydınlatma", "Küçük onarım"],
    category: "tesisat",
  },
  {
    id: "acil-servis",
    title: "Arıza Servisi",
    description:
      "Kesinti ve arızalarda ölçümlü teşhis, güvenli onarım ve net raporlama.",
    longDescription:
      "Elektrik kesintisi, pano arızası ve tehlikeli bağlantılarda Samsun genelinde profesyonel teşhis ve güvenli onarım. Her işte güvenlik ve yazılı garanti önceliğimizdir.",
    icon: Siren,
    features: ["Ölçümlü teşhis", "Güvenli onarım", "Yazılı garanti", "Samsun geneli"],
    category: "ariza",
  },
];
