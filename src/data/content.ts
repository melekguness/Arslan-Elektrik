export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Mehmet Yılmaz",
    role: "Site Yöneticisi",
    company: "Atakum Sahil Residence",
    quote:
      "72 dairelik sitemizin elektrik altyapısını sıfırdan kurdular. Temizlik, düzen ve iletişim mükemmeldi. Teslim sonrası tek bir arıza bile yaşamadık.",
    rating: 5,
    initials: "MY",
  },
  {
    id: "2",
    name: "Ayşe Demir",
    role: "İşletme Sahibi",
    company: "Demir Restoran",
    quote:
      "Aydınlatma tasarımı mekanımızı tamamen değiştirdi. Enerji faturamız düştü, müşteriler atmosferi sürekli övüyor. Profesyonel bir ekip.",
    rating: 5,
    initials: "AD",
  },
  {
    id: "3",
    name: "Can Öztürk",
    role: "Fabrika Müdürü",
    company: "Öztürk Metal",
    quote:
      "Pano revizyonu ve jeneratör entegrasyonu planlandığı gibi, üretim kaybı olmadan tamamlandı. Endüstriyel deneyimleri net şekilde hissediliyor.",
    rating: 5,
    initials: "CÖ",
  },
  {
    id: "4",
    name: "Elif Kaya",
    role: "Ev Sahibi",
    company: "Canik",
    quote:
      "Pano arızasında hızlı ve güvenli müdahale ettiler. İşçilik temiz, iletişim net — gönül rahatlığıyla tavsiye ederim.",
    rating: 5,
    initials: "EK",
  },
  {
    id: "5",
    name: "Serkan Aydın",
    role: "Proje Müdürü",
    company: "Aydın İnşaat",
    quote:
      "Birden fazla şantiyede birlikte çalışıyoruz. Terminlere sadıklar, işçilik kalitesi yüksek. Taşeron değil, çözüm ortağı gibi.",
    rating: 5,
    initials: "SA",
  },
];
