import Image from "next/image";
import { WaveDivider } from "@/components/ui/wave-divider";
import Link from "next/link";

export const Intro = () => {
  return (
    <div className="w-full">
      <WaveDivider fill="#E5E9EB" />
      <section className="bg-[#E5E9EB] py-12 md:py-24 lg:py-40">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="space-y-8 lg:space-y-12 px-4 md:px-8 order-first">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight text-[#2C3539]">
              BO PÅ BERGKULLA
            </h2>
            <div className="space-y-6 md:space-y-8 text-[#4A4A4A] text-base md:text-lg leading-relaxed">
              <p>
                På Bergkulla erbjuder vi ett unikt fritidshus i hjärtat av den
                åländska skärgården. Här möts modern komfort och traditionell
                charm i en tidlös miljö.
              </p>
              <p>
                Beläget i natursköna Saltvik, endast 30 minuter från Mariehamn,
                är detta den perfekta platsen för dig som söker ett
                högkvalitativt fritidshus i harmoni med naturen.
              </p>
              <p>
                Våra moderna stugor erbjuder alla bekvämligheter du behöver för
                en bekväm och inspirerande vistelse i skärgården, långt från
                storstadens intensiva brus.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] md:aspect-[16/9] lg:aspect-[3/2] w-full lg:w-[45vw] ml-auto order-last">
            <Image
              src="/images/intro-1.jpg"
              alt="Bergkulla stugor i skärgårdsmiljö"
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

      <section className="py-12 md:py-24 lg:py-40">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="relative aspect-[4/3] md:aspect-[16/9] lg:aspect-[3/2] w-full lg:w-[45vw] order-last lg:order-first">
            <Image
              src="/images/intro-2.jpg"
              alt="Bergkullas faciliteter"
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
              FACILITETER
            </h2>
            <div className="space-y-6 md:space-y-8 text-[#4A4A4A] text-base md:text-lg leading-relaxed">
              <p>
                Som boende på Bergkulla får du tillgång till en rad exklusiva
                faciliteter som gör din vistelse extra speciell:
              </p>
              <ul>
                <li className="flex items-center gap-3 before:content-['•'] before:text-[#E5E5E5] before:text-2xl before:leading-none">
                  Tillgång till båthus med egen brygga och båt
                </li>
                <li className="flex items-center gap-3 before:content-['•'] before:text-[#E5E5E5] before:text-2xl before:leading-none">
                  Tennisplan för aktiva stunder
                </li>
                <li className="flex items-center gap-3 before:content-['•'] before:text-[#E5E5E5] before:text-2xl before:leading-none">
                  Avkopplande vedeldad bastu i båthuset
                </li>
                <li className="flex items-center gap-3 before:content-['•'] before:text-[#E5E5E5] before:text-2xl before:leading-none">
                  Höghastighetsnätverk för distansarbete
                </li>
                <li className="flex items-center gap-3 before:content-['•'] before:text-[#E5E5E5] before:text-2xl before:leading-none">
                  Ålands stora utbud av fritidsaktiviteter
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider fill="#E5E9EB" />

      <section className="bg-[#E5E9EB] py-12 md:py-24 lg:py-40">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="space-y-8 lg:space-y-12 px-4 md:px-8 order-first">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight text-[#2C3539]">
              VÅR HISTORIA
            </h2>
            <div className="space-y-6 md:space-y-8 text-[#4A4A4A] text-base md:text-lg leading-relaxed">
              <p>
                Bergkulla är en stiftelse som drivits av samma familj i
                generationer. Vi värnar om att bevara områdets unika karaktär
                och naturvärden, samtidigt som vi erbjuder modern komfort i våra
                stugor.
              </p>
              <p>
                Här skapar vi en perfekt balans mellan tradition och nutid, där
                du kan njuta av både lugnet i skärgården och bekvämligheten av
                moderna faciliteter.
              </p>
              <p>
                Vår passion för att dela denna unika plats med andra har drivit
                oss att kontinuerligt förbättra och utveckla Bergkulla, alltid
                med respekt för naturen och områdets historia.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] md:aspect-[16/9] lg:aspect-[3/2] w-full lg:w-[45vw] ml-auto order-last">
            <Image
              src="/images/intro-3.jpg"
              alt="Historiska Bergkulla"
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

      <section className="py-52 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight text-[#2C3539] mb-6">
            BOKA DIN VISTELSE
          </h2>
          <p className="text-[#4A4A4A] text-lg">
            Är du intresserad av att hyra ett fritidshus i den åländska
            skärgården? Kontakta oss om du vill boka eller om du har några
            frågor om våra stugor på Bergkulla.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#2C3539] text-white px-8 py-4 rounded-md text-lg font-medium mt-8"
          >
            Boka idag
          </Link>
        </div>
      </section>
    </div>
  );
};
