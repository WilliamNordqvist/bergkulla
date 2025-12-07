import { Footer } from "@/components/footer";
import { EkonomiSection } from "@/components/stiftelsen/ekonomi-section";
import { OmStiftelsenSection, VideoSection } from "@/components/stiftelsen/om-stiftelsen";
import { StipendierSection } from "@/components/stiftelsen/stipendier-section";
import { WaveDivider } from "@/components/ui/wave-divider";
import { getFooterData, getStiftelsenData } from "@/lib/sanity-queries";

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
