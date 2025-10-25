export const EkonomiSection = () => {
  return (
    <section id="ekonomi" className="py-24 sm:py-32 bg-[#E5E9EB]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Stiftelsens Ekonomi
          </h2>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Stiftelsens tillgångar är placerade i värdepapper och i fastigheter. Placeringarna ger överskott efter avskrivningar. Balansräkningen per december 2018 visar att Stiftelsen har tillgångar på 923 T€, exklusive orealiserade värden i fastigheter och aktier.
          </p>
        </div>
        <div className="mt-16 max-w-6xl mx-auto">
          <ul className="space-y-8 text-base text-gray-600">
            <li>
              <h3 className="font-semibold text-gray-800">Fastigheter</h3>
              <p className="mt-2">
                Stiftelsen äger fastigheterna Bergkulla 1:79, genom gåva från familjen Nordqvist, och Sandkärr 1:29, genom köp, i Saltvik på Åland. För Bergkullafastigheten har detaljplan fastställts. På fastigheten Bergkulla 1:79 har sju tomter bildats av vilka sex hyrs ut med 100-årigt arrende. Fem av tomterna är bebyggda. En är obebyggd och uthyrd till Stiftelsens grundare, Leif Nordqvist. Den sjunde utgör tomt för Stiftelsens egen byggnad, Storhuset. För fastigheten Sandkärr 1:29 är detaljplanen för 9 nya tomter beviljad. Tomterna hyrs ut tillsammans med de hus som Bergkullaby AB bygger och hyr ut på fastigheten.
              </p>
            </li>
            <li>
              <h3 className="font-semibold text-gray-800">Storhuset</h3>
              <p className="mt-2">
                Stiftelsen äger Storhuset på Bergkulla. Huset i två plan är ca 150 kvm och hyrs ut för fester och konferenser med möjlighet till mathållning för ca 50 personer. I Storhuset är installerat en värmepump, typ Ispinnen, som får energi från ett system med luftade aluprofiler. Vi har tidigare prövat två andra värmepumpar från bolag vars tillverkning eller service sedan upphörde.
              </p>
            </li>
            <li>
              <h3 className="font-semibold text-gray-800">Energiinvesteringar</h3>
              <p className="mt-2">
                Stiftelsens vindkraftverk som byggdes 2003 har nu avvecklats. En sektion av tornet, ca 6 m, kommer att stå kvar som utsiktstorn. Ett nytt solkraftverk har inköpts och monterats på carportarnas tak, med 110 celler på 250 watt. Verket kommer att producera ca 20 000 kWh/år.
              </p>
            </li>
            <li>
                <h3 className="font-semibold text-gray-800">Lokalt engagemang</h3>
                <p className="mt-2">
                    Stiftelsen stödjer det lokala föreningslivet på Åland.
                </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
