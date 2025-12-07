"use client";

import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { ArrowRight } from "lucide-react";

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
      <Link
        href={leftSection.buttonLink}
        className="relative flex-1 overflow-hidden group cursor-pointer"
      >
        <Image
          src={urlFor(leftSection.image).url()}
          alt={leftSection.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority
        />
        {/* Subtle gradient overlay at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Content at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 md:pb-16">
          <span className="text-xs font-medium text-white/70 uppercase tracking-widest mb-3 block">
            {leftSection.category}
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 leading-tight min-h-[64px] md:min-h-[88px]">
            {leftSection.title}
          </h2>
          <p className="text-white/80 text-sm md:text-base max-w-md mb-4 h-[40px] md:h-[48px] line-clamp-2">
            {leftSection.description}
          </p>
          <span className="inline-flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all duration-300">
            {leftSection.buttonText}
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>

        {/* Vertical divider line (visible on desktop) */}
        <div className="hidden md:block absolute right-0 top-1/4 bottom-1/4 w-px bg-white/20" />
      </Link>

      {/* Right side - Stuguthyrning */}
      <Link
        href={rightSection.buttonLink}
        className="relative flex-1 overflow-hidden group cursor-pointer"
      >
        <Image
          src={urlFor(rightSection.image).url()}
          alt={rightSection.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority
        />
        {/* Subtle gradient overlay at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Content at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 md:pb-16">
          <span className="text-xs font-medium text-white/70 uppercase tracking-widest mb-3 block">
            {rightSection.category}
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 leading-tight min-h-[64px] md:min-h-[88px]">
            {rightSection.title}
          </h2>
          <p className="text-white/80 text-sm md:text-base max-w-md mb-4 h-[40px] md:h-[48px] line-clamp-2">
            {rightSection.description}
          </p>
          <span className="inline-flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all duration-300">
            {rightSection.buttonText}
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </Link>
    </div>
  );
};
