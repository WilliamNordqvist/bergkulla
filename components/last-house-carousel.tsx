"use client";

import React, { useState } from "react";
import Image from "next/image";
import Slider, { Settings } from "react-slick";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

type ImageType = {
  src: string;
  alt: string;
};

interface LastHouseCarouselProps {
  images: Array<{
    image: SanityImageSource;
    alt: string;
  }>;
}

export const LastHouseCarousel = ({ images: sanityImages }: LastHouseCarouselProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Convert Sanity images to the format expected by the component
  const images: ImageType[] = sanityImages.map(img => ({
    src: urlFor(img.image).url(),
    alt: img.alt,
  }));

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
        },
      },
    ],
  };

  if (images.length === 0) {
    return null;
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <div
              className="relative aspect-[4/3] cursor-pointer "
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(true);
              }}
            >
              <Image
                src={image.src}
                alt={`Bergkulla 2 - ${image.alt}`}
                fill
                sizes="(max-width: 768px) 95vw, 672px"
                style={{ objectFit: "contain" }}
                className="rounded-lg"
              />
            </div>
          </div>
        ))}
      </Slider>

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={photoIndex}
        slides={images}
      />
    </div>
  );
};
