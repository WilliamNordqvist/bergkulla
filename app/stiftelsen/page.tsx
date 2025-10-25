import { Footer } from "@/components/footer";
import { EkonomiSection } from "@/components/stiftelsen/ekonomi-section";
import { StiftelsenNavbar } from "@/components/stiftelsen/navbar";
import { OmStiftelsenSection, VideoSection } from "@/components/stiftelsen/om-stiftelsen";
import { StipendierSection } from "@/components/stiftelsen/stipendier-section";
import { WaveDivider } from "@/components/ui/wave-divider";

export default function StiftelsenPage() {
  return (
    <div className="bg-white text-gray-800">
      <StiftelsenNavbar />
      <main>
        <OmStiftelsenSection />
        <WaveDivider rotate fill="#E5E9EB" />
        <EkonomiSection />
        <WaveDivider fill="#E5E9EB" />
        <StipendierSection />
        <WaveDivider rotate fill="#E5E9EB" />
        <VideoSection />
      </main>
      <Footer />
    </div>
  );
}
