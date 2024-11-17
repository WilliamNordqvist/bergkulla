import { ImageCarousel } from "@/components/carousel";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Intro } from "@/components/intro";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <Intro />
      <ImageCarousel />
      <Footer />
    </div>
  );
}
