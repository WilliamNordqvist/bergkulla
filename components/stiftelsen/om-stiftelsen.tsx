import React from "react";

const VideoEmbed = ({ youtubeId }: { youtubeId: string }) => (
  <div className="relative w-full overflow-hidden" style={{ paddingTop: '56.25%' /* 16:9 Aspect Ratio */ }}>
    <iframe
      src={`https://www.youtube.com/embed/${youtubeId}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
    ></iframe>
  </div>
);

export const OmStiftelsenSection = () => {
  return (
    <section id="om-stiftelsen" className="py-24 sm:py-32 bg-[#E5E9EB]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Om Bergkullastiftelsen
          </h2>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Bergkullastiftelsen är en aktiv miljörörelse som verkar för sparsam
            energianvändning genom att bl.a. ge stöd till utveckling av
            alternativa förnyelsebara energislag och till att utveckla rening av
            avlopp från enskilda hushåll som inte kan få anslutning till
            centrala reningsverk.
          </p>
        </div>

        <div className="mt-20 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-8 gap-x-8 mb-8 md:mb-16">
                <div className="h-auto md:h-[400px]">
                    <VideoEmbed youtubeId="X3UttJoh08M" />
                </div>
                <div className="h-auto md:h-[400px]">
                    <VideoEmbed youtubeId="YeFAZs_kBiw" />
                </div>
            </div>

            <div className="prose prose-base mx-auto text-gray-600 max-w-5xl">
                <p>
                På den ursprungliga fastigheten Bergkulla 1:79, som Stiftelsen
                erhöll som gåva från stiftaren (Leif Nordqvist) 1990, finns sedan
                tidigare 8 bostäder i fem hus, servicebyggnad med carportar,
                bastur med gästrum, tvättstuga, vedlider och sopstation.
                </p>
                <p>
                Storhuset innehåller fest- och konferenslokaler med full
                restaurangutrustning för max 50 personer. I Storhusets souterräng
                finns bibliotek med ca 2000 böcker, enklar gymutrustning och
                biljardbord. Dessutom finns i Storhusets källare serviceverkstad
                för fastigheternas underhåll och skötsel. Stiftelsen äger ett
                mindre båthus som 2018 kompletterades med en "modern" bastu.
                </p>
                <p>
                Stiftelsen köpte 2008 grannfastigheten Sandkärr 1:29. Stiftelsen
                har upprättat en detaljplan för bebyggelse på nämnda fastighet. Då
                byggnadernas användning på den gamla fastigheten Bergkulla 1:79
                och på den nya Sankärr 1:29 kompletterar varandra innefattar den
                nya detaljplanen även ändringar i den gamla bebyggelsen. Total
                ger planen tillstånd för nio hus på Sandkarr 1:29 och ett nytt
                hus på Bergkulla 1:79. Läs mer under fliken Bergkullaby.
                </p>
                <p>
                Stiftelsen sålde 1 januari 2015 ett färdigbyggt enfamiljshus och
                två under byggnad på Sandkärr 1:29 till ett nybildat bolag,
                Bergkullaby AB *. Stiftelsen äger marken, vägar, ledningar i
                mark, och reningsverk. Två ytterligare hus är under byggnad i
                Bergkullabys regi. Bergkullaby hyr ut husen på Sandkärr på normala
                hyresavtal.
                </p>
                <p className="text-sm italic">
                * Bergkullaby AB ägs av familjen Nordqvists bolag i Sverige,
                Nordqvist Homes AB
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};
