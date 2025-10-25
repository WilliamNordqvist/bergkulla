import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const SplitScreenHero = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-black">
      {/* Left side - Stiftelsen */}
      <div className="relative flex-1 overflow-hidden transition-all duration-500 hover:brightness-110">
        <Image
          src="/images/stiftelseHero.png"
          alt="Stiftelsen"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30 flex flex-col justify-center items-center p-4 md:p-8">
          <div className="bg-white/35 backdrop-blur-md rounded-2xl p-4 md:p-8 w-full max-w-xl mx-auto border border-white/50 flex flex-col justify-between min-h-[285px] md:min-h-[285px]">
            <span className="text-xs font-semibold text-gray-600 uppercase tracking-widest mb-4 md:mb-6 block">
              Stiftelse
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-100 mb-3 md:mb-4 text-center">Bergkullastiftelsen</h2>
            <p className="text-gray-200 text-center mb-6 md:mb-8 max-w-md text-sm md:text-base mx-auto">
              Läs mer om Bergkullastiftelsens arbete för hållbar energi,
              avfallshantering och sök stipendium.
            </p>
            <Link href="/stiftelsen">
              <Button className="bg-white text-black hover:bg-gray-100 px-6 md:px-10 py-2 md:py-3 text-base md:text-lg font-semibold transition-all duration-300 shadow-lg w-full">
                Utforska Stiftelsen
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Right side - Stuguthyrning */}
      <div className="relative flex-1 overflow-hidden transition-all duration-500 hover:brightness-110">
        <Image
          src="/images/hero.jpg"
          alt="Bergkulla"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 flex flex-col justify-center items-center p-4 md:p-8">
          <div className="bg-white/35 backdrop-blur-md rounded-2xl p-4 md:p-8 w-full max-w-xl mx-auto border border-white/50 flex flex-col justify-between min-h-[285px] md:min-h-[285px]">
            <span className="text-xs font-semibold text-gray-700 uppercase tracking-widest mb-4 md:mb-6 block">
              Stuguthyrning
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4 text-center">Stuguthyrning på Bergkulla</h2>
            <p className="text-gray-800 text-center mb-6 md:mb-8 max-w-md text-sm md:text-base mx-auto">
              Upptäck möjligheten att långtidshyra ett fritidshus<br />på Bergkulla.
            </p>
            <Link href="/bergkulla">
              <Button className="bg-white text-black hover:bg-gray-100 px-6 md:px-10 py-2 md:py-3 text-base md:text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl w-full">
                Boka Nu
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
