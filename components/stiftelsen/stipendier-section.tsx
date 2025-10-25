import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const stipendiumData = [
    {
        year: "2018",
        items: [
            "Jubileumsbastun som celebrerar Finlands 100 åriga självständighetsdag blev klar och invigd.",
            "Solkraftverket på 28000 kW är nu färdigställt och driftsatt."
        ]
    },
    {
        year: "2017",
        items: [
            "Utkikstornet med Bertbyviks bästa utsikt har färdigställts med flaggstång och kraftig stege."
        ]
    },
    {
        year: "2016",
        items: [
            "Stiftelsen sponsrar via Filmklubben Vera visningen av filmen Detta förändrar allt basserad på Naomi Kleins klimatbok med samma namn Filmen visas i Mariehamn på Bio Savoy söndagen den 20 mars kl 15.00"
        ]
    },
    {
        year: "2015",
        items: [
            "Stiftelsen har beslutat nedmontera det 15 år gamla vindkraftverket, som dels varit olönsamt under de flesta av åren och dels blivit störande för kringboende efter den senaste ombyggnaden. Vingarna bliv något felvinklade och därför uppstod missljud vid vissa vindstyrkor. Styrelsen för Stiftelsen har i stället beslutat investera 25 000 € på ett nytt 28 000 kW solkraftverk som är beställt och levererat under året. Färdigställandet sker under första kvartalet 2016."
        ]
    },
    {
        year: "2014",
        items: [
            "Helio-Zenit i Hammarland har på vårt initiativ byggt en solföljare för elproduktion. I princip i samma utförnde som den följar som värmer vatten. Produktionen blev blygsamma 1500 kWh första året, vilket inte motiverar fortsatt investering. Prototypen kostade ca 4500 € inklusiver konverter. (omvandlare från likström till 240 volt växelström)",
            "Isac Bohman har använt våra lokaler, verkstaden i Storhuset, och diverse byggmaterial för utvärdering av en ny värmepump."
        ]
    },
    {
        year: "2013",
        items: [
            "Stack AB/ Harry Lindqvist har fått 10 000 € för nya prover med syrepump för att förbättra havsbottnar."
        ]
    },
    {
        year: "2012",
        items: [
            "Stiftelsen har anordnat ett seminarium om passivhus med ägaren till varumärket Passivhus i Sverige Hans Ek och arkitekten Kimmo Lylykangas från Helsingfors som föreläsare. Föreläsningen skedde i Mariehamns Bibliotek 20 mars 2012.",
            "Erica Skott från Mariehamn har erhållit bidrag med 1860 € för finansering av kurs i hållbar utveckling.",
            "Högskolan på Åland har erhållit bidrag för information och kurser i Biogasframställning."
        ]
    },
    {
        year: "2011",
        items: [
            "Stack Ab, Harry Lindqvist har fått bidrag för fortsatt förbättring av syrepump för att förbättra sjö & havsbottnar.",
            "Björkö-Arholma Vindkraftförening i Norrtälje har fått 10 000 Skr som startbidrag för att bygga vindkraftverk på Arholma."
        ]
    },
    {
        year: "2010",
        items: [
            "Till Saltviks Kommun. Bergkullastiftelsen har reserverat ett belopp om Etthundratusen/100 000 €/ Euro för förlängning av avloppet från Kavelbro till Bergkulla. Kavelbro har anslutning till Mariehamns Reningsverk. I Mail från Danielsson 14.10.10 har kommunen svarat: Saltviks kommun kan för närvarande inte ta emot några pengar. Kommunen har en avloppsplan som har fastställts av kommunfullmäktige. Den planen sträcker sig inte till Bergkulla. För att utvidga planen krävs ett nytt fullmäktigebeslut. Som ett första steg mot en eventuell utvidgning av avloppsnätet borde vi få en bättre kalkyl än den uppskattning som Packalén gjort. Saltvik den 29 november 2010"
        ]
    },
    {
        year: "2009",
        items: [
            "Dan Jansén,Vesterkalmare, 22150 Jomala, får ett stipendium på 2 500 € för Miljöbilsprojekt. Bergkullas styrelse tog villkorat beslut i november 2008 som löd: Dan Jansén har erhållit 2500 €. Bertil har träffat Dan och fått mer information om projektet än vad som framkom i ansökan. På Bertils förslag har vi köpt batterier och laddare, som Dan sökte pengar för. Vi har ök med Dan om att han disponerar batterier och laddare under ett år. Om Dan genomför projektet och får bilen registrerad så kommer han att få köpa utrustningen för en mindre summa. Om inte så tar vi tillbaka utrustningen. Dan har godkänt förslaget. Den längre projekttiden har Styrelsen godkänt under hand. Pengarna är utbetalda. Dan har nu bilen registrerad och körklar. Villkoren i beslutet är därmed uppfyllda. Bergkullas styrelse gratulerar Dan till väl genomfört projekt. Saltvik den 29 november 2010"
        ]
    },
    {
        year: "2005-2008",
        items: [
            "Stiftelsen bekostade konsulten Trygve Packalén för utredning om förutsättningarna för avlopp till Bertbyvik och ev. även Fagervik. Packalén angav antalet fastigheter som kan behöva ansluta sig till ca 50. I uppdraget ingick att finna plats för avloppsverk och utsläpp för restvatten. Packalén förodade anslutning till Kommunens anslutning till Mariehamn. Utredningen lämnades till Saltviks Kommun som förslag till åtgärd. Kommunen svarade att Bertbyvik inte ingick i nuvarande avloppsplan.",
            "Stiftelsen har i Solhuset investerat ca 70 000 Euro i solceller, solpaneler och pelletspanna.",
            "Stiftelsen har givit stöd till Filmklubben Chaplin för visning av Al Gore-filmen, En obekväm sanning."
        ]
    },
    {
        year: "2003-2004",
        items: [
            "Stiftelsen har installerat en luftsolfångare på ett fritidshus i Eckerö, vilken värmer luften i en ”låda”. En fläkt driven med solcell för in varm och torr luften i huset, vilket motverkar mögel och fukt.",
            "Jörgen Nordberg får 4000 Euro för att pröva miljövänlig hantering av avlopp från uthyrningsstugor med multrum och urinseparering."
        ]
    },
    {
        year: "1998-2002",
        items: [
            "Stiftelsen har investerat ca 38 000 Euro i ett eget vindkraftverk, 30 kW Pitch Wind, vilket byggts på förhyrd mark, invid fastigheten Bergkulla. Verket producerar ca 60 000 kWh/år, varav ca hälften säljs till Ålands Elandelslag och resterande säljs till fastigheterna på Bergkulla. Vi säljer fler kilowatt än vi köper."
        ]
    },
    {
        year: "1996",
        items: [
            "Karl-Johan Edlund, 12 000 Fmk, för termisk solfångare.",
            "Carl-Gustav Flink, 25 000 Fmk, för kompostering av algavfall.",
            "Agenda 21, 10 000 Fmk, för seminarium och komposteringsbroschyr."
        ]
    },
    {
        year: "1994",
        items: [
            "Sten-Åke Häggblom, 10 000 Fmk, för förslag till rening av avfall från fiskodlingar.",
            "Runar Karlsson/Saltviks Kommun, 15 000 Fmk för kontroll av lakvatten från soptipp.",
            "Marcus Ojala och Frej Bomanson, 15 000 Fmk, för mätning av vattenflöde i Kvarnbo bäcken, för ev. minivattenverk.",
            "Jan Rosenberg , 5000 Fmk, för utvärdering av värmepumparna på Bergkulla."
        ]
    },
    {
        year: "1992",
        items: [
            "Imatran Voima/Tekitermo OY och Energihuset i Stockholm AB, 7 690 Fmk, för utvärdering av Folkvärmepumpen.",
            "Windside OY, 15 000 Fmk, för utveckling av 2,5 kW generator.",
            "Kjell Dahl, 7 000 Fmk, för mätningar av verkningsgraden i Windside generator.",
            "Ulla Karlsson, 10 000 Fmk, för rapport om rening av spillvatten från Reningsverk och Avfallstippar.",
            "Lennart Thyselius från Lantbruksuniversitetet i Uppsala och Conny Rosenberg, 20 000 Fmk, för utredning om Biogas på Åland."
        ]
    }
]


export const StipendierSection = () => {
    return (
      <section id="stipendier" className="py-24 sm:py-32 bg-[#E5E9EB]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Utdelade Stipendier & Miljöinvesteringar
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
                Stipendier kan sökas genom att maila till{" "}
                <a href="mailto:styrelsen@bergkulla.ax" className="text-blue-600 hover:underline font-semibold">
                    styrelsen@bergkulla.ax
                </a>
                . Nedan listas de stipendier och miljöinvesteringar som stiftelsen har delat ut genom åren.
            </p>
          </div>
          <div className="mt-16 max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {stipendiumData.map((entry) => (
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
