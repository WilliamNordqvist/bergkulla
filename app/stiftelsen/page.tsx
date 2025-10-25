import { Footer } from "@/components/footer";
import { BergkullabySection } from "@/components/stiftelsen/bergkullaby-section";
import { EkonomiSection } from "@/components/stiftelsen/ekonomi-section";
import { StiftelsenNavbar } from "@/components/stiftelsen/navbar";
import { OmStiftelsenSection } from "@/components/stiftelsen/om-stiftelsen";
import { StipendierSection } from "@/components/stiftelsen/stipendier-section";
import { WaveDivider } from "@/components/ui/wave-divider";

export default function StiftelsenPage() {
  return (
    <div className="bg-white text-gray-800">
      <StiftelsenNavbar />
      <main>
        <OmStiftelsenSection />
        <WaveDivider rotate fill="#E5E9EB" />
        <BergkullabySection />
        <WaveDivider fill="#E5E9EB" />
        <EkonomiSection />
        <WaveDivider rotate fill="#E5E9EB" />
        <StipendierSection />
      </main>
      <Footer />
    </div>
  );
}
