export const Footer = () => {
  return (
    <footer className="p-10 bg-[#040B1C] md:p-16">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 lg:gap-32 mb-12">
          <div className="space-y-6">
            <a href="#" className="inline-block">
              <h2 className="text-2xl font-serif text-white">
                Bergkullastiftelsen
              </h2>
            </a>
            <div className="space-y-2">
              <div className="text-gray-300">
                <p>Hamnsundsvägen 523, Bertbyvik</p>
                <p>AX-22430 Saltvik, Åland</p>
              </div>
              <a
                href="mailto:niclas@bergkulla.ax"
                className="text-white hover:underline block transition-all"
              >
                niclas@bergkulla.ax
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-xl text-white">
                Hyrorna är från 550€ per månad
              </p>
              <p className="text-gray-300">Endast elförbrukning tillkommer</p>
            </div>

            <div className="space-y-2">
              <p className="text-lg text-white">Intresserad av långtidshyra?</p>
              <p className="text-gray-300">
                Kontakta oss för mer information om lediga stugor och
                uthyrningsvillkor.
              </p>
            </div>
          </div>

          <div className="h-[200px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1968.2847472006456!2d20.090654315655517!3d60.34333045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468aedf99b34d645%3A0x1cef5cf6d99d381e!2sBergkula%20Stiftelse!5e0!3m2!1ssv!2sfi!4v1708701234567!5m2!1ssv!2sfi"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <span className="text-sm text-gray-500">
            © {new Date().getFullYear()}{" "}
            <a href="#" className="hover:text-white transition-colors">
              Bergkullastiftelsen
            </a>
            . Alla rättigheter förbehållna.
          </span>
        </div>
      </div>
    </footer>
  );
};
