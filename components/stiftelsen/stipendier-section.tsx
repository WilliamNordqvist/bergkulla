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
    return (
      <section id="stipendier" className="py-24 sm:py-32 bg-[#E5E9EB]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {data.title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
                Stipendier kan sökas genom att maila till{" "}
                <a href={`mailto:${data.contactEmail}`} className="text-blue-600 hover:underline font-semibold">
                    {data.contactEmail}
                </a>
                . Nedan listas de stipendier och miljöinvesteringar som stiftelsen har delat ut genom åren.
            </p>
          </div>
          <div className="mt-16 max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {data.stipendiumData.map((entry) => (
                <AccordionItem value={entry.year} key={entry.year} className="border-b border-gray-300">
                  <AccordionTrigger className="text-xl font-semibold py-6 px-4 rounded-lg transition-colors">
                    <span className="flex items-center gap-3">
                      <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 text-white text-2xl">
                        📅
                      </span>
                      {entry.year}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-6 space-y-4 text-base text-gray-600 mt-4 px-4">
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
