"use client";

import React, { useState } from "react";
import Image from "next/image";
import Slider, { Settings } from "react-slick";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

type ImageType = {
  src: string;
  alt: string;
};

interface ImageCarouselProps {
  title: string;
  images: Array<{
    image: SanityImageSource;
    alt: string;
  }>;
}

export const ImageCarousel = ({ title, images: sanityImages }: ImageCarouselProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const sliderRef = React.useRef<Slider>(null);

  // Convert Sanity images to the format expected by the component
  const images: ImageType[] = sanityImages.map(img => ({
    src: urlFor(img.image).url(),
    alt: img.alt,
  }));

  const settings: Settings = {
    lazyLoad: "ondemand",
    infinite: true,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0px",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div className="py-20 md:py-32 lg:py-40 overflow-hidden">
      <div className="text-center mb-8 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight text-[#2C3539]">
          {title}
        </h2>
      </div>

      <div className="mx-auto">
        <Slider ref={sliderRef} {...settings}>
          {images.map((image, index) => (
            <div key={index} className="px-1 md:px-1">
              <div
                className="relative aspect-[4/3] cursor-pointer"
                onClick={() => {
                  setPhotoIndex(index);
                  setIsOpen(true);
                }}
              >
                <Image
                  src={image.src}
                  alt={`Bergkulla ${image.alt}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          ))}
        </Slider>

        <div className="relative overflow-x-auto">
          <div className="flex gap-2 animate-scroll-x hover:pause min-w-max px-4">
            {[...images, ...images].map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 cursor-pointer transition-opacity hover:opacity-75"
                onClick={() =>
                  sliderRef.current?.slickGoTo(index % images.length)
                }
              >
                <div className="relative w-[200px] md:w-[350px] aspect-[2/1]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={photoIndex}
        slides={images}
      />
    </div>
  );
};
