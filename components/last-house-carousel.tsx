"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Slider, { Settings } from "react-slick";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type ImageType = {
  src: string;
  alt: string;
};

export const LastHouseCarousel = () => {
  const [images, setImages] = useState<ImageType[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/last-house-images");
        if (!response.ok) throw new Error("Failed to fetch images");
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Error fetching last house images:", error);
      }
    };

    fetchImages();
  }, []);

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
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
              className="relative aspect-[3/2] cursor-pointer"
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(true);
              }}
            >
              <Image
                src={image.src}
                alt={`Sista lediga huset - ${image.alt}`}
                fill
                sizes="(max-width: 768px) 95vw, 672px"
                style={{ objectFit: "cover" }}
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
