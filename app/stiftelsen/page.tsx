import { Footer } from "@/components/footer";
import { EkonomiSection } from "@/components/stiftelsen/ekonomi-section";
import { OmStiftelsenSection, VideoSection } from "@/components/stiftelsen/om-stiftelsen";
import { StipendierSection } from "@/components/stiftelsen/stipendier-section";
import { WaveDivider } from "@/components/ui/wave-divider";
import { getFooterData, getStiftelsenData } from "@/lib/sanity-queries";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bergkullastiftelsen - Miljö & Naturvård på Åland",
  description:
    "Bergkullastiftelsen stödjer miljö- och naturvårdsprojekt på Åland. Läs om vår verksamhet, ekonomi, utdelade stipendier och miljöinvesteringar.",
  keywords: [
    "bergkullastiftelsen",
    "stiftelse åland",
    "miljöstiftelse",
    "naturvård åland",
    "stipendier åland",
    "miljöprojekt",
    "saltvik åland",
  ],
  openGraph: {
    title: "Bergkullastiftelsen - Miljö & Naturvård på Åland",
    description:
      "Bergkullastiftelsen stödjer miljö- och naturvårdsprojekt på Åland. Stipendier och miljöinvesteringar.",
    url: "https://bergkulla.ax/stiftelsen",
    siteName: "Bergkulla",
    locale: "sv_SE",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Bergkullastiftelsen - Miljö & Naturvård",
    description:
      "Stiftelse som stödjer miljö- och naturvårdsprojekt på Åland.",
  },
  alternates: {
    canonical: "https://bergkulla.ax/stiftelsen",
  },
};

// Revalidate every 10 seconds during development
export const revalidate = 10;

export default async function StiftelsenPage() {
  const [stiftelsenData, footerData] = await Promise.all([
    getStiftelsenData(),
    getFooterData(),
  ]);

  if (!stiftelsenData || !footerData) {
    return <div>Laddar innehåll från Sanity...</div>;
  }

  return (
    <div className="bg-white text-gray-800">
      <main>
        <OmStiftelsenSection data={stiftelsenData.omStiftelsen} />
        <WaveDivider rotate fill="#E5E9EB" />
        <EkonomiSection data={stiftelsenData.ekonomi} />
        <WaveDivider fill="#E5E9EB" />
        <StipendierSection data={stiftelsenData.stipendier} />
        <WaveDivider rotate fill="#E5E9EB" />
        <VideoSection data={stiftelsenData.videos} />
      </main>
      <Footer data={footerData} />
    </div>
  );
}
