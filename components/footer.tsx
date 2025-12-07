interface FooterProps {
  data: {
    companyName: string;
    addressLine1: string;
    addressLine2: string;
    googleMapsEmbedUrl: string;
    copyrightText: string;
  };
}

export const Footer = ({ data }: FooterProps) => {
  return (
    <footer className="p-10 bg-[#040B1C] md:p-16">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 lg:gap-32 mb-12">
          <div className="space-y-6">
            <a href="#" className="inline-block">
              <h2 className="text-2xl font-serif text-white">
                {data.companyName}
              </h2>
            </a>
            <div className="space-y-2">
              <div className="text-gray-300">
                <p>{data.addressLine1}</p>
                <p>{data.addressLine2}</p>
              </div>
            </div>
          </div>

          <div className="h-[200px] rounded-lg overflow-hidden">
            <iframe
              src={data.googleMapsEmbedUrl}
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
            © {new Date().getFullYear()} {data.copyrightText}
          </span>
        </div>
      </div>
    </footer>
  );
};
