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
          <p className="mt-8 text-xl leading-9 text-gray-600">
            Bergkullastiftelsen verkar för hållbar energianvändning genom att bl.a. ge stöd till utveckling av energiproduktion och distribution och till att utveckla rening av avlopp från enskilda hushåll som inte kan få anslutning till centrala reningsverk. Stiftelsen verkar huvudsakligen på Åland.
          </p>
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <div className="bg-[#E5E9EB] rounded-2xl p-6 md:p-8">
            <p className="text-lg text-gray-700 mb-6">
              Har du frågor om stiftelsen eller vill söka stipendium? Kontakta oss gärna!
            </p>
            <a
              href="mailto:styrelsen@bergkulla.ax"
              className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              styrelsen@bergkulla.ax
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export const VideoSection = () => {
  return (
    <section id="videos" className="py-24 sm:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Videor om Bergkullastiftelsen
          </h2>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-8 gap-x-8">
            <div className="h-auto md:h-[400px]">
              <VideoEmbed youtubeId="X3UttJoh08M" />
            </div>
            <div className="h-auto md:h-[400px]">
              <VideoEmbed youtubeId="YeFAZs_kBiw" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
