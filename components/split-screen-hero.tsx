import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const SplitScreenHero = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-black">
      <div className="relative flex-1 overflow-hidden">
        <Image
          src="/images/stiftelseHero.png"
          alt="Stiftelsen"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center p-8">
          <h2 className="text-4xl font-bold text-white mb-4">Stiftelsen</h2>
          <p className="text-white text-center mb-6 max-w-md">
            Läs mer om Bergkullastiftelsens arbete för hållbar energi,
            avfallshantering och sök stipendium.
          </p>
          <Link href="/stiftelsen">
            <Button
              variant="default"
              className="bg-gray-100 text-gray-800 hover:bg-gray-200 px-10 py-3 text-lg"
            >
              Gå till Stiftelsen
            </Button>
          </Link>
        </div>
      </div>
      <div className="relative flex-1 overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Bergkulla"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center p-8">
          <h2 className="text-4xl font-bold text-white mb-4">Bergkulla</h2>
          <p className="text-white text-center mb-6 max-w-md">
            Upptäck våra exklusiva fritidshus och boka din nästa vistelse på
            Bergkulla.
          </p>
          <Link href="/bergkulla">
            <Button
              variant="default"
              className="bg-gray-100 text-gray-800 hover:bg-gray-200 px-10 py-3 text-lg"
            >
              Gå till Bergkulla
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
