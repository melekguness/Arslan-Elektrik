import { Hero } from "@/components/home/Hero";
import { ElectrixBanner } from "@/components/home/ElectrixBanner";
import { WhoWeAre } from "@/components/about/WhoWeAre";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { Stats } from "@/components/home/Stats";
import { CoverageMap } from "@/components/coverage/CoverageMap";
import { ContactForm } from "@/components/contact/ContactForm";

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <WhoWeAre />
      <ElectrixBanner />
      <ServicesGrid />
      <Stats />
      <CoverageMap />
      <ContactForm />
    </div>
  );
}
