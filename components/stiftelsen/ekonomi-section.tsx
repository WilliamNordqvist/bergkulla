export const EkonomiSection = () => {
  return (
    <section id="ekonomi" className="py-24 sm:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Stiftelsens Ekonomi
          </h2>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Tillgångar</h3>
              <p className="text-base text-gray-600">
                Stiftelsens tillgångar är placerade i värdepapper och i fastigheter.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fastigheter</h3>
              <p className="text-base text-gray-600">
                Stiftelsen äger fastigheterna Bergkulla 1:79 och Sandkärr 1:29. På fastigheterna finns byggnader som betalar arrende till stiftelsen.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Storhuset</h3>
              <p className="text-base text-gray-600">
                Stiftelsen äger byggnaden Storhuset på Bergkulla. Huset i två plan är ca 150 kvm och hyrs ut för fester och konferenser med möjlighet till mathållning för ca 50 personer.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Solkraftverk</h3>
              <p className="text-base text-gray-600">
                Solkraftverk har inköpts och monterats på carportarnas tak, 110 celler på 250 watt vardera. Verket producerar ca 20-30 MWh/år.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gray-900 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-semibold text-white mb-3">Stipendier</h3>
            <p className="text-base text-gray-300">
              Stiftelsens överskott används för att dela ut stipendium till personer och organisationer som verkar inom de områden som stadgarna anger.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
