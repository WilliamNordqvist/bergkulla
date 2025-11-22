import { SplitScreenHero } from "@/components/split-screen-hero";
import { client } from "@/sanity/lib/client";

async function getHeroData() {
  try {
    const data = await client.fetch(
      `*[_type == "huvudsida"][0]{
        leftSection,
        rightSection
      }`
    );
    return data;
  } catch (error) {
    console.error("Error fetching hero data:", error);
    return null;
  }
}

export default async function Home() {
  const heroData = await getHeroData();

  if (!heroData) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Laddar innehåll från Sanity...</p>
      </div>
    );
  }

  return (
    <div className="relative">
      <SplitScreenHero data={heroData} />
    </div>
  );
}
