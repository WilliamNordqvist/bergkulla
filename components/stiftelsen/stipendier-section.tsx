import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface StipendierSectionProps {
  data: {
    title: string;
    description: string;
    contactEmail: string;
    stipendiumData: Array<{
      year: string;
      items: string[];
    }>;
  };
}

export const StipendierSection = ({ data }: StipendierSectionProps) => {
  const getPreviewText = (items: string[]) => {
    const fullText = items.join(", ");
    if (fullText.length > 100) {
      return fullText.substring(0, 100) + "...";
    }
    return fullText;
  };

  return (
    <section id="stipendier" className="py-24 sm:py-32 bg-[#E5E9EB]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {data.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Stipendier kan sökas genom att maila till{" "}
            <a
              href={`mailto:${data.contactEmail}`}
              className="text-blue-600 hover:underline font-semibold"
            >
              {data.contactEmail}
            </a>
            . Nedan listas de stipendier och miljöinvesteringar som stiftelsen
            har delat ut genom åren.
          </p>
        </div>
        <div className="mt-16 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {data.stipendiumData.map((entry) => (
              <AccordionItem
                value={entry.year}
                key={entry.year}
                className="border border-gray-300 rounded-lg bg-white overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col items-start text-left w-full pr-4">
                    <span className="text-lg font-semibold text-gray-900">
                      {entry.year}
                    </span>
                    <span className="text-sm text-gray-500 mt-1 line-clamp-2">
                      {getPreviewText(entry.items)}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 pt-0">
                  <ul className="list-disc pl-5 space-y-3 text-base text-gray-600">
                    {entry.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
