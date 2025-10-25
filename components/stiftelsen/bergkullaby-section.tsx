import { CheckCircle } from "lucide-react";

const privileges = [
  "fiska i havet från vår egen brygga/båthus",
  "fiska kräftor och harr i våra egna sjöar och dammar",
  "använda båtar och kanoter",
  "spela på vår egen tennisbana med naturgräs",
  "använda bastur och gästrum",
  "använda den väl utrustade gemensamma tvättstugarna",
  "använda Storhuset för fester och storhushåll (rymmer 50 pers)",
];

export const BergkullabySection = () => {
  return (
    <section id="bergkullaby" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Hyr hus på Åland i Bergkullaby
          </h2>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Bergkullastiftelsen bygger tillsammans med Bergkullaby Ab nio hus på
            Bergkullaområdet i Bertbyvik, Saltvik på Åland.
          </p>
        </div>
        <div className="mt-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
            <div className="space-y-6 text-base text-gray-600">
              <p>
                Vi har godkänd detaljplan för nio hus, varav tre är inflyttade
                och bebos av fast boende hyresgäster på Åland. Två hus är under
                uppförande. De två senaste husen är vardera på ca 92 kvm i två
                plan och rymmer fyra rum och kök. Planritningar kommer att
                finnas under rubriken Bildgalleri.
              </p>
              <p>
                Alla hus är extremt väl isolerade för att minimera
                energiåtgången. Intill varje hus har vi en solvändare, som
                följer solen i 180 grader, för produktion av varmvatten både för
                husets tappvarmvatten och för värmning av golvslingorna. När
                solen inte förslår så har vi installerat vattenmantlade
                kökspannor som värmer vattenmagasin på 500 liter. Kökspannan är
                vedeldad och kan även användas för matlagning. Vid extrem kyla
                kopplas en el-värmepatron in.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 !mt-10">
                Förutsättningar
              </h3>
              <p>
                Enligt Åländsk lag får vi hyra ut husen på max fem år åt gången.
                Om du har åländsk hembygdsrätt så gäller normala hyresavtal utan
                begränsning i tid. Läs mer om åländsk hembygdsrätt.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Privilegier för dig som bor hos oss
              </h3>
              <ul className="space-y-4">
                {privileges.map((privilege, index) => (
                  <li key={index} className="flex items-start text-base">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{privilege}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-base text-gray-600">
                Gemenskapen tillhandahåller en elbil (golfbil) för transport av
                varor och personer från den gemensamma carportsbyggnaden till
                respektive hus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
