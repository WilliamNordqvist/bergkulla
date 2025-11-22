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

interface OmStiftelsenSectionProps {
  data: {
    title: string;
    description: string;
    contactBoxText: string;
    contactEmail: string;
  };
}

export const OmStiftelsenSection = ({ data }: OmStiftelsenSectionProps) => {
  return (
    <section id="om-stiftelsen" className="py-24 sm:py-32 bg-[#E5E9EB]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {data.title}
          </h2>
          <p className="mt-8 text-xl leading-9 text-gray-600">
            {data.description}
          </p>
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <div className="bg-[#E5E9EB] rounded-2xl p-6 md:p-8">
            <p className="text-lg text-gray-700 mb-6">
              {data.contactBoxText}
            </p>
            <a
              href={`mailto:${data.contactEmail}`}
              className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {data.contactEmail}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

interface VideoSectionProps {
  data: {
    title: string;
    videoIds: Array<{
      youtubeId: string;
      title: string;
    }>;
  };
}

export const VideoSection = ({ data }: VideoSectionProps) => {
  return (
    <section id="videos" className="py-24 sm:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {data.title}
          </h2>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-8 gap-x-8">
            {data.videoIds.map((video, index) => (
              <div key={index} className="h-auto md:h-[400px]">
                <VideoEmbed youtubeId={video.youtubeId} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
