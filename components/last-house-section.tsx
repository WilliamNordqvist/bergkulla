import { LastHouseCarousel } from "@/components/last-house-carousel";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface LastHouseSectionProps {
  data: {
    badge: string;
    title: string;
    subtitle: string;
    description: string[];
    buttonText: string;
    buttonLink: string;
    carouselImages: Array<{
      image: SanityImageSource;
      alt: string;
    }>;
  };
}

export const LastHouseSection = ({ data }: LastHouseSectionProps) => {
  return (
    <section className="pt-32 md:pt-48 lg:pt-60 pb-16 md:pb-24 lg:pb-32 bg-gradient-to-b from-white to-[#FAF9F6]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">
                  {data.badge}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight text-[#2C3539]">
                {data.title}
              </h2>
              <p className="text-xl md:text-2xl text-[#4A4A4A] font-light">
                {data.subtitle}
              </p>
            </div>

            <div className="space-y-4 text-[#4A4A4A] text-base md:text-lg leading-relaxed">
              {data.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div>
              <Link href={data.buttonLink}>
                <Button className="bg-[#2C3539] text-white hover:bg-[#1A2326] text-lg px-8 py-3 w-full md:w-auto">
                  {data.buttonText}
                </Button>
              </Link>
            </div>
          </div>

          {/* Carousel */}
          <div className="order-1 lg:order-2">
            <LastHouseCarousel images={data.carouselImages} />
          </div>
        </div>
      </div>
    </section>
  );
};
