import Image from "next/image";
import { WaveDivider } from "@/components/ui/wave-divider";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface IntroSection {
  title: string;
  content: string[];
  bulletPoints?: string[];
  image: SanityImageSource;
  imageAlt: string;
}

interface IntroProps {
  sections: IntroSection[];
  ctaSection: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
}

export const Intro = ({ sections, ctaSection }: IntroProps) => {
  return (
    <div className="w-full">
      <WaveDivider fill="#E5E9EB" />

      {/* First section - BO PÅ BERGKULLA */}
      <section className="bg-[#E5E9EB] py-12 md:py-24 lg:py-40">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="space-y-8 lg:space-y-12 px-4 md:px-8 order-first">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight text-[#2C3539]">
              {sections[0].title}
            </h2>
            <div className="space-y-6 md:space-y-8 text-[#4A4A4A] text-base md:text-lg leading-relaxed">
              {sections[0].content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] md:aspect-[16/9] lg:aspect-[3/2] w-full lg:w-[45vw] ml-auto order-last">
            <Image
              src={urlFor(sections[0].image).url()}
              alt={sections[0].imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 95vw, 45vw"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              className="hover:scale-[1.02] transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      <WaveDivider rotate fill="#E5E9EB" />

      {/* Second section - FACILITETER */}
      <section className="py-12 md:py-24 lg:py-40">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="relative aspect-[4/3] md:aspect-[16/9] lg:aspect-[3/2] w-full lg:w-[45vw] order-last lg:order-first">
            <Image
              src={urlFor(sections[1].image).width(1200).quality(90).url()}
              alt={sections[1].imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 95vw, 45vw"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              className="hover:scale-[1.02] transition-transform duration-700"
            />
          </div>
          <div className="space-y-8 lg:space-y-12 px-4 md:px-8 order-first lg:order-last">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight text-[#2C3539]">
              {sections[1].title}
            </h2>
            <div className="space-y-6 md:space-y-8 text-[#4A4A4A] text-base md:text-lg leading-relaxed">
              {sections[1].content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              {sections[1].bulletPoints && (
                <ul>
                  {sections[1].bulletPoints.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 before:content-['•'] before:text-[#E5E5E5] before:text-2xl before:leading-none">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>

      <WaveDivider fill="#E5E9EB" />

      {/* Third section - VÅR HISTORIA */}
      <section className="bg-[#E5E9EB] py-12 md:py-24 lg:py-40">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="space-y-8 lg:space-y-12 px-4 md:px-8 order-first">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight text-[#2C3539]">
              {sections[2].title}
            </h2>
            <div className="space-y-6 md:space-y-8 text-[#4A4A4A] text-base md:text-lg leading-relaxed">
              {sections[2].content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] md:aspect-[16/9] lg:aspect-[3/2] w-full lg:w-[45vw] ml-auto order-last">
            <Image
              src={urlFor(sections[2].image).url()}
              alt={sections[2].imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 95vw, 45vw"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              className="hover:scale-[1.02] transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      <WaveDivider rotate fill="#E5E9EB" />

      {/* Final CTA Section */}
      <section className="py-52 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight text-[#2C3539] mb-6">
            {ctaSection.title}
          </h2>
          <p className="text-[#4A4A4A] text-lg">
            {ctaSection.description}
          </p>
          <Link
            href={ctaSection.buttonLink}
            className="inline-block bg-[#2C3539] text-white px-8 py-4 rounded-md text-lg font-medium mt-8"
          >
            {ctaSection.buttonText}
          </Link>
        </div>
      </section>
    </div>
  );
};
