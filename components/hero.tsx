"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Link from "next/link";
import { RollingBanner } from "@/components/rolling-banner";

export const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <RollingBanner />
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{ transform: `translateY(${scrollPosition * 0.5}px)` }}
        >
          <Image
            src="/images/hero.jpg"
            alt="Bergkulla stugby vid havet - Exklusivt långtidsboende på Åland"
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
            quality={100}
            priority
          />
        </div>
        <div className="absolute inset-0 bg-[#2C3539]/40 z-[1]" />
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(44,53,57,0.5) 0%, rgba(44,53,57,0) 70%)",
          }}
        />

        <div className="relative z-10 text-center text-white p-6 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 [text-shadow:0_2px_5px_rgba(0,0,0,0.5)]">
            Välkommen till Bergkulla på Åland
          </h1>
          <p className="text-lg md:text-xl mb-8 [text-shadow:0_1px_3px_rgba(0,0,0,0.5)]">
            Moderna stugor 10.800€ per år
          </p>
          <Link href="/contact">
            <Button className="bg-[#FAF9F6] text-[#2C3539] hover:bg-[#F5F5F0] text-lg px-8 py-3">
              Kontakta oss
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};
