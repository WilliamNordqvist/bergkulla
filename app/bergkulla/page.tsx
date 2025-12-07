import { ImageCarousel } from "@/components/carousel";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Intro } from "@/components/intro";
import { LastHouseSection } from "@/components/last-house-section";
import { client } from "@/sanity/lib/client";
import { getFooterData } from "@/lib/sanity-queries";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bergkullaby - Långtidsboende i Moderna Stugor på Åland",
  description:
    "Hyr moderna stugor för långtidsboende på Bergkulla, Åland. Fullt utrustade stugor med havsutsikt, privat båthus, tennisplan och bastu. Från 550€/månad, perfekt för distansarbete i skärgårdsmiljö.",
  keywords: [
    "långtidsboende åland",
    "stugor åland",
    "hyra stuga åland",
    "saltvik åland",
    "boende åland",
    "uthyrning åland",
    "skärgårdsboende",
    "moderna stugor",
    "distansarbete åland",
    "havsutsikt åland",
  ],
  openGraph: {
    title: "Bergkullaby - Långtidsboende i Moderna Stugor på Åland",
    description:
      "Moderna stugor för långtidsboende i åländska skärgården. Fullt utrustade med havsutsikt, privat båthus, tennisplan och bastu. Från 550€/månad.",
    url: "https://bergkulla.ax/bergkulla",
    siteName: "Bergkulla",
    locale: "sv_SE",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Bergkulla stugor i skärgårdsmiljö",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bergkullaby - Långtidsboende på Åland",
    description:
      "Moderna stugor för långtidsboende i åländska skärgården. Från 550€/månad.",
    images: ["/images/hero.jpg"],
  },
  alternates: {
    canonical: "https://bergkulla.ax/bergkulla",
  },
};

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
