import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface HeroSection {
  leftSection: {
    category: string;
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    image: SanityImageSource;
  };
  rightSection: {
    category: string;
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    image: SanityImageSource;
  };
}

interface SplitScreenHeroProps {
  data: HeroSection;
}

export const SplitScreenHero = ({ data }: SplitScreenHeroProps) => {
  const { leftSection, rightSection } = data;

  return (
    <div className="flex flex-col md:flex-row h-screen bg-black">
      {/* Left side - Stiftelsen */}
      <div className="relative flex-1 overflow-hidden transition-all duration-500 hover:brightness-110">
        <Image
          src={urlFor(leftSection.image).url()}
          alt={leftSection.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30 flex flex-col justify-center items-center p-4 md:p-8">
          <div className="bg-white/35 backdrop-blur-md rounded-2xl p-4 md:p-8 w-full max-w-xl mx-auto border border-white/50 flex flex-col justify-between min-h-[285px] md:min-h-[285px]">
            <span className="text-xs font-semibold text-gray-600 uppercase tracking-widest mb-4 md:mb-6 block">
              {leftSection.category}
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-100 mb-3 md:mb-4 text-center">{leftSection.title}</h2>
            <p className="text-gray-200 text-center mb-6 md:mb-8 max-w-md text-sm md:text-base mx-auto">
              {leftSection.description}
            </p>
            <Link href={leftSection.buttonLink}>
              <Button className="bg-white text-black hover:bg-gray-100 px-6 md:px-10 py-2 md:py-3 text-base md:text-lg font-semibold transition-all duration-300 shadow-lg w-full">
                {leftSection.buttonText}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Right side - Stuguthyrning */}
      <div className="relative flex-1 overflow-hidden transition-all duration-500 hover:brightness-110">
        <Image
          src={urlFor(rightSection.image).url()}
          alt={rightSection.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 flex flex-col justify-center items-center p-4 md:p-8">
          <div className="bg-white/35 backdrop-blur-md rounded-2xl p-4 md:p-8 w-full max-w-xl mx-auto border border-white/50 flex flex-col justify-between min-h-[285px] md:min-h-[285px]">
            <span className="text-xs font-semibold text-gray-700 uppercase tracking-widest mb-4 md:mb-6 block">
              {rightSection.category}
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4 text-center">{rightSection.title}</h2>
            <p className="text-gray-800 text-center mb-6 md:mb-8 max-w-md text-sm md:text-base mx-auto">
              {rightSection.description}
            </p>
            <Link href={rightSection.buttonLink}>
              <Button className="bg-white text-black hover:bg-gray-100 px-6 md:px-10 py-2 md:py-3 text-base md:text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl w-full">
                {rightSection.buttonText}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
