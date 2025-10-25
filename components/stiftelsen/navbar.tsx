"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#om-stiftelsen", label: "Om Stiftelsen" },
  { href: "#bergkullaby", label: "Bergkullaby" },
  { href: "#ekonomi", label: "Ekonomi" },
  { href: "#stipendier", label: "Stipendier" },
];

export const StiftelsenNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 w-full border-b border-transparent transition-all duration-300",
        {
          "bg-white/80 backdrop-blur-md border-gray-200": isScrolled,
        }
      )}
    >
      <div className="container mx-auto flex items-center justify-center h-16">
        <div className="flex flex-wrap justify-center space-x-4 md:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
