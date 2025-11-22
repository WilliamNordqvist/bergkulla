interface EkonomiSectionProps {
  data: {
    title: string;
    cards: Array<{
      title: string;
      description: string;
    }>;
    stipendierFooter: {
      title: string;
      description: string;
    };
  };
}

export const EkonomiSection = ({ data }: EkonomiSectionProps) => {
  return (
    <section id="ekonomi" className="py-24 sm:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {data.title}
          </h2>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.cards.map((card, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-base text-gray-600">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gray-900 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-semibold text-white mb-3">{data.stipendierFooter.title}</h3>
            <p className="text-base text-gray-300">
              {data.stipendierFooter.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
