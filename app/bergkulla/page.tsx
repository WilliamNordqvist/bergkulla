import { ImageCarousel } from "@/components/carousel";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Intro } from "@/components/intro";
import { LastHouseSection } from "@/components/last-house-section";
import { client } from "@/sanity/lib/client";
import { getFooterData } from "@/lib/sanity-queries";

// Revalidate every 10 seconds during development
export const revalidate = 10;

async function getBergkullaData() {
  const data = await client.fetch(
    `*[_type == "bergkullasida"][0]{
      banner,
      heroSection,
      lastHouseSection{
        ...,
        carouselImages[]{
          _key,
          image,
          alt
        }
      },
      mainGallery{
        title,
        images[]{
          _key,
          image,
          alt
        }
      },
      introSections,
      ctaSection
    }`
  );
  return data;
}

export default async function BergkullaPage() {
  const [data, footerData] = await Promise.all([
    getBergkullaData(),
    getFooterData(),
  ]);

  if (!data || !footerData) {
    return <div>Laddar innehåll från Sanity...</div>;
  }

  return (
    <div className="relative">
      <Hero data={data.heroSection} banner={data.banner} />
      <LastHouseSection data={data.lastHouseSection} />
      <ImageCarousel title={data.mainGallery.title} images={data.mainGallery.images} />
      <Intro sections={data.introSections} ctaSection={data.ctaSection} />
      <Footer data={footerData} />
    </div>
  );
}
