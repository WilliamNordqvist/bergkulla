"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { WaveDivider } from "@/components/ui/wave-divider";
import Slider, { Settings } from "react-slick";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type ImageType = {
  src: string;
  alt: string;
};

export const ImageCarousel = () => {
  const [images, setImages] = useState<ImageType[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const sliderRef = React.useRef<Slider>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/carousel-images");
        if (!response.ok) throw new Error("Failed to fetch images");
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Error fetching carousel images:", error);
      }
    };

    fetchImages();
  }, []);

  const PrevArrow = (props: { onClick?: () => void }) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white/90 transition-all hidden xl:block"
        aria-label="Previous images"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
    );
  };

  const NextArrow = (props: { onClick?: () => void }) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white/90 transition-all hidden xl:block"
        aria-label="Next images"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    );
  };

  const settings: Settings = {
    lazyLoad: "ondemand",
    pauseOnHover: true,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    dotsClass: "slick-dots slick-thumb",
    customPaging: function (i: number) {
      return (
        <div className="relative aspect-square w-[100px]">
          <Image
            src={images[i]?.src || ""}
            alt={images[i]?.alt || ""}
            fill
            className={`rounded-lg object-cover transition-all`}
          />
        </div>
      );
    },
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <WaveDivider fill="#E5E9EB" />

      <div className="mx-auto px-4 py-16 pb-20 bg-[#E5E9EB]">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif tracking-tight text-[#2C3539]">
            UPPTÄCK BERGKULLA
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <Slider ref={sliderRef} {...settings}>
            {images.map((image, index) => (
              <div key={index} className="px-2">
                <div
                  className="relative aspect-square cursor-pointer"
                  onClick={() => {
                    setPhotoIndex(index);
                    setIsOpen(true);
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg hover:opacity-90 transition-opacity"
                  />
                </div>
              </div>
            ))}
          </Slider>

          <div className="flex justify-center gap-4 mt-6 xl:hidden">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="bg-white/80 rounded-full p-2 shadow-lg hover:bg-white/90 transition-all"
              aria-label="Previous images"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="bg-white/80 rounded-full p-2 shadow-lg hover:bg-white/90 transition-all"
              aria-label="Next images"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={photoIndex}
        slides={images}
      />
    </>
  );
};
