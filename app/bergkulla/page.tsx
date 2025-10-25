import { ImageCarousel } from "@/components/carousel";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Intro } from "@/components/intro";
import { LastHouseSection } from "@/components/last-house-section";

export default function BergkullaPage() {
  return (
    <div className="relative">
      <Hero />
      <LastHouseSection />
      <ImageCarousel />
      <Intro />
      <Footer />
    </div>
  );
}
