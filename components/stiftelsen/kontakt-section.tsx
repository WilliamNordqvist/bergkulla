export const KontaktSection = () => {
  return (
    <section id="kontakt" className="py-8 sm:py-12 bg-[#E5E9EB]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
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
