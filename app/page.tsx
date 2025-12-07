import { SplitScreenHero } from "@/components/split-screen-hero";
import { client } from "@/sanity/lib/client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bergkulla - Stuguthyrning & Stiftelse på Åland",
  description:
    "Välkommen till Bergkulla på Åland. Vi erbjuder långtidsboende i moderna stugor och driver en stiftelse som stödjer miljö- och naturvårdsprojekt.",
  openGraph: {
    title: "Bergkulla - Stuguthyrning & Stiftelse på Åland",
    description:
      "Välkommen till Bergkulla på Åland. Stuguthyrning och stiftelse.",
    url: "https://bergkulla.ax",
    siteName: "Bergkulla",
    locale: "sv_SE",
    type: "website",
  },
  alternates: {
    canonical: "https://bergkulla.ax",
  },
};

// Revalidate every 10 seconds during development
export const revalidate = 10;

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
